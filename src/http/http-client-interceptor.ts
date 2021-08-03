import type { ExternalCall } from "./external-call";

export interface HttpClientInterceptor {
  error: (error: Error) => void;
  log: (value: ExternalCall) => void;
}
