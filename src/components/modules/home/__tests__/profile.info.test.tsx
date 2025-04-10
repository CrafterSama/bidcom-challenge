import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ProfileInfo from "../profile-info";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
}));

test("render profile info correctly", async () => {
  const mockInfo = {
    title: "Hello! I'm Angela Smith",
    headline: "ABOUT -- PERSONAL",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    button: {
      title: "Get Started",
      link: "/",
    },
  };

  const container = render(<ProfileInfo profileInfo={mockInfo} />);

  container.getByText(mockInfo.headline);
  container.getByText(mockInfo.title);
  container.getByText(mockInfo.description);
  container.getAllByRole("button");
});
