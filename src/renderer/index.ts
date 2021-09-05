import { Root } from "@/markdown/ast"
import { htmlRenderer } from "./html"

export const render = (tree: Root): string => {
  return htmlRenderer.render(tree)
}