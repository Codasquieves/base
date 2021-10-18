import type { Constructor, EventCallback } from "../types";
import type { DomainEvent } from "./domain-event";

export abstract class EventBus {
  public abstract on<E extends DomainEvent>(event: Constructor<E>, callback: EventCallback<E>): Promise<void>;

  public abstract publish(event: DomainEvent): Promise<void>;
}
