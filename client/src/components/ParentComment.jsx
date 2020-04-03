import React from "react";
import Comment from "./Comment";

class ParentComment extends React.Component {
  render() {
    const comment = this.props.comment;
    const replies = this.props.replies;
    return (
      <div className="parent-comment">
        <Comment comment={comment} />
        <div className="replies">
          {replies.map(reply => (
            <Comment key={reply.id} comment={reply} />
          ))}
          {comment.replies_count !== replies.length ? (
            <a
              href="#"
              className="show_more"
              onClick={this.props.onMoreReplies}
            >
              Show More Replies ({comment.replies_count - 1})
            </a>
          ) : null}
        </div>
      </div>
    );
  }
}

export default ParentComment;
