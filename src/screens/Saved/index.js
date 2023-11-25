import { FlatList, Text, View } from 'react-native';
import { useContext, useState } from 'react';

import styles from './styles';
import DefaultLayout  from '../../components/Layouts/DefaultLayout';
import Search from '../../components/Search';
import CarItem from '../../components/CarItem';
import { CarContext } from '../../store/Context';
import COLORS from '../../components/Colors';

function Saved() {
    const { savedCars } = useContext(CarContext);

    const [searchValue, setSearchValue] = useState('');

    return (
        <View style={{ ...styles.container, backgroundColor: COLORS.white }}>
            <DefaultLayout
                headerText="Saved"
                headerStyle={{ paddingLeft: 20 }}
                headerTextStyle={{ fontSize: 20, fontWeight: 'bold' }}
            >
                <View>
                    <Search
                        height={60}
                        style={{ marginTop: 20, paddingHorizontal: 20 }}
                        value={searchValue}
                        onChangeText={(text) => setSearchValue(text)}
                        onPressSearch={() => console.log('search')}
                        onPressFilter={() => console.log('filter')}
                    />
                </View>

                <FlatList
                    data={savedCars}
                    renderItem={({ item }) => <CarItem car={item} />}
                    keyExtractor={(item) => item.id}
                    columnWrapperStyle={{
                        justifyContent: 'space-between',
                        marginBottom: 20,
                        marginHorizontal: 20,
                    }}
                    ListFooterComponent={<View style={{ height: 100 }} />}
                    ListHeaderComponent={<View style={{ height: 20 }} />}
                    numColumns={2}
                />
            </DefaultLayout>
        </View>
    );
}

export default Saved;
