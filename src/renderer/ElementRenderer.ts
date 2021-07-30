export interface ElementRenderer<T> {
  render(node: T): string;
}
