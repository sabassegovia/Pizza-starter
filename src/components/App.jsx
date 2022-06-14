import React from 'react';
import Filter from './Filter.jsx';
import Pizzas from './Pizzas.jsx';
import axios from 'axios';
import data from '../.././server/pizza.json'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzaList: []
    };
  }

  componentDidMount() {
    var temp = this.state.pizzaList;
    console.log(temp);
    //getting pizza from file
    axios.get('/Users/sabassegovia/Pizza-starter/server/pizza.json')
      .then((data) => {
        console.log(`:::::: ${data.data}`);
        this.setState({ pizzaList: data })
      })
      .catch((err) => console.log('error'));
  }


  render() {
    return (
      <div>
        <div>In App</div>
        <Filter />
        <Pizzas />
        </div>
    );
  }
};

export default App;