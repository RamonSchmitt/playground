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

  addToOrder = () => {
    this.setState({
      orders: [...this.state.orders, this.props.dish]
    });

    localStorage.setItem("orders", JSON.stringify(this.state.orders));
  }

  removeFromOrder = () => {
    const { orders } = this.state;
    const index = orders.indexOf("nasi");
    orders.splice(index, 1);

    this.setState({ orders });
    
    localStorage.setItem("orders", JSON.stringify(this.state.orders));
  }

  renderOrderList() {
    const { orders } = this.state;

    return orders.map( order => {
      return <li>{order}</li>;
    })
  }

  render() {
    return (
     <div>
        <h1>Time to play</h1>
        <button onClick={this.addToOrder}>add to order</button>
        <button onClick={this.removeFromOrder}>remove</button>
        <ol>{this.renderOrderList()}</ol>
      </div>
    );
  }
}

export default App;
