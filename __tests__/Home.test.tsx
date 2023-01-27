import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../pages";

test("home", () => {
  render(<Home />);

  expect(screen.getByRole("img", { name: /vercel logo/i })).toBeDefined();
});
