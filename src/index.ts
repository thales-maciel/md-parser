import "module-alias/register";

import fs from "fs";
import { main } from "@/main";

const inputFile = process.argv[2];

fs.readFile(inputFile, "utf8", (err, data) => {
  err
    ? console.error("err: ", err)
    : fs.writeFile(`${inputFile}.html`, main(data), (err) => {
        if (err) throw err;
        console.log(`File saved at ${process.cwd()}/${inputFile}.html`);
      });
});
