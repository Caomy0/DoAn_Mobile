import { useContext } from 'react';
import { FlatList, View } from 'react-native';

import styles from './styles';
import CarItem from '../../components/CarItem';
import COLORS from '../../components/Colors';
import DefaultLayout from '../../components/Layouts/DefaultLayout';
import Search from '../../components/Search';
import { CarContext } from '../../store/Context';

function MyRent() {
     const { rentCars } = useContext(CarContext);

    return (
        <View style={{ ...styles.container, backgroundColor: COLORS.white }}>
            <DefaultLayout
                headerText="My Rent"
                headerStyle={{ paddingLeft: 20 }}
                headerTextStyle={{ fontSize: 20, fontWeight: 'bold' }}
            >
                <View style={{ padding: 20 }}>
                    <Search height={60} />
                </View>
                <View style={{ padding: 20 }}>
                    <FlatList
                        data={rentCars}
                        renderItem={({ item }) => (
                            <CarItem
                                car={item}
                                style={{ width: '100%', marginBottom: 10 }}
                                heightImage={200}
                                type2
                            />
                        )}
                        ListFooterComponent={<View style={{ height: 220 }} />}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </DefaultLayout>
        </View>
    );
}

export default MyRent;
