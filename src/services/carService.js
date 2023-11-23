import request from '../util/request';

export const getCars = async () => {
    try {
        const cars = await request.get('/cars');
        return cars.data;
    } catch (error) {
        console.log(error);
    }
};
