import Home from "@/app/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

test("loads and displays greeting", async () => {
  render(<Home />);

  await screen.findByRole("heading");
  await screen.findByRole("button");

  expect(screen.getByRole("heading")).toHaveTextContent(
    "¡Hello! I’m Angela Smith"
  );
  expect(screen.getByRole("button")).toHaveTextContent("Get started");
});
