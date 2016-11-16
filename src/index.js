// looks for node modules named react
// react is actually 2 libraries
// react creates components
// react-dom renders component to dom
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// custom components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBHxfKWIingnjD_m3SwCPn7Olz0-rODDpE';

// configuration function and callback function
/*YTSearch({key: API_KEY, term: 'funny cats'}, function(data){
  console.log(data);
});*/

// Create new component that makes HTML
// const --> ES6
// works like var, similar to final/constant
// const App = function() {
/*const App = () => {
  return <div>
           <SearchBar/>
         </div>; // JSX
};*/

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }; // list of videos

    YTSearch({key: API_KEY, term: 'funny cats'}, (videos) =>{
      //console.log(data);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }); //syntactic sugar when key and properties have the same name
      // this.setState({ videos: videos });
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />

        {/* passing prop videos to VideoList
            anytime app rerenders, VideoList will get new videos */}
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    )
  }
}

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
