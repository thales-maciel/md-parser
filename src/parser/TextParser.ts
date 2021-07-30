import { Text } from "@/ast/Elements";
import { ElementParser } from "./ElementParser";

export class TextParser implements ElementParser<Text> {
  accept(s: string): boolean {
    return true;
  }

  parse(s: string) {
    return {
      node: new Text(s.replace("\n", "")),
      rawText: s,
    };
  }
}
