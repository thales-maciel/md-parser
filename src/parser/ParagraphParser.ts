import { Paragraph } from "@/ast/Elements";
import { ElementParser } from "./ElementParser";
import { Parser } from "./Parser";

export class ParagraphParser implements ElementParser<Paragraph> {
  constructor(private parser: Parser){}
  
  accept(s: string): boolean {return true}

  parse(s: string){
    const text = s.indexOf("\n") !== -1 ? s.substring(0, s.indexOf("\n") + 1) : s
    return {
      node: new Paragraph(this.parser.parse(text)),
      rawText: text,
    };
  }
}
