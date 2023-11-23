import { Dimensions, StyleSheet } from 'react-native';
import COLORS from '../Colors';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        width: (windowWidth - 60) / 2,
        minHeight: 120,
        padding: 10,
        borderRadius: 10,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        justifyContent: 'space-between',
    },
    imgWrapper: {
        alignItems: 'center',
        marginBottom: 40,
        marginTop: 40,
    },
    carInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    carName: {
        color: COLORS.primaryText,
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cost: {
        color: COLORS.black,
    },
});

export default styles;
