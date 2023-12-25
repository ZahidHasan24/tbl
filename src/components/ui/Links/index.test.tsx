import { render } from "@testing-library/react";
import { NavLink, NavLinkProps } from "./index";

describe("NavLink component", () => {
  const renderNavLink = (props: NavLinkProps) => {
    return render(<NavLink {...props}>Link Text</NavLink>);
  };

  test("renders with default styles", () => {
    const { getByText } = renderNavLink({});
    const linkElement = getByText("Link Text");

    expect(linkElement).toHaveClass(
      "text-base",
      "text-gray-200",
      "font-jakarta",
      "font-normal"
    );
  });

  test("renders with custom class", () => {
    const { getByText } = renderNavLink({ className: "custom-class" });
    const linkElement = getByText("Link Text");

    expect(linkElement).toHaveClass("custom-class");
  });

  test("passes additional HTML attributes", () => {
    const { getByText } = renderNavLink({ href: "/example" });
    const linkElement = getByText("Link Text");

    expect(linkElement).toHaveAttribute("href", "/example");
  });
});
