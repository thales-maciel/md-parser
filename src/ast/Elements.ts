import { ElementType } from "@/ast/ElementType";

export class astNode {
  readonly type: ElementType;
}

abstract class Container implements astNode {
  type: ElementType;
  children: astNode[];

  constructor(children: astNode[] = []) {
    this.children = children;
  }
}

export class Heading extends Container {
  constructor(children: astNode[], level: number) {
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

export class Text implements astNode {
  constructor(content: string) {
    this.content = content;
  }

  type = ElementType.Text;
  content: string;
}
