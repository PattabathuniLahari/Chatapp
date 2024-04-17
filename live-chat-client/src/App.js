// import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer';
import Login from './components/Login';
import Welcome from './components/Welcome';
import ChatArea from './components/ChatArea';
import Users from './components/Users';
import Groups from './components/Groups';
import CreateGroup from './components/CreateGroup';
import React from 'react';
import {useState} from 'react';
import { Route,Routes } from 'react-router-dom';
function App() {
  
   return <div className='App'>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='app' element={<MainContainer/>}>
      <Route path='welcome' element={<Welcome/>}></Route>
      <Route path='chat' element={<ChatArea/>}></Route>
      <Route path='users' element={<Users/>}></Route>
      <Route path='groups' element={<Groups/>}></Route>
      <Route path='create-groups' element={<CreateGroup/>}></Route>
    </Route>
   </Routes>
  
   {/* <MainContainer/> */}
   </div>
}

export default App;
