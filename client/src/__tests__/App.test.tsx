import { render, screen } from "./utils";
import { App } from "../App";

describe("Simple working test", () => {
  it("renders Vite, React link", () => {
    render(<App />);
    const linkElement = screen.getByText(/Vite \+ React/i);
    expect(linkElement).toBeInTheDocument();
  });
});
