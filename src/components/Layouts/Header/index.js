import { Text, View } from 'react-native';

function Header({ headerText, CustomHeader, headerStyle, headerTextStyle }) {
    return (
        <View style={headerStyle}>
            {CustomHeader ? (
                CustomHeader
            ) : (
                <Text style={headerTextStyle}>{headerText}</Text>
            )}
        </View>
    );
}

export default Header;
