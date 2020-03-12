import React, {useState} from 'react';
import {LoginDiv} from '../styled-components'
import { Link, useHistory } from 'react-router-dom';
import close from '../assets/close-24px.svg';



const SignIn = () => {
  const history = useHistory()
    const [inputs, setInputs] = useState({
        "email":"",
        "password": ""
    });


    const [error, setError] = useState('')

    const handleSubmit = async (event) => {
          event.preventDefault();
          console.log(inputs);
          const loggedInUser = await fetch('/auth/login', {
            method: "POST",
            headers:{
              "content-type": 'application/json'
            },
            body: JSON.stringify(inputs)
          })
          const response = await loggedInUser.json()
          if(response.error){
            setError(response.message)
          }
          if(response.error){
            setError(response.error)
          }
          if(response.data){
          localStorage.setItem("token", response.data.token)
          localStorage.setItem("businessName", response.data.userBusinessName)
          localStorage.setItem("businessEmail", response.data.userEmail)
          localStorage.setItem("businessID",response.data.userId)
          history.push('/dashboard')
          }
    }

        const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }

    const errorMessage = !error? (<p></p>) : (<p className = "error">{error} <img className ="close" onClick={()=>{setError('')}} src={close} alt ="close button"/></p>)
    return (
        <LoginDiv>
        <h1>Queue-Pay</h1>
        <form onSubmit={handleSubmit}>
        {errorMessage}
        <label className="username">Email</label>
        <input 
        type="text"
         id="fname"
          name="email"
          value={inputs.email}
          onChange={handleInputChange}
           placeholder="Your Email.."
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
      </LoginDiv>
    );
}

export default SignIn;