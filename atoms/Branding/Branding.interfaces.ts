import React from "react";

export interface PublicProps extends React.HTMLProps<HTMLElement> {
  logo: string;
  tagline?: React.ReactChild | string;
}

export type Props = PublicProps;
