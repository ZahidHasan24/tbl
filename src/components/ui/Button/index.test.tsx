import { render, fireEvent } from "@testing-library/react";
import { Button, ButtonProps } from "./index";

describe("Button component", () => {
  const renderButton = (props: ButtonProps) => {
    return render(<Button {...props}>Click me</Button>);
  };

  test("renders with default props", () => {
    const { getByText } = renderButton({});
    expect(getByText("Click me")).toBeInTheDocument();
  });

  test("renders with primary style when isPrimary is true", () => {
    const { getByText } = renderButton({ isPrimary: true });
    expect(getByText("Click me")).toHaveClass("bg-primary");
  });

  test("renders with secondary style when isPrimary is false", () => {
    const { getByText } = renderButton({ isPrimary: false });
    expect(getByText("Click me")).toHaveClass("bg-secondary");
  });

  test("applies custom class name", () => {
    const { getByText } = renderButton({ className: "custom-class" });
    expect(getByText("Click me")).toHaveClass("custom-class");
  });

  test("handles click event", () => {
    const handleClick = jest.fn();
    const { getByText } = renderButton({ onClick: handleClick });
    fireEvent.click(getByText("Click me"));
    expect(handleClick).toHaveBeenCalled();
  });

  test("applies disabled attribute when disabled is true", () => {
    const { getByText } = renderButton({ disabled: true });
    expect(getByText("Click me")).toBeDisabled();
  });

  test("applies opacity-50 class when disabled is true", () => {
    const { getByText } = renderButton({ disabled: true });
    expect(getByText("Click me")).toHaveClass("opacity-50");
  });
});
