import React from "react";

export type SCREEN_SIZES = "small" | "medium" | "large";

const SMALL_SCREEN_WIDTH = 576;
const MEDIUM_SCREEN_WIDTH = 768;

export const calcScreenSize = (size: number): SCREEN_SIZES => {
  if (size < SMALL_SCREEN_WIDTH) return "small";
  else if (size < MEDIUM_SCREEN_WIDTH) return "medium";
  return "large";
};

export const ScreenSizeContext = React.createContext<SCREEN_SIZES>("small");
