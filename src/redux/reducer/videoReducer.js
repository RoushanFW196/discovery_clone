import {
    GETVIDEO_SUCCESS,
    GETVIDEO_LOADING,
    GETVIDEO_FAILIURE,
  } from "../actions/actionType";
  
  
  const init_state = {
      video: {},
      error: false,
      loading: false,
      errorMessage: null,
  }
  
  export const videoReducer = (state = init_state, {
      type,
      payload
  }) => {
      switch (type) {
          case GETVIDEO_LOADING:
              return {
                  ...state,
                  loading: true
              }
   case GETVIDEO_FAILIURE:
       return {
      ...state,
            error: true,
            video: {},
            loading: false,
            errorMessage: payload,
    };
    case GETVIDEO_SUCCESS:
        return {
            ...state,
            video: payload,
            loading: false,
            error: false,
            errorMessage: ""
        }
          default:
              return state;
      }
  }