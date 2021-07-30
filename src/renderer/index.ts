import { Root } from "@/ast/Elements"
import { HTMLRenderer, NodeRenderer } from "./Renderer"

export const render = (tree: Root): string => {
  return new HTMLRenderer(new NodeRenderer()).render(tree)
}