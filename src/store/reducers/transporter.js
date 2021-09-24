const initialState = {
    truckList: [],
    errorMsgTruckList: '',
    truckDetailList: [],
    errorMsgTruckDetailList: '',
};

const transporterReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_TRUCK_LIST': {
            return {
                ...state,
                truckList: action.payload,
            };
        }

        case 'GET_TRUCK_LIST_MESSAGE': {
            return {
                ...state,
                errorMsgTruckList: action.payload,
            };
        }

        case 'GET_TRUCK_LIST_DETAILS': {
            return {
                ...state,
                truckDetailList: action.payload,
            };
        }

        case 'GET_TRUCK_LIST_DETAILS_MESSAGE': {
            return {
                ...state,
                errorMsgTruckDetailList: action.payload,
            };
        }

        default: {
            return {
                ...state,
            };
        }
    }
};

export default transporterReducer;