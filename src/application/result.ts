import { ResultType } from "./result-type";

// eslint-disable-next-line @typescript-eslint/ban-types
export class Result<T = unknown> {
  public event: ResultType;

  public data: T | null;

  public constructor(event: ResultType, data: T | null = null) {
    this.event = event;
    this.data = data;
  }

  public static invalid<U>(data: U | null = null): Result<U> {
    return new Result(ResultType.invalid_execution, data);
  }

  public static unauthorized<U>(data: U | null = null): Result<U> {
    return new Result(ResultType.unauthorized, data);
  }

  public static notFound<U>(): Result<U> {
    return new Result(ResultType.not_found);
  }

  public static conflict<U>(data: U | null = null): Result<U> {
    return new Result(ResultType.conflict, data);
  }

  public static unprocessable<U>(data: U | null = null): Result<U> {
    return new Result(ResultType.unprocessable, data);
  }

  // Success
  public static processAsync<U>(data: U | null = null): Result<U> {
    return new Result(ResultType.process_async, data);
  }

  public static success<U>(data: U | null = null): Result<U> {
    return new Result(ResultType.success, data);
  }

  public static created<U>(data: U | null = null): Result<U> {
    return new Result(ResultType.created, data);
  }

  // Error
  public static error<U>(data: U | null = null): Result<U> {
    return new Result(ResultType.error, data);
  }

  public isSuccess(): boolean {
    const success = [ResultType.created, ResultType.process_async, ResultType.success];

    return success.includes(this.event);
  }
}
