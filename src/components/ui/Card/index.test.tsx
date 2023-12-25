import { render } from "@testing-library/react";
import Card, { CardProps } from "./index";

describe("Card component", () => {
  const renderCard = (props: CardProps) => {
    return render(<Card {...props} />);
  };

  const sampleProps: CardProps = {
    isActive: true,
    icon: <div>Icon</div>,
    imgSrc: "sample-image.jpg",
    title: "Sample Title",
    description: "Sample Description",
    gradientBg: "linear-gradient(to right, #ff8a00, #da1b60)",
  };

  test("renders with provided props", () => {
    const { getByText, getByAltText } = renderCard(sampleProps);
    expect(getByText("Sample Title")).toBeInTheDocument();
    expect(getByText("Sample Description")).toBeInTheDocument();
    expect(getByText("Icon")).toBeInTheDocument();
    expect(getByAltText("HomeGridImg")).toBeInTheDocument();
    expect(getByText("Sample Title")).toHaveStyle(
      "background: linear-gradient(to right, #ff8a00, #da1b60)"
    );
  });
});
