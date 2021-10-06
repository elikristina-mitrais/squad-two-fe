const initialState = {
    shipments: [],
    errorMsg: '',
  };
  
  const ShipmentsReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case 'GET_TRANSPORTER_LIST': {
        return {
          ...state,
          shipments: action.payload,
        };
      }
  
      case 'GET_TRANSPORTER_LIST_MESSAGE': {
        return {
          ...state,
          errorMsg: action.payload,
        };
      }

      case 'GET_SHIPPER_LIST': {
        return {
          ...state,
          shipments: action.payload,
        };
      }
  
      case 'GET_SHIPPER_LIST_MESSAGE': {
        return {
          ...state,
          errorMsg: action.payload,
        };
      }

      default: {
        return {
          ...state,
        };
      }
    }
  };
  
  export default ShipmentsReducer;