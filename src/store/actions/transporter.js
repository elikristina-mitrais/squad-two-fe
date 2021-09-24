import { default as axios } from 'axios'

export const getTruckList = () => {
    return async (dispatch) => {
        try {
            const results = await axios.get(`${process.env.REACT_APP_SERVER_URL}/trucks`);
            dispatch({
                type: 'GET_TRUCK_LIST',
                payload: results.data.data.trucks,
            });
        } catch (err) {
            const { message } = err;
            dispatch({
                type: 'GET_TRUCK_LIST_MESSAGE',
                payload: message,
            });
        }
    };
};

export const getTruckListDetail = (id) => {
    return async (dispatch) => {
        try {
            const results = await axios.get(`${process.env.REACT_APP_SERVER_URL}/trucks/${id}`);
            console.log(results)
            dispatch({
                type: 'GET_TRUCK_LIST_DETAILS',
                payload: results.data.data.truck,
            });
        } catch (err) {
            const { message } = err;
            dispatch({
                type: 'GET_TRUCK_LIST_DETAILS_MESSAGE',
                payload: message,
            });
        }
    };
};

export const addNewTruck = (licenseNumber, truckType, plateType, productionYear, stnk, kir) => {
    return async (dispatch) => {
        const params = new URLSearchParams();
        params.append('license_number', licenseNumber)
        params.append('truck_type', truckType)
        params.append('plate_type', plateType)
        params.append('production_year', productionYear)
        params.append('stnk_upload', stnk)
        params.append('kir_upload', kir)
        try {
            const results = await axios.post(`${process.env.REACT_APP_SERVER_URL}/trucks`);
            dispatch({
                type: 'ADD_TRUCK',
                payload: results.data.error_msg,
            });
        } catch (err) {
            const { message } = err;
            dispatch({
                type: 'ADD_TRUCK_MESSAGE',
                payload: message,
            });
        }
    };
};

export const editTruck = (licenseNumber, truckType, plateType, productionYear, stnk, kir, id) => {
    return async (dispatch) => {
        const params = new URLSearchParams();
        params.append('license_number', licenseNumber)
        params.append('truck_type', truckType)
        params.append('plate_type', plateType)
        params.append('production_year', productionYear)
        params.append('stnk_upload', stnk)
        params.append('kir_upload', kir)
        try {
            const results = await axios.put(`${process.env.REACT_APP_SERVER_URL}/trucks/${id}`);
            dispatch({
                type: 'EDIT_TRUCK',
                payload: results.data.error_msg,
            });
        } catch (err) {
            const { message } = err;
            dispatch({
                type: 'EDIT_TRUCK_MESSAGE',
                payload: message,
            });
        }
    };
};