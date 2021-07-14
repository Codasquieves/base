import { isNullOrUndefined } from "util";
import axios from "axios";
import type { AxiosInstance, AxiosResponse } from "axios";
import { ExternalCall } from "./external-call";

export class HttpClient {
  public static build(
    baseUrl: string,
    headers: Record<string, string> = {},
    intercept?: (parameters: ExternalCall) => void,
  ): AxiosInstance {
    const client = axios.create({
      baseURL: baseUrl,
      headers,
    });

    if (!isNullOrUndefined(intercept)) {

      client.interceptors.response.use((value: AxiosResponse) => {
        intercept(new ExternalCall(value));
        return value;
      });
    }

    return client;
  }
}
