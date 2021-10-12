import type { Validation } from "../../application/validation";
import { DomainEvent } from "../domain-event";

export class InvalidParametersError extends DomainEvent {
  public readonly errors: Validation[];

  public constructor(errors: Validation[]) {
    super();
    this.errors = errors;
  }
}
