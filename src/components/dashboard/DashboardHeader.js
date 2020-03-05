import React from 'react';
import {NavLink} from 'react-router-dom';
import {DashboardHeaderDiv} from '../styled-components'


const DashboardHeader = () => {
    return (
        <DashboardHeaderDiv>
            <NavLink exact to="/" ><button className="register">Sign Out</button></NavLink>
        </DashboardHeaderDiv>
    );
};

export default DashboardHeader;