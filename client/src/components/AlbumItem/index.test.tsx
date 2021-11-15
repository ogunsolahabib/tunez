import { render, screen } from "@testing-library/react";
import AlbumItem from ".";
import "@testing-library/jest-dom/extend-expect";

const testProps = {
  artistName: "Sean Paul",
  collectionName: "The Best of Sean Paul",
  artworkUrl100:
    "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/30/bd/76/30bd76b9-ceb9-2f8a-6821-ee8ea016bbfd/source/100x100bb.jpg",
};

describe("<Album Item/>", () => {
  it("displays the Album art", () => {
    const { getByAltText } = render(<AlbumItem {...testProps} />);
    const image = getByAltText(testProps.collectionName);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", testProps.artworkUrl100);
  });

  it("displays the Album name", () => {
    const { getByText } = render(<AlbumItem {...testProps} />);
    const name = getByText(testProps.collectionName);
    expect(name).toBeInTheDocument();
  });
});
