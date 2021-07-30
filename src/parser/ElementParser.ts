export interface ElementParser<T> {
  accept(s: string): boolean;

  parse(s: string): { node: T; rawText: string };
}