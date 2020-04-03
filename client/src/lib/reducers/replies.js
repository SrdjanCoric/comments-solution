export const replies = (state = [], action) => {
  switch (action.type) {
    case "COMMENTS_RECEIVED":
      const replies = action.payload.comments.reduce((acc, comment) => {
        const { replies, ...commentWithoutReplies } = comment;
        return acc.concat(replies);
      }, []);
      return state.concat(replies);
    case "REPLIES_RECEIVED":
      return state.concat(action.payload.replies);
    default:
      return state;
  }
};
