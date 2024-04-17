import React from 'react';
import {IconButton} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './myStyles.css';
import ConversationsItem from './ConversationsItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../Features/themeSlice';
function Sidebar(){
    const [conversations,setConversation]=useState([
        {
            name:'Lahari',
            lastMessage:'Hi lahari ',
            timeStamp:'today',
        },
        {
            name:'Lavanya',
            lastMessage:'Hi Lavanya',
            timeStamp:'today',
        },
        {
            name:'Rohith',
            lastMessage:'Hi Rohith',
            timeStamp:'today',
        }
    ]);
    
    const lightTheme=useSelector((state)=>state.themeKey);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    return(<div className='sidebar-container'>
        <div className={'sb-header'+(lightTheme?'':' dark')}>
            <div>
            <IconButton><AccountCircleIcon className={'icon'+(lightTheme?'':' dark')}/></IconButton>
            </div>
            <div>
            <IconButton onClick={()=>{navigate("users")}}><PersonAddAltIcon className={'icon'+(lightTheme?'':' dark')}/></IconButton>
            <IconButton onClick={()=>{navigate('groups')}} ><GroupAddIcon className={'icon'+(lightTheme?'':' dark')}/></IconButton>
            <IconButton onClick={()=>{navigate('create-groups')}}><AddCircleIcon className={'icon'+(lightTheme?'':' dark')}/></IconButton>
            <IconButton onClick={()=>{dispatch(toggleTheme())}}>{lightTheme && <NightlightIcon className={'icon'+(lightTheme?'':' dark')}/>}{!lightTheme && <LightModeIcon className={'icon'+(lightTheme?'':' dark')}/>}</IconButton>
            
            </div>
        </div>
        <div className={'sb-search'+(lightTheme?'':' dark')}>
            <IconButton><SearchIcon className={'icon'+(lightTheme?'':' dark')}/></IconButton>
            <input placeholder='search' className={'search-box'+(lightTheme?'':' dark')}/>
        </div>
        <div className={'sb-conversations'+(lightTheme?'':' dark')}>
        {conversations.map((conversation)=>{
            return <ConversationsItem props={conversation} key={conversation.name}/>
        })}
        </div>
        </div>
    )
}
export default Sidebar;