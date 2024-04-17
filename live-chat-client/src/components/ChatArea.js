import React from 'react';
import './myStyles.css';
import {IconButton} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import MessageOthers from './MessageOthers';
import {useState} from 'react';
import MessageSelf from './MessageSelf';
import { useSelector } from 'react-redux';
function ChatArea(){
    const lightTheme=useSelector((state)=>state.themeKey);
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
    let props=conversations[0];
    return(
        <div className={'chatarea-container'+(lightTheme?'':' dark')}>
            <div className={'chatarea-header'+(lightTheme?'':' dark')}>
                <p className='con-icon'>{props.name[0]}</p>
                <div className={'header-text'+(lightTheme?'':' dark')}>
                    <p className={'con-title'+(lightTheme?'':' dark')}>{props.name}</p>
                    <p className={'con-timestamp'+(lightTheme?'':' dark')}>{props.timeStamp}</p>
                </div>
                <IconButton>
                    <DeleteIcon className={'icon'+(lightTheme?'':' dark')}/>
                </IconButton>
            </div>
            
            
            <div className={'messages-container'+(lightTheme?'':' dark')}>
               
                <MessageOthers/>
                <MessageSelf/>

                <MessageOthers/>
                <MessageSelf/>

                <MessageOthers/>
                <MessageSelf/>
              
                
            </div>
            <div className={'text-input-area'+(lightTheme?'':' dark')}>
                <input placeholder='Type a Message' className={'search-box' +(lightTheme?'':' dark')}/>   
                <IconButton><SendIcon className={'icon'+(lightTheme?'':' dark')}/></IconButton>  
            </div>
        </div>
    )
}
export default ChatArea;