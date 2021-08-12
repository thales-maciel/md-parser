import "module-alias/register";

import fs from "fs";
import { render } from "./renderer";
import { parse } from "./parser";

export const main = (s: string): string => {
  return render(parse(s))
};

const inputFile = process.argv[2];

fs.readFile(inputFile, "utf8", (err, data) => {
  err
    ? console.error("err: ", err)
    : fs.writeFile(`${inputFile}.html`, main(data), (err) => {
        if (err) throw err;
        console.log(`File saved at ${process.cwd()}/${inputFile}.html`);
      });
});
