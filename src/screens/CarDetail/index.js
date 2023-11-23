import { Alert, Image, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import Checkbox from 'expo-checkbox';

import styles from './styles';
import Button from '../../components/Button';
import {
    BackIcon,
    ShareIcon,
    LocationIcon,
    StarIcon,
} from '../../components/Icons';
import COLORS from '../../components/Colors';
import { CarContext } from '../../store/Context';

const CarDetail = ({ route }) => {
    const { car } = route.params;
    const navigation = useNavigation();
    const [isChecked1, setChecked1] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    const [isChecked3, setChecked3] = useState(false);
    const [isChecked4, setChecked4] = useState(false);
    const [isChecked5, setChecked5] = useState(false);
    const [isChecked6, setChecked6] = useState(false);

    const { rentCars, setRentCars, darkTheme } = useContext(CarContext);

    const handleRentCar = () => {
        if (rentCars.length === 0) {
            setRentCars((prev) => [...prev, car]);
            navigation.navigate('My Rent');
            return;
        } else {
            const isCarExist = rentCars.find((item) => item.id === car.id);
            if (isCarExist) {
                Alert.alert('This car is already in your rent list');
            } else {
                setRentCars((prev) => [...prev, car]);
                navigation.navigate('My Rent');
                return;
            }
        }
    };

    return (
        <View
            style={{
                ...styles.container,
                backgroundColor: darkTheme ? COLORS.black : COLORS.white,
            }}
        >
            <View style={styles.header}>
                <Button
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <BackIcon />
                </Button>
                <Button>
                    <ShareIcon />
                </Button>
            </View>
            <ScrollView style={styles.scroll}>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={{
                            uri: car.img,
                        }}
                        style={styles.carimg}
                    />
                    <View style={styles.horizontal_line}></View>
                </View>

                <View style={styles.carinfo}>
                    <View style={styles.locationWrapper}>
                        <LocationIcon />
                        <Text style={styles.locationText}>Mirpur-10,Dhaka</Text>
                    </View>
                    <Text style={styles.carname}>{car.name}</Text>
                    <View style={styles.costrateWrapper}>
                        <Text style={styles.carcost}>${car.cost}/day</Text>
                        <View style={styles.rateWrapper}>
                            <StarIcon />
                            <Text style={styles.rateText}>
                                {car.rate}(67 reviews)
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.featuresWrapper}>
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                        <Text style={styles.featureText}>Features</Text>
                        <View style={styles.feature_line}></View>
                    </View>
                    <View style={styles.sectionWrapper}>
                        <View style={styles.section}>
                            <Checkbox
                                value={isChecked1}
                                onValueChange={setChecked1}
                                style={styles.checkbox}
                                color={isChecked1 ? '#fef3e5' : undefined}
                            />
                            <Text style={styles.checkboxText}>Sensors</Text>
                        </View>
                        <View style={styles.section}>
                            <Checkbox
                                value={isChecked2}
                                onValueChange={setChecked2}
                                style={styles.checkbox}
                                color={isChecked2 ? '#fef3e5' : undefined}
                            />
                            <Text style={styles.checkboxText}>Conditioner</Text>
                        </View>
                        <View style={styles.section}>
                            <Checkbox
                                value={isChecked3}
                                onValueChange={setChecked3}
                                style={styles.checkbox}
                                color={isChecked3 ? '#fef3e5' : undefined}
                            />
                            <Text style={styles.checkboxText}>Auto temp</Text>
                        </View>
                    </View>
                    <View style={styles.sectionWrapper}>
                        <View style={styles.section}>
                            <Checkbox
                                value={isChecked4}
                                onValueChange={setChecked4}
                                style={styles.checkbox}
                                color={isChecked4 ? '#fef3e5' : undefined}
                            />
                            <Text style={styles.checkboxText}>5 Seats</Text>
                        </View>
                        <View style={styles.section}>
                            <Checkbox
                                value={isChecked5}
                                onValueChange={setChecked5}
                                style={styles.checkbox}
                                color={isChecked5 ? '#fef3e5' : undefined}
                            />
                            <Text style={styles.checkboxText}>Navigation</Text>
                        </View>
                        <View style={styles.section}>
                            <Checkbox
                                value={isChecked6}
                                onValueChange={setChecked6}
                                style={styles.checkbox}
                                color={isChecked6 ? '#fef3e5' : undefined}
                            />
                            <Text style={styles.checkboxText}>Wireless</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.cardetailWrapper}>
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                        <Text style={styles.featureText}>Car Detail</Text>
                        <View style={styles.feature_line}></View>
                    </View>
                    <View style={styles.detailWrapper}>
                        <View style={styles.carparam}>
                            <Text style={styles.paramTitle}>Color</Text>
                            <View style={styles.paramLine}></View>
                            <Text style={styles.paramDetail}>Light Grey</Text>
                        </View>
                        <View style={styles.carparam}>
                            <Text style={styles.paramTitle}>License No.</Text>
                            <View style={styles.paramLine}></View>
                            <Text style={styles.paramDetail}>NM53-BMZ</Text>
                        </View>
                        <View style={styles.carparam}>
                            <Text style={styles.paramTitle}>Plate No.</Text>
                            <View style={styles.paramLine}></View>
                            <Text style={styles.paramDetail}>22-36-65</Text>
                        </View>
                        <View style={styles.carparam}>
                            <Text style={styles.paramTitle}>Price</Text>
                            <View style={styles.paramLine}></View>
                            <Text style={styles.paramDetail}>
                                ${car.cost} USD
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.descriptionWrapper}>
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                        <Text style={styles.featureText}>Description</Text>
                        <View style={styles.feature_line}></View>
                    </View>
                    <Text style={styles.descriptionText}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </Text>
                </View>
            </ScrollView>
            <View style={styles.bookingWrapper}>
                <Button
                    style={{
                        backgroundColor: COLORS.primary,
                        padding: 10,
                        borderRadius: 10,
                    }}
                    onPress={handleRentCar}
                >
                    <Text style={styles.booking}>Booking</Text>
                </Button>
            </View>
        </View>
    );
};

export default CarDetail;
