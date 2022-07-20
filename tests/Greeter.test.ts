import { Greeter } from "../src/Greeter";

describe("Greeter Class", () => {
  test("the greeting property is properly set by the constructor", () => {
    const greeter = new Greeter("Hello");
    expect(greeter.greeting).toBe("Hello");
  });
  test("the greet method is properly displaying the message", () => {
    const greeter = new Greeter("Hello");
    expect(greeter.greet("Max")).toBe("Hello, Max!");
  });
  test("the greeting property is properly set by the constructor", () => {
    const greeter = new Greeter("Waddup");
    expect(greeter.greet("Orion")).toBe("Waddup, Orion!");
  });
});
