import { db } from "../../firebase/firebase"
import "firebase/firestore";
import firebase from "firebase/app"
import {
  GETDATA_SUCCESS,
  GETDATA_LOADING,
  GETDATA_FAILIURE,
} 
from "../actions/actionType"


export const getdata_success = (data) => {
    return {
      type: GETDATA_SUCCESS,
      payload: data
    };
  };
  export const getdata_failiure = (error) => {
    return {
       type: GETDATA_FAILIURE,
       payload: error
    };
  };
  export const getdata_loading = () => {
    return {
       type: GETDATA_LOADING,
    };
  };

  export const getdata = (type) => async (dispatch) => {
      dispatch(getdata_loading())
      try{
        await db.collection(type)
        .get()
        .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        })); 
        // console.log("dta", data);
        dispatch(getdata_success(data))
         })
        }
        catch(e){
        //   console.log("e", e);  
          dispatch(getdata_failiure(e))
        }
  }
