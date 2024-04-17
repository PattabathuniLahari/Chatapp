import React from 'react';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import {IconButton} from '@mui/material';
import {useSelector} from 'react-redux'
function CreateGroup(){
    const lightTheme=useSelector((state)=>state.themeKey);
    return (
        <div className={'createGroups-container'+(lightTheme?'':' dark')}>
            <input placeholder='Enter Group Name' className={'search-box'+(lightTheme?'':' dark')}/>
            <IconButton>
            <DoneOutlineIcon/>
            </IconButton>
        </div>    )
}
export default CreateGroup;