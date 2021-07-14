import { injectable } from "inversify";
import { Result } from "../application/result";
import type { Command } from "../commands/command";

@injectable()
export abstract class CommandHandler {
  public async handle(command: Command): Promise<Result> {
    try {
      const [isValid, errors] = command.validate();
      if (!isValid) {
        return Result.invalid(errors);
      }

      return await this.execute(command);
    } catch (ex) {
      return Result.error(ex);
    }
  }

  protected abstract execute(command: Command): Promise<Result>;
}
