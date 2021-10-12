import EventEmitter from "events";
import { injectable } from "inversify";
import type { Constructor, EventCallback } from "../types";
import type { DomainEvent } from "./domain-event";
import type { EventPublisher } from "./event-publisher";
import type { EventSubscriber } from "./event-subscriber";

@injectable()
export class MemoryEventBus implements EventPublisher, EventSubscriber {
  private readonly events: EventEmitter;

  public constructor() {
    this.events = new EventEmitter();
  }

  public async on<E extends DomainEvent>(event: Constructor<E>, callback: EventCallback<E>): Promise<void> {
    this.events.on(event.name, callback);
    return Promise.resolve();
  }

  public async publish(event: DomainEvent): Promise<void> {
    this.events.emit(event.constructor.name, event);
    return Promise.resolve();
  }
}
