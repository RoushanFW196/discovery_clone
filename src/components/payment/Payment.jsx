import {MdKeyboardBackspace} from "react-icons/md";
import {MdOutlineSecurity} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useEffect } from "react";
import './payment.css';

export const Payment = () => {
    const navigate = useNavigate()
    const {user} = useAuth()
    useEffect(() => {
        !user && navigate('../')
      }, [user])
    return <div id="payment-main-div">
        <div className="payment-flex-div payment-flex-first">
            <MdKeyboardBackspace id="payment-backArrow"/>
            <h2 className="payment-creditDebit">Credit / Debit card</h2>
        </div><hr/>
        <div className="payment-flex-div amont">
            <p>399</p>
            <p>To Pay ₹399.00</p>
        </div>
        <p id="payment-check">Checkout</p>
        <p className="payment-headingTag">CARD NUMBER</p>
        <input className="payment-inputTag" type="text" placeholder="1234 5678 9012 3456"/>
        <p className="payment-headingTag">EXPIRY DATE</p>
        <input className="payment-inputTag" type="text" placeholder="MM/YY"/>
        <p className="payment-headingTag">CVC / CVV</p>
        <input className="payment-inputTag" type="text" placeholder="123" />
        <p className="payment-headingTag">CARDHOLDER NAME</p>
        <input className="payment-inputTag" type="text" placeholder="J.Smith"/><br/>

        <button className="payment-proceedBtn" onClick={(() => {
            alert("Now you are a premium member")
            navigate("../")
        })}>Proceed</button>
        <div className="payment-flex-div">
            <MdOutlineSecurity id="pyament-security"/>
            <p className="pyament-security-term">Your card details will be encrypted before processed through a secure server.</p>
        </div>
        <p className="pyament-security-term pyament-security-term-email">By choosing to proceed, you authorise us to charge your card until you cancel. For any queries, you can reach out to us at <span id="payment-disEmail">hello@discovery.com</span></p>
    </div>
}
 