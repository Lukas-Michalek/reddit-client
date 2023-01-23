import './assets/styles/App.css';
import { Header } from './layouts/Header/Header';
import React, {useState, useEffect } from 'react';
import { Main } from './layouts/Main/Main';
import { SideBar } from './layouts/SideBar/SideBar';




const App = () => {

  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit ] = useState('');

  useEffect( () => {
    fetch("https://www.reddit.com/r/webdev.json")
    .then( result => {
      if(result.status !== 200){    // If data are not fetched correctly
        console.log("ERROR FETCHING DATA")
        return; 
      }

      // else request was fulfilled correctly
      result.json().then(data => {
        if ( data !== null){        // if there are some data
          console.log(data);
        }
      })
    })
  },[subreddit])  // TODO=> Everytime subbredit changes useEffect will fire


  return (
    <div className="App">
      
      <div>
        <Header/>
      </div>

      <div>
        <Main />
        <SideBar />
      </div>
      
      
    </div>
  );
}

export default App;

