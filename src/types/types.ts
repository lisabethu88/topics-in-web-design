import type { JSX } from "react";

export type Category = {
  icon: JSX.Element;
  label: string;
  link: string;
};

export type FiltersType = {
  fatergories: string;
};
