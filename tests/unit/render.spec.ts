import { render } from "@/renderer";
import { ElementType } from "@/markdown/ast/ElementType";

describe("Render Unit Tests", () => {
  it("should return empty string", () => {
    const input = {
      type: ElementType.Root,
      children: [],
    };
    const result = render(input);
    expect(result).toEqual("");
  });

  it("should render paragraph with text", () => {
    const input = {
      type: ElementType.Root,
      children: [
        {
          type: ElementType.Paragraph,
          children: [
            {
              type: ElementType.Text,
              content: "hey!",
              children: []
            },
          ],
        },
      ],
    };
    const result = render(input);
    expect(result).toEqual("<p>hey!</p>");
  });
});
