import { Paragraph } from "@/ast/Elements";
import { ElementRenderer } from "@/renderer/ElementRenderer";
import { NodeRenderer } from "./Renderer";

export class ParagraphRenderer implements ElementRenderer<Paragraph> {
  constructor(private elementRenderer: NodeRenderer) {}
  render(node: Paragraph): string {
    const renderedChildren = node.children
      .map((child) => this.elementRenderer.render(child))
      .join();
    return `<p>${renderedChildren}</p>`;
  }
}
