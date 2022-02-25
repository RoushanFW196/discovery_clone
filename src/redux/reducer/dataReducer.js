import {
  GETDATA_SUCCESS,
  GETDATA_LOADING,
  GETDATA_FAILIURE,
} from "../actions/actionType";


const init_state = {
    data: [],
    error: false,
    loading: false,
    errorMessage: null,
}

export const dataReducer = (state = init_state, {
    type,
    payload
}) => {
    switch (type) {
        case GETDATA_LOADING:
            return {
                ...state,
                loading: true
            }
 case GETDATA_FAILIURE:
     return {
    ...state,
          error: true,
          data: [],
          loading: false,
          errorMessage: payload,
  };
  case GETDATA_SUCCESS:
      return {
          ...state,
          data: payload,
          loading: false,
          error: false,
          errorMessage: ""
      }
        default:
            return state;
    }
}