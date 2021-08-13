import { Root } from "@/md/ast/Elements";
import { HeadingParser } from "./HeadingParser";
import { ParagraphParser } from "./ParagraphParser";
import { Parser } from "./Parser";
import { TextParser } from "./TextParser";

const inlineParser = new Parser([new TextParser()]);
const blockParser = new Parser([
  new HeadingParser(inlineParser),
  new ParagraphParser(inlineParser),
]);

export const parse = (s: string): Root => {
  return new Root(blockParser.parse(s));
};
