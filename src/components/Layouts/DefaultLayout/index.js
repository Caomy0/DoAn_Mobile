import { StatusBar, StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../Header';

const DefaultLayout = ({
    children,
    headerText = 'Unknown',
    CustomHeader = null,
    headerStyle = {},
    headerTextStyle = {},
}) => {
    return (
        <View style={styles.container}>
            <Header
                headerText={headerText}
                CustomHeader={CustomHeader}
                headerStyle={headerStyle}
                headerTextStyle={headerTextStyle}
            />
            <View>{children}</View>
        </View>
    );
};

export default DefaultLayout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
});
