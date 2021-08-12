import { ElementRenderer } from "@/renderer/ElementRenderer";
import { Text } from '@/ast/Elements'

export class TextRenderer implements ElementRenderer<Text> {
  render(node: Text): string {
    return node.content;
  }
}
