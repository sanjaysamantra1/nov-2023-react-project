import React, { Component } from "react";

export default class ComponentDidMountDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
   
  }
  fetchUsers = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    console.log(users);
    this.setState({ users: users });
  };
  componentDidMount() {
    this.fetchUsers();
    document.querySelector("h1").style.color = "red";
  }
  render() {
    return (
      <>
        <h1 className="text-center">ComponentDidMount Example</h1>
        <table className="table table-bordered">
          <tbody>
            {this.state.users.map((user) => {
              return (
                <tr>
                  <td>{user.username}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address.city}</td>
                  <td>{user.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
