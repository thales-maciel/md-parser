import { Root } from "@/markdown/ast";

export interface Renderer {
  render(ast: Root): string
}
