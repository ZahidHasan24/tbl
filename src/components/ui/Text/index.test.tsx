import { render } from "@testing-library/react";
import { Paragraph, Span } from "./index";

describe("Text component", () => {
  test("renders with custom class", () => {
    const { getByText } = render(
      <Paragraph className="custom-class">Paragraph Text</Paragraph>
    );
    const paragraphElement = getByText("Paragraph Text");

    expect(paragraphElement).toHaveClass("custom-class");
  });
  test("renders with custom class", () => {
    const { getByText } = render(
      <Span className="custom-class">Span Text</Span>
    );
    const spanElement = getByText("Span Text");

    expect(spanElement).toHaveClass("custom-class");
  });
});
