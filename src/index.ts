import "module-alias/register";

import { render } from "@/renderer";
import { parse } from "@/markdown/parser";

export const renderMarkdown = (s: string): string => {
  return render(parse(s))
};
