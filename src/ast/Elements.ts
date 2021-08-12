import { ElementType } from "@/ast/ElementType";

export class AstNode {
  readonly type: ElementType;
}

abstract class Container implements AstNode {
  type: ElementType;
  children: AstNode[];

  constructor(children: AstNode[] = []) {
    this.children = children;
  }
}

export class Heading extends Container {
  constructor(children: AstNode[], level: number) {
    super(children);
    this.level = level;
  }
  type = ElementType.Heading;
  level: number;
}

export class Paragraph extends Container {
  type = ElementType.Paragraph;
}

export class Root extends Container {
  type = ElementType.Root;
}

export class Text implements AstNode {
  constructor(content: string) {
    this.content = content;
  }

  type = ElementType.Text;
  content: string;
}
