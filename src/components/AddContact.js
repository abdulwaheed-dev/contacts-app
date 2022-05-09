import React from "react";
import { Link } from "react-router-dom";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All fields are Mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    alert("Contact has been added.");
    //console.log(this.props);
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add New Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
          </div>
          <button className="ui button blue">Add Contact</button>
          <Link to="/">
            <button className="ui button blue" style={{ float: "right" }}>
              Contact List
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default AddContact;
