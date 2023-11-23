import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import COLORS from '../Colors';
import routes from '../../routes';

function MyTabs() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            {routes.map((route, index) => {
                const Icon = route.icon;
                return (
                    <Tab.Screen
                        key={index}
                        name={route.name}
                        component={route.component}
                        options={{
                            tabBarIcon: ({ focused }) =>
                                focused ? (
                                    <Icon color={COLORS.primary} />
                                ) : (
                                    <Icon color={COLORS.textColor} />
                                ),
                            tabBarLabel: ({ focused }) => {
                                return focused ? (
                                    <Text style={{ color: COLORS.primary }}>
                                        {route.name}
                                    </Text>
                                ) : (
                                    <Text
                                        style={{
                                            color: COLORS.textColor,
                                        }}
                                    >
                                        {route.name}
                                    </Text>
                                );
                            },
                        }}
                    />
                );
            })}
        </Tab.Navigator>
    );
}

export default MyTabs;
