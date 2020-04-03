export const comments = (state = [], action) => {
  switch (action.type) {
    case "COMMENTS_RECEIVED":
      const commentsWithoutReplies = action.comments.reduce((acc, comment) => {
        const { replies, ...commentWithoutReplies } = comment;
        return acc.concat(commentWithoutReplies);
      }, []);
      return state.concat(commentsWithoutReplies);
    case "COMMENT_ADDED":
      return state.concat(action.comment);
    default:
      return state;
  }
};
