const initialState = {
  drivers: [],
  errorMsg: '',
};

const DriversReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'GET_LIST': {
      return {
        ...state,
        drivers: action.payload,
      };
    }

    case 'GET_LIST_MESSAGE': {
      return {
        ...state,
        errorMsg: action.payload,
      };
    }

    case 'GET_DETAIL': {
      return {
        ...state,
        driver: action.payload,
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