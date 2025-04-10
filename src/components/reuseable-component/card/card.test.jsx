import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./card";

//tests for the card component
describe("Card component", () => {
  const mockProps = {
    image: "https://via.placeholder.com/150",
    title: "Test Card Title",
    description: "This is a test description for the card component."
  };

  it("renders the image with correct src and alt", () => {
    render(<Card {...mockProps} />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", mockProps.image);
    expect(image).toHaveAttribute("alt", mockProps.title);
  });

  it("renders the correct title", () => {
    render(<Card {...mockProps} />);
    const title = screen.getByText(mockProps.title);
    expect(title).toBeInTheDocument();
  });

  it("renders the correct description", () => {
    render(<Card {...mockProps} />);
    const description = screen.getByText(mockProps.description);
    expect(description).toBeInTheDocument();
  });
});
