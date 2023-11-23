import { TextInput, View } from 'react-native';

import styles from './styles';
import COLORS from '../Colors';
import { FilterIcon, SearchIcon, PersonIcon } from '../Icons';
import Button from '../Button';

function Search({
    height,
    showBtnFilter = true,
    LeftIcon = SearchIcon,
    style,
    onPressSearch,
    onPressFilter,
    placeholder = 'Search',
    ...passProps
}) {
    const props = {
        ...passProps,
    };

    return (
        <View style={[styles.container, { height: height }, style]}>
            <View
                style={[styles.searchSection, !LeftIcon && { paddingLeft: 20 }]}
            >
                {LeftIcon && (
                    <Button onPress={onPressSearch}>
                        <LeftIcon style={styles.leftIcon} />
                    </Button>
                )}
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    underlineColorAndroid="transparent"
                    {...props}
                />
            </View>

            {showBtnFilter && (
                <Button style={styles.filterBtn} onPress={onPressFilter}>
                    <FilterIcon color={COLORS.primary} />
                </Button>
            )}
        </View>
    );
}

export default Search;
