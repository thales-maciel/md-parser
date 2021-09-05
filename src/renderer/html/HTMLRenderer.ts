import { AstNode, Root } from "@/markdown/ast";
import { ElementType } from "@/markdown/ast";
import { ElementRenderer } from "@/renderer/ElementRenderer";
import { Renderer } from "@/renderer/Renderer";

export class HTMLRenderer implements Renderer{
  constructor(private rendererConfig: {[key in ElementType]?: ElementRenderer<AstNode>}){}

  private getElementRenderer(node: AstNode): ElementRenderer<AstNode> {
    const renderer = this.rendererConfig[node.type]
    if (!renderer) throw new Error(`Renderer not found for type ${node.type}`);
    return renderer
  }

  private renderElement(node: AstNode): string {
    return node.type === ElementType.Text
      ? node.content
      : this.getElementRenderer(node)
        .render(node, node.children.map(this.renderElement).join())
  }

  render(ast: Root): string {
    return ast.children
      .reduce((acc, cur) => acc
      .concat(this.renderElement(cur)), "");
  }
}
