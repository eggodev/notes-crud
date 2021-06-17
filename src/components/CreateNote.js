import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateNote extends Component {
  state = {
    users: [],
    userSelected: "",
    title: "",
    content: "",
    date: new Date(),
    editing: false,
    _id: "",
  };

  async componentDidMount() {
    const res = await axios.get(
      "https://crud-notes-mernstack.herokuapp.com/api/users"
    );
    this.setState({
      users: res.data.user,
      userSelected: res.data.user[0].username,
    });

    if (this.props.match.params.id) {
      const res = await axios.get(
        "https://crud-notes-mernstack.herokuapp.com/api/notes/" +
          this.props.match.params.id
      );
      this.setState({
        userSelected: res.data.author,
        title: res.data.title,
        content: res.data.content,
        date: new Date(res.data.date),
        editing: true,
        _id: this.props.match.params.id,
      });
    }
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const newNote = {
      title: this.state.title,
      content: this.state.content,
      date: this.state.date,
      author: this.state.userSelected,
    };

    if (this.state.editing) {
      await axios.put(
        "https://crud-notes-mernstack.herokuapp.com/api/notes/" +
          this.state._id,
        newNote
      );
    } else {
      await axios.post(
        "https://crud-notes-mernstack.herokuapp.com/api/notes",
        newNote
      );
    }
    window.location.href = "/notes-crud";
  };

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onDateChange = (date) => {
    this.setState({ date });
  };

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <form onSubmit={this.onSubmit}>
          <div className="card card-body">
            <h4>Create a Note</h4>
            {/** SELECT USER */}
            <div className="form-group">
              <select
                className="form-control mb-2"
                name="userSelected"
                onChange={this.onInputChange}
                value={this.state.userSelected}
              >
                {this.state.users.map((user) => (
                  <option key={user._id} value={user.username}>
                    {user.username}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Title"
                name="title"
                onChange={this.onInputChange}
                value={this.state.title}
                required
              />
            </div>
            <div className="form-group mb-2">
              <textarea
                name="content"
                className="form-control"
                placeholder="Content"
                onChange={this.onInputChange}
                value={this.state.content}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <DatePicker
                className="form-control mb-2"
                selected={this.state.date}
                onChange={this.onDateChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}
