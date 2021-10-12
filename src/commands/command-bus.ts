import type { Result } from "../application/result";
import type { Command } from "./command";

export abstract class CommandBus {
  public abstract publish: (command: Command) => Promise<Result>;
}
