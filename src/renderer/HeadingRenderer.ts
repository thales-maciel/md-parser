import { Heading } from "@/ast/Elements";
import { ElementRenderer } from "@/renderer/ElementRenderer";
import { NodeRenderer } from "@/renderer/Renderer";

export class HeadingRenderer implements ElementRenderer<Heading> {
  constructor(private elementRenderer: NodeRenderer) {}
  render(node: Heading): string {
    const renderedChildren = node.children
      .map((child) => this.elementRenderer.render(child))
      .join();
    return `<h${node.level}>${renderedChildren}</h${node.level}>`;
  }
}
