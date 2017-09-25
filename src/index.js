import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './components/search_bar';

const API_KET ='AIzaSyDQFvodu-pZT5dsOww6wESwtznjcP8NtgM';
//create a componet
const App = () => {

  return (
<div>
    <SearchBox />
    </div>
  );
}

//take this componet's generated HTML and put it in DOM

ReactDOM.render(<App /> , document.querySelector('.container'));
