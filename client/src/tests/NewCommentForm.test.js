import React from "react";
import { shallow } from "enzyme";
import NewCommentForm from "../components/NewCommentForm";

describe("NewCommentForm", () => {
  it("changes the state when author input is changed", () => {
    let wrapper = shallow(<NewCommentForm />);
    let input = wrapper.find("[name='author']");

    input.simulate("change", {
      target: { name: "author", value: "Srdjan" },
      preventDefault: () => {},
    });
    expect(wrapper.state().author).toEqual("Srdjan");
  });
  it("calls onSubmit when form is submitted", () => {
    let func = jest.fn();
    let wrapper = shallow(<NewCommentForm onSubmit={func} />);
    // let form = wrapper.find("form");

    wrapper.simulate("submit", {
      preventDefault: () => {},
    });
    expect(func.mock.calls.length).toEqual(1);
  });
  it("passes comment argument to onSubmit when form is submitted", () => {
    let func = jest.fn();
    let wrapper = shallow(<NewCommentForm onSubmit={func} />);
    // let form = wrapper.find("form");
    let comment = {
      author: wrapper.state().author,
      body: wrapper.state().body,
    };
    wrapper.simulate("submit", {
      preventDefault: () => {},
    });
    expect(func.mock.calls[0][0]).toEqual(comment);
  });
});
