import React from "react";
import ParentComment from "./ParentComment";

const Comments = props => {
  return (
    <div className="comments">
      <h2>Comments ({props.comments.length})</h2>
      {props.comments.map(comment => (
        <ParentComment
          key={comment.id}
          comment={comment}
          onShowMoreReplies={props.onShowMoreReplies}
        />
      ))}
    </div>
  );
};

export default Comments;
