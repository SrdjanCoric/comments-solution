import React from "react";
import store from "../lib/store";

class NewCommentForm extends React.Component {
  state = {
    author: "",
    body: "",
  };

  handleUserInput = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  resetState = () => {
    this.setState({
      author: "",
      body: "",
    });
  };

  handleOnSubmit = async (e) => {
    e.preventDefault();
    const newComment = { author: this.state.author, body: this.state.body };
    this.props.onSubmit(newComment, () => {
      this.resetState();
    });
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <h2>Post a Comment</h2>
        <div className="input-group">
          <label>Your Name</label>
          <input
            type="text"
            name="author"
            value={this.state.author}
            onChange={this.handleUserInput}
          />
        </div>

        <div className="input-group">
          <label>Your Comment</label>
          <textarea
            name="body"
            value={this.state.body}
            cols="30"
            rows="10"
            onChange={this.handleUserInput}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default NewCommentForm;
