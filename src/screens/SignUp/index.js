import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import styles from './styles';

import Checkbox from 'expo-checkbox';
import { useState } from 'react';

import Button from '../../components/Button';
import COLORS from '../../components/Colors';
import DefaultLayout from '../../components/Layouts/DefaultLayout';
import Search from '../../components/Search';
import {
    PersonIcon,
    PhoneIcon,
    MailIcon,
    PasswordIcon,
} from '../../components/Icons';

function SignUp() {
    const navigation = useNavigation();

    const [isSelected, setSelection] = useState(false);

    return (
        <View style={{ ...styles.container, backgroundColor: COLORS.white }}>
            <DefaultLayout
                headerText="Sign Up"
                headerStyle={{ alignSelf: 'center' }}
                headerTextStyle={{
                    fontSize: 25,
                    color: COLORS.primary,
                    fontWeight: 'bold',
                    marginBottom: 40,
                }}
            >
                <View>
                    <Search
                        placeholder="First Name"
                        LeftIcon={PersonIcon}
                        showBtnFilter={false}
                        height={70}
                        style={{ marginTop: 20 }}
                    />

                    <Search
                        placeholder="Last Name"
                        LeftIcon={PersonIcon}
                        showBtnFilter={false}
                        height={70}
                        style={{ marginTop: 20 }}
                    />

                    <Search
                        placeholder="Phone Number"
                        LeftIcon={PhoneIcon}
                        showBtnFilter={false}
                        height={70}
                        style={{ marginTop: 20 }}
                    />

                    <Search
                        placeholder="Email Address"
                        LeftIcon={MailIcon}
                        showBtnFilter={false}
                        height={70}
                        style={{ marginTop: 20 }}
                    />

                    <Search
                        placeholder="Password"
                        LeftIcon={PasswordIcon}
                        showBtnFilter={false}
                        height={70}
                        style={{ marginTop: 20 }}
                    />
                </View>

                <View style={styles.policy}>
                    <Checkbox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                    />

                    <Text style={styles.policyText}>
                        Accept{' '}
                        <Button>
                            <Text style={styles.policyTerms}>
                                Terms of Service{' '}
                            </Text>
                        </Button>
                        and{' '}
                        <Button>
                            <Text style={styles.policyTerms}>
                                Privacy Policy
                            </Text>
                        </Button>
                    </Text>
                </View>

                <View style={styles.btnSignUp}>
                    <Button
                        style={{
                            backgroundColor: COLORS.primary,
                            padding: 15,
                            borderRadius: 15,
                        }}
                        onPress={() => {
                            navigation.navigate('Home');
                        }}
                    >
                        <Text style={{ ...styles.login, color: COLORS.white }}>
                            Sign Up
                        </Text>
                    </Button>

                    <Button
                        onPress={() => {
                            navigation.navigate('Home');
                        }}
                    >
                        <Text
                            style={[styles.forgot, { color: COLORS.textColor }]}
                        >
                            Already have an account?{' '}
                            <Text style={{ color: COLORS.primary }}>Login</Text>
                        </Text>
                    </Button>
                </View>
            </DefaultLayout>
        </View>
    );
}

export default SignUp;
