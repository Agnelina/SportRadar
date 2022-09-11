import { act, fireEvent, render, screen } from "@testing-library/react";
import { SimulationBox } from "./SimulationBox";

describe("SimulationBox", () => {
  test("component is rendered", () => {
    render(<SimulationBox />);

    expect(screen.getByText(/Germany/)).toBeInTheDocument();

    const button = screen.getByTestId("button");
    expect(button).toBeEnabled();
    expect(button).toHaveTextContent("Start");
  });

  test("button text changes after pressing it", () => {
    render(<SimulationBox />);

    const button = screen.getByTestId("button");
    expect(button).toHaveTextContent("Start");

    fireEvent.click(button);
    expect(button).toHaveTextContent("Finish");

    fireEvent.click(button);
    expect(button).toHaveTextContent("Restart");

    fireEvent.click(button);
    expect(button).toHaveTextContent("Finish");
  });

  jest.setTimeout(100000);
  test("after starting simulation, it expires in 90 seconds", async () => {
    render(<SimulationBox />);

    const button = screen.getByTestId("button");
    expect(button).toHaveTextContent("Start");

    fireEvent.click(button);
    expect(button).toHaveTextContent("Finish");

    await act(async () => {
      await new Promise((r) => setTimeout(r, 90000));
    });

    expect(button).toHaveTextContent("Restart");
  });
});
