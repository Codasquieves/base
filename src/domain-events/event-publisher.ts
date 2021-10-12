import type { DomainEvent } from "./domain-event";

export abstract class EventPublisher {
  public abstract publish(event: DomainEvent): Promise<void>;
}
