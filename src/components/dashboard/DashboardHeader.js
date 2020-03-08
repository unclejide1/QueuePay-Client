import React from 'react';
import {useHistory} from 'react-router-dom';
import {DashboardHeaderDiv} from '../styled-components'


const DashboardHeader = (props) => {
    const history = useHistory()
    return (
        <DashboardHeaderDiv>
            <button className="register" onClick={() =>{
                localStorage.clear()
                history.push('/')
            }}>Sign Out</button>
        </DashboardHeaderDiv>
    );
};

export default (DashboardHeader);