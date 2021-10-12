import { isNullOrUndefined } from "util";
import type { ValidationError } from "class-validator";
import { validateSync } from "class-validator";
import { Validation } from "../application/validation";
import { uuid } from "../utils/uuid";

export abstract class Command {
  public readonly datetime: Date;

  public readonly uniqId: string;

  public constructor() {
    this.datetime = new Date();
    this.uniqId = uuid();
  }

  public validate(): [boolean, Validation[]] {
    const errors = validateSync(this);

    const validations = this.mapping(errors);

    return [errors.length !== 0, validations];
  }

  private mapping(errors?: ValidationError[]): Validation[] {
    if (isNullOrUndefined(errors) || errors.length === 0) {
      return [];
    }

    const validations: Validation[] = [];
    for (const error of errors) {
      const item = new Validation(error.property, this.mapping(error.children), error.constraints, error.value);

      validations.push(item);
    }

    return validations;
  }
}
