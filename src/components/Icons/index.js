import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const HomeIcon = ({ size = 24, color = 'black', style = {} }) => {
    return <AntDesign name="home" size={size} color={color} style={style} />;
};

export const CategoryIcon = ({ size = 24, color = 'black', style = {} }) => {
    return (
        <MaterialIcons
            name="filter-none"
            size={size}
            color={color}
            style={style}
        />
    );
};

export const MarkIcon = ({ size = 24, color = 'black', style = {} }) => {
    return (
        <MaterialIcons
            name="bookmark-border"
            size={size}
            color={color}
            style={style}
        />
    );
};

export const StarIcon = ({ size = 24, color = '#eb9b34', style = {} }) => {
    return <Entypo name="star" size={size} color={color} style={style} />;
};

export const BackIcon = ({ size = 28, color = 'black', style = {} }) => {
    return (
        <Feather name="chevron-left" size={size} color={color} style={style} />
    );
};

export const ShareIcon = ({ size = 28, color = 'black', style = {} }) => {
    return <Feather name="share-2" size={size} color={color} style={style} />;
};

export const LocationIcon = ({ size = 24, color = '#b6b6b6', style = {} }) => {
    return (
        <Ionicons
            name="md-location-outline"
            size={size}
            color={color}
            style={style}
        />
    );
};

export const CarRentalIcon = ({ size = 24, color = 'black', style = {} }) => {
    return <AntDesign name="car" size={size} color={color} style={style} />;
};

export const SearchIcon = ({ size = 24, color = 'black', style = {} }) => {
    return (
        <MaterialIcons name="search" size={size} color={color} style={style} />
    );
};

export const FilterIcon = ({ size = 24, color = 'black', style = {} }) => {
    return (
        <MaterialIcons
            name="filter-list"
            size={size}
            color={color}
            style={style}
        />
    );
};

export const BellIcon = ({ size = 24, color = 'black', style = {} }) => {
    return <AntDesign name="bells" size={size} color={color} style={style} />;
};

export const PersonIcon = ({ size = 24, color = 'black', style = {} }) => {
    return <Ionicons name="person" size={size} color={color} style={style} />;
};

export const PhoneIcon = ({ size = 24, color = 'black', style = {} }) => {
    return (
        <Ionicons name="call-outline" size={size} color={color} style={style} />
    );
};

export const MailIcon = ({ size = 24, color = 'black', style = {} }) => {
    return <Feather name="mail" size={size} color={color} style={style} />;
};

export const PasswordIcon = ({ size = 24, color = 'black', style = {} }) => {
    return <AntDesign name="lock" size={size} color={color} style={style} />;
};

export const DarkLightIcon = ({ size = 24, color = 'black', style = {} }) => {
    return (
        <MaterialCommunityIcons
            name="theme-light-dark"
            size={size}
            color={color}
            style={style}
        />
    );
};
