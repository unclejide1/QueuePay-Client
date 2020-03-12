import React, {useState} from 'react';
// import {useHistory } from 'react-router-dom';
import close from '.././assets/close-24px.svg';
import {PayoutDiv} from '../styled-components'

const Payout = () => {
    // const history = useHistory()

    const [inputs, setInputs] = useState({
        "amount":"",
        "password": "",
        "bankName": "",
        "bankAccountNumber": ""
    });


    const [error, setError] = useState({error:false,message:false,details:""})

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(inputs);
        const Payout = await fetch('/merchants/'+ localStorage.getItem("businessID")+'/payout', {
          method: "POST",
          headers:{
            "content-type": 'application/json',
            "Authorization": "Bearer " + localStorage.getItem("token")
          },
          body: JSON.stringify(inputs)
        })
        const response = await Payout.json()
      if(response.error){
        setError({error:true,message:false,details:response.error})
      }
      if(response.message){
        setError({error:false,message:true,details:response.message})
      }
    }
    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }

    const errorMessage =  (<p className = "error">
    {error.details} <img className ="close" onClick={()=>{setError({error:false,message:false,details:""})}} src={close} alt ="close button"/></p>)
  const successMessage = (<p className = "success">{error.details} </p>)

    return (
        <PayoutDiv>
        <form className ="update-form" onSubmit={handleSubmit}>
        {error.error?errorMessage:(error.message?successMessage:"")}
        <label className="bus-description">Amount </label>
        <input  type="number"
        id="bus-description-field" 
        name="amount" 
        value={inputs.amount}
        onChange={handleInputChange}
        placeholder="Amount to withdraw..."
         />
        <label className="bus-logo" htmlFor="upload">Password: </label>
        <input 
        type="password"
        id = "upload"
         className="bus-logo-file"
          name="password"
          value={inputs.password}
          onChange={handleInputChange}
           placeholder="Your Business-Logo.."
            />

            <label className="bus-doc" htmlFor = "bankname"> Bank Name: </label>
            <input 
            type="text"
             id="bankname"
              name="bankName"
              value={inputs.bankName}
              onChange={handleInputChange}
               placeholder="Your Bank Name"
                />   
                <label className="bus-doc"> Bank Account Number: </label>
                <input 
                type="text"
                 id="bus-doc-field"
                  name="bankAccountNumber"
                  value={inputs.bankAccountNumber}
                  onChange={handleInputChange}
                   placeholder="Your Bank Account Details"
                    />      
        <input type="submit" value="Update" />
      </form>
      </PayoutDiv>
    );
};

export default Payout;
