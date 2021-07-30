import { astNode, Heading, Paragraph, Root, Text } from "@/ast/Elements";
import { ElementType } from "@/ast/ElementType";
import { HeadingRenderer } from "./HeadingRenderer";
import { ParagraphRenderer } from "./ParagraphRenderer";
import { TextRenderer } from "./TextRenderer";

export class HTMLRenderer {
  constructor(private nodeRenderer: NodeRenderer){}

  render(ast:Root) {
    return ast.children.reduce((acc, cur) => acc.concat(this.nodeRenderer.render(cur)), "");
  }
}

export class NodeRenderer {
  render(node: astNode): string {
    return node.type === ElementType.Paragraph
    ? new ParagraphRenderer(this).render(node as Paragraph)
    : node.type === ElementType.Heading
    ? new HeadingRenderer(this).render(node as Heading)
    : new TextRenderer().render(node as Text);
  }
}
