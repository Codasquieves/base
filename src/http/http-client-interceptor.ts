import type { ExternalCall } from "./external-call";

export interface HttpClientInterceptor {
  log: (value: ExternalCall) => void;
}
