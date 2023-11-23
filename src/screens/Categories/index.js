import { FlatList, Image, Text, View } from 'react-native';
import { useContext, useState } from 'react';

import styles from './styles';
import Button from '../../components/Button';
import CarItem from '../../components/CarItem';
import DefaultLayout from '../../components/Layouts/DefaultLayout';
import Search from '../../components/Search';
import COLORS from '../../components/Colors';
import { CarContext } from '../../store/Context';

function Categories() {
    const { cars, brands, darkTheme } = useContext(CarContext);
    const [searchValue, setSearchValue] = useState('');
    console.log(searchValue);

    const BrandView = () => {
        return (
            <View style={styles.brandWrapper}>
                <Text
                    style={{
                        ...styles.title,
                        color: darkTheme ? COLORS.white : COLORS.black,
                    }}
                >
                    Brands
                </Text>
                <FlatList
                    data={brands}
                    renderItem={({ item }) => (
                        <Button
                            style={{
                                ...styles.item,
                                backgroundColor: '#fff',
                            }}
                        >
                            <Image
                                source={{ uri: item.img }}
                                style={{ width: 60, height: 60 }}
                            />
                        </Button>
                    )}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                />
            </View>
        );
    };

    return (
        <View
            style={{
                ...styles.container,
                backgroundColor: darkTheme ? COLORS.black : COLORS.white,
            }}
        >
            <DefaultLayout
                headerText="Categories"
                headerStyle={{ paddingLeft: 20 }}
                headerTextStyle={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: darkTheme ? COLORS.white : COLORS.black,
                }}
            >
                <View style={styles.content}>
                    <Search
                        height={60}
                        style={{ marginTop: 20 }}
                        value={searchValue}
                        onChangeText={(text) => setSearchValue(text)}
                        onPressSearch={() => console.log('search')}
                        onPressFilter={() => console.log('filter')}
                    />
                </View>

                <FlatList
                    data={cars}
                    renderItem={({ item }) => <CarItem car={item} />}
                    keyExtractor={(item) => item.id}
                    columnWrapperStyle={{
                        justifyContent: 'space-between',
                        marginBottom: 20,
                        marginHorizontal: 20,
                    }}
                    ListHeaderComponent={<BrandView />}
                    ListFooterComponent={<View style={{ height: 200 }} />}
                    numColumns={2}
                />
            </DefaultLayout>
        </View>
    );
}

export default Categories;
