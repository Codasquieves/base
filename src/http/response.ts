/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { AxiosResponse } from "axios";

export class Response<T> {
  public data: T;

  public status: number;

  public headers: any;

  public constructor(response: AxiosResponse<T>) {
    this.data = response.data;
    this.status = response.status;
    this.headers = response.headers;
  }
}
