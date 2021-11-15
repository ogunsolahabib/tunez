import { render, screen } from "@testing-library/react";
import SongItem from ".";
import "@testing-library/jest-dom/extend-expect";

const testProps = {
  trackName: "Sean Paul",
  artistName: "The Best of Sean Paul",
  artworkUrl60:
    "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/30/bd/76/30bd76b9-ceb9-2f8a-6821-ee8ea016bbfd/source/100x100bb.jpg",
};

describe("<Song Item/>", () => {
  it("displays the Song art", () => {
    const { getByAltText } = render(<SongItem {...testProps} />);
    const image = getByAltText(testProps.trackName);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", testProps.artworkUrl60);
  });

  it("displays the Song name", () => {
    const { getByText } = render(<SongItem {...testProps} />);
    const name = getByText(testProps.trackName);
    expect(name).toBeInTheDocument();
  });
});
