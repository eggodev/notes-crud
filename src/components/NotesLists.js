import React, { Component } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

export default class NotesLists extends Component {
  state = {
    notes: [],
  };

  componentDidMount() {
    this.getNotes();
  }

  getNotes = async () => {
    const res = await axios.get(
      "https://crud-notes-mernstack.herokuapp.com/api/notes"
    );
    this.setState({ notes: res.data });
  };

  deleteNote = async (id) => {
    await axios.delete(
      "https://crud-notes-mernstack.herokuapp.com/api/notes/" + id
    );
    this.getNotes();
  };

  render() {
    return (
      <div>
        <div className="row">
          {this.state.notes.map((note) => (
            <div className="col-md-4 p-2" key={note._id}>
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <h5>{note.title}</h5>
                  <Link className="btn btn-secondary" to={"/edit/" + note._id}>
                    Edit
                  </Link>
                </div>
                <div className="card-body">
                  <p>{note.content}</p>
                  <p>{note.author}</p>
                  <p>{format(note.date)}</p>
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      this.deleteNote(note._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
