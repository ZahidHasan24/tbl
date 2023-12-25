import { render } from "@testing-library/react";
import { H1, H2, H3, H4, H5, H6 } from "./index";

describe("Heading components", () => {
  test("renders H1 with default styles", () => {
    const { getByText } = render(<H1>Heading 1</H1>);
    const headingElement = getByText("Heading 1");

    expect(headingElement).toHaveClass(
      "text-6xl",
      "font-semibold",
      "font-clash"
    );
  });

  test("renders H2 with custom class", () => {
    const { getByText } = render(<H2 className="custom-class">Heading 2</H2>);
    const headingElement = getByText("Heading 2");

    expect(headingElement).toHaveClass(
      "text-5xl",
      "font-semibold",
      "font-clash",
      "custom-class"
    );
  });

  test("renders H3 with different styles for medium breakpoint", () => {
    const { getByText } = render(<H3>Heading 3</H3>);
    const headingElement = getByText("Heading 3");

    expect(headingElement).toHaveClass(
      "text-3xl",
      "md:text-5xl",
      "font-semibold"
    );
  });
  test("renders H4 with different styles for medium breakpoint", () => {
    const { getByText } = render(<H4>Heading 4</H4>);
    const headingElement = getByText("Heading 4");

    expect(headingElement).toHaveClass(
      "text-2xl",
      "md:text-4xl",
      "font-semibold"
    );
  });
  test("renders H5 with different styles for medium breakpoint", () => {
    const { getByText } = render(<H5>Heading 5</H5>);
    const headingElement = getByText("Heading 5");

    expect(headingElement).toHaveClass(
      "text-xl",
      "font-semibold",
      "font-clash",
      "leading-7",
      "tracking-wide"
    );
  });
  test("renders H6 with different styles for medium breakpoint", () => {
    const { getByText } = render(<H6>Heading 6</H6>);
    const headingElement = getByText("Heading 6");

    expect(headingElement).toHaveClass(
      "text-lg",
      "font-semibold",
      "font-clash",
      "leading-6",
      "tracking-wide"
    );
  });
});
