import { astNode } from "@/ast/Elements";
import { ElementParser } from "./ElementParser";

export class Parser {
  constructor(private elementParsers: ElementParser<astNode>[]) {}

  parse(s: string): any {
    let text = s;
    const parsedContent: astNode[] = [];
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
