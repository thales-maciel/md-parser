import { Text } from "@/md/ast/Elements";
import { ElementParser } from "./ElementParser";

export class TextParser implements ElementParser<Text> {
  accept(s: string): boolean {
    return Boolean(s);
  }

  parse(s: string) {
    return {
      node: new Text(s.replace("\n", "")),
      rawText: s,
    };
  }
}
