import React from "react";
import Comment from "./Comment";

const ParentComment = props => {
  const replies = props.comment.replies.map(reply => (
    <Comment key={reply.id} comment={reply} />
  ));
  const handleShowMoreReplies = e => {
    e.preventDefault();
    props.onShowMoreReplies(props.comment.id);
  };
  return (
    <div className="parent-comment">
      <Comment comment={props.comment} />
      <div className="replies">
        {replies}
        {props.comment.replies_count !== replies.length ? (
          <a href="#" className="show_more" onClick={handleShowMoreReplies}>
            Show More Replies ({props.comment.replies_count - 1})
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default ParentComment;
