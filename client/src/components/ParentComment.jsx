import React from "react";
import Comment from "./Comment";

const ParentComment = props => {
  const replies = props.comment.replies.map(reply => (
    <Comment key={reply.id} comment={reply} />
  ));
  return (
    <div className="parent-comment">
      <Comment comment={props.comment} />
      <div className="replies">
        {replies}
        <a href="#" className="show_more">
          Show More Replies ({props.comment.replies_count})
        </a>
      </div>
    </div>
  );
};

export default ParentComment;
