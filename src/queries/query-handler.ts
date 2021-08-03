import { isNullOrUndefined } from "util";
import { injectable } from "inversify";
import { Result } from "../application/result";
import type { QueryParam } from "../queries/query-param";

@injectable()
export abstract class QueryHandler {
  public async handle(param: QueryParam | undefined = undefined): Promise<Result> {
    try {
      if (!isNullOrUndefined(param)) {
        const [isValid, errors] = param.validate();
        if (!isValid) {
          return Result.invalid(errors);
        }
      }

      return await this.execute(param);
    } catch (ex) {
      return Result.error(ex);
    }
  }

  protected abstract execute(param: QueryParam | undefined): Promise<Result>;
}
