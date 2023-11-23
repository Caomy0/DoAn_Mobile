import { TouchableOpacity } from 'react-native';

function Button({ children, onPress, ...passProps }) {
    const props = {
        ...passProps,
        onPress,
    };
    return (
        <TouchableOpacity onPress={onPress} {...props}>
            {children}
        </TouchableOpacity>
    );
}

export default Button;
