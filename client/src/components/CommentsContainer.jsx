import Comments from "./Comments";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchComments: () => {
      fetch("/api/comments")
        .then((response) => response.json())
        .then((commentData) => {
          dispatch({
            type: "COMMENTS_RECEIVED",
            payload: {
              comments: commentData,
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
