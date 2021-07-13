import { isNullOrUndefined } from "util";
import { inject, injectable } from "inversify";
import { Logger } from "@codasquieves/logger";
import { Result } from "../application/result";
import type { QueryParam } from "../queries/query-param";

@injectable()
export abstract class QueryHandler {
  @inject(Logger)
  private readonly logger!: Logger;

  public async handle(param: QueryParam | undefined = undefined): Promise<Result> {
    try {
      if (!isNullOrUndefined(param) && !param.isValid()) {
        return Result.invalid();
      }

      return await this.execute(param);
    } catch (ex) {
      this.logger.error("QueryHandler", ex as Error, param);
      return Result.error();
    }
  }

  protected abstract execute(param: QueryParam | undefined): Promise<Result>;
}
