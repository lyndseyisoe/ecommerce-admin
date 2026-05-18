import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

test("renders search input", () => {
  render(<SearchBar search="" setSearch={() => {}} />);

  expect(
    screen.getByPlaceholderText("Search products...")
  ).toBeInTheDocument();
});