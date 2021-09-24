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