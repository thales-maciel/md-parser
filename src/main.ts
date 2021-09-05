import { render } from "@/renderer";
import { parse } from "@/markdown/parser";

export const main = (s: string): string => {
  return render(parse(s))
};