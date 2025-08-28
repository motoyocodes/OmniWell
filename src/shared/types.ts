import type { ReactElement } from "react";
export type SelectedPage =
  | "home"
  | "benefits"
  | "ourclasses"
  | "contactus"
  | "Footer";

export interface BenefitTypes {
  icon: ReactElement;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description: string;
  image: string;
}
