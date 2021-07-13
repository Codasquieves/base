/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-type-alias */
import { IsString } from "class-validator";

export type Constructor<T> = new (...args: unknown[]) => T;

export type Nullable<T> = T | null;

export type Indexable<T> = Record<string, T>;

export interface PartialIndexable<T> {
  [key: number]: T | undefined;
  [key: string]: T | undefined;
}

export interface Abstract<T> {
  prototype: T;
}

export class KeyValue {
  @IsString()
  public key!: string;

  @IsString()
  public value!: string;
}

export type UnknownValue = any | [] | null | undefined;

export type LengthValidation = number | string | [] | null | undefined;

export type Empty<T> = T | null | undefined;

export type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];

export type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

export type FunctionsName<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];
