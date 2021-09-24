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
        
        const payload = {
			'truck': {
                'license_number': licenseNumber,
                'truck_type': truckType,
                'plate_type': plateType,
                'production_year': productionYear,
                'stnk_upload': stnk,
                'kir_upload': kir
            }
		}
		const headers = {
			'Content-Type': 'application/json',
		}
        try {
            const results = await axios.post(`${process.env.REACT_APP_SERVER_URL}/trucks`, payload, headers);
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