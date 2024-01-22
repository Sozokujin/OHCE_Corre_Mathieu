declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveLastLine(expected: string): R;
      toHaveFirstLine(expected: string): R;
    }
  }
}

export {};
