import React, {useState} from 'react';
import "./Signin.style.css";
import { Link } from 'react-router-dom';


const SignIn = () => {
    const [inputs, setInputs] = useState({
        "username":"",
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
//   console.log(inputs);
    return (
        <div className="form-layout">
        <h1>Queue-Pay</h1>
        <form onSubmit={handleSubmit}>
        <label className="username">Username</label>
        <input 
        type="text"
         id="fname"
          name="username"
          value={inputs.username}
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
      <span>Forgot password? <Link to="/forgotPassword" className="util">Click here to recover password</Link></span><br/>
      <span>Not registered? <Link to="/signup" className="util">Create an account</Link></span>
      </div>
        </div>
    );
}

export default SignIn;