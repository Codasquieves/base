import { Container, injectable } from "inversify";
import type { Result } from "../application/result";
import type { Command } from "./command";
import type { CommandBus } from "./command-bus";
import type { CommandHandler } from "./command-handler";

// eslint-disable-next-line @typescript-eslint/no-type-alias
type Constructor<T> = new (...args: unknown[]) => T;

@injectable()
export class InversifyCommandBus implements CommandBus {
  private readonly container: Container;

  public constructor(container: Container) {
    this.container = container;
  }

  public subscribe<C extends Command, H extends CommandHandler<C>>(
    command: Constructor<C>,
    handler: Constructor<H>
  ): InversifyCommandBus {
    this.container.bind(command.name).to(handler);
    return this;
  }

  public async publish<C extends Command>(command: C): Promise<Result> {
    const handler: CommandHandler<C> = this.container.get(command.constructor.name);

    return handler.handle(command);
  }
}
