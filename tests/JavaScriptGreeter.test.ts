import { JavaScriptGreeter } from "../src/JavaScriptGreeter";

describe("JavaScriptGreeter Class", () => {
  test("the greet method was properly overwritten", () => {
    const greeter = new JavaScriptGreeter("Hello");
    expect(greeter.greet("Father")).toBe("console.log(Hello, Father)");
  });
  test("the greet method was properly overwritten", () => {
    const greeter = new JavaScriptGreeter("Yo");
    expect(greeter.greet("Ralph")).toBe("console.log(Yo, Ralph)");
  });
});
