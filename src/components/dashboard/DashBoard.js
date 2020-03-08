import React from 'react';
import DashBoardLink from "../dashboard/DashboardLink";
import {DashboardDiv} from '../styled-components'
import UpdateProfile from './UpdateProfile';
import {Route, useHistory} from 'react-router-dom';
import Home from './Home/Home';
import DashboardHeader from './DashboardHeader';
import OTP from '../OTP';

const DashBoard = () => {
 let history = useHistory()
 if(!localStorage.token){
     history.push('/')
 }
    return (
        <DashboardDiv>
            <div className ="profile">
            <DashBoardLink />
            </div>
            <div className = "pages">
                <DashboardHeader/>
                <div className="pages-content">
                <Route path='/dashboard/profile'>
                    <UpdateProfile/>
                </Route>
                <Route exact path='/dashboard'>
                    <Home/>
                </Route>
               
            </div>
            </div>
        </DashboardDiv>
    );
};

export default DashBoard;