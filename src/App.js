import React, { useEffect, useState } from 'react';
import './App.css';
import $ from 'jquery'; // Import jQuery
var category = ''
const xLogo = require('./xLogo.webp');

function App() {
const [quote, setQuote] = useState({});
const tweetUrl = `https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(`"${quote.quote}" - ${quote.author}`)}`;
const handleButton = ()=>{
    $.ajax({
      method: 'GET',
      url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
      headers: { 'X-Api-Key': 'Fu/R7pNv1msFHpLzH3E1mg==umITEdtdtZp3JQlH'},
      contentType: 'application/json',
      success: function(result) {
        setQuote(result[0]);
      },
      error: function ajaxError(jqXHR) {
          console.error('Error: ', jqXHR.responseText);
      }
    });
  };

  useEffect(()=>{
    handleButton()
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <section id ='quote-box'>
            <h1 id='text'>"{quote.quote}</h1>
            <h3 id='author'>-{quote.author}</h3>
            <a id='tweet-quote' href={tweetUrl}> <img src={xLogo} alt = 'X tweet logo'></img></a><button id='new-quote' onClick={handleButton}> New Quote</button>
        </section>
      </header>

    </div>
  );
}

export default App;
