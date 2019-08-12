import React, { Component } from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <BookList/>
      </div>
    );
  }
}

export default App;
