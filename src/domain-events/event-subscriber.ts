import type { Constructor, EventCallback } from "../types";
import type { DomainEvent } from "./domain-event";

export abstract class EventSubscriber {
  public abstract on<E extends DomainEvent>(event: Constructor<E>, callback: EventCallback<E>): Promise<void>;
}
