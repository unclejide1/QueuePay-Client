import React from 'react';
import {NavLink,withRouter} from 'react-router-dom';
import {DashboardHeaderDiv} from '../styled-components'


const DashboardHeader = (props) => {
    return (
        <DashboardHeaderDiv>
            <div className="name"><h2>{props.location.pathname.split('/')[2].toUpperCase()}</h2></div>
           <div> <NavLink exact to="/" ><button className="register">Sign Out</button></NavLink></div>
        </DashboardHeaderDiv>
    );
};

export default withRouter(DashboardHeader);