import { Root } from "@/md/ast/Elements";

export interface Renderer {
  render(ast: Root): string
}
