import * as os from "os";
import { expect } from "@jest/globals";

class LineAssertions {
  static checkFirstLine(
    actual: string,
    expected: string
  ): { pass: boolean; message: () => string } {
    if (actual.split(os.EOL)[0] === expected) {
      return {
        pass: true,
        message: () =>
          `Expected first line not to be "${expected}", but it was.`,
      };
    } else {
      return {
        pass: false,
        message: () =>
          `Expected first line to be "${expected}", but it was "${
            actual.split(os.EOL)[0]
          }".`,
      };
    }
  }

  static checkLastLine(
    actual: string,
    expected: string
  ): { pass: boolean; message: () => string } {
    const lines = actual.split(os.EOL);
    if (lines[lines.length - 1] === expected) {
      return {
        pass: true,
        message: () =>
          `Expected last line not to be "${expected}", but it was.`,
      };
    } else {
      return {
        pass: false,
        message: () =>
          `Expected last line to be "${expected}", but it was "${
            lines[lines.length - 1]
          }".`,
      };
    }
  }
}

expect.extend({
  toHaveFirstLine: (actual, expected) =>
    LineAssertions.checkFirstLine(actual, expected),
  toHaveLastLine: (actual, expected) =>
    LineAssertions.checkLastLine(actual, expected),
});
