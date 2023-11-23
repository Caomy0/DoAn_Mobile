import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import COLORS from '../../components/Colors';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },

    scroll: {
        paddingHorizontal: 20,
    },

    carimg: {
        width: 340,
        height: 170,
        resizeMode: 'contain',
    },

    horizontal_line: {
        width: '30%',
        borderBottomWidth: 1.1,
        marginTop: 30,
    },

    carinfo: {
        marginTop: 10,
    },

    locationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    locationText: {
        color: '#838484',
        marginLeft: 5,
        fontWeight: '500',
    },

    carname: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 12,
    },

    costrateWrapper: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
    },

    carcost: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    rateWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    rateText: {
        fontWeight: 'bold',
        marginLeft: 5,
    },

    featuresWrapper: {
        marginTop: 18,
    },

    featureText: {
        fontSize: 25,
        fontWeight: '500',
    },

    feature_line: {
        width: '13%',
        height: 18,
        borderBottomWidth: 1.1,
        marginLeft: 10,
    },

    sectionWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },

    checkbox: {
        backgroundColor: '#fef3e5',
        borderColor: '#fef3e5',
        borderRadius: 10,
        height: 30,
        width: 30,
        marginRight: 8,
    },

    checkboxText: {
        fontSize: 13.5,
        width: (windowWidth - 154) / 3,
        fontWeight: '500',
        color: '#838484',
    },

    cardetailWrapper: {
        marginTop: 20,
    },

    detailWrapper: {},

    carparam: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },

    paramLine: {
        width: (windowWidth - 60) * 0.49,
        height: 18,
        borderBottomWidth: 1.1,
        marginHorizontal: 10,
        borderColor: '#838484',
    },

    paramTitle: {
        width: (windowWidth - 60) * 0.25,
        color: '#838484',
    },

    paramDetail: {
        width: (windowWidth - 60) * 0.26,
        color: '#838484',
    },

    descriptionWrapper: {
        marginTop: 20,
    },

    descriptionText: {
        color: '#b6b6b6',
        fontSize: 15,
        marginTop: 10,
    },

    bookingWrapper: {
        marginBottom: 10,
        paddingHorizontal: 20,
    },

    booking: {
        fontSize: 20,
        color: COLORS.white,
        alignSelf: 'center',
    },
});

export default styles;
