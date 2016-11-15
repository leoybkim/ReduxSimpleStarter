import React, { Component } from 'react';

// functional component --> class base component
/*const SearchBar = () => {
  return <input />
};*/

/*class SearchBar extends React.Component {
  // every class base component must have a render method
  render() {
    return <input />;
  }
}*/

// ES6 syntax
class SearchBar extends Component {

  // state is a plain javascript object that is used to record and react to user events
  // each class based component has its own state object
  // whenever a component is changed, the component immediately rerenders and forces all of its children to rerender as well

  // constructor is the only function that gets called automatically whenever a new instance is created
  // it is reserved for initializing variables and initializing state
  constructor(props) {
    super(props);

    // as user type input, we want to update the search term
    this.state = { term: '' };
  }

  render() {
    // vanilla HTML event = {custom event func}
    //return <input onChange={this.onInputChange} />;
    //return <input onChange={event => console.log(event.target.value)} />; // all hail to the arrow function

    return (
      <div>
        <input
          // initially set to empty string defined from constructor
          // when user event is detected, setState runs and rerenders setting the term value to new user input
          value = {this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
        {/*Value of the input: {this.state.term}*/}
      </div>
    );
  }

  // event (can be named anything else) holds the value of what has changed
  //onInputChange(event) {
  //  console.log(event.target.value);
  //}
}

export default SearchBar;
