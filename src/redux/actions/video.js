import { db } from "../../firebase/firebase"
import "firebase/firestore";
import firebase from "firebase/app"
import {
  GETVIDEO_SUCCESS,
  GETVIDEO_LOADING,
  GETVIDEO_FAILIURE,
} 
from "../actions/actionType"


export const getvideo_success = (data) => {
    return {
      type: GETVIDEO_SUCCESS,
      payload: data
    };
  };
  export const getvideo_failiure = (error) => {
    return {
       type: GETVIDEO_FAILIURE,
       payload: error
    };
  };
  export const getvideo_loading = () => {
    return {
       type: GETVIDEO_LOADING,
    };
  };

  export const getvideo = (data) => async (dispatch) => {
      dispatch(getvideo_loading())
      try{
        dispatch(getvideo_success(data))
        }
        catch(e){
        //   console.log("e", e);  
          dispatch(getvideo_failiure(e))
        }
  }
