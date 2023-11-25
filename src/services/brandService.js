import request from '../util/request';

export const getBrands = async () => {
    try {
         const brands = await request.get('/brands');
        return brands.data;
    } catch (error) {
        console.log(error);
    }
};
