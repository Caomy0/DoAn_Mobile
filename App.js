import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Provider from './src/store/Provider';
import MyTabs from './src/components/MyTabs';
import { LoginScreen, SignUpScreen, CarDetailScreen } from './src/screens';

function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Home" component={LoginScreen} />

                <Stack.Screen name="SignUpScreen" component={SignUpScreen} />

                <Stack.Screen name="Main" component={MyTabs} />

                <Stack.Screen name="CarDetail" component={CarDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default () => {
    return (
        <Provider>
            <App />
        </Provider>
    );
};
