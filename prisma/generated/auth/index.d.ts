
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model register_token
 * 
 */
export type register_token = $Result.DefaultSelection<Prisma.$register_tokenPayload>
/**
 * Model auth
 * 
 */
export type auth = $Result.DefaultSelection<Prisma.$authPayload>
/**
 * Model historico_session
 * 
 */
export type historico_session = $Result.DefaultSelection<Prisma.$historico_sessionPayload>
/**
 * Model historico_otp
 * 
 */
export type historico_otp = $Result.DefaultSelection<Prisma.$historico_otpPayload>
/**
 * Model historico_senha
 * 
 */
export type historico_senha = $Result.DefaultSelection<Prisma.$historico_senhaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Tipo_User: {
  MASTER: 'MASTER',
  ADMIN: 'ADMIN',
  OPERADOR: 'OPERADOR',
  CLIENTE: 'CLIENTE'
};

export type Tipo_User = (typeof Tipo_User)[keyof typeof Tipo_User]

}

export type Tipo_User = $Enums.Tipo_User

export const Tipo_User: typeof $Enums.Tipo_User

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Register_tokens
 * const register_tokens = await prisma.register_token.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Register_tokens
   * const register_tokens = await prisma.register_token.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.register_token`: Exposes CRUD operations for the **register_token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Register_tokens
    * const register_tokens = await prisma.register_token.findMany()
    * ```
    */
  get register_token(): Prisma.register_tokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auth`: Exposes CRUD operations for the **auth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auths
    * const auths = await prisma.auth.findMany()
    * ```
    */
  get auth(): Prisma.authDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historico_session`: Exposes CRUD operations for the **historico_session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Historico_sessions
    * const historico_sessions = await prisma.historico_session.findMany()
    * ```
    */
  get historico_session(): Prisma.historico_sessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historico_otp`: Exposes CRUD operations for the **historico_otp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Historico_otps
    * const historico_otps = await prisma.historico_otp.findMany()
    * ```
    */
  get historico_otp(): Prisma.historico_otpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historico_senha`: Exposes CRUD operations for the **historico_senha** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Historico_senhas
    * const historico_senhas = await prisma.historico_senha.findMany()
    * ```
    */
  get historico_senha(): Prisma.historico_senhaDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    register_token: 'register_token',
    auth: 'auth',
    historico_session: 'historico_session',
    historico_otp: 'historico_otp',
    historico_senha: 'historico_senha'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "register_token" | "auth" | "historico_session" | "historico_otp" | "historico_senha"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      register_token: {
        payload: Prisma.$register_tokenPayload<ExtArgs>
        fields: Prisma.register_tokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.register_tokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$register_tokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.register_tokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$register_tokenPayload>
          }
          findFirst: {
            args: Prisma.register_tokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$register_tokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.register_tokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$register_tokenPayload>
          }
          findMany: {
            args: Prisma.register_tokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$register_tokenPayload>[]
          }
          create: {
            args: Prisma.register_tokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$register_tokenPayload>
          }
          createMany: {
            args: Prisma.register_tokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.register_tokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$register_tokenPayload>[]
          }
          delete: {
            args: Prisma.register_tokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$register_tokenPayload>
          }
          update: {
            args: Prisma.register_tokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$register_tokenPayload>
          }
          deleteMany: {
            args: Prisma.register_tokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.register_tokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.register_tokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$register_tokenPayload>[]
          }
          upsert: {
            args: Prisma.register_tokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$register_tokenPayload>
          }
          aggregate: {
            args: Prisma.Register_tokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegister_token>
          }
          groupBy: {
            args: Prisma.register_tokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<Register_tokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.register_tokenCountArgs<ExtArgs>
            result: $Utils.Optional<Register_tokenCountAggregateOutputType> | number
          }
        }
      }
      auth: {
        payload: Prisma.$authPayload<ExtArgs>
        fields: Prisma.authFieldRefs
        operations: {
          findUnique: {
            args: Prisma.authFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.authFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authPayload>
          }
          findFirst: {
            args: Prisma.authFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.authFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authPayload>
          }
          findMany: {
            args: Prisma.authFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authPayload>[]
          }
          create: {
            args: Prisma.authCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authPayload>
          }
          createMany: {
            args: Prisma.authCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.authCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authPayload>[]
          }
          delete: {
            args: Prisma.authDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authPayload>
          }
          update: {
            args: Prisma.authUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authPayload>
          }
          deleteMany: {
            args: Prisma.authDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.authUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.authUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authPayload>[]
          }
          upsert: {
            args: Prisma.authUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authPayload>
          }
          aggregate: {
            args: Prisma.AuthAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuth>
          }
          groupBy: {
            args: Prisma.authGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthGroupByOutputType>[]
          }
          count: {
            args: Prisma.authCountArgs<ExtArgs>
            result: $Utils.Optional<AuthCountAggregateOutputType> | number
          }
        }
      }
      historico_session: {
        payload: Prisma.$historico_sessionPayload<ExtArgs>
        fields: Prisma.historico_sessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.historico_sessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_sessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.historico_sessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_sessionPayload>
          }
          findFirst: {
            args: Prisma.historico_sessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_sessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.historico_sessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_sessionPayload>
          }
          findMany: {
            args: Prisma.historico_sessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_sessionPayload>[]
          }
          create: {
            args: Prisma.historico_sessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_sessionPayload>
          }
          createMany: {
            args: Prisma.historico_sessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.historico_sessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_sessionPayload>[]
          }
          delete: {
            args: Prisma.historico_sessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_sessionPayload>
          }
          update: {
            args: Prisma.historico_sessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_sessionPayload>
          }
          deleteMany: {
            args: Prisma.historico_sessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.historico_sessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.historico_sessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_sessionPayload>[]
          }
          upsert: {
            args: Prisma.historico_sessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_sessionPayload>
          }
          aggregate: {
            args: Prisma.Historico_sessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistorico_session>
          }
          groupBy: {
            args: Prisma.historico_sessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Historico_sessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.historico_sessionCountArgs<ExtArgs>
            result: $Utils.Optional<Historico_sessionCountAggregateOutputType> | number
          }
        }
      }
      historico_otp: {
        payload: Prisma.$historico_otpPayload<ExtArgs>
        fields: Prisma.historico_otpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.historico_otpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_otpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.historico_otpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_otpPayload>
          }
          findFirst: {
            args: Prisma.historico_otpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_otpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.historico_otpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_otpPayload>
          }
          findMany: {
            args: Prisma.historico_otpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_otpPayload>[]
          }
          create: {
            args: Prisma.historico_otpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_otpPayload>
          }
          createMany: {
            args: Prisma.historico_otpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.historico_otpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_otpPayload>[]
          }
          delete: {
            args: Prisma.historico_otpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_otpPayload>
          }
          update: {
            args: Prisma.historico_otpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_otpPayload>
          }
          deleteMany: {
            args: Prisma.historico_otpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.historico_otpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.historico_otpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_otpPayload>[]
          }
          upsert: {
            args: Prisma.historico_otpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_otpPayload>
          }
          aggregate: {
            args: Prisma.Historico_otpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistorico_otp>
          }
          groupBy: {
            args: Prisma.historico_otpGroupByArgs<ExtArgs>
            result: $Utils.Optional<Historico_otpGroupByOutputType>[]
          }
          count: {
            args: Prisma.historico_otpCountArgs<ExtArgs>
            result: $Utils.Optional<Historico_otpCountAggregateOutputType> | number
          }
        }
      }
      historico_senha: {
        payload: Prisma.$historico_senhaPayload<ExtArgs>
        fields: Prisma.historico_senhaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.historico_senhaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_senhaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.historico_senhaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_senhaPayload>
          }
          findFirst: {
            args: Prisma.historico_senhaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_senhaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.historico_senhaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_senhaPayload>
          }
          findMany: {
            args: Prisma.historico_senhaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_senhaPayload>[]
          }
          create: {
            args: Prisma.historico_senhaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_senhaPayload>
          }
          createMany: {
            args: Prisma.historico_senhaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.historico_senhaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_senhaPayload>[]
          }
          delete: {
            args: Prisma.historico_senhaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_senhaPayload>
          }
          update: {
            args: Prisma.historico_senhaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_senhaPayload>
          }
          deleteMany: {
            args: Prisma.historico_senhaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.historico_senhaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.historico_senhaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_senhaPayload>[]
          }
          upsert: {
            args: Prisma.historico_senhaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historico_senhaPayload>
          }
          aggregate: {
            args: Prisma.Historico_senhaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistorico_senha>
          }
          groupBy: {
            args: Prisma.historico_senhaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Historico_senhaGroupByOutputType>[]
          }
          count: {
            args: Prisma.historico_senhaCountArgs<ExtArgs>
            result: $Utils.Optional<Historico_senhaCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    register_token?: register_tokenOmit
    auth?: authOmit
    historico_session?: historico_sessionOmit
    historico_otp?: historico_otpOmit
    historico_senha?: historico_senhaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type AuthCountOutputType
   */

  export type AuthCountOutputType = {
    historicoSessions: number
    historicoOtps: number
    historicoSenhas: number
  }

  export type AuthCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historicoSessions?: boolean | AuthCountOutputTypeCountHistoricoSessionsArgs
    historicoOtps?: boolean | AuthCountOutputTypeCountHistoricoOtpsArgs
    historicoSenhas?: boolean | AuthCountOutputTypeCountHistoricoSenhasArgs
  }

  // Custom InputTypes
  /**
   * AuthCountOutputType without action
   */
  export type AuthCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCountOutputType
     */
    select?: AuthCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthCountOutputType without action
   */
  export type AuthCountOutputTypeCountHistoricoSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historico_sessionWhereInput
  }

  /**
   * AuthCountOutputType without action
   */
  export type AuthCountOutputTypeCountHistoricoOtpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historico_otpWhereInput
  }

  /**
   * AuthCountOutputType without action
   */
  export type AuthCountOutputTypeCountHistoricoSenhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historico_senhaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model register_token
   */

  export type AggregateRegister_token = {
    _count: Register_tokenCountAggregateOutputType | null
    _min: Register_tokenMinAggregateOutputType | null
    _max: Register_tokenMaxAggregateOutputType | null
  }

  export type Register_tokenMinAggregateOutputType = {
    uuid: string | null
    status: boolean | null
    data_util: Date | null
  }

  export type Register_tokenMaxAggregateOutputType = {
    uuid: string | null
    status: boolean | null
    data_util: Date | null
  }

  export type Register_tokenCountAggregateOutputType = {
    uuid: number
    status: number
    data_util: number
    _all: number
  }


  export type Register_tokenMinAggregateInputType = {
    uuid?: true
    status?: true
    data_util?: true
  }

  export type Register_tokenMaxAggregateInputType = {
    uuid?: true
    status?: true
    data_util?: true
  }

  export type Register_tokenCountAggregateInputType = {
    uuid?: true
    status?: true
    data_util?: true
    _all?: true
  }

  export type Register_tokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which register_token to aggregate.
     */
    where?: register_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of register_tokens to fetch.
     */
    orderBy?: register_tokenOrderByWithRelationInput | register_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: register_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` register_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` register_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned register_tokens
    **/
    _count?: true | Register_tokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Register_tokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Register_tokenMaxAggregateInputType
  }

  export type GetRegister_tokenAggregateType<T extends Register_tokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRegister_token]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegister_token[P]>
      : GetScalarType<T[P], AggregateRegister_token[P]>
  }




  export type register_tokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: register_tokenWhereInput
    orderBy?: register_tokenOrderByWithAggregationInput | register_tokenOrderByWithAggregationInput[]
    by: Register_tokenScalarFieldEnum[] | Register_tokenScalarFieldEnum
    having?: register_tokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Register_tokenCountAggregateInputType | true
    _min?: Register_tokenMinAggregateInputType
    _max?: Register_tokenMaxAggregateInputType
  }

  export type Register_tokenGroupByOutputType = {
    uuid: string
    status: boolean
    data_util: Date | null
    _count: Register_tokenCountAggregateOutputType | null
    _min: Register_tokenMinAggregateOutputType | null
    _max: Register_tokenMaxAggregateOutputType | null
  }

  type GetRegister_tokenGroupByPayload<T extends register_tokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Register_tokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Register_tokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Register_tokenGroupByOutputType[P]>
            : GetScalarType<T[P], Register_tokenGroupByOutputType[P]>
        }
      >
    >


  export type register_tokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    status?: boolean
    data_util?: boolean
  }, ExtArgs["result"]["register_token"]>

  export type register_tokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    status?: boolean
    data_util?: boolean
  }, ExtArgs["result"]["register_token"]>

  export type register_tokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    status?: boolean
    data_util?: boolean
  }, ExtArgs["result"]["register_token"]>

  export type register_tokenSelectScalar = {
    uuid?: boolean
    status?: boolean
    data_util?: boolean
  }

  export type register_tokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "status" | "data_util", ExtArgs["result"]["register_token"]>

  export type $register_tokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "register_token"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      status: boolean
      data_util: Date | null
    }, ExtArgs["result"]["register_token"]>
    composites: {}
  }

  type register_tokenGetPayload<S extends boolean | null | undefined | register_tokenDefaultArgs> = $Result.GetResult<Prisma.$register_tokenPayload, S>

  type register_tokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<register_tokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Register_tokenCountAggregateInputType | true
    }

  export interface register_tokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['register_token'], meta: { name: 'register_token' } }
    /**
     * Find zero or one Register_token that matches the filter.
     * @param {register_tokenFindUniqueArgs} args - Arguments to find a Register_token
     * @example
     * // Get one Register_token
     * const register_token = await prisma.register_token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends register_tokenFindUniqueArgs>(args: SelectSubset<T, register_tokenFindUniqueArgs<ExtArgs>>): Prisma__register_tokenClient<$Result.GetResult<Prisma.$register_tokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Register_token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {register_tokenFindUniqueOrThrowArgs} args - Arguments to find a Register_token
     * @example
     * // Get one Register_token
     * const register_token = await prisma.register_token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends register_tokenFindUniqueOrThrowArgs>(args: SelectSubset<T, register_tokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__register_tokenClient<$Result.GetResult<Prisma.$register_tokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Register_token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {register_tokenFindFirstArgs} args - Arguments to find a Register_token
     * @example
     * // Get one Register_token
     * const register_token = await prisma.register_token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends register_tokenFindFirstArgs>(args?: SelectSubset<T, register_tokenFindFirstArgs<ExtArgs>>): Prisma__register_tokenClient<$Result.GetResult<Prisma.$register_tokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Register_token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {register_tokenFindFirstOrThrowArgs} args - Arguments to find a Register_token
     * @example
     * // Get one Register_token
     * const register_token = await prisma.register_token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends register_tokenFindFirstOrThrowArgs>(args?: SelectSubset<T, register_tokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__register_tokenClient<$Result.GetResult<Prisma.$register_tokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Register_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {register_tokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Register_tokens
     * const register_tokens = await prisma.register_token.findMany()
     * 
     * // Get first 10 Register_tokens
     * const register_tokens = await prisma.register_token.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const register_tokenWithUuidOnly = await prisma.register_token.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends register_tokenFindManyArgs>(args?: SelectSubset<T, register_tokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$register_tokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Register_token.
     * @param {register_tokenCreateArgs} args - Arguments to create a Register_token.
     * @example
     * // Create one Register_token
     * const Register_token = await prisma.register_token.create({
     *   data: {
     *     // ... data to create a Register_token
     *   }
     * })
     * 
     */
    create<T extends register_tokenCreateArgs>(args: SelectSubset<T, register_tokenCreateArgs<ExtArgs>>): Prisma__register_tokenClient<$Result.GetResult<Prisma.$register_tokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Register_tokens.
     * @param {register_tokenCreateManyArgs} args - Arguments to create many Register_tokens.
     * @example
     * // Create many Register_tokens
     * const register_token = await prisma.register_token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends register_tokenCreateManyArgs>(args?: SelectSubset<T, register_tokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Register_tokens and returns the data saved in the database.
     * @param {register_tokenCreateManyAndReturnArgs} args - Arguments to create many Register_tokens.
     * @example
     * // Create many Register_tokens
     * const register_token = await prisma.register_token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Register_tokens and only return the `uuid`
     * const register_tokenWithUuidOnly = await prisma.register_token.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends register_tokenCreateManyAndReturnArgs>(args?: SelectSubset<T, register_tokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$register_tokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Register_token.
     * @param {register_tokenDeleteArgs} args - Arguments to delete one Register_token.
     * @example
     * // Delete one Register_token
     * const Register_token = await prisma.register_token.delete({
     *   where: {
     *     // ... filter to delete one Register_token
     *   }
     * })
     * 
     */
    delete<T extends register_tokenDeleteArgs>(args: SelectSubset<T, register_tokenDeleteArgs<ExtArgs>>): Prisma__register_tokenClient<$Result.GetResult<Prisma.$register_tokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Register_token.
     * @param {register_tokenUpdateArgs} args - Arguments to update one Register_token.
     * @example
     * // Update one Register_token
     * const register_token = await prisma.register_token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends register_tokenUpdateArgs>(args: SelectSubset<T, register_tokenUpdateArgs<ExtArgs>>): Prisma__register_tokenClient<$Result.GetResult<Prisma.$register_tokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Register_tokens.
     * @param {register_tokenDeleteManyArgs} args - Arguments to filter Register_tokens to delete.
     * @example
     * // Delete a few Register_tokens
     * const { count } = await prisma.register_token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends register_tokenDeleteManyArgs>(args?: SelectSubset<T, register_tokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Register_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {register_tokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Register_tokens
     * const register_token = await prisma.register_token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends register_tokenUpdateManyArgs>(args: SelectSubset<T, register_tokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Register_tokens and returns the data updated in the database.
     * @param {register_tokenUpdateManyAndReturnArgs} args - Arguments to update many Register_tokens.
     * @example
     * // Update many Register_tokens
     * const register_token = await prisma.register_token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Register_tokens and only return the `uuid`
     * const register_tokenWithUuidOnly = await prisma.register_token.updateManyAndReturn({
     *   select: { uuid: true },
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
    updateManyAndReturn<T extends register_tokenUpdateManyAndReturnArgs>(args: SelectSubset<T, register_tokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$register_tokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Register_token.
     * @param {register_tokenUpsertArgs} args - Arguments to update or create a Register_token.
     * @example
     * // Update or create a Register_token
     * const register_token = await prisma.register_token.upsert({
     *   create: {
     *     // ... data to create a Register_token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Register_token we want to update
     *   }
     * })
     */
    upsert<T extends register_tokenUpsertArgs>(args: SelectSubset<T, register_tokenUpsertArgs<ExtArgs>>): Prisma__register_tokenClient<$Result.GetResult<Prisma.$register_tokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Register_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {register_tokenCountArgs} args - Arguments to filter Register_tokens to count.
     * @example
     * // Count the number of Register_tokens
     * const count = await prisma.register_token.count({
     *   where: {
     *     // ... the filter for the Register_tokens we want to count
     *   }
     * })
    **/
    count<T extends register_tokenCountArgs>(
      args?: Subset<T, register_tokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Register_tokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Register_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Register_tokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Register_tokenAggregateArgs>(args: Subset<T, Register_tokenAggregateArgs>): Prisma.PrismaPromise<GetRegister_tokenAggregateType<T>>

    /**
     * Group by Register_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {register_tokenGroupByArgs} args - Group by arguments.
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
      T extends register_tokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: register_tokenGroupByArgs['orderBy'] }
        : { orderBy?: register_tokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, register_tokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegister_tokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the register_token model
   */
  readonly fields: register_tokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for register_token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__register_tokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the register_token model
   */
  interface register_tokenFieldRefs {
    readonly uuid: FieldRef<"register_token", 'String'>
    readonly status: FieldRef<"register_token", 'Boolean'>
    readonly data_util: FieldRef<"register_token", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * register_token findUnique
   */
  export type register_tokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the register_token
     */
    select?: register_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the register_token
     */
    omit?: register_tokenOmit<ExtArgs> | null
    /**
     * Filter, which register_token to fetch.
     */
    where: register_tokenWhereUniqueInput
  }

  /**
   * register_token findUniqueOrThrow
   */
  export type register_tokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the register_token
     */
    select?: register_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the register_token
     */
    omit?: register_tokenOmit<ExtArgs> | null
    /**
     * Filter, which register_token to fetch.
     */
    where: register_tokenWhereUniqueInput
  }

  /**
   * register_token findFirst
   */
  export type register_tokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the register_token
     */
    select?: register_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the register_token
     */
    omit?: register_tokenOmit<ExtArgs> | null
    /**
     * Filter, which register_token to fetch.
     */
    where?: register_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of register_tokens to fetch.
     */
    orderBy?: register_tokenOrderByWithRelationInput | register_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for register_tokens.
     */
    cursor?: register_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` register_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` register_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of register_tokens.
     */
    distinct?: Register_tokenScalarFieldEnum | Register_tokenScalarFieldEnum[]
  }

  /**
   * register_token findFirstOrThrow
   */
  export type register_tokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the register_token
     */
    select?: register_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the register_token
     */
    omit?: register_tokenOmit<ExtArgs> | null
    /**
     * Filter, which register_token to fetch.
     */
    where?: register_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of register_tokens to fetch.
     */
    orderBy?: register_tokenOrderByWithRelationInput | register_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for register_tokens.
     */
    cursor?: register_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` register_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` register_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of register_tokens.
     */
    distinct?: Register_tokenScalarFieldEnum | Register_tokenScalarFieldEnum[]
  }

  /**
   * register_token findMany
   */
  export type register_tokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the register_token
     */
    select?: register_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the register_token
     */
    omit?: register_tokenOmit<ExtArgs> | null
    /**
     * Filter, which register_tokens to fetch.
     */
    where?: register_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of register_tokens to fetch.
     */
    orderBy?: register_tokenOrderByWithRelationInput | register_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing register_tokens.
     */
    cursor?: register_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` register_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` register_tokens.
     */
    skip?: number
    distinct?: Register_tokenScalarFieldEnum | Register_tokenScalarFieldEnum[]
  }

  /**
   * register_token create
   */
  export type register_tokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the register_token
     */
    select?: register_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the register_token
     */
    omit?: register_tokenOmit<ExtArgs> | null
    /**
     * The data needed to create a register_token.
     */
    data?: XOR<register_tokenCreateInput, register_tokenUncheckedCreateInput>
  }

  /**
   * register_token createMany
   */
  export type register_tokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many register_tokens.
     */
    data: register_tokenCreateManyInput | register_tokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * register_token createManyAndReturn
   */
  export type register_tokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the register_token
     */
    select?: register_tokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the register_token
     */
    omit?: register_tokenOmit<ExtArgs> | null
    /**
     * The data used to create many register_tokens.
     */
    data: register_tokenCreateManyInput | register_tokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * register_token update
   */
  export type register_tokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the register_token
     */
    select?: register_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the register_token
     */
    omit?: register_tokenOmit<ExtArgs> | null
    /**
     * The data needed to update a register_token.
     */
    data: XOR<register_tokenUpdateInput, register_tokenUncheckedUpdateInput>
    /**
     * Choose, which register_token to update.
     */
    where: register_tokenWhereUniqueInput
  }

  /**
   * register_token updateMany
   */
  export type register_tokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update register_tokens.
     */
    data: XOR<register_tokenUpdateManyMutationInput, register_tokenUncheckedUpdateManyInput>
    /**
     * Filter which register_tokens to update
     */
    where?: register_tokenWhereInput
    /**
     * Limit how many register_tokens to update.
     */
    limit?: number
  }

  /**
   * register_token updateManyAndReturn
   */
  export type register_tokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the register_token
     */
    select?: register_tokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the register_token
     */
    omit?: register_tokenOmit<ExtArgs> | null
    /**
     * The data used to update register_tokens.
     */
    data: XOR<register_tokenUpdateManyMutationInput, register_tokenUncheckedUpdateManyInput>
    /**
     * Filter which register_tokens to update
     */
    where?: register_tokenWhereInput
    /**
     * Limit how many register_tokens to update.
     */
    limit?: number
  }

  /**
   * register_token upsert
   */
  export type register_tokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the register_token
     */
    select?: register_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the register_token
     */
    omit?: register_tokenOmit<ExtArgs> | null
    /**
     * The filter to search for the register_token to update in case it exists.
     */
    where: register_tokenWhereUniqueInput
    /**
     * In case the register_token found by the `where` argument doesn't exist, create a new register_token with this data.
     */
    create: XOR<register_tokenCreateInput, register_tokenUncheckedCreateInput>
    /**
     * In case the register_token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<register_tokenUpdateInput, register_tokenUncheckedUpdateInput>
  }

  /**
   * register_token delete
   */
  export type register_tokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the register_token
     */
    select?: register_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the register_token
     */
    omit?: register_tokenOmit<ExtArgs> | null
    /**
     * Filter which register_token to delete.
     */
    where: register_tokenWhereUniqueInput
  }

  /**
   * register_token deleteMany
   */
  export type register_tokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which register_tokens to delete
     */
    where?: register_tokenWhereInput
    /**
     * Limit how many register_tokens to delete.
     */
    limit?: number
  }

  /**
   * register_token without action
   */
  export type register_tokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the register_token
     */
    select?: register_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the register_token
     */
    omit?: register_tokenOmit<ExtArgs> | null
  }


  /**
   * Model auth
   */

  export type AggregateAuth = {
    _count: AuthCountAggregateOutputType | null
    _min: AuthMinAggregateOutputType | null
    _max: AuthMaxAggregateOutputType | null
  }

  export type AuthMinAggregateOutputType = {
    uuid: string | null
    role: $Enums.Tipo_User | null
    status: boolean | null
    id_sub: string | null
    id_asaas: string | null
  }

  export type AuthMaxAggregateOutputType = {
    uuid: string | null
    role: $Enums.Tipo_User | null
    status: boolean | null
    id_sub: string | null
    id_asaas: string | null
  }

  export type AuthCountAggregateOutputType = {
    uuid: number
    role: number
    status: number
    id_sub: number
    id_asaas: number
    _all: number
  }


  export type AuthMinAggregateInputType = {
    uuid?: true
    role?: true
    status?: true
    id_sub?: true
    id_asaas?: true
  }

  export type AuthMaxAggregateInputType = {
    uuid?: true
    role?: true
    status?: true
    id_sub?: true
    id_asaas?: true
  }

  export type AuthCountAggregateInputType = {
    uuid?: true
    role?: true
    status?: true
    id_sub?: true
    id_asaas?: true
    _all?: true
  }

  export type AuthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auth to aggregate.
     */
    where?: authWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auths to fetch.
     */
    orderBy?: authOrderByWithRelationInput | authOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: authWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned auths
    **/
    _count?: true | AuthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthMaxAggregateInputType
  }

  export type GetAuthAggregateType<T extends AuthAggregateArgs> = {
        [P in keyof T & keyof AggregateAuth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuth[P]>
      : GetScalarType<T[P], AggregateAuth[P]>
  }




  export type authGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authWhereInput
    orderBy?: authOrderByWithAggregationInput | authOrderByWithAggregationInput[]
    by: AuthScalarFieldEnum[] | AuthScalarFieldEnum
    having?: authScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthCountAggregateInputType | true
    _min?: AuthMinAggregateInputType
    _max?: AuthMaxAggregateInputType
  }

  export type AuthGroupByOutputType = {
    uuid: string
    role: $Enums.Tipo_User
    status: boolean
    id_sub: string | null
    id_asaas: string | null
    _count: AuthCountAggregateOutputType | null
    _min: AuthMinAggregateOutputType | null
    _max: AuthMaxAggregateOutputType | null
  }

  type GetAuthGroupByPayload<T extends authGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthGroupByOutputType[P]>
            : GetScalarType<T[P], AuthGroupByOutputType[P]>
        }
      >
    >


  export type authSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    role?: boolean
    status?: boolean
    id_sub?: boolean
    id_asaas?: boolean
    historicoSessions?: boolean | auth$historicoSessionsArgs<ExtArgs>
    historicoOtps?: boolean | auth$historicoOtpsArgs<ExtArgs>
    historicoSenhas?: boolean | auth$historicoSenhasArgs<ExtArgs>
    _count?: boolean | AuthCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth"]>

  export type authSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    role?: boolean
    status?: boolean
    id_sub?: boolean
    id_asaas?: boolean
  }, ExtArgs["result"]["auth"]>

  export type authSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    role?: boolean
    status?: boolean
    id_sub?: boolean
    id_asaas?: boolean
  }, ExtArgs["result"]["auth"]>

  export type authSelectScalar = {
    uuid?: boolean
    role?: boolean
    status?: boolean
    id_sub?: boolean
    id_asaas?: boolean
  }

  export type authOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "role" | "status" | "id_sub" | "id_asaas", ExtArgs["result"]["auth"]>
  export type authInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historicoSessions?: boolean | auth$historicoSessionsArgs<ExtArgs>
    historicoOtps?: boolean | auth$historicoOtpsArgs<ExtArgs>
    historicoSenhas?: boolean | auth$historicoSenhasArgs<ExtArgs>
    _count?: boolean | AuthCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type authIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type authIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $authPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "auth"
    objects: {
      historicoSessions: Prisma.$historico_sessionPayload<ExtArgs>[]
      historicoOtps: Prisma.$historico_otpPayload<ExtArgs>[]
      historicoSenhas: Prisma.$historico_senhaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      role: $Enums.Tipo_User
      status: boolean
      id_sub: string | null
      id_asaas: string | null
    }, ExtArgs["result"]["auth"]>
    composites: {}
  }

  type authGetPayload<S extends boolean | null | undefined | authDefaultArgs> = $Result.GetResult<Prisma.$authPayload, S>

  type authCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<authFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthCountAggregateInputType | true
    }

  export interface authDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['auth'], meta: { name: 'auth' } }
    /**
     * Find zero or one Auth that matches the filter.
     * @param {authFindUniqueArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends authFindUniqueArgs>(args: SelectSubset<T, authFindUniqueArgs<ExtArgs>>): Prisma__authClient<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {authFindUniqueOrThrowArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends authFindUniqueOrThrowArgs>(args: SelectSubset<T, authFindUniqueOrThrowArgs<ExtArgs>>): Prisma__authClient<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authFindFirstArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends authFindFirstArgs>(args?: SelectSubset<T, authFindFirstArgs<ExtArgs>>): Prisma__authClient<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authFindFirstOrThrowArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends authFindFirstOrThrowArgs>(args?: SelectSubset<T, authFindFirstOrThrowArgs<ExtArgs>>): Prisma__authClient<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auths
     * const auths = await prisma.auth.findMany()
     * 
     * // Get first 10 Auths
     * const auths = await prisma.auth.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const authWithUuidOnly = await prisma.auth.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends authFindManyArgs>(args?: SelectSubset<T, authFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auth.
     * @param {authCreateArgs} args - Arguments to create a Auth.
     * @example
     * // Create one Auth
     * const Auth = await prisma.auth.create({
     *   data: {
     *     // ... data to create a Auth
     *   }
     * })
     * 
     */
    create<T extends authCreateArgs>(args: SelectSubset<T, authCreateArgs<ExtArgs>>): Prisma__authClient<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auths.
     * @param {authCreateManyArgs} args - Arguments to create many Auths.
     * @example
     * // Create many Auths
     * const auth = await prisma.auth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends authCreateManyArgs>(args?: SelectSubset<T, authCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auths and returns the data saved in the database.
     * @param {authCreateManyAndReturnArgs} args - Arguments to create many Auths.
     * @example
     * // Create many Auths
     * const auth = await prisma.auth.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auths and only return the `uuid`
     * const authWithUuidOnly = await prisma.auth.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends authCreateManyAndReturnArgs>(args?: SelectSubset<T, authCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auth.
     * @param {authDeleteArgs} args - Arguments to delete one Auth.
     * @example
     * // Delete one Auth
     * const Auth = await prisma.auth.delete({
     *   where: {
     *     // ... filter to delete one Auth
     *   }
     * })
     * 
     */
    delete<T extends authDeleteArgs>(args: SelectSubset<T, authDeleteArgs<ExtArgs>>): Prisma__authClient<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auth.
     * @param {authUpdateArgs} args - Arguments to update one Auth.
     * @example
     * // Update one Auth
     * const auth = await prisma.auth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends authUpdateArgs>(args: SelectSubset<T, authUpdateArgs<ExtArgs>>): Prisma__authClient<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auths.
     * @param {authDeleteManyArgs} args - Arguments to filter Auths to delete.
     * @example
     * // Delete a few Auths
     * const { count } = await prisma.auth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends authDeleteManyArgs>(args?: SelectSubset<T, authDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auths
     * const auth = await prisma.auth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends authUpdateManyArgs>(args: SelectSubset<T, authUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auths and returns the data updated in the database.
     * @param {authUpdateManyAndReturnArgs} args - Arguments to update many Auths.
     * @example
     * // Update many Auths
     * const auth = await prisma.auth.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auths and only return the `uuid`
     * const authWithUuidOnly = await prisma.auth.updateManyAndReturn({
     *   select: { uuid: true },
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
    updateManyAndReturn<T extends authUpdateManyAndReturnArgs>(args: SelectSubset<T, authUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auth.
     * @param {authUpsertArgs} args - Arguments to update or create a Auth.
     * @example
     * // Update or create a Auth
     * const auth = await prisma.auth.upsert({
     *   create: {
     *     // ... data to create a Auth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auth we want to update
     *   }
     * })
     */
    upsert<T extends authUpsertArgs>(args: SelectSubset<T, authUpsertArgs<ExtArgs>>): Prisma__authClient<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authCountArgs} args - Arguments to filter Auths to count.
     * @example
     * // Count the number of Auths
     * const count = await prisma.auth.count({
     *   where: {
     *     // ... the filter for the Auths we want to count
     *   }
     * })
    **/
    count<T extends authCountArgs>(
      args?: Subset<T, authCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthAggregateArgs>(args: Subset<T, AuthAggregateArgs>): Prisma.PrismaPromise<GetAuthAggregateType<T>>

    /**
     * Group by Auth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authGroupByArgs} args - Group by arguments.
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
      T extends authGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: authGroupByArgs['orderBy'] }
        : { orderBy?: authGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, authGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the auth model
   */
  readonly fields: authFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for auth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__authClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    historicoSessions<T extends auth$historicoSessionsArgs<ExtArgs> = {}>(args?: Subset<T, auth$historicoSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historico_sessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historicoOtps<T extends auth$historicoOtpsArgs<ExtArgs> = {}>(args?: Subset<T, auth$historicoOtpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historico_otpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historicoSenhas<T extends auth$historicoSenhasArgs<ExtArgs> = {}>(args?: Subset<T, auth$historicoSenhasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historico_senhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the auth model
   */
  interface authFieldRefs {
    readonly uuid: FieldRef<"auth", 'String'>
    readonly role: FieldRef<"auth", 'Tipo_User'>
    readonly status: FieldRef<"auth", 'Boolean'>
    readonly id_sub: FieldRef<"auth", 'String'>
    readonly id_asaas: FieldRef<"auth", 'String'>
  }
    

  // Custom InputTypes
  /**
   * auth findUnique
   */
  export type authFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth
     */
    omit?: authOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authInclude<ExtArgs> | null
    /**
     * Filter, which auth to fetch.
     */
    where: authWhereUniqueInput
  }

  /**
   * auth findUniqueOrThrow
   */
  export type authFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth
     */
    omit?: authOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authInclude<ExtArgs> | null
    /**
     * Filter, which auth to fetch.
     */
    where: authWhereUniqueInput
  }

  /**
   * auth findFirst
   */
  export type authFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth
     */
    omit?: authOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authInclude<ExtArgs> | null
    /**
     * Filter, which auth to fetch.
     */
    where?: authWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auths to fetch.
     */
    orderBy?: authOrderByWithRelationInput | authOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auths.
     */
    cursor?: authWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auths.
     */
    distinct?: AuthScalarFieldEnum | AuthScalarFieldEnum[]
  }

  /**
   * auth findFirstOrThrow
   */
  export type authFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth
     */
    omit?: authOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authInclude<ExtArgs> | null
    /**
     * Filter, which auth to fetch.
     */
    where?: authWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auths to fetch.
     */
    orderBy?: authOrderByWithRelationInput | authOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auths.
     */
    cursor?: authWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auths.
     */
    distinct?: AuthScalarFieldEnum | AuthScalarFieldEnum[]
  }

  /**
   * auth findMany
   */
  export type authFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth
     */
    omit?: authOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authInclude<ExtArgs> | null
    /**
     * Filter, which auths to fetch.
     */
    where?: authWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auths to fetch.
     */
    orderBy?: authOrderByWithRelationInput | authOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing auths.
     */
    cursor?: authWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auths.
     */
    skip?: number
    distinct?: AuthScalarFieldEnum | AuthScalarFieldEnum[]
  }

  /**
   * auth create
   */
  export type authCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth
     */
    omit?: authOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authInclude<ExtArgs> | null
    /**
     * The data needed to create a auth.
     */
    data?: XOR<authCreateInput, authUncheckedCreateInput>
  }

  /**
   * auth createMany
   */
  export type authCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many auths.
     */
    data: authCreateManyInput | authCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * auth createManyAndReturn
   */
  export type authCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the auth
     */
    omit?: authOmit<ExtArgs> | null
    /**
     * The data used to create many auths.
     */
    data: authCreateManyInput | authCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * auth update
   */
  export type authUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth
     */
    omit?: authOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authInclude<ExtArgs> | null
    /**
     * The data needed to update a auth.
     */
    data: XOR<authUpdateInput, authUncheckedUpdateInput>
    /**
     * Choose, which auth to update.
     */
    where: authWhereUniqueInput
  }

  /**
   * auth updateMany
   */
  export type authUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update auths.
     */
    data: XOR<authUpdateManyMutationInput, authUncheckedUpdateManyInput>
    /**
     * Filter which auths to update
     */
    where?: authWhereInput
    /**
     * Limit how many auths to update.
     */
    limit?: number
  }

  /**
   * auth updateManyAndReturn
   */
  export type authUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the auth
     */
    omit?: authOmit<ExtArgs> | null
    /**
     * The data used to update auths.
     */
    data: XOR<authUpdateManyMutationInput, authUncheckedUpdateManyInput>
    /**
     * Filter which auths to update
     */
    where?: authWhereInput
    /**
     * Limit how many auths to update.
     */
    limit?: number
  }

  /**
   * auth upsert
   */
  export type authUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth
     */
    omit?: authOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authInclude<ExtArgs> | null
    /**
     * The filter to search for the auth to update in case it exists.
     */
    where: authWhereUniqueInput
    /**
     * In case the auth found by the `where` argument doesn't exist, create a new auth with this data.
     */
    create: XOR<authCreateInput, authUncheckedCreateInput>
    /**
     * In case the auth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<authUpdateInput, authUncheckedUpdateInput>
  }

  /**
   * auth delete
   */
  export type authDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth
     */
    omit?: authOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authInclude<ExtArgs> | null
    /**
     * Filter which auth to delete.
     */
    where: authWhereUniqueInput
  }

  /**
   * auth deleteMany
   */
  export type authDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auths to delete
     */
    where?: authWhereInput
    /**
     * Limit how many auths to delete.
     */
    limit?: number
  }

  /**
   * auth.historicoSessions
   */
  export type auth$historicoSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_session
     */
    select?: historico_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_session
     */
    omit?: historico_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_sessionInclude<ExtArgs> | null
    where?: historico_sessionWhereInput
    orderBy?: historico_sessionOrderByWithRelationInput | historico_sessionOrderByWithRelationInput[]
    cursor?: historico_sessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Historico_sessionScalarFieldEnum | Historico_sessionScalarFieldEnum[]
  }

  /**
   * auth.historicoOtps
   */
  export type auth$historicoOtpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_otp
     */
    select?: historico_otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_otp
     */
    omit?: historico_otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_otpInclude<ExtArgs> | null
    where?: historico_otpWhereInput
    orderBy?: historico_otpOrderByWithRelationInput | historico_otpOrderByWithRelationInput[]
    cursor?: historico_otpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Historico_otpScalarFieldEnum | Historico_otpScalarFieldEnum[]
  }

  /**
   * auth.historicoSenhas
   */
  export type auth$historicoSenhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_senha
     */
    select?: historico_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_senha
     */
    omit?: historico_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_senhaInclude<ExtArgs> | null
    where?: historico_senhaWhereInput
    orderBy?: historico_senhaOrderByWithRelationInput | historico_senhaOrderByWithRelationInput[]
    cursor?: historico_senhaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Historico_senhaScalarFieldEnum | Historico_senhaScalarFieldEnum[]
  }

  /**
   * auth without action
   */
  export type authDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth
     */
    omit?: authOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authInclude<ExtArgs> | null
  }


  /**
   * Model historico_session
   */

  export type AggregateHistorico_session = {
    _count: Historico_sessionCountAggregateOutputType | null
    _min: Historico_sessionMinAggregateOutputType | null
    _max: Historico_sessionMaxAggregateOutputType | null
  }

  export type Historico_sessionMinAggregateOutputType = {
    uuid: string | null
    uuid_auth: string | null
    record_login: Date | null
    expira_time: Date | null
  }

  export type Historico_sessionMaxAggregateOutputType = {
    uuid: string | null
    uuid_auth: string | null
    record_login: Date | null
    expira_time: Date | null
  }

  export type Historico_sessionCountAggregateOutputType = {
    uuid: number
    uuid_auth: number
    record_login: number
    expira_time: number
    _all: number
  }


  export type Historico_sessionMinAggregateInputType = {
    uuid?: true
    uuid_auth?: true
    record_login?: true
    expira_time?: true
  }

  export type Historico_sessionMaxAggregateInputType = {
    uuid?: true
    uuid_auth?: true
    record_login?: true
    expira_time?: true
  }

  export type Historico_sessionCountAggregateInputType = {
    uuid?: true
    uuid_auth?: true
    record_login?: true
    expira_time?: true
    _all?: true
  }

  export type Historico_sessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which historico_session to aggregate.
     */
    where?: historico_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historico_sessions to fetch.
     */
    orderBy?: historico_sessionOrderByWithRelationInput | historico_sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: historico_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historico_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historico_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned historico_sessions
    **/
    _count?: true | Historico_sessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Historico_sessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Historico_sessionMaxAggregateInputType
  }

  export type GetHistorico_sessionAggregateType<T extends Historico_sessionAggregateArgs> = {
        [P in keyof T & keyof AggregateHistorico_session]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistorico_session[P]>
      : GetScalarType<T[P], AggregateHistorico_session[P]>
  }




  export type historico_sessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historico_sessionWhereInput
    orderBy?: historico_sessionOrderByWithAggregationInput | historico_sessionOrderByWithAggregationInput[]
    by: Historico_sessionScalarFieldEnum[] | Historico_sessionScalarFieldEnum
    having?: historico_sessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Historico_sessionCountAggregateInputType | true
    _min?: Historico_sessionMinAggregateInputType
    _max?: Historico_sessionMaxAggregateInputType
  }

  export type Historico_sessionGroupByOutputType = {
    uuid: string
    uuid_auth: string
    record_login: Date
    expira_time: Date
    _count: Historico_sessionCountAggregateOutputType | null
    _min: Historico_sessionMinAggregateOutputType | null
    _max: Historico_sessionMaxAggregateOutputType | null
  }

  type GetHistorico_sessionGroupByPayload<T extends historico_sessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Historico_sessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Historico_sessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Historico_sessionGroupByOutputType[P]>
            : GetScalarType<T[P], Historico_sessionGroupByOutputType[P]>
        }
      >
    >


  export type historico_sessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    uuid_auth?: boolean
    record_login?: boolean
    expira_time?: boolean
    auth?: boolean | authDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historico_session"]>

  export type historico_sessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    uuid_auth?: boolean
    record_login?: boolean
    expira_time?: boolean
    auth?: boolean | authDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historico_session"]>

  export type historico_sessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    uuid_auth?: boolean
    record_login?: boolean
    expira_time?: boolean
    auth?: boolean | authDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historico_session"]>

  export type historico_sessionSelectScalar = {
    uuid?: boolean
    uuid_auth?: boolean
    record_login?: boolean
    expira_time?: boolean
  }

  export type historico_sessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "uuid_auth" | "record_login" | "expira_time", ExtArgs["result"]["historico_session"]>
  export type historico_sessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | authDefaultArgs<ExtArgs>
  }
  export type historico_sessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | authDefaultArgs<ExtArgs>
  }
  export type historico_sessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | authDefaultArgs<ExtArgs>
  }

  export type $historico_sessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "historico_session"
    objects: {
      auth: Prisma.$authPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      uuid_auth: string
      record_login: Date
      expira_time: Date
    }, ExtArgs["result"]["historico_session"]>
    composites: {}
  }

  type historico_sessionGetPayload<S extends boolean | null | undefined | historico_sessionDefaultArgs> = $Result.GetResult<Prisma.$historico_sessionPayload, S>

  type historico_sessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<historico_sessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Historico_sessionCountAggregateInputType | true
    }

  export interface historico_sessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['historico_session'], meta: { name: 'historico_session' } }
    /**
     * Find zero or one Historico_session that matches the filter.
     * @param {historico_sessionFindUniqueArgs} args - Arguments to find a Historico_session
     * @example
     * // Get one Historico_session
     * const historico_session = await prisma.historico_session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends historico_sessionFindUniqueArgs>(args: SelectSubset<T, historico_sessionFindUniqueArgs<ExtArgs>>): Prisma__historico_sessionClient<$Result.GetResult<Prisma.$historico_sessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Historico_session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {historico_sessionFindUniqueOrThrowArgs} args - Arguments to find a Historico_session
     * @example
     * // Get one Historico_session
     * const historico_session = await prisma.historico_session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends historico_sessionFindUniqueOrThrowArgs>(args: SelectSubset<T, historico_sessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__historico_sessionClient<$Result.GetResult<Prisma.$historico_sessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historico_session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historico_sessionFindFirstArgs} args - Arguments to find a Historico_session
     * @example
     * // Get one Historico_session
     * const historico_session = await prisma.historico_session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends historico_sessionFindFirstArgs>(args?: SelectSubset<T, historico_sessionFindFirstArgs<ExtArgs>>): Prisma__historico_sessionClient<$Result.GetResult<Prisma.$historico_sessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historico_session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historico_sessionFindFirstOrThrowArgs} args - Arguments to find a Historico_session
     * @example
     * // Get one Historico_session
     * const historico_session = await prisma.historico_session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends historico_sessionFindFirstOrThrowArgs>(args?: SelectSubset<T, historico_sessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__historico_sessionClient<$Result.GetResult<Prisma.$historico_sessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Historico_sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historico_sessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Historico_sessions
     * const historico_sessions = await prisma.historico_session.findMany()
     * 
     * // Get first 10 Historico_sessions
     * const historico_sessions = await prisma.historico_session.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const historico_sessionWithUuidOnly = await prisma.historico_session.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends historico_sessionFindManyArgs>(args?: SelectSubset<T, historico_sessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historico_sessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Historico_session.
     * @param {historico_sessionCreateArgs} args - Arguments to create a Historico_session.
     * @example
     * // Create one Historico_session
     * const Historico_session = await prisma.historico_session.create({
     *   data: {
     *     // ... data to create a Historico_session
     *   }
     * })
     * 
     */
    create<T extends historico_sessionCreateArgs>(args: SelectSubset<T, historico_sessionCreateArgs<ExtArgs>>): Prisma__historico_sessionClient<$Result.GetResult<Prisma.$historico_sessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Historico_sessions.
     * @param {historico_sessionCreateManyArgs} args - Arguments to create many Historico_sessions.
     * @example
     * // Create many Historico_sessions
     * const historico_session = await prisma.historico_session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends historico_sessionCreateManyArgs>(args?: SelectSubset<T, historico_sessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Historico_sessions and returns the data saved in the database.
     * @param {historico_sessionCreateManyAndReturnArgs} args - Arguments to create many Historico_sessions.
     * @example
     * // Create many Historico_sessions
     * const historico_session = await prisma.historico_session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Historico_sessions and only return the `uuid`
     * const historico_sessionWithUuidOnly = await prisma.historico_session.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends historico_sessionCreateManyAndReturnArgs>(args?: SelectSubset<T, historico_sessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historico_sessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Historico_session.
     * @param {historico_sessionDeleteArgs} args - Arguments to delete one Historico_session.
     * @example
     * // Delete one Historico_session
     * const Historico_session = await prisma.historico_session.delete({
     *   where: {
     *     // ... filter to delete one Historico_session
     *   }
     * })
     * 
     */
    delete<T extends historico_sessionDeleteArgs>(args: SelectSubset<T, historico_sessionDeleteArgs<ExtArgs>>): Prisma__historico_sessionClient<$Result.GetResult<Prisma.$historico_sessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Historico_session.
     * @param {historico_sessionUpdateArgs} args - Arguments to update one Historico_session.
     * @example
     * // Update one Historico_session
     * const historico_session = await prisma.historico_session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends historico_sessionUpdateArgs>(args: SelectSubset<T, historico_sessionUpdateArgs<ExtArgs>>): Prisma__historico_sessionClient<$Result.GetResult<Prisma.$historico_sessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Historico_sessions.
     * @param {historico_sessionDeleteManyArgs} args - Arguments to filter Historico_sessions to delete.
     * @example
     * // Delete a few Historico_sessions
     * const { count } = await prisma.historico_session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends historico_sessionDeleteManyArgs>(args?: SelectSubset<T, historico_sessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historico_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historico_sessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Historico_sessions
     * const historico_session = await prisma.historico_session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends historico_sessionUpdateManyArgs>(args: SelectSubset<T, historico_sessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historico_sessions and returns the data updated in the database.
     * @param {historico_sessionUpdateManyAndReturnArgs} args - Arguments to update many Historico_sessions.
     * @example
     * // Update many Historico_sessions
     * const historico_session = await prisma.historico_session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Historico_sessions and only return the `uuid`
     * const historico_sessionWithUuidOnly = await prisma.historico_session.updateManyAndReturn({
     *   select: { uuid: true },
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
    updateManyAndReturn<T extends historico_sessionUpdateManyAndReturnArgs>(args: SelectSubset<T, historico_sessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historico_sessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Historico_session.
     * @param {historico_sessionUpsertArgs} args - Arguments to update or create a Historico_session.
     * @example
     * // Update or create a Historico_session
     * const historico_session = await prisma.historico_session.upsert({
     *   create: {
     *     // ... data to create a Historico_session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Historico_session we want to update
     *   }
     * })
     */
    upsert<T extends historico_sessionUpsertArgs>(args: SelectSubset<T, historico_sessionUpsertArgs<ExtArgs>>): Prisma__historico_sessionClient<$Result.GetResult<Prisma.$historico_sessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Historico_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historico_sessionCountArgs} args - Arguments to filter Historico_sessions to count.
     * @example
     * // Count the number of Historico_sessions
     * const count = await prisma.historico_session.count({
     *   where: {
     *     // ... the filter for the Historico_sessions we want to count
     *   }
     * })
    **/
    count<T extends historico_sessionCountArgs>(
      args?: Subset<T, historico_sessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Historico_sessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Historico_session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historico_sessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Historico_sessionAggregateArgs>(args: Subset<T, Historico_sessionAggregateArgs>): Prisma.PrismaPromise<GetHistorico_sessionAggregateType<T>>

    /**
     * Group by Historico_session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historico_sessionGroupByArgs} args - Group by arguments.
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
      T extends historico_sessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: historico_sessionGroupByArgs['orderBy'] }
        : { orderBy?: historico_sessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, historico_sessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistorico_sessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the historico_session model
   */
  readonly fields: historico_sessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for historico_session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__historico_sessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auth<T extends authDefaultArgs<ExtArgs> = {}>(args?: Subset<T, authDefaultArgs<ExtArgs>>): Prisma__authClient<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the historico_session model
   */
  interface historico_sessionFieldRefs {
    readonly uuid: FieldRef<"historico_session", 'String'>
    readonly uuid_auth: FieldRef<"historico_session", 'String'>
    readonly record_login: FieldRef<"historico_session", 'DateTime'>
    readonly expira_time: FieldRef<"historico_session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * historico_session findUnique
   */
  export type historico_sessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_session
     */
    select?: historico_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_session
     */
    omit?: historico_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_sessionInclude<ExtArgs> | null
    /**
     * Filter, which historico_session to fetch.
     */
    where: historico_sessionWhereUniqueInput
  }

  /**
   * historico_session findUniqueOrThrow
   */
  export type historico_sessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_session
     */
    select?: historico_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_session
     */
    omit?: historico_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_sessionInclude<ExtArgs> | null
    /**
     * Filter, which historico_session to fetch.
     */
    where: historico_sessionWhereUniqueInput
  }

  /**
   * historico_session findFirst
   */
  export type historico_sessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_session
     */
    select?: historico_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_session
     */
    omit?: historico_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_sessionInclude<ExtArgs> | null
    /**
     * Filter, which historico_session to fetch.
     */
    where?: historico_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historico_sessions to fetch.
     */
    orderBy?: historico_sessionOrderByWithRelationInput | historico_sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for historico_sessions.
     */
    cursor?: historico_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historico_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historico_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of historico_sessions.
     */
    distinct?: Historico_sessionScalarFieldEnum | Historico_sessionScalarFieldEnum[]
  }

  /**
   * historico_session findFirstOrThrow
   */
  export type historico_sessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_session
     */
    select?: historico_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_session
     */
    omit?: historico_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_sessionInclude<ExtArgs> | null
    /**
     * Filter, which historico_session to fetch.
     */
    where?: historico_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historico_sessions to fetch.
     */
    orderBy?: historico_sessionOrderByWithRelationInput | historico_sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for historico_sessions.
     */
    cursor?: historico_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historico_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historico_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of historico_sessions.
     */
    distinct?: Historico_sessionScalarFieldEnum | Historico_sessionScalarFieldEnum[]
  }

  /**
   * historico_session findMany
   */
  export type historico_sessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_session
     */
    select?: historico_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_session
     */
    omit?: historico_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_sessionInclude<ExtArgs> | null
    /**
     * Filter, which historico_sessions to fetch.
     */
    where?: historico_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historico_sessions to fetch.
     */
    orderBy?: historico_sessionOrderByWithRelationInput | historico_sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing historico_sessions.
     */
    cursor?: historico_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historico_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historico_sessions.
     */
    skip?: number
    distinct?: Historico_sessionScalarFieldEnum | Historico_sessionScalarFieldEnum[]
  }

  /**
   * historico_session create
   */
  export type historico_sessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_session
     */
    select?: historico_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_session
     */
    omit?: historico_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_sessionInclude<ExtArgs> | null
    /**
     * The data needed to create a historico_session.
     */
    data: XOR<historico_sessionCreateInput, historico_sessionUncheckedCreateInput>
  }

  /**
   * historico_session createMany
   */
  export type historico_sessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many historico_sessions.
     */
    data: historico_sessionCreateManyInput | historico_sessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * historico_session createManyAndReturn
   */
  export type historico_sessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_session
     */
    select?: historico_sessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the historico_session
     */
    omit?: historico_sessionOmit<ExtArgs> | null
    /**
     * The data used to create many historico_sessions.
     */
    data: historico_sessionCreateManyInput | historico_sessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_sessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * historico_session update
   */
  export type historico_sessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_session
     */
    select?: historico_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_session
     */
    omit?: historico_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_sessionInclude<ExtArgs> | null
    /**
     * The data needed to update a historico_session.
     */
    data: XOR<historico_sessionUpdateInput, historico_sessionUncheckedUpdateInput>
    /**
     * Choose, which historico_session to update.
     */
    where: historico_sessionWhereUniqueInput
  }

  /**
   * historico_session updateMany
   */
  export type historico_sessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update historico_sessions.
     */
    data: XOR<historico_sessionUpdateManyMutationInput, historico_sessionUncheckedUpdateManyInput>
    /**
     * Filter which historico_sessions to update
     */
    where?: historico_sessionWhereInput
    /**
     * Limit how many historico_sessions to update.
     */
    limit?: number
  }

  /**
   * historico_session updateManyAndReturn
   */
  export type historico_sessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_session
     */
    select?: historico_sessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the historico_session
     */
    omit?: historico_sessionOmit<ExtArgs> | null
    /**
     * The data used to update historico_sessions.
     */
    data: XOR<historico_sessionUpdateManyMutationInput, historico_sessionUncheckedUpdateManyInput>
    /**
     * Filter which historico_sessions to update
     */
    where?: historico_sessionWhereInput
    /**
     * Limit how many historico_sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_sessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * historico_session upsert
   */
  export type historico_sessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_session
     */
    select?: historico_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_session
     */
    omit?: historico_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_sessionInclude<ExtArgs> | null
    /**
     * The filter to search for the historico_session to update in case it exists.
     */
    where: historico_sessionWhereUniqueInput
    /**
     * In case the historico_session found by the `where` argument doesn't exist, create a new historico_session with this data.
     */
    create: XOR<historico_sessionCreateInput, historico_sessionUncheckedCreateInput>
    /**
     * In case the historico_session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<historico_sessionUpdateInput, historico_sessionUncheckedUpdateInput>
  }

  /**
   * historico_session delete
   */
  export type historico_sessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_session
     */
    select?: historico_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_session
     */
    omit?: historico_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_sessionInclude<ExtArgs> | null
    /**
     * Filter which historico_session to delete.
     */
    where: historico_sessionWhereUniqueInput
  }

  /**
   * historico_session deleteMany
   */
  export type historico_sessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which historico_sessions to delete
     */
    where?: historico_sessionWhereInput
    /**
     * Limit how many historico_sessions to delete.
     */
    limit?: number
  }

  /**
   * historico_session without action
   */
  export type historico_sessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_session
     */
    select?: historico_sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_session
     */
    omit?: historico_sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_sessionInclude<ExtArgs> | null
  }


  /**
   * Model historico_otp
   */

  export type AggregateHistorico_otp = {
    _count: Historico_otpCountAggregateOutputType | null
    _min: Historico_otpMinAggregateOutputType | null
    _max: Historico_otpMaxAggregateOutputType | null
  }

  export type Historico_otpMinAggregateOutputType = {
    uuid: string | null
    code_otp: string | null
    record_create: Date | null
  }

  export type Historico_otpMaxAggregateOutputType = {
    uuid: string | null
    code_otp: string | null
    record_create: Date | null
  }

  export type Historico_otpCountAggregateOutputType = {
    uuid: number
    code_otp: number
    record_create: number
    _all: number
  }


  export type Historico_otpMinAggregateInputType = {
    uuid?: true
    code_otp?: true
    record_create?: true
  }

  export type Historico_otpMaxAggregateInputType = {
    uuid?: true
    code_otp?: true
    record_create?: true
  }

  export type Historico_otpCountAggregateInputType = {
    uuid?: true
    code_otp?: true
    record_create?: true
    _all?: true
  }

  export type Historico_otpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which historico_otp to aggregate.
     */
    where?: historico_otpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historico_otps to fetch.
     */
    orderBy?: historico_otpOrderByWithRelationInput | historico_otpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: historico_otpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historico_otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historico_otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned historico_otps
    **/
    _count?: true | Historico_otpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Historico_otpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Historico_otpMaxAggregateInputType
  }

  export type GetHistorico_otpAggregateType<T extends Historico_otpAggregateArgs> = {
        [P in keyof T & keyof AggregateHistorico_otp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistorico_otp[P]>
      : GetScalarType<T[P], AggregateHistorico_otp[P]>
  }




  export type historico_otpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historico_otpWhereInput
    orderBy?: historico_otpOrderByWithAggregationInput | historico_otpOrderByWithAggregationInput[]
    by: Historico_otpScalarFieldEnum[] | Historico_otpScalarFieldEnum
    having?: historico_otpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Historico_otpCountAggregateInputType | true
    _min?: Historico_otpMinAggregateInputType
    _max?: Historico_otpMaxAggregateInputType
  }

  export type Historico_otpGroupByOutputType = {
    uuid: string
    code_otp: string
    record_create: Date
    _count: Historico_otpCountAggregateOutputType | null
    _min: Historico_otpMinAggregateOutputType | null
    _max: Historico_otpMaxAggregateOutputType | null
  }

  type GetHistorico_otpGroupByPayload<T extends historico_otpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Historico_otpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Historico_otpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Historico_otpGroupByOutputType[P]>
            : GetScalarType<T[P], Historico_otpGroupByOutputType[P]>
        }
      >
    >


  export type historico_otpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    code_otp?: boolean
    record_create?: boolean
    auth?: boolean | authDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historico_otp"]>

  export type historico_otpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    code_otp?: boolean
    record_create?: boolean
    auth?: boolean | authDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historico_otp"]>

  export type historico_otpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    code_otp?: boolean
    record_create?: boolean
    auth?: boolean | authDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historico_otp"]>

  export type historico_otpSelectScalar = {
    uuid?: boolean
    code_otp?: boolean
    record_create?: boolean
  }

  export type historico_otpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "code_otp" | "record_create", ExtArgs["result"]["historico_otp"]>
  export type historico_otpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | authDefaultArgs<ExtArgs>
  }
  export type historico_otpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | authDefaultArgs<ExtArgs>
  }
  export type historico_otpIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | authDefaultArgs<ExtArgs>
  }

  export type $historico_otpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "historico_otp"
    objects: {
      auth: Prisma.$authPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      code_otp: string
      record_create: Date
    }, ExtArgs["result"]["historico_otp"]>
    composites: {}
  }

  type historico_otpGetPayload<S extends boolean | null | undefined | historico_otpDefaultArgs> = $Result.GetResult<Prisma.$historico_otpPayload, S>

  type historico_otpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<historico_otpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Historico_otpCountAggregateInputType | true
    }

  export interface historico_otpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['historico_otp'], meta: { name: 'historico_otp' } }
    /**
     * Find zero or one Historico_otp that matches the filter.
     * @param {historico_otpFindUniqueArgs} args - Arguments to find a Historico_otp
     * @example
     * // Get one Historico_otp
     * const historico_otp = await prisma.historico_otp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends historico_otpFindUniqueArgs>(args: SelectSubset<T, historico_otpFindUniqueArgs<ExtArgs>>): Prisma__historico_otpClient<$Result.GetResult<Prisma.$historico_otpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Historico_otp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {historico_otpFindUniqueOrThrowArgs} args - Arguments to find a Historico_otp
     * @example
     * // Get one Historico_otp
     * const historico_otp = await prisma.historico_otp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends historico_otpFindUniqueOrThrowArgs>(args: SelectSubset<T, historico_otpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__historico_otpClient<$Result.GetResult<Prisma.$historico_otpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historico_otp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historico_otpFindFirstArgs} args - Arguments to find a Historico_otp
     * @example
     * // Get one Historico_otp
     * const historico_otp = await prisma.historico_otp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends historico_otpFindFirstArgs>(args?: SelectSubset<T, historico_otpFindFirstArgs<ExtArgs>>): Prisma__historico_otpClient<$Result.GetResult<Prisma.$historico_otpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historico_otp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historico_otpFindFirstOrThrowArgs} args - Arguments to find a Historico_otp
     * @example
     * // Get one Historico_otp
     * const historico_otp = await prisma.historico_otp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends historico_otpFindFirstOrThrowArgs>(args?: SelectSubset<T, historico_otpFindFirstOrThrowArgs<ExtArgs>>): Prisma__historico_otpClient<$Result.GetResult<Prisma.$historico_otpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Historico_otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historico_otpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Historico_otps
     * const historico_otps = await prisma.historico_otp.findMany()
     * 
     * // Get first 10 Historico_otps
     * const historico_otps = await prisma.historico_otp.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const historico_otpWithUuidOnly = await prisma.historico_otp.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends historico_otpFindManyArgs>(args?: SelectSubset<T, historico_otpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historico_otpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Historico_otp.
     * @param {historico_otpCreateArgs} args - Arguments to create a Historico_otp.
     * @example
     * // Create one Historico_otp
     * const Historico_otp = await prisma.historico_otp.create({
     *   data: {
     *     // ... data to create a Historico_otp
     *   }
     * })
     * 
     */
    create<T extends historico_otpCreateArgs>(args: SelectSubset<T, historico_otpCreateArgs<ExtArgs>>): Prisma__historico_otpClient<$Result.GetResult<Prisma.$historico_otpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Historico_otps.
     * @param {historico_otpCreateManyArgs} args - Arguments to create many Historico_otps.
     * @example
     * // Create many Historico_otps
     * const historico_otp = await prisma.historico_otp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends historico_otpCreateManyArgs>(args?: SelectSubset<T, historico_otpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Historico_otps and returns the data saved in the database.
     * @param {historico_otpCreateManyAndReturnArgs} args - Arguments to create many Historico_otps.
     * @example
     * // Create many Historico_otps
     * const historico_otp = await prisma.historico_otp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Historico_otps and only return the `uuid`
     * const historico_otpWithUuidOnly = await prisma.historico_otp.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends historico_otpCreateManyAndReturnArgs>(args?: SelectSubset<T, historico_otpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historico_otpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Historico_otp.
     * @param {historico_otpDeleteArgs} args - Arguments to delete one Historico_otp.
     * @example
     * // Delete one Historico_otp
     * const Historico_otp = await prisma.historico_otp.delete({
     *   where: {
     *     // ... filter to delete one Historico_otp
     *   }
     * })
     * 
     */
    delete<T extends historico_otpDeleteArgs>(args: SelectSubset<T, historico_otpDeleteArgs<ExtArgs>>): Prisma__historico_otpClient<$Result.GetResult<Prisma.$historico_otpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Historico_otp.
     * @param {historico_otpUpdateArgs} args - Arguments to update one Historico_otp.
     * @example
     * // Update one Historico_otp
     * const historico_otp = await prisma.historico_otp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends historico_otpUpdateArgs>(args: SelectSubset<T, historico_otpUpdateArgs<ExtArgs>>): Prisma__historico_otpClient<$Result.GetResult<Prisma.$historico_otpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Historico_otps.
     * @param {historico_otpDeleteManyArgs} args - Arguments to filter Historico_otps to delete.
     * @example
     * // Delete a few Historico_otps
     * const { count } = await prisma.historico_otp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends historico_otpDeleteManyArgs>(args?: SelectSubset<T, historico_otpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historico_otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historico_otpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Historico_otps
     * const historico_otp = await prisma.historico_otp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends historico_otpUpdateManyArgs>(args: SelectSubset<T, historico_otpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historico_otps and returns the data updated in the database.
     * @param {historico_otpUpdateManyAndReturnArgs} args - Arguments to update many Historico_otps.
     * @example
     * // Update many Historico_otps
     * const historico_otp = await prisma.historico_otp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Historico_otps and only return the `uuid`
     * const historico_otpWithUuidOnly = await prisma.historico_otp.updateManyAndReturn({
     *   select: { uuid: true },
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
    updateManyAndReturn<T extends historico_otpUpdateManyAndReturnArgs>(args: SelectSubset<T, historico_otpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historico_otpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Historico_otp.
     * @param {historico_otpUpsertArgs} args - Arguments to update or create a Historico_otp.
     * @example
     * // Update or create a Historico_otp
     * const historico_otp = await prisma.historico_otp.upsert({
     *   create: {
     *     // ... data to create a Historico_otp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Historico_otp we want to update
     *   }
     * })
     */
    upsert<T extends historico_otpUpsertArgs>(args: SelectSubset<T, historico_otpUpsertArgs<ExtArgs>>): Prisma__historico_otpClient<$Result.GetResult<Prisma.$historico_otpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Historico_otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historico_otpCountArgs} args - Arguments to filter Historico_otps to count.
     * @example
     * // Count the number of Historico_otps
     * const count = await prisma.historico_otp.count({
     *   where: {
     *     // ... the filter for the Historico_otps we want to count
     *   }
     * })
    **/
    count<T extends historico_otpCountArgs>(
      args?: Subset<T, historico_otpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Historico_otpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Historico_otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historico_otpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Historico_otpAggregateArgs>(args: Subset<T, Historico_otpAggregateArgs>): Prisma.PrismaPromise<GetHistorico_otpAggregateType<T>>

    /**
     * Group by Historico_otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historico_otpGroupByArgs} args - Group by arguments.
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
      T extends historico_otpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: historico_otpGroupByArgs['orderBy'] }
        : { orderBy?: historico_otpGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, historico_otpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistorico_otpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the historico_otp model
   */
  readonly fields: historico_otpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for historico_otp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__historico_otpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auth<T extends authDefaultArgs<ExtArgs> = {}>(args?: Subset<T, authDefaultArgs<ExtArgs>>): Prisma__authClient<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the historico_otp model
   */
  interface historico_otpFieldRefs {
    readonly uuid: FieldRef<"historico_otp", 'String'>
    readonly code_otp: FieldRef<"historico_otp", 'String'>
    readonly record_create: FieldRef<"historico_otp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * historico_otp findUnique
   */
  export type historico_otpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_otp
     */
    select?: historico_otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_otp
     */
    omit?: historico_otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_otpInclude<ExtArgs> | null
    /**
     * Filter, which historico_otp to fetch.
     */
    where: historico_otpWhereUniqueInput
  }

  /**
   * historico_otp findUniqueOrThrow
   */
  export type historico_otpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_otp
     */
    select?: historico_otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_otp
     */
    omit?: historico_otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_otpInclude<ExtArgs> | null
    /**
     * Filter, which historico_otp to fetch.
     */
    where: historico_otpWhereUniqueInput
  }

  /**
   * historico_otp findFirst
   */
  export type historico_otpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_otp
     */
    select?: historico_otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_otp
     */
    omit?: historico_otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_otpInclude<ExtArgs> | null
    /**
     * Filter, which historico_otp to fetch.
     */
    where?: historico_otpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historico_otps to fetch.
     */
    orderBy?: historico_otpOrderByWithRelationInput | historico_otpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for historico_otps.
     */
    cursor?: historico_otpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historico_otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historico_otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of historico_otps.
     */
    distinct?: Historico_otpScalarFieldEnum | Historico_otpScalarFieldEnum[]
  }

  /**
   * historico_otp findFirstOrThrow
   */
  export type historico_otpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_otp
     */
    select?: historico_otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_otp
     */
    omit?: historico_otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_otpInclude<ExtArgs> | null
    /**
     * Filter, which historico_otp to fetch.
     */
    where?: historico_otpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historico_otps to fetch.
     */
    orderBy?: historico_otpOrderByWithRelationInput | historico_otpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for historico_otps.
     */
    cursor?: historico_otpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historico_otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historico_otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of historico_otps.
     */
    distinct?: Historico_otpScalarFieldEnum | Historico_otpScalarFieldEnum[]
  }

  /**
   * historico_otp findMany
   */
  export type historico_otpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_otp
     */
    select?: historico_otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_otp
     */
    omit?: historico_otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_otpInclude<ExtArgs> | null
    /**
     * Filter, which historico_otps to fetch.
     */
    where?: historico_otpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historico_otps to fetch.
     */
    orderBy?: historico_otpOrderByWithRelationInput | historico_otpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing historico_otps.
     */
    cursor?: historico_otpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historico_otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historico_otps.
     */
    skip?: number
    distinct?: Historico_otpScalarFieldEnum | Historico_otpScalarFieldEnum[]
  }

  /**
   * historico_otp create
   */
  export type historico_otpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_otp
     */
    select?: historico_otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_otp
     */
    omit?: historico_otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_otpInclude<ExtArgs> | null
    /**
     * The data needed to create a historico_otp.
     */
    data: XOR<historico_otpCreateInput, historico_otpUncheckedCreateInput>
  }

  /**
   * historico_otp createMany
   */
  export type historico_otpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many historico_otps.
     */
    data: historico_otpCreateManyInput | historico_otpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * historico_otp createManyAndReturn
   */
  export type historico_otpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_otp
     */
    select?: historico_otpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the historico_otp
     */
    omit?: historico_otpOmit<ExtArgs> | null
    /**
     * The data used to create many historico_otps.
     */
    data: historico_otpCreateManyInput | historico_otpCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_otpIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * historico_otp update
   */
  export type historico_otpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_otp
     */
    select?: historico_otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_otp
     */
    omit?: historico_otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_otpInclude<ExtArgs> | null
    /**
     * The data needed to update a historico_otp.
     */
    data: XOR<historico_otpUpdateInput, historico_otpUncheckedUpdateInput>
    /**
     * Choose, which historico_otp to update.
     */
    where: historico_otpWhereUniqueInput
  }

  /**
   * historico_otp updateMany
   */
  export type historico_otpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update historico_otps.
     */
    data: XOR<historico_otpUpdateManyMutationInput, historico_otpUncheckedUpdateManyInput>
    /**
     * Filter which historico_otps to update
     */
    where?: historico_otpWhereInput
    /**
     * Limit how many historico_otps to update.
     */
    limit?: number
  }

  /**
   * historico_otp updateManyAndReturn
   */
  export type historico_otpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_otp
     */
    select?: historico_otpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the historico_otp
     */
    omit?: historico_otpOmit<ExtArgs> | null
    /**
     * The data used to update historico_otps.
     */
    data: XOR<historico_otpUpdateManyMutationInput, historico_otpUncheckedUpdateManyInput>
    /**
     * Filter which historico_otps to update
     */
    where?: historico_otpWhereInput
    /**
     * Limit how many historico_otps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_otpIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * historico_otp upsert
   */
  export type historico_otpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_otp
     */
    select?: historico_otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_otp
     */
    omit?: historico_otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_otpInclude<ExtArgs> | null
    /**
     * The filter to search for the historico_otp to update in case it exists.
     */
    where: historico_otpWhereUniqueInput
    /**
     * In case the historico_otp found by the `where` argument doesn't exist, create a new historico_otp with this data.
     */
    create: XOR<historico_otpCreateInput, historico_otpUncheckedCreateInput>
    /**
     * In case the historico_otp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<historico_otpUpdateInput, historico_otpUncheckedUpdateInput>
  }

  /**
   * historico_otp delete
   */
  export type historico_otpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_otp
     */
    select?: historico_otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_otp
     */
    omit?: historico_otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_otpInclude<ExtArgs> | null
    /**
     * Filter which historico_otp to delete.
     */
    where: historico_otpWhereUniqueInput
  }

  /**
   * historico_otp deleteMany
   */
  export type historico_otpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which historico_otps to delete
     */
    where?: historico_otpWhereInput
    /**
     * Limit how many historico_otps to delete.
     */
    limit?: number
  }

  /**
   * historico_otp without action
   */
  export type historico_otpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_otp
     */
    select?: historico_otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_otp
     */
    omit?: historico_otpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_otpInclude<ExtArgs> | null
  }


  /**
   * Model historico_senha
   */

  export type AggregateHistorico_senha = {
    _count: Historico_senhaCountAggregateOutputType | null
    _min: Historico_senhaMinAggregateOutputType | null
    _max: Historico_senhaMaxAggregateOutputType | null
  }

  export type Historico_senhaMinAggregateOutputType = {
    uuid: string | null
    senha: string | null
    record_update: Date | null
    status: boolean | null
  }

  export type Historico_senhaMaxAggregateOutputType = {
    uuid: string | null
    senha: string | null
    record_update: Date | null
    status: boolean | null
  }

  export type Historico_senhaCountAggregateOutputType = {
    uuid: number
    senha: number
    record_update: number
    status: number
    _all: number
  }


  export type Historico_senhaMinAggregateInputType = {
    uuid?: true
    senha?: true
    record_update?: true
    status?: true
  }

  export type Historico_senhaMaxAggregateInputType = {
    uuid?: true
    senha?: true
    record_update?: true
    status?: true
  }

  export type Historico_senhaCountAggregateInputType = {
    uuid?: true
    senha?: true
    record_update?: true
    status?: true
    _all?: true
  }

  export type Historico_senhaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which historico_senha to aggregate.
     */
    where?: historico_senhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historico_senhas to fetch.
     */
    orderBy?: historico_senhaOrderByWithRelationInput | historico_senhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: historico_senhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historico_senhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historico_senhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned historico_senhas
    **/
    _count?: true | Historico_senhaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Historico_senhaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Historico_senhaMaxAggregateInputType
  }

  export type GetHistorico_senhaAggregateType<T extends Historico_senhaAggregateArgs> = {
        [P in keyof T & keyof AggregateHistorico_senha]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistorico_senha[P]>
      : GetScalarType<T[P], AggregateHistorico_senha[P]>
  }




  export type historico_senhaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historico_senhaWhereInput
    orderBy?: historico_senhaOrderByWithAggregationInput | historico_senhaOrderByWithAggregationInput[]
    by: Historico_senhaScalarFieldEnum[] | Historico_senhaScalarFieldEnum
    having?: historico_senhaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Historico_senhaCountAggregateInputType | true
    _min?: Historico_senhaMinAggregateInputType
    _max?: Historico_senhaMaxAggregateInputType
  }

  export type Historico_senhaGroupByOutputType = {
    uuid: string
    senha: string
    record_update: Date
    status: boolean
    _count: Historico_senhaCountAggregateOutputType | null
    _min: Historico_senhaMinAggregateOutputType | null
    _max: Historico_senhaMaxAggregateOutputType | null
  }

  type GetHistorico_senhaGroupByPayload<T extends historico_senhaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Historico_senhaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Historico_senhaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Historico_senhaGroupByOutputType[P]>
            : GetScalarType<T[P], Historico_senhaGroupByOutputType[P]>
        }
      >
    >


  export type historico_senhaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    senha?: boolean
    record_update?: boolean
    status?: boolean
    auth?: boolean | authDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historico_senha"]>

  export type historico_senhaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    senha?: boolean
    record_update?: boolean
    status?: boolean
    auth?: boolean | authDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historico_senha"]>

  export type historico_senhaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    senha?: boolean
    record_update?: boolean
    status?: boolean
    auth?: boolean | authDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historico_senha"]>

  export type historico_senhaSelectScalar = {
    uuid?: boolean
    senha?: boolean
    record_update?: boolean
    status?: boolean
  }

  export type historico_senhaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "senha" | "record_update" | "status", ExtArgs["result"]["historico_senha"]>
  export type historico_senhaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | authDefaultArgs<ExtArgs>
  }
  export type historico_senhaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | authDefaultArgs<ExtArgs>
  }
  export type historico_senhaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | authDefaultArgs<ExtArgs>
  }

  export type $historico_senhaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "historico_senha"
    objects: {
      auth: Prisma.$authPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      senha: string
      record_update: Date
      status: boolean
    }, ExtArgs["result"]["historico_senha"]>
    composites: {}
  }

  type historico_senhaGetPayload<S extends boolean | null | undefined | historico_senhaDefaultArgs> = $Result.GetResult<Prisma.$historico_senhaPayload, S>

  type historico_senhaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<historico_senhaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Historico_senhaCountAggregateInputType | true
    }

  export interface historico_senhaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['historico_senha'], meta: { name: 'historico_senha' } }
    /**
     * Find zero or one Historico_senha that matches the filter.
     * @param {historico_senhaFindUniqueArgs} args - Arguments to find a Historico_senha
     * @example
     * // Get one Historico_senha
     * const historico_senha = await prisma.historico_senha.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends historico_senhaFindUniqueArgs>(args: SelectSubset<T, historico_senhaFindUniqueArgs<ExtArgs>>): Prisma__historico_senhaClient<$Result.GetResult<Prisma.$historico_senhaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Historico_senha that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {historico_senhaFindUniqueOrThrowArgs} args - Arguments to find a Historico_senha
     * @example
     * // Get one Historico_senha
     * const historico_senha = await prisma.historico_senha.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends historico_senhaFindUniqueOrThrowArgs>(args: SelectSubset<T, historico_senhaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__historico_senhaClient<$Result.GetResult<Prisma.$historico_senhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historico_senha that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historico_senhaFindFirstArgs} args - Arguments to find a Historico_senha
     * @example
     * // Get one Historico_senha
     * const historico_senha = await prisma.historico_senha.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends historico_senhaFindFirstArgs>(args?: SelectSubset<T, historico_senhaFindFirstArgs<ExtArgs>>): Prisma__historico_senhaClient<$Result.GetResult<Prisma.$historico_senhaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historico_senha that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historico_senhaFindFirstOrThrowArgs} args - Arguments to find a Historico_senha
     * @example
     * // Get one Historico_senha
     * const historico_senha = await prisma.historico_senha.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends historico_senhaFindFirstOrThrowArgs>(args?: SelectSubset<T, historico_senhaFindFirstOrThrowArgs<ExtArgs>>): Prisma__historico_senhaClient<$Result.GetResult<Prisma.$historico_senhaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Historico_senhas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historico_senhaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Historico_senhas
     * const historico_senhas = await prisma.historico_senha.findMany()
     * 
     * // Get first 10 Historico_senhas
     * const historico_senhas = await prisma.historico_senha.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const historico_senhaWithUuidOnly = await prisma.historico_senha.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends historico_senhaFindManyArgs>(args?: SelectSubset<T, historico_senhaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historico_senhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Historico_senha.
     * @param {historico_senhaCreateArgs} args - Arguments to create a Historico_senha.
     * @example
     * // Create one Historico_senha
     * const Historico_senha = await prisma.historico_senha.create({
     *   data: {
     *     // ... data to create a Historico_senha
     *   }
     * })
     * 
     */
    create<T extends historico_senhaCreateArgs>(args: SelectSubset<T, historico_senhaCreateArgs<ExtArgs>>): Prisma__historico_senhaClient<$Result.GetResult<Prisma.$historico_senhaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Historico_senhas.
     * @param {historico_senhaCreateManyArgs} args - Arguments to create many Historico_senhas.
     * @example
     * // Create many Historico_senhas
     * const historico_senha = await prisma.historico_senha.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends historico_senhaCreateManyArgs>(args?: SelectSubset<T, historico_senhaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Historico_senhas and returns the data saved in the database.
     * @param {historico_senhaCreateManyAndReturnArgs} args - Arguments to create many Historico_senhas.
     * @example
     * // Create many Historico_senhas
     * const historico_senha = await prisma.historico_senha.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Historico_senhas and only return the `uuid`
     * const historico_senhaWithUuidOnly = await prisma.historico_senha.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends historico_senhaCreateManyAndReturnArgs>(args?: SelectSubset<T, historico_senhaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historico_senhaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Historico_senha.
     * @param {historico_senhaDeleteArgs} args - Arguments to delete one Historico_senha.
     * @example
     * // Delete one Historico_senha
     * const Historico_senha = await prisma.historico_senha.delete({
     *   where: {
     *     // ... filter to delete one Historico_senha
     *   }
     * })
     * 
     */
    delete<T extends historico_senhaDeleteArgs>(args: SelectSubset<T, historico_senhaDeleteArgs<ExtArgs>>): Prisma__historico_senhaClient<$Result.GetResult<Prisma.$historico_senhaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Historico_senha.
     * @param {historico_senhaUpdateArgs} args - Arguments to update one Historico_senha.
     * @example
     * // Update one Historico_senha
     * const historico_senha = await prisma.historico_senha.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends historico_senhaUpdateArgs>(args: SelectSubset<T, historico_senhaUpdateArgs<ExtArgs>>): Prisma__historico_senhaClient<$Result.GetResult<Prisma.$historico_senhaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Historico_senhas.
     * @param {historico_senhaDeleteManyArgs} args - Arguments to filter Historico_senhas to delete.
     * @example
     * // Delete a few Historico_senhas
     * const { count } = await prisma.historico_senha.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends historico_senhaDeleteManyArgs>(args?: SelectSubset<T, historico_senhaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historico_senhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historico_senhaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Historico_senhas
     * const historico_senha = await prisma.historico_senha.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends historico_senhaUpdateManyArgs>(args: SelectSubset<T, historico_senhaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historico_senhas and returns the data updated in the database.
     * @param {historico_senhaUpdateManyAndReturnArgs} args - Arguments to update many Historico_senhas.
     * @example
     * // Update many Historico_senhas
     * const historico_senha = await prisma.historico_senha.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Historico_senhas and only return the `uuid`
     * const historico_senhaWithUuidOnly = await prisma.historico_senha.updateManyAndReturn({
     *   select: { uuid: true },
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
    updateManyAndReturn<T extends historico_senhaUpdateManyAndReturnArgs>(args: SelectSubset<T, historico_senhaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historico_senhaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Historico_senha.
     * @param {historico_senhaUpsertArgs} args - Arguments to update or create a Historico_senha.
     * @example
     * // Update or create a Historico_senha
     * const historico_senha = await prisma.historico_senha.upsert({
     *   create: {
     *     // ... data to create a Historico_senha
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Historico_senha we want to update
     *   }
     * })
     */
    upsert<T extends historico_senhaUpsertArgs>(args: SelectSubset<T, historico_senhaUpsertArgs<ExtArgs>>): Prisma__historico_senhaClient<$Result.GetResult<Prisma.$historico_senhaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Historico_senhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historico_senhaCountArgs} args - Arguments to filter Historico_senhas to count.
     * @example
     * // Count the number of Historico_senhas
     * const count = await prisma.historico_senha.count({
     *   where: {
     *     // ... the filter for the Historico_senhas we want to count
     *   }
     * })
    **/
    count<T extends historico_senhaCountArgs>(
      args?: Subset<T, historico_senhaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Historico_senhaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Historico_senha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historico_senhaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Historico_senhaAggregateArgs>(args: Subset<T, Historico_senhaAggregateArgs>): Prisma.PrismaPromise<GetHistorico_senhaAggregateType<T>>

    /**
     * Group by Historico_senha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historico_senhaGroupByArgs} args - Group by arguments.
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
      T extends historico_senhaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: historico_senhaGroupByArgs['orderBy'] }
        : { orderBy?: historico_senhaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, historico_senhaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistorico_senhaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the historico_senha model
   */
  readonly fields: historico_senhaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for historico_senha.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__historico_senhaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auth<T extends authDefaultArgs<ExtArgs> = {}>(args?: Subset<T, authDefaultArgs<ExtArgs>>): Prisma__authClient<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the historico_senha model
   */
  interface historico_senhaFieldRefs {
    readonly uuid: FieldRef<"historico_senha", 'String'>
    readonly senha: FieldRef<"historico_senha", 'String'>
    readonly record_update: FieldRef<"historico_senha", 'DateTime'>
    readonly status: FieldRef<"historico_senha", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * historico_senha findUnique
   */
  export type historico_senhaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_senha
     */
    select?: historico_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_senha
     */
    omit?: historico_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_senhaInclude<ExtArgs> | null
    /**
     * Filter, which historico_senha to fetch.
     */
    where: historico_senhaWhereUniqueInput
  }

  /**
   * historico_senha findUniqueOrThrow
   */
  export type historico_senhaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_senha
     */
    select?: historico_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_senha
     */
    omit?: historico_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_senhaInclude<ExtArgs> | null
    /**
     * Filter, which historico_senha to fetch.
     */
    where: historico_senhaWhereUniqueInput
  }

  /**
   * historico_senha findFirst
   */
  export type historico_senhaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_senha
     */
    select?: historico_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_senha
     */
    omit?: historico_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_senhaInclude<ExtArgs> | null
    /**
     * Filter, which historico_senha to fetch.
     */
    where?: historico_senhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historico_senhas to fetch.
     */
    orderBy?: historico_senhaOrderByWithRelationInput | historico_senhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for historico_senhas.
     */
    cursor?: historico_senhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historico_senhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historico_senhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of historico_senhas.
     */
    distinct?: Historico_senhaScalarFieldEnum | Historico_senhaScalarFieldEnum[]
  }

  /**
   * historico_senha findFirstOrThrow
   */
  export type historico_senhaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_senha
     */
    select?: historico_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_senha
     */
    omit?: historico_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_senhaInclude<ExtArgs> | null
    /**
     * Filter, which historico_senha to fetch.
     */
    where?: historico_senhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historico_senhas to fetch.
     */
    orderBy?: historico_senhaOrderByWithRelationInput | historico_senhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for historico_senhas.
     */
    cursor?: historico_senhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historico_senhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historico_senhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of historico_senhas.
     */
    distinct?: Historico_senhaScalarFieldEnum | Historico_senhaScalarFieldEnum[]
  }

  /**
   * historico_senha findMany
   */
  export type historico_senhaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_senha
     */
    select?: historico_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_senha
     */
    omit?: historico_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_senhaInclude<ExtArgs> | null
    /**
     * Filter, which historico_senhas to fetch.
     */
    where?: historico_senhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historico_senhas to fetch.
     */
    orderBy?: historico_senhaOrderByWithRelationInput | historico_senhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing historico_senhas.
     */
    cursor?: historico_senhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historico_senhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historico_senhas.
     */
    skip?: number
    distinct?: Historico_senhaScalarFieldEnum | Historico_senhaScalarFieldEnum[]
  }

  /**
   * historico_senha create
   */
  export type historico_senhaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_senha
     */
    select?: historico_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_senha
     */
    omit?: historico_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_senhaInclude<ExtArgs> | null
    /**
     * The data needed to create a historico_senha.
     */
    data: XOR<historico_senhaCreateInput, historico_senhaUncheckedCreateInput>
  }

  /**
   * historico_senha createMany
   */
  export type historico_senhaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many historico_senhas.
     */
    data: historico_senhaCreateManyInput | historico_senhaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * historico_senha createManyAndReturn
   */
  export type historico_senhaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_senha
     */
    select?: historico_senhaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the historico_senha
     */
    omit?: historico_senhaOmit<ExtArgs> | null
    /**
     * The data used to create many historico_senhas.
     */
    data: historico_senhaCreateManyInput | historico_senhaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_senhaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * historico_senha update
   */
  export type historico_senhaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_senha
     */
    select?: historico_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_senha
     */
    omit?: historico_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_senhaInclude<ExtArgs> | null
    /**
     * The data needed to update a historico_senha.
     */
    data: XOR<historico_senhaUpdateInput, historico_senhaUncheckedUpdateInput>
    /**
     * Choose, which historico_senha to update.
     */
    where: historico_senhaWhereUniqueInput
  }

  /**
   * historico_senha updateMany
   */
  export type historico_senhaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update historico_senhas.
     */
    data: XOR<historico_senhaUpdateManyMutationInput, historico_senhaUncheckedUpdateManyInput>
    /**
     * Filter which historico_senhas to update
     */
    where?: historico_senhaWhereInput
    /**
     * Limit how many historico_senhas to update.
     */
    limit?: number
  }

  /**
   * historico_senha updateManyAndReturn
   */
  export type historico_senhaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_senha
     */
    select?: historico_senhaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the historico_senha
     */
    omit?: historico_senhaOmit<ExtArgs> | null
    /**
     * The data used to update historico_senhas.
     */
    data: XOR<historico_senhaUpdateManyMutationInput, historico_senhaUncheckedUpdateManyInput>
    /**
     * Filter which historico_senhas to update
     */
    where?: historico_senhaWhereInput
    /**
     * Limit how many historico_senhas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_senhaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * historico_senha upsert
   */
  export type historico_senhaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_senha
     */
    select?: historico_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_senha
     */
    omit?: historico_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_senhaInclude<ExtArgs> | null
    /**
     * The filter to search for the historico_senha to update in case it exists.
     */
    where: historico_senhaWhereUniqueInput
    /**
     * In case the historico_senha found by the `where` argument doesn't exist, create a new historico_senha with this data.
     */
    create: XOR<historico_senhaCreateInput, historico_senhaUncheckedCreateInput>
    /**
     * In case the historico_senha was found with the provided `where` argument, update it with this data.
     */
    update: XOR<historico_senhaUpdateInput, historico_senhaUncheckedUpdateInput>
  }

  /**
   * historico_senha delete
   */
  export type historico_senhaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_senha
     */
    select?: historico_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_senha
     */
    omit?: historico_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_senhaInclude<ExtArgs> | null
    /**
     * Filter which historico_senha to delete.
     */
    where: historico_senhaWhereUniqueInput
  }

  /**
   * historico_senha deleteMany
   */
  export type historico_senhaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which historico_senhas to delete
     */
    where?: historico_senhaWhereInput
    /**
     * Limit how many historico_senhas to delete.
     */
    limit?: number
  }

  /**
   * historico_senha without action
   */
  export type historico_senhaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historico_senha
     */
    select?: historico_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historico_senha
     */
    omit?: historico_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historico_senhaInclude<ExtArgs> | null
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


  export const Register_tokenScalarFieldEnum: {
    uuid: 'uuid',
    status: 'status',
    data_util: 'data_util'
  };

  export type Register_tokenScalarFieldEnum = (typeof Register_tokenScalarFieldEnum)[keyof typeof Register_tokenScalarFieldEnum]


  export const AuthScalarFieldEnum: {
    uuid: 'uuid',
    role: 'role',
    status: 'status',
    id_sub: 'id_sub',
    id_asaas: 'id_asaas'
  };

  export type AuthScalarFieldEnum = (typeof AuthScalarFieldEnum)[keyof typeof AuthScalarFieldEnum]


  export const Historico_sessionScalarFieldEnum: {
    uuid: 'uuid',
    uuid_auth: 'uuid_auth',
    record_login: 'record_login',
    expira_time: 'expira_time'
  };

  export type Historico_sessionScalarFieldEnum = (typeof Historico_sessionScalarFieldEnum)[keyof typeof Historico_sessionScalarFieldEnum]


  export const Historico_otpScalarFieldEnum: {
    uuid: 'uuid',
    code_otp: 'code_otp',
    record_create: 'record_create'
  };

  export type Historico_otpScalarFieldEnum = (typeof Historico_otpScalarFieldEnum)[keyof typeof Historico_otpScalarFieldEnum]


  export const Historico_senhaScalarFieldEnum: {
    uuid: 'uuid',
    senha: 'senha',
    record_update: 'record_update',
    status: 'status'
  };

  export type Historico_senhaScalarFieldEnum = (typeof Historico_senhaScalarFieldEnum)[keyof typeof Historico_senhaScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Tipo_User'
   */
  export type EnumTipo_UserFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Tipo_User'>
    


  /**
   * Reference to a field of type 'Tipo_User[]'
   */
  export type ListEnumTipo_UserFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Tipo_User[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type register_tokenWhereInput = {
    AND?: register_tokenWhereInput | register_tokenWhereInput[]
    OR?: register_tokenWhereInput[]
    NOT?: register_tokenWhereInput | register_tokenWhereInput[]
    uuid?: StringFilter<"register_token"> | string
    status?: BoolFilter<"register_token"> | boolean
    data_util?: DateTimeNullableFilter<"register_token"> | Date | string | null
  }

  export type register_tokenOrderByWithRelationInput = {
    uuid?: SortOrder
    status?: SortOrder
    data_util?: SortOrderInput | SortOrder
  }

  export type register_tokenWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: register_tokenWhereInput | register_tokenWhereInput[]
    OR?: register_tokenWhereInput[]
    NOT?: register_tokenWhereInput | register_tokenWhereInput[]
    status?: BoolFilter<"register_token"> | boolean
    data_util?: DateTimeNullableFilter<"register_token"> | Date | string | null
  }, "uuid" | "uuid">

  export type register_tokenOrderByWithAggregationInput = {
    uuid?: SortOrder
    status?: SortOrder
    data_util?: SortOrderInput | SortOrder
    _count?: register_tokenCountOrderByAggregateInput
    _max?: register_tokenMaxOrderByAggregateInput
    _min?: register_tokenMinOrderByAggregateInput
  }

  export type register_tokenScalarWhereWithAggregatesInput = {
    AND?: register_tokenScalarWhereWithAggregatesInput | register_tokenScalarWhereWithAggregatesInput[]
    OR?: register_tokenScalarWhereWithAggregatesInput[]
    NOT?: register_tokenScalarWhereWithAggregatesInput | register_tokenScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"register_token"> | string
    status?: BoolWithAggregatesFilter<"register_token"> | boolean
    data_util?: DateTimeNullableWithAggregatesFilter<"register_token"> | Date | string | null
  }

  export type authWhereInput = {
    AND?: authWhereInput | authWhereInput[]
    OR?: authWhereInput[]
    NOT?: authWhereInput | authWhereInput[]
    uuid?: StringFilter<"auth"> | string
    role?: EnumTipo_UserFilter<"auth"> | $Enums.Tipo_User
    status?: BoolFilter<"auth"> | boolean
    id_sub?: StringNullableFilter<"auth"> | string | null
    id_asaas?: StringNullableFilter<"auth"> | string | null
    historicoSessions?: Historico_sessionListRelationFilter
    historicoOtps?: Historico_otpListRelationFilter
    historicoSenhas?: Historico_senhaListRelationFilter
  }

  export type authOrderByWithRelationInput = {
    uuid?: SortOrder
    role?: SortOrder
    status?: SortOrder
    id_sub?: SortOrderInput | SortOrder
    id_asaas?: SortOrderInput | SortOrder
    historicoSessions?: historico_sessionOrderByRelationAggregateInput
    historicoOtps?: historico_otpOrderByRelationAggregateInput
    historicoSenhas?: historico_senhaOrderByRelationAggregateInput
  }

  export type authWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: authWhereInput | authWhereInput[]
    OR?: authWhereInput[]
    NOT?: authWhereInput | authWhereInput[]
    role?: EnumTipo_UserFilter<"auth"> | $Enums.Tipo_User
    status?: BoolFilter<"auth"> | boolean
    id_sub?: StringNullableFilter<"auth"> | string | null
    id_asaas?: StringNullableFilter<"auth"> | string | null
    historicoSessions?: Historico_sessionListRelationFilter
    historicoOtps?: Historico_otpListRelationFilter
    historicoSenhas?: Historico_senhaListRelationFilter
  }, "uuid" | "uuid">

  export type authOrderByWithAggregationInput = {
    uuid?: SortOrder
    role?: SortOrder
    status?: SortOrder
    id_sub?: SortOrderInput | SortOrder
    id_asaas?: SortOrderInput | SortOrder
    _count?: authCountOrderByAggregateInput
    _max?: authMaxOrderByAggregateInput
    _min?: authMinOrderByAggregateInput
  }

  export type authScalarWhereWithAggregatesInput = {
    AND?: authScalarWhereWithAggregatesInput | authScalarWhereWithAggregatesInput[]
    OR?: authScalarWhereWithAggregatesInput[]
    NOT?: authScalarWhereWithAggregatesInput | authScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"auth"> | string
    role?: EnumTipo_UserWithAggregatesFilter<"auth"> | $Enums.Tipo_User
    status?: BoolWithAggregatesFilter<"auth"> | boolean
    id_sub?: StringNullableWithAggregatesFilter<"auth"> | string | null
    id_asaas?: StringNullableWithAggregatesFilter<"auth"> | string | null
  }

  export type historico_sessionWhereInput = {
    AND?: historico_sessionWhereInput | historico_sessionWhereInput[]
    OR?: historico_sessionWhereInput[]
    NOT?: historico_sessionWhereInput | historico_sessionWhereInput[]
    uuid?: StringFilter<"historico_session"> | string
    uuid_auth?: StringFilter<"historico_session"> | string
    record_login?: DateTimeFilter<"historico_session"> | Date | string
    expira_time?: DateTimeFilter<"historico_session"> | Date | string
    auth?: XOR<AuthScalarRelationFilter, authWhereInput>
  }

  export type historico_sessionOrderByWithRelationInput = {
    uuid?: SortOrder
    uuid_auth?: SortOrder
    record_login?: SortOrder
    expira_time?: SortOrder
    auth?: authOrderByWithRelationInput
  }

  export type historico_sessionWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: historico_sessionWhereInput | historico_sessionWhereInput[]
    OR?: historico_sessionWhereInput[]
    NOT?: historico_sessionWhereInput | historico_sessionWhereInput[]
    uuid_auth?: StringFilter<"historico_session"> | string
    record_login?: DateTimeFilter<"historico_session"> | Date | string
    expira_time?: DateTimeFilter<"historico_session"> | Date | string
    auth?: XOR<AuthScalarRelationFilter, authWhereInput>
  }, "uuid" | "uuid">

  export type historico_sessionOrderByWithAggregationInput = {
    uuid?: SortOrder
    uuid_auth?: SortOrder
    record_login?: SortOrder
    expira_time?: SortOrder
    _count?: historico_sessionCountOrderByAggregateInput
    _max?: historico_sessionMaxOrderByAggregateInput
    _min?: historico_sessionMinOrderByAggregateInput
  }

  export type historico_sessionScalarWhereWithAggregatesInput = {
    AND?: historico_sessionScalarWhereWithAggregatesInput | historico_sessionScalarWhereWithAggregatesInput[]
    OR?: historico_sessionScalarWhereWithAggregatesInput[]
    NOT?: historico_sessionScalarWhereWithAggregatesInput | historico_sessionScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"historico_session"> | string
    uuid_auth?: StringWithAggregatesFilter<"historico_session"> | string
    record_login?: DateTimeWithAggregatesFilter<"historico_session"> | Date | string
    expira_time?: DateTimeWithAggregatesFilter<"historico_session"> | Date | string
  }

  export type historico_otpWhereInput = {
    AND?: historico_otpWhereInput | historico_otpWhereInput[]
    OR?: historico_otpWhereInput[]
    NOT?: historico_otpWhereInput | historico_otpWhereInput[]
    uuid?: StringFilter<"historico_otp"> | string
    code_otp?: StringFilter<"historico_otp"> | string
    record_create?: DateTimeFilter<"historico_otp"> | Date | string
    auth?: XOR<AuthScalarRelationFilter, authWhereInput>
  }

  export type historico_otpOrderByWithRelationInput = {
    uuid?: SortOrder
    code_otp?: SortOrder
    record_create?: SortOrder
    auth?: authOrderByWithRelationInput
  }

  export type historico_otpWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: historico_otpWhereInput | historico_otpWhereInput[]
    OR?: historico_otpWhereInput[]
    NOT?: historico_otpWhereInput | historico_otpWhereInput[]
    code_otp?: StringFilter<"historico_otp"> | string
    record_create?: DateTimeFilter<"historico_otp"> | Date | string
    auth?: XOR<AuthScalarRelationFilter, authWhereInput>
  }, "uuid">

  export type historico_otpOrderByWithAggregationInput = {
    uuid?: SortOrder
    code_otp?: SortOrder
    record_create?: SortOrder
    _count?: historico_otpCountOrderByAggregateInput
    _max?: historico_otpMaxOrderByAggregateInput
    _min?: historico_otpMinOrderByAggregateInput
  }

  export type historico_otpScalarWhereWithAggregatesInput = {
    AND?: historico_otpScalarWhereWithAggregatesInput | historico_otpScalarWhereWithAggregatesInput[]
    OR?: historico_otpScalarWhereWithAggregatesInput[]
    NOT?: historico_otpScalarWhereWithAggregatesInput | historico_otpScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"historico_otp"> | string
    code_otp?: StringWithAggregatesFilter<"historico_otp"> | string
    record_create?: DateTimeWithAggregatesFilter<"historico_otp"> | Date | string
  }

  export type historico_senhaWhereInput = {
    AND?: historico_senhaWhereInput | historico_senhaWhereInput[]
    OR?: historico_senhaWhereInput[]
    NOT?: historico_senhaWhereInput | historico_senhaWhereInput[]
    uuid?: StringFilter<"historico_senha"> | string
    senha?: StringFilter<"historico_senha"> | string
    record_update?: DateTimeFilter<"historico_senha"> | Date | string
    status?: BoolFilter<"historico_senha"> | boolean
    auth?: XOR<AuthScalarRelationFilter, authWhereInput>
  }

  export type historico_senhaOrderByWithRelationInput = {
    uuid?: SortOrder
    senha?: SortOrder
    record_update?: SortOrder
    status?: SortOrder
    auth?: authOrderByWithRelationInput
  }

  export type historico_senhaWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: historico_senhaWhereInput | historico_senhaWhereInput[]
    OR?: historico_senhaWhereInput[]
    NOT?: historico_senhaWhereInput | historico_senhaWhereInput[]
    senha?: StringFilter<"historico_senha"> | string
    record_update?: DateTimeFilter<"historico_senha"> | Date | string
    status?: BoolFilter<"historico_senha"> | boolean
    auth?: XOR<AuthScalarRelationFilter, authWhereInput>
  }, "uuid">

  export type historico_senhaOrderByWithAggregationInput = {
    uuid?: SortOrder
    senha?: SortOrder
    record_update?: SortOrder
    status?: SortOrder
    _count?: historico_senhaCountOrderByAggregateInput
    _max?: historico_senhaMaxOrderByAggregateInput
    _min?: historico_senhaMinOrderByAggregateInput
  }

  export type historico_senhaScalarWhereWithAggregatesInput = {
    AND?: historico_senhaScalarWhereWithAggregatesInput | historico_senhaScalarWhereWithAggregatesInput[]
    OR?: historico_senhaScalarWhereWithAggregatesInput[]
    NOT?: historico_senhaScalarWhereWithAggregatesInput | historico_senhaScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"historico_senha"> | string
    senha?: StringWithAggregatesFilter<"historico_senha"> | string
    record_update?: DateTimeWithAggregatesFilter<"historico_senha"> | Date | string
    status?: BoolWithAggregatesFilter<"historico_senha"> | boolean
  }

  export type register_tokenCreateInput = {
    uuid?: string
    status?: boolean
    data_util?: Date | string | null
  }

  export type register_tokenUncheckedCreateInput = {
    uuid?: string
    status?: boolean
    data_util?: Date | string | null
  }

  export type register_tokenUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    data_util?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type register_tokenUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    data_util?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type register_tokenCreateManyInput = {
    uuid?: string
    status?: boolean
    data_util?: Date | string | null
  }

  export type register_tokenUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    data_util?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type register_tokenUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    data_util?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type authCreateInput = {
    uuid?: string
    role?: $Enums.Tipo_User
    status?: boolean
    id_sub?: string | null
    id_asaas?: string | null
    historicoSessions?: historico_sessionCreateNestedManyWithoutAuthInput
    historicoOtps?: historico_otpCreateNestedManyWithoutAuthInput
    historicoSenhas?: historico_senhaCreateNestedManyWithoutAuthInput
  }

  export type authUncheckedCreateInput = {
    uuid?: string
    role?: $Enums.Tipo_User
    status?: boolean
    id_sub?: string | null
    id_asaas?: string | null
    historicoSessions?: historico_sessionUncheckedCreateNestedManyWithoutAuthInput
    historicoOtps?: historico_otpUncheckedCreateNestedManyWithoutAuthInput
    historicoSenhas?: historico_senhaUncheckedCreateNestedManyWithoutAuthInput
  }

  export type authUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    role?: EnumTipo_UserFieldUpdateOperationsInput | $Enums.Tipo_User
    status?: BoolFieldUpdateOperationsInput | boolean
    id_sub?: NullableStringFieldUpdateOperationsInput | string | null
    id_asaas?: NullableStringFieldUpdateOperationsInput | string | null
    historicoSessions?: historico_sessionUpdateManyWithoutAuthNestedInput
    historicoOtps?: historico_otpUpdateManyWithoutAuthNestedInput
    historicoSenhas?: historico_senhaUpdateManyWithoutAuthNestedInput
  }

  export type authUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    role?: EnumTipo_UserFieldUpdateOperationsInput | $Enums.Tipo_User
    status?: BoolFieldUpdateOperationsInput | boolean
    id_sub?: NullableStringFieldUpdateOperationsInput | string | null
    id_asaas?: NullableStringFieldUpdateOperationsInput | string | null
    historicoSessions?: historico_sessionUncheckedUpdateManyWithoutAuthNestedInput
    historicoOtps?: historico_otpUncheckedUpdateManyWithoutAuthNestedInput
    historicoSenhas?: historico_senhaUncheckedUpdateManyWithoutAuthNestedInput
  }

  export type authCreateManyInput = {
    uuid?: string
    role?: $Enums.Tipo_User
    status?: boolean
    id_sub?: string | null
    id_asaas?: string | null
  }

  export type authUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    role?: EnumTipo_UserFieldUpdateOperationsInput | $Enums.Tipo_User
    status?: BoolFieldUpdateOperationsInput | boolean
    id_sub?: NullableStringFieldUpdateOperationsInput | string | null
    id_asaas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type authUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    role?: EnumTipo_UserFieldUpdateOperationsInput | $Enums.Tipo_User
    status?: BoolFieldUpdateOperationsInput | boolean
    id_sub?: NullableStringFieldUpdateOperationsInput | string | null
    id_asaas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type historico_sessionCreateInput = {
    uuid?: string
    record_login?: Date | string
    expira_time: Date | string
    auth: authCreateNestedOneWithoutHistoricoSessionsInput
  }

  export type historico_sessionUncheckedCreateInput = {
    uuid?: string
    uuid_auth: string
    record_login?: Date | string
    expira_time: Date | string
  }

  export type historico_sessionUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    record_login?: DateTimeFieldUpdateOperationsInput | Date | string
    expira_time?: DateTimeFieldUpdateOperationsInput | Date | string
    auth?: authUpdateOneRequiredWithoutHistoricoSessionsNestedInput
  }

  export type historico_sessionUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    uuid_auth?: StringFieldUpdateOperationsInput | string
    record_login?: DateTimeFieldUpdateOperationsInput | Date | string
    expira_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historico_sessionCreateManyInput = {
    uuid?: string
    uuid_auth: string
    record_login?: Date | string
    expira_time: Date | string
  }

  export type historico_sessionUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    record_login?: DateTimeFieldUpdateOperationsInput | Date | string
    expira_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historico_sessionUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    uuid_auth?: StringFieldUpdateOperationsInput | string
    record_login?: DateTimeFieldUpdateOperationsInput | Date | string
    expira_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historico_otpCreateInput = {
    code_otp: string
    record_create?: Date | string
    auth: authCreateNestedOneWithoutHistoricoOtpsInput
  }

  export type historico_otpUncheckedCreateInput = {
    uuid: string
    code_otp: string
    record_create?: Date | string
  }

  export type historico_otpUpdateInput = {
    code_otp?: StringFieldUpdateOperationsInput | string
    record_create?: DateTimeFieldUpdateOperationsInput | Date | string
    auth?: authUpdateOneRequiredWithoutHistoricoOtpsNestedInput
  }

  export type historico_otpUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    code_otp?: StringFieldUpdateOperationsInput | string
    record_create?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historico_otpCreateManyInput = {
    uuid: string
    code_otp: string
    record_create?: Date | string
  }

  export type historico_otpUpdateManyMutationInput = {
    code_otp?: StringFieldUpdateOperationsInput | string
    record_create?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historico_otpUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    code_otp?: StringFieldUpdateOperationsInput | string
    record_create?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historico_senhaCreateInput = {
    senha: string
    record_update?: Date | string
    status?: boolean
    auth: authCreateNestedOneWithoutHistoricoSenhasInput
  }

  export type historico_senhaUncheckedCreateInput = {
    uuid: string
    senha: string
    record_update?: Date | string
    status?: boolean
  }

  export type historico_senhaUpdateInput = {
    senha?: StringFieldUpdateOperationsInput | string
    record_update?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    auth?: authUpdateOneRequiredWithoutHistoricoSenhasNestedInput
  }

  export type historico_senhaUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    record_update?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type historico_senhaCreateManyInput = {
    uuid: string
    senha: string
    record_update?: Date | string
    status?: boolean
  }

  export type historico_senhaUpdateManyMutationInput = {
    senha?: StringFieldUpdateOperationsInput | string
    record_update?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type historico_senhaUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    record_update?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type register_tokenCountOrderByAggregateInput = {
    uuid?: SortOrder
    status?: SortOrder
    data_util?: SortOrder
  }

  export type register_tokenMaxOrderByAggregateInput = {
    uuid?: SortOrder
    status?: SortOrder
    data_util?: SortOrder
  }

  export type register_tokenMinOrderByAggregateInput = {
    uuid?: SortOrder
    status?: SortOrder
    data_util?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumTipo_UserFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipo_User | EnumTipo_UserFieldRefInput<$PrismaModel>
    in?: $Enums.Tipo_User[] | ListEnumTipo_UserFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tipo_User[] | ListEnumTipo_UserFieldRefInput<$PrismaModel>
    not?: NestedEnumTipo_UserFilter<$PrismaModel> | $Enums.Tipo_User
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Historico_sessionListRelationFilter = {
    every?: historico_sessionWhereInput
    some?: historico_sessionWhereInput
    none?: historico_sessionWhereInput
  }

  export type Historico_otpListRelationFilter = {
    every?: historico_otpWhereInput
    some?: historico_otpWhereInput
    none?: historico_otpWhereInput
  }

  export type Historico_senhaListRelationFilter = {
    every?: historico_senhaWhereInput
    some?: historico_senhaWhereInput
    none?: historico_senhaWhereInput
  }

  export type historico_sessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type historico_otpOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type historico_senhaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type authCountOrderByAggregateInput = {
    uuid?: SortOrder
    role?: SortOrder
    status?: SortOrder
    id_sub?: SortOrder
    id_asaas?: SortOrder
  }

  export type authMaxOrderByAggregateInput = {
    uuid?: SortOrder
    role?: SortOrder
    status?: SortOrder
    id_sub?: SortOrder
    id_asaas?: SortOrder
  }

  export type authMinOrderByAggregateInput = {
    uuid?: SortOrder
    role?: SortOrder
    status?: SortOrder
    id_sub?: SortOrder
    id_asaas?: SortOrder
  }

  export type EnumTipo_UserWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipo_User | EnumTipo_UserFieldRefInput<$PrismaModel>
    in?: $Enums.Tipo_User[] | ListEnumTipo_UserFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tipo_User[] | ListEnumTipo_UserFieldRefInput<$PrismaModel>
    not?: NestedEnumTipo_UserWithAggregatesFilter<$PrismaModel> | $Enums.Tipo_User
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipo_UserFilter<$PrismaModel>
    _max?: NestedEnumTipo_UserFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type AuthScalarRelationFilter = {
    is?: authWhereInput
    isNot?: authWhereInput
  }

  export type historico_sessionCountOrderByAggregateInput = {
    uuid?: SortOrder
    uuid_auth?: SortOrder
    record_login?: SortOrder
    expira_time?: SortOrder
  }

  export type historico_sessionMaxOrderByAggregateInput = {
    uuid?: SortOrder
    uuid_auth?: SortOrder
    record_login?: SortOrder
    expira_time?: SortOrder
  }

  export type historico_sessionMinOrderByAggregateInput = {
    uuid?: SortOrder
    uuid_auth?: SortOrder
    record_login?: SortOrder
    expira_time?: SortOrder
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

  export type historico_otpCountOrderByAggregateInput = {
    uuid?: SortOrder
    code_otp?: SortOrder
    record_create?: SortOrder
  }

  export type historico_otpMaxOrderByAggregateInput = {
    uuid?: SortOrder
    code_otp?: SortOrder
    record_create?: SortOrder
  }

  export type historico_otpMinOrderByAggregateInput = {
    uuid?: SortOrder
    code_otp?: SortOrder
    record_create?: SortOrder
  }

  export type historico_senhaCountOrderByAggregateInput = {
    uuid?: SortOrder
    senha?: SortOrder
    record_update?: SortOrder
    status?: SortOrder
  }

  export type historico_senhaMaxOrderByAggregateInput = {
    uuid?: SortOrder
    senha?: SortOrder
    record_update?: SortOrder
    status?: SortOrder
  }

  export type historico_senhaMinOrderByAggregateInput = {
    uuid?: SortOrder
    senha?: SortOrder
    record_update?: SortOrder
    status?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type historico_sessionCreateNestedManyWithoutAuthInput = {
    create?: XOR<historico_sessionCreateWithoutAuthInput, historico_sessionUncheckedCreateWithoutAuthInput> | historico_sessionCreateWithoutAuthInput[] | historico_sessionUncheckedCreateWithoutAuthInput[]
    connectOrCreate?: historico_sessionCreateOrConnectWithoutAuthInput | historico_sessionCreateOrConnectWithoutAuthInput[]
    createMany?: historico_sessionCreateManyAuthInputEnvelope
    connect?: historico_sessionWhereUniqueInput | historico_sessionWhereUniqueInput[]
  }

  export type historico_otpCreateNestedManyWithoutAuthInput = {
    create?: XOR<historico_otpCreateWithoutAuthInput, historico_otpUncheckedCreateWithoutAuthInput> | historico_otpCreateWithoutAuthInput[] | historico_otpUncheckedCreateWithoutAuthInput[]
    connectOrCreate?: historico_otpCreateOrConnectWithoutAuthInput | historico_otpCreateOrConnectWithoutAuthInput[]
    createMany?: historico_otpCreateManyAuthInputEnvelope
    connect?: historico_otpWhereUniqueInput | historico_otpWhereUniqueInput[]
  }

  export type historico_senhaCreateNestedManyWithoutAuthInput = {
    create?: XOR<historico_senhaCreateWithoutAuthInput, historico_senhaUncheckedCreateWithoutAuthInput> | historico_senhaCreateWithoutAuthInput[] | historico_senhaUncheckedCreateWithoutAuthInput[]
    connectOrCreate?: historico_senhaCreateOrConnectWithoutAuthInput | historico_senhaCreateOrConnectWithoutAuthInput[]
    createMany?: historico_senhaCreateManyAuthInputEnvelope
    connect?: historico_senhaWhereUniqueInput | historico_senhaWhereUniqueInput[]
  }

  export type historico_sessionUncheckedCreateNestedManyWithoutAuthInput = {
    create?: XOR<historico_sessionCreateWithoutAuthInput, historico_sessionUncheckedCreateWithoutAuthInput> | historico_sessionCreateWithoutAuthInput[] | historico_sessionUncheckedCreateWithoutAuthInput[]
    connectOrCreate?: historico_sessionCreateOrConnectWithoutAuthInput | historico_sessionCreateOrConnectWithoutAuthInput[]
    createMany?: historico_sessionCreateManyAuthInputEnvelope
    connect?: historico_sessionWhereUniqueInput | historico_sessionWhereUniqueInput[]
  }

  export type historico_otpUncheckedCreateNestedManyWithoutAuthInput = {
    create?: XOR<historico_otpCreateWithoutAuthInput, historico_otpUncheckedCreateWithoutAuthInput> | historico_otpCreateWithoutAuthInput[] | historico_otpUncheckedCreateWithoutAuthInput[]
    connectOrCreate?: historico_otpCreateOrConnectWithoutAuthInput | historico_otpCreateOrConnectWithoutAuthInput[]
    createMany?: historico_otpCreateManyAuthInputEnvelope
    connect?: historico_otpWhereUniqueInput | historico_otpWhereUniqueInput[]
  }

  export type historico_senhaUncheckedCreateNestedManyWithoutAuthInput = {
    create?: XOR<historico_senhaCreateWithoutAuthInput, historico_senhaUncheckedCreateWithoutAuthInput> | historico_senhaCreateWithoutAuthInput[] | historico_senhaUncheckedCreateWithoutAuthInput[]
    connectOrCreate?: historico_senhaCreateOrConnectWithoutAuthInput | historico_senhaCreateOrConnectWithoutAuthInput[]
    createMany?: historico_senhaCreateManyAuthInputEnvelope
    connect?: historico_senhaWhereUniqueInput | historico_senhaWhereUniqueInput[]
  }

  export type EnumTipo_UserFieldUpdateOperationsInput = {
    set?: $Enums.Tipo_User
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type historico_sessionUpdateManyWithoutAuthNestedInput = {
    create?: XOR<historico_sessionCreateWithoutAuthInput, historico_sessionUncheckedCreateWithoutAuthInput> | historico_sessionCreateWithoutAuthInput[] | historico_sessionUncheckedCreateWithoutAuthInput[]
    connectOrCreate?: historico_sessionCreateOrConnectWithoutAuthInput | historico_sessionCreateOrConnectWithoutAuthInput[]
    upsert?: historico_sessionUpsertWithWhereUniqueWithoutAuthInput | historico_sessionUpsertWithWhereUniqueWithoutAuthInput[]
    createMany?: historico_sessionCreateManyAuthInputEnvelope
    set?: historico_sessionWhereUniqueInput | historico_sessionWhereUniqueInput[]
    disconnect?: historico_sessionWhereUniqueInput | historico_sessionWhereUniqueInput[]
    delete?: historico_sessionWhereUniqueInput | historico_sessionWhereUniqueInput[]
    connect?: historico_sessionWhereUniqueInput | historico_sessionWhereUniqueInput[]
    update?: historico_sessionUpdateWithWhereUniqueWithoutAuthInput | historico_sessionUpdateWithWhereUniqueWithoutAuthInput[]
    updateMany?: historico_sessionUpdateManyWithWhereWithoutAuthInput | historico_sessionUpdateManyWithWhereWithoutAuthInput[]
    deleteMany?: historico_sessionScalarWhereInput | historico_sessionScalarWhereInput[]
  }

  export type historico_otpUpdateManyWithoutAuthNestedInput = {
    create?: XOR<historico_otpCreateWithoutAuthInput, historico_otpUncheckedCreateWithoutAuthInput> | historico_otpCreateWithoutAuthInput[] | historico_otpUncheckedCreateWithoutAuthInput[]
    connectOrCreate?: historico_otpCreateOrConnectWithoutAuthInput | historico_otpCreateOrConnectWithoutAuthInput[]
    upsert?: historico_otpUpsertWithWhereUniqueWithoutAuthInput | historico_otpUpsertWithWhereUniqueWithoutAuthInput[]
    createMany?: historico_otpCreateManyAuthInputEnvelope
    set?: historico_otpWhereUniqueInput | historico_otpWhereUniqueInput[]
    disconnect?: historico_otpWhereUniqueInput | historico_otpWhereUniqueInput[]
    delete?: historico_otpWhereUniqueInput | historico_otpWhereUniqueInput[]
    connect?: historico_otpWhereUniqueInput | historico_otpWhereUniqueInput[]
    update?: historico_otpUpdateWithWhereUniqueWithoutAuthInput | historico_otpUpdateWithWhereUniqueWithoutAuthInput[]
    updateMany?: historico_otpUpdateManyWithWhereWithoutAuthInput | historico_otpUpdateManyWithWhereWithoutAuthInput[]
    deleteMany?: historico_otpScalarWhereInput | historico_otpScalarWhereInput[]
  }

  export type historico_senhaUpdateManyWithoutAuthNestedInput = {
    create?: XOR<historico_senhaCreateWithoutAuthInput, historico_senhaUncheckedCreateWithoutAuthInput> | historico_senhaCreateWithoutAuthInput[] | historico_senhaUncheckedCreateWithoutAuthInput[]
    connectOrCreate?: historico_senhaCreateOrConnectWithoutAuthInput | historico_senhaCreateOrConnectWithoutAuthInput[]
    upsert?: historico_senhaUpsertWithWhereUniqueWithoutAuthInput | historico_senhaUpsertWithWhereUniqueWithoutAuthInput[]
    createMany?: historico_senhaCreateManyAuthInputEnvelope
    set?: historico_senhaWhereUniqueInput | historico_senhaWhereUniqueInput[]
    disconnect?: historico_senhaWhereUniqueInput | historico_senhaWhereUniqueInput[]
    delete?: historico_senhaWhereUniqueInput | historico_senhaWhereUniqueInput[]
    connect?: historico_senhaWhereUniqueInput | historico_senhaWhereUniqueInput[]
    update?: historico_senhaUpdateWithWhereUniqueWithoutAuthInput | historico_senhaUpdateWithWhereUniqueWithoutAuthInput[]
    updateMany?: historico_senhaUpdateManyWithWhereWithoutAuthInput | historico_senhaUpdateManyWithWhereWithoutAuthInput[]
    deleteMany?: historico_senhaScalarWhereInput | historico_senhaScalarWhereInput[]
  }

  export type historico_sessionUncheckedUpdateManyWithoutAuthNestedInput = {
    create?: XOR<historico_sessionCreateWithoutAuthInput, historico_sessionUncheckedCreateWithoutAuthInput> | historico_sessionCreateWithoutAuthInput[] | historico_sessionUncheckedCreateWithoutAuthInput[]
    connectOrCreate?: historico_sessionCreateOrConnectWithoutAuthInput | historico_sessionCreateOrConnectWithoutAuthInput[]
    upsert?: historico_sessionUpsertWithWhereUniqueWithoutAuthInput | historico_sessionUpsertWithWhereUniqueWithoutAuthInput[]
    createMany?: historico_sessionCreateManyAuthInputEnvelope
    set?: historico_sessionWhereUniqueInput | historico_sessionWhereUniqueInput[]
    disconnect?: historico_sessionWhereUniqueInput | historico_sessionWhereUniqueInput[]
    delete?: historico_sessionWhereUniqueInput | historico_sessionWhereUniqueInput[]
    connect?: historico_sessionWhereUniqueInput | historico_sessionWhereUniqueInput[]
    update?: historico_sessionUpdateWithWhereUniqueWithoutAuthInput | historico_sessionUpdateWithWhereUniqueWithoutAuthInput[]
    updateMany?: historico_sessionUpdateManyWithWhereWithoutAuthInput | historico_sessionUpdateManyWithWhereWithoutAuthInput[]
    deleteMany?: historico_sessionScalarWhereInput | historico_sessionScalarWhereInput[]
  }

  export type historico_otpUncheckedUpdateManyWithoutAuthNestedInput = {
    create?: XOR<historico_otpCreateWithoutAuthInput, historico_otpUncheckedCreateWithoutAuthInput> | historico_otpCreateWithoutAuthInput[] | historico_otpUncheckedCreateWithoutAuthInput[]
    connectOrCreate?: historico_otpCreateOrConnectWithoutAuthInput | historico_otpCreateOrConnectWithoutAuthInput[]
    upsert?: historico_otpUpsertWithWhereUniqueWithoutAuthInput | historico_otpUpsertWithWhereUniqueWithoutAuthInput[]
    createMany?: historico_otpCreateManyAuthInputEnvelope
    set?: historico_otpWhereUniqueInput | historico_otpWhereUniqueInput[]
    disconnect?: historico_otpWhereUniqueInput | historico_otpWhereUniqueInput[]
    delete?: historico_otpWhereUniqueInput | historico_otpWhereUniqueInput[]
    connect?: historico_otpWhereUniqueInput | historico_otpWhereUniqueInput[]
    update?: historico_otpUpdateWithWhereUniqueWithoutAuthInput | historico_otpUpdateWithWhereUniqueWithoutAuthInput[]
    updateMany?: historico_otpUpdateManyWithWhereWithoutAuthInput | historico_otpUpdateManyWithWhereWithoutAuthInput[]
    deleteMany?: historico_otpScalarWhereInput | historico_otpScalarWhereInput[]
  }

  export type historico_senhaUncheckedUpdateManyWithoutAuthNestedInput = {
    create?: XOR<historico_senhaCreateWithoutAuthInput, historico_senhaUncheckedCreateWithoutAuthInput> | historico_senhaCreateWithoutAuthInput[] | historico_senhaUncheckedCreateWithoutAuthInput[]
    connectOrCreate?: historico_senhaCreateOrConnectWithoutAuthInput | historico_senhaCreateOrConnectWithoutAuthInput[]
    upsert?: historico_senhaUpsertWithWhereUniqueWithoutAuthInput | historico_senhaUpsertWithWhereUniqueWithoutAuthInput[]
    createMany?: historico_senhaCreateManyAuthInputEnvelope
    set?: historico_senhaWhereUniqueInput | historico_senhaWhereUniqueInput[]
    disconnect?: historico_senhaWhereUniqueInput | historico_senhaWhereUniqueInput[]
    delete?: historico_senhaWhereUniqueInput | historico_senhaWhereUniqueInput[]
    connect?: historico_senhaWhereUniqueInput | historico_senhaWhereUniqueInput[]
    update?: historico_senhaUpdateWithWhereUniqueWithoutAuthInput | historico_senhaUpdateWithWhereUniqueWithoutAuthInput[]
    updateMany?: historico_senhaUpdateManyWithWhereWithoutAuthInput | historico_senhaUpdateManyWithWhereWithoutAuthInput[]
    deleteMany?: historico_senhaScalarWhereInput | historico_senhaScalarWhereInput[]
  }

  export type authCreateNestedOneWithoutHistoricoSessionsInput = {
    create?: XOR<authCreateWithoutHistoricoSessionsInput, authUncheckedCreateWithoutHistoricoSessionsInput>
    connectOrCreate?: authCreateOrConnectWithoutHistoricoSessionsInput
    connect?: authWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type authUpdateOneRequiredWithoutHistoricoSessionsNestedInput = {
    create?: XOR<authCreateWithoutHistoricoSessionsInput, authUncheckedCreateWithoutHistoricoSessionsInput>
    connectOrCreate?: authCreateOrConnectWithoutHistoricoSessionsInput
    upsert?: authUpsertWithoutHistoricoSessionsInput
    connect?: authWhereUniqueInput
    update?: XOR<XOR<authUpdateToOneWithWhereWithoutHistoricoSessionsInput, authUpdateWithoutHistoricoSessionsInput>, authUncheckedUpdateWithoutHistoricoSessionsInput>
  }

  export type authCreateNestedOneWithoutHistoricoOtpsInput = {
    create?: XOR<authCreateWithoutHistoricoOtpsInput, authUncheckedCreateWithoutHistoricoOtpsInput>
    connectOrCreate?: authCreateOrConnectWithoutHistoricoOtpsInput
    connect?: authWhereUniqueInput
  }

  export type authUpdateOneRequiredWithoutHistoricoOtpsNestedInput = {
    create?: XOR<authCreateWithoutHistoricoOtpsInput, authUncheckedCreateWithoutHistoricoOtpsInput>
    connectOrCreate?: authCreateOrConnectWithoutHistoricoOtpsInput
    upsert?: authUpsertWithoutHistoricoOtpsInput
    connect?: authWhereUniqueInput
    update?: XOR<XOR<authUpdateToOneWithWhereWithoutHistoricoOtpsInput, authUpdateWithoutHistoricoOtpsInput>, authUncheckedUpdateWithoutHistoricoOtpsInput>
  }

  export type authCreateNestedOneWithoutHistoricoSenhasInput = {
    create?: XOR<authCreateWithoutHistoricoSenhasInput, authUncheckedCreateWithoutHistoricoSenhasInput>
    connectOrCreate?: authCreateOrConnectWithoutHistoricoSenhasInput
    connect?: authWhereUniqueInput
  }

  export type authUpdateOneRequiredWithoutHistoricoSenhasNestedInput = {
    create?: XOR<authCreateWithoutHistoricoSenhasInput, authUncheckedCreateWithoutHistoricoSenhasInput>
    connectOrCreate?: authCreateOrConnectWithoutHistoricoSenhasInput
    upsert?: authUpsertWithoutHistoricoSenhasInput
    connect?: authWhereUniqueInput
    update?: XOR<XOR<authUpdateToOneWithWhereWithoutHistoricoSenhasInput, authUpdateWithoutHistoricoSenhasInput>, authUncheckedUpdateWithoutHistoricoSenhasInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTipo_UserFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipo_User | EnumTipo_UserFieldRefInput<$PrismaModel>
    in?: $Enums.Tipo_User[] | ListEnumTipo_UserFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tipo_User[] | ListEnumTipo_UserFieldRefInput<$PrismaModel>
    not?: NestedEnumTipo_UserFilter<$PrismaModel> | $Enums.Tipo_User
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumTipo_UserWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipo_User | EnumTipo_UserFieldRefInput<$PrismaModel>
    in?: $Enums.Tipo_User[] | ListEnumTipo_UserFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tipo_User[] | ListEnumTipo_UserFieldRefInput<$PrismaModel>
    not?: NestedEnumTipo_UserWithAggregatesFilter<$PrismaModel> | $Enums.Tipo_User
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipo_UserFilter<$PrismaModel>
    _max?: NestedEnumTipo_UserFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type historico_sessionCreateWithoutAuthInput = {
    uuid?: string
    record_login?: Date | string
    expira_time: Date | string
  }

  export type historico_sessionUncheckedCreateWithoutAuthInput = {
    uuid?: string
    record_login?: Date | string
    expira_time: Date | string
  }

  export type historico_sessionCreateOrConnectWithoutAuthInput = {
    where: historico_sessionWhereUniqueInput
    create: XOR<historico_sessionCreateWithoutAuthInput, historico_sessionUncheckedCreateWithoutAuthInput>
  }

  export type historico_sessionCreateManyAuthInputEnvelope = {
    data: historico_sessionCreateManyAuthInput | historico_sessionCreateManyAuthInput[]
    skipDuplicates?: boolean
  }

  export type historico_otpCreateWithoutAuthInput = {
    code_otp: string
    record_create?: Date | string
  }

  export type historico_otpUncheckedCreateWithoutAuthInput = {
    code_otp: string
    record_create?: Date | string
  }

  export type historico_otpCreateOrConnectWithoutAuthInput = {
    where: historico_otpWhereUniqueInput
    create: XOR<historico_otpCreateWithoutAuthInput, historico_otpUncheckedCreateWithoutAuthInput>
  }

  export type historico_otpCreateManyAuthInputEnvelope = {
    data: historico_otpCreateManyAuthInput | historico_otpCreateManyAuthInput[]
    skipDuplicates?: boolean
  }

  export type historico_senhaCreateWithoutAuthInput = {
    senha: string
    record_update?: Date | string
    status?: boolean
  }

  export type historico_senhaUncheckedCreateWithoutAuthInput = {
    senha: string
    record_update?: Date | string
    status?: boolean
  }

  export type historico_senhaCreateOrConnectWithoutAuthInput = {
    where: historico_senhaWhereUniqueInput
    create: XOR<historico_senhaCreateWithoutAuthInput, historico_senhaUncheckedCreateWithoutAuthInput>
  }

  export type historico_senhaCreateManyAuthInputEnvelope = {
    data: historico_senhaCreateManyAuthInput | historico_senhaCreateManyAuthInput[]
    skipDuplicates?: boolean
  }

  export type historico_sessionUpsertWithWhereUniqueWithoutAuthInput = {
    where: historico_sessionWhereUniqueInput
    update: XOR<historico_sessionUpdateWithoutAuthInput, historico_sessionUncheckedUpdateWithoutAuthInput>
    create: XOR<historico_sessionCreateWithoutAuthInput, historico_sessionUncheckedCreateWithoutAuthInput>
  }

  export type historico_sessionUpdateWithWhereUniqueWithoutAuthInput = {
    where: historico_sessionWhereUniqueInput
    data: XOR<historico_sessionUpdateWithoutAuthInput, historico_sessionUncheckedUpdateWithoutAuthInput>
  }

  export type historico_sessionUpdateManyWithWhereWithoutAuthInput = {
    where: historico_sessionScalarWhereInput
    data: XOR<historico_sessionUpdateManyMutationInput, historico_sessionUncheckedUpdateManyWithoutAuthInput>
  }

  export type historico_sessionScalarWhereInput = {
    AND?: historico_sessionScalarWhereInput | historico_sessionScalarWhereInput[]
    OR?: historico_sessionScalarWhereInput[]
    NOT?: historico_sessionScalarWhereInput | historico_sessionScalarWhereInput[]
    uuid?: StringFilter<"historico_session"> | string
    uuid_auth?: StringFilter<"historico_session"> | string
    record_login?: DateTimeFilter<"historico_session"> | Date | string
    expira_time?: DateTimeFilter<"historico_session"> | Date | string
  }

  export type historico_otpUpsertWithWhereUniqueWithoutAuthInput = {
    where: historico_otpWhereUniqueInput
    update: XOR<historico_otpUpdateWithoutAuthInput, historico_otpUncheckedUpdateWithoutAuthInput>
    create: XOR<historico_otpCreateWithoutAuthInput, historico_otpUncheckedCreateWithoutAuthInput>
  }

  export type historico_otpUpdateWithWhereUniqueWithoutAuthInput = {
    where: historico_otpWhereUniqueInput
    data: XOR<historico_otpUpdateWithoutAuthInput, historico_otpUncheckedUpdateWithoutAuthInput>
  }

  export type historico_otpUpdateManyWithWhereWithoutAuthInput = {
    where: historico_otpScalarWhereInput
    data: XOR<historico_otpUpdateManyMutationInput, historico_otpUncheckedUpdateManyWithoutAuthInput>
  }

  export type historico_otpScalarWhereInput = {
    AND?: historico_otpScalarWhereInput | historico_otpScalarWhereInput[]
    OR?: historico_otpScalarWhereInput[]
    NOT?: historico_otpScalarWhereInput | historico_otpScalarWhereInput[]
    uuid?: StringFilter<"historico_otp"> | string
    code_otp?: StringFilter<"historico_otp"> | string
    record_create?: DateTimeFilter<"historico_otp"> | Date | string
  }

  export type historico_senhaUpsertWithWhereUniqueWithoutAuthInput = {
    where: historico_senhaWhereUniqueInput
    update: XOR<historico_senhaUpdateWithoutAuthInput, historico_senhaUncheckedUpdateWithoutAuthInput>
    create: XOR<historico_senhaCreateWithoutAuthInput, historico_senhaUncheckedCreateWithoutAuthInput>
  }

  export type historico_senhaUpdateWithWhereUniqueWithoutAuthInput = {
    where: historico_senhaWhereUniqueInput
    data: XOR<historico_senhaUpdateWithoutAuthInput, historico_senhaUncheckedUpdateWithoutAuthInput>
  }

  export type historico_senhaUpdateManyWithWhereWithoutAuthInput = {
    where: historico_senhaScalarWhereInput
    data: XOR<historico_senhaUpdateManyMutationInput, historico_senhaUncheckedUpdateManyWithoutAuthInput>
  }

  export type historico_senhaScalarWhereInput = {
    AND?: historico_senhaScalarWhereInput | historico_senhaScalarWhereInput[]
    OR?: historico_senhaScalarWhereInput[]
    NOT?: historico_senhaScalarWhereInput | historico_senhaScalarWhereInput[]
    uuid?: StringFilter<"historico_senha"> | string
    senha?: StringFilter<"historico_senha"> | string
    record_update?: DateTimeFilter<"historico_senha"> | Date | string
    status?: BoolFilter<"historico_senha"> | boolean
  }

  export type authCreateWithoutHistoricoSessionsInput = {
    uuid?: string
    role?: $Enums.Tipo_User
    status?: boolean
    id_sub?: string | null
    id_asaas?: string | null
    historicoOtps?: historico_otpCreateNestedManyWithoutAuthInput
    historicoSenhas?: historico_senhaCreateNestedManyWithoutAuthInput
  }

  export type authUncheckedCreateWithoutHistoricoSessionsInput = {
    uuid?: string
    role?: $Enums.Tipo_User
    status?: boolean
    id_sub?: string | null
    id_asaas?: string | null
    historicoOtps?: historico_otpUncheckedCreateNestedManyWithoutAuthInput
    historicoSenhas?: historico_senhaUncheckedCreateNestedManyWithoutAuthInput
  }

  export type authCreateOrConnectWithoutHistoricoSessionsInput = {
    where: authWhereUniqueInput
    create: XOR<authCreateWithoutHistoricoSessionsInput, authUncheckedCreateWithoutHistoricoSessionsInput>
  }

  export type authUpsertWithoutHistoricoSessionsInput = {
    update: XOR<authUpdateWithoutHistoricoSessionsInput, authUncheckedUpdateWithoutHistoricoSessionsInput>
    create: XOR<authCreateWithoutHistoricoSessionsInput, authUncheckedCreateWithoutHistoricoSessionsInput>
    where?: authWhereInput
  }

  export type authUpdateToOneWithWhereWithoutHistoricoSessionsInput = {
    where?: authWhereInput
    data: XOR<authUpdateWithoutHistoricoSessionsInput, authUncheckedUpdateWithoutHistoricoSessionsInput>
  }

  export type authUpdateWithoutHistoricoSessionsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    role?: EnumTipo_UserFieldUpdateOperationsInput | $Enums.Tipo_User
    status?: BoolFieldUpdateOperationsInput | boolean
    id_sub?: NullableStringFieldUpdateOperationsInput | string | null
    id_asaas?: NullableStringFieldUpdateOperationsInput | string | null
    historicoOtps?: historico_otpUpdateManyWithoutAuthNestedInput
    historicoSenhas?: historico_senhaUpdateManyWithoutAuthNestedInput
  }

  export type authUncheckedUpdateWithoutHistoricoSessionsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    role?: EnumTipo_UserFieldUpdateOperationsInput | $Enums.Tipo_User
    status?: BoolFieldUpdateOperationsInput | boolean
    id_sub?: NullableStringFieldUpdateOperationsInput | string | null
    id_asaas?: NullableStringFieldUpdateOperationsInput | string | null
    historicoOtps?: historico_otpUncheckedUpdateManyWithoutAuthNestedInput
    historicoSenhas?: historico_senhaUncheckedUpdateManyWithoutAuthNestedInput
  }

  export type authCreateWithoutHistoricoOtpsInput = {
    uuid?: string
    role?: $Enums.Tipo_User
    status?: boolean
    id_sub?: string | null
    id_asaas?: string | null
    historicoSessions?: historico_sessionCreateNestedManyWithoutAuthInput
    historicoSenhas?: historico_senhaCreateNestedManyWithoutAuthInput
  }

  export type authUncheckedCreateWithoutHistoricoOtpsInput = {
    uuid?: string
    role?: $Enums.Tipo_User
    status?: boolean
    id_sub?: string | null
    id_asaas?: string | null
    historicoSessions?: historico_sessionUncheckedCreateNestedManyWithoutAuthInput
    historicoSenhas?: historico_senhaUncheckedCreateNestedManyWithoutAuthInput
  }

  export type authCreateOrConnectWithoutHistoricoOtpsInput = {
    where: authWhereUniqueInput
    create: XOR<authCreateWithoutHistoricoOtpsInput, authUncheckedCreateWithoutHistoricoOtpsInput>
  }

  export type authUpsertWithoutHistoricoOtpsInput = {
    update: XOR<authUpdateWithoutHistoricoOtpsInput, authUncheckedUpdateWithoutHistoricoOtpsInput>
    create: XOR<authCreateWithoutHistoricoOtpsInput, authUncheckedCreateWithoutHistoricoOtpsInput>
    where?: authWhereInput
  }

  export type authUpdateToOneWithWhereWithoutHistoricoOtpsInput = {
    where?: authWhereInput
    data: XOR<authUpdateWithoutHistoricoOtpsInput, authUncheckedUpdateWithoutHistoricoOtpsInput>
  }

  export type authUpdateWithoutHistoricoOtpsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    role?: EnumTipo_UserFieldUpdateOperationsInput | $Enums.Tipo_User
    status?: BoolFieldUpdateOperationsInput | boolean
    id_sub?: NullableStringFieldUpdateOperationsInput | string | null
    id_asaas?: NullableStringFieldUpdateOperationsInput | string | null
    historicoSessions?: historico_sessionUpdateManyWithoutAuthNestedInput
    historicoSenhas?: historico_senhaUpdateManyWithoutAuthNestedInput
  }

  export type authUncheckedUpdateWithoutHistoricoOtpsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    role?: EnumTipo_UserFieldUpdateOperationsInput | $Enums.Tipo_User
    status?: BoolFieldUpdateOperationsInput | boolean
    id_sub?: NullableStringFieldUpdateOperationsInput | string | null
    id_asaas?: NullableStringFieldUpdateOperationsInput | string | null
    historicoSessions?: historico_sessionUncheckedUpdateManyWithoutAuthNestedInput
    historicoSenhas?: historico_senhaUncheckedUpdateManyWithoutAuthNestedInput
  }

  export type authCreateWithoutHistoricoSenhasInput = {
    uuid?: string
    role?: $Enums.Tipo_User
    status?: boolean
    id_sub?: string | null
    id_asaas?: string | null
    historicoSessions?: historico_sessionCreateNestedManyWithoutAuthInput
    historicoOtps?: historico_otpCreateNestedManyWithoutAuthInput
  }

  export type authUncheckedCreateWithoutHistoricoSenhasInput = {
    uuid?: string
    role?: $Enums.Tipo_User
    status?: boolean
    id_sub?: string | null
    id_asaas?: string | null
    historicoSessions?: historico_sessionUncheckedCreateNestedManyWithoutAuthInput
    historicoOtps?: historico_otpUncheckedCreateNestedManyWithoutAuthInput
  }

  export type authCreateOrConnectWithoutHistoricoSenhasInput = {
    where: authWhereUniqueInput
    create: XOR<authCreateWithoutHistoricoSenhasInput, authUncheckedCreateWithoutHistoricoSenhasInput>
  }

  export type authUpsertWithoutHistoricoSenhasInput = {
    update: XOR<authUpdateWithoutHistoricoSenhasInput, authUncheckedUpdateWithoutHistoricoSenhasInput>
    create: XOR<authCreateWithoutHistoricoSenhasInput, authUncheckedCreateWithoutHistoricoSenhasInput>
    where?: authWhereInput
  }

  export type authUpdateToOneWithWhereWithoutHistoricoSenhasInput = {
    where?: authWhereInput
    data: XOR<authUpdateWithoutHistoricoSenhasInput, authUncheckedUpdateWithoutHistoricoSenhasInput>
  }

  export type authUpdateWithoutHistoricoSenhasInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    role?: EnumTipo_UserFieldUpdateOperationsInput | $Enums.Tipo_User
    status?: BoolFieldUpdateOperationsInput | boolean
    id_sub?: NullableStringFieldUpdateOperationsInput | string | null
    id_asaas?: NullableStringFieldUpdateOperationsInput | string | null
    historicoSessions?: historico_sessionUpdateManyWithoutAuthNestedInput
    historicoOtps?: historico_otpUpdateManyWithoutAuthNestedInput
  }

  export type authUncheckedUpdateWithoutHistoricoSenhasInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    role?: EnumTipo_UserFieldUpdateOperationsInput | $Enums.Tipo_User
    status?: BoolFieldUpdateOperationsInput | boolean
    id_sub?: NullableStringFieldUpdateOperationsInput | string | null
    id_asaas?: NullableStringFieldUpdateOperationsInput | string | null
    historicoSessions?: historico_sessionUncheckedUpdateManyWithoutAuthNestedInput
    historicoOtps?: historico_otpUncheckedUpdateManyWithoutAuthNestedInput
  }

  export type historico_sessionCreateManyAuthInput = {
    uuid?: string
    record_login?: Date | string
    expira_time: Date | string
  }

  export type historico_otpCreateManyAuthInput = {
    code_otp: string
    record_create?: Date | string
  }

  export type historico_senhaCreateManyAuthInput = {
    senha: string
    record_update?: Date | string
    status?: boolean
  }

  export type historico_sessionUpdateWithoutAuthInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    record_login?: DateTimeFieldUpdateOperationsInput | Date | string
    expira_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historico_sessionUncheckedUpdateWithoutAuthInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    record_login?: DateTimeFieldUpdateOperationsInput | Date | string
    expira_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historico_sessionUncheckedUpdateManyWithoutAuthInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    record_login?: DateTimeFieldUpdateOperationsInput | Date | string
    expira_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historico_otpUpdateWithoutAuthInput = {
    code_otp?: StringFieldUpdateOperationsInput | string
    record_create?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historico_otpUncheckedUpdateWithoutAuthInput = {
    code_otp?: StringFieldUpdateOperationsInput | string
    record_create?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historico_otpUncheckedUpdateManyWithoutAuthInput = {
    code_otp?: StringFieldUpdateOperationsInput | string
    record_create?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historico_senhaUpdateWithoutAuthInput = {
    senha?: StringFieldUpdateOperationsInput | string
    record_update?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type historico_senhaUncheckedUpdateWithoutAuthInput = {
    senha?: StringFieldUpdateOperationsInput | string
    record_update?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type historico_senhaUncheckedUpdateManyWithoutAuthInput = {
    senha?: StringFieldUpdateOperationsInput | string
    record_update?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
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