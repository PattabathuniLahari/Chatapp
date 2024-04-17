import React from 'react';
import './myStyles.css';
import logo from '../Images/live-chat.png';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
function Users(){
    return (
        <AnimatePresence>
        <motion.div 
        initial={{opacity:0,scale:0}}
        animate={{opacity:1,scale:1}}
        exit={{opacity:0,scale:0}}
        transition={{ease:'anticipate',duration:'0.3'}}
        className='list-container'>
            <div className='ug-header'>
                <img src={logo} style={{height:'2rem',width:'2rem'}}/>
                <p className='ug-title'>Online Users</p>
            </div>
            <div className='sb-search'>
                <IconButton><SearchIcon/></IconButton>
                <input placeholder='Search' className='search-box'/>
            </div>
            <div className='ug-list'>
                <motion.div whileHover={{scale:1.03}} className='list-item'>
                    <p className='con-icon'>T</p>
                    <p className='con-title'>Test User</p>
                </motion.div>
                <div className='list-item'>
                    <p className='con-icon'>T</p>
                    <p className='con-title'>Test User</p>
                </div>
                <div className='list-item'>
                    <p className='con-icon'>T</p>
                    <p className='con-title'>Test User</p>
                </div>
                <div className='list-item'>
                    <p className='con-icon'>T</p>
                    <p className='con-title'>Test User</p>
                </div>
                <div className='list-item'>
                    <p className='con-icon'>T</p>
                    <p className='con-title'>Test User</p>
                </div>
                <div className='list-item'>
                    <p className='con-icon'>T</p>
                    <p className='con-title'>Test User</p>
                </div>
                <div className='list-item'>
                    <p className='con-icon'>T</p>
                    <p className='con-title'>Test User</p>
                </div>
                <div className='list-item'>
                    <p className='con-icon'>T</p>
                    <p className='con-title'>Test User</p>
                </div>
            </div>
        </motion.div>
        </AnimatePresence>
    )
}
export default Users;