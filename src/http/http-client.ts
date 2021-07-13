import { isNullOrUndefined } from "util";
import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class HttpClient {
  public static build(
    baseUrl: string,
    headers: Record<string, string> = {},
    interceptors?: {
      request?: (value: AxiosRequestConfig) => AxiosRequestConfig,
      response?: <T>(value: AxiosResponse<T>) => AxiosResponse<T>,
    }
  ): AxiosInstance {
    const client = axios.create({
      baseURL: baseUrl,
      headers,
    });

    if (isNullOrUndefined(interceptors)) {
      return client;
    }

    const { request, response } = interceptors;

    if (!isNullOrUndefined(request)) {
      client.interceptors.request.use(request);
    }

    if (!isNullOrUndefined(response)) {
      client.interceptors.response.use(response);
    }

    return client;
  }
}
