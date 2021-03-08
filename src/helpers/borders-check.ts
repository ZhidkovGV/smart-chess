import { Position } from "./BoardModel";

export const bordersCheck = (position: Position): boolean => (
  position.x <= 7 &&
  position.y <= 7 &&
  position.x >= 0 &&
  position.y >= 0
);