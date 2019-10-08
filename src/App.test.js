import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  describe("render", () => {
    let renderedApp;
    beforeEach(() => {
      renderedApp = render(<App />);
    });
    it("should show the number of items in the cart in the header", () => {
      const itemsInCart = "3";
      const itemsCount = renderedApp.getByTestId("items-count");
      expect(itemsCount.textContent).toBe(itemsInCart);
    });

    it("should show the breadcrumb and the title", () => {
      const breadcrumbText = "Home → Checkout";
      const titleText = "Your Cart";
      const breadcrumbItem = renderedApp.getByTestId("breadcrumb");
      const titleItem = renderedApp.getByTestId("title");
      expect(breadcrumbItem.textContent).toBe(breadcrumbText);
      expect(titleItem.textContent).toBe(titleText);
    });

    it("should render the table of the product in the cart", () => {
      const numberOfRows = 3;
      const numberOfColumns = 5;
      const table_header_columns = renderedApp.container.querySelector(
        ".thead .tr"
      );
      const table_body_rows = renderedApp.container.querySelector(".tbody ");
      expect(table_header_columns.children.length).toBe(numberOfColumns);
      expect(table_body_rows.children.length).toBe(numberOfRows);
    });

    it("should render the footer section with the cta", () => {
      const footerSection = renderedApp.getByTestId("footer");
      const checkoutButton = renderedApp.getByTestId("checkout");
      expect(footerSection).toBeInTheDocument();
      expect(checkoutButton).toBeInTheDocument();
    });
  });
});
