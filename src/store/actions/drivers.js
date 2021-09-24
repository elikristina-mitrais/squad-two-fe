import { default as axios } from 'axios'

export const getDrivers = () => {
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
          console.log(results)
          dispatch({
              type: 'GET_DRIVER_DETAIL',
              payload: results.data.data.driver,
          });
      } catch (err) {
          const { message } = err;
          dispatch({
              type: 'GET_DRIVER_LIST_MESSAGE',
              payload: message,
          });
      }
  };
};


export const editDriver = (driverName, phoneNumber, idCard, driverLicense, id) => {
  return async (dispatch) => {
      // const params = new URLSearchParams();
      // params.append('driver_name', driverName)
      // params.append('phone_number', phoneNumber)
      // params.append('ktp_upload', idCard)
      // params.append('sim_upload', driverLicense)

      const payload = {
        'driver': {
                  'driver_name': driverName,
                  'phone_number': phoneNumber,
                  'ktp_upload': idCard,
                  'sim_upload': driverLicense
              }
      }
      const headers = {
        'Content-Type': 'application/json',
      }
      try {
          const results = await axios.put(`${process.env.REACT_APP_SERVER_URL}/drivers/${id}`, payload, headers);
          dispatch({
              type: 'EDIT_DRIVER',
              payload: results.data.error_msg,
          });
      } catch (err) {
          const { message } = err;
          dispatch({
              type: 'EDIT_DRIVER_MESSAGE',
              payload: message,
          });
      }
  };
};