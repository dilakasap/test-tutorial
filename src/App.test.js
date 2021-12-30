import { fireEvent, render, screen } from "@testing-library/react";
import ColorButton,{replaceCamelCase} from "./components/ColorButton";

test("button has correct initial color", () => {
  render(<ColorButton/>);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
  expect(colorButton.textContent).toBe("Change to Medium Violet Red");
});
test("initial conditions", () => {
  render(<ColorButton/>);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});
test("checkbox control", () => {
  render(<ColorButton/>);
  const checkBox = screen.getByRole("checkbox", { name: "disable button" });
  const colorButton = screen.getByRole("button");

  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();
  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled();
});

test("Disabled button has gray background and revert to red", () => {
  render(<ColorButton/>);
  const checkBox = screen.getByRole("checkbox", { name: "disable button" });
  const colorButton = screen.getByRole("button");

  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

test("Clicked disabled button has gray background and reverts to blue", () => {
  render(<ColorButton/>);
  const checkBox = screen.getByRole("checkbox", { name: "disable button" });
  const colorButton = screen.getByRole("button");

  fireEvent.click(colorButton);
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
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
