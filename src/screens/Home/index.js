import { useContext } from 'react';
import { FlatList, Image, Text, View } from 'react-native';

import styles from './styles';
import Banner from '../../components/Banner';
import Button from '../../components/Button';
import CarItem from '../../components/CarItem';
import COLORS from '../../components/Colors';
import DefaultLayout from '../../components/Layouts/DefaultLayout';
import Menu from '../../components/Menu';
import Search from '../../components/Search';
import { CarContext } from '../../store/Context';

function Home() {
    const { cars, brands, darkTheme } = useContext(CarContext);
    const ViewTop = () => {
        return (
            <>
                <View style={styles.content}>
                    <Banner />
                </View>
                <View style={styles.brandWrapper}>
                    <Text
                        style={{
                            ...styles.title,
                            color: darkTheme ? COLORS.white : COLORS.black,
                            marginBottom: 10,
                        }}
                    >
                        Popular car brands
                    </Text>
                    <FlatList
                        data={brands}
                        renderItem={({ item }) => (
                            <Button
                                style={{
                                    ...styles.item,
                                    backgroundColor: COLORS.white,
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
            </>
        );
    };

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: darkTheme ? COLORS.black : COLORS.white,
            }}
        >
            <DefaultLayout CustomHeader={<Menu style={styles.menu} />}>
                <View style={styles.content}>
                    <Search height={70} style={{ marginBottom: 30 }} />
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
                    ListFooterComponent={<View style={{ height: 200 }} />}
                    ListHeaderComponent={<ViewTop />}
                    numColumns={2}
                />
            </DefaultLayout>
        </View>
    );
}

export default Home;
