/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { AxiosRequestConfig } from "axios";

export class Request {
  public url?: string;

  public path?: string;

  public method?: string;

  public headers?: any;

  public params?: any;

  public data?: any;

  public constructor(config: AxiosRequestConfig) {
    this.url = config.baseURL;
    this.path = config.url;
    this.method = config.method;
    this.headers = config.headers;
    this.params = config.params;
    this.data = config.data;
  }
}
