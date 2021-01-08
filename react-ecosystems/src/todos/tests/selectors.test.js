import { expect } from "chai";
import { getCompletedTodos } from "../selectors";

describe("The getCompletedTodo selector", () => {
  it("Returns only completed Todos", () => {
    const fakeTodos = [
      {
        text: "Hello",
        isCompleted: true,
      },
      {
        text: "goodbye",
        isCompleted: false,
      },
      {
        text: "climb mount averest",
        isCompleted: false,
      },
    ];
    const expected = [
      {
        text: "Hello",
        isCompleted: true,
      },
    ];
    const actual = getCompletedTodos.resultFunc(fakeTodos);

    expect(actual).to.deep.equal(expected);
  });
});
