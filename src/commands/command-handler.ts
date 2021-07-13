import { inject, injectable } from "inversify";
import { Logger } from "@codasquieves/logger";
import { Result } from "../application/result";
import type { Command } from "../commands/command";

@injectable()
export abstract class CommandHandler {
  @inject(Logger)
  private readonly logger!: Logger;

  public async handle(command: Command): Promise<Result> {
    try {
      if (!command.isValid()) {
        return Result.invalid();
      }

      return await this.execute(command);
    } catch (ex) {
      this.logger.error("CommandHandler", ex as Error, command);
      return Result.error();
    }
  }

  protected abstract execute(command: Command): Promise<Result>;
}
