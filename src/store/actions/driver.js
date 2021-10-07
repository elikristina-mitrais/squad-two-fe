import { default as axios } from 'axios'

export const getDriverListing = () => {
  return async (dispatch) => {
    try {
      const results = await axios.get(`${process.env.REACT_APP_SERVER_URL}/drivers`);
      dispatch({
        type: 'GET_DRIVER_LIST',
        payload: results.data.data.drivers,
      });
    } catch (err) {
      console.log(err);
      const { message } = err;
      dispatch({
        type: 'GET_DRIVER_LIST_MESSAGE',
        payload: message,
      });
    }
  };
};

export const getDriverDetail = (id) => {
  return async (dispatch) => {
    try {
      const results = await axios.get(`${process.env.REACT_APP_SERVER_URL}/drivers/${id}`);
      dispatch({
        type: 'GET_DRIVER_DETAIL',
        payload: results.data.data.driver,
      });
    } catch (err) {
      console.log(err);
      const { message } = err;
      dispatch({
        type: 'GET_DRIVER_DETAIL_MESSAGE',
        payload: message,
      });
    }
  };
};

export const addNewDriver = (payload, headers) => {
  return axios.post(`${process.env.REACT_APP_SERVER_URL}/drivers`, payload, headers);
}

export const updateDriverData = (id, payload, headers) => {
  return axios.put(`${process.env.REACT_APP_SERVER_URL}/drivers/${id}`, payload, headers);
}