import {parse} from '@/md/parser'

describe('Parser Unit Tests', () => {
  it('should return empty ast', () => {
    const result = parse("")
    const expected = {
      type: "Root",
      children: []
    }
    expect(result).toEqual(expected);
  });

  it("should return paragraph with text", () => {
    const result = parse("hey!");
    const expected = {
      type: "Root",
      children: [
        {
          type: "Paragraph",
          children: [
            {
              type: "Text",
              content: "hey!",
            },
          ],
        },
      ],
    };
    expect(result).toEqual(expected);
  });
});