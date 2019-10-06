import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("should allow users to see the nubmer of items in the cart", () => {
    const itemsInCart = "3";
    const { getByText } = render(<Header />);
    expect(getByText(itemsInCart)).toBeInTheDocument();
  });
});
