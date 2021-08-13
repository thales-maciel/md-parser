import { Root } from "@/md/ast/Elements"
import { htmlRenderer } from "./html"

export const render = (tree: Root): string => {
  return htmlRenderer.render(tree)
}