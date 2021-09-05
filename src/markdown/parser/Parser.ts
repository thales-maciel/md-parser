import { AstNode } from "@/markdown/ast/Elements";
import { ElementParser } from "./ElementParser";

export class Parser {
  constructor(private elementParsers: ElementParser<AstNode>[]) {}

  parse(s: string): AstNode[] {
    let text = s;
    const parsedContent: AstNode[] = [];
    while (text) {
      const { node, rawText } = this.parseElement(text);
      parsedContent.push(node);
      text = text.substring(rawText.length);
    }
    return parsedContent;
  }

  private parseElement(s: string) {
    for (const parser of this.elementParsers) {
      if (parser.accept(s)) {
        return parser.parse(s);
      }
    }
    // Add exception if none of the parsers accepts the string
  }
}
