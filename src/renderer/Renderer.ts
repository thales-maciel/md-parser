import { Root } from "@/markdown/ast/Elements";

export interface Renderer {
  render(ast: Root): string
}
