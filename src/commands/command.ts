import { validateSync } from "class-validator";

export abstract class Command {
  public isValid(): boolean {
    const errors = validateSync(this);

    return errors.length === 0;
  }
}
