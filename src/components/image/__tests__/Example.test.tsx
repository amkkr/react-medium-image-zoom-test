import { render, screen } from "@testing-library/react";
import Example from "../Example";
import "@testing-library/jest-dom";

describe("test Example", () => {
  test("When passing an image URL starting with https, it should be displayed.", () => {
    const imageUrl =
      "https://github.blog/wp-content/uploads/2023/05/1200.630-Community-wLogo.png";

    render(<Example imageUrl={imageUrl} />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });

  test("When passing a local image address, it should be displayed.", () => {
    const imagePath = "images/my-picture.jpg";

    render(<Example imageUrl={imagePath} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
