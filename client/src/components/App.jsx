import React from "react";
import Comments from "./Comments";
import NewCommentForm from "./NewCommentForm";
import commentsData from "../lib/comments";

class App extends React.Component {
  state = {
    comments: []
  };
  componentDidMount() {
    this.setState({ comments: commentsData });
  }
  render() {
    return (
      <div>
        <Comments comments={this.state.comments} />
        <NewCommentForm />
      </div>
    );
  }
}

export default App;
