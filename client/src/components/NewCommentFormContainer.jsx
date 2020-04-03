import { connect } from "react-redux";
import NewCommentForm from "./NewCommentForm";

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (comment, callback) => {
      fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((newComment) => {
          dispatch({
            type: "COMMENT_ADDED",
            payload: {
              comment: newComment,
            },
          });
          callback();
        });
    },
  };
};

export default connect(null, mapDispatchToProps)(NewCommentForm);
