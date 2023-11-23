import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },

    brandWrapper: {
        marginBottom: 30,
        paddingHorizontal: 20,
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    item: {
        padding: 20,
        marginVertical: 8,
        marginRight: 16,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },

    content: {
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
});

export default styles;
