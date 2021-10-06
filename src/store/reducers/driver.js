const initialState = {
  drivers: [],
  errorMsg: '',
};

const DriversReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'GET_DRIVER_LIST': {
      return {
        ...state,
        drivers: action.payload,
      };
    }

    case 'GET_DRIVER_LIST_MESSAGE': {
      return {
        ...state,
        errorMsg: action.payload,
      };
    }

    case 'GET_DRIVER_DETAIL': {
      return {
        ...state,
        driver: action.payload,
      };
    }

    case 'GET_DRIVER_DETAIL_MESSAGE': {
      return {
        ...state,
        errorMsg: action.payload,
      };
    }

    case 'UPDATE_DRIVER_STATUS': {
      return {
        ...state,
        data: action.payload,
      };
    }

    case 'UPDATE_DRIVER_STATUS_MESSAGE': {
      return {
        ...state,
        errorMsg: action.payload,
      };
    }

    case 'ADD_DRIVER': {
      return {
        ...state,
        data: action.payload,
      };
    }

    case 'ADD_DRIVER_MESSAGE': {
      return {
        ...state,
        errorMsg: action.payload,
      };
    }

    case 'UPDATE_DRIVER': {
      return {
        ...state,
        data: action.payload,
      };
    }

    case 'UPDATE_DRIVER_MESSAGE': {
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

export default DriversReducer;