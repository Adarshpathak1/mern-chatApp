import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';

import "../Components/myStyles.css";


const Sidebar = () => {
  return (
    <div className='sidebar-container'>
        <div className='sb-header'>
           <div>
            <IconButton>
            <AccountCircleIcon/>
            </IconButton>
           </div>

            <div>
            <IconButton>
            <PersonAddIcon/>
            </IconButton>

            <IconButton>
            <GroupAddIcon/>
            </IconButton>

            <IconButton>
            <AddCircleIcon/>
            </IconButton>

            <IconButton>
            <NightlightIcon/>
            </IconButton>
            </div>
        </div>
        <div className='sb-search'>
            <SearchIcon/>
            <input className='search-box' type='text' placeholder='Search'/>
            </div>
        <div className='sb-conversations'>Header</div>
    </div>
  )
}

export default Sidebar;