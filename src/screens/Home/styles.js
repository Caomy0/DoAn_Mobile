import { StyleSheet } from 'react-native';
import COLORS from '../../components/Colors';

const styles = StyleSheet.create({
    content: {
        marginTop: 30,
        paddingHorizontal: 20,
    },

    menu: {
        paddingTop: 40,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    brandWrapper: {
        marginTop: 30,
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        marginHorizontal: 20,
    },

    item: {
        padding: 20,
        marginVertical: 8,
        marginRight: 16,
        borderRadius: 5,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        marginHorizontal: 20,
        marginBottom: 30,
    },
});

export default styles;
