import {
    CarRentalIcon,
    CategoryIcon,
    HomeIcon,
    MarkIcon,
} from '../components/Icons';
import {
    HomeScreen,
    CategoriesScreen,
    SavedScreen,
    MyRentScreen,
} from '../screens';

const routes = [
    {
        name: 'Home',
        component: HomeScreen,
        icon: HomeIcon,
    },
    {
        name: 'Categories',
        component: CategoriesScreen,
        icon: CategoryIcon,
    },
    {
        name: 'Saved',
        component: SavedScreen,
        icon: MarkIcon,
    },
    {
        name: 'My Rent',
        component: MyRentScreen,
        icon: CarRentalIcon,
    },
];

export default routes;
