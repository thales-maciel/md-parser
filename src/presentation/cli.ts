import { readFile, writeFile } from 'fs/promises';
import { renderMarkdown } from "../index";

const main = async () => {
  const args = process.argv.slice(2)

  const inputFile = args[0]
  const originalContent = await readFile(inputFile, "utf-8")
  const renderedResult = renderMarkdown(originalContent)
  const shouldWriteToFile = args[1] === '-o'

  if (shouldWriteToFile) {
    const outFileName = args[2] || inputFile.replace(/\.[^/.]+$/, "")
    return writeFile(`${outFileName}.html`, renderedResult).then(() => {
      console.log(`File saved at ${process.cwd()}/${outFileName}.html`)
    })
  }

  return Promise.resolve(console.log(renderedResult))
}

main().catch(e => {
  console.error(e)
  process.exit(1)
})
