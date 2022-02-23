import React, { useRef, useEffect } from "react"
import { createAccount,signInWithGoogle} from "../../redux/actions/authentication"
import { useDispatch, useSelector  } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import "../login/login.css";

export const Signup = () => {
    const {user} = useAuth()
    console.log(user);
    const emailRef = useRef()
    const passwordRef = useRef()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading,error, errorMessage } = useSelector((state) => ({
        loading: state.userState.loading,
        error: state.userState.error,
        errorMessage: state.userState.errorMessage
      }));

    //   console.log(error, errorMessage);
    useEffect(() => {
        checkUser()
    }, [user]);
    const checkUser = ()=>{
        if(user){
            navigate("../")
        }
    }
    
  function handleSubmit(e) {
      e.preventDefault()
        dispatch(createAccount(emailRef.current.value, passwordRef.current.value)) 
        alert("Your account created successfully")
    }
    const signInGoogle = ()=>{
      dispatch(signInWithGoogle())
    }

    return <div className="login">
        {/* <img className="dislogo" src="https://www.discoveryplus.in/129c5de772422db12a69e397768bd8ec.png" /> */}
        <div className="method">
            <h1>Sign Up Now</h1>
            <p>Save your preferences & discover great</p>
            <p>recommendations</p>
            {error&&<p id="errmsg">{errorMessage.message}</p>}

            <input id="name" type="name" placeholder="Enter name" /><br/><br/>
            <input id="email" type="email" ref={emailRef} required placeholder="Enter Email" /><br/><br/>
            <input id="pass" type="password" ref={passwordRef} required placeholder="Password" /><br/><br/>
            <button id="signin" onClick={handleSubmit}>Sign Up</button><br/><br/>   

            <button onClick={signInGoogle}><span>
                    <img src="https://blog.hubspot.com/hubfs/image8-2.jpg" />
                </span>Sign In With Google</button>
        </div>
    </div>
}