import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "./components/List";
import axios from "axios";

const URL = "https://intense-reef-10636.herokuapp.com/api/users";
class App extends Component {
  state = {
    users: [],
    error: {},
    name: "",
    bio: "",
    isUpdating: false,
    updatingId: null
  };

  componentDidMount = () => {
    axios
      .get(URL)
      .then(res => this.setState({ users: res.data }))
      .catch(error => this.setState({ error }));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  deleteUser = id => {
    axios
      .delete(`${URL}/${id}`)
      .then(res => this.setState({ users: res.data }))
      .catch(error => this.setState({ error }));
  };

  addUser = e => {
    e.preventDefault();
    const { name, bio } = this.state;
    if (!name || !bio) {
      alert("Name and Bio Required!");
    } else {
      axios
        .post(URL, { name, bio })
        .then(res => this.setState({ users: res.data }))
        .catch(error => this.setState({ error }));

      this.setState({ name: "", bio: "" });
    }
  };

  populateForm = user => {
    this.setState({
      name: user.name,
      bio: user.bio,
      updatingId: user.id,
      isUpdating: true
    });
  };

  editUser = e => {
    e.preventDefault();

    axios
      .put(`${URL}/${this.state.updatingId}`, {
        name: this.state.name,
        bio: this.state.bio
      })
      .then(res =>
        this.setState({
          users: res.data,
          isUpdating: false,
          name: "",
          bio: "",
          updatingId: null
        })
      )
      .catch(error => this.setState({ error }));
  };
  render() {
    const { users, name, bio, isUpdating } = this.state;
    return (
      <div className="App">
        <CssBaseline />
        <NavBar />
        <Form
          editUser={this.editUser}
          name={name}
          bio={bio}
          isUpdating={isUpdating}
          handleChange={this.handleChange}
          addUser={this.addUser}
        />
        {users ? (
          users.map(user => (
            <List
              key={user.id}
              populateForm={this.populateForm}
              deleteUser={this.deleteUser}
              user={user}
            />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}

export default App;
