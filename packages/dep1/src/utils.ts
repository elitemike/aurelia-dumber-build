import { Strings } from "@packages/dep2";

export class Utils {

  public static add(num1: number, num2: number) {
    return num1 + num2
  }

  public static multiply(num1: number, num2: number) {
    return num1 * num2;
  }

  public static divide(num1: number, num2: number) {
    return num1 / num2;
  }

  public static subtract(num1: number, num2: number) {
    return num1 - num2;
  }

  public static square(num1: number) {
    const n = num1;
    const f = n;
    return num1 * num1;
  }

  public static someString(a, b) {
    return `${Strings.concatWithSpace(a, b)}`;
  }
}
