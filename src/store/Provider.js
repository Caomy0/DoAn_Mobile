import { useEffect, useState } from 'react';
import * as carService from '../services/carService';
import * as brandService from '../services/brandService';
import { CarContext } from './Context';

function Provider({ children }) {
    const [carLoading, setCarLoading] = useState(false);
    const [brandLoading, setBrandLoading] = useState(false);
    const [cars, setCars] = useState([]);
    const [brands, setBrands] = useState([]);
    const [savedCars, setSavedCars] = useState([]);
    const [rentCars, setRentCars] = useState([]);
    const [darkTheme, setDarkTheme] = useState(false);

    useEffect(() => {
        const fetchApi = async () => {
            setCarLoading(true);

            const res = await carService.getCars();
            setCars(res);

            setCarLoading(false);
        };

        fetchApi();
    }, []);

    useEffect(() => {
        const fetchApi = async () => {
            setBrandLoading(true);

            const res = await brandService.getBrands();
            setBrands(res);

            setBrandLoading(false);
        };

        fetchApi();
    }, []);

    return (
        <CarContext.Provider
            value={{
                cars,
                setCars,
                brands,
                setBrands,
                carLoading,
                brandLoading,
                savedCars,
                setSavedCars,
                rentCars,
                setRentCars,
                darkTheme,
                setDarkTheme,
            }}
        >
            {children}
        </CarContext.Provider>
    );
}

export default Provider;
