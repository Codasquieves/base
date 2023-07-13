/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
export class Validation {
  public readonly property: string;

  public readonly value?: any;

  public readonly validations?: Record<string, string>;

  public readonly children: Validation[];

  public constructor(property: string, children: Validation[], validations?: Record<string, string>, value?: any) {
    this.property = property;
    this.value = value;
    this.validations = validations;
    this.children = children;
  }
}
