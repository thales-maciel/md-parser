import { AstNode } from "@/markdown/ast/Elements"
import { ElementType } from "@/markdown/ast/ElementType"
import { ElementRenderer } from "@/renderer/ElementRenderer"
import { HeadingRenderer } from "@/renderer/html/HeadingRenderer"
import { ParagraphRenderer } from "@/renderer/html/ParagraphRenderer"
import { HTMLRenderer } from "@/renderer/html/HTMLRenderer"

const paragraphRenderer = new ParagraphRenderer()
const headingRenderer = new HeadingRenderer()

const elementRenderers: {[key in ElementType]?: ElementRenderer<AstNode>} = {
  [ElementType.Paragraph]: paragraphRenderer,
  [ElementType.Heading]: headingRenderer
}

export const htmlRenderer = new HTMLRenderer(elementRenderers)
