// looks for node modules named react
// react is actually 2 libraries
// react creates components
// react-dom renders component to dom
import React from 'react';
import ReactDOM from 'react-dom';

// customized components
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBHxfKWIingnjD_m3SwCPn7Olz0-rODDpE';



// Create new component that makes HTML
// const --> ES6
// works like var, similar to final/constant
// const App = function() {
const App = () => {
  return <div>
           <SearchBar/>
         </div>; // JSX
};

/* equivalent to
"use strict";
var _temporalUndefined = {};
var App = _temporalUndefined;

App = function App() {
  return React.createElement(
  "div",
  null,
  "Hello world"
  );
};*/

// Render component in the DOM
// webpack and babel does the translation of JSX to vanilla javascript that can be understood by the browser
// Need to pass an instance of class App, second argument defines where this instance will render to
ReactDOM.render(<App />, document.querySelector('.container'));
