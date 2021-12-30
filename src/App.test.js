import { fireEvent, render, screen } from "@testing-library/react";
import App, { replaceCamelCase } from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  expect(colorButton.textContent).toBe("Change to red");
});

test("initial conditions", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});
test("checkbox control", () => {
  render(<App />);
  const checkBox = screen.getByRole("checkbox", { name: "disable button" });
  const colorButton = screen.getByRole("button");

  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();
  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled();
});

test("Disabled button has gray background and revert to red", () => {
  render(<App />);
  const checkBox = screen.getByRole("checkbox", { name: "disable button" });
  const colorButton = screen.getByRole("button");

  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("Clicked disabled button has gray background and reverts to blue", () => {
  render(<App />);
  const checkBox = screen.getByRole("checkbox", { name: "disable button" });
  const colorButton = screen.getByRole("button");

  fireEvent.click(colorButton);
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
});

describe("replace camelcase function", () => {
  test("no capital letter", () => {
    expect(replaceCamelCase("red")).toBe("red");
  });

  test("one capital letter", () => {
    expect(replaceCamelCase("MidnightBlue")).toBe("Midnight Blue");
  });
  test("multiple capital lettters", () => {
    expect(replaceCamelCase("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
