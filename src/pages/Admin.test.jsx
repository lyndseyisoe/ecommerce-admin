import { render, screen } from "@testing-library/react";
import Admin from "./Admin";

test("renders admin panel", () => {
  render(<Admin />);

  expect(
    screen.getByText("Admin Panel")
  ).toBeInTheDocument();
});