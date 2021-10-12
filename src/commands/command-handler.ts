import { inject, injectable } from "inversify";
import { ExecutionError } from "../domain-events/events/execution-error";
import { EventPublisher } from "../domain-events/event-publisher";
import { InvalidParametersError } from "../domain-events/events/invalid-parameters-error";
import type { Result } from "../application/result";
import type { Command } from "../commands/command";

@injectable()
export abstract class CommandHandler<T extends Command> {
  @inject(EventPublisher)
  protected readonly notification!: EventPublisher;

  public async handle(command: T): Promise<void> {
    try {
      const [isInvalid, errors] = command.validate();
      if (isInvalid) {
        this.notification.publish(new InvalidParametersError(errors));
        return;
      }

      await this.execute(command);
    } catch (ex) {
      this.notification.publish(new ExecutionError(ex as Error));
    }
  }

  protected abstract execute(command: T): Promise<Result>;
}
