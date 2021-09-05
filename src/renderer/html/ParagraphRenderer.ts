import { Paragraph } from "@/markdown/ast";
import { ElementRenderer } from "@/renderer/ElementRenderer";

export class ParagraphRenderer implements ElementRenderer<Paragraph> {
  render(node: Paragraph, content: string): string {
    return `<p>${content}</p>`;
  }
}
