import './Header.css'
import logo from '../../assets/images/reddit.svg' // TODO=> This is how to import Img in React!!!
import { SearchBar } from '../../componnents/SearchBar/SearchBar'
import { RightNavBar } from '../../componnents/RightNavBar/RightNavBar';
import React from 'react';

export const Header = () => {
    return (
        <div className='header'>
            
            <div className='logo'>
                <img alt="Reddit Logo" src={logo} />
                
                   <h1>Reddit Client</h1>
            </div>

            <div className='searchBar'>
                <SearchBar/>
            </div>

            <div>
                <RightNavBar />
            </div>

        </div>
    )
}

