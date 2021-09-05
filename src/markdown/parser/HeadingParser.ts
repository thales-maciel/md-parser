import { Heading } from "@/markdown/ast/Elements";
import { ElementParser } from "./ElementParser";
import {Parser} from "./Parser";

export class HeadingParser implements ElementParser<Heading> {
  constructor(private parser: Parser) {}

  accept(s: string): boolean {
    const matches = ["# ", "## ", "### ", "#### ", "##### ", "###### "];
    return matches.some((match) => s.startsWith(match));
  }

  parse(s: string) {
    const text =
      s.indexOf("\n") !== -1 ? s.substring(0, s.indexOf("\n") + 1) : s;
    const [, hashes, , inlineText] = /^(#{1,6})(\s)(.*(\n)?)/.exec(text);
    return {
      node: new Heading(this.parser.parse(inlineText), hashes.length),
      rawText: text,
    };
  }
}
