import React from 'react';
import DashBoardLink from "../dashboard/DashboardLink";
import {DashboardDiv} from '../styled-components'
import UpdateProfile from './UpdateProfile';
import Transaction from "./Transaction";
import {Route} from 'react-router-dom';
import Home from './Home/Home';
import DashboardHeader from './DashboardHeader';
import ProtectedRoute from "../../Util/Auth";
import NotFound from '../../components/NotFound';


const DashBoard = () => {
    return (
        <DashboardDiv>
            <div className ="profile">
            <DashBoardLink />
            </div>
            <div className = "pages">

                <DashboardHeader/>
                <div className="pages-content">
                <Route path='/dashboard/profile' component={UpdateProfile} />
  
                <Route path='/dashboard/transaction'>
                    <Transaction/>
                </Route>
                <Route exact path='/dashboard/home' component={Home} />

                <Route exact path='*'>
                    <NotFound/>
                </Route>
            </div>
            </div>
        </DashboardDiv>
    );
};

export default DashBoard;