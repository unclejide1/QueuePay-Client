import React, {useState} from 'react';
import {UpdateProfileDiv} from '../styled-components'

const UpdateProfile = () => {

    const [inputs, setInputs] = useState({
        "busDescription": "",
        "busURL": "",
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

         <label className="bus-url">Website Link For the Business: </label>
        <input
        type = "text"  
        id="bus-url-field" 
        name="busURL" 
        value={inputs.busURL}
        onChange={handleInputChange}
        placeholder="Business Website Url..."
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

export default UpdateProfile;