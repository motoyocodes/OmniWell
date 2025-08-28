import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import type { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage?: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-b-md btn-hov bg-action-button-primary hover:bg-action-button-primary-hover transition duration-500 text-white font-semibold py-2 px-8 "
      onClick={() => {
        setSelectedPage && setSelectedPage("contactus");
      }}
      href={"#contactUs"}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
