// test with 3 A's
// arrange - setup test DataTransfer, test conditions, test env
// act - run logic that should be test
// assert - compare execution results with expected result

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // arrange
    render(<Greeting />);

    // act
    // ... nothing

    // assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'good to see you' if the button was NOT clicked", () => {
    render(<Greeting />);
    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders 'Changed!' if the button was clicked", () => {
    // arrange
    render(<Greeting />);

    // act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render 'good to see you' if the button was clicked", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    // queryByText will return null, if not found
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    // expect(outputElement).not.toBeInTheDocument();
    expect(outputElement).toBeNull();
  });
});
