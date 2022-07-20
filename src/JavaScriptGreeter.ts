import { Greeter } from "./Greeter";

class JavaScriptGreeter extends Greeter {
  greet(name: string): string {
    return `console.log(${this.greeting}, ${name})`;
  }
}

export { JavaScriptGreeter };
