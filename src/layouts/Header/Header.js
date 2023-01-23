import './header.css'
import logo from '../../assets/images/reddit.svg' // TODO=> This is how to import Img in React!!!
import { SearchBar } from '../../componnents/SearchBar/SearchBar'
import React from 'react';

export const Header = () => {
    return (
        <div className='Header'>
            
            <div className='logo'>
                <img alt="Reddit Logo" src={logo} />
                <p>
                    <span>Reddit 
                    Client</span> by Lukas Michalek</p>
            </div>

            <div className='searchBar'>
                <SearchBar/>
            </div>
        </div>
    )
}

