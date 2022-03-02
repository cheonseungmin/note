import React from "react";

export const Comp1 = () => {
  return <>Comp1</>;
};

export const Comp2 = () => {
  return <>Comp2</>;
};

const Comps: {
  [key: string]: () => JSX.Element;
} = {
  Comp1: Comp1,
  Comp2: Comp2,
};

export default Comps;

export type CompTypes = "Comp1" | "Comp2";
