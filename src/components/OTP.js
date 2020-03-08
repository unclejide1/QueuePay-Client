import React from 'react';
import { OTPDiv } from './styled-components';

const OTP = () => {
    return (
        <OTPDiv>
            <div id="dialog">
                <h3>Please enter the OTP sent via SMS:</h3>
                <span>(we want to make sure it's you)</span>
                <form id="form">
                <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" />
                <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" />
                <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" />
                <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" />
                <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" />
                <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" />
                <button type ="submit" className="btn btn-primary btn-embossed">Verify</button>
                </form>
                <img src="http://jira.moovooz.com/secure/attachment/10424/VmVyaWZpY2F0aW9uLnN2Zw==" alt="test" />
            </div>
            </OTPDiv>
    );
};

export default OTP;