import { render } from "@/renderer";
import { parse } from "@/md/parser";

export const main = (s: string): string => {
  return render(parse(s))
};