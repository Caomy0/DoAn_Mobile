const { StyleSheet, StatusBar } = require('react-native');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        padding: 20,
    },
    login: {
        fontSize: 16,
        alignSelf: 'center',
    },
    forgot: {
        alignSelf: 'center',
        marginTop: 20,
    },
});

export default styles;
