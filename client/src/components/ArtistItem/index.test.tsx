import { render, screen } from "@testing-library/react";
import ArtistItem from ".";
import "@testing-library/jest-dom/extend-expect";

const testProps = {
  artistName: "Sean Paul",
};

describe("<Artist Item/>", () => {
  it("displays the Artist name", () => {
    render(<ArtistItem {...testProps} />);

    expect(screen.getByRole("heading")).toHaveTextContent(testProps.artistName);
  });
});
