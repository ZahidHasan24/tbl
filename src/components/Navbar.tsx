import clsx from "clsx";
import React, { useState } from "react";
import { ReactComponent as ExpandMoreIcon } from "../assets/img/expand-more.svg";
import { Button } from "./ui/Button";
import { NavLink } from "./ui/Links";

interface MenuItem {
  label: string;
  link: string;
  hasSubmenu?: boolean;
  align: string;
  button?: boolean;
}

export interface NavbarProps {
  menuItems: MenuItem[];
}

const Navbar: React.FC<NavbarProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="bg-body">
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between sm:hidden">
          <div className="space-x-6 flex items-center">
            {menuItems.map((item, index) =>
              item?.align === "left" && !item?.button ? (
                <NavLink key={index} className="flex">
                  {item.label}
                  {item.hasSubmenu && (
                    <ExpandMoreIcon fill="white" className="ml-1" />
                  )}
                </NavLink>
              ) : (
                item?.align === "left" && (
                  <Button key={index} className="py-2.5">
                    {item.label}
                  </Button>
                )
              )
            )}
          </div>
          <div className="space-x-6 flex items-center">
            {menuItems.map((item, index) =>
              item?.align === "right" && !item?.button ? (
                <NavLink key={index} className="flex">
                  {item.label}
                  {item.hasSubmenu && (
                    <ExpandMoreIcon fill="white" className="ml-1" />
                  )}
                </NavLink>
              ) : (
                item?.align === "right" && (
                  <Button key={index} className="py-2.5">
                    {item.label}
                  </Button>
                )
              )
            )}
          </div>
        </div>

        <div
          className={clsx(
            "hamburger sm:block md:hidden lg:hidden xl:hidden focus:outline-none",
            isOpen && "open"
          )}
          onClick={toggleMenu}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </div>

        <div
          className={clsx(
            "absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md md:hidden lg:hidden xl:hidden",
            isOpen ? "flex" : "hidden"
          )}
        >
          {menuItems.map((item, index) => (
            <NavLink key={index} className="text-black">
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
