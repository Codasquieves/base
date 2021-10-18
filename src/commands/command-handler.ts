import { inject, injectable } from "inversify";
import { ExecutionError } from "../domain-events/events/execution-error";
import { EventBus } from "../domain-events/event-bus";
import { InvalidParametersError } from "../domain-events/events/invalid-parameters-error";
import type { Command } from "../commands/command";

@injectable()
export abstract class CommandHandler<T extends Command> {
  @inject(EventBus)
  protected readonly notifications!: EventBus;

  public async handle(command: T): Promise<void> {
    try {
      const [isInvalid, errors] = command.validate();
      if (isInvalid) {
        await this.notifications.publish(new InvalidParametersError(errors));
        return;
      }

      await this.execute(command);
    } catch (ex) {
      await this.notifications.publish(new ExecutionError(ex as Error));
    }
  }

  protected abstract execute(command: T): Promise<void>;
}
