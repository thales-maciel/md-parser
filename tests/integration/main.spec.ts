import { main } from "@/main";

describe("MD to HTML Integration Tests", () => {
  it("should render multiline paragraph", () => {
    const result = main("hey!\nhey!");
    const expected = "<p>hey!</p><p>hey!</p>";
    expect(result).toEqual(expected);
  });

  it("should render h1 paragraph", () => {
    const result = main("# hey!\nhey!\n## heading 2");
    const expected = "<h1>hey!</h1><p>hey!</p><h2>heading 2</h2>";
    expect(result).toEqual(expected);
  });
});
