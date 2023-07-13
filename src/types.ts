/* eslint-disable @typescript-eslint/no-type-alias */

import type { DomainEvent } from "./domain-events/domain-event";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor<T> = new (...args: any[]) => T;

type EventCallback<E extends DomainEvent> = (event: E) => void;

export type { Constructor, EventCallback };
