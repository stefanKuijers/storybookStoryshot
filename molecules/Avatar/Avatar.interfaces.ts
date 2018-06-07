import { Attributes } from "react";

export interface PublicProps extends Attributes {
  id?: string;
  label?: string;
  name?: string;
  color?: string;
  className?: string;
  containerClassName?: string;
  userName?: string;
  emailAddress?: string;
}

export type Props = PublicProps;
