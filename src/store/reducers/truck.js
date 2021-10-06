const initialState = {
  trucks: [],
  errorMsg: '',
};

const TrucksReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'GET_TRUCK_LIST': {
      return {
        ...state,
        trucks: action.payload,
      };
    }

    case 'GET_TRUCK_LIST_MESSAGE': {
      return {
        ...state,
        errorMsg: action.payload,
      };
    }

    case 'GET_TRUCK_DETAIL': {
      return {
        ...state,
        truck: action.payload,
      };
    }

    case 'GET_TRUCK_DETAIL_MESSAGE': {
      return {
        ...state,
        errorMsg: action.payload,
      };
    }

    case 'UPDATE_TRUCK_STATUS': {
      return {
        ...state,
        data: action.payload,
      };
    }

    case 'UPDATE_TRUCK_STATUS_MESSAGE': {
      return {
        ...state,
        errorMsg: action.payload,
      };
    }

    case 'ADD_TRUCK': {
      return {
        ...state,
        data: action.payload,
      };
    }

    case 'ADD_TRUCK_MESSAGE': {
      return {
        ...state,
        errorMsg: action.payload,
      };
    }

    case 'UPDATE_TRUCK': {
      return {
        ...state,
        data: action.payload,
      };
    }

    case 'UPDATE_TRUCK_MESSAGE': {
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

export default TrucksReducer;