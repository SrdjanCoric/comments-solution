import React from "react";
import Comment from "./Comment";
import store from "../lib/store";

class ParentComment extends React.Component {
  handleShowMoreReplies = async e => {
    e.preventDefault();
    let id = this.props.comment.id;
    try {
      const response = await fetch(`/api/comment_replies?comment_id=${id}`);
      const replies = await response.json();
      store.dispatch({ replies, comment_id: id, type: "REPLIES_RECEIVED" });
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    const comment = this.props.comment;
    const replies = store
      .getState()
      .replies.filter(r => r.comment_id === comment.id);
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
              onClick={this.handleShowMoreReplies}
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
