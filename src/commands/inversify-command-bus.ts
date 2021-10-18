import { isNullOrUndefined } from "util";
import { Container, injectable } from "inversify";
import type { EventListener } from "../event-listener/event-listener";
import type { Constructor } from "../types";
import type { Command } from "./command";
import type { CommandBus } from "./command-bus";
import type { CommandHandler } from "./command-handler";

@injectable()
export class InversifyCommandBus implements CommandBus {
  private readonly container: Container;

  public constructor(container: Container) {
    this.container = container;
  }

  public subscribe<C extends Command, H extends CommandHandler<C>>(
    command: Constructor<C>,
    handler: Constructor<H>,
    eventListener?: Constructor<EventListener>
  ): InversifyCommandBus {
    this.container.bind(command.name).to(handler)
      .onActivation((ctx) => {
        if (isNullOrUndefined(eventListener)) {
          return;
        }
        return ctx.container.get(eventListener);
      });

    return this;
  }

  public async publish<C extends Command>(command: C): Promise<void> {
    const handler: CommandHandler<C> = this.container.get(command.constructor.name);

    await handler.handle(command);
  }
}
