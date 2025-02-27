import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import data from './data.json';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <FilterableProductTable products={data}/>
      </div>
    )
  }
}

export default App;
