import React from "react";
import ParentComment from "./ParentComment";

const Comments = props => {
  return (
    <div className="comments">
      <h2>Comments ({props.comments.length})</h2>
      {props.comments.map(comment => (
        <ParentComment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
