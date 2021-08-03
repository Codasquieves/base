/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
export class Validation {
  public property: string;

  public value?: any;

  public validations?: Record<string, string>;

  public childrens: Validation[];

  public constructor(property: string, childrens: Validation[], validations?: Record<string, string>, value?: any) {
    this.property = property;
    this.value = value;
    this.validations = validations;
    this.childrens = childrens;
  }
}
