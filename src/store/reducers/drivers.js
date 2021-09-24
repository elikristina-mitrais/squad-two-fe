const initialState = {
  drivers: [],
  errorMsg: '',
  editDriverErrorMsg: '',
  editDriverMsg:''
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

    case 'EDIT_DRIVER': {
      return {
          ...state,
          editDriverMsg: action.payload,
      };
  }

  case 'EDIT_DRIVER_MESSAGE': {
      return {
          ...state,
          editDriverErrorMsg: action.payload,
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