import { isNullOrUndefined } from "util";
import axios from "axios";
import type { AxiosInstance, AxiosResponse } from "axios";
import { ExternalCall } from "./external-call";
import type { HttpClientInterceptor } from "./http-client-interceptor";

export class HttpClient {
  public static build(
    baseUrl: string,
    headers: Record<string, string> = {},
    interceptor?: HttpClientInterceptor
  ): AxiosInstance {
    const client = axios.create({
      baseURL: baseUrl,
      headers,
    });

    if (!isNullOrUndefined(interceptor)) {
      client.interceptors.response.use(
        (value: AxiosResponse) => {
          interceptor.log(new ExternalCall(value));
          return value;
        },
        async (error) => {
          interceptor.error(error as Error);
          return Promise.reject(error);
        }
      );
    }

    return client;
  }
}
