import { default as axios } from 'axios'

export const getTransporterShipment = () => {
  return async (dispatch) => {
    try {
      const results = await axios.get(`${process.env.REACT_APP_SERVER_URL}/transporters`);
      dispatch({
        type: 'GET_TRANSPORTER_LIST',
        payload: results.data.data.shipments,
      });
    } catch (err) {
      console.log(err);
      const { message } = err;
      dispatch({
        type: 'GET_TRANSPORTER_LIST_MESSAGE',
        payload: message,
      });
    }
  };
};

export const getShipperShipment = () => {
  return async (dispatch) => {
    try {
      const results = await axios.get(`${process.env.REACT_APP_SERVER_URL}/shipments`);
      dispatch({
        type: 'GET_SHIPPER_LIST',
        payload: results.data.data.shipments,
      });
    } catch (err) {
      console.log(err);
      const { message } = err;
      dispatch({
        type: 'GET_SHIPPER_LIST_MESSAGE',
        payload: message,
      });
    }
  };
};