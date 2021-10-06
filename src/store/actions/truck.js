import { default as axios } from 'axios'

export const getTruckListing = () => {
  return async (dispatch) => {
    try {
      const results = await axios.get(`${process.env.REACT_APP_SERVER_URL}/trucks`);
      dispatch({
        type: 'GET_TRUCK_LIST',
        payload: results.data.data.trucks,
      });
    } catch (err) {
      console.log(err);
      const { message } = err;
      dispatch({
        type: 'GET_TRUCK_LIST_MESSAGE',
        payload: message,
      });
    }
  };
};

export const getTruckDetail = (id) => {
  return async (dispatch) => {
    try {
      const results = await axios.get(`${process.env.REACT_APP_SERVER_URL}/trucks/${id}`);
      dispatch({
        type: 'GET_TRUCK_DETAIL',
        payload: results.data.data.truck,
      });
    } catch (err) {
      console.log(err);
      const { message } = err;
      dispatch({
        type: 'GET_TRUCK_DETAIL_MESSAGE',
        payload: message,
      });
    }
  };
};

export const updateTruckStatus = (id) => {
  return async (dispatch) => {
    const payload = {
			'truck': {        
        'status': 'Inactive'
      }
		}
		
    const headers = {
			'Content-Type': 'application/json',
		}

    try {
      const results = await axios.put(`${process.env.REACT_APP_SERVER_URL}/trucks/${id}`, payload, headers);
      dispatch({
        type: 'UPDATE_TRUCK_STATUS',
        payload: results.data,
      });
    } catch (err) {
      console.log(err);
      const { message } = err;
      dispatch({
        type: 'UPDATE_TRUCK_STATUS_MESSAGE',
        payload: message,
      });
    }
  };
}

export const addNewTruck = (payload, headers) => {
  return async (dispatch) => {
    try {
      const results = await axios.post(`${process.env.REACT_APP_SERVER_URL}/trucks`, payload, headers);
      dispatch({
        type: 'ADD_TRUCK',
        payload: results.data,
      });
    } catch (err) {
      console.log(err);
      const { message } = err;
      dispatch({
        type: 'ADD_TRUCK_MESSAGE',
        payload: message,
      });
    }
  };
}

export const updateTruckData = (id, payload, headers) => {
  return async (dispatch) => {
    try {
      const results = await axios.put(`${process.env.REACT_APP_SERVER_URL}/trucks/${id}`, payload, headers);
      dispatch({
        type: 'UPDATE_TRUCK',
        payload: results.data,
      });
    } catch (err) {
      console.log(err);
      const { message } = err;
      dispatch({
        type: 'UPDATE_TRUCK_MESSAGE',
        payload: message,
      });
    }
  };
}