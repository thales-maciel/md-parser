import { Heading } from "../../markdown/ast";
import { ElementRenderer } from "@/renderer/ElementRenderer";

export class HeadingRenderer implements ElementRenderer<Heading> {
  render(node: Heading, content: string): string {
    return `<h${node.level}>${content}</h${node.level}>`;
  }
}
