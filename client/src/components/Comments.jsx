import React from "react";
import ParentComment from "./ParentComment";
import store from "../lib/store";

class Comments extends React.Component {
  async componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
    try {
      const response = await fetch("/api/comments");
      const comments = await response.json();
      store.dispatch({ comments, type: "COMMENTS_RECEIVED" });
    } catch (error) {
      console.error(error);
    }
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    let comments = store.getState().comments;
    return (
      <div className="comments">
        <h2>Comments ({comments.length})</h2>
        {comments.map((comment) => (
          <ParentComment
            key={comment.id}
            comment={comment}
            onShowMoreReplies={this.props.onShowMoreReplies}
          />
        ))}
      </div>
    );
  }
}

export default Comments;
