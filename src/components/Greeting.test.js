// test with 3 A's
// arrange - setup test DataTransfer, test conditions, test env
// act - run logic that should be test
// assert - compare execution results with expected result

import { render, screen } from "@testing-library/react";
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
});
