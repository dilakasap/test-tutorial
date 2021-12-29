import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  expect(colorButton.textContent).toBe("Change to red");
});

test("initial conditions", () => {
  render(<App/>);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();
 
  const checkbox= screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});
test("checkbox control", () =>{
  render(<App/>);
  const checkBox = screen.getByRole("checkbox");
  fireEvent.click(checkBox);
  expect(checkBox).toBeChecked();
  const colorButton = screen.getByRole("button");
  expect(colorButton).toBeDisabled();
  fireEvent.click(checkBox);
  expect(checkBox).not.toBeChecked();
  expect(colorButton).toBeEnabled();

});
