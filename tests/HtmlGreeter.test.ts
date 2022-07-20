import { HtmlGreeter } from "../src/HtmlGreeter";

describe("HtmlGreeter Class", () => {
  test("return greeting with name and the given tag name", () => {
    const greeter = new HtmlGreeter("Hello", "p");
    expect(greeter.greet("Father")).toBe("<p>Hello, Father!</p>");
  });
  test("return greeting with h1 as default tagname", () => {
    const greeter = new HtmlGreeter("Yo");
    expect(greeter.greet("Ralph")).toBe("<h1>Yo, Ralph!</h1>");
  });
});
