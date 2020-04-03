import React from "react";
import ParentCommentContainer from "./ParentCommentContainer";

class Comments extends React.Component {
  componentDidMount() {
    this.props.onFetchComments();
  }

  render() {
    let comments = this.props.comments;
    return (
      <div className="comments">
        <h2>Comments ({comments.length})</h2>
        {comments.map((comment) => (
          <ParentCommentContainer key={comment.id} comment={comment} />
        ))}
      </div>
    );
  }
}

export default Comments;
