import React, { Component } from "react";
import "./customers.css";
export default class Customers extends Component {
  state = {
    customers: []
  };

  componentDidMount() {
    // server request
    fetch("/customers")
      .then(res => res.json())
      .then(customers =>
        this.setState({ customers }, () => console.log(customers))
      );
  }
  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
          {this.state.customers.map(customer => {
            return (
              <li key={customer.id}>
                {customer.firstName + " " + customer.lastName}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
