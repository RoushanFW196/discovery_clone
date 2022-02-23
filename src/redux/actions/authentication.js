// import { signInWithPhoneNumber } from "firebase/auth";
import { auth, googleProvider} from "../../firebase/firebase";
import {
    SIGNIN_LOADING,
    SIGNIN_FAILIURE,
    SIGNIN_SUCCESS,
    SIGNOUT_SUCCESS
} from "./actionType"


export const signin_loading = () => {
    return {
      type: SIGNIN_LOADING
    };
  };
  export const signin_failiure = (error) => {
    return {
       type: SIGNIN_FAILIURE,
       payload: error
    };
  };
  export const signin_success = () => {
    return {
       type:SIGNIN_SUCCESS,
    };
  };
  export const signout = ()=>{
      return{
         type: SIGNOUT_SUCCESS
      } 
  }

  export const logout = () => async (dispatch)=>{
    dispatch(signin_loading())
     try {
          await auth.signOut()
          dispatch(signout())
        } catch(err){
            dispatch(signin_failiure(err));
      }
    }
      
  
  export const signin = (email, password) => async(dispatch) => {
      dispatch(signin_loading())
       try{
           await auth.signInWithEmailAndPassword(email, password)
           dispatch(signin_success())
       }
       catch(err){
             dispatch(signin_failiure(err));
       }
  }

  export const createAccount = (email, password) => async(dispatch) => {
    dispatch(signin_loading())
     try{
    await auth.createUserWithEmailAndPassword(email, password)
    // console.log(data);
     dispatch(signin_success())
     }
     catch(err){
        //  console.log("err", err);
        dispatch(signin_failiure(err));
     }
}

export const signInWithGoogle = () => async(dispatch) => {
    dispatch(signin_loading())
     try{
        await auth.signInWithPopup(googleProvider)
        dispatch(signin_success())
    }
     catch (error) {
      dispatch(signin_failiure(error))
      }
}


    // export const signInWithPhone = (phoneNumber) => (dispatch) => {
    //     dispatch(signin_loading())
    //      try{
    //         auth.signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    // //          .then((confirmationResult) => {
    // //          window.confirmationResult = confirmationResult;
    // // })
    //     }
    //      catch (error) {
    //       dispatch(signin_failiure(error))
    //       }
    // }