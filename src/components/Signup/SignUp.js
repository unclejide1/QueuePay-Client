import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "./Signup.styles.css";
import {RegisterDiv} from '../styled-components'

const Signup = () => {
  const [inputs, setInputs] = useState({
    "busname": "",
    "email": "",
    "password": ""
  });

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      console.log(inputs);
    }
  }

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }



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

        <label className="busname">Business Name</label>
        <input 
        type="text"
         id="busname"
          name="busname"
          value={inputs.busname}
          onChange={handleInputChange}
           placeholder="Your Business-name.."
            />

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
         />

      
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
