/* eslint-disable @typescript-eslint/naming-convention */
export enum ResultType {
  // success results
  success = "success",
  created = "created",
  process_async = "process_async",
  // validation results
  invalid_execution = "invalid_execution",
  not_found = "not_found",
  conflict = "conflict",
  unprocessable = "unprocessable",
  // errors
  error = "error",
  unauthorized = "unauthorized",
}
