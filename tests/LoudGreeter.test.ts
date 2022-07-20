import { LoudGreeter } from "../src/LoudGreeter";

describe("LoudGreeter Class", () => {
  test("calling the greet method without addVolume", () => {
    const greeter = new LoudGreeter("Hello");
    expect(greeter.greet("Father")).toBe("Hello, Father!!!");
  });
  test("calling the greet method with addVolume", () => {
    const greeter = new LoudGreeter("Yo");
    greeter.addVolume();
    expect(greeter.greet("Ralph")).toBe("Yo, Ralph!!!!");
  });
  test("calling greet method with addVolume multple times", () => {
    const greeter = new LoudGreeter("Yo");
    greeter.addVolume();
    greeter.addVolume();
    expect(greeter.greet("Ralph")).toBe("Yo, Ralph!!!!!");
  });
});
