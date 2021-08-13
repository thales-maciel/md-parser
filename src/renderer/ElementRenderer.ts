export interface ElementRenderer<T> {
  render(node: T, content: string): string;
}
