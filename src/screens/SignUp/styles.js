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
        marginTop: 10,
    },
    policy: {
        marginTop: 30,
        marginLeft: 5,
        flexDirection: 'row',
    },
    checkbox: {
        borderRadius: 6,
    },
    policyText: {
        marginLeft: 8,
    },
    policyTerms: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    btnSignUp: {
        marginTop: 70,
    },
});

export default styles;
