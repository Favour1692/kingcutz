import { ReactElement } from "react";

export interface feature {
  icon: string;
  title: string;
  description: string;
}

export interface images {
  label: string;
  image: string;
}

export interface stat {
  value: string;
  label: string;
}

export interface service {
  icon: ReactElement;
  title: string;
  description: string;
}

export interface pricingcol {
  heading: string;
  items: { name: string; price: string }[];
}

export interface testimonial {
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export interface socialLink {
  label: string;
  href: string;
  icon: ReactElement;
}

export interface navlink {
  label: string;
  href: string;
}

export interface contacts {
  icon: ReactElement;
  title: string;
  info: string;
}
