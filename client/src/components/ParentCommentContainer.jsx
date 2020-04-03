import ParentComment from "./ParentComment";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    replies: state.replies.filter(
      (reply) => reply.comment_id === ownProps.comment.id
    ),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onMoreReplies: (e) => {
      e.preventDefault();

      const id = ownProps.comment.id;
      fetch(`/api/comment_replies?comment_id=${id}`)
        .then((response) => response.json())
        .then((replies) => {
          dispatch({
            type: "REPLIES_RECEIVED",
            payload: { replies },
          });
        });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ParentComment);
