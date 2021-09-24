import { default as axios } from 'axios'

export const getShipmentsForShipper = () => {
  return async (dispatch) => {
    try {
      const results = await axios.get(`${process.env.REACT_APP_SERVER_URL}/shipments`);
      dispatch({
        type: 'GET_SHIPMENT_LIST',
        payload: results.data.data.shipments,
      });
    } catch (err) {
      console.log(err);
      const { message } = err;
      dispatch({
        type: 'GET_SHIPMENT_LIST_MESSAGE',
        payload: message,
      });
    }
  };
};