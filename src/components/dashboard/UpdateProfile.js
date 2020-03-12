import React, {useState} from 'react';
import {withRouter} from 'react-router-dom'
import {UpdateProfileDiv} from '../styled-components'

const UpdateProfile = () => {
    const [inputs, setInputs] = useState({
        "busDescription": "",
        "logo": "",
        "document": ""
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
        <UpdateProfileDiv>
        <form className ="update-form" onSubmit={handleSubmit}>

        <label className="bus-description">Business Description: </label>
        <textarea  
        id="bus-description-field" 
        name="busDescription" 
        value={inputs.busDescription}
        onChange={handleInputChange}
        placeholder="Business Description..."
         />

        <label className="bus-logo" for= "upload">Upload Busines Logo: </label>
        <input 
        type="file"
        id = "upload"
         className="bus-logo-file"
          name="logo"
          value={inputs.logo}
          onChange={handleInputChange}
           placeholder="Your Business-Logo.."
            />

            <label className="bus-doc"> Upload CAC Document: </label>
            <input 
            type="file"
             id="bus-doc-field"
              name="document"
              value={inputs.document}
              onChange={handleInputChange}
               placeholder="Your CAC Documents"
                />      
        <input type="submit" value="Update" />
      </form>
    </UpdateProfileDiv>
    );
};

export default withRouter(UpdateProfile);