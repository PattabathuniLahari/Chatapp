import React from 'react';
import './myStyles.css';
import Sidebar from './Sidebar';
import {useState} from 'react';
import Welcome from './Welcome';
import CreateGroup from './CreateGroup';
import Users from './Users.js';
import Groups from './Groups.js';
import {Outlet} from 'react-router-dom';
// import WorkArea from './WorkArea';
import ChatArea from './ChatArea';
function MainContainer(){
  
    return( <div className='main-container'>
    <Sidebar/>
    <Outlet/>
     {/* <WorkArea/> */}
     {/* <ChatArea props={conversations[0]}/> */}
     {/* <Welcome/> */}
     {/* <CreateGroup/> */}
     
    </div>
    )
}
export default MainContainer;