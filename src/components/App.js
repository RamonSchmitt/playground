import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      orders: [],
    };
  }

  componentWillMount() {
    const orders = JSON.parse(localStorage.getItem("orders"));

    this.setState({ orders });
  }

  addToOrder() {
    this.setState(prevState => ({
      orders: prevState.orders
    }));
  }

  removeFromOrder() {
  }

  render() {
    console.log(this.props);
    return (
     <div>
        <h1>Time to play</h1>
        <button onClick={this.addToOrder.bind(this)}>add to order</button>
        <button onClick={this.removeFromOrder}>remove</button>
        <p>{this.state.orders}</p>
      </div>
    );
  }
}

export default App;
