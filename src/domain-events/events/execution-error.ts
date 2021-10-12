import { DomainEvent } from "../domain-event";

export class ExecutionError extends DomainEvent {
  public readonly error: Error;

  public constructor(error: Error) {
    super();
    this.error = error;
  }
}
