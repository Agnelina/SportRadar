import { render, screen } from "@testing-library/react";
import App from "./App";

test("App is rendered", () => {
  render(<App />);
  const linkElement = screen.getByText(/Simulator/i);
  expect(linkElement).toBeInTheDocument();

  expect(screen.getByTestId("button")).toBeEnabled();
});
