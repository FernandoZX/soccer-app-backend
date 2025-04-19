
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Equipo
 * 
 */
export type Equipo = $Result.DefaultSelection<Prisma.$EquipoPayload>
/**
 * Model Partido
 * 
 */
export type Partido = $Result.DefaultSelection<Prisma.$PartidoPayload>
/**
 * Model Resultado
 * 
 */
export type Resultado = $Result.DefaultSelection<Prisma.$ResultadoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Equipos
 * const equipos = await prisma.equipo.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Equipos
   * const equipos = await prisma.equipo.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.equipo`: Exposes CRUD operations for the **Equipo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipos
    * const equipos = await prisma.equipo.findMany()
    * ```
    */
  get equipo(): Prisma.EquipoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partido`: Exposes CRUD operations for the **Partido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Partidos
    * const partidos = await prisma.partido.findMany()
    * ```
    */
  get partido(): Prisma.PartidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resultado`: Exposes CRUD operations for the **Resultado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resultados
    * const resultados = await prisma.resultado.findMany()
    * ```
    */
  get resultado(): Prisma.ResultadoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Equipo: 'Equipo',
    Partido: 'Partido',
    Resultado: 'Resultado'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "equipo" | "partido" | "resultado"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Equipo: {
        payload: Prisma.$EquipoPayload<ExtArgs>
        fields: Prisma.EquipoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>
          }
          findFirst: {
            args: Prisma.EquipoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>
          }
          findMany: {
            args: Prisma.EquipoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>[]
          }
          create: {
            args: Prisma.EquipoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>
          }
          createMany: {
            args: Prisma.EquipoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>[]
          }
          delete: {
            args: Prisma.EquipoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>
          }
          update: {
            args: Prisma.EquipoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>
          }
          deleteMany: {
            args: Prisma.EquipoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>[]
          }
          upsert: {
            args: Prisma.EquipoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>
          }
          aggregate: {
            args: Prisma.EquipoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipo>
          }
          groupBy: {
            args: Prisma.EquipoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipoCountArgs<ExtArgs>
            result: $Utils.Optional<EquipoCountAggregateOutputType> | number
          }
        }
      }
      Partido: {
        payload: Prisma.$PartidoPayload<ExtArgs>
        fields: Prisma.PartidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidoPayload>
          }
          findFirst: {
            args: Prisma.PartidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidoPayload>
          }
          findMany: {
            args: Prisma.PartidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidoPayload>[]
          }
          create: {
            args: Prisma.PartidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidoPayload>
          }
          createMany: {
            args: Prisma.PartidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidoPayload>[]
          }
          delete: {
            args: Prisma.PartidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidoPayload>
          }
          update: {
            args: Prisma.PartidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidoPayload>
          }
          deleteMany: {
            args: Prisma.PartidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidoPayload>[]
          }
          upsert: {
            args: Prisma.PartidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidoPayload>
          }
          aggregate: {
            args: Prisma.PartidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartido>
          }
          groupBy: {
            args: Prisma.PartidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartidoCountArgs<ExtArgs>
            result: $Utils.Optional<PartidoCountAggregateOutputType> | number
          }
        }
      }
      Resultado: {
        payload: Prisma.$ResultadoPayload<ExtArgs>
        fields: Prisma.ResultadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResultadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResultadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload>
          }
          findFirst: {
            args: Prisma.ResultadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResultadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload>
          }
          findMany: {
            args: Prisma.ResultadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload>[]
          }
          create: {
            args: Prisma.ResultadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload>
          }
          createMany: {
            args: Prisma.ResultadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResultadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload>[]
          }
          delete: {
            args: Prisma.ResultadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload>
          }
          update: {
            args: Prisma.ResultadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload>
          }
          deleteMany: {
            args: Prisma.ResultadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResultadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResultadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload>[]
          }
          upsert: {
            args: Prisma.ResultadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload>
          }
          aggregate: {
            args: Prisma.ResultadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResultado>
          }
          groupBy: {
            args: Prisma.ResultadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResultadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResultadoCountArgs<ExtArgs>
            result: $Utils.Optional<ResultadoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    equipo?: EquipoOmit
    partido?: PartidoOmit
    resultado?: ResultadoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EquipoCountOutputType
   */

  export type EquipoCountOutputType = {
    partidosLocal: number
    partidosVisitante: number
  }

  export type EquipoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partidosLocal?: boolean | EquipoCountOutputTypeCountPartidosLocalArgs
    partidosVisitante?: boolean | EquipoCountOutputTypeCountPartidosVisitanteArgs
  }

  // Custom InputTypes
  /**
   * EquipoCountOutputType without action
   */
  export type EquipoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipoCountOutputType
     */
    select?: EquipoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipoCountOutputType without action
   */
  export type EquipoCountOutputTypeCountPartidosLocalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartidoWhereInput
  }

  /**
   * EquipoCountOutputType without action
   */
  export type EquipoCountOutputTypeCountPartidosVisitanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartidoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Equipo
   */

  export type AggregateEquipo = {
    _count: EquipoCountAggregateOutputType | null
    _avg: EquipoAvgAggregateOutputType | null
    _sum: EquipoSumAggregateOutputType | null
    _min: EquipoMinAggregateOutputType | null
    _max: EquipoMaxAggregateOutputType | null
  }

  export type EquipoAvgAggregateOutputType = {
    id: number | null
  }

  export type EquipoSumAggregateOutputType = {
    id: number | null
  }

  export type EquipoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type EquipoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type EquipoCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type EquipoAvgAggregateInputType = {
    id?: true
  }

  export type EquipoSumAggregateInputType = {
    id?: true
  }

  export type EquipoMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type EquipoMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type EquipoCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type EquipoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipo to aggregate.
     */
    where?: EquipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipos to fetch.
     */
    orderBy?: EquipoOrderByWithRelationInput | EquipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipos
    **/
    _count?: true | EquipoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipoMaxAggregateInputType
  }

  export type GetEquipoAggregateType<T extends EquipoAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipo[P]>
      : GetScalarType<T[P], AggregateEquipo[P]>
  }




  export type EquipoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipoWhereInput
    orderBy?: EquipoOrderByWithAggregationInput | EquipoOrderByWithAggregationInput[]
    by: EquipoScalarFieldEnum[] | EquipoScalarFieldEnum
    having?: EquipoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipoCountAggregateInputType | true
    _avg?: EquipoAvgAggregateInputType
    _sum?: EquipoSumAggregateInputType
    _min?: EquipoMinAggregateInputType
    _max?: EquipoMaxAggregateInputType
  }

  export type EquipoGroupByOutputType = {
    id: number
    nombre: string
    _count: EquipoCountAggregateOutputType | null
    _avg: EquipoAvgAggregateOutputType | null
    _sum: EquipoSumAggregateOutputType | null
    _min: EquipoMinAggregateOutputType | null
    _max: EquipoMaxAggregateOutputType | null
  }

  type GetEquipoGroupByPayload<T extends EquipoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipoGroupByOutputType[P]>
            : GetScalarType<T[P], EquipoGroupByOutputType[P]>
        }
      >
    >


  export type EquipoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    partidosLocal?: boolean | Equipo$partidosLocalArgs<ExtArgs>
    partidosVisitante?: boolean | Equipo$partidosVisitanteArgs<ExtArgs>
    _count?: boolean | EquipoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipo"]>

  export type EquipoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["equipo"]>

  export type EquipoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["equipo"]>

  export type EquipoSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type EquipoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["equipo"]>
  export type EquipoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partidosLocal?: boolean | Equipo$partidosLocalArgs<ExtArgs>
    partidosVisitante?: boolean | Equipo$partidosVisitanteArgs<ExtArgs>
    _count?: boolean | EquipoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EquipoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EquipoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipo"
    objects: {
      partidosLocal: Prisma.$PartidoPayload<ExtArgs>[]
      partidosVisitante: Prisma.$PartidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["equipo"]>
    composites: {}
  }

  type EquipoGetPayload<S extends boolean | null | undefined | EquipoDefaultArgs> = $Result.GetResult<Prisma.$EquipoPayload, S>

  type EquipoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipoCountAggregateInputType | true
    }

  export interface EquipoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipo'], meta: { name: 'Equipo' } }
    /**
     * Find zero or one Equipo that matches the filter.
     * @param {EquipoFindUniqueArgs} args - Arguments to find a Equipo
     * @example
     * // Get one Equipo
     * const equipo = await prisma.equipo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipoFindUniqueArgs>(args: SelectSubset<T, EquipoFindUniqueArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipoFindUniqueOrThrowArgs} args - Arguments to find a Equipo
     * @example
     * // Get one Equipo
     * const equipo = await prisma.equipo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipoFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoFindFirstArgs} args - Arguments to find a Equipo
     * @example
     * // Get one Equipo
     * const equipo = await prisma.equipo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipoFindFirstArgs>(args?: SelectSubset<T, EquipoFindFirstArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoFindFirstOrThrowArgs} args - Arguments to find a Equipo
     * @example
     * // Get one Equipo
     * const equipo = await prisma.equipo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipoFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipos
     * const equipos = await prisma.equipo.findMany()
     * 
     * // Get first 10 Equipos
     * const equipos = await prisma.equipo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipoWithIdOnly = await prisma.equipo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipoFindManyArgs>(args?: SelectSubset<T, EquipoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipo.
     * @param {EquipoCreateArgs} args - Arguments to create a Equipo.
     * @example
     * // Create one Equipo
     * const Equipo = await prisma.equipo.create({
     *   data: {
     *     // ... data to create a Equipo
     *   }
     * })
     * 
     */
    create<T extends EquipoCreateArgs>(args: SelectSubset<T, EquipoCreateArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipos.
     * @param {EquipoCreateManyArgs} args - Arguments to create many Equipos.
     * @example
     * // Create many Equipos
     * const equipo = await prisma.equipo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipoCreateManyArgs>(args?: SelectSubset<T, EquipoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipos and returns the data saved in the database.
     * @param {EquipoCreateManyAndReturnArgs} args - Arguments to create many Equipos.
     * @example
     * // Create many Equipos
     * const equipo = await prisma.equipo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipos and only return the `id`
     * const equipoWithIdOnly = await prisma.equipo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipoCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Equipo.
     * @param {EquipoDeleteArgs} args - Arguments to delete one Equipo.
     * @example
     * // Delete one Equipo
     * const Equipo = await prisma.equipo.delete({
     *   where: {
     *     // ... filter to delete one Equipo
     *   }
     * })
     * 
     */
    delete<T extends EquipoDeleteArgs>(args: SelectSubset<T, EquipoDeleteArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipo.
     * @param {EquipoUpdateArgs} args - Arguments to update one Equipo.
     * @example
     * // Update one Equipo
     * const equipo = await prisma.equipo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipoUpdateArgs>(args: SelectSubset<T, EquipoUpdateArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipos.
     * @param {EquipoDeleteManyArgs} args - Arguments to filter Equipos to delete.
     * @example
     * // Delete a few Equipos
     * const { count } = await prisma.equipo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipoDeleteManyArgs>(args?: SelectSubset<T, EquipoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipos
     * const equipo = await prisma.equipo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipoUpdateManyArgs>(args: SelectSubset<T, EquipoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipos and returns the data updated in the database.
     * @param {EquipoUpdateManyAndReturnArgs} args - Arguments to update many Equipos.
     * @example
     * // Update many Equipos
     * const equipo = await prisma.equipo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipos and only return the `id`
     * const equipoWithIdOnly = await prisma.equipo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EquipoUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Equipo.
     * @param {EquipoUpsertArgs} args - Arguments to update or create a Equipo.
     * @example
     * // Update or create a Equipo
     * const equipo = await prisma.equipo.upsert({
     *   create: {
     *     // ... data to create a Equipo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipo we want to update
     *   }
     * })
     */
    upsert<T extends EquipoUpsertArgs>(args: SelectSubset<T, EquipoUpsertArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoCountArgs} args - Arguments to filter Equipos to count.
     * @example
     * // Count the number of Equipos
     * const count = await prisma.equipo.count({
     *   where: {
     *     // ... the filter for the Equipos we want to count
     *   }
     * })
    **/
    count<T extends EquipoCountArgs>(
      args?: Subset<T, EquipoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquipoAggregateArgs>(args: Subset<T, EquipoAggregateArgs>): Prisma.PrismaPromise<GetEquipoAggregateType<T>>

    /**
     * Group by Equipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EquipoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipoGroupByArgs['orderBy'] }
        : { orderBy?: EquipoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquipoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipo model
   */
  readonly fields: EquipoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    partidosLocal<T extends Equipo$partidosLocalArgs<ExtArgs> = {}>(args?: Subset<T, Equipo$partidosLocalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    partidosVisitante<T extends Equipo$partidosVisitanteArgs<ExtArgs> = {}>(args?: Subset<T, Equipo$partidosVisitanteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Equipo model
   */
  interface EquipoFieldRefs {
    readonly id: FieldRef<"Equipo", 'Int'>
    readonly nombre: FieldRef<"Equipo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Equipo findUnique
   */
  export type EquipoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * Filter, which Equipo to fetch.
     */
    where: EquipoWhereUniqueInput
  }

  /**
   * Equipo findUniqueOrThrow
   */
  export type EquipoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * Filter, which Equipo to fetch.
     */
    where: EquipoWhereUniqueInput
  }

  /**
   * Equipo findFirst
   */
  export type EquipoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * Filter, which Equipo to fetch.
     */
    where?: EquipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipos to fetch.
     */
    orderBy?: EquipoOrderByWithRelationInput | EquipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipos.
     */
    cursor?: EquipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipos.
     */
    distinct?: EquipoScalarFieldEnum | EquipoScalarFieldEnum[]
  }

  /**
   * Equipo findFirstOrThrow
   */
  export type EquipoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * Filter, which Equipo to fetch.
     */
    where?: EquipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipos to fetch.
     */
    orderBy?: EquipoOrderByWithRelationInput | EquipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipos.
     */
    cursor?: EquipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipos.
     */
    distinct?: EquipoScalarFieldEnum | EquipoScalarFieldEnum[]
  }

  /**
   * Equipo findMany
   */
  export type EquipoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * Filter, which Equipos to fetch.
     */
    where?: EquipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipos to fetch.
     */
    orderBy?: EquipoOrderByWithRelationInput | EquipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipos.
     */
    cursor?: EquipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipos.
     */
    skip?: number
    distinct?: EquipoScalarFieldEnum | EquipoScalarFieldEnum[]
  }

  /**
   * Equipo create
   */
  export type EquipoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * The data needed to create a Equipo.
     */
    data: XOR<EquipoCreateInput, EquipoUncheckedCreateInput>
  }

  /**
   * Equipo createMany
   */
  export type EquipoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipos.
     */
    data: EquipoCreateManyInput | EquipoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipo createManyAndReturn
   */
  export type EquipoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * The data used to create many Equipos.
     */
    data: EquipoCreateManyInput | EquipoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipo update
   */
  export type EquipoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * The data needed to update a Equipo.
     */
    data: XOR<EquipoUpdateInput, EquipoUncheckedUpdateInput>
    /**
     * Choose, which Equipo to update.
     */
    where: EquipoWhereUniqueInput
  }

  /**
   * Equipo updateMany
   */
  export type EquipoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipos.
     */
    data: XOR<EquipoUpdateManyMutationInput, EquipoUncheckedUpdateManyInput>
    /**
     * Filter which Equipos to update
     */
    where?: EquipoWhereInput
    /**
     * Limit how many Equipos to update.
     */
    limit?: number
  }

  /**
   * Equipo updateManyAndReturn
   */
  export type EquipoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * The data used to update Equipos.
     */
    data: XOR<EquipoUpdateManyMutationInput, EquipoUncheckedUpdateManyInput>
    /**
     * Filter which Equipos to update
     */
    where?: EquipoWhereInput
    /**
     * Limit how many Equipos to update.
     */
    limit?: number
  }

  /**
   * Equipo upsert
   */
  export type EquipoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * The filter to search for the Equipo to update in case it exists.
     */
    where: EquipoWhereUniqueInput
    /**
     * In case the Equipo found by the `where` argument doesn't exist, create a new Equipo with this data.
     */
    create: XOR<EquipoCreateInput, EquipoUncheckedCreateInput>
    /**
     * In case the Equipo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipoUpdateInput, EquipoUncheckedUpdateInput>
  }

  /**
   * Equipo delete
   */
  export type EquipoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * Filter which Equipo to delete.
     */
    where: EquipoWhereUniqueInput
  }

  /**
   * Equipo deleteMany
   */
  export type EquipoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipos to delete
     */
    where?: EquipoWhereInput
    /**
     * Limit how many Equipos to delete.
     */
    limit?: number
  }

  /**
   * Equipo.partidosLocal
   */
  export type Equipo$partidosLocalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partido
     */
    omit?: PartidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidoInclude<ExtArgs> | null
    where?: PartidoWhereInput
    orderBy?: PartidoOrderByWithRelationInput | PartidoOrderByWithRelationInput[]
    cursor?: PartidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartidoScalarFieldEnum | PartidoScalarFieldEnum[]
  }

  /**
   * Equipo.partidosVisitante
   */
  export type Equipo$partidosVisitanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partido
     */
    omit?: PartidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidoInclude<ExtArgs> | null
    where?: PartidoWhereInput
    orderBy?: PartidoOrderByWithRelationInput | PartidoOrderByWithRelationInput[]
    cursor?: PartidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartidoScalarFieldEnum | PartidoScalarFieldEnum[]
  }

  /**
   * Equipo without action
   */
  export type EquipoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
  }


  /**
   * Model Partido
   */

  export type AggregatePartido = {
    _count: PartidoCountAggregateOutputType | null
    _avg: PartidoAvgAggregateOutputType | null
    _sum: PartidoSumAggregateOutputType | null
    _min: PartidoMinAggregateOutputType | null
    _max: PartidoMaxAggregateOutputType | null
  }

  export type PartidoAvgAggregateOutputType = {
    id: number | null
    equipoLocalId: number | null
    equipoVisitaId: number | null
  }

  export type PartidoSumAggregateOutputType = {
    id: number | null
    equipoLocalId: number | null
    equipoVisitaId: number | null
  }

  export type PartidoMinAggregateOutputType = {
    id: number | null
    equipoLocalId: number | null
    equipoVisitaId: number | null
    fecha: Date | null
  }

  export type PartidoMaxAggregateOutputType = {
    id: number | null
    equipoLocalId: number | null
    equipoVisitaId: number | null
    fecha: Date | null
  }

  export type PartidoCountAggregateOutputType = {
    id: number
    equipoLocalId: number
    equipoVisitaId: number
    fecha: number
    _all: number
  }


  export type PartidoAvgAggregateInputType = {
    id?: true
    equipoLocalId?: true
    equipoVisitaId?: true
  }

  export type PartidoSumAggregateInputType = {
    id?: true
    equipoLocalId?: true
    equipoVisitaId?: true
  }

  export type PartidoMinAggregateInputType = {
    id?: true
    equipoLocalId?: true
    equipoVisitaId?: true
    fecha?: true
  }

  export type PartidoMaxAggregateInputType = {
    id?: true
    equipoLocalId?: true
    equipoVisitaId?: true
    fecha?: true
  }

  export type PartidoCountAggregateInputType = {
    id?: true
    equipoLocalId?: true
    equipoVisitaId?: true
    fecha?: true
    _all?: true
  }

  export type PartidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partido to aggregate.
     */
    where?: PartidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidos to fetch.
     */
    orderBy?: PartidoOrderByWithRelationInput | PartidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Partidos
    **/
    _count?: true | PartidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartidoMaxAggregateInputType
  }

  export type GetPartidoAggregateType<T extends PartidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePartido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartido[P]>
      : GetScalarType<T[P], AggregatePartido[P]>
  }




  export type PartidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartidoWhereInput
    orderBy?: PartidoOrderByWithAggregationInput | PartidoOrderByWithAggregationInput[]
    by: PartidoScalarFieldEnum[] | PartidoScalarFieldEnum
    having?: PartidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartidoCountAggregateInputType | true
    _avg?: PartidoAvgAggregateInputType
    _sum?: PartidoSumAggregateInputType
    _min?: PartidoMinAggregateInputType
    _max?: PartidoMaxAggregateInputType
  }

  export type PartidoGroupByOutputType = {
    id: number
    equipoLocalId: number
    equipoVisitaId: number
    fecha: Date
    _count: PartidoCountAggregateOutputType | null
    _avg: PartidoAvgAggregateOutputType | null
    _sum: PartidoSumAggregateOutputType | null
    _min: PartidoMinAggregateOutputType | null
    _max: PartidoMaxAggregateOutputType | null
  }

  type GetPartidoGroupByPayload<T extends PartidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartidoGroupByOutputType[P]>
            : GetScalarType<T[P], PartidoGroupByOutputType[P]>
        }
      >
    >


  export type PartidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    equipoLocalId?: boolean
    equipoVisitaId?: boolean
    fecha?: boolean
    resultado?: boolean | Partido$resultadoArgs<ExtArgs>
    equipoLocal?: boolean | EquipoDefaultArgs<ExtArgs>
    equipoVisitante?: boolean | EquipoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partido"]>

  export type PartidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    equipoLocalId?: boolean
    equipoVisitaId?: boolean
    fecha?: boolean
    equipoLocal?: boolean | EquipoDefaultArgs<ExtArgs>
    equipoVisitante?: boolean | EquipoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partido"]>

  export type PartidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    equipoLocalId?: boolean
    equipoVisitaId?: boolean
    fecha?: boolean
    equipoLocal?: boolean | EquipoDefaultArgs<ExtArgs>
    equipoVisitante?: boolean | EquipoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partido"]>

  export type PartidoSelectScalar = {
    id?: boolean
    equipoLocalId?: boolean
    equipoVisitaId?: boolean
    fecha?: boolean
  }

  export type PartidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "equipoLocalId" | "equipoVisitaId" | "fecha", ExtArgs["result"]["partido"]>
  export type PartidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resultado?: boolean | Partido$resultadoArgs<ExtArgs>
    equipoLocal?: boolean | EquipoDefaultArgs<ExtArgs>
    equipoVisitante?: boolean | EquipoDefaultArgs<ExtArgs>
  }
  export type PartidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipoLocal?: boolean | EquipoDefaultArgs<ExtArgs>
    equipoVisitante?: boolean | EquipoDefaultArgs<ExtArgs>
  }
  export type PartidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipoLocal?: boolean | EquipoDefaultArgs<ExtArgs>
    equipoVisitante?: boolean | EquipoDefaultArgs<ExtArgs>
  }

  export type $PartidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Partido"
    objects: {
      resultado: Prisma.$ResultadoPayload<ExtArgs> | null
      equipoLocal: Prisma.$EquipoPayload<ExtArgs>
      equipoVisitante: Prisma.$EquipoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      equipoLocalId: number
      equipoVisitaId: number
      fecha: Date
    }, ExtArgs["result"]["partido"]>
    composites: {}
  }

  type PartidoGetPayload<S extends boolean | null | undefined | PartidoDefaultArgs> = $Result.GetResult<Prisma.$PartidoPayload, S>

  type PartidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartidoCountAggregateInputType | true
    }

  export interface PartidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Partido'], meta: { name: 'Partido' } }
    /**
     * Find zero or one Partido that matches the filter.
     * @param {PartidoFindUniqueArgs} args - Arguments to find a Partido
     * @example
     * // Get one Partido
     * const partido = await prisma.partido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartidoFindUniqueArgs>(args: SelectSubset<T, PartidoFindUniqueArgs<ExtArgs>>): Prisma__PartidoClient<$Result.GetResult<Prisma.$PartidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Partido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartidoFindUniqueOrThrowArgs} args - Arguments to find a Partido
     * @example
     * // Get one Partido
     * const partido = await prisma.partido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PartidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartidoClient<$Result.GetResult<Prisma.$PartidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Partido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidoFindFirstArgs} args - Arguments to find a Partido
     * @example
     * // Get one Partido
     * const partido = await prisma.partido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartidoFindFirstArgs>(args?: SelectSubset<T, PartidoFindFirstArgs<ExtArgs>>): Prisma__PartidoClient<$Result.GetResult<Prisma.$PartidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Partido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidoFindFirstOrThrowArgs} args - Arguments to find a Partido
     * @example
     * // Get one Partido
     * const partido = await prisma.partido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PartidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartidoClient<$Result.GetResult<Prisma.$PartidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Partidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Partidos
     * const partidos = await prisma.partido.findMany()
     * 
     * // Get first 10 Partidos
     * const partidos = await prisma.partido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partidoWithIdOnly = await prisma.partido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartidoFindManyArgs>(args?: SelectSubset<T, PartidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Partido.
     * @param {PartidoCreateArgs} args - Arguments to create a Partido.
     * @example
     * // Create one Partido
     * const Partido = await prisma.partido.create({
     *   data: {
     *     // ... data to create a Partido
     *   }
     * })
     * 
     */
    create<T extends PartidoCreateArgs>(args: SelectSubset<T, PartidoCreateArgs<ExtArgs>>): Prisma__PartidoClient<$Result.GetResult<Prisma.$PartidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Partidos.
     * @param {PartidoCreateManyArgs} args - Arguments to create many Partidos.
     * @example
     * // Create many Partidos
     * const partido = await prisma.partido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartidoCreateManyArgs>(args?: SelectSubset<T, PartidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Partidos and returns the data saved in the database.
     * @param {PartidoCreateManyAndReturnArgs} args - Arguments to create many Partidos.
     * @example
     * // Create many Partidos
     * const partido = await prisma.partido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Partidos and only return the `id`
     * const partidoWithIdOnly = await prisma.partido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartidoCreateManyAndReturnArgs>(args?: SelectSubset<T, PartidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Partido.
     * @param {PartidoDeleteArgs} args - Arguments to delete one Partido.
     * @example
     * // Delete one Partido
     * const Partido = await prisma.partido.delete({
     *   where: {
     *     // ... filter to delete one Partido
     *   }
     * })
     * 
     */
    delete<T extends PartidoDeleteArgs>(args: SelectSubset<T, PartidoDeleteArgs<ExtArgs>>): Prisma__PartidoClient<$Result.GetResult<Prisma.$PartidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Partido.
     * @param {PartidoUpdateArgs} args - Arguments to update one Partido.
     * @example
     * // Update one Partido
     * const partido = await prisma.partido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartidoUpdateArgs>(args: SelectSubset<T, PartidoUpdateArgs<ExtArgs>>): Prisma__PartidoClient<$Result.GetResult<Prisma.$PartidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Partidos.
     * @param {PartidoDeleteManyArgs} args - Arguments to filter Partidos to delete.
     * @example
     * // Delete a few Partidos
     * const { count } = await prisma.partido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartidoDeleteManyArgs>(args?: SelectSubset<T, PartidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Partidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Partidos
     * const partido = await prisma.partido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartidoUpdateManyArgs>(args: SelectSubset<T, PartidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Partidos and returns the data updated in the database.
     * @param {PartidoUpdateManyAndReturnArgs} args - Arguments to update many Partidos.
     * @example
     * // Update many Partidos
     * const partido = await prisma.partido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Partidos and only return the `id`
     * const partidoWithIdOnly = await prisma.partido.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PartidoUpdateManyAndReturnArgs>(args: SelectSubset<T, PartidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Partido.
     * @param {PartidoUpsertArgs} args - Arguments to update or create a Partido.
     * @example
     * // Update or create a Partido
     * const partido = await prisma.partido.upsert({
     *   create: {
     *     // ... data to create a Partido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Partido we want to update
     *   }
     * })
     */
    upsert<T extends PartidoUpsertArgs>(args: SelectSubset<T, PartidoUpsertArgs<ExtArgs>>): Prisma__PartidoClient<$Result.GetResult<Prisma.$PartidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Partidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidoCountArgs} args - Arguments to filter Partidos to count.
     * @example
     * // Count the number of Partidos
     * const count = await prisma.partido.count({
     *   where: {
     *     // ... the filter for the Partidos we want to count
     *   }
     * })
    **/
    count<T extends PartidoCountArgs>(
      args?: Subset<T, PartidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Partido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartidoAggregateArgs>(args: Subset<T, PartidoAggregateArgs>): Prisma.PrismaPromise<GetPartidoAggregateType<T>>

    /**
     * Group by Partido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartidoGroupByArgs['orderBy'] }
        : { orderBy?: PartidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Partido model
   */
  readonly fields: PartidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Partido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resultado<T extends Partido$resultadoArgs<ExtArgs> = {}>(args?: Subset<T, Partido$resultadoArgs<ExtArgs>>): Prisma__ResultadoClient<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    equipoLocal<T extends EquipoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipoDefaultArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    equipoVisitante<T extends EquipoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipoDefaultArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Partido model
   */
  interface PartidoFieldRefs {
    readonly id: FieldRef<"Partido", 'Int'>
    readonly equipoLocalId: FieldRef<"Partido", 'Int'>
    readonly equipoVisitaId: FieldRef<"Partido", 'Int'>
    readonly fecha: FieldRef<"Partido", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Partido findUnique
   */
  export type PartidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partido
     */
    omit?: PartidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidoInclude<ExtArgs> | null
    /**
     * Filter, which Partido to fetch.
     */
    where: PartidoWhereUniqueInput
  }

  /**
   * Partido findUniqueOrThrow
   */
  export type PartidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partido
     */
    omit?: PartidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidoInclude<ExtArgs> | null
    /**
     * Filter, which Partido to fetch.
     */
    where: PartidoWhereUniqueInput
  }

  /**
   * Partido findFirst
   */
  export type PartidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partido
     */
    omit?: PartidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidoInclude<ExtArgs> | null
    /**
     * Filter, which Partido to fetch.
     */
    where?: PartidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidos to fetch.
     */
    orderBy?: PartidoOrderByWithRelationInput | PartidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partidos.
     */
    cursor?: PartidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partidos.
     */
    distinct?: PartidoScalarFieldEnum | PartidoScalarFieldEnum[]
  }

  /**
   * Partido findFirstOrThrow
   */
  export type PartidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partido
     */
    omit?: PartidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidoInclude<ExtArgs> | null
    /**
     * Filter, which Partido to fetch.
     */
    where?: PartidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidos to fetch.
     */
    orderBy?: PartidoOrderByWithRelationInput | PartidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partidos.
     */
    cursor?: PartidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partidos.
     */
    distinct?: PartidoScalarFieldEnum | PartidoScalarFieldEnum[]
  }

  /**
   * Partido findMany
   */
  export type PartidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partido
     */
    omit?: PartidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidoInclude<ExtArgs> | null
    /**
     * Filter, which Partidos to fetch.
     */
    where?: PartidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidos to fetch.
     */
    orderBy?: PartidoOrderByWithRelationInput | PartidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Partidos.
     */
    cursor?: PartidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partidos.
     */
    skip?: number
    distinct?: PartidoScalarFieldEnum | PartidoScalarFieldEnum[]
  }

  /**
   * Partido create
   */
  export type PartidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partido
     */
    omit?: PartidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Partido.
     */
    data: XOR<PartidoCreateInput, PartidoUncheckedCreateInput>
  }

  /**
   * Partido createMany
   */
  export type PartidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Partidos.
     */
    data: PartidoCreateManyInput | PartidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Partido createManyAndReturn
   */
  export type PartidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Partido
     */
    omit?: PartidoOmit<ExtArgs> | null
    /**
     * The data used to create many Partidos.
     */
    data: PartidoCreateManyInput | PartidoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Partido update
   */
  export type PartidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partido
     */
    omit?: PartidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Partido.
     */
    data: XOR<PartidoUpdateInput, PartidoUncheckedUpdateInput>
    /**
     * Choose, which Partido to update.
     */
    where: PartidoWhereUniqueInput
  }

  /**
   * Partido updateMany
   */
  export type PartidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Partidos.
     */
    data: XOR<PartidoUpdateManyMutationInput, PartidoUncheckedUpdateManyInput>
    /**
     * Filter which Partidos to update
     */
    where?: PartidoWhereInput
    /**
     * Limit how many Partidos to update.
     */
    limit?: number
  }

  /**
   * Partido updateManyAndReturn
   */
  export type PartidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Partido
     */
    omit?: PartidoOmit<ExtArgs> | null
    /**
     * The data used to update Partidos.
     */
    data: XOR<PartidoUpdateManyMutationInput, PartidoUncheckedUpdateManyInput>
    /**
     * Filter which Partidos to update
     */
    where?: PartidoWhereInput
    /**
     * Limit how many Partidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Partido upsert
   */
  export type PartidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partido
     */
    omit?: PartidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Partido to update in case it exists.
     */
    where: PartidoWhereUniqueInput
    /**
     * In case the Partido found by the `where` argument doesn't exist, create a new Partido with this data.
     */
    create: XOR<PartidoCreateInput, PartidoUncheckedCreateInput>
    /**
     * In case the Partido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartidoUpdateInput, PartidoUncheckedUpdateInput>
  }

  /**
   * Partido delete
   */
  export type PartidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partido
     */
    omit?: PartidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidoInclude<ExtArgs> | null
    /**
     * Filter which Partido to delete.
     */
    where: PartidoWhereUniqueInput
  }

  /**
   * Partido deleteMany
   */
  export type PartidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partidos to delete
     */
    where?: PartidoWhereInput
    /**
     * Limit how many Partidos to delete.
     */
    limit?: number
  }

  /**
   * Partido.resultado
   */
  export type Partido$resultadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
    where?: ResultadoWhereInput
  }

  /**
   * Partido without action
   */
  export type PartidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partido
     */
    omit?: PartidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidoInclude<ExtArgs> | null
  }


  /**
   * Model Resultado
   */

  export type AggregateResultado = {
    _count: ResultadoCountAggregateOutputType | null
    _avg: ResultadoAvgAggregateOutputType | null
    _sum: ResultadoSumAggregateOutputType | null
    _min: ResultadoMinAggregateOutputType | null
    _max: ResultadoMaxAggregateOutputType | null
  }

  export type ResultadoAvgAggregateOutputType = {
    id: number | null
    partidoId: number | null
    golesLocal: number | null
    golesVisita: number | null
  }

  export type ResultadoSumAggregateOutputType = {
    id: number | null
    partidoId: number | null
    golesLocal: number | null
    golesVisita: number | null
  }

  export type ResultadoMinAggregateOutputType = {
    id: number | null
    partidoId: number | null
    golesLocal: number | null
    golesVisita: number | null
  }

  export type ResultadoMaxAggregateOutputType = {
    id: number | null
    partidoId: number | null
    golesLocal: number | null
    golesVisita: number | null
  }

  export type ResultadoCountAggregateOutputType = {
    id: number
    partidoId: number
    golesLocal: number
    golesVisita: number
    _all: number
  }


  export type ResultadoAvgAggregateInputType = {
    id?: true
    partidoId?: true
    golesLocal?: true
    golesVisita?: true
  }

  export type ResultadoSumAggregateInputType = {
    id?: true
    partidoId?: true
    golesLocal?: true
    golesVisita?: true
  }

  export type ResultadoMinAggregateInputType = {
    id?: true
    partidoId?: true
    golesLocal?: true
    golesVisita?: true
  }

  export type ResultadoMaxAggregateInputType = {
    id?: true
    partidoId?: true
    golesLocal?: true
    golesVisita?: true
  }

  export type ResultadoCountAggregateInputType = {
    id?: true
    partidoId?: true
    golesLocal?: true
    golesVisita?: true
    _all?: true
  }

  export type ResultadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resultado to aggregate.
     */
    where?: ResultadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resultados to fetch.
     */
    orderBy?: ResultadoOrderByWithRelationInput | ResultadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResultadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resultados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resultados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resultados
    **/
    _count?: true | ResultadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResultadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResultadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResultadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResultadoMaxAggregateInputType
  }

  export type GetResultadoAggregateType<T extends ResultadoAggregateArgs> = {
        [P in keyof T & keyof AggregateResultado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResultado[P]>
      : GetScalarType<T[P], AggregateResultado[P]>
  }




  export type ResultadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultadoWhereInput
    orderBy?: ResultadoOrderByWithAggregationInput | ResultadoOrderByWithAggregationInput[]
    by: ResultadoScalarFieldEnum[] | ResultadoScalarFieldEnum
    having?: ResultadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResultadoCountAggregateInputType | true
    _avg?: ResultadoAvgAggregateInputType
    _sum?: ResultadoSumAggregateInputType
    _min?: ResultadoMinAggregateInputType
    _max?: ResultadoMaxAggregateInputType
  }

  export type ResultadoGroupByOutputType = {
    id: number
    partidoId: number
    golesLocal: number
    golesVisita: number
    _count: ResultadoCountAggregateOutputType | null
    _avg: ResultadoAvgAggregateOutputType | null
    _sum: ResultadoSumAggregateOutputType | null
    _min: ResultadoMinAggregateOutputType | null
    _max: ResultadoMaxAggregateOutputType | null
  }

  type GetResultadoGroupByPayload<T extends ResultadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResultadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResultadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResultadoGroupByOutputType[P]>
            : GetScalarType<T[P], ResultadoGroupByOutputType[P]>
        }
      >
    >


  export type ResultadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partidoId?: boolean
    golesLocal?: boolean
    golesVisita?: boolean
    partido?: boolean | PartidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resultado"]>

  export type ResultadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partidoId?: boolean
    golesLocal?: boolean
    golesVisita?: boolean
    partido?: boolean | PartidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resultado"]>

  export type ResultadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partidoId?: boolean
    golesLocal?: boolean
    golesVisita?: boolean
    partido?: boolean | PartidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resultado"]>

  export type ResultadoSelectScalar = {
    id?: boolean
    partidoId?: boolean
    golesLocal?: boolean
    golesVisita?: boolean
  }

  export type ResultadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "partidoId" | "golesLocal" | "golesVisita", ExtArgs["result"]["resultado"]>
  export type ResultadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partido?: boolean | PartidoDefaultArgs<ExtArgs>
  }
  export type ResultadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partido?: boolean | PartidoDefaultArgs<ExtArgs>
  }
  export type ResultadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partido?: boolean | PartidoDefaultArgs<ExtArgs>
  }

  export type $ResultadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resultado"
    objects: {
      partido: Prisma.$PartidoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      partidoId: number
      golesLocal: number
      golesVisita: number
    }, ExtArgs["result"]["resultado"]>
    composites: {}
  }

  type ResultadoGetPayload<S extends boolean | null | undefined | ResultadoDefaultArgs> = $Result.GetResult<Prisma.$ResultadoPayload, S>

  type ResultadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResultadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResultadoCountAggregateInputType | true
    }

  export interface ResultadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resultado'], meta: { name: 'Resultado' } }
    /**
     * Find zero or one Resultado that matches the filter.
     * @param {ResultadoFindUniqueArgs} args - Arguments to find a Resultado
     * @example
     * // Get one Resultado
     * const resultado = await prisma.resultado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResultadoFindUniqueArgs>(args: SelectSubset<T, ResultadoFindUniqueArgs<ExtArgs>>): Prisma__ResultadoClient<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resultado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResultadoFindUniqueOrThrowArgs} args - Arguments to find a Resultado
     * @example
     * // Get one Resultado
     * const resultado = await prisma.resultado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResultadoFindUniqueOrThrowArgs>(args: SelectSubset<T, ResultadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResultadoClient<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resultado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoFindFirstArgs} args - Arguments to find a Resultado
     * @example
     * // Get one Resultado
     * const resultado = await prisma.resultado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResultadoFindFirstArgs>(args?: SelectSubset<T, ResultadoFindFirstArgs<ExtArgs>>): Prisma__ResultadoClient<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resultado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoFindFirstOrThrowArgs} args - Arguments to find a Resultado
     * @example
     * // Get one Resultado
     * const resultado = await prisma.resultado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResultadoFindFirstOrThrowArgs>(args?: SelectSubset<T, ResultadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResultadoClient<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resultados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resultados
     * const resultados = await prisma.resultado.findMany()
     * 
     * // Get first 10 Resultados
     * const resultados = await prisma.resultado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resultadoWithIdOnly = await prisma.resultado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResultadoFindManyArgs>(args?: SelectSubset<T, ResultadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resultado.
     * @param {ResultadoCreateArgs} args - Arguments to create a Resultado.
     * @example
     * // Create one Resultado
     * const Resultado = await prisma.resultado.create({
     *   data: {
     *     // ... data to create a Resultado
     *   }
     * })
     * 
     */
    create<T extends ResultadoCreateArgs>(args: SelectSubset<T, ResultadoCreateArgs<ExtArgs>>): Prisma__ResultadoClient<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resultados.
     * @param {ResultadoCreateManyArgs} args - Arguments to create many Resultados.
     * @example
     * // Create many Resultados
     * const resultado = await prisma.resultado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResultadoCreateManyArgs>(args?: SelectSubset<T, ResultadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resultados and returns the data saved in the database.
     * @param {ResultadoCreateManyAndReturnArgs} args - Arguments to create many Resultados.
     * @example
     * // Create many Resultados
     * const resultado = await prisma.resultado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resultados and only return the `id`
     * const resultadoWithIdOnly = await prisma.resultado.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResultadoCreateManyAndReturnArgs>(args?: SelectSubset<T, ResultadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resultado.
     * @param {ResultadoDeleteArgs} args - Arguments to delete one Resultado.
     * @example
     * // Delete one Resultado
     * const Resultado = await prisma.resultado.delete({
     *   where: {
     *     // ... filter to delete one Resultado
     *   }
     * })
     * 
     */
    delete<T extends ResultadoDeleteArgs>(args: SelectSubset<T, ResultadoDeleteArgs<ExtArgs>>): Prisma__ResultadoClient<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resultado.
     * @param {ResultadoUpdateArgs} args - Arguments to update one Resultado.
     * @example
     * // Update one Resultado
     * const resultado = await prisma.resultado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResultadoUpdateArgs>(args: SelectSubset<T, ResultadoUpdateArgs<ExtArgs>>): Prisma__ResultadoClient<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resultados.
     * @param {ResultadoDeleteManyArgs} args - Arguments to filter Resultados to delete.
     * @example
     * // Delete a few Resultados
     * const { count } = await prisma.resultado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResultadoDeleteManyArgs>(args?: SelectSubset<T, ResultadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resultados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resultados
     * const resultado = await prisma.resultado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResultadoUpdateManyArgs>(args: SelectSubset<T, ResultadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resultados and returns the data updated in the database.
     * @param {ResultadoUpdateManyAndReturnArgs} args - Arguments to update many Resultados.
     * @example
     * // Update many Resultados
     * const resultado = await prisma.resultado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resultados and only return the `id`
     * const resultadoWithIdOnly = await prisma.resultado.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResultadoUpdateManyAndReturnArgs>(args: SelectSubset<T, ResultadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resultado.
     * @param {ResultadoUpsertArgs} args - Arguments to update or create a Resultado.
     * @example
     * // Update or create a Resultado
     * const resultado = await prisma.resultado.upsert({
     *   create: {
     *     // ... data to create a Resultado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resultado we want to update
     *   }
     * })
     */
    upsert<T extends ResultadoUpsertArgs>(args: SelectSubset<T, ResultadoUpsertArgs<ExtArgs>>): Prisma__ResultadoClient<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resultados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoCountArgs} args - Arguments to filter Resultados to count.
     * @example
     * // Count the number of Resultados
     * const count = await prisma.resultado.count({
     *   where: {
     *     // ... the filter for the Resultados we want to count
     *   }
     * })
    **/
    count<T extends ResultadoCountArgs>(
      args?: Subset<T, ResultadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResultadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resultado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResultadoAggregateArgs>(args: Subset<T, ResultadoAggregateArgs>): Prisma.PrismaPromise<GetResultadoAggregateType<T>>

    /**
     * Group by Resultado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResultadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResultadoGroupByArgs['orderBy'] }
        : { orderBy?: ResultadoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResultadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResultadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resultado model
   */
  readonly fields: ResultadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resultado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResultadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    partido<T extends PartidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PartidoDefaultArgs<ExtArgs>>): Prisma__PartidoClient<$Result.GetResult<Prisma.$PartidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Resultado model
   */
  interface ResultadoFieldRefs {
    readonly id: FieldRef<"Resultado", 'Int'>
    readonly partidoId: FieldRef<"Resultado", 'Int'>
    readonly golesLocal: FieldRef<"Resultado", 'Int'>
    readonly golesVisita: FieldRef<"Resultado", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Resultado findUnique
   */
  export type ResultadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * Filter, which Resultado to fetch.
     */
    where: ResultadoWhereUniqueInput
  }

  /**
   * Resultado findUniqueOrThrow
   */
  export type ResultadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * Filter, which Resultado to fetch.
     */
    where: ResultadoWhereUniqueInput
  }

  /**
   * Resultado findFirst
   */
  export type ResultadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * Filter, which Resultado to fetch.
     */
    where?: ResultadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resultados to fetch.
     */
    orderBy?: ResultadoOrderByWithRelationInput | ResultadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resultados.
     */
    cursor?: ResultadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resultados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resultados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resultados.
     */
    distinct?: ResultadoScalarFieldEnum | ResultadoScalarFieldEnum[]
  }

  /**
   * Resultado findFirstOrThrow
   */
  export type ResultadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * Filter, which Resultado to fetch.
     */
    where?: ResultadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resultados to fetch.
     */
    orderBy?: ResultadoOrderByWithRelationInput | ResultadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resultados.
     */
    cursor?: ResultadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resultados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resultados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resultados.
     */
    distinct?: ResultadoScalarFieldEnum | ResultadoScalarFieldEnum[]
  }

  /**
   * Resultado findMany
   */
  export type ResultadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * Filter, which Resultados to fetch.
     */
    where?: ResultadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resultados to fetch.
     */
    orderBy?: ResultadoOrderByWithRelationInput | ResultadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resultados.
     */
    cursor?: ResultadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resultados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resultados.
     */
    skip?: number
    distinct?: ResultadoScalarFieldEnum | ResultadoScalarFieldEnum[]
  }

  /**
   * Resultado create
   */
  export type ResultadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * The data needed to create a Resultado.
     */
    data: XOR<ResultadoCreateInput, ResultadoUncheckedCreateInput>
  }

  /**
   * Resultado createMany
   */
  export type ResultadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resultados.
     */
    data: ResultadoCreateManyInput | ResultadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resultado createManyAndReturn
   */
  export type ResultadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * The data used to create many Resultados.
     */
    data: ResultadoCreateManyInput | ResultadoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resultado update
   */
  export type ResultadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * The data needed to update a Resultado.
     */
    data: XOR<ResultadoUpdateInput, ResultadoUncheckedUpdateInput>
    /**
     * Choose, which Resultado to update.
     */
    where: ResultadoWhereUniqueInput
  }

  /**
   * Resultado updateMany
   */
  export type ResultadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resultados.
     */
    data: XOR<ResultadoUpdateManyMutationInput, ResultadoUncheckedUpdateManyInput>
    /**
     * Filter which Resultados to update
     */
    where?: ResultadoWhereInput
    /**
     * Limit how many Resultados to update.
     */
    limit?: number
  }

  /**
   * Resultado updateManyAndReturn
   */
  export type ResultadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * The data used to update Resultados.
     */
    data: XOR<ResultadoUpdateManyMutationInput, ResultadoUncheckedUpdateManyInput>
    /**
     * Filter which Resultados to update
     */
    where?: ResultadoWhereInput
    /**
     * Limit how many Resultados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resultado upsert
   */
  export type ResultadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * The filter to search for the Resultado to update in case it exists.
     */
    where: ResultadoWhereUniqueInput
    /**
     * In case the Resultado found by the `where` argument doesn't exist, create a new Resultado with this data.
     */
    create: XOR<ResultadoCreateInput, ResultadoUncheckedCreateInput>
    /**
     * In case the Resultado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResultadoUpdateInput, ResultadoUncheckedUpdateInput>
  }

  /**
   * Resultado delete
   */
  export type ResultadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * Filter which Resultado to delete.
     */
    where: ResultadoWhereUniqueInput
  }

  /**
   * Resultado deleteMany
   */
  export type ResultadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resultados to delete
     */
    where?: ResultadoWhereInput
    /**
     * Limit how many Resultados to delete.
     */
    limit?: number
  }

  /**
   * Resultado without action
   */
  export type ResultadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EquipoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type EquipoScalarFieldEnum = (typeof EquipoScalarFieldEnum)[keyof typeof EquipoScalarFieldEnum]


  export const PartidoScalarFieldEnum: {
    id: 'id',
    equipoLocalId: 'equipoLocalId',
    equipoVisitaId: 'equipoVisitaId',
    fecha: 'fecha'
  };

  export type PartidoScalarFieldEnum = (typeof PartidoScalarFieldEnum)[keyof typeof PartidoScalarFieldEnum]


  export const ResultadoScalarFieldEnum: {
    id: 'id',
    partidoId: 'partidoId',
    golesLocal: 'golesLocal',
    golesVisita: 'golesVisita'
  };

  export type ResultadoScalarFieldEnum = (typeof ResultadoScalarFieldEnum)[keyof typeof ResultadoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type EquipoWhereInput = {
    AND?: EquipoWhereInput | EquipoWhereInput[]
    OR?: EquipoWhereInput[]
    NOT?: EquipoWhereInput | EquipoWhereInput[]
    id?: IntFilter<"Equipo"> | number
    nombre?: StringFilter<"Equipo"> | string
    partidosLocal?: PartidoListRelationFilter
    partidosVisitante?: PartidoListRelationFilter
  }

  export type EquipoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    partidosLocal?: PartidoOrderByRelationAggregateInput
    partidosVisitante?: PartidoOrderByRelationAggregateInput
  }

  export type EquipoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EquipoWhereInput | EquipoWhereInput[]
    OR?: EquipoWhereInput[]
    NOT?: EquipoWhereInput | EquipoWhereInput[]
    nombre?: StringFilter<"Equipo"> | string
    partidosLocal?: PartidoListRelationFilter
    partidosVisitante?: PartidoListRelationFilter
  }, "id">

  export type EquipoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: EquipoCountOrderByAggregateInput
    _avg?: EquipoAvgOrderByAggregateInput
    _max?: EquipoMaxOrderByAggregateInput
    _min?: EquipoMinOrderByAggregateInput
    _sum?: EquipoSumOrderByAggregateInput
  }

  export type EquipoScalarWhereWithAggregatesInput = {
    AND?: EquipoScalarWhereWithAggregatesInput | EquipoScalarWhereWithAggregatesInput[]
    OR?: EquipoScalarWhereWithAggregatesInput[]
    NOT?: EquipoScalarWhereWithAggregatesInput | EquipoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Equipo"> | number
    nombre?: StringWithAggregatesFilter<"Equipo"> | string
  }

  export type PartidoWhereInput = {
    AND?: PartidoWhereInput | PartidoWhereInput[]
    OR?: PartidoWhereInput[]
    NOT?: PartidoWhereInput | PartidoWhereInput[]
    id?: IntFilter<"Partido"> | number
    equipoLocalId?: IntFilter<"Partido"> | number
    equipoVisitaId?: IntFilter<"Partido"> | number
    fecha?: DateTimeFilter<"Partido"> | Date | string
    resultado?: XOR<ResultadoNullableScalarRelationFilter, ResultadoWhereInput> | null
    equipoLocal?: XOR<EquipoScalarRelationFilter, EquipoWhereInput>
    equipoVisitante?: XOR<EquipoScalarRelationFilter, EquipoWhereInput>
  }

  export type PartidoOrderByWithRelationInput = {
    id?: SortOrder
    equipoLocalId?: SortOrder
    equipoVisitaId?: SortOrder
    fecha?: SortOrder
    resultado?: ResultadoOrderByWithRelationInput
    equipoLocal?: EquipoOrderByWithRelationInput
    equipoVisitante?: EquipoOrderByWithRelationInput
  }

  export type PartidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PartidoWhereInput | PartidoWhereInput[]
    OR?: PartidoWhereInput[]
    NOT?: PartidoWhereInput | PartidoWhereInput[]
    equipoLocalId?: IntFilter<"Partido"> | number
    equipoVisitaId?: IntFilter<"Partido"> | number
    fecha?: DateTimeFilter<"Partido"> | Date | string
    resultado?: XOR<ResultadoNullableScalarRelationFilter, ResultadoWhereInput> | null
    equipoLocal?: XOR<EquipoScalarRelationFilter, EquipoWhereInput>
    equipoVisitante?: XOR<EquipoScalarRelationFilter, EquipoWhereInput>
  }, "id">

  export type PartidoOrderByWithAggregationInput = {
    id?: SortOrder
    equipoLocalId?: SortOrder
    equipoVisitaId?: SortOrder
    fecha?: SortOrder
    _count?: PartidoCountOrderByAggregateInput
    _avg?: PartidoAvgOrderByAggregateInput
    _max?: PartidoMaxOrderByAggregateInput
    _min?: PartidoMinOrderByAggregateInput
    _sum?: PartidoSumOrderByAggregateInput
  }

  export type PartidoScalarWhereWithAggregatesInput = {
    AND?: PartidoScalarWhereWithAggregatesInput | PartidoScalarWhereWithAggregatesInput[]
    OR?: PartidoScalarWhereWithAggregatesInput[]
    NOT?: PartidoScalarWhereWithAggregatesInput | PartidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Partido"> | number
    equipoLocalId?: IntWithAggregatesFilter<"Partido"> | number
    equipoVisitaId?: IntWithAggregatesFilter<"Partido"> | number
    fecha?: DateTimeWithAggregatesFilter<"Partido"> | Date | string
  }

  export type ResultadoWhereInput = {
    AND?: ResultadoWhereInput | ResultadoWhereInput[]
    OR?: ResultadoWhereInput[]
    NOT?: ResultadoWhereInput | ResultadoWhereInput[]
    id?: IntFilter<"Resultado"> | number
    partidoId?: IntFilter<"Resultado"> | number
    golesLocal?: IntFilter<"Resultado"> | number
    golesVisita?: IntFilter<"Resultado"> | number
    partido?: XOR<PartidoScalarRelationFilter, PartidoWhereInput>
  }

  export type ResultadoOrderByWithRelationInput = {
    id?: SortOrder
    partidoId?: SortOrder
    golesLocal?: SortOrder
    golesVisita?: SortOrder
    partido?: PartidoOrderByWithRelationInput
  }

  export type ResultadoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    partidoId?: number
    AND?: ResultadoWhereInput | ResultadoWhereInput[]
    OR?: ResultadoWhereInput[]
    NOT?: ResultadoWhereInput | ResultadoWhereInput[]
    golesLocal?: IntFilter<"Resultado"> | number
    golesVisita?: IntFilter<"Resultado"> | number
    partido?: XOR<PartidoScalarRelationFilter, PartidoWhereInput>
  }, "id" | "partidoId">

  export type ResultadoOrderByWithAggregationInput = {
    id?: SortOrder
    partidoId?: SortOrder
    golesLocal?: SortOrder
    golesVisita?: SortOrder
    _count?: ResultadoCountOrderByAggregateInput
    _avg?: ResultadoAvgOrderByAggregateInput
    _max?: ResultadoMaxOrderByAggregateInput
    _min?: ResultadoMinOrderByAggregateInput
    _sum?: ResultadoSumOrderByAggregateInput
  }

  export type ResultadoScalarWhereWithAggregatesInput = {
    AND?: ResultadoScalarWhereWithAggregatesInput | ResultadoScalarWhereWithAggregatesInput[]
    OR?: ResultadoScalarWhereWithAggregatesInput[]
    NOT?: ResultadoScalarWhereWithAggregatesInput | ResultadoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Resultado"> | number
    partidoId?: IntWithAggregatesFilter<"Resultado"> | number
    golesLocal?: IntWithAggregatesFilter<"Resultado"> | number
    golesVisita?: IntWithAggregatesFilter<"Resultado"> | number
  }

  export type EquipoCreateInput = {
    nombre: string
    partidosLocal?: PartidoCreateNestedManyWithoutEquipoLocalInput
    partidosVisitante?: PartidoCreateNestedManyWithoutEquipoVisitanteInput
  }

  export type EquipoUncheckedCreateInput = {
    id?: number
    nombre: string
    partidosLocal?: PartidoUncheckedCreateNestedManyWithoutEquipoLocalInput
    partidosVisitante?: PartidoUncheckedCreateNestedManyWithoutEquipoVisitanteInput
  }

  export type EquipoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    partidosLocal?: PartidoUpdateManyWithoutEquipoLocalNestedInput
    partidosVisitante?: PartidoUpdateManyWithoutEquipoVisitanteNestedInput
  }

  export type EquipoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    partidosLocal?: PartidoUncheckedUpdateManyWithoutEquipoLocalNestedInput
    partidosVisitante?: PartidoUncheckedUpdateManyWithoutEquipoVisitanteNestedInput
  }

  export type EquipoCreateManyInput = {
    id?: number
    nombre: string
  }

  export type EquipoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type EquipoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PartidoCreateInput = {
    fecha: Date | string
    resultado?: ResultadoCreateNestedOneWithoutPartidoInput
    equipoLocal: EquipoCreateNestedOneWithoutPartidosLocalInput
    equipoVisitante: EquipoCreateNestedOneWithoutPartidosVisitanteInput
  }

  export type PartidoUncheckedCreateInput = {
    id?: number
    equipoLocalId: number
    equipoVisitaId: number
    fecha: Date | string
    resultado?: ResultadoUncheckedCreateNestedOneWithoutPartidoInput
  }

  export type PartidoUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    resultado?: ResultadoUpdateOneWithoutPartidoNestedInput
    equipoLocal?: EquipoUpdateOneRequiredWithoutPartidosLocalNestedInput
    equipoVisitante?: EquipoUpdateOneRequiredWithoutPartidosVisitanteNestedInput
  }

  export type PartidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    equipoLocalId?: IntFieldUpdateOperationsInput | number
    equipoVisitaId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    resultado?: ResultadoUncheckedUpdateOneWithoutPartidoNestedInput
  }

  export type PartidoCreateManyInput = {
    id?: number
    equipoLocalId: number
    equipoVisitaId: number
    fecha: Date | string
  }

  export type PartidoUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    equipoLocalId?: IntFieldUpdateOperationsInput | number
    equipoVisitaId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultadoCreateInput = {
    golesLocal: number
    golesVisita: number
    partido: PartidoCreateNestedOneWithoutResultadoInput
  }

  export type ResultadoUncheckedCreateInput = {
    id?: number
    partidoId: number
    golesLocal: number
    golesVisita: number
  }

  export type ResultadoUpdateInput = {
    golesLocal?: IntFieldUpdateOperationsInput | number
    golesVisita?: IntFieldUpdateOperationsInput | number
    partido?: PartidoUpdateOneRequiredWithoutResultadoNestedInput
  }

  export type ResultadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    partidoId?: IntFieldUpdateOperationsInput | number
    golesLocal?: IntFieldUpdateOperationsInput | number
    golesVisita?: IntFieldUpdateOperationsInput | number
  }

  export type ResultadoCreateManyInput = {
    id?: number
    partidoId: number
    golesLocal: number
    golesVisita: number
  }

  export type ResultadoUpdateManyMutationInput = {
    golesLocal?: IntFieldUpdateOperationsInput | number
    golesVisita?: IntFieldUpdateOperationsInput | number
  }

  export type ResultadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    partidoId?: IntFieldUpdateOperationsInput | number
    golesLocal?: IntFieldUpdateOperationsInput | number
    golesVisita?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type PartidoListRelationFilter = {
    every?: PartidoWhereInput
    some?: PartidoWhereInput
    none?: PartidoWhereInput
  }

  export type PartidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquipoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type EquipoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EquipoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type EquipoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type EquipoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ResultadoNullableScalarRelationFilter = {
    is?: ResultadoWhereInput | null
    isNot?: ResultadoWhereInput | null
  }

  export type EquipoScalarRelationFilter = {
    is?: EquipoWhereInput
    isNot?: EquipoWhereInput
  }

  export type PartidoCountOrderByAggregateInput = {
    id?: SortOrder
    equipoLocalId?: SortOrder
    equipoVisitaId?: SortOrder
    fecha?: SortOrder
  }

  export type PartidoAvgOrderByAggregateInput = {
    id?: SortOrder
    equipoLocalId?: SortOrder
    equipoVisitaId?: SortOrder
  }

  export type PartidoMaxOrderByAggregateInput = {
    id?: SortOrder
    equipoLocalId?: SortOrder
    equipoVisitaId?: SortOrder
    fecha?: SortOrder
  }

  export type PartidoMinOrderByAggregateInput = {
    id?: SortOrder
    equipoLocalId?: SortOrder
    equipoVisitaId?: SortOrder
    fecha?: SortOrder
  }

  export type PartidoSumOrderByAggregateInput = {
    id?: SortOrder
    equipoLocalId?: SortOrder
    equipoVisitaId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PartidoScalarRelationFilter = {
    is?: PartidoWhereInput
    isNot?: PartidoWhereInput
  }

  export type ResultadoCountOrderByAggregateInput = {
    id?: SortOrder
    partidoId?: SortOrder
    golesLocal?: SortOrder
    golesVisita?: SortOrder
  }

  export type ResultadoAvgOrderByAggregateInput = {
    id?: SortOrder
    partidoId?: SortOrder
    golesLocal?: SortOrder
    golesVisita?: SortOrder
  }

  export type ResultadoMaxOrderByAggregateInput = {
    id?: SortOrder
    partidoId?: SortOrder
    golesLocal?: SortOrder
    golesVisita?: SortOrder
  }

  export type ResultadoMinOrderByAggregateInput = {
    id?: SortOrder
    partidoId?: SortOrder
    golesLocal?: SortOrder
    golesVisita?: SortOrder
  }

  export type ResultadoSumOrderByAggregateInput = {
    id?: SortOrder
    partidoId?: SortOrder
    golesLocal?: SortOrder
    golesVisita?: SortOrder
  }

  export type PartidoCreateNestedManyWithoutEquipoLocalInput = {
    create?: XOR<PartidoCreateWithoutEquipoLocalInput, PartidoUncheckedCreateWithoutEquipoLocalInput> | PartidoCreateWithoutEquipoLocalInput[] | PartidoUncheckedCreateWithoutEquipoLocalInput[]
    connectOrCreate?: PartidoCreateOrConnectWithoutEquipoLocalInput | PartidoCreateOrConnectWithoutEquipoLocalInput[]
    createMany?: PartidoCreateManyEquipoLocalInputEnvelope
    connect?: PartidoWhereUniqueInput | PartidoWhereUniqueInput[]
  }

  export type PartidoCreateNestedManyWithoutEquipoVisitanteInput = {
    create?: XOR<PartidoCreateWithoutEquipoVisitanteInput, PartidoUncheckedCreateWithoutEquipoVisitanteInput> | PartidoCreateWithoutEquipoVisitanteInput[] | PartidoUncheckedCreateWithoutEquipoVisitanteInput[]
    connectOrCreate?: PartidoCreateOrConnectWithoutEquipoVisitanteInput | PartidoCreateOrConnectWithoutEquipoVisitanteInput[]
    createMany?: PartidoCreateManyEquipoVisitanteInputEnvelope
    connect?: PartidoWhereUniqueInput | PartidoWhereUniqueInput[]
  }

  export type PartidoUncheckedCreateNestedManyWithoutEquipoLocalInput = {
    create?: XOR<PartidoCreateWithoutEquipoLocalInput, PartidoUncheckedCreateWithoutEquipoLocalInput> | PartidoCreateWithoutEquipoLocalInput[] | PartidoUncheckedCreateWithoutEquipoLocalInput[]
    connectOrCreate?: PartidoCreateOrConnectWithoutEquipoLocalInput | PartidoCreateOrConnectWithoutEquipoLocalInput[]
    createMany?: PartidoCreateManyEquipoLocalInputEnvelope
    connect?: PartidoWhereUniqueInput | PartidoWhereUniqueInput[]
  }

  export type PartidoUncheckedCreateNestedManyWithoutEquipoVisitanteInput = {
    create?: XOR<PartidoCreateWithoutEquipoVisitanteInput, PartidoUncheckedCreateWithoutEquipoVisitanteInput> | PartidoCreateWithoutEquipoVisitanteInput[] | PartidoUncheckedCreateWithoutEquipoVisitanteInput[]
    connectOrCreate?: PartidoCreateOrConnectWithoutEquipoVisitanteInput | PartidoCreateOrConnectWithoutEquipoVisitanteInput[]
    createMany?: PartidoCreateManyEquipoVisitanteInputEnvelope
    connect?: PartidoWhereUniqueInput | PartidoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PartidoUpdateManyWithoutEquipoLocalNestedInput = {
    create?: XOR<PartidoCreateWithoutEquipoLocalInput, PartidoUncheckedCreateWithoutEquipoLocalInput> | PartidoCreateWithoutEquipoLocalInput[] | PartidoUncheckedCreateWithoutEquipoLocalInput[]
    connectOrCreate?: PartidoCreateOrConnectWithoutEquipoLocalInput | PartidoCreateOrConnectWithoutEquipoLocalInput[]
    upsert?: PartidoUpsertWithWhereUniqueWithoutEquipoLocalInput | PartidoUpsertWithWhereUniqueWithoutEquipoLocalInput[]
    createMany?: PartidoCreateManyEquipoLocalInputEnvelope
    set?: PartidoWhereUniqueInput | PartidoWhereUniqueInput[]
    disconnect?: PartidoWhereUniqueInput | PartidoWhereUniqueInput[]
    delete?: PartidoWhereUniqueInput | PartidoWhereUniqueInput[]
    connect?: PartidoWhereUniqueInput | PartidoWhereUniqueInput[]
    update?: PartidoUpdateWithWhereUniqueWithoutEquipoLocalInput | PartidoUpdateWithWhereUniqueWithoutEquipoLocalInput[]
    updateMany?: PartidoUpdateManyWithWhereWithoutEquipoLocalInput | PartidoUpdateManyWithWhereWithoutEquipoLocalInput[]
    deleteMany?: PartidoScalarWhereInput | PartidoScalarWhereInput[]
  }

  export type PartidoUpdateManyWithoutEquipoVisitanteNestedInput = {
    create?: XOR<PartidoCreateWithoutEquipoVisitanteInput, PartidoUncheckedCreateWithoutEquipoVisitanteInput> | PartidoCreateWithoutEquipoVisitanteInput[] | PartidoUncheckedCreateWithoutEquipoVisitanteInput[]
    connectOrCreate?: PartidoCreateOrConnectWithoutEquipoVisitanteInput | PartidoCreateOrConnectWithoutEquipoVisitanteInput[]
    upsert?: PartidoUpsertWithWhereUniqueWithoutEquipoVisitanteInput | PartidoUpsertWithWhereUniqueWithoutEquipoVisitanteInput[]
    createMany?: PartidoCreateManyEquipoVisitanteInputEnvelope
    set?: PartidoWhereUniqueInput | PartidoWhereUniqueInput[]
    disconnect?: PartidoWhereUniqueInput | PartidoWhereUniqueInput[]
    delete?: PartidoWhereUniqueInput | PartidoWhereUniqueInput[]
    connect?: PartidoWhereUniqueInput | PartidoWhereUniqueInput[]
    update?: PartidoUpdateWithWhereUniqueWithoutEquipoVisitanteInput | PartidoUpdateWithWhereUniqueWithoutEquipoVisitanteInput[]
    updateMany?: PartidoUpdateManyWithWhereWithoutEquipoVisitanteInput | PartidoUpdateManyWithWhereWithoutEquipoVisitanteInput[]
    deleteMany?: PartidoScalarWhereInput | PartidoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PartidoUncheckedUpdateManyWithoutEquipoLocalNestedInput = {
    create?: XOR<PartidoCreateWithoutEquipoLocalInput, PartidoUncheckedCreateWithoutEquipoLocalInput> | PartidoCreateWithoutEquipoLocalInput[] | PartidoUncheckedCreateWithoutEquipoLocalInput[]
    connectOrCreate?: PartidoCreateOrConnectWithoutEquipoLocalInput | PartidoCreateOrConnectWithoutEquipoLocalInput[]
    upsert?: PartidoUpsertWithWhereUniqueWithoutEquipoLocalInput | PartidoUpsertWithWhereUniqueWithoutEquipoLocalInput[]
    createMany?: PartidoCreateManyEquipoLocalInputEnvelope
    set?: PartidoWhereUniqueInput | PartidoWhereUniqueInput[]
    disconnect?: PartidoWhereUniqueInput | PartidoWhereUniqueInput[]
    delete?: PartidoWhereUniqueInput | PartidoWhereUniqueInput[]
    connect?: PartidoWhereUniqueInput | PartidoWhereUniqueInput[]
    update?: PartidoUpdateWithWhereUniqueWithoutEquipoLocalInput | PartidoUpdateWithWhereUniqueWithoutEquipoLocalInput[]
    updateMany?: PartidoUpdateManyWithWhereWithoutEquipoLocalInput | PartidoUpdateManyWithWhereWithoutEquipoLocalInput[]
    deleteMany?: PartidoScalarWhereInput | PartidoScalarWhereInput[]
  }

  export type PartidoUncheckedUpdateManyWithoutEquipoVisitanteNestedInput = {
    create?: XOR<PartidoCreateWithoutEquipoVisitanteInput, PartidoUncheckedCreateWithoutEquipoVisitanteInput> | PartidoCreateWithoutEquipoVisitanteInput[] | PartidoUncheckedCreateWithoutEquipoVisitanteInput[]
    connectOrCreate?: PartidoCreateOrConnectWithoutEquipoVisitanteInput | PartidoCreateOrConnectWithoutEquipoVisitanteInput[]
    upsert?: PartidoUpsertWithWhereUniqueWithoutEquipoVisitanteInput | PartidoUpsertWithWhereUniqueWithoutEquipoVisitanteInput[]
    createMany?: PartidoCreateManyEquipoVisitanteInputEnvelope
    set?: PartidoWhereUniqueInput | PartidoWhereUniqueInput[]
    disconnect?: PartidoWhereUniqueInput | PartidoWhereUniqueInput[]
    delete?: PartidoWhereUniqueInput | PartidoWhereUniqueInput[]
    connect?: PartidoWhereUniqueInput | PartidoWhereUniqueInput[]
    update?: PartidoUpdateWithWhereUniqueWithoutEquipoVisitanteInput | PartidoUpdateWithWhereUniqueWithoutEquipoVisitanteInput[]
    updateMany?: PartidoUpdateManyWithWhereWithoutEquipoVisitanteInput | PartidoUpdateManyWithWhereWithoutEquipoVisitanteInput[]
    deleteMany?: PartidoScalarWhereInput | PartidoScalarWhereInput[]
  }

  export type ResultadoCreateNestedOneWithoutPartidoInput = {
    create?: XOR<ResultadoCreateWithoutPartidoInput, ResultadoUncheckedCreateWithoutPartidoInput>
    connectOrCreate?: ResultadoCreateOrConnectWithoutPartidoInput
    connect?: ResultadoWhereUniqueInput
  }

  export type EquipoCreateNestedOneWithoutPartidosLocalInput = {
    create?: XOR<EquipoCreateWithoutPartidosLocalInput, EquipoUncheckedCreateWithoutPartidosLocalInput>
    connectOrCreate?: EquipoCreateOrConnectWithoutPartidosLocalInput
    connect?: EquipoWhereUniqueInput
  }

  export type EquipoCreateNestedOneWithoutPartidosVisitanteInput = {
    create?: XOR<EquipoCreateWithoutPartidosVisitanteInput, EquipoUncheckedCreateWithoutPartidosVisitanteInput>
    connectOrCreate?: EquipoCreateOrConnectWithoutPartidosVisitanteInput
    connect?: EquipoWhereUniqueInput
  }

  export type ResultadoUncheckedCreateNestedOneWithoutPartidoInput = {
    create?: XOR<ResultadoCreateWithoutPartidoInput, ResultadoUncheckedCreateWithoutPartidoInput>
    connectOrCreate?: ResultadoCreateOrConnectWithoutPartidoInput
    connect?: ResultadoWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ResultadoUpdateOneWithoutPartidoNestedInput = {
    create?: XOR<ResultadoCreateWithoutPartidoInput, ResultadoUncheckedCreateWithoutPartidoInput>
    connectOrCreate?: ResultadoCreateOrConnectWithoutPartidoInput
    upsert?: ResultadoUpsertWithoutPartidoInput
    disconnect?: ResultadoWhereInput | boolean
    delete?: ResultadoWhereInput | boolean
    connect?: ResultadoWhereUniqueInput
    update?: XOR<XOR<ResultadoUpdateToOneWithWhereWithoutPartidoInput, ResultadoUpdateWithoutPartidoInput>, ResultadoUncheckedUpdateWithoutPartidoInput>
  }

  export type EquipoUpdateOneRequiredWithoutPartidosLocalNestedInput = {
    create?: XOR<EquipoCreateWithoutPartidosLocalInput, EquipoUncheckedCreateWithoutPartidosLocalInput>
    connectOrCreate?: EquipoCreateOrConnectWithoutPartidosLocalInput
    upsert?: EquipoUpsertWithoutPartidosLocalInput
    connect?: EquipoWhereUniqueInput
    update?: XOR<XOR<EquipoUpdateToOneWithWhereWithoutPartidosLocalInput, EquipoUpdateWithoutPartidosLocalInput>, EquipoUncheckedUpdateWithoutPartidosLocalInput>
  }

  export type EquipoUpdateOneRequiredWithoutPartidosVisitanteNestedInput = {
    create?: XOR<EquipoCreateWithoutPartidosVisitanteInput, EquipoUncheckedCreateWithoutPartidosVisitanteInput>
    connectOrCreate?: EquipoCreateOrConnectWithoutPartidosVisitanteInput
    upsert?: EquipoUpsertWithoutPartidosVisitanteInput
    connect?: EquipoWhereUniqueInput
    update?: XOR<XOR<EquipoUpdateToOneWithWhereWithoutPartidosVisitanteInput, EquipoUpdateWithoutPartidosVisitanteInput>, EquipoUncheckedUpdateWithoutPartidosVisitanteInput>
  }

  export type ResultadoUncheckedUpdateOneWithoutPartidoNestedInput = {
    create?: XOR<ResultadoCreateWithoutPartidoInput, ResultadoUncheckedCreateWithoutPartidoInput>
    connectOrCreate?: ResultadoCreateOrConnectWithoutPartidoInput
    upsert?: ResultadoUpsertWithoutPartidoInput
    disconnect?: ResultadoWhereInput | boolean
    delete?: ResultadoWhereInput | boolean
    connect?: ResultadoWhereUniqueInput
    update?: XOR<XOR<ResultadoUpdateToOneWithWhereWithoutPartidoInput, ResultadoUpdateWithoutPartidoInput>, ResultadoUncheckedUpdateWithoutPartidoInput>
  }

  export type PartidoCreateNestedOneWithoutResultadoInput = {
    create?: XOR<PartidoCreateWithoutResultadoInput, PartidoUncheckedCreateWithoutResultadoInput>
    connectOrCreate?: PartidoCreateOrConnectWithoutResultadoInput
    connect?: PartidoWhereUniqueInput
  }

  export type PartidoUpdateOneRequiredWithoutResultadoNestedInput = {
    create?: XOR<PartidoCreateWithoutResultadoInput, PartidoUncheckedCreateWithoutResultadoInput>
    connectOrCreate?: PartidoCreateOrConnectWithoutResultadoInput
    upsert?: PartidoUpsertWithoutResultadoInput
    connect?: PartidoWhereUniqueInput
    update?: XOR<XOR<PartidoUpdateToOneWithWhereWithoutResultadoInput, PartidoUpdateWithoutResultadoInput>, PartidoUncheckedUpdateWithoutResultadoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PartidoCreateWithoutEquipoLocalInput = {
    fecha: Date | string
    resultado?: ResultadoCreateNestedOneWithoutPartidoInput
    equipoVisitante: EquipoCreateNestedOneWithoutPartidosVisitanteInput
  }

  export type PartidoUncheckedCreateWithoutEquipoLocalInput = {
    id?: number
    equipoVisitaId: number
    fecha: Date | string
    resultado?: ResultadoUncheckedCreateNestedOneWithoutPartidoInput
  }

  export type PartidoCreateOrConnectWithoutEquipoLocalInput = {
    where: PartidoWhereUniqueInput
    create: XOR<PartidoCreateWithoutEquipoLocalInput, PartidoUncheckedCreateWithoutEquipoLocalInput>
  }

  export type PartidoCreateManyEquipoLocalInputEnvelope = {
    data: PartidoCreateManyEquipoLocalInput | PartidoCreateManyEquipoLocalInput[]
    skipDuplicates?: boolean
  }

  export type PartidoCreateWithoutEquipoVisitanteInput = {
    fecha: Date | string
    resultado?: ResultadoCreateNestedOneWithoutPartidoInput
    equipoLocal: EquipoCreateNestedOneWithoutPartidosLocalInput
  }

  export type PartidoUncheckedCreateWithoutEquipoVisitanteInput = {
    id?: number
    equipoLocalId: number
    fecha: Date | string
    resultado?: ResultadoUncheckedCreateNestedOneWithoutPartidoInput
  }

  export type PartidoCreateOrConnectWithoutEquipoVisitanteInput = {
    where: PartidoWhereUniqueInput
    create: XOR<PartidoCreateWithoutEquipoVisitanteInput, PartidoUncheckedCreateWithoutEquipoVisitanteInput>
  }

  export type PartidoCreateManyEquipoVisitanteInputEnvelope = {
    data: PartidoCreateManyEquipoVisitanteInput | PartidoCreateManyEquipoVisitanteInput[]
    skipDuplicates?: boolean
  }

  export type PartidoUpsertWithWhereUniqueWithoutEquipoLocalInput = {
    where: PartidoWhereUniqueInput
    update: XOR<PartidoUpdateWithoutEquipoLocalInput, PartidoUncheckedUpdateWithoutEquipoLocalInput>
    create: XOR<PartidoCreateWithoutEquipoLocalInput, PartidoUncheckedCreateWithoutEquipoLocalInput>
  }

  export type PartidoUpdateWithWhereUniqueWithoutEquipoLocalInput = {
    where: PartidoWhereUniqueInput
    data: XOR<PartidoUpdateWithoutEquipoLocalInput, PartidoUncheckedUpdateWithoutEquipoLocalInput>
  }

  export type PartidoUpdateManyWithWhereWithoutEquipoLocalInput = {
    where: PartidoScalarWhereInput
    data: XOR<PartidoUpdateManyMutationInput, PartidoUncheckedUpdateManyWithoutEquipoLocalInput>
  }

  export type PartidoScalarWhereInput = {
    AND?: PartidoScalarWhereInput | PartidoScalarWhereInput[]
    OR?: PartidoScalarWhereInput[]
    NOT?: PartidoScalarWhereInput | PartidoScalarWhereInput[]
    id?: IntFilter<"Partido"> | number
    equipoLocalId?: IntFilter<"Partido"> | number
    equipoVisitaId?: IntFilter<"Partido"> | number
    fecha?: DateTimeFilter<"Partido"> | Date | string
  }

  export type PartidoUpsertWithWhereUniqueWithoutEquipoVisitanteInput = {
    where: PartidoWhereUniqueInput
    update: XOR<PartidoUpdateWithoutEquipoVisitanteInput, PartidoUncheckedUpdateWithoutEquipoVisitanteInput>
    create: XOR<PartidoCreateWithoutEquipoVisitanteInput, PartidoUncheckedCreateWithoutEquipoVisitanteInput>
  }

  export type PartidoUpdateWithWhereUniqueWithoutEquipoVisitanteInput = {
    where: PartidoWhereUniqueInput
    data: XOR<PartidoUpdateWithoutEquipoVisitanteInput, PartidoUncheckedUpdateWithoutEquipoVisitanteInput>
  }

  export type PartidoUpdateManyWithWhereWithoutEquipoVisitanteInput = {
    where: PartidoScalarWhereInput
    data: XOR<PartidoUpdateManyMutationInput, PartidoUncheckedUpdateManyWithoutEquipoVisitanteInput>
  }

  export type ResultadoCreateWithoutPartidoInput = {
    golesLocal: number
    golesVisita: number
  }

  export type ResultadoUncheckedCreateWithoutPartidoInput = {
    id?: number
    golesLocal: number
    golesVisita: number
  }

  export type ResultadoCreateOrConnectWithoutPartidoInput = {
    where: ResultadoWhereUniqueInput
    create: XOR<ResultadoCreateWithoutPartidoInput, ResultadoUncheckedCreateWithoutPartidoInput>
  }

  export type EquipoCreateWithoutPartidosLocalInput = {
    nombre: string
    partidosVisitante?: PartidoCreateNestedManyWithoutEquipoVisitanteInput
  }

  export type EquipoUncheckedCreateWithoutPartidosLocalInput = {
    id?: number
    nombre: string
    partidosVisitante?: PartidoUncheckedCreateNestedManyWithoutEquipoVisitanteInput
  }

  export type EquipoCreateOrConnectWithoutPartidosLocalInput = {
    where: EquipoWhereUniqueInput
    create: XOR<EquipoCreateWithoutPartidosLocalInput, EquipoUncheckedCreateWithoutPartidosLocalInput>
  }

  export type EquipoCreateWithoutPartidosVisitanteInput = {
    nombre: string
    partidosLocal?: PartidoCreateNestedManyWithoutEquipoLocalInput
  }

  export type EquipoUncheckedCreateWithoutPartidosVisitanteInput = {
    id?: number
    nombre: string
    partidosLocal?: PartidoUncheckedCreateNestedManyWithoutEquipoLocalInput
  }

  export type EquipoCreateOrConnectWithoutPartidosVisitanteInput = {
    where: EquipoWhereUniqueInput
    create: XOR<EquipoCreateWithoutPartidosVisitanteInput, EquipoUncheckedCreateWithoutPartidosVisitanteInput>
  }

  export type ResultadoUpsertWithoutPartidoInput = {
    update: XOR<ResultadoUpdateWithoutPartidoInput, ResultadoUncheckedUpdateWithoutPartidoInput>
    create: XOR<ResultadoCreateWithoutPartidoInput, ResultadoUncheckedCreateWithoutPartidoInput>
    where?: ResultadoWhereInput
  }

  export type ResultadoUpdateToOneWithWhereWithoutPartidoInput = {
    where?: ResultadoWhereInput
    data: XOR<ResultadoUpdateWithoutPartidoInput, ResultadoUncheckedUpdateWithoutPartidoInput>
  }

  export type ResultadoUpdateWithoutPartidoInput = {
    golesLocal?: IntFieldUpdateOperationsInput | number
    golesVisita?: IntFieldUpdateOperationsInput | number
  }

  export type ResultadoUncheckedUpdateWithoutPartidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    golesLocal?: IntFieldUpdateOperationsInput | number
    golesVisita?: IntFieldUpdateOperationsInput | number
  }

  export type EquipoUpsertWithoutPartidosLocalInput = {
    update: XOR<EquipoUpdateWithoutPartidosLocalInput, EquipoUncheckedUpdateWithoutPartidosLocalInput>
    create: XOR<EquipoCreateWithoutPartidosLocalInput, EquipoUncheckedCreateWithoutPartidosLocalInput>
    where?: EquipoWhereInput
  }

  export type EquipoUpdateToOneWithWhereWithoutPartidosLocalInput = {
    where?: EquipoWhereInput
    data: XOR<EquipoUpdateWithoutPartidosLocalInput, EquipoUncheckedUpdateWithoutPartidosLocalInput>
  }

  export type EquipoUpdateWithoutPartidosLocalInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    partidosVisitante?: PartidoUpdateManyWithoutEquipoVisitanteNestedInput
  }

  export type EquipoUncheckedUpdateWithoutPartidosLocalInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    partidosVisitante?: PartidoUncheckedUpdateManyWithoutEquipoVisitanteNestedInput
  }

  export type EquipoUpsertWithoutPartidosVisitanteInput = {
    update: XOR<EquipoUpdateWithoutPartidosVisitanteInput, EquipoUncheckedUpdateWithoutPartidosVisitanteInput>
    create: XOR<EquipoCreateWithoutPartidosVisitanteInput, EquipoUncheckedCreateWithoutPartidosVisitanteInput>
    where?: EquipoWhereInput
  }

  export type EquipoUpdateToOneWithWhereWithoutPartidosVisitanteInput = {
    where?: EquipoWhereInput
    data: XOR<EquipoUpdateWithoutPartidosVisitanteInput, EquipoUncheckedUpdateWithoutPartidosVisitanteInput>
  }

  export type EquipoUpdateWithoutPartidosVisitanteInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    partidosLocal?: PartidoUpdateManyWithoutEquipoLocalNestedInput
  }

  export type EquipoUncheckedUpdateWithoutPartidosVisitanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    partidosLocal?: PartidoUncheckedUpdateManyWithoutEquipoLocalNestedInput
  }

  export type PartidoCreateWithoutResultadoInput = {
    fecha: Date | string
    equipoLocal: EquipoCreateNestedOneWithoutPartidosLocalInput
    equipoVisitante: EquipoCreateNestedOneWithoutPartidosVisitanteInput
  }

  export type PartidoUncheckedCreateWithoutResultadoInput = {
    id?: number
    equipoLocalId: number
    equipoVisitaId: number
    fecha: Date | string
  }

  export type PartidoCreateOrConnectWithoutResultadoInput = {
    where: PartidoWhereUniqueInput
    create: XOR<PartidoCreateWithoutResultadoInput, PartidoUncheckedCreateWithoutResultadoInput>
  }

  export type PartidoUpsertWithoutResultadoInput = {
    update: XOR<PartidoUpdateWithoutResultadoInput, PartidoUncheckedUpdateWithoutResultadoInput>
    create: XOR<PartidoCreateWithoutResultadoInput, PartidoUncheckedCreateWithoutResultadoInput>
    where?: PartidoWhereInput
  }

  export type PartidoUpdateToOneWithWhereWithoutResultadoInput = {
    where?: PartidoWhereInput
    data: XOR<PartidoUpdateWithoutResultadoInput, PartidoUncheckedUpdateWithoutResultadoInput>
  }

  export type PartidoUpdateWithoutResultadoInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    equipoLocal?: EquipoUpdateOneRequiredWithoutPartidosLocalNestedInput
    equipoVisitante?: EquipoUpdateOneRequiredWithoutPartidosVisitanteNestedInput
  }

  export type PartidoUncheckedUpdateWithoutResultadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    equipoLocalId?: IntFieldUpdateOperationsInput | number
    equipoVisitaId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartidoCreateManyEquipoLocalInput = {
    id?: number
    equipoVisitaId: number
    fecha: Date | string
  }

  export type PartidoCreateManyEquipoVisitanteInput = {
    id?: number
    equipoLocalId: number
    fecha: Date | string
  }

  export type PartidoUpdateWithoutEquipoLocalInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    resultado?: ResultadoUpdateOneWithoutPartidoNestedInput
    equipoVisitante?: EquipoUpdateOneRequiredWithoutPartidosVisitanteNestedInput
  }

  export type PartidoUncheckedUpdateWithoutEquipoLocalInput = {
    id?: IntFieldUpdateOperationsInput | number
    equipoVisitaId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    resultado?: ResultadoUncheckedUpdateOneWithoutPartidoNestedInput
  }

  export type PartidoUncheckedUpdateManyWithoutEquipoLocalInput = {
    id?: IntFieldUpdateOperationsInput | number
    equipoVisitaId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartidoUpdateWithoutEquipoVisitanteInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    resultado?: ResultadoUpdateOneWithoutPartidoNestedInput
    equipoLocal?: EquipoUpdateOneRequiredWithoutPartidosLocalNestedInput
  }

  export type PartidoUncheckedUpdateWithoutEquipoVisitanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    equipoLocalId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    resultado?: ResultadoUncheckedUpdateOneWithoutPartidoNestedInput
  }

  export type PartidoUncheckedUpdateManyWithoutEquipoVisitanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    equipoLocalId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}