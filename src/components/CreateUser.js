import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  state = {
    users: [],
    username: "",
  };

  async componentDidMount() {
    this.getUsers();
    console.log(this.state.users);
  }

  getUsers = async () => {
    const res = await axios.get(
      "https://crud-notes-mernstack.herokuapp.com/api/users"
    );
    this.setState({ users: res.data.user });
  };

  onchangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://crud-notes-mernstack.herokuapp.com/api/users", {
      username: this.state.username,
    });
    this.setState({ username: "" });
    this.getUsers();
  };

  deleteUser = async (id) => {
    await axios.delete(
      "https://crud-notes-mernstack.herokuapp.com/api/users/" + id
    );
    this.getUsers();
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <form onSubmit={this.onSubmit}>
            <div className="card card-body">
              <h3>Create New User</h3>

              <div className="form-group">
                <input
                  type="text"
                  value={this.state.username}
                  className="form-control mb-2"
                  onChange={this.onchangeUsername}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            {this.state.users.map((user) => (
              <li
                className="list-group-item list-group-item-action"
                key={user._id}
                onDoubleClick={() => this.deleteUser(user._id)}
              >
                {user.username}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
