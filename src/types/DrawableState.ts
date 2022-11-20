import { Point } from "./Point";

export interface DrawableState {
  size:Point,
  canvas?:HTMLCanvasElement | null | undefined,
  ctx?:CanvasRenderingContext2D | null | undefined
}