import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "./Signup.styles.css";
import {RegisterDiv} from '../styled-components'
import close from '../assets/close-24px.svg'

const Signup = () => {
  const [inputs, setInputs] = useState({
    "businessName": "",
    "email": "",
    "password": ""
  });
  const [error, setError] = useState({error:false,message:false,details:""})


  const handleSubmit = async (event) => {
      event.preventDefault();
      const newUser = await fetch('/auth/signup', {
        method: "POST",
        headers:{
          "content-type": 'application/json'
        },
        body: JSON.stringify(inputs)
      })
      const response = await newUser.json()
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
        <RegisterDiv>
        <div className = "introduction" >
        <h3 className = "create">CREATE YOUR ACCOUNT</h3>
        <p className = "business-summary">
Over 40,000 businesses of all sizes use Paystack to accept payments online, including some of Africa's biggest brands.

Your customers will love the simple, secure payment experience, and if you need any help, our friendly Support team is only a quick phone call (or email) away.

Thank you for choosing Paystack. We look forward to being a reliable growth engine and partner to you, your team, and your business.
        </p>
        </div>
        
        <div className="form-container">
        <h2 className = "registerhere">Register on Queue-Pay</h2>
        <form className ="signup-form" onSubmit={handleSubmit}>
        {error.error?errorMessage:(error.message?successMessage:"")}
        <label className="busname">Business Name</label>
        <input 
        type="text"
         id="busname"
          name="businessName"
          value={inputs.businessName}
          onChange={handleInputChange}
           placeholder="Your Business-name.."
            required/>

            <label className="email">Email</label>
            <input 
            type="email"
             id="email"
              name="email"
              value={inputs.email}
              onChange={handleInputChange}
               placeholder="Your Username.."
                />
    
        <label className="username">Password</label>
        <input 
        type="password" 
        id="lname" 
        name="password" 
        value={inputs.password}
        onChange={handleInputChange}
        placeholder="Your Password.."
         required/>

      
        <input type="submit" value="Submit" />
      </form>
      <div>
      <span className = "registered">Already registered? <Link to="/signin" className="util">Sign in </Link></span>
      </div>
      </div>
      </RegisterDiv>
    );
};

export default Signup;
