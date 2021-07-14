/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosResponse } from "axios";
import { Request } from "./request";
import { Response } from "./response";

export class ExternalCall<T = any> {
  public request: Request;

  public response: Response<T>;

  public constructor(response: AxiosResponse<T>) {
    this.response = new Response<T>(response);
    this.request = new Request(response.config);
  }
}
