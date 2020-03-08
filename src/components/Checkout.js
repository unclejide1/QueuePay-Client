import React, {useState} from 'react';
import CheckoutForm from "./CheckoutForm";
import {LuhnCheckCard} from "../Util/util";


const Checkout = () => {
const [inputs, setInputs] = useState({
    "isLuhn": false,
    "cardNo": "",
    "cardHolderName": "",
    "expiryMonth": "",
    "expiryYear": "",
    "cvc": "",
    "notValid": false
})

const handleInput = (event) => {
    if(event){
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
}

const handleSubmit = (event) => {
    if(event){
        event.preventDefault();
        if(LuhnCheckCard((inputs.cardNo))){
            console.log({"isLuhn":true})
            setInputs({...inputs,   "isLuhn": true})
        }else{
            console.log({"isLuhn":false})
            setInputs({...inputs,   "isLuhn": false})
        }
        
    }
}

    return (
        <div>
            <CheckoutForm handleInput = {handleInput} inputs={inputs} handleSubmit={handleSubmit}/>
        </div>
    )
    }


export default Checkout;
