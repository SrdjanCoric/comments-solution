import React from "react";
import { shallow } from "enzyme";
import ParentComment from "../components/ParentComment";

describe("ParentComment", () => {
  const comment = {
    id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
    author: "Reed Fisher",
    body: "Sint in in sunt amet.",
    postedAt: 1550488214207,
    replies_count: 3,
    replies: [
      {
        id: "116dbd01-d5f3-4dfb-afeb-f822a9264a5e",
        comment_id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
        author: "Kathleen Nikolaus",
        body:
          "Officia suscipit sint sint impedit nemo. Labore aut et quia quasi ut. Eos voluptatibus quidem eius delectus beatae excepturi.",
        postedAt: 1550419941546,
      },
      {
        id: "116dbd01-d643-4dfb-afeb-f822a9264a5e",
        comment_id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
        author: "Kathleen Nikolaus",
        body:
          "Offici sint sint impedit nemo. Labore aut et quia quasi ut. Eos voluptatibus quidem eius delectus beatae excepturi.",
        postedAt: 1550419941546,
      },
    ],
  };
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ParentComment comment={comment} />);
  });
  it("has a class parent-comment", () => {
    expect(wrapper.find(".parent-comment").length).toEqual(1);
  });
  it("renders replies for comment", () => {
    expect(wrapper.find(".replies Comment").length).toEqual(
      comment.replies.length
    );
  });
  it("calls the onShowMoreReplies when show more button is clicked", () => {
    let func = jest.fn();
    let wrapper = shallow(
      <ParentComment comment={comment} onShowMoreReplies={func} />
    );
    wrapper.find(".show_more").simulate("click", { preventDefault: () => {} });
    expect(func.mock.calls.length).toEqual(1);
  });
  it("calls onShowMoreReplies with commentId as the argument", () => {
    let func = jest.fn();
    let wrapper = shallow(
      <ParentComment comment={comment} onShowMoreReplies={func} />
    );
    wrapper.find(".show_more").simulate("click", { preventDefault: () => {} });
    expect(func.mock.calls[0][0]).toEqual(comment.id);
  });
});
