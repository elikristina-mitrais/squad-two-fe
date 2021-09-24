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
            console.log('ini pesannya ndra')
            console.log(results)
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

export const addNewDriver = (driverName, phoneNumber, idCard, driverLicense) => {
    return async (dispatch) => {
        const params = new URLSearchParams();
        params.append('driver_name', driverName)
        params.append('phone_number', phoneNumber)
        params.append('ktp_upload', idCard)
        params.append('sim_upload', driverLicense)
        try {
            const results = await axios.post(`${process.env.REACT_APP_SERVER_URL}/drivers`);
            console.log(results)
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