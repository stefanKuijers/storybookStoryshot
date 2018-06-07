import React from "react";
import { Placement } from "reactstrap/lib/Popper";

export interface DropdownItem {
  type: React.ComponentClass;
  children: string | React.ReactChild;
  options: object;
}

export interface PublicProps {
  id: string;
  content: React.ReactChild;
  dropdownItems: DropdownItem[];
  placement?: Placement;
  containerClassName?: string;
  className?: string;
  showArrow?: boolean;
  openOnHover?: boolean;
}

export interface ComponentState {
  popoverOpen: boolean;
}

export type Props = PublicProps;
export type State = ComponentState;
