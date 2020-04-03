import React from "react";
import Comments from "./Comments";
import NewCommentForm from "./NewCommentForm";

class App extends React.Component {
  state = {
    comments: []
  };

  componentDidMount() {
    fetch("/api/comments")
      .then(response => response.json())
      .then(comments => this.setState({ comments }))
      .catch(error => console.log(error));
  }

  handleShowMoreReplies = id => {
    fetch(`/api/comment_replies?comment_id=${id}`)
      .then(response => response.json())
      .then(replies => {
        const newComments = this.state.comments.map(comment => {
          if (comment.id === id) {
            return Object.assign({}, comment, {
              replies: comment.replies.concat(replies)
            });
          } else {
            return comment;
          }
        });
        this.setState({ comments: newComments });
      })
      .catch(error => console.log(error));
  };

  handleOnSubmit = comment => {
    fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(comment)
    })
      .then(response => response.json())
      .then(newComment =>
        this.setState(state => ({
          comments: state.comments.concat(newComment)
        }))
      )
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <Comments
          comments={this.state.comments}
          onShowMoreReplies={this.handleShowMoreReplies}
        />
        <NewCommentForm onSubmit={this.handleOnSubmit} />
      </div>
    );
  }
}
export default App;
