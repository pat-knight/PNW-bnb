import React, { Component } from 'react';
import './App.css';
import { ReactiveBase } from '@appbaseio/reactivesearch';

class App extends Component {
  render() {
    return (
      <section className='container'>
        <ReactiveBase
          app='listings'
          credentials="2i2gQJ4bT:18294d70-14c0-4945-afb0-14a5046ad746"
          type='listing'
          >
          Linking ReactiveSearch
        </ReactiveBase>
      </section>
    );
  }
}

export default App;
