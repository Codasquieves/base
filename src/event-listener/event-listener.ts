import { injectable } from "inversify";

@injectable()
export abstract class EventListener {
  public abstract initialize(): void;
}
