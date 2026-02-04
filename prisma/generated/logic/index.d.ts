
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
 * Model operador
 * 
 */
export type operador = $Result.DefaultSelection<Prisma.$operadorPayload>
/**
 * Model celular_operador
 * 
 */
export type celular_operador = $Result.DefaultSelection<Prisma.$celular_operadorPayload>
/**
 * Model endereco_operador
 * 
 */
export type endereco_operador = $Result.DefaultSelection<Prisma.$endereco_operadorPayload>
/**
 * Model rede_social_operador
 * 
 */
export type rede_social_operador = $Result.DefaultSelection<Prisma.$rede_social_operadorPayload>
/**
 * Model cliente
 * 
 */
export type cliente = $Result.DefaultSelection<Prisma.$clientePayload>
/**
 * Model celular_cliente
 * 
 */
export type celular_cliente = $Result.DefaultSelection<Prisma.$celular_clientePayload>
/**
 * Model endereco_cliente
 * 
 */
export type endereco_cliente = $Result.DefaultSelection<Prisma.$endereco_clientePayload>
/**
 * Model rede_social_cliente
 * 
 */
export type rede_social_cliente = $Result.DefaultSelection<Prisma.$rede_social_clientePayload>
/**
 * Model configuracao
 * 
 */
export type configuracao = $Result.DefaultSelection<Prisma.$configuracaoPayload>
/**
 * Model emprestimo
 * 
 */
export type emprestimo = $Result.DefaultSelection<Prisma.$emprestimoPayload>
/**
 * Model pagamento
 * 
 */
export type pagamento = $Result.DefaultSelection<Prisma.$pagamentoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const redes: {
  WHATSAPP: 'WHATSAPP',
  TELEGRAM: 'TELEGRAM',
  FACEBOOK: 'FACEBOOK',
  LINKEDIN: 'LINKEDIN',
  URL: 'URL'
};

export type redes = (typeof redes)[keyof typeof redes]


export const Status_divida: {
  PENDENTE: 'PENDENTE',
  PAGO: 'PAGO',
  VENCIDO: 'VENCIDO'
};

export type Status_divida = (typeof Status_divida)[keyof typeof Status_divida]


export const Tipo_pagamento: {
  PIX: 'PIX',
  BOLETO: 'BOLETO',
  CRED: 'CRED',
  DEB: 'DEB',
  DINHEIRO: 'DINHEIRO'
};

export type Tipo_pagamento = (typeof Tipo_pagamento)[keyof typeof Tipo_pagamento]


export const Tipo_cobranca: {
  ANUAL: 'ANUAL',
  MENSAL: 'MENSAL',
  QUINZENAL: 'QUINZENAL',
  SEMANAL: 'SEMANAL',
  DIARIO: 'DIARIO'
};

export type Tipo_cobranca = (typeof Tipo_cobranca)[keyof typeof Tipo_cobranca]

}

export type redes = $Enums.redes

export const redes: typeof $Enums.redes

export type Status_divida = $Enums.Status_divida

export const Status_divida: typeof $Enums.Status_divida

export type Tipo_pagamento = $Enums.Tipo_pagamento

export const Tipo_pagamento: typeof $Enums.Tipo_pagamento

export type Tipo_cobranca = $Enums.Tipo_cobranca

export const Tipo_cobranca: typeof $Enums.Tipo_cobranca

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Operadors
 * const operadors = await prisma.operador.findMany()
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
   * // Fetch zero or more Operadors
   * const operadors = await prisma.operador.findMany()
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
   * `prisma.operador`: Exposes CRUD operations for the **operador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Operadors
    * const operadors = await prisma.operador.findMany()
    * ```
    */
  get operador(): Prisma.operadorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.celular_operador`: Exposes CRUD operations for the **celular_operador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Celular_operadors
    * const celular_operadors = await prisma.celular_operador.findMany()
    * ```
    */
  get celular_operador(): Prisma.celular_operadorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.endereco_operador`: Exposes CRUD operations for the **endereco_operador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Endereco_operadors
    * const endereco_operadors = await prisma.endereco_operador.findMany()
    * ```
    */
  get endereco_operador(): Prisma.endereco_operadorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rede_social_operador`: Exposes CRUD operations for the **rede_social_operador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rede_social_operadors
    * const rede_social_operadors = await prisma.rede_social_operador.findMany()
    * ```
    */
  get rede_social_operador(): Prisma.rede_social_operadorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.clienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.celular_cliente`: Exposes CRUD operations for the **celular_cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Celular_clientes
    * const celular_clientes = await prisma.celular_cliente.findMany()
    * ```
    */
  get celular_cliente(): Prisma.celular_clienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.endereco_cliente`: Exposes CRUD operations for the **endereco_cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Endereco_clientes
    * const endereco_clientes = await prisma.endereco_cliente.findMany()
    * ```
    */
  get endereco_cliente(): Prisma.endereco_clienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rede_social_cliente`: Exposes CRUD operations for the **rede_social_cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rede_social_clientes
    * const rede_social_clientes = await prisma.rede_social_cliente.findMany()
    * ```
    */
  get rede_social_cliente(): Prisma.rede_social_clienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.configuracao`: Exposes CRUD operations for the **configuracao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configuracaos
    * const configuracaos = await prisma.configuracao.findMany()
    * ```
    */
  get configuracao(): Prisma.configuracaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emprestimo`: Exposes CRUD operations for the **emprestimo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emprestimos
    * const emprestimos = await prisma.emprestimo.findMany()
    * ```
    */
  get emprestimo(): Prisma.emprestimoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pagamento`: Exposes CRUD operations for the **pagamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagamentos
    * const pagamentos = await prisma.pagamento.findMany()
    * ```
    */
  get pagamento(): Prisma.pagamentoDelegate<ExtArgs, ClientOptions>;
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
    operador: 'operador',
    celular_operador: 'celular_operador',
    endereco_operador: 'endereco_operador',
    rede_social_operador: 'rede_social_operador',
    cliente: 'cliente',
    celular_cliente: 'celular_cliente',
    endereco_cliente: 'endereco_cliente',
    rede_social_cliente: 'rede_social_cliente',
    configuracao: 'configuracao',
    emprestimo: 'emprestimo',
    pagamento: 'pagamento'
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
      modelProps: "operador" | "celular_operador" | "endereco_operador" | "rede_social_operador" | "cliente" | "celular_cliente" | "endereco_cliente" | "rede_social_cliente" | "configuracao" | "emprestimo" | "pagamento"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      operador: {
        payload: Prisma.$operadorPayload<ExtArgs>
        fields: Prisma.operadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.operadorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.operadorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operadorPayload>
          }
          findFirst: {
            args: Prisma.operadorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.operadorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operadorPayload>
          }
          findMany: {
            args: Prisma.operadorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operadorPayload>[]
          }
          create: {
            args: Prisma.operadorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operadorPayload>
          }
          createMany: {
            args: Prisma.operadorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.operadorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operadorPayload>[]
          }
          delete: {
            args: Prisma.operadorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operadorPayload>
          }
          update: {
            args: Prisma.operadorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operadorPayload>
          }
          deleteMany: {
            args: Prisma.operadorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.operadorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.operadorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operadorPayload>[]
          }
          upsert: {
            args: Prisma.operadorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operadorPayload>
          }
          aggregate: {
            args: Prisma.OperadorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperador>
          }
          groupBy: {
            args: Prisma.operadorGroupByArgs<ExtArgs>
            result: $Utils.Optional<OperadorGroupByOutputType>[]
          }
          count: {
            args: Prisma.operadorCountArgs<ExtArgs>
            result: $Utils.Optional<OperadorCountAggregateOutputType> | number
          }
        }
      }
      celular_operador: {
        payload: Prisma.$celular_operadorPayload<ExtArgs>
        fields: Prisma.celular_operadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.celular_operadorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celular_operadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.celular_operadorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celular_operadorPayload>
          }
          findFirst: {
            args: Prisma.celular_operadorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celular_operadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.celular_operadorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celular_operadorPayload>
          }
          findMany: {
            args: Prisma.celular_operadorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celular_operadorPayload>[]
          }
          create: {
            args: Prisma.celular_operadorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celular_operadorPayload>
          }
          createMany: {
            args: Prisma.celular_operadorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.celular_operadorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celular_operadorPayload>[]
          }
          delete: {
            args: Prisma.celular_operadorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celular_operadorPayload>
          }
          update: {
            args: Prisma.celular_operadorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celular_operadorPayload>
          }
          deleteMany: {
            args: Prisma.celular_operadorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.celular_operadorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.celular_operadorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celular_operadorPayload>[]
          }
          upsert: {
            args: Prisma.celular_operadorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celular_operadorPayload>
          }
          aggregate: {
            args: Prisma.Celular_operadorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCelular_operador>
          }
          groupBy: {
            args: Prisma.celular_operadorGroupByArgs<ExtArgs>
            result: $Utils.Optional<Celular_operadorGroupByOutputType>[]
          }
          count: {
            args: Prisma.celular_operadorCountArgs<ExtArgs>
            result: $Utils.Optional<Celular_operadorCountAggregateOutputType> | number
          }
        }
      }
      endereco_operador: {
        payload: Prisma.$endereco_operadorPayload<ExtArgs>
        fields: Prisma.endereco_operadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.endereco_operadorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereco_operadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.endereco_operadorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereco_operadorPayload>
          }
          findFirst: {
            args: Prisma.endereco_operadorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereco_operadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.endereco_operadorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereco_operadorPayload>
          }
          findMany: {
            args: Prisma.endereco_operadorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereco_operadorPayload>[]
          }
          create: {
            args: Prisma.endereco_operadorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereco_operadorPayload>
          }
          createMany: {
            args: Prisma.endereco_operadorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.endereco_operadorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereco_operadorPayload>[]
          }
          delete: {
            args: Prisma.endereco_operadorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereco_operadorPayload>
          }
          update: {
            args: Prisma.endereco_operadorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereco_operadorPayload>
          }
          deleteMany: {
            args: Prisma.endereco_operadorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.endereco_operadorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.endereco_operadorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereco_operadorPayload>[]
          }
          upsert: {
            args: Prisma.endereco_operadorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereco_operadorPayload>
          }
          aggregate: {
            args: Prisma.Endereco_operadorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEndereco_operador>
          }
          groupBy: {
            args: Prisma.endereco_operadorGroupByArgs<ExtArgs>
            result: $Utils.Optional<Endereco_operadorGroupByOutputType>[]
          }
          count: {
            args: Prisma.endereco_operadorCountArgs<ExtArgs>
            result: $Utils.Optional<Endereco_operadorCountAggregateOutputType> | number
          }
        }
      }
      rede_social_operador: {
        payload: Prisma.$rede_social_operadorPayload<ExtArgs>
        fields: Prisma.rede_social_operadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rede_social_operadorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rede_social_operadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rede_social_operadorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rede_social_operadorPayload>
          }
          findFirst: {
            args: Prisma.rede_social_operadorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rede_social_operadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rede_social_operadorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rede_social_operadorPayload>
          }
          findMany: {
            args: Prisma.rede_social_operadorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rede_social_operadorPayload>[]
          }
          create: {
            args: Prisma.rede_social_operadorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rede_social_operadorPayload>
          }
          createMany: {
            args: Prisma.rede_social_operadorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rede_social_operadorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rede_social_operadorPayload>[]
          }
          delete: {
            args: Prisma.rede_social_operadorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rede_social_operadorPayload>
          }
          update: {
            args: Prisma.rede_social_operadorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rede_social_operadorPayload>
          }
          deleteMany: {
            args: Prisma.rede_social_operadorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rede_social_operadorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rede_social_operadorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rede_social_operadorPayload>[]
          }
          upsert: {
            args: Prisma.rede_social_operadorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rede_social_operadorPayload>
          }
          aggregate: {
            args: Prisma.Rede_social_operadorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRede_social_operador>
          }
          groupBy: {
            args: Prisma.rede_social_operadorGroupByArgs<ExtArgs>
            result: $Utils.Optional<Rede_social_operadorGroupByOutputType>[]
          }
          count: {
            args: Prisma.rede_social_operadorCountArgs<ExtArgs>
            result: $Utils.Optional<Rede_social_operadorCountAggregateOutputType> | number
          }
        }
      }
      cliente: {
        payload: Prisma.$clientePayload<ExtArgs>
        fields: Prisma.clienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          findFirst: {
            args: Prisma.clienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          findMany: {
            args: Prisma.clienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>[]
          }
          create: {
            args: Prisma.clienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          createMany: {
            args: Prisma.clienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>[]
          }
          delete: {
            args: Prisma.clienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          update: {
            args: Prisma.clienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          deleteMany: {
            args: Prisma.clienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.clienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>[]
          }
          upsert: {
            args: Prisma.clienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.clienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.clienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      celular_cliente: {
        payload: Prisma.$celular_clientePayload<ExtArgs>
        fields: Prisma.celular_clienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.celular_clienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celular_clientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.celular_clienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celular_clientePayload>
          }
          findFirst: {
            args: Prisma.celular_clienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celular_clientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.celular_clienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celular_clientePayload>
          }
          findMany: {
            args: Prisma.celular_clienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celular_clientePayload>[]
          }
          create: {
            args: Prisma.celular_clienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celular_clientePayload>
          }
          createMany: {
            args: Prisma.celular_clienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.celular_clienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celular_clientePayload>[]
          }
          delete: {
            args: Prisma.celular_clienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celular_clientePayload>
          }
          update: {
            args: Prisma.celular_clienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celular_clientePayload>
          }
          deleteMany: {
            args: Prisma.celular_clienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.celular_clienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.celular_clienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celular_clientePayload>[]
          }
          upsert: {
            args: Prisma.celular_clienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$celular_clientePayload>
          }
          aggregate: {
            args: Prisma.Celular_clienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCelular_cliente>
          }
          groupBy: {
            args: Prisma.celular_clienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<Celular_clienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.celular_clienteCountArgs<ExtArgs>
            result: $Utils.Optional<Celular_clienteCountAggregateOutputType> | number
          }
        }
      }
      endereco_cliente: {
        payload: Prisma.$endereco_clientePayload<ExtArgs>
        fields: Prisma.endereco_clienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.endereco_clienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereco_clientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.endereco_clienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereco_clientePayload>
          }
          findFirst: {
            args: Prisma.endereco_clienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereco_clientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.endereco_clienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereco_clientePayload>
          }
          findMany: {
            args: Prisma.endereco_clienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereco_clientePayload>[]
          }
          create: {
            args: Prisma.endereco_clienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereco_clientePayload>
          }
          createMany: {
            args: Prisma.endereco_clienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.endereco_clienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereco_clientePayload>[]
          }
          delete: {
            args: Prisma.endereco_clienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereco_clientePayload>
          }
          update: {
            args: Prisma.endereco_clienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereco_clientePayload>
          }
          deleteMany: {
            args: Prisma.endereco_clienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.endereco_clienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.endereco_clienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereco_clientePayload>[]
          }
          upsert: {
            args: Prisma.endereco_clienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$endereco_clientePayload>
          }
          aggregate: {
            args: Prisma.Endereco_clienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEndereco_cliente>
          }
          groupBy: {
            args: Prisma.endereco_clienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<Endereco_clienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.endereco_clienteCountArgs<ExtArgs>
            result: $Utils.Optional<Endereco_clienteCountAggregateOutputType> | number
          }
        }
      }
      rede_social_cliente: {
        payload: Prisma.$rede_social_clientePayload<ExtArgs>
        fields: Prisma.rede_social_clienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rede_social_clienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rede_social_clientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rede_social_clienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rede_social_clientePayload>
          }
          findFirst: {
            args: Prisma.rede_social_clienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rede_social_clientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rede_social_clienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rede_social_clientePayload>
          }
          findMany: {
            args: Prisma.rede_social_clienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rede_social_clientePayload>[]
          }
          create: {
            args: Prisma.rede_social_clienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rede_social_clientePayload>
          }
          createMany: {
            args: Prisma.rede_social_clienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rede_social_clienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rede_social_clientePayload>[]
          }
          delete: {
            args: Prisma.rede_social_clienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rede_social_clientePayload>
          }
          update: {
            args: Prisma.rede_social_clienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rede_social_clientePayload>
          }
          deleteMany: {
            args: Prisma.rede_social_clienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rede_social_clienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rede_social_clienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rede_social_clientePayload>[]
          }
          upsert: {
            args: Prisma.rede_social_clienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rede_social_clientePayload>
          }
          aggregate: {
            args: Prisma.Rede_social_clienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRede_social_cliente>
          }
          groupBy: {
            args: Prisma.rede_social_clienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<Rede_social_clienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.rede_social_clienteCountArgs<ExtArgs>
            result: $Utils.Optional<Rede_social_clienteCountAggregateOutputType> | number
          }
        }
      }
      configuracao: {
        payload: Prisma.$configuracaoPayload<ExtArgs>
        fields: Prisma.configuracaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.configuracaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.configuracaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracaoPayload>
          }
          findFirst: {
            args: Prisma.configuracaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.configuracaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracaoPayload>
          }
          findMany: {
            args: Prisma.configuracaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracaoPayload>[]
          }
          create: {
            args: Prisma.configuracaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracaoPayload>
          }
          createMany: {
            args: Prisma.configuracaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.configuracaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracaoPayload>[]
          }
          delete: {
            args: Prisma.configuracaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracaoPayload>
          }
          update: {
            args: Prisma.configuracaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracaoPayload>
          }
          deleteMany: {
            args: Prisma.configuracaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.configuracaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.configuracaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracaoPayload>[]
          }
          upsert: {
            args: Prisma.configuracaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracaoPayload>
          }
          aggregate: {
            args: Prisma.ConfiguracaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfiguracao>
          }
          groupBy: {
            args: Prisma.configuracaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfiguracaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.configuracaoCountArgs<ExtArgs>
            result: $Utils.Optional<ConfiguracaoCountAggregateOutputType> | number
          }
        }
      }
      emprestimo: {
        payload: Prisma.$emprestimoPayload<ExtArgs>
        fields: Prisma.emprestimoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.emprestimoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emprestimoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.emprestimoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emprestimoPayload>
          }
          findFirst: {
            args: Prisma.emprestimoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emprestimoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.emprestimoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emprestimoPayload>
          }
          findMany: {
            args: Prisma.emprestimoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emprestimoPayload>[]
          }
          create: {
            args: Prisma.emprestimoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emprestimoPayload>
          }
          createMany: {
            args: Prisma.emprestimoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.emprestimoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emprestimoPayload>[]
          }
          delete: {
            args: Prisma.emprestimoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emprestimoPayload>
          }
          update: {
            args: Prisma.emprestimoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emprestimoPayload>
          }
          deleteMany: {
            args: Prisma.emprestimoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.emprestimoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.emprestimoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emprestimoPayload>[]
          }
          upsert: {
            args: Prisma.emprestimoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emprestimoPayload>
          }
          aggregate: {
            args: Prisma.EmprestimoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmprestimo>
          }
          groupBy: {
            args: Prisma.emprestimoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmprestimoGroupByOutputType>[]
          }
          count: {
            args: Prisma.emprestimoCountArgs<ExtArgs>
            result: $Utils.Optional<EmprestimoCountAggregateOutputType> | number
          }
        }
      }
      pagamento: {
        payload: Prisma.$pagamentoPayload<ExtArgs>
        fields: Prisma.pagamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pagamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pagamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>
          }
          findFirst: {
            args: Prisma.pagamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pagamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>
          }
          findMany: {
            args: Prisma.pagamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>[]
          }
          create: {
            args: Prisma.pagamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>
          }
          createMany: {
            args: Prisma.pagamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pagamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>[]
          }
          delete: {
            args: Prisma.pagamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>
          }
          update: {
            args: Prisma.pagamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>
          }
          deleteMany: {
            args: Prisma.pagamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pagamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pagamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>[]
          }
          upsert: {
            args: Prisma.pagamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentoPayload>
          }
          aggregate: {
            args: Prisma.PagamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagamento>
          }
          groupBy: {
            args: Prisma.pagamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.pagamentoCountArgs<ExtArgs>
            result: $Utils.Optional<PagamentoCountAggregateOutputType> | number
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
    operador?: operadorOmit
    celular_operador?: celular_operadorOmit
    endereco_operador?: endereco_operadorOmit
    rede_social_operador?: rede_social_operadorOmit
    cliente?: clienteOmit
    celular_cliente?: celular_clienteOmit
    endereco_cliente?: endereco_clienteOmit
    rede_social_cliente?: rede_social_clienteOmit
    configuracao?: configuracaoOmit
    emprestimo?: emprestimoOmit
    pagamento?: pagamentoOmit
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
   * Count Type OperadorCountOutputType
   */

  export type OperadorCountOutputType = {
    celularOperadors: number
    enderecoOperadors: number
    redeSocialOperadors: number
    clientes: number
    configuracaos: number
    emprestimos: number
    pagamentos: number
  }

  export type OperadorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    celularOperadors?: boolean | OperadorCountOutputTypeCountCelularOperadorsArgs
    enderecoOperadors?: boolean | OperadorCountOutputTypeCountEnderecoOperadorsArgs
    redeSocialOperadors?: boolean | OperadorCountOutputTypeCountRedeSocialOperadorsArgs
    clientes?: boolean | OperadorCountOutputTypeCountClientesArgs
    configuracaos?: boolean | OperadorCountOutputTypeCountConfiguracaosArgs
    emprestimos?: boolean | OperadorCountOutputTypeCountEmprestimosArgs
    pagamentos?: boolean | OperadorCountOutputTypeCountPagamentosArgs
  }

  // Custom InputTypes
  /**
   * OperadorCountOutputType without action
   */
  export type OperadorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperadorCountOutputType
     */
    select?: OperadorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OperadorCountOutputType without action
   */
  export type OperadorCountOutputTypeCountCelularOperadorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: celular_operadorWhereInput
  }

  /**
   * OperadorCountOutputType without action
   */
  export type OperadorCountOutputTypeCountEnderecoOperadorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: endereco_operadorWhereInput
  }

  /**
   * OperadorCountOutputType without action
   */
  export type OperadorCountOutputTypeCountRedeSocialOperadorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rede_social_operadorWhereInput
  }

  /**
   * OperadorCountOutputType without action
   */
  export type OperadorCountOutputTypeCountClientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clienteWhereInput
  }

  /**
   * OperadorCountOutputType without action
   */
  export type OperadorCountOutputTypeCountConfiguracaosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: configuracaoWhereInput
  }

  /**
   * OperadorCountOutputType without action
   */
  export type OperadorCountOutputTypeCountEmprestimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: emprestimoWhereInput
  }

  /**
   * OperadorCountOutputType without action
   */
  export type OperadorCountOutputTypeCountPagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagamentoWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    celularClientes: number
    enderecoClientes: number
    redeSocialClientes: number
    emprestimos: number
    pagamentos: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    celularClientes?: boolean | ClienteCountOutputTypeCountCelularClientesArgs
    enderecoClientes?: boolean | ClienteCountOutputTypeCountEnderecoClientesArgs
    redeSocialClientes?: boolean | ClienteCountOutputTypeCountRedeSocialClientesArgs
    emprestimos?: boolean | ClienteCountOutputTypeCountEmprestimosArgs
    pagamentos?: boolean | ClienteCountOutputTypeCountPagamentosArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountCelularClientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: celular_clienteWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountEnderecoClientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: endereco_clienteWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountRedeSocialClientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rede_social_clienteWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountEmprestimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: emprestimoWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountPagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagamentoWhereInput
  }


  /**
   * Count Type EmprestimoCountOutputType
   */

  export type EmprestimoCountOutputType = {
    pagamentos: number
  }

  export type EmprestimoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagamentos?: boolean | EmprestimoCountOutputTypeCountPagamentosArgs
  }

  // Custom InputTypes
  /**
   * EmprestimoCountOutputType without action
   */
  export type EmprestimoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmprestimoCountOutputType
     */
    select?: EmprestimoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmprestimoCountOutputType without action
   */
  export type EmprestimoCountOutputTypeCountPagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagamentoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model operador
   */

  export type AggregateOperador = {
    _count: OperadorCountAggregateOutputType | null
    _min: OperadorMinAggregateOutputType | null
    _max: OperadorMaxAggregateOutputType | null
  }

  export type OperadorMinAggregateOutputType = {
    uuid: string | null
    nome_completo: string | null
    num_cpf: string | null
    num_cnpj: string | null
    data_nascimento: Date | null
    correio_eletronico: string | null
  }

  export type OperadorMaxAggregateOutputType = {
    uuid: string | null
    nome_completo: string | null
    num_cpf: string | null
    num_cnpj: string | null
    data_nascimento: Date | null
    correio_eletronico: string | null
  }

  export type OperadorCountAggregateOutputType = {
    uuid: number
    nome_completo: number
    num_cpf: number
    num_cnpj: number
    data_nascimento: number
    correio_eletronico: number
    _all: number
  }


  export type OperadorMinAggregateInputType = {
    uuid?: true
    nome_completo?: true
    num_cpf?: true
    num_cnpj?: true
    data_nascimento?: true
    correio_eletronico?: true
  }

  export type OperadorMaxAggregateInputType = {
    uuid?: true
    nome_completo?: true
    num_cpf?: true
    num_cnpj?: true
    data_nascimento?: true
    correio_eletronico?: true
  }

  export type OperadorCountAggregateInputType = {
    uuid?: true
    nome_completo?: true
    num_cpf?: true
    num_cnpj?: true
    data_nascimento?: true
    correio_eletronico?: true
    _all?: true
  }

  export type OperadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which operador to aggregate.
     */
    where?: operadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operadors to fetch.
     */
    orderBy?: operadorOrderByWithRelationInput | operadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: operadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned operadors
    **/
    _count?: true | OperadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OperadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OperadorMaxAggregateInputType
  }

  export type GetOperadorAggregateType<T extends OperadorAggregateArgs> = {
        [P in keyof T & keyof AggregateOperador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperador[P]>
      : GetScalarType<T[P], AggregateOperador[P]>
  }




  export type operadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: operadorWhereInput
    orderBy?: operadorOrderByWithAggregationInput | operadorOrderByWithAggregationInput[]
    by: OperadorScalarFieldEnum[] | OperadorScalarFieldEnum
    having?: operadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OperadorCountAggregateInputType | true
    _min?: OperadorMinAggregateInputType
    _max?: OperadorMaxAggregateInputType
  }

  export type OperadorGroupByOutputType = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj: string | null
    data_nascimento: Date | null
    correio_eletronico: string
    _count: OperadorCountAggregateOutputType | null
    _min: OperadorMinAggregateOutputType | null
    _max: OperadorMaxAggregateOutputType | null
  }

  type GetOperadorGroupByPayload<T extends operadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OperadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OperadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OperadorGroupByOutputType[P]>
            : GetScalarType<T[P], OperadorGroupByOutputType[P]>
        }
      >
    >


  export type operadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    nome_completo?: boolean
    num_cpf?: boolean
    num_cnpj?: boolean
    data_nascimento?: boolean
    correio_eletronico?: boolean
    celularOperadors?: boolean | operador$celularOperadorsArgs<ExtArgs>
    enderecoOperadors?: boolean | operador$enderecoOperadorsArgs<ExtArgs>
    redeSocialOperadors?: boolean | operador$redeSocialOperadorsArgs<ExtArgs>
    clientes?: boolean | operador$clientesArgs<ExtArgs>
    configuracaos?: boolean | operador$configuracaosArgs<ExtArgs>
    emprestimos?: boolean | operador$emprestimosArgs<ExtArgs>
    pagamentos?: boolean | operador$pagamentosArgs<ExtArgs>
    _count?: boolean | OperadorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operador"]>

  export type operadorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    nome_completo?: boolean
    num_cpf?: boolean
    num_cnpj?: boolean
    data_nascimento?: boolean
    correio_eletronico?: boolean
  }, ExtArgs["result"]["operador"]>

  export type operadorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    nome_completo?: boolean
    num_cpf?: boolean
    num_cnpj?: boolean
    data_nascimento?: boolean
    correio_eletronico?: boolean
  }, ExtArgs["result"]["operador"]>

  export type operadorSelectScalar = {
    uuid?: boolean
    nome_completo?: boolean
    num_cpf?: boolean
    num_cnpj?: boolean
    data_nascimento?: boolean
    correio_eletronico?: boolean
  }

  export type operadorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "nome_completo" | "num_cpf" | "num_cnpj" | "data_nascimento" | "correio_eletronico", ExtArgs["result"]["operador"]>
  export type operadorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    celularOperadors?: boolean | operador$celularOperadorsArgs<ExtArgs>
    enderecoOperadors?: boolean | operador$enderecoOperadorsArgs<ExtArgs>
    redeSocialOperadors?: boolean | operador$redeSocialOperadorsArgs<ExtArgs>
    clientes?: boolean | operador$clientesArgs<ExtArgs>
    configuracaos?: boolean | operador$configuracaosArgs<ExtArgs>
    emprestimos?: boolean | operador$emprestimosArgs<ExtArgs>
    pagamentos?: boolean | operador$pagamentosArgs<ExtArgs>
    _count?: boolean | OperadorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type operadorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type operadorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $operadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "operador"
    objects: {
      celularOperadors: Prisma.$celular_operadorPayload<ExtArgs>[]
      enderecoOperadors: Prisma.$endereco_operadorPayload<ExtArgs>[]
      redeSocialOperadors: Prisma.$rede_social_operadorPayload<ExtArgs>[]
      clientes: Prisma.$clientePayload<ExtArgs>[]
      configuracaos: Prisma.$configuracaoPayload<ExtArgs>[]
      emprestimos: Prisma.$emprestimoPayload<ExtArgs>[]
      pagamentos: Prisma.$pagamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      nome_completo: string
      num_cpf: string
      num_cnpj: string | null
      data_nascimento: Date | null
      correio_eletronico: string
    }, ExtArgs["result"]["operador"]>
    composites: {}
  }

  type operadorGetPayload<S extends boolean | null | undefined | operadorDefaultArgs> = $Result.GetResult<Prisma.$operadorPayload, S>

  type operadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<operadorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OperadorCountAggregateInputType | true
    }

  export interface operadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['operador'], meta: { name: 'operador' } }
    /**
     * Find zero or one Operador that matches the filter.
     * @param {operadorFindUniqueArgs} args - Arguments to find a Operador
     * @example
     * // Get one Operador
     * const operador = await prisma.operador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends operadorFindUniqueArgs>(args: SelectSubset<T, operadorFindUniqueArgs<ExtArgs>>): Prisma__operadorClient<$Result.GetResult<Prisma.$operadorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Operador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {operadorFindUniqueOrThrowArgs} args - Arguments to find a Operador
     * @example
     * // Get one Operador
     * const operador = await prisma.operador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends operadorFindUniqueOrThrowArgs>(args: SelectSubset<T, operadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__operadorClient<$Result.GetResult<Prisma.$operadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operadorFindFirstArgs} args - Arguments to find a Operador
     * @example
     * // Get one Operador
     * const operador = await prisma.operador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends operadorFindFirstArgs>(args?: SelectSubset<T, operadorFindFirstArgs<ExtArgs>>): Prisma__operadorClient<$Result.GetResult<Prisma.$operadorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operadorFindFirstOrThrowArgs} args - Arguments to find a Operador
     * @example
     * // Get one Operador
     * const operador = await prisma.operador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends operadorFindFirstOrThrowArgs>(args?: SelectSubset<T, operadorFindFirstOrThrowArgs<ExtArgs>>): Prisma__operadorClient<$Result.GetResult<Prisma.$operadorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Operadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operadors
     * const operadors = await prisma.operador.findMany()
     * 
     * // Get first 10 Operadors
     * const operadors = await prisma.operador.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const operadorWithUuidOnly = await prisma.operador.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends operadorFindManyArgs>(args?: SelectSubset<T, operadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Operador.
     * @param {operadorCreateArgs} args - Arguments to create a Operador.
     * @example
     * // Create one Operador
     * const Operador = await prisma.operador.create({
     *   data: {
     *     // ... data to create a Operador
     *   }
     * })
     * 
     */
    create<T extends operadorCreateArgs>(args: SelectSubset<T, operadorCreateArgs<ExtArgs>>): Prisma__operadorClient<$Result.GetResult<Prisma.$operadorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Operadors.
     * @param {operadorCreateManyArgs} args - Arguments to create many Operadors.
     * @example
     * // Create many Operadors
     * const operador = await prisma.operador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends operadorCreateManyArgs>(args?: SelectSubset<T, operadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Operadors and returns the data saved in the database.
     * @param {operadorCreateManyAndReturnArgs} args - Arguments to create many Operadors.
     * @example
     * // Create many Operadors
     * const operador = await prisma.operador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Operadors and only return the `uuid`
     * const operadorWithUuidOnly = await prisma.operador.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends operadorCreateManyAndReturnArgs>(args?: SelectSubset<T, operadorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operadorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Operador.
     * @param {operadorDeleteArgs} args - Arguments to delete one Operador.
     * @example
     * // Delete one Operador
     * const Operador = await prisma.operador.delete({
     *   where: {
     *     // ... filter to delete one Operador
     *   }
     * })
     * 
     */
    delete<T extends operadorDeleteArgs>(args: SelectSubset<T, operadorDeleteArgs<ExtArgs>>): Prisma__operadorClient<$Result.GetResult<Prisma.$operadorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Operador.
     * @param {operadorUpdateArgs} args - Arguments to update one Operador.
     * @example
     * // Update one Operador
     * const operador = await prisma.operador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends operadorUpdateArgs>(args: SelectSubset<T, operadorUpdateArgs<ExtArgs>>): Prisma__operadorClient<$Result.GetResult<Prisma.$operadorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Operadors.
     * @param {operadorDeleteManyArgs} args - Arguments to filter Operadors to delete.
     * @example
     * // Delete a few Operadors
     * const { count } = await prisma.operador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends operadorDeleteManyArgs>(args?: SelectSubset<T, operadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operadors
     * const operador = await prisma.operador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends operadorUpdateManyArgs>(args: SelectSubset<T, operadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operadors and returns the data updated in the database.
     * @param {operadorUpdateManyAndReturnArgs} args - Arguments to update many Operadors.
     * @example
     * // Update many Operadors
     * const operador = await prisma.operador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Operadors and only return the `uuid`
     * const operadorWithUuidOnly = await prisma.operador.updateManyAndReturn({
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
    updateManyAndReturn<T extends operadorUpdateManyAndReturnArgs>(args: SelectSubset<T, operadorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operadorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Operador.
     * @param {operadorUpsertArgs} args - Arguments to update or create a Operador.
     * @example
     * // Update or create a Operador
     * const operador = await prisma.operador.upsert({
     *   create: {
     *     // ... data to create a Operador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operador we want to update
     *   }
     * })
     */
    upsert<T extends operadorUpsertArgs>(args: SelectSubset<T, operadorUpsertArgs<ExtArgs>>): Prisma__operadorClient<$Result.GetResult<Prisma.$operadorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Operadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operadorCountArgs} args - Arguments to filter Operadors to count.
     * @example
     * // Count the number of Operadors
     * const count = await prisma.operador.count({
     *   where: {
     *     // ... the filter for the Operadors we want to count
     *   }
     * })
    **/
    count<T extends operadorCountArgs>(
      args?: Subset<T, operadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Operador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OperadorAggregateArgs>(args: Subset<T, OperadorAggregateArgs>): Prisma.PrismaPromise<GetOperadorAggregateType<T>>

    /**
     * Group by Operador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operadorGroupByArgs} args - Group by arguments.
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
      T extends operadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: operadorGroupByArgs['orderBy'] }
        : { orderBy?: operadorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, operadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the operador model
   */
  readonly fields: operadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for operador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__operadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    celularOperadors<T extends operador$celularOperadorsArgs<ExtArgs> = {}>(args?: Subset<T, operador$celularOperadorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$celular_operadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enderecoOperadors<T extends operador$enderecoOperadorsArgs<ExtArgs> = {}>(args?: Subset<T, operador$enderecoOperadorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$endereco_operadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    redeSocialOperadors<T extends operador$redeSocialOperadorsArgs<ExtArgs> = {}>(args?: Subset<T, operador$redeSocialOperadorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rede_social_operadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clientes<T extends operador$clientesArgs<ExtArgs> = {}>(args?: Subset<T, operador$clientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    configuracaos<T extends operador$configuracaosArgs<ExtArgs> = {}>(args?: Subset<T, operador$configuracaosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$configuracaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    emprestimos<T extends operador$emprestimosArgs<ExtArgs> = {}>(args?: Subset<T, operador$emprestimosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$emprestimoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pagamentos<T extends operador$pagamentosArgs<ExtArgs> = {}>(args?: Subset<T, operador$pagamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the operador model
   */
  interface operadorFieldRefs {
    readonly uuid: FieldRef<"operador", 'String'>
    readonly nome_completo: FieldRef<"operador", 'String'>
    readonly num_cpf: FieldRef<"operador", 'String'>
    readonly num_cnpj: FieldRef<"operador", 'String'>
    readonly data_nascimento: FieldRef<"operador", 'DateTime'>
    readonly correio_eletronico: FieldRef<"operador", 'String'>
  }
    

  // Custom InputTypes
  /**
   * operador findUnique
   */
  export type operadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operador
     */
    select?: operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operador
     */
    omit?: operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operadorInclude<ExtArgs> | null
    /**
     * Filter, which operador to fetch.
     */
    where: operadorWhereUniqueInput
  }

  /**
   * operador findUniqueOrThrow
   */
  export type operadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operador
     */
    select?: operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operador
     */
    omit?: operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operadorInclude<ExtArgs> | null
    /**
     * Filter, which operador to fetch.
     */
    where: operadorWhereUniqueInput
  }

  /**
   * operador findFirst
   */
  export type operadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operador
     */
    select?: operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operador
     */
    omit?: operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operadorInclude<ExtArgs> | null
    /**
     * Filter, which operador to fetch.
     */
    where?: operadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operadors to fetch.
     */
    orderBy?: operadorOrderByWithRelationInput | operadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for operadors.
     */
    cursor?: operadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of operadors.
     */
    distinct?: OperadorScalarFieldEnum | OperadorScalarFieldEnum[]
  }

  /**
   * operador findFirstOrThrow
   */
  export type operadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operador
     */
    select?: operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operador
     */
    omit?: operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operadorInclude<ExtArgs> | null
    /**
     * Filter, which operador to fetch.
     */
    where?: operadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operadors to fetch.
     */
    orderBy?: operadorOrderByWithRelationInput | operadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for operadors.
     */
    cursor?: operadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of operadors.
     */
    distinct?: OperadorScalarFieldEnum | OperadorScalarFieldEnum[]
  }

  /**
   * operador findMany
   */
  export type operadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operador
     */
    select?: operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operador
     */
    omit?: operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operadorInclude<ExtArgs> | null
    /**
     * Filter, which operadors to fetch.
     */
    where?: operadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operadors to fetch.
     */
    orderBy?: operadorOrderByWithRelationInput | operadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing operadors.
     */
    cursor?: operadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operadors.
     */
    skip?: number
    distinct?: OperadorScalarFieldEnum | OperadorScalarFieldEnum[]
  }

  /**
   * operador create
   */
  export type operadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operador
     */
    select?: operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operador
     */
    omit?: operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operadorInclude<ExtArgs> | null
    /**
     * The data needed to create a operador.
     */
    data: XOR<operadorCreateInput, operadorUncheckedCreateInput>
  }

  /**
   * operador createMany
   */
  export type operadorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many operadors.
     */
    data: operadorCreateManyInput | operadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * operador createManyAndReturn
   */
  export type operadorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operador
     */
    select?: operadorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the operador
     */
    omit?: operadorOmit<ExtArgs> | null
    /**
     * The data used to create many operadors.
     */
    data: operadorCreateManyInput | operadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * operador update
   */
  export type operadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operador
     */
    select?: operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operador
     */
    omit?: operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operadorInclude<ExtArgs> | null
    /**
     * The data needed to update a operador.
     */
    data: XOR<operadorUpdateInput, operadorUncheckedUpdateInput>
    /**
     * Choose, which operador to update.
     */
    where: operadorWhereUniqueInput
  }

  /**
   * operador updateMany
   */
  export type operadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update operadors.
     */
    data: XOR<operadorUpdateManyMutationInput, operadorUncheckedUpdateManyInput>
    /**
     * Filter which operadors to update
     */
    where?: operadorWhereInput
    /**
     * Limit how many operadors to update.
     */
    limit?: number
  }

  /**
   * operador updateManyAndReturn
   */
  export type operadorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operador
     */
    select?: operadorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the operador
     */
    omit?: operadorOmit<ExtArgs> | null
    /**
     * The data used to update operadors.
     */
    data: XOR<operadorUpdateManyMutationInput, operadorUncheckedUpdateManyInput>
    /**
     * Filter which operadors to update
     */
    where?: operadorWhereInput
    /**
     * Limit how many operadors to update.
     */
    limit?: number
  }

  /**
   * operador upsert
   */
  export type operadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operador
     */
    select?: operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operador
     */
    omit?: operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operadorInclude<ExtArgs> | null
    /**
     * The filter to search for the operador to update in case it exists.
     */
    where: operadorWhereUniqueInput
    /**
     * In case the operador found by the `where` argument doesn't exist, create a new operador with this data.
     */
    create: XOR<operadorCreateInput, operadorUncheckedCreateInput>
    /**
     * In case the operador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<operadorUpdateInput, operadorUncheckedUpdateInput>
  }

  /**
   * operador delete
   */
  export type operadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operador
     */
    select?: operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operador
     */
    omit?: operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operadorInclude<ExtArgs> | null
    /**
     * Filter which operador to delete.
     */
    where: operadorWhereUniqueInput
  }

  /**
   * operador deleteMany
   */
  export type operadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which operadors to delete
     */
    where?: operadorWhereInput
    /**
     * Limit how many operadors to delete.
     */
    limit?: number
  }

  /**
   * operador.celularOperadors
   */
  export type operador$celularOperadorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the celular_operador
     */
    select?: celular_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the celular_operador
     */
    omit?: celular_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: celular_operadorInclude<ExtArgs> | null
    where?: celular_operadorWhereInput
    orderBy?: celular_operadorOrderByWithRelationInput | celular_operadorOrderByWithRelationInput[]
    cursor?: celular_operadorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Celular_operadorScalarFieldEnum | Celular_operadorScalarFieldEnum[]
  }

  /**
   * operador.enderecoOperadors
   */
  export type operador$enderecoOperadorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco_operador
     */
    select?: endereco_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco_operador
     */
    omit?: endereco_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereco_operadorInclude<ExtArgs> | null
    where?: endereco_operadorWhereInput
    orderBy?: endereco_operadorOrderByWithRelationInput | endereco_operadorOrderByWithRelationInput[]
    cursor?: endereco_operadorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Endereco_operadorScalarFieldEnum | Endereco_operadorScalarFieldEnum[]
  }

  /**
   * operador.redeSocialOperadors
   */
  export type operador$redeSocialOperadorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rede_social_operador
     */
    select?: rede_social_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rede_social_operador
     */
    omit?: rede_social_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rede_social_operadorInclude<ExtArgs> | null
    where?: rede_social_operadorWhereInput
    orderBy?: rede_social_operadorOrderByWithRelationInput | rede_social_operadorOrderByWithRelationInput[]
    cursor?: rede_social_operadorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rede_social_operadorScalarFieldEnum | Rede_social_operadorScalarFieldEnum[]
  }

  /**
   * operador.clientes
   */
  export type operador$clientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    where?: clienteWhereInput
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    cursor?: clienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * operador.configuracaos
   */
  export type operador$configuracaosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracao
     */
    select?: configuracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracao
     */
    omit?: configuracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracaoInclude<ExtArgs> | null
    where?: configuracaoWhereInput
    orderBy?: configuracaoOrderByWithRelationInput | configuracaoOrderByWithRelationInput[]
    cursor?: configuracaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConfiguracaoScalarFieldEnum | ConfiguracaoScalarFieldEnum[]
  }

  /**
   * operador.emprestimos
   */
  export type operador$emprestimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emprestimo
     */
    select?: emprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emprestimo
     */
    omit?: emprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emprestimoInclude<ExtArgs> | null
    where?: emprestimoWhereInput
    orderBy?: emprestimoOrderByWithRelationInput | emprestimoOrderByWithRelationInput[]
    cursor?: emprestimoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmprestimoScalarFieldEnum | EmprestimoScalarFieldEnum[]
  }

  /**
   * operador.pagamentos
   */
  export type operador$pagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento
     */
    omit?: pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    where?: pagamentoWhereInput
    orderBy?: pagamentoOrderByWithRelationInput | pagamentoOrderByWithRelationInput[]
    cursor?: pagamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * operador without action
   */
  export type operadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operador
     */
    select?: operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operador
     */
    omit?: operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operadorInclude<ExtArgs> | null
  }


  /**
   * Model celular_operador
   */

  export type AggregateCelular_operador = {
    _count: Celular_operadorCountAggregateOutputType | null
    _avg: Celular_operadorAvgAggregateOutputType | null
    _sum: Celular_operadorSumAggregateOutputType | null
    _min: Celular_operadorMinAggregateOutputType | null
    _max: Celular_operadorMaxAggregateOutputType | null
  }

  export type Celular_operadorAvgAggregateOutputType = {
    id: number | null
  }

  export type Celular_operadorSumAggregateOutputType = {
    id: number | null
  }

  export type Celular_operadorMinAggregateOutputType = {
    id: number | null
    num_cel: string | null
    status: boolean | null
    uuid_operador: string | null
  }

  export type Celular_operadorMaxAggregateOutputType = {
    id: number | null
    num_cel: string | null
    status: boolean | null
    uuid_operador: string | null
  }

  export type Celular_operadorCountAggregateOutputType = {
    id: number
    num_cel: number
    status: number
    uuid_operador: number
    _all: number
  }


  export type Celular_operadorAvgAggregateInputType = {
    id?: true
  }

  export type Celular_operadorSumAggregateInputType = {
    id?: true
  }

  export type Celular_operadorMinAggregateInputType = {
    id?: true
    num_cel?: true
    status?: true
    uuid_operador?: true
  }

  export type Celular_operadorMaxAggregateInputType = {
    id?: true
    num_cel?: true
    status?: true
    uuid_operador?: true
  }

  export type Celular_operadorCountAggregateInputType = {
    id?: true
    num_cel?: true
    status?: true
    uuid_operador?: true
    _all?: true
  }

  export type Celular_operadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which celular_operador to aggregate.
     */
    where?: celular_operadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of celular_operadors to fetch.
     */
    orderBy?: celular_operadorOrderByWithRelationInput | celular_operadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: celular_operadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` celular_operadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` celular_operadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned celular_operadors
    **/
    _count?: true | Celular_operadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Celular_operadorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Celular_operadorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Celular_operadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Celular_operadorMaxAggregateInputType
  }

  export type GetCelular_operadorAggregateType<T extends Celular_operadorAggregateArgs> = {
        [P in keyof T & keyof AggregateCelular_operador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCelular_operador[P]>
      : GetScalarType<T[P], AggregateCelular_operador[P]>
  }




  export type celular_operadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: celular_operadorWhereInput
    orderBy?: celular_operadorOrderByWithAggregationInput | celular_operadorOrderByWithAggregationInput[]
    by: Celular_operadorScalarFieldEnum[] | Celular_operadorScalarFieldEnum
    having?: celular_operadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Celular_operadorCountAggregateInputType | true
    _avg?: Celular_operadorAvgAggregateInputType
    _sum?: Celular_operadorSumAggregateInputType
    _min?: Celular_operadorMinAggregateInputType
    _max?: Celular_operadorMaxAggregateInputType
  }

  export type Celular_operadorGroupByOutputType = {
    id: number
    num_cel: string
    status: boolean
    uuid_operador: string
    _count: Celular_operadorCountAggregateOutputType | null
    _avg: Celular_operadorAvgAggregateOutputType | null
    _sum: Celular_operadorSumAggregateOutputType | null
    _min: Celular_operadorMinAggregateOutputType | null
    _max: Celular_operadorMaxAggregateOutputType | null
  }

  type GetCelular_operadorGroupByPayload<T extends celular_operadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Celular_operadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Celular_operadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Celular_operadorGroupByOutputType[P]>
            : GetScalarType<T[P], Celular_operadorGroupByOutputType[P]>
        }
      >
    >


  export type celular_operadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    num_cel?: boolean
    status?: boolean
    uuid_operador?: boolean
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["celular_operador"]>

  export type celular_operadorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    num_cel?: boolean
    status?: boolean
    uuid_operador?: boolean
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["celular_operador"]>

  export type celular_operadorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    num_cel?: boolean
    status?: boolean
    uuid_operador?: boolean
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["celular_operador"]>

  export type celular_operadorSelectScalar = {
    id?: boolean
    num_cel?: boolean
    status?: boolean
    uuid_operador?: boolean
  }

  export type celular_operadorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "num_cel" | "status" | "uuid_operador", ExtArgs["result"]["celular_operador"]>
  export type celular_operadorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }
  export type celular_operadorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }
  export type celular_operadorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }

  export type $celular_operadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "celular_operador"
    objects: {
      operador: Prisma.$operadorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      num_cel: string
      status: boolean
      uuid_operador: string
    }, ExtArgs["result"]["celular_operador"]>
    composites: {}
  }

  type celular_operadorGetPayload<S extends boolean | null | undefined | celular_operadorDefaultArgs> = $Result.GetResult<Prisma.$celular_operadorPayload, S>

  type celular_operadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<celular_operadorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Celular_operadorCountAggregateInputType | true
    }

  export interface celular_operadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['celular_operador'], meta: { name: 'celular_operador' } }
    /**
     * Find zero or one Celular_operador that matches the filter.
     * @param {celular_operadorFindUniqueArgs} args - Arguments to find a Celular_operador
     * @example
     * // Get one Celular_operador
     * const celular_operador = await prisma.celular_operador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends celular_operadorFindUniqueArgs>(args: SelectSubset<T, celular_operadorFindUniqueArgs<ExtArgs>>): Prisma__celular_operadorClient<$Result.GetResult<Prisma.$celular_operadorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Celular_operador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {celular_operadorFindUniqueOrThrowArgs} args - Arguments to find a Celular_operador
     * @example
     * // Get one Celular_operador
     * const celular_operador = await prisma.celular_operador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends celular_operadorFindUniqueOrThrowArgs>(args: SelectSubset<T, celular_operadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__celular_operadorClient<$Result.GetResult<Prisma.$celular_operadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Celular_operador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {celular_operadorFindFirstArgs} args - Arguments to find a Celular_operador
     * @example
     * // Get one Celular_operador
     * const celular_operador = await prisma.celular_operador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends celular_operadorFindFirstArgs>(args?: SelectSubset<T, celular_operadorFindFirstArgs<ExtArgs>>): Prisma__celular_operadorClient<$Result.GetResult<Prisma.$celular_operadorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Celular_operador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {celular_operadorFindFirstOrThrowArgs} args - Arguments to find a Celular_operador
     * @example
     * // Get one Celular_operador
     * const celular_operador = await prisma.celular_operador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends celular_operadorFindFirstOrThrowArgs>(args?: SelectSubset<T, celular_operadorFindFirstOrThrowArgs<ExtArgs>>): Prisma__celular_operadorClient<$Result.GetResult<Prisma.$celular_operadorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Celular_operadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {celular_operadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Celular_operadors
     * const celular_operadors = await prisma.celular_operador.findMany()
     * 
     * // Get first 10 Celular_operadors
     * const celular_operadors = await prisma.celular_operador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const celular_operadorWithIdOnly = await prisma.celular_operador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends celular_operadorFindManyArgs>(args?: SelectSubset<T, celular_operadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$celular_operadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Celular_operador.
     * @param {celular_operadorCreateArgs} args - Arguments to create a Celular_operador.
     * @example
     * // Create one Celular_operador
     * const Celular_operador = await prisma.celular_operador.create({
     *   data: {
     *     // ... data to create a Celular_operador
     *   }
     * })
     * 
     */
    create<T extends celular_operadorCreateArgs>(args: SelectSubset<T, celular_operadorCreateArgs<ExtArgs>>): Prisma__celular_operadorClient<$Result.GetResult<Prisma.$celular_operadorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Celular_operadors.
     * @param {celular_operadorCreateManyArgs} args - Arguments to create many Celular_operadors.
     * @example
     * // Create many Celular_operadors
     * const celular_operador = await prisma.celular_operador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends celular_operadorCreateManyArgs>(args?: SelectSubset<T, celular_operadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Celular_operadors and returns the data saved in the database.
     * @param {celular_operadorCreateManyAndReturnArgs} args - Arguments to create many Celular_operadors.
     * @example
     * // Create many Celular_operadors
     * const celular_operador = await prisma.celular_operador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Celular_operadors and only return the `id`
     * const celular_operadorWithIdOnly = await prisma.celular_operador.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends celular_operadorCreateManyAndReturnArgs>(args?: SelectSubset<T, celular_operadorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$celular_operadorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Celular_operador.
     * @param {celular_operadorDeleteArgs} args - Arguments to delete one Celular_operador.
     * @example
     * // Delete one Celular_operador
     * const Celular_operador = await prisma.celular_operador.delete({
     *   where: {
     *     // ... filter to delete one Celular_operador
     *   }
     * })
     * 
     */
    delete<T extends celular_operadorDeleteArgs>(args: SelectSubset<T, celular_operadorDeleteArgs<ExtArgs>>): Prisma__celular_operadorClient<$Result.GetResult<Prisma.$celular_operadorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Celular_operador.
     * @param {celular_operadorUpdateArgs} args - Arguments to update one Celular_operador.
     * @example
     * // Update one Celular_operador
     * const celular_operador = await prisma.celular_operador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends celular_operadorUpdateArgs>(args: SelectSubset<T, celular_operadorUpdateArgs<ExtArgs>>): Prisma__celular_operadorClient<$Result.GetResult<Prisma.$celular_operadorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Celular_operadors.
     * @param {celular_operadorDeleteManyArgs} args - Arguments to filter Celular_operadors to delete.
     * @example
     * // Delete a few Celular_operadors
     * const { count } = await prisma.celular_operador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends celular_operadorDeleteManyArgs>(args?: SelectSubset<T, celular_operadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Celular_operadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {celular_operadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Celular_operadors
     * const celular_operador = await prisma.celular_operador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends celular_operadorUpdateManyArgs>(args: SelectSubset<T, celular_operadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Celular_operadors and returns the data updated in the database.
     * @param {celular_operadorUpdateManyAndReturnArgs} args - Arguments to update many Celular_operadors.
     * @example
     * // Update many Celular_operadors
     * const celular_operador = await prisma.celular_operador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Celular_operadors and only return the `id`
     * const celular_operadorWithIdOnly = await prisma.celular_operador.updateManyAndReturn({
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
    updateManyAndReturn<T extends celular_operadorUpdateManyAndReturnArgs>(args: SelectSubset<T, celular_operadorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$celular_operadorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Celular_operador.
     * @param {celular_operadorUpsertArgs} args - Arguments to update or create a Celular_operador.
     * @example
     * // Update or create a Celular_operador
     * const celular_operador = await prisma.celular_operador.upsert({
     *   create: {
     *     // ... data to create a Celular_operador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Celular_operador we want to update
     *   }
     * })
     */
    upsert<T extends celular_operadorUpsertArgs>(args: SelectSubset<T, celular_operadorUpsertArgs<ExtArgs>>): Prisma__celular_operadorClient<$Result.GetResult<Prisma.$celular_operadorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Celular_operadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {celular_operadorCountArgs} args - Arguments to filter Celular_operadors to count.
     * @example
     * // Count the number of Celular_operadors
     * const count = await prisma.celular_operador.count({
     *   where: {
     *     // ... the filter for the Celular_operadors we want to count
     *   }
     * })
    **/
    count<T extends celular_operadorCountArgs>(
      args?: Subset<T, celular_operadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Celular_operadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Celular_operador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Celular_operadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Celular_operadorAggregateArgs>(args: Subset<T, Celular_operadorAggregateArgs>): Prisma.PrismaPromise<GetCelular_operadorAggregateType<T>>

    /**
     * Group by Celular_operador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {celular_operadorGroupByArgs} args - Group by arguments.
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
      T extends celular_operadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: celular_operadorGroupByArgs['orderBy'] }
        : { orderBy?: celular_operadorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, celular_operadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCelular_operadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the celular_operador model
   */
  readonly fields: celular_operadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for celular_operador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__celular_operadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    operador<T extends operadorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, operadorDefaultArgs<ExtArgs>>): Prisma__operadorClient<$Result.GetResult<Prisma.$operadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the celular_operador model
   */
  interface celular_operadorFieldRefs {
    readonly id: FieldRef<"celular_operador", 'Int'>
    readonly num_cel: FieldRef<"celular_operador", 'String'>
    readonly status: FieldRef<"celular_operador", 'Boolean'>
    readonly uuid_operador: FieldRef<"celular_operador", 'String'>
  }
    

  // Custom InputTypes
  /**
   * celular_operador findUnique
   */
  export type celular_operadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the celular_operador
     */
    select?: celular_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the celular_operador
     */
    omit?: celular_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: celular_operadorInclude<ExtArgs> | null
    /**
     * Filter, which celular_operador to fetch.
     */
    where: celular_operadorWhereUniqueInput
  }

  /**
   * celular_operador findUniqueOrThrow
   */
  export type celular_operadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the celular_operador
     */
    select?: celular_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the celular_operador
     */
    omit?: celular_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: celular_operadorInclude<ExtArgs> | null
    /**
     * Filter, which celular_operador to fetch.
     */
    where: celular_operadorWhereUniqueInput
  }

  /**
   * celular_operador findFirst
   */
  export type celular_operadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the celular_operador
     */
    select?: celular_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the celular_operador
     */
    omit?: celular_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: celular_operadorInclude<ExtArgs> | null
    /**
     * Filter, which celular_operador to fetch.
     */
    where?: celular_operadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of celular_operadors to fetch.
     */
    orderBy?: celular_operadorOrderByWithRelationInput | celular_operadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for celular_operadors.
     */
    cursor?: celular_operadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` celular_operadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` celular_operadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of celular_operadors.
     */
    distinct?: Celular_operadorScalarFieldEnum | Celular_operadorScalarFieldEnum[]
  }

  /**
   * celular_operador findFirstOrThrow
   */
  export type celular_operadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the celular_operador
     */
    select?: celular_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the celular_operador
     */
    omit?: celular_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: celular_operadorInclude<ExtArgs> | null
    /**
     * Filter, which celular_operador to fetch.
     */
    where?: celular_operadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of celular_operadors to fetch.
     */
    orderBy?: celular_operadorOrderByWithRelationInput | celular_operadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for celular_operadors.
     */
    cursor?: celular_operadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` celular_operadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` celular_operadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of celular_operadors.
     */
    distinct?: Celular_operadorScalarFieldEnum | Celular_operadorScalarFieldEnum[]
  }

  /**
   * celular_operador findMany
   */
  export type celular_operadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the celular_operador
     */
    select?: celular_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the celular_operador
     */
    omit?: celular_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: celular_operadorInclude<ExtArgs> | null
    /**
     * Filter, which celular_operadors to fetch.
     */
    where?: celular_operadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of celular_operadors to fetch.
     */
    orderBy?: celular_operadorOrderByWithRelationInput | celular_operadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing celular_operadors.
     */
    cursor?: celular_operadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` celular_operadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` celular_operadors.
     */
    skip?: number
    distinct?: Celular_operadorScalarFieldEnum | Celular_operadorScalarFieldEnum[]
  }

  /**
   * celular_operador create
   */
  export type celular_operadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the celular_operador
     */
    select?: celular_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the celular_operador
     */
    omit?: celular_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: celular_operadorInclude<ExtArgs> | null
    /**
     * The data needed to create a celular_operador.
     */
    data: XOR<celular_operadorCreateInput, celular_operadorUncheckedCreateInput>
  }

  /**
   * celular_operador createMany
   */
  export type celular_operadorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many celular_operadors.
     */
    data: celular_operadorCreateManyInput | celular_operadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * celular_operador createManyAndReturn
   */
  export type celular_operadorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the celular_operador
     */
    select?: celular_operadorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the celular_operador
     */
    omit?: celular_operadorOmit<ExtArgs> | null
    /**
     * The data used to create many celular_operadors.
     */
    data: celular_operadorCreateManyInput | celular_operadorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: celular_operadorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * celular_operador update
   */
  export type celular_operadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the celular_operador
     */
    select?: celular_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the celular_operador
     */
    omit?: celular_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: celular_operadorInclude<ExtArgs> | null
    /**
     * The data needed to update a celular_operador.
     */
    data: XOR<celular_operadorUpdateInput, celular_operadorUncheckedUpdateInput>
    /**
     * Choose, which celular_operador to update.
     */
    where: celular_operadorWhereUniqueInput
  }

  /**
   * celular_operador updateMany
   */
  export type celular_operadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update celular_operadors.
     */
    data: XOR<celular_operadorUpdateManyMutationInput, celular_operadorUncheckedUpdateManyInput>
    /**
     * Filter which celular_operadors to update
     */
    where?: celular_operadorWhereInput
    /**
     * Limit how many celular_operadors to update.
     */
    limit?: number
  }

  /**
   * celular_operador updateManyAndReturn
   */
  export type celular_operadorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the celular_operador
     */
    select?: celular_operadorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the celular_operador
     */
    omit?: celular_operadorOmit<ExtArgs> | null
    /**
     * The data used to update celular_operadors.
     */
    data: XOR<celular_operadorUpdateManyMutationInput, celular_operadorUncheckedUpdateManyInput>
    /**
     * Filter which celular_operadors to update
     */
    where?: celular_operadorWhereInput
    /**
     * Limit how many celular_operadors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: celular_operadorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * celular_operador upsert
   */
  export type celular_operadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the celular_operador
     */
    select?: celular_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the celular_operador
     */
    omit?: celular_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: celular_operadorInclude<ExtArgs> | null
    /**
     * The filter to search for the celular_operador to update in case it exists.
     */
    where: celular_operadorWhereUniqueInput
    /**
     * In case the celular_operador found by the `where` argument doesn't exist, create a new celular_operador with this data.
     */
    create: XOR<celular_operadorCreateInput, celular_operadorUncheckedCreateInput>
    /**
     * In case the celular_operador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<celular_operadorUpdateInput, celular_operadorUncheckedUpdateInput>
  }

  /**
   * celular_operador delete
   */
  export type celular_operadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the celular_operador
     */
    select?: celular_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the celular_operador
     */
    omit?: celular_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: celular_operadorInclude<ExtArgs> | null
    /**
     * Filter which celular_operador to delete.
     */
    where: celular_operadorWhereUniqueInput
  }

  /**
   * celular_operador deleteMany
   */
  export type celular_operadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which celular_operadors to delete
     */
    where?: celular_operadorWhereInput
    /**
     * Limit how many celular_operadors to delete.
     */
    limit?: number
  }

  /**
   * celular_operador without action
   */
  export type celular_operadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the celular_operador
     */
    select?: celular_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the celular_operador
     */
    omit?: celular_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: celular_operadorInclude<ExtArgs> | null
  }


  /**
   * Model endereco_operador
   */

  export type AggregateEndereco_operador = {
    _count: Endereco_operadorCountAggregateOutputType | null
    _avg: Endereco_operadorAvgAggregateOutputType | null
    _sum: Endereco_operadorSumAggregateOutputType | null
    _min: Endereco_operadorMinAggregateOutputType | null
    _max: Endereco_operadorMaxAggregateOutputType | null
  }

  export type Endereco_operadorAvgAggregateOutputType = {
    id: number | null
  }

  export type Endereco_operadorSumAggregateOutputType = {
    id: number | null
  }

  export type Endereco_operadorMinAggregateOutputType = {
    id: number | null
    codigo_postal: string | null
    numero_residencial: string | null
    status: boolean | null
    uuid_operador: string | null
  }

  export type Endereco_operadorMaxAggregateOutputType = {
    id: number | null
    codigo_postal: string | null
    numero_residencial: string | null
    status: boolean | null
    uuid_operador: string | null
  }

  export type Endereco_operadorCountAggregateOutputType = {
    id: number
    codigo_postal: number
    numero_residencial: number
    status: number
    uuid_operador: number
    _all: number
  }


  export type Endereco_operadorAvgAggregateInputType = {
    id?: true
  }

  export type Endereco_operadorSumAggregateInputType = {
    id?: true
  }

  export type Endereco_operadorMinAggregateInputType = {
    id?: true
    codigo_postal?: true
    numero_residencial?: true
    status?: true
    uuid_operador?: true
  }

  export type Endereco_operadorMaxAggregateInputType = {
    id?: true
    codigo_postal?: true
    numero_residencial?: true
    status?: true
    uuid_operador?: true
  }

  export type Endereco_operadorCountAggregateInputType = {
    id?: true
    codigo_postal?: true
    numero_residencial?: true
    status?: true
    uuid_operador?: true
    _all?: true
  }

  export type Endereco_operadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which endereco_operador to aggregate.
     */
    where?: endereco_operadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of endereco_operadors to fetch.
     */
    orderBy?: endereco_operadorOrderByWithRelationInput | endereco_operadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: endereco_operadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` endereco_operadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` endereco_operadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned endereco_operadors
    **/
    _count?: true | Endereco_operadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Endereco_operadorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Endereco_operadorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Endereco_operadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Endereco_operadorMaxAggregateInputType
  }

  export type GetEndereco_operadorAggregateType<T extends Endereco_operadorAggregateArgs> = {
        [P in keyof T & keyof AggregateEndereco_operador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEndereco_operador[P]>
      : GetScalarType<T[P], AggregateEndereco_operador[P]>
  }




  export type endereco_operadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: endereco_operadorWhereInput
    orderBy?: endereco_operadorOrderByWithAggregationInput | endereco_operadorOrderByWithAggregationInput[]
    by: Endereco_operadorScalarFieldEnum[] | Endereco_operadorScalarFieldEnum
    having?: endereco_operadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Endereco_operadorCountAggregateInputType | true
    _avg?: Endereco_operadorAvgAggregateInputType
    _sum?: Endereco_operadorSumAggregateInputType
    _min?: Endereco_operadorMinAggregateInputType
    _max?: Endereco_operadorMaxAggregateInputType
  }

  export type Endereco_operadorGroupByOutputType = {
    id: number
    codigo_postal: string
    numero_residencial: string
    status: boolean
    uuid_operador: string
    _count: Endereco_operadorCountAggregateOutputType | null
    _avg: Endereco_operadorAvgAggregateOutputType | null
    _sum: Endereco_operadorSumAggregateOutputType | null
    _min: Endereco_operadorMinAggregateOutputType | null
    _max: Endereco_operadorMaxAggregateOutputType | null
  }

  type GetEndereco_operadorGroupByPayload<T extends endereco_operadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Endereco_operadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Endereco_operadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Endereco_operadorGroupByOutputType[P]>
            : GetScalarType<T[P], Endereco_operadorGroupByOutputType[P]>
        }
      >
    >


  export type endereco_operadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo_postal?: boolean
    numero_residencial?: boolean
    status?: boolean
    uuid_operador?: boolean
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereco_operador"]>

  export type endereco_operadorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo_postal?: boolean
    numero_residencial?: boolean
    status?: boolean
    uuid_operador?: boolean
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereco_operador"]>

  export type endereco_operadorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo_postal?: boolean
    numero_residencial?: boolean
    status?: boolean
    uuid_operador?: boolean
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereco_operador"]>

  export type endereco_operadorSelectScalar = {
    id?: boolean
    codigo_postal?: boolean
    numero_residencial?: boolean
    status?: boolean
    uuid_operador?: boolean
  }

  export type endereco_operadorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigo_postal" | "numero_residencial" | "status" | "uuid_operador", ExtArgs["result"]["endereco_operador"]>
  export type endereco_operadorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }
  export type endereco_operadorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }
  export type endereco_operadorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }

  export type $endereco_operadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "endereco_operador"
    objects: {
      operador: Prisma.$operadorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      codigo_postal: string
      numero_residencial: string
      status: boolean
      uuid_operador: string
    }, ExtArgs["result"]["endereco_operador"]>
    composites: {}
  }

  type endereco_operadorGetPayload<S extends boolean | null | undefined | endereco_operadorDefaultArgs> = $Result.GetResult<Prisma.$endereco_operadorPayload, S>

  type endereco_operadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<endereco_operadorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Endereco_operadorCountAggregateInputType | true
    }

  export interface endereco_operadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['endereco_operador'], meta: { name: 'endereco_operador' } }
    /**
     * Find zero or one Endereco_operador that matches the filter.
     * @param {endereco_operadorFindUniqueArgs} args - Arguments to find a Endereco_operador
     * @example
     * // Get one Endereco_operador
     * const endereco_operador = await prisma.endereco_operador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends endereco_operadorFindUniqueArgs>(args: SelectSubset<T, endereco_operadorFindUniqueArgs<ExtArgs>>): Prisma__endereco_operadorClient<$Result.GetResult<Prisma.$endereco_operadorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Endereco_operador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {endereco_operadorFindUniqueOrThrowArgs} args - Arguments to find a Endereco_operador
     * @example
     * // Get one Endereco_operador
     * const endereco_operador = await prisma.endereco_operador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends endereco_operadorFindUniqueOrThrowArgs>(args: SelectSubset<T, endereco_operadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__endereco_operadorClient<$Result.GetResult<Prisma.$endereco_operadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endereco_operador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {endereco_operadorFindFirstArgs} args - Arguments to find a Endereco_operador
     * @example
     * // Get one Endereco_operador
     * const endereco_operador = await prisma.endereco_operador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends endereco_operadorFindFirstArgs>(args?: SelectSubset<T, endereco_operadorFindFirstArgs<ExtArgs>>): Prisma__endereco_operadorClient<$Result.GetResult<Prisma.$endereco_operadorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endereco_operador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {endereco_operadorFindFirstOrThrowArgs} args - Arguments to find a Endereco_operador
     * @example
     * // Get one Endereco_operador
     * const endereco_operador = await prisma.endereco_operador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends endereco_operadorFindFirstOrThrowArgs>(args?: SelectSubset<T, endereco_operadorFindFirstOrThrowArgs<ExtArgs>>): Prisma__endereco_operadorClient<$Result.GetResult<Prisma.$endereco_operadorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Endereco_operadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {endereco_operadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Endereco_operadors
     * const endereco_operadors = await prisma.endereco_operador.findMany()
     * 
     * // Get first 10 Endereco_operadors
     * const endereco_operadors = await prisma.endereco_operador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const endereco_operadorWithIdOnly = await prisma.endereco_operador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends endereco_operadorFindManyArgs>(args?: SelectSubset<T, endereco_operadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$endereco_operadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Endereco_operador.
     * @param {endereco_operadorCreateArgs} args - Arguments to create a Endereco_operador.
     * @example
     * // Create one Endereco_operador
     * const Endereco_operador = await prisma.endereco_operador.create({
     *   data: {
     *     // ... data to create a Endereco_operador
     *   }
     * })
     * 
     */
    create<T extends endereco_operadorCreateArgs>(args: SelectSubset<T, endereco_operadorCreateArgs<ExtArgs>>): Prisma__endereco_operadorClient<$Result.GetResult<Prisma.$endereco_operadorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Endereco_operadors.
     * @param {endereco_operadorCreateManyArgs} args - Arguments to create many Endereco_operadors.
     * @example
     * // Create many Endereco_operadors
     * const endereco_operador = await prisma.endereco_operador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends endereco_operadorCreateManyArgs>(args?: SelectSubset<T, endereco_operadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Endereco_operadors and returns the data saved in the database.
     * @param {endereco_operadorCreateManyAndReturnArgs} args - Arguments to create many Endereco_operadors.
     * @example
     * // Create many Endereco_operadors
     * const endereco_operador = await prisma.endereco_operador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Endereco_operadors and only return the `id`
     * const endereco_operadorWithIdOnly = await prisma.endereco_operador.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends endereco_operadorCreateManyAndReturnArgs>(args?: SelectSubset<T, endereco_operadorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$endereco_operadorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Endereco_operador.
     * @param {endereco_operadorDeleteArgs} args - Arguments to delete one Endereco_operador.
     * @example
     * // Delete one Endereco_operador
     * const Endereco_operador = await prisma.endereco_operador.delete({
     *   where: {
     *     // ... filter to delete one Endereco_operador
     *   }
     * })
     * 
     */
    delete<T extends endereco_operadorDeleteArgs>(args: SelectSubset<T, endereco_operadorDeleteArgs<ExtArgs>>): Prisma__endereco_operadorClient<$Result.GetResult<Prisma.$endereco_operadorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Endereco_operador.
     * @param {endereco_operadorUpdateArgs} args - Arguments to update one Endereco_operador.
     * @example
     * // Update one Endereco_operador
     * const endereco_operador = await prisma.endereco_operador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends endereco_operadorUpdateArgs>(args: SelectSubset<T, endereco_operadorUpdateArgs<ExtArgs>>): Prisma__endereco_operadorClient<$Result.GetResult<Prisma.$endereco_operadorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Endereco_operadors.
     * @param {endereco_operadorDeleteManyArgs} args - Arguments to filter Endereco_operadors to delete.
     * @example
     * // Delete a few Endereco_operadors
     * const { count } = await prisma.endereco_operador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends endereco_operadorDeleteManyArgs>(args?: SelectSubset<T, endereco_operadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Endereco_operadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {endereco_operadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Endereco_operadors
     * const endereco_operador = await prisma.endereco_operador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends endereco_operadorUpdateManyArgs>(args: SelectSubset<T, endereco_operadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Endereco_operadors and returns the data updated in the database.
     * @param {endereco_operadorUpdateManyAndReturnArgs} args - Arguments to update many Endereco_operadors.
     * @example
     * // Update many Endereco_operadors
     * const endereco_operador = await prisma.endereco_operador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Endereco_operadors and only return the `id`
     * const endereco_operadorWithIdOnly = await prisma.endereco_operador.updateManyAndReturn({
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
    updateManyAndReturn<T extends endereco_operadorUpdateManyAndReturnArgs>(args: SelectSubset<T, endereco_operadorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$endereco_operadorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Endereco_operador.
     * @param {endereco_operadorUpsertArgs} args - Arguments to update or create a Endereco_operador.
     * @example
     * // Update or create a Endereco_operador
     * const endereco_operador = await prisma.endereco_operador.upsert({
     *   create: {
     *     // ... data to create a Endereco_operador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Endereco_operador we want to update
     *   }
     * })
     */
    upsert<T extends endereco_operadorUpsertArgs>(args: SelectSubset<T, endereco_operadorUpsertArgs<ExtArgs>>): Prisma__endereco_operadorClient<$Result.GetResult<Prisma.$endereco_operadorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Endereco_operadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {endereco_operadorCountArgs} args - Arguments to filter Endereco_operadors to count.
     * @example
     * // Count the number of Endereco_operadors
     * const count = await prisma.endereco_operador.count({
     *   where: {
     *     // ... the filter for the Endereco_operadors we want to count
     *   }
     * })
    **/
    count<T extends endereco_operadorCountArgs>(
      args?: Subset<T, endereco_operadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Endereco_operadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Endereco_operador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Endereco_operadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Endereco_operadorAggregateArgs>(args: Subset<T, Endereco_operadorAggregateArgs>): Prisma.PrismaPromise<GetEndereco_operadorAggregateType<T>>

    /**
     * Group by Endereco_operador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {endereco_operadorGroupByArgs} args - Group by arguments.
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
      T extends endereco_operadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: endereco_operadorGroupByArgs['orderBy'] }
        : { orderBy?: endereco_operadorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, endereco_operadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEndereco_operadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the endereco_operador model
   */
  readonly fields: endereco_operadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for endereco_operador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__endereco_operadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    operador<T extends operadorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, operadorDefaultArgs<ExtArgs>>): Prisma__operadorClient<$Result.GetResult<Prisma.$operadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the endereco_operador model
   */
  interface endereco_operadorFieldRefs {
    readonly id: FieldRef<"endereco_operador", 'Int'>
    readonly codigo_postal: FieldRef<"endereco_operador", 'String'>
    readonly numero_residencial: FieldRef<"endereco_operador", 'String'>
    readonly status: FieldRef<"endereco_operador", 'Boolean'>
    readonly uuid_operador: FieldRef<"endereco_operador", 'String'>
  }
    

  // Custom InputTypes
  /**
   * endereco_operador findUnique
   */
  export type endereco_operadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco_operador
     */
    select?: endereco_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco_operador
     */
    omit?: endereco_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereco_operadorInclude<ExtArgs> | null
    /**
     * Filter, which endereco_operador to fetch.
     */
    where: endereco_operadorWhereUniqueInput
  }

  /**
   * endereco_operador findUniqueOrThrow
   */
  export type endereco_operadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco_operador
     */
    select?: endereco_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco_operador
     */
    omit?: endereco_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereco_operadorInclude<ExtArgs> | null
    /**
     * Filter, which endereco_operador to fetch.
     */
    where: endereco_operadorWhereUniqueInput
  }

  /**
   * endereco_operador findFirst
   */
  export type endereco_operadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco_operador
     */
    select?: endereco_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco_operador
     */
    omit?: endereco_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereco_operadorInclude<ExtArgs> | null
    /**
     * Filter, which endereco_operador to fetch.
     */
    where?: endereco_operadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of endereco_operadors to fetch.
     */
    orderBy?: endereco_operadorOrderByWithRelationInput | endereco_operadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for endereco_operadors.
     */
    cursor?: endereco_operadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` endereco_operadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` endereco_operadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of endereco_operadors.
     */
    distinct?: Endereco_operadorScalarFieldEnum | Endereco_operadorScalarFieldEnum[]
  }

  /**
   * endereco_operador findFirstOrThrow
   */
  export type endereco_operadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco_operador
     */
    select?: endereco_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco_operador
     */
    omit?: endereco_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereco_operadorInclude<ExtArgs> | null
    /**
     * Filter, which endereco_operador to fetch.
     */
    where?: endereco_operadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of endereco_operadors to fetch.
     */
    orderBy?: endereco_operadorOrderByWithRelationInput | endereco_operadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for endereco_operadors.
     */
    cursor?: endereco_operadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` endereco_operadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` endereco_operadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of endereco_operadors.
     */
    distinct?: Endereco_operadorScalarFieldEnum | Endereco_operadorScalarFieldEnum[]
  }

  /**
   * endereco_operador findMany
   */
  export type endereco_operadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco_operador
     */
    select?: endereco_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco_operador
     */
    omit?: endereco_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereco_operadorInclude<ExtArgs> | null
    /**
     * Filter, which endereco_operadors to fetch.
     */
    where?: endereco_operadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of endereco_operadors to fetch.
     */
    orderBy?: endereco_operadorOrderByWithRelationInput | endereco_operadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing endereco_operadors.
     */
    cursor?: endereco_operadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` endereco_operadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` endereco_operadors.
     */
    skip?: number
    distinct?: Endereco_operadorScalarFieldEnum | Endereco_operadorScalarFieldEnum[]
  }

  /**
   * endereco_operador create
   */
  export type endereco_operadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco_operador
     */
    select?: endereco_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco_operador
     */
    omit?: endereco_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereco_operadorInclude<ExtArgs> | null
    /**
     * The data needed to create a endereco_operador.
     */
    data: XOR<endereco_operadorCreateInput, endereco_operadorUncheckedCreateInput>
  }

  /**
   * endereco_operador createMany
   */
  export type endereco_operadorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many endereco_operadors.
     */
    data: endereco_operadorCreateManyInput | endereco_operadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * endereco_operador createManyAndReturn
   */
  export type endereco_operadorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco_operador
     */
    select?: endereco_operadorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the endereco_operador
     */
    omit?: endereco_operadorOmit<ExtArgs> | null
    /**
     * The data used to create many endereco_operadors.
     */
    data: endereco_operadorCreateManyInput | endereco_operadorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereco_operadorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * endereco_operador update
   */
  export type endereco_operadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco_operador
     */
    select?: endereco_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco_operador
     */
    omit?: endereco_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereco_operadorInclude<ExtArgs> | null
    /**
     * The data needed to update a endereco_operador.
     */
    data: XOR<endereco_operadorUpdateInput, endereco_operadorUncheckedUpdateInput>
    /**
     * Choose, which endereco_operador to update.
     */
    where: endereco_operadorWhereUniqueInput
  }

  /**
   * endereco_operador updateMany
   */
  export type endereco_operadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update endereco_operadors.
     */
    data: XOR<endereco_operadorUpdateManyMutationInput, endereco_operadorUncheckedUpdateManyInput>
    /**
     * Filter which endereco_operadors to update
     */
    where?: endereco_operadorWhereInput
    /**
     * Limit how many endereco_operadors to update.
     */
    limit?: number
  }

  /**
   * endereco_operador updateManyAndReturn
   */
  export type endereco_operadorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco_operador
     */
    select?: endereco_operadorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the endereco_operador
     */
    omit?: endereco_operadorOmit<ExtArgs> | null
    /**
     * The data used to update endereco_operadors.
     */
    data: XOR<endereco_operadorUpdateManyMutationInput, endereco_operadorUncheckedUpdateManyInput>
    /**
     * Filter which endereco_operadors to update
     */
    where?: endereco_operadorWhereInput
    /**
     * Limit how many endereco_operadors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereco_operadorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * endereco_operador upsert
   */
  export type endereco_operadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco_operador
     */
    select?: endereco_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco_operador
     */
    omit?: endereco_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereco_operadorInclude<ExtArgs> | null
    /**
     * The filter to search for the endereco_operador to update in case it exists.
     */
    where: endereco_operadorWhereUniqueInput
    /**
     * In case the endereco_operador found by the `where` argument doesn't exist, create a new endereco_operador with this data.
     */
    create: XOR<endereco_operadorCreateInput, endereco_operadorUncheckedCreateInput>
    /**
     * In case the endereco_operador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<endereco_operadorUpdateInput, endereco_operadorUncheckedUpdateInput>
  }

  /**
   * endereco_operador delete
   */
  export type endereco_operadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco_operador
     */
    select?: endereco_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco_operador
     */
    omit?: endereco_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereco_operadorInclude<ExtArgs> | null
    /**
     * Filter which endereco_operador to delete.
     */
    where: endereco_operadorWhereUniqueInput
  }

  /**
   * endereco_operador deleteMany
   */
  export type endereco_operadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which endereco_operadors to delete
     */
    where?: endereco_operadorWhereInput
    /**
     * Limit how many endereco_operadors to delete.
     */
    limit?: number
  }

  /**
   * endereco_operador without action
   */
  export type endereco_operadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco_operador
     */
    select?: endereco_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco_operador
     */
    omit?: endereco_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereco_operadorInclude<ExtArgs> | null
  }


  /**
   * Model rede_social_operador
   */

  export type AggregateRede_social_operador = {
    _count: Rede_social_operadorCountAggregateOutputType | null
    _avg: Rede_social_operadorAvgAggregateOutputType | null
    _sum: Rede_social_operadorSumAggregateOutputType | null
    _min: Rede_social_operadorMinAggregateOutputType | null
    _max: Rede_social_operadorMaxAggregateOutputType | null
  }

  export type Rede_social_operadorAvgAggregateOutputType = {
    id: number | null
  }

  export type Rede_social_operadorSumAggregateOutputType = {
    id: number | null
  }

  export type Rede_social_operadorMinAggregateOutputType = {
    id: number | null
    uuid_operador: string | null
    url: string | null
  }

  export type Rede_social_operadorMaxAggregateOutputType = {
    id: number | null
    uuid_operador: string | null
    url: string | null
  }

  export type Rede_social_operadorCountAggregateOutputType = {
    id: number
    uuid_operador: number
    url: number
    _all: number
  }


  export type Rede_social_operadorAvgAggregateInputType = {
    id?: true
  }

  export type Rede_social_operadorSumAggregateInputType = {
    id?: true
  }

  export type Rede_social_operadorMinAggregateInputType = {
    id?: true
    uuid_operador?: true
    url?: true
  }

  export type Rede_social_operadorMaxAggregateInputType = {
    id?: true
    uuid_operador?: true
    url?: true
  }

  export type Rede_social_operadorCountAggregateInputType = {
    id?: true
    uuid_operador?: true
    url?: true
    _all?: true
  }

  export type Rede_social_operadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rede_social_operador to aggregate.
     */
    where?: rede_social_operadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rede_social_operadors to fetch.
     */
    orderBy?: rede_social_operadorOrderByWithRelationInput | rede_social_operadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rede_social_operadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rede_social_operadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rede_social_operadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rede_social_operadors
    **/
    _count?: true | Rede_social_operadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rede_social_operadorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rede_social_operadorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rede_social_operadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rede_social_operadorMaxAggregateInputType
  }

  export type GetRede_social_operadorAggregateType<T extends Rede_social_operadorAggregateArgs> = {
        [P in keyof T & keyof AggregateRede_social_operador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRede_social_operador[P]>
      : GetScalarType<T[P], AggregateRede_social_operador[P]>
  }




  export type rede_social_operadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rede_social_operadorWhereInput
    orderBy?: rede_social_operadorOrderByWithAggregationInput | rede_social_operadorOrderByWithAggregationInput[]
    by: Rede_social_operadorScalarFieldEnum[] | Rede_social_operadorScalarFieldEnum
    having?: rede_social_operadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rede_social_operadorCountAggregateInputType | true
    _avg?: Rede_social_operadorAvgAggregateInputType
    _sum?: Rede_social_operadorSumAggregateInputType
    _min?: Rede_social_operadorMinAggregateInputType
    _max?: Rede_social_operadorMaxAggregateInputType
  }

  export type Rede_social_operadorGroupByOutputType = {
    id: number
    uuid_operador: string
    url: string
    _count: Rede_social_operadorCountAggregateOutputType | null
    _avg: Rede_social_operadorAvgAggregateOutputType | null
    _sum: Rede_social_operadorSumAggregateOutputType | null
    _min: Rede_social_operadorMinAggregateOutputType | null
    _max: Rede_social_operadorMaxAggregateOutputType | null
  }

  type GetRede_social_operadorGroupByPayload<T extends rede_social_operadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rede_social_operadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rede_social_operadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rede_social_operadorGroupByOutputType[P]>
            : GetScalarType<T[P], Rede_social_operadorGroupByOutputType[P]>
        }
      >
    >


  export type rede_social_operadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid_operador?: boolean
    url?: boolean
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rede_social_operador"]>

  export type rede_social_operadorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid_operador?: boolean
    url?: boolean
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rede_social_operador"]>

  export type rede_social_operadorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid_operador?: boolean
    url?: boolean
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rede_social_operador"]>

  export type rede_social_operadorSelectScalar = {
    id?: boolean
    uuid_operador?: boolean
    url?: boolean
  }

  export type rede_social_operadorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid_operador" | "url", ExtArgs["result"]["rede_social_operador"]>
  export type rede_social_operadorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }
  export type rede_social_operadorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }
  export type rede_social_operadorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }

  export type $rede_social_operadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rede_social_operador"
    objects: {
      operador: Prisma.$operadorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid_operador: string
      url: string
    }, ExtArgs["result"]["rede_social_operador"]>
    composites: {}
  }

  type rede_social_operadorGetPayload<S extends boolean | null | undefined | rede_social_operadorDefaultArgs> = $Result.GetResult<Prisma.$rede_social_operadorPayload, S>

  type rede_social_operadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rede_social_operadorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Rede_social_operadorCountAggregateInputType | true
    }

  export interface rede_social_operadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rede_social_operador'], meta: { name: 'rede_social_operador' } }
    /**
     * Find zero or one Rede_social_operador that matches the filter.
     * @param {rede_social_operadorFindUniqueArgs} args - Arguments to find a Rede_social_operador
     * @example
     * // Get one Rede_social_operador
     * const rede_social_operador = await prisma.rede_social_operador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rede_social_operadorFindUniqueArgs>(args: SelectSubset<T, rede_social_operadorFindUniqueArgs<ExtArgs>>): Prisma__rede_social_operadorClient<$Result.GetResult<Prisma.$rede_social_operadorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rede_social_operador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rede_social_operadorFindUniqueOrThrowArgs} args - Arguments to find a Rede_social_operador
     * @example
     * // Get one Rede_social_operador
     * const rede_social_operador = await prisma.rede_social_operador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rede_social_operadorFindUniqueOrThrowArgs>(args: SelectSubset<T, rede_social_operadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rede_social_operadorClient<$Result.GetResult<Prisma.$rede_social_operadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rede_social_operador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rede_social_operadorFindFirstArgs} args - Arguments to find a Rede_social_operador
     * @example
     * // Get one Rede_social_operador
     * const rede_social_operador = await prisma.rede_social_operador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rede_social_operadorFindFirstArgs>(args?: SelectSubset<T, rede_social_operadorFindFirstArgs<ExtArgs>>): Prisma__rede_social_operadorClient<$Result.GetResult<Prisma.$rede_social_operadorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rede_social_operador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rede_social_operadorFindFirstOrThrowArgs} args - Arguments to find a Rede_social_operador
     * @example
     * // Get one Rede_social_operador
     * const rede_social_operador = await prisma.rede_social_operador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rede_social_operadorFindFirstOrThrowArgs>(args?: SelectSubset<T, rede_social_operadorFindFirstOrThrowArgs<ExtArgs>>): Prisma__rede_social_operadorClient<$Result.GetResult<Prisma.$rede_social_operadorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rede_social_operadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rede_social_operadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rede_social_operadors
     * const rede_social_operadors = await prisma.rede_social_operador.findMany()
     * 
     * // Get first 10 Rede_social_operadors
     * const rede_social_operadors = await prisma.rede_social_operador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rede_social_operadorWithIdOnly = await prisma.rede_social_operador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rede_social_operadorFindManyArgs>(args?: SelectSubset<T, rede_social_operadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rede_social_operadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rede_social_operador.
     * @param {rede_social_operadorCreateArgs} args - Arguments to create a Rede_social_operador.
     * @example
     * // Create one Rede_social_operador
     * const Rede_social_operador = await prisma.rede_social_operador.create({
     *   data: {
     *     // ... data to create a Rede_social_operador
     *   }
     * })
     * 
     */
    create<T extends rede_social_operadorCreateArgs>(args: SelectSubset<T, rede_social_operadorCreateArgs<ExtArgs>>): Prisma__rede_social_operadorClient<$Result.GetResult<Prisma.$rede_social_operadorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rede_social_operadors.
     * @param {rede_social_operadorCreateManyArgs} args - Arguments to create many Rede_social_operadors.
     * @example
     * // Create many Rede_social_operadors
     * const rede_social_operador = await prisma.rede_social_operador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rede_social_operadorCreateManyArgs>(args?: SelectSubset<T, rede_social_operadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rede_social_operadors and returns the data saved in the database.
     * @param {rede_social_operadorCreateManyAndReturnArgs} args - Arguments to create many Rede_social_operadors.
     * @example
     * // Create many Rede_social_operadors
     * const rede_social_operador = await prisma.rede_social_operador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rede_social_operadors and only return the `id`
     * const rede_social_operadorWithIdOnly = await prisma.rede_social_operador.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rede_social_operadorCreateManyAndReturnArgs>(args?: SelectSubset<T, rede_social_operadorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rede_social_operadorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rede_social_operador.
     * @param {rede_social_operadorDeleteArgs} args - Arguments to delete one Rede_social_operador.
     * @example
     * // Delete one Rede_social_operador
     * const Rede_social_operador = await prisma.rede_social_operador.delete({
     *   where: {
     *     // ... filter to delete one Rede_social_operador
     *   }
     * })
     * 
     */
    delete<T extends rede_social_operadorDeleteArgs>(args: SelectSubset<T, rede_social_operadorDeleteArgs<ExtArgs>>): Prisma__rede_social_operadorClient<$Result.GetResult<Prisma.$rede_social_operadorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rede_social_operador.
     * @param {rede_social_operadorUpdateArgs} args - Arguments to update one Rede_social_operador.
     * @example
     * // Update one Rede_social_operador
     * const rede_social_operador = await prisma.rede_social_operador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rede_social_operadorUpdateArgs>(args: SelectSubset<T, rede_social_operadorUpdateArgs<ExtArgs>>): Prisma__rede_social_operadorClient<$Result.GetResult<Prisma.$rede_social_operadorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rede_social_operadors.
     * @param {rede_social_operadorDeleteManyArgs} args - Arguments to filter Rede_social_operadors to delete.
     * @example
     * // Delete a few Rede_social_operadors
     * const { count } = await prisma.rede_social_operador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rede_social_operadorDeleteManyArgs>(args?: SelectSubset<T, rede_social_operadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rede_social_operadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rede_social_operadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rede_social_operadors
     * const rede_social_operador = await prisma.rede_social_operador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rede_social_operadorUpdateManyArgs>(args: SelectSubset<T, rede_social_operadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rede_social_operadors and returns the data updated in the database.
     * @param {rede_social_operadorUpdateManyAndReturnArgs} args - Arguments to update many Rede_social_operadors.
     * @example
     * // Update many Rede_social_operadors
     * const rede_social_operador = await prisma.rede_social_operador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rede_social_operadors and only return the `id`
     * const rede_social_operadorWithIdOnly = await prisma.rede_social_operador.updateManyAndReturn({
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
    updateManyAndReturn<T extends rede_social_operadorUpdateManyAndReturnArgs>(args: SelectSubset<T, rede_social_operadorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rede_social_operadorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rede_social_operador.
     * @param {rede_social_operadorUpsertArgs} args - Arguments to update or create a Rede_social_operador.
     * @example
     * // Update or create a Rede_social_operador
     * const rede_social_operador = await prisma.rede_social_operador.upsert({
     *   create: {
     *     // ... data to create a Rede_social_operador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rede_social_operador we want to update
     *   }
     * })
     */
    upsert<T extends rede_social_operadorUpsertArgs>(args: SelectSubset<T, rede_social_operadorUpsertArgs<ExtArgs>>): Prisma__rede_social_operadorClient<$Result.GetResult<Prisma.$rede_social_operadorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rede_social_operadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rede_social_operadorCountArgs} args - Arguments to filter Rede_social_operadors to count.
     * @example
     * // Count the number of Rede_social_operadors
     * const count = await prisma.rede_social_operador.count({
     *   where: {
     *     // ... the filter for the Rede_social_operadors we want to count
     *   }
     * })
    **/
    count<T extends rede_social_operadorCountArgs>(
      args?: Subset<T, rede_social_operadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rede_social_operadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rede_social_operador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rede_social_operadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Rede_social_operadorAggregateArgs>(args: Subset<T, Rede_social_operadorAggregateArgs>): Prisma.PrismaPromise<GetRede_social_operadorAggregateType<T>>

    /**
     * Group by Rede_social_operador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rede_social_operadorGroupByArgs} args - Group by arguments.
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
      T extends rede_social_operadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rede_social_operadorGroupByArgs['orderBy'] }
        : { orderBy?: rede_social_operadorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rede_social_operadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRede_social_operadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rede_social_operador model
   */
  readonly fields: rede_social_operadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rede_social_operador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rede_social_operadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    operador<T extends operadorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, operadorDefaultArgs<ExtArgs>>): Prisma__operadorClient<$Result.GetResult<Prisma.$operadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the rede_social_operador model
   */
  interface rede_social_operadorFieldRefs {
    readonly id: FieldRef<"rede_social_operador", 'Int'>
    readonly uuid_operador: FieldRef<"rede_social_operador", 'String'>
    readonly url: FieldRef<"rede_social_operador", 'String'>
  }
    

  // Custom InputTypes
  /**
   * rede_social_operador findUnique
   */
  export type rede_social_operadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rede_social_operador
     */
    select?: rede_social_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rede_social_operador
     */
    omit?: rede_social_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rede_social_operadorInclude<ExtArgs> | null
    /**
     * Filter, which rede_social_operador to fetch.
     */
    where: rede_social_operadorWhereUniqueInput
  }

  /**
   * rede_social_operador findUniqueOrThrow
   */
  export type rede_social_operadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rede_social_operador
     */
    select?: rede_social_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rede_social_operador
     */
    omit?: rede_social_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rede_social_operadorInclude<ExtArgs> | null
    /**
     * Filter, which rede_social_operador to fetch.
     */
    where: rede_social_operadorWhereUniqueInput
  }

  /**
   * rede_social_operador findFirst
   */
  export type rede_social_operadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rede_social_operador
     */
    select?: rede_social_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rede_social_operador
     */
    omit?: rede_social_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rede_social_operadorInclude<ExtArgs> | null
    /**
     * Filter, which rede_social_operador to fetch.
     */
    where?: rede_social_operadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rede_social_operadors to fetch.
     */
    orderBy?: rede_social_operadorOrderByWithRelationInput | rede_social_operadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rede_social_operadors.
     */
    cursor?: rede_social_operadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rede_social_operadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rede_social_operadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rede_social_operadors.
     */
    distinct?: Rede_social_operadorScalarFieldEnum | Rede_social_operadorScalarFieldEnum[]
  }

  /**
   * rede_social_operador findFirstOrThrow
   */
  export type rede_social_operadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rede_social_operador
     */
    select?: rede_social_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rede_social_operador
     */
    omit?: rede_social_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rede_social_operadorInclude<ExtArgs> | null
    /**
     * Filter, which rede_social_operador to fetch.
     */
    where?: rede_social_operadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rede_social_operadors to fetch.
     */
    orderBy?: rede_social_operadorOrderByWithRelationInput | rede_social_operadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rede_social_operadors.
     */
    cursor?: rede_social_operadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rede_social_operadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rede_social_operadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rede_social_operadors.
     */
    distinct?: Rede_social_operadorScalarFieldEnum | Rede_social_operadorScalarFieldEnum[]
  }

  /**
   * rede_social_operador findMany
   */
  export type rede_social_operadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rede_social_operador
     */
    select?: rede_social_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rede_social_operador
     */
    omit?: rede_social_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rede_social_operadorInclude<ExtArgs> | null
    /**
     * Filter, which rede_social_operadors to fetch.
     */
    where?: rede_social_operadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rede_social_operadors to fetch.
     */
    orderBy?: rede_social_operadorOrderByWithRelationInput | rede_social_operadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rede_social_operadors.
     */
    cursor?: rede_social_operadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rede_social_operadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rede_social_operadors.
     */
    skip?: number
    distinct?: Rede_social_operadorScalarFieldEnum | Rede_social_operadorScalarFieldEnum[]
  }

  /**
   * rede_social_operador create
   */
  export type rede_social_operadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rede_social_operador
     */
    select?: rede_social_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rede_social_operador
     */
    omit?: rede_social_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rede_social_operadorInclude<ExtArgs> | null
    /**
     * The data needed to create a rede_social_operador.
     */
    data: XOR<rede_social_operadorCreateInput, rede_social_operadorUncheckedCreateInput>
  }

  /**
   * rede_social_operador createMany
   */
  export type rede_social_operadorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rede_social_operadors.
     */
    data: rede_social_operadorCreateManyInput | rede_social_operadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rede_social_operador createManyAndReturn
   */
  export type rede_social_operadorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rede_social_operador
     */
    select?: rede_social_operadorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rede_social_operador
     */
    omit?: rede_social_operadorOmit<ExtArgs> | null
    /**
     * The data used to create many rede_social_operadors.
     */
    data: rede_social_operadorCreateManyInput | rede_social_operadorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rede_social_operadorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * rede_social_operador update
   */
  export type rede_social_operadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rede_social_operador
     */
    select?: rede_social_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rede_social_operador
     */
    omit?: rede_social_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rede_social_operadorInclude<ExtArgs> | null
    /**
     * The data needed to update a rede_social_operador.
     */
    data: XOR<rede_social_operadorUpdateInput, rede_social_operadorUncheckedUpdateInput>
    /**
     * Choose, which rede_social_operador to update.
     */
    where: rede_social_operadorWhereUniqueInput
  }

  /**
   * rede_social_operador updateMany
   */
  export type rede_social_operadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rede_social_operadors.
     */
    data: XOR<rede_social_operadorUpdateManyMutationInput, rede_social_operadorUncheckedUpdateManyInput>
    /**
     * Filter which rede_social_operadors to update
     */
    where?: rede_social_operadorWhereInput
    /**
     * Limit how many rede_social_operadors to update.
     */
    limit?: number
  }

  /**
   * rede_social_operador updateManyAndReturn
   */
  export type rede_social_operadorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rede_social_operador
     */
    select?: rede_social_operadorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rede_social_operador
     */
    omit?: rede_social_operadorOmit<ExtArgs> | null
    /**
     * The data used to update rede_social_operadors.
     */
    data: XOR<rede_social_operadorUpdateManyMutationInput, rede_social_operadorUncheckedUpdateManyInput>
    /**
     * Filter which rede_social_operadors to update
     */
    where?: rede_social_operadorWhereInput
    /**
     * Limit how many rede_social_operadors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rede_social_operadorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * rede_social_operador upsert
   */
  export type rede_social_operadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rede_social_operador
     */
    select?: rede_social_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rede_social_operador
     */
    omit?: rede_social_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rede_social_operadorInclude<ExtArgs> | null
    /**
     * The filter to search for the rede_social_operador to update in case it exists.
     */
    where: rede_social_operadorWhereUniqueInput
    /**
     * In case the rede_social_operador found by the `where` argument doesn't exist, create a new rede_social_operador with this data.
     */
    create: XOR<rede_social_operadorCreateInput, rede_social_operadorUncheckedCreateInput>
    /**
     * In case the rede_social_operador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rede_social_operadorUpdateInput, rede_social_operadorUncheckedUpdateInput>
  }

  /**
   * rede_social_operador delete
   */
  export type rede_social_operadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rede_social_operador
     */
    select?: rede_social_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rede_social_operador
     */
    omit?: rede_social_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rede_social_operadorInclude<ExtArgs> | null
    /**
     * Filter which rede_social_operador to delete.
     */
    where: rede_social_operadorWhereUniqueInput
  }

  /**
   * rede_social_operador deleteMany
   */
  export type rede_social_operadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rede_social_operadors to delete
     */
    where?: rede_social_operadorWhereInput
    /**
     * Limit how many rede_social_operadors to delete.
     */
    limit?: number
  }

  /**
   * rede_social_operador without action
   */
  export type rede_social_operadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rede_social_operador
     */
    select?: rede_social_operadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rede_social_operador
     */
    omit?: rede_social_operadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rede_social_operadorInclude<ExtArgs> | null
  }


  /**
   * Model cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteMinAggregateOutputType = {
    uuid: string | null
    nome_completo: string | null
    num_cpf: string | null
    num_cnpj: string | null
    data_nascimento: Date | null
    correio_eletronico: string | null
    observacao: string | null
    uuid_operador: string | null
    status: boolean | null
    delete: boolean | null
  }

  export type ClienteMaxAggregateOutputType = {
    uuid: string | null
    nome_completo: string | null
    num_cpf: string | null
    num_cnpj: string | null
    data_nascimento: Date | null
    correio_eletronico: string | null
    observacao: string | null
    uuid_operador: string | null
    status: boolean | null
    delete: boolean | null
  }

  export type ClienteCountAggregateOutputType = {
    uuid: number
    nome_completo: number
    num_cpf: number
    num_cnpj: number
    data_nascimento: number
    correio_eletronico: number
    observacao: number
    uuid_operador: number
    status: number
    delete: number
    _all: number
  }


  export type ClienteMinAggregateInputType = {
    uuid?: true
    nome_completo?: true
    num_cpf?: true
    num_cnpj?: true
    data_nascimento?: true
    correio_eletronico?: true
    observacao?: true
    uuid_operador?: true
    status?: true
    delete?: true
  }

  export type ClienteMaxAggregateInputType = {
    uuid?: true
    nome_completo?: true
    num_cpf?: true
    num_cnpj?: true
    data_nascimento?: true
    correio_eletronico?: true
    observacao?: true
    uuid_operador?: true
    status?: true
    delete?: true
  }

  export type ClienteCountAggregateInputType = {
    uuid?: true
    nome_completo?: true
    num_cpf?: true
    num_cnpj?: true
    data_nascimento?: true
    correio_eletronico?: true
    observacao?: true
    uuid_operador?: true
    status?: true
    delete?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cliente to aggregate.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type clienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clienteWhereInput
    orderBy?: clienteOrderByWithAggregationInput | clienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: clienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj: string | null
    data_nascimento: Date | null
    correio_eletronico: string | null
    observacao: string | null
    uuid_operador: string
    status: boolean
    delete: boolean | null
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends clienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type clienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    nome_completo?: boolean
    num_cpf?: boolean
    num_cnpj?: boolean
    data_nascimento?: boolean
    correio_eletronico?: boolean
    observacao?: boolean
    uuid_operador?: boolean
    status?: boolean
    delete?: boolean
    celularClientes?: boolean | cliente$celularClientesArgs<ExtArgs>
    enderecoClientes?: boolean | cliente$enderecoClientesArgs<ExtArgs>
    redeSocialClientes?: boolean | cliente$redeSocialClientesArgs<ExtArgs>
    operador?: boolean | operadorDefaultArgs<ExtArgs>
    emprestimos?: boolean | cliente$emprestimosArgs<ExtArgs>
    pagamentos?: boolean | cliente$pagamentosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type clienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    nome_completo?: boolean
    num_cpf?: boolean
    num_cnpj?: boolean
    data_nascimento?: boolean
    correio_eletronico?: boolean
    observacao?: boolean
    uuid_operador?: boolean
    status?: boolean
    delete?: boolean
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type clienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    nome_completo?: boolean
    num_cpf?: boolean
    num_cnpj?: boolean
    data_nascimento?: boolean
    correio_eletronico?: boolean
    observacao?: boolean
    uuid_operador?: boolean
    status?: boolean
    delete?: boolean
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type clienteSelectScalar = {
    uuid?: boolean
    nome_completo?: boolean
    num_cpf?: boolean
    num_cnpj?: boolean
    data_nascimento?: boolean
    correio_eletronico?: boolean
    observacao?: boolean
    uuid_operador?: boolean
    status?: boolean
    delete?: boolean
  }

  export type clienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "nome_completo" | "num_cpf" | "num_cnpj" | "data_nascimento" | "correio_eletronico" | "observacao" | "uuid_operador" | "status" | "delete", ExtArgs["result"]["cliente"]>
  export type clienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    celularClientes?: boolean | cliente$celularClientesArgs<ExtArgs>
    enderecoClientes?: boolean | cliente$enderecoClientesArgs<ExtArgs>
    redeSocialClientes?: boolean | cliente$redeSocialClientesArgs<ExtArgs>
    operador?: boolean | operadorDefaultArgs<ExtArgs>
    emprestimos?: boolean | cliente$emprestimosArgs<ExtArgs>
    pagamentos?: boolean | cliente$pagamentosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type clienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }
  export type clienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }

  export type $clientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cliente"
    objects: {
      celularClientes: Prisma.$celular_clientePayload<ExtArgs>[]
      enderecoClientes: Prisma.$endereco_clientePayload<ExtArgs>[]
      redeSocialClientes: Prisma.$rede_social_clientePayload<ExtArgs>[]
      operador: Prisma.$operadorPayload<ExtArgs>
      emprestimos: Prisma.$emprestimoPayload<ExtArgs>[]
      pagamentos: Prisma.$pagamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      nome_completo: string
      num_cpf: string
      num_cnpj: string | null
      data_nascimento: Date | null
      correio_eletronico: string | null
      observacao: string | null
      uuid_operador: string
      status: boolean
      delete: boolean | null
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type clienteGetPayload<S extends boolean | null | undefined | clienteDefaultArgs> = $Result.GetResult<Prisma.$clientePayload, S>

  type clienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface clienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cliente'], meta: { name: 'cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {clienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clienteFindUniqueArgs>(args: SelectSubset<T, clienteFindUniqueArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clienteFindUniqueOrThrowArgs>(args: SelectSubset<T, clienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clienteFindFirstArgs>(args?: SelectSubset<T, clienteFindFirstArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clienteFindFirstOrThrowArgs>(args?: SelectSubset<T, clienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const clienteWithUuidOnly = await prisma.cliente.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends clienteFindManyArgs>(args?: SelectSubset<T, clienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {clienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends clienteCreateArgs>(args: SelectSubset<T, clienteCreateArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {clienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clienteCreateManyArgs>(args?: SelectSubset<T, clienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {clienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `uuid`
     * const clienteWithUuidOnly = await prisma.cliente.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends clienteCreateManyAndReturnArgs>(args?: SelectSubset<T, clienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {clienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends clienteDeleteArgs>(args: SelectSubset<T, clienteDeleteArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {clienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clienteUpdateArgs>(args: SelectSubset<T, clienteUpdateArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {clienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clienteDeleteManyArgs>(args?: SelectSubset<T, clienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clienteUpdateManyArgs>(args: SelectSubset<T, clienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {clienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `uuid`
     * const clienteWithUuidOnly = await prisma.cliente.updateManyAndReturn({
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
    updateManyAndReturn<T extends clienteUpdateManyAndReturnArgs>(args: SelectSubset<T, clienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {clienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends clienteUpsertArgs>(args: SelectSubset<T, clienteUpsertArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends clienteCountArgs>(
      args?: Subset<T, clienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteGroupByArgs} args - Group by arguments.
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
      T extends clienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clienteGroupByArgs['orderBy'] }
        : { orderBy?: clienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, clienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cliente model
   */
  readonly fields: clienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    celularClientes<T extends cliente$celularClientesArgs<ExtArgs> = {}>(args?: Subset<T, cliente$celularClientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$celular_clientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enderecoClientes<T extends cliente$enderecoClientesArgs<ExtArgs> = {}>(args?: Subset<T, cliente$enderecoClientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$endereco_clientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    redeSocialClientes<T extends cliente$redeSocialClientesArgs<ExtArgs> = {}>(args?: Subset<T, cliente$redeSocialClientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rede_social_clientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    operador<T extends operadorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, operadorDefaultArgs<ExtArgs>>): Prisma__operadorClient<$Result.GetResult<Prisma.$operadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    emprestimos<T extends cliente$emprestimosArgs<ExtArgs> = {}>(args?: Subset<T, cliente$emprestimosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$emprestimoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pagamentos<T extends cliente$pagamentosArgs<ExtArgs> = {}>(args?: Subset<T, cliente$pagamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the cliente model
   */
  interface clienteFieldRefs {
    readonly uuid: FieldRef<"cliente", 'String'>
    readonly nome_completo: FieldRef<"cliente", 'String'>
    readonly num_cpf: FieldRef<"cliente", 'String'>
    readonly num_cnpj: FieldRef<"cliente", 'String'>
    readonly data_nascimento: FieldRef<"cliente", 'DateTime'>
    readonly correio_eletronico: FieldRef<"cliente", 'String'>
    readonly observacao: FieldRef<"cliente", 'String'>
    readonly uuid_operador: FieldRef<"cliente", 'String'>
    readonly status: FieldRef<"cliente", 'Boolean'>
    readonly delete: FieldRef<"cliente", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * cliente findUnique
   */
  export type clienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente findUniqueOrThrow
   */
  export type clienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente findFirst
   */
  export type clienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente findFirstOrThrow
   */
  export type clienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente findMany
   */
  export type clienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente create
   */
  export type clienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * The data needed to create a cliente.
     */
    data: XOR<clienteCreateInput, clienteUncheckedCreateInput>
  }

  /**
   * cliente createMany
   */
  export type clienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clientes.
     */
    data: clienteCreateManyInput | clienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cliente createManyAndReturn
   */
  export type clienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * The data used to create many clientes.
     */
    data: clienteCreateManyInput | clienteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cliente update
   */
  export type clienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * The data needed to update a cliente.
     */
    data: XOR<clienteUpdateInput, clienteUncheckedUpdateInput>
    /**
     * Choose, which cliente to update.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente updateMany
   */
  export type clienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clientes.
     */
    data: XOR<clienteUpdateManyMutationInput, clienteUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clienteWhereInput
    /**
     * Limit how many clientes to update.
     */
    limit?: number
  }

  /**
   * cliente updateManyAndReturn
   */
  export type clienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * The data used to update clientes.
     */
    data: XOR<clienteUpdateManyMutationInput, clienteUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clienteWhereInput
    /**
     * Limit how many clientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cliente upsert
   */
  export type clienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * The filter to search for the cliente to update in case it exists.
     */
    where: clienteWhereUniqueInput
    /**
     * In case the cliente found by the `where` argument doesn't exist, create a new cliente with this data.
     */
    create: XOR<clienteCreateInput, clienteUncheckedCreateInput>
    /**
     * In case the cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clienteUpdateInput, clienteUncheckedUpdateInput>
  }

  /**
   * cliente delete
   */
  export type clienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter which cliente to delete.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente deleteMany
   */
  export type clienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to delete
     */
    where?: clienteWhereInput
    /**
     * Limit how many clientes to delete.
     */
    limit?: number
  }

  /**
   * cliente.celularClientes
   */
  export type cliente$celularClientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the celular_cliente
     */
    select?: celular_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the celular_cliente
     */
    omit?: celular_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: celular_clienteInclude<ExtArgs> | null
    where?: celular_clienteWhereInput
    orderBy?: celular_clienteOrderByWithRelationInput | celular_clienteOrderByWithRelationInput[]
    cursor?: celular_clienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Celular_clienteScalarFieldEnum | Celular_clienteScalarFieldEnum[]
  }

  /**
   * cliente.enderecoClientes
   */
  export type cliente$enderecoClientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco_cliente
     */
    select?: endereco_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco_cliente
     */
    omit?: endereco_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereco_clienteInclude<ExtArgs> | null
    where?: endereco_clienteWhereInput
    orderBy?: endereco_clienteOrderByWithRelationInput | endereco_clienteOrderByWithRelationInput[]
    cursor?: endereco_clienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Endereco_clienteScalarFieldEnum | Endereco_clienteScalarFieldEnum[]
  }

  /**
   * cliente.redeSocialClientes
   */
  export type cliente$redeSocialClientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rede_social_cliente
     */
    select?: rede_social_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rede_social_cliente
     */
    omit?: rede_social_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rede_social_clienteInclude<ExtArgs> | null
    where?: rede_social_clienteWhereInput
    orderBy?: rede_social_clienteOrderByWithRelationInput | rede_social_clienteOrderByWithRelationInput[]
    cursor?: rede_social_clienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rede_social_clienteScalarFieldEnum | Rede_social_clienteScalarFieldEnum[]
  }

  /**
   * cliente.emprestimos
   */
  export type cliente$emprestimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emprestimo
     */
    select?: emprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emprestimo
     */
    omit?: emprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emprestimoInclude<ExtArgs> | null
    where?: emprestimoWhereInput
    orderBy?: emprestimoOrderByWithRelationInput | emprestimoOrderByWithRelationInput[]
    cursor?: emprestimoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmprestimoScalarFieldEnum | EmprestimoScalarFieldEnum[]
  }

  /**
   * cliente.pagamentos
   */
  export type cliente$pagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento
     */
    omit?: pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    where?: pagamentoWhereInput
    orderBy?: pagamentoOrderByWithRelationInput | pagamentoOrderByWithRelationInput[]
    cursor?: pagamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * cliente without action
   */
  export type clienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
  }


  /**
   * Model celular_cliente
   */

  export type AggregateCelular_cliente = {
    _count: Celular_clienteCountAggregateOutputType | null
    _avg: Celular_clienteAvgAggregateOutputType | null
    _sum: Celular_clienteSumAggregateOutputType | null
    _min: Celular_clienteMinAggregateOutputType | null
    _max: Celular_clienteMaxAggregateOutputType | null
  }

  export type Celular_clienteAvgAggregateOutputType = {
    id: number | null
  }

  export type Celular_clienteSumAggregateOutputType = {
    id: number | null
  }

  export type Celular_clienteMinAggregateOutputType = {
    id: number | null
    num_cel: string | null
    status: boolean | null
    uuid_cliente: string | null
  }

  export type Celular_clienteMaxAggregateOutputType = {
    id: number | null
    num_cel: string | null
    status: boolean | null
    uuid_cliente: string | null
  }

  export type Celular_clienteCountAggregateOutputType = {
    id: number
    num_cel: number
    status: number
    uuid_cliente: number
    _all: number
  }


  export type Celular_clienteAvgAggregateInputType = {
    id?: true
  }

  export type Celular_clienteSumAggregateInputType = {
    id?: true
  }

  export type Celular_clienteMinAggregateInputType = {
    id?: true
    num_cel?: true
    status?: true
    uuid_cliente?: true
  }

  export type Celular_clienteMaxAggregateInputType = {
    id?: true
    num_cel?: true
    status?: true
    uuid_cliente?: true
  }

  export type Celular_clienteCountAggregateInputType = {
    id?: true
    num_cel?: true
    status?: true
    uuid_cliente?: true
    _all?: true
  }

  export type Celular_clienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which celular_cliente to aggregate.
     */
    where?: celular_clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of celular_clientes to fetch.
     */
    orderBy?: celular_clienteOrderByWithRelationInput | celular_clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: celular_clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` celular_clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` celular_clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned celular_clientes
    **/
    _count?: true | Celular_clienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Celular_clienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Celular_clienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Celular_clienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Celular_clienteMaxAggregateInputType
  }

  export type GetCelular_clienteAggregateType<T extends Celular_clienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCelular_cliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCelular_cliente[P]>
      : GetScalarType<T[P], AggregateCelular_cliente[P]>
  }




  export type celular_clienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: celular_clienteWhereInput
    orderBy?: celular_clienteOrderByWithAggregationInput | celular_clienteOrderByWithAggregationInput[]
    by: Celular_clienteScalarFieldEnum[] | Celular_clienteScalarFieldEnum
    having?: celular_clienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Celular_clienteCountAggregateInputType | true
    _avg?: Celular_clienteAvgAggregateInputType
    _sum?: Celular_clienteSumAggregateInputType
    _min?: Celular_clienteMinAggregateInputType
    _max?: Celular_clienteMaxAggregateInputType
  }

  export type Celular_clienteGroupByOutputType = {
    id: number
    num_cel: string
    status: boolean
    uuid_cliente: string
    _count: Celular_clienteCountAggregateOutputType | null
    _avg: Celular_clienteAvgAggregateOutputType | null
    _sum: Celular_clienteSumAggregateOutputType | null
    _min: Celular_clienteMinAggregateOutputType | null
    _max: Celular_clienteMaxAggregateOutputType | null
  }

  type GetCelular_clienteGroupByPayload<T extends celular_clienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Celular_clienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Celular_clienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Celular_clienteGroupByOutputType[P]>
            : GetScalarType<T[P], Celular_clienteGroupByOutputType[P]>
        }
      >
    >


  export type celular_clienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    num_cel?: boolean
    status?: boolean
    uuid_cliente?: boolean
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["celular_cliente"]>

  export type celular_clienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    num_cel?: boolean
    status?: boolean
    uuid_cliente?: boolean
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["celular_cliente"]>

  export type celular_clienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    num_cel?: boolean
    status?: boolean
    uuid_cliente?: boolean
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["celular_cliente"]>

  export type celular_clienteSelectScalar = {
    id?: boolean
    num_cel?: boolean
    status?: boolean
    uuid_cliente?: boolean
  }

  export type celular_clienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "num_cel" | "status" | "uuid_cliente", ExtArgs["result"]["celular_cliente"]>
  export type celular_clienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
  }
  export type celular_clienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
  }
  export type celular_clienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
  }

  export type $celular_clientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "celular_cliente"
    objects: {
      cliente: Prisma.$clientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      num_cel: string
      status: boolean
      uuid_cliente: string
    }, ExtArgs["result"]["celular_cliente"]>
    composites: {}
  }

  type celular_clienteGetPayload<S extends boolean | null | undefined | celular_clienteDefaultArgs> = $Result.GetResult<Prisma.$celular_clientePayload, S>

  type celular_clienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<celular_clienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Celular_clienteCountAggregateInputType | true
    }

  export interface celular_clienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['celular_cliente'], meta: { name: 'celular_cliente' } }
    /**
     * Find zero or one Celular_cliente that matches the filter.
     * @param {celular_clienteFindUniqueArgs} args - Arguments to find a Celular_cliente
     * @example
     * // Get one Celular_cliente
     * const celular_cliente = await prisma.celular_cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends celular_clienteFindUniqueArgs>(args: SelectSubset<T, celular_clienteFindUniqueArgs<ExtArgs>>): Prisma__celular_clienteClient<$Result.GetResult<Prisma.$celular_clientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Celular_cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {celular_clienteFindUniqueOrThrowArgs} args - Arguments to find a Celular_cliente
     * @example
     * // Get one Celular_cliente
     * const celular_cliente = await prisma.celular_cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends celular_clienteFindUniqueOrThrowArgs>(args: SelectSubset<T, celular_clienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__celular_clienteClient<$Result.GetResult<Prisma.$celular_clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Celular_cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {celular_clienteFindFirstArgs} args - Arguments to find a Celular_cliente
     * @example
     * // Get one Celular_cliente
     * const celular_cliente = await prisma.celular_cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends celular_clienteFindFirstArgs>(args?: SelectSubset<T, celular_clienteFindFirstArgs<ExtArgs>>): Prisma__celular_clienteClient<$Result.GetResult<Prisma.$celular_clientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Celular_cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {celular_clienteFindFirstOrThrowArgs} args - Arguments to find a Celular_cliente
     * @example
     * // Get one Celular_cliente
     * const celular_cliente = await prisma.celular_cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends celular_clienteFindFirstOrThrowArgs>(args?: SelectSubset<T, celular_clienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__celular_clienteClient<$Result.GetResult<Prisma.$celular_clientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Celular_clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {celular_clienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Celular_clientes
     * const celular_clientes = await prisma.celular_cliente.findMany()
     * 
     * // Get first 10 Celular_clientes
     * const celular_clientes = await prisma.celular_cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const celular_clienteWithIdOnly = await prisma.celular_cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends celular_clienteFindManyArgs>(args?: SelectSubset<T, celular_clienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$celular_clientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Celular_cliente.
     * @param {celular_clienteCreateArgs} args - Arguments to create a Celular_cliente.
     * @example
     * // Create one Celular_cliente
     * const Celular_cliente = await prisma.celular_cliente.create({
     *   data: {
     *     // ... data to create a Celular_cliente
     *   }
     * })
     * 
     */
    create<T extends celular_clienteCreateArgs>(args: SelectSubset<T, celular_clienteCreateArgs<ExtArgs>>): Prisma__celular_clienteClient<$Result.GetResult<Prisma.$celular_clientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Celular_clientes.
     * @param {celular_clienteCreateManyArgs} args - Arguments to create many Celular_clientes.
     * @example
     * // Create many Celular_clientes
     * const celular_cliente = await prisma.celular_cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends celular_clienteCreateManyArgs>(args?: SelectSubset<T, celular_clienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Celular_clientes and returns the data saved in the database.
     * @param {celular_clienteCreateManyAndReturnArgs} args - Arguments to create many Celular_clientes.
     * @example
     * // Create many Celular_clientes
     * const celular_cliente = await prisma.celular_cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Celular_clientes and only return the `id`
     * const celular_clienteWithIdOnly = await prisma.celular_cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends celular_clienteCreateManyAndReturnArgs>(args?: SelectSubset<T, celular_clienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$celular_clientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Celular_cliente.
     * @param {celular_clienteDeleteArgs} args - Arguments to delete one Celular_cliente.
     * @example
     * // Delete one Celular_cliente
     * const Celular_cliente = await prisma.celular_cliente.delete({
     *   where: {
     *     // ... filter to delete one Celular_cliente
     *   }
     * })
     * 
     */
    delete<T extends celular_clienteDeleteArgs>(args: SelectSubset<T, celular_clienteDeleteArgs<ExtArgs>>): Prisma__celular_clienteClient<$Result.GetResult<Prisma.$celular_clientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Celular_cliente.
     * @param {celular_clienteUpdateArgs} args - Arguments to update one Celular_cliente.
     * @example
     * // Update one Celular_cliente
     * const celular_cliente = await prisma.celular_cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends celular_clienteUpdateArgs>(args: SelectSubset<T, celular_clienteUpdateArgs<ExtArgs>>): Prisma__celular_clienteClient<$Result.GetResult<Prisma.$celular_clientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Celular_clientes.
     * @param {celular_clienteDeleteManyArgs} args - Arguments to filter Celular_clientes to delete.
     * @example
     * // Delete a few Celular_clientes
     * const { count } = await prisma.celular_cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends celular_clienteDeleteManyArgs>(args?: SelectSubset<T, celular_clienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Celular_clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {celular_clienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Celular_clientes
     * const celular_cliente = await prisma.celular_cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends celular_clienteUpdateManyArgs>(args: SelectSubset<T, celular_clienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Celular_clientes and returns the data updated in the database.
     * @param {celular_clienteUpdateManyAndReturnArgs} args - Arguments to update many Celular_clientes.
     * @example
     * // Update many Celular_clientes
     * const celular_cliente = await prisma.celular_cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Celular_clientes and only return the `id`
     * const celular_clienteWithIdOnly = await prisma.celular_cliente.updateManyAndReturn({
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
    updateManyAndReturn<T extends celular_clienteUpdateManyAndReturnArgs>(args: SelectSubset<T, celular_clienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$celular_clientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Celular_cliente.
     * @param {celular_clienteUpsertArgs} args - Arguments to update or create a Celular_cliente.
     * @example
     * // Update or create a Celular_cliente
     * const celular_cliente = await prisma.celular_cliente.upsert({
     *   create: {
     *     // ... data to create a Celular_cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Celular_cliente we want to update
     *   }
     * })
     */
    upsert<T extends celular_clienteUpsertArgs>(args: SelectSubset<T, celular_clienteUpsertArgs<ExtArgs>>): Prisma__celular_clienteClient<$Result.GetResult<Prisma.$celular_clientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Celular_clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {celular_clienteCountArgs} args - Arguments to filter Celular_clientes to count.
     * @example
     * // Count the number of Celular_clientes
     * const count = await prisma.celular_cliente.count({
     *   where: {
     *     // ... the filter for the Celular_clientes we want to count
     *   }
     * })
    **/
    count<T extends celular_clienteCountArgs>(
      args?: Subset<T, celular_clienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Celular_clienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Celular_cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Celular_clienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Celular_clienteAggregateArgs>(args: Subset<T, Celular_clienteAggregateArgs>): Prisma.PrismaPromise<GetCelular_clienteAggregateType<T>>

    /**
     * Group by Celular_cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {celular_clienteGroupByArgs} args - Group by arguments.
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
      T extends celular_clienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: celular_clienteGroupByArgs['orderBy'] }
        : { orderBy?: celular_clienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, celular_clienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCelular_clienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the celular_cliente model
   */
  readonly fields: celular_clienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for celular_cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__celular_clienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends clienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clienteDefaultArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the celular_cliente model
   */
  interface celular_clienteFieldRefs {
    readonly id: FieldRef<"celular_cliente", 'Int'>
    readonly num_cel: FieldRef<"celular_cliente", 'String'>
    readonly status: FieldRef<"celular_cliente", 'Boolean'>
    readonly uuid_cliente: FieldRef<"celular_cliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * celular_cliente findUnique
   */
  export type celular_clienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the celular_cliente
     */
    select?: celular_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the celular_cliente
     */
    omit?: celular_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: celular_clienteInclude<ExtArgs> | null
    /**
     * Filter, which celular_cliente to fetch.
     */
    where: celular_clienteWhereUniqueInput
  }

  /**
   * celular_cliente findUniqueOrThrow
   */
  export type celular_clienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the celular_cliente
     */
    select?: celular_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the celular_cliente
     */
    omit?: celular_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: celular_clienteInclude<ExtArgs> | null
    /**
     * Filter, which celular_cliente to fetch.
     */
    where: celular_clienteWhereUniqueInput
  }

  /**
   * celular_cliente findFirst
   */
  export type celular_clienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the celular_cliente
     */
    select?: celular_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the celular_cliente
     */
    omit?: celular_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: celular_clienteInclude<ExtArgs> | null
    /**
     * Filter, which celular_cliente to fetch.
     */
    where?: celular_clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of celular_clientes to fetch.
     */
    orderBy?: celular_clienteOrderByWithRelationInput | celular_clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for celular_clientes.
     */
    cursor?: celular_clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` celular_clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` celular_clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of celular_clientes.
     */
    distinct?: Celular_clienteScalarFieldEnum | Celular_clienteScalarFieldEnum[]
  }

  /**
   * celular_cliente findFirstOrThrow
   */
  export type celular_clienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the celular_cliente
     */
    select?: celular_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the celular_cliente
     */
    omit?: celular_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: celular_clienteInclude<ExtArgs> | null
    /**
     * Filter, which celular_cliente to fetch.
     */
    where?: celular_clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of celular_clientes to fetch.
     */
    orderBy?: celular_clienteOrderByWithRelationInput | celular_clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for celular_clientes.
     */
    cursor?: celular_clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` celular_clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` celular_clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of celular_clientes.
     */
    distinct?: Celular_clienteScalarFieldEnum | Celular_clienteScalarFieldEnum[]
  }

  /**
   * celular_cliente findMany
   */
  export type celular_clienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the celular_cliente
     */
    select?: celular_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the celular_cliente
     */
    omit?: celular_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: celular_clienteInclude<ExtArgs> | null
    /**
     * Filter, which celular_clientes to fetch.
     */
    where?: celular_clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of celular_clientes to fetch.
     */
    orderBy?: celular_clienteOrderByWithRelationInput | celular_clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing celular_clientes.
     */
    cursor?: celular_clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` celular_clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` celular_clientes.
     */
    skip?: number
    distinct?: Celular_clienteScalarFieldEnum | Celular_clienteScalarFieldEnum[]
  }

  /**
   * celular_cliente create
   */
  export type celular_clienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the celular_cliente
     */
    select?: celular_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the celular_cliente
     */
    omit?: celular_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: celular_clienteInclude<ExtArgs> | null
    /**
     * The data needed to create a celular_cliente.
     */
    data: XOR<celular_clienteCreateInput, celular_clienteUncheckedCreateInput>
  }

  /**
   * celular_cliente createMany
   */
  export type celular_clienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many celular_clientes.
     */
    data: celular_clienteCreateManyInput | celular_clienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * celular_cliente createManyAndReturn
   */
  export type celular_clienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the celular_cliente
     */
    select?: celular_clienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the celular_cliente
     */
    omit?: celular_clienteOmit<ExtArgs> | null
    /**
     * The data used to create many celular_clientes.
     */
    data: celular_clienteCreateManyInput | celular_clienteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: celular_clienteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * celular_cliente update
   */
  export type celular_clienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the celular_cliente
     */
    select?: celular_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the celular_cliente
     */
    omit?: celular_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: celular_clienteInclude<ExtArgs> | null
    /**
     * The data needed to update a celular_cliente.
     */
    data: XOR<celular_clienteUpdateInput, celular_clienteUncheckedUpdateInput>
    /**
     * Choose, which celular_cliente to update.
     */
    where: celular_clienteWhereUniqueInput
  }

  /**
   * celular_cliente updateMany
   */
  export type celular_clienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update celular_clientes.
     */
    data: XOR<celular_clienteUpdateManyMutationInput, celular_clienteUncheckedUpdateManyInput>
    /**
     * Filter which celular_clientes to update
     */
    where?: celular_clienteWhereInput
    /**
     * Limit how many celular_clientes to update.
     */
    limit?: number
  }

  /**
   * celular_cliente updateManyAndReturn
   */
  export type celular_clienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the celular_cliente
     */
    select?: celular_clienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the celular_cliente
     */
    omit?: celular_clienteOmit<ExtArgs> | null
    /**
     * The data used to update celular_clientes.
     */
    data: XOR<celular_clienteUpdateManyMutationInput, celular_clienteUncheckedUpdateManyInput>
    /**
     * Filter which celular_clientes to update
     */
    where?: celular_clienteWhereInput
    /**
     * Limit how many celular_clientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: celular_clienteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * celular_cliente upsert
   */
  export type celular_clienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the celular_cliente
     */
    select?: celular_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the celular_cliente
     */
    omit?: celular_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: celular_clienteInclude<ExtArgs> | null
    /**
     * The filter to search for the celular_cliente to update in case it exists.
     */
    where: celular_clienteWhereUniqueInput
    /**
     * In case the celular_cliente found by the `where` argument doesn't exist, create a new celular_cliente with this data.
     */
    create: XOR<celular_clienteCreateInput, celular_clienteUncheckedCreateInput>
    /**
     * In case the celular_cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<celular_clienteUpdateInput, celular_clienteUncheckedUpdateInput>
  }

  /**
   * celular_cliente delete
   */
  export type celular_clienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the celular_cliente
     */
    select?: celular_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the celular_cliente
     */
    omit?: celular_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: celular_clienteInclude<ExtArgs> | null
    /**
     * Filter which celular_cliente to delete.
     */
    where: celular_clienteWhereUniqueInput
  }

  /**
   * celular_cliente deleteMany
   */
  export type celular_clienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which celular_clientes to delete
     */
    where?: celular_clienteWhereInput
    /**
     * Limit how many celular_clientes to delete.
     */
    limit?: number
  }

  /**
   * celular_cliente without action
   */
  export type celular_clienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the celular_cliente
     */
    select?: celular_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the celular_cliente
     */
    omit?: celular_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: celular_clienteInclude<ExtArgs> | null
  }


  /**
   * Model endereco_cliente
   */

  export type AggregateEndereco_cliente = {
    _count: Endereco_clienteCountAggregateOutputType | null
    _avg: Endereco_clienteAvgAggregateOutputType | null
    _sum: Endereco_clienteSumAggregateOutputType | null
    _min: Endereco_clienteMinAggregateOutputType | null
    _max: Endereco_clienteMaxAggregateOutputType | null
  }

  export type Endereco_clienteAvgAggregateOutputType = {
    id: number | null
  }

  export type Endereco_clienteSumAggregateOutputType = {
    id: number | null
  }

  export type Endereco_clienteMinAggregateOutputType = {
    id: number | null
    codigo_postal: string | null
    numero_residencial: string | null
    status: boolean | null
    uuid_cliente: string | null
  }

  export type Endereco_clienteMaxAggregateOutputType = {
    id: number | null
    codigo_postal: string | null
    numero_residencial: string | null
    status: boolean | null
    uuid_cliente: string | null
  }

  export type Endereco_clienteCountAggregateOutputType = {
    id: number
    codigo_postal: number
    numero_residencial: number
    status: number
    uuid_cliente: number
    _all: number
  }


  export type Endereco_clienteAvgAggregateInputType = {
    id?: true
  }

  export type Endereco_clienteSumAggregateInputType = {
    id?: true
  }

  export type Endereco_clienteMinAggregateInputType = {
    id?: true
    codigo_postal?: true
    numero_residencial?: true
    status?: true
    uuid_cliente?: true
  }

  export type Endereco_clienteMaxAggregateInputType = {
    id?: true
    codigo_postal?: true
    numero_residencial?: true
    status?: true
    uuid_cliente?: true
  }

  export type Endereco_clienteCountAggregateInputType = {
    id?: true
    codigo_postal?: true
    numero_residencial?: true
    status?: true
    uuid_cliente?: true
    _all?: true
  }

  export type Endereco_clienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which endereco_cliente to aggregate.
     */
    where?: endereco_clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of endereco_clientes to fetch.
     */
    orderBy?: endereco_clienteOrderByWithRelationInput | endereco_clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: endereco_clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` endereco_clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` endereco_clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned endereco_clientes
    **/
    _count?: true | Endereco_clienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Endereco_clienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Endereco_clienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Endereco_clienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Endereco_clienteMaxAggregateInputType
  }

  export type GetEndereco_clienteAggregateType<T extends Endereco_clienteAggregateArgs> = {
        [P in keyof T & keyof AggregateEndereco_cliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEndereco_cliente[P]>
      : GetScalarType<T[P], AggregateEndereco_cliente[P]>
  }




  export type endereco_clienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: endereco_clienteWhereInput
    orderBy?: endereco_clienteOrderByWithAggregationInput | endereco_clienteOrderByWithAggregationInput[]
    by: Endereco_clienteScalarFieldEnum[] | Endereco_clienteScalarFieldEnum
    having?: endereco_clienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Endereco_clienteCountAggregateInputType | true
    _avg?: Endereco_clienteAvgAggregateInputType
    _sum?: Endereco_clienteSumAggregateInputType
    _min?: Endereco_clienteMinAggregateInputType
    _max?: Endereco_clienteMaxAggregateInputType
  }

  export type Endereco_clienteGroupByOutputType = {
    id: number
    codigo_postal: string
    numero_residencial: string
    status: boolean
    uuid_cliente: string
    _count: Endereco_clienteCountAggregateOutputType | null
    _avg: Endereco_clienteAvgAggregateOutputType | null
    _sum: Endereco_clienteSumAggregateOutputType | null
    _min: Endereco_clienteMinAggregateOutputType | null
    _max: Endereco_clienteMaxAggregateOutputType | null
  }

  type GetEndereco_clienteGroupByPayload<T extends endereco_clienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Endereco_clienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Endereco_clienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Endereco_clienteGroupByOutputType[P]>
            : GetScalarType<T[P], Endereco_clienteGroupByOutputType[P]>
        }
      >
    >


  export type endereco_clienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo_postal?: boolean
    numero_residencial?: boolean
    status?: boolean
    uuid_cliente?: boolean
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereco_cliente"]>

  export type endereco_clienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo_postal?: boolean
    numero_residencial?: boolean
    status?: boolean
    uuid_cliente?: boolean
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereco_cliente"]>

  export type endereco_clienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo_postal?: boolean
    numero_residencial?: boolean
    status?: boolean
    uuid_cliente?: boolean
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereco_cliente"]>

  export type endereco_clienteSelectScalar = {
    id?: boolean
    codigo_postal?: boolean
    numero_residencial?: boolean
    status?: boolean
    uuid_cliente?: boolean
  }

  export type endereco_clienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigo_postal" | "numero_residencial" | "status" | "uuid_cliente", ExtArgs["result"]["endereco_cliente"]>
  export type endereco_clienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
  }
  export type endereco_clienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
  }
  export type endereco_clienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
  }

  export type $endereco_clientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "endereco_cliente"
    objects: {
      cliente: Prisma.$clientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      codigo_postal: string
      numero_residencial: string
      status: boolean
      uuid_cliente: string
    }, ExtArgs["result"]["endereco_cliente"]>
    composites: {}
  }

  type endereco_clienteGetPayload<S extends boolean | null | undefined | endereco_clienteDefaultArgs> = $Result.GetResult<Prisma.$endereco_clientePayload, S>

  type endereco_clienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<endereco_clienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Endereco_clienteCountAggregateInputType | true
    }

  export interface endereco_clienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['endereco_cliente'], meta: { name: 'endereco_cliente' } }
    /**
     * Find zero or one Endereco_cliente that matches the filter.
     * @param {endereco_clienteFindUniqueArgs} args - Arguments to find a Endereco_cliente
     * @example
     * // Get one Endereco_cliente
     * const endereco_cliente = await prisma.endereco_cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends endereco_clienteFindUniqueArgs>(args: SelectSubset<T, endereco_clienteFindUniqueArgs<ExtArgs>>): Prisma__endereco_clienteClient<$Result.GetResult<Prisma.$endereco_clientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Endereco_cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {endereco_clienteFindUniqueOrThrowArgs} args - Arguments to find a Endereco_cliente
     * @example
     * // Get one Endereco_cliente
     * const endereco_cliente = await prisma.endereco_cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends endereco_clienteFindUniqueOrThrowArgs>(args: SelectSubset<T, endereco_clienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__endereco_clienteClient<$Result.GetResult<Prisma.$endereco_clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endereco_cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {endereco_clienteFindFirstArgs} args - Arguments to find a Endereco_cliente
     * @example
     * // Get one Endereco_cliente
     * const endereco_cliente = await prisma.endereco_cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends endereco_clienteFindFirstArgs>(args?: SelectSubset<T, endereco_clienteFindFirstArgs<ExtArgs>>): Prisma__endereco_clienteClient<$Result.GetResult<Prisma.$endereco_clientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endereco_cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {endereco_clienteFindFirstOrThrowArgs} args - Arguments to find a Endereco_cliente
     * @example
     * // Get one Endereco_cliente
     * const endereco_cliente = await prisma.endereco_cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends endereco_clienteFindFirstOrThrowArgs>(args?: SelectSubset<T, endereco_clienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__endereco_clienteClient<$Result.GetResult<Prisma.$endereco_clientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Endereco_clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {endereco_clienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Endereco_clientes
     * const endereco_clientes = await prisma.endereco_cliente.findMany()
     * 
     * // Get first 10 Endereco_clientes
     * const endereco_clientes = await prisma.endereco_cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const endereco_clienteWithIdOnly = await prisma.endereco_cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends endereco_clienteFindManyArgs>(args?: SelectSubset<T, endereco_clienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$endereco_clientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Endereco_cliente.
     * @param {endereco_clienteCreateArgs} args - Arguments to create a Endereco_cliente.
     * @example
     * // Create one Endereco_cliente
     * const Endereco_cliente = await prisma.endereco_cliente.create({
     *   data: {
     *     // ... data to create a Endereco_cliente
     *   }
     * })
     * 
     */
    create<T extends endereco_clienteCreateArgs>(args: SelectSubset<T, endereco_clienteCreateArgs<ExtArgs>>): Prisma__endereco_clienteClient<$Result.GetResult<Prisma.$endereco_clientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Endereco_clientes.
     * @param {endereco_clienteCreateManyArgs} args - Arguments to create many Endereco_clientes.
     * @example
     * // Create many Endereco_clientes
     * const endereco_cliente = await prisma.endereco_cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends endereco_clienteCreateManyArgs>(args?: SelectSubset<T, endereco_clienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Endereco_clientes and returns the data saved in the database.
     * @param {endereco_clienteCreateManyAndReturnArgs} args - Arguments to create many Endereco_clientes.
     * @example
     * // Create many Endereco_clientes
     * const endereco_cliente = await prisma.endereco_cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Endereco_clientes and only return the `id`
     * const endereco_clienteWithIdOnly = await prisma.endereco_cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends endereco_clienteCreateManyAndReturnArgs>(args?: SelectSubset<T, endereco_clienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$endereco_clientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Endereco_cliente.
     * @param {endereco_clienteDeleteArgs} args - Arguments to delete one Endereco_cliente.
     * @example
     * // Delete one Endereco_cliente
     * const Endereco_cliente = await prisma.endereco_cliente.delete({
     *   where: {
     *     // ... filter to delete one Endereco_cliente
     *   }
     * })
     * 
     */
    delete<T extends endereco_clienteDeleteArgs>(args: SelectSubset<T, endereco_clienteDeleteArgs<ExtArgs>>): Prisma__endereco_clienteClient<$Result.GetResult<Prisma.$endereco_clientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Endereco_cliente.
     * @param {endereco_clienteUpdateArgs} args - Arguments to update one Endereco_cliente.
     * @example
     * // Update one Endereco_cliente
     * const endereco_cliente = await prisma.endereco_cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends endereco_clienteUpdateArgs>(args: SelectSubset<T, endereco_clienteUpdateArgs<ExtArgs>>): Prisma__endereco_clienteClient<$Result.GetResult<Prisma.$endereco_clientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Endereco_clientes.
     * @param {endereco_clienteDeleteManyArgs} args - Arguments to filter Endereco_clientes to delete.
     * @example
     * // Delete a few Endereco_clientes
     * const { count } = await prisma.endereco_cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends endereco_clienteDeleteManyArgs>(args?: SelectSubset<T, endereco_clienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Endereco_clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {endereco_clienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Endereco_clientes
     * const endereco_cliente = await prisma.endereco_cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends endereco_clienteUpdateManyArgs>(args: SelectSubset<T, endereco_clienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Endereco_clientes and returns the data updated in the database.
     * @param {endereco_clienteUpdateManyAndReturnArgs} args - Arguments to update many Endereco_clientes.
     * @example
     * // Update many Endereco_clientes
     * const endereco_cliente = await prisma.endereco_cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Endereco_clientes and only return the `id`
     * const endereco_clienteWithIdOnly = await prisma.endereco_cliente.updateManyAndReturn({
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
    updateManyAndReturn<T extends endereco_clienteUpdateManyAndReturnArgs>(args: SelectSubset<T, endereco_clienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$endereco_clientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Endereco_cliente.
     * @param {endereco_clienteUpsertArgs} args - Arguments to update or create a Endereco_cliente.
     * @example
     * // Update or create a Endereco_cliente
     * const endereco_cliente = await prisma.endereco_cliente.upsert({
     *   create: {
     *     // ... data to create a Endereco_cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Endereco_cliente we want to update
     *   }
     * })
     */
    upsert<T extends endereco_clienteUpsertArgs>(args: SelectSubset<T, endereco_clienteUpsertArgs<ExtArgs>>): Prisma__endereco_clienteClient<$Result.GetResult<Prisma.$endereco_clientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Endereco_clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {endereco_clienteCountArgs} args - Arguments to filter Endereco_clientes to count.
     * @example
     * // Count the number of Endereco_clientes
     * const count = await prisma.endereco_cliente.count({
     *   where: {
     *     // ... the filter for the Endereco_clientes we want to count
     *   }
     * })
    **/
    count<T extends endereco_clienteCountArgs>(
      args?: Subset<T, endereco_clienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Endereco_clienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Endereco_cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Endereco_clienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Endereco_clienteAggregateArgs>(args: Subset<T, Endereco_clienteAggregateArgs>): Prisma.PrismaPromise<GetEndereco_clienteAggregateType<T>>

    /**
     * Group by Endereco_cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {endereco_clienteGroupByArgs} args - Group by arguments.
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
      T extends endereco_clienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: endereco_clienteGroupByArgs['orderBy'] }
        : { orderBy?: endereco_clienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, endereco_clienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEndereco_clienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the endereco_cliente model
   */
  readonly fields: endereco_clienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for endereco_cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__endereco_clienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends clienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clienteDefaultArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the endereco_cliente model
   */
  interface endereco_clienteFieldRefs {
    readonly id: FieldRef<"endereco_cliente", 'Int'>
    readonly codigo_postal: FieldRef<"endereco_cliente", 'String'>
    readonly numero_residencial: FieldRef<"endereco_cliente", 'String'>
    readonly status: FieldRef<"endereco_cliente", 'Boolean'>
    readonly uuid_cliente: FieldRef<"endereco_cliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * endereco_cliente findUnique
   */
  export type endereco_clienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco_cliente
     */
    select?: endereco_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco_cliente
     */
    omit?: endereco_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereco_clienteInclude<ExtArgs> | null
    /**
     * Filter, which endereco_cliente to fetch.
     */
    where: endereco_clienteWhereUniqueInput
  }

  /**
   * endereco_cliente findUniqueOrThrow
   */
  export type endereco_clienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco_cliente
     */
    select?: endereco_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco_cliente
     */
    omit?: endereco_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereco_clienteInclude<ExtArgs> | null
    /**
     * Filter, which endereco_cliente to fetch.
     */
    where: endereco_clienteWhereUniqueInput
  }

  /**
   * endereco_cliente findFirst
   */
  export type endereco_clienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco_cliente
     */
    select?: endereco_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco_cliente
     */
    omit?: endereco_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereco_clienteInclude<ExtArgs> | null
    /**
     * Filter, which endereco_cliente to fetch.
     */
    where?: endereco_clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of endereco_clientes to fetch.
     */
    orderBy?: endereco_clienteOrderByWithRelationInput | endereco_clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for endereco_clientes.
     */
    cursor?: endereco_clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` endereco_clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` endereco_clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of endereco_clientes.
     */
    distinct?: Endereco_clienteScalarFieldEnum | Endereco_clienteScalarFieldEnum[]
  }

  /**
   * endereco_cliente findFirstOrThrow
   */
  export type endereco_clienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco_cliente
     */
    select?: endereco_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco_cliente
     */
    omit?: endereco_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereco_clienteInclude<ExtArgs> | null
    /**
     * Filter, which endereco_cliente to fetch.
     */
    where?: endereco_clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of endereco_clientes to fetch.
     */
    orderBy?: endereco_clienteOrderByWithRelationInput | endereco_clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for endereco_clientes.
     */
    cursor?: endereco_clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` endereco_clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` endereco_clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of endereco_clientes.
     */
    distinct?: Endereco_clienteScalarFieldEnum | Endereco_clienteScalarFieldEnum[]
  }

  /**
   * endereco_cliente findMany
   */
  export type endereco_clienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco_cliente
     */
    select?: endereco_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco_cliente
     */
    omit?: endereco_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereco_clienteInclude<ExtArgs> | null
    /**
     * Filter, which endereco_clientes to fetch.
     */
    where?: endereco_clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of endereco_clientes to fetch.
     */
    orderBy?: endereco_clienteOrderByWithRelationInput | endereco_clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing endereco_clientes.
     */
    cursor?: endereco_clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` endereco_clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` endereco_clientes.
     */
    skip?: number
    distinct?: Endereco_clienteScalarFieldEnum | Endereco_clienteScalarFieldEnum[]
  }

  /**
   * endereco_cliente create
   */
  export type endereco_clienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco_cliente
     */
    select?: endereco_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco_cliente
     */
    omit?: endereco_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereco_clienteInclude<ExtArgs> | null
    /**
     * The data needed to create a endereco_cliente.
     */
    data: XOR<endereco_clienteCreateInput, endereco_clienteUncheckedCreateInput>
  }

  /**
   * endereco_cliente createMany
   */
  export type endereco_clienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many endereco_clientes.
     */
    data: endereco_clienteCreateManyInput | endereco_clienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * endereco_cliente createManyAndReturn
   */
  export type endereco_clienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco_cliente
     */
    select?: endereco_clienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the endereco_cliente
     */
    omit?: endereco_clienteOmit<ExtArgs> | null
    /**
     * The data used to create many endereco_clientes.
     */
    data: endereco_clienteCreateManyInput | endereco_clienteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereco_clienteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * endereco_cliente update
   */
  export type endereco_clienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco_cliente
     */
    select?: endereco_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco_cliente
     */
    omit?: endereco_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereco_clienteInclude<ExtArgs> | null
    /**
     * The data needed to update a endereco_cliente.
     */
    data: XOR<endereco_clienteUpdateInput, endereco_clienteUncheckedUpdateInput>
    /**
     * Choose, which endereco_cliente to update.
     */
    where: endereco_clienteWhereUniqueInput
  }

  /**
   * endereco_cliente updateMany
   */
  export type endereco_clienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update endereco_clientes.
     */
    data: XOR<endereco_clienteUpdateManyMutationInput, endereco_clienteUncheckedUpdateManyInput>
    /**
     * Filter which endereco_clientes to update
     */
    where?: endereco_clienteWhereInput
    /**
     * Limit how many endereco_clientes to update.
     */
    limit?: number
  }

  /**
   * endereco_cliente updateManyAndReturn
   */
  export type endereco_clienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco_cliente
     */
    select?: endereco_clienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the endereco_cliente
     */
    omit?: endereco_clienteOmit<ExtArgs> | null
    /**
     * The data used to update endereco_clientes.
     */
    data: XOR<endereco_clienteUpdateManyMutationInput, endereco_clienteUncheckedUpdateManyInput>
    /**
     * Filter which endereco_clientes to update
     */
    where?: endereco_clienteWhereInput
    /**
     * Limit how many endereco_clientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereco_clienteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * endereco_cliente upsert
   */
  export type endereco_clienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco_cliente
     */
    select?: endereco_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco_cliente
     */
    omit?: endereco_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereco_clienteInclude<ExtArgs> | null
    /**
     * The filter to search for the endereco_cliente to update in case it exists.
     */
    where: endereco_clienteWhereUniqueInput
    /**
     * In case the endereco_cliente found by the `where` argument doesn't exist, create a new endereco_cliente with this data.
     */
    create: XOR<endereco_clienteCreateInput, endereco_clienteUncheckedCreateInput>
    /**
     * In case the endereco_cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<endereco_clienteUpdateInput, endereco_clienteUncheckedUpdateInput>
  }

  /**
   * endereco_cliente delete
   */
  export type endereco_clienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco_cliente
     */
    select?: endereco_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco_cliente
     */
    omit?: endereco_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereco_clienteInclude<ExtArgs> | null
    /**
     * Filter which endereco_cliente to delete.
     */
    where: endereco_clienteWhereUniqueInput
  }

  /**
   * endereco_cliente deleteMany
   */
  export type endereco_clienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which endereco_clientes to delete
     */
    where?: endereco_clienteWhereInput
    /**
     * Limit how many endereco_clientes to delete.
     */
    limit?: number
  }

  /**
   * endereco_cliente without action
   */
  export type endereco_clienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco_cliente
     */
    select?: endereco_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco_cliente
     */
    omit?: endereco_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: endereco_clienteInclude<ExtArgs> | null
  }


  /**
   * Model rede_social_cliente
   */

  export type AggregateRede_social_cliente = {
    _count: Rede_social_clienteCountAggregateOutputType | null
    _avg: Rede_social_clienteAvgAggregateOutputType | null
    _sum: Rede_social_clienteSumAggregateOutputType | null
    _min: Rede_social_clienteMinAggregateOutputType | null
    _max: Rede_social_clienteMaxAggregateOutputType | null
  }

  export type Rede_social_clienteAvgAggregateOutputType = {
    id: number | null
  }

  export type Rede_social_clienteSumAggregateOutputType = {
    id: number | null
  }

  export type Rede_social_clienteMinAggregateOutputType = {
    id: number | null
    uuid_cliente: string | null
    url: string | null
  }

  export type Rede_social_clienteMaxAggregateOutputType = {
    id: number | null
    uuid_cliente: string | null
    url: string | null
  }

  export type Rede_social_clienteCountAggregateOutputType = {
    id: number
    uuid_cliente: number
    url: number
    _all: number
  }


  export type Rede_social_clienteAvgAggregateInputType = {
    id?: true
  }

  export type Rede_social_clienteSumAggregateInputType = {
    id?: true
  }

  export type Rede_social_clienteMinAggregateInputType = {
    id?: true
    uuid_cliente?: true
    url?: true
  }

  export type Rede_social_clienteMaxAggregateInputType = {
    id?: true
    uuid_cliente?: true
    url?: true
  }

  export type Rede_social_clienteCountAggregateInputType = {
    id?: true
    uuid_cliente?: true
    url?: true
    _all?: true
  }

  export type Rede_social_clienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rede_social_cliente to aggregate.
     */
    where?: rede_social_clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rede_social_clientes to fetch.
     */
    orderBy?: rede_social_clienteOrderByWithRelationInput | rede_social_clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rede_social_clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rede_social_clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rede_social_clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rede_social_clientes
    **/
    _count?: true | Rede_social_clienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rede_social_clienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rede_social_clienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rede_social_clienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rede_social_clienteMaxAggregateInputType
  }

  export type GetRede_social_clienteAggregateType<T extends Rede_social_clienteAggregateArgs> = {
        [P in keyof T & keyof AggregateRede_social_cliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRede_social_cliente[P]>
      : GetScalarType<T[P], AggregateRede_social_cliente[P]>
  }




  export type rede_social_clienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rede_social_clienteWhereInput
    orderBy?: rede_social_clienteOrderByWithAggregationInput | rede_social_clienteOrderByWithAggregationInput[]
    by: Rede_social_clienteScalarFieldEnum[] | Rede_social_clienteScalarFieldEnum
    having?: rede_social_clienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rede_social_clienteCountAggregateInputType | true
    _avg?: Rede_social_clienteAvgAggregateInputType
    _sum?: Rede_social_clienteSumAggregateInputType
    _min?: Rede_social_clienteMinAggregateInputType
    _max?: Rede_social_clienteMaxAggregateInputType
  }

  export type Rede_social_clienteGroupByOutputType = {
    id: number
    uuid_cliente: string
    url: string
    _count: Rede_social_clienteCountAggregateOutputType | null
    _avg: Rede_social_clienteAvgAggregateOutputType | null
    _sum: Rede_social_clienteSumAggregateOutputType | null
    _min: Rede_social_clienteMinAggregateOutputType | null
    _max: Rede_social_clienteMaxAggregateOutputType | null
  }

  type GetRede_social_clienteGroupByPayload<T extends rede_social_clienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rede_social_clienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rede_social_clienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rede_social_clienteGroupByOutputType[P]>
            : GetScalarType<T[P], Rede_social_clienteGroupByOutputType[P]>
        }
      >
    >


  export type rede_social_clienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid_cliente?: boolean
    url?: boolean
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rede_social_cliente"]>

  export type rede_social_clienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid_cliente?: boolean
    url?: boolean
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rede_social_cliente"]>

  export type rede_social_clienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid_cliente?: boolean
    url?: boolean
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rede_social_cliente"]>

  export type rede_social_clienteSelectScalar = {
    id?: boolean
    uuid_cliente?: boolean
    url?: boolean
  }

  export type rede_social_clienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid_cliente" | "url", ExtArgs["result"]["rede_social_cliente"]>
  export type rede_social_clienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
  }
  export type rede_social_clienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
  }
  export type rede_social_clienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
  }

  export type $rede_social_clientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rede_social_cliente"
    objects: {
      cliente: Prisma.$clientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid_cliente: string
      url: string
    }, ExtArgs["result"]["rede_social_cliente"]>
    composites: {}
  }

  type rede_social_clienteGetPayload<S extends boolean | null | undefined | rede_social_clienteDefaultArgs> = $Result.GetResult<Prisma.$rede_social_clientePayload, S>

  type rede_social_clienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rede_social_clienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Rede_social_clienteCountAggregateInputType | true
    }

  export interface rede_social_clienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rede_social_cliente'], meta: { name: 'rede_social_cliente' } }
    /**
     * Find zero or one Rede_social_cliente that matches the filter.
     * @param {rede_social_clienteFindUniqueArgs} args - Arguments to find a Rede_social_cliente
     * @example
     * // Get one Rede_social_cliente
     * const rede_social_cliente = await prisma.rede_social_cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rede_social_clienteFindUniqueArgs>(args: SelectSubset<T, rede_social_clienteFindUniqueArgs<ExtArgs>>): Prisma__rede_social_clienteClient<$Result.GetResult<Prisma.$rede_social_clientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rede_social_cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rede_social_clienteFindUniqueOrThrowArgs} args - Arguments to find a Rede_social_cliente
     * @example
     * // Get one Rede_social_cliente
     * const rede_social_cliente = await prisma.rede_social_cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rede_social_clienteFindUniqueOrThrowArgs>(args: SelectSubset<T, rede_social_clienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rede_social_clienteClient<$Result.GetResult<Prisma.$rede_social_clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rede_social_cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rede_social_clienteFindFirstArgs} args - Arguments to find a Rede_social_cliente
     * @example
     * // Get one Rede_social_cliente
     * const rede_social_cliente = await prisma.rede_social_cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rede_social_clienteFindFirstArgs>(args?: SelectSubset<T, rede_social_clienteFindFirstArgs<ExtArgs>>): Prisma__rede_social_clienteClient<$Result.GetResult<Prisma.$rede_social_clientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rede_social_cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rede_social_clienteFindFirstOrThrowArgs} args - Arguments to find a Rede_social_cliente
     * @example
     * // Get one Rede_social_cliente
     * const rede_social_cliente = await prisma.rede_social_cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rede_social_clienteFindFirstOrThrowArgs>(args?: SelectSubset<T, rede_social_clienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__rede_social_clienteClient<$Result.GetResult<Prisma.$rede_social_clientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rede_social_clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rede_social_clienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rede_social_clientes
     * const rede_social_clientes = await prisma.rede_social_cliente.findMany()
     * 
     * // Get first 10 Rede_social_clientes
     * const rede_social_clientes = await prisma.rede_social_cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rede_social_clienteWithIdOnly = await prisma.rede_social_cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rede_social_clienteFindManyArgs>(args?: SelectSubset<T, rede_social_clienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rede_social_clientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rede_social_cliente.
     * @param {rede_social_clienteCreateArgs} args - Arguments to create a Rede_social_cliente.
     * @example
     * // Create one Rede_social_cliente
     * const Rede_social_cliente = await prisma.rede_social_cliente.create({
     *   data: {
     *     // ... data to create a Rede_social_cliente
     *   }
     * })
     * 
     */
    create<T extends rede_social_clienteCreateArgs>(args: SelectSubset<T, rede_social_clienteCreateArgs<ExtArgs>>): Prisma__rede_social_clienteClient<$Result.GetResult<Prisma.$rede_social_clientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rede_social_clientes.
     * @param {rede_social_clienteCreateManyArgs} args - Arguments to create many Rede_social_clientes.
     * @example
     * // Create many Rede_social_clientes
     * const rede_social_cliente = await prisma.rede_social_cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rede_social_clienteCreateManyArgs>(args?: SelectSubset<T, rede_social_clienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rede_social_clientes and returns the data saved in the database.
     * @param {rede_social_clienteCreateManyAndReturnArgs} args - Arguments to create many Rede_social_clientes.
     * @example
     * // Create many Rede_social_clientes
     * const rede_social_cliente = await prisma.rede_social_cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rede_social_clientes and only return the `id`
     * const rede_social_clienteWithIdOnly = await prisma.rede_social_cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rede_social_clienteCreateManyAndReturnArgs>(args?: SelectSubset<T, rede_social_clienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rede_social_clientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rede_social_cliente.
     * @param {rede_social_clienteDeleteArgs} args - Arguments to delete one Rede_social_cliente.
     * @example
     * // Delete one Rede_social_cliente
     * const Rede_social_cliente = await prisma.rede_social_cliente.delete({
     *   where: {
     *     // ... filter to delete one Rede_social_cliente
     *   }
     * })
     * 
     */
    delete<T extends rede_social_clienteDeleteArgs>(args: SelectSubset<T, rede_social_clienteDeleteArgs<ExtArgs>>): Prisma__rede_social_clienteClient<$Result.GetResult<Prisma.$rede_social_clientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rede_social_cliente.
     * @param {rede_social_clienteUpdateArgs} args - Arguments to update one Rede_social_cliente.
     * @example
     * // Update one Rede_social_cliente
     * const rede_social_cliente = await prisma.rede_social_cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rede_social_clienteUpdateArgs>(args: SelectSubset<T, rede_social_clienteUpdateArgs<ExtArgs>>): Prisma__rede_social_clienteClient<$Result.GetResult<Prisma.$rede_social_clientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rede_social_clientes.
     * @param {rede_social_clienteDeleteManyArgs} args - Arguments to filter Rede_social_clientes to delete.
     * @example
     * // Delete a few Rede_social_clientes
     * const { count } = await prisma.rede_social_cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rede_social_clienteDeleteManyArgs>(args?: SelectSubset<T, rede_social_clienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rede_social_clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rede_social_clienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rede_social_clientes
     * const rede_social_cliente = await prisma.rede_social_cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rede_social_clienteUpdateManyArgs>(args: SelectSubset<T, rede_social_clienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rede_social_clientes and returns the data updated in the database.
     * @param {rede_social_clienteUpdateManyAndReturnArgs} args - Arguments to update many Rede_social_clientes.
     * @example
     * // Update many Rede_social_clientes
     * const rede_social_cliente = await prisma.rede_social_cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rede_social_clientes and only return the `id`
     * const rede_social_clienteWithIdOnly = await prisma.rede_social_cliente.updateManyAndReturn({
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
    updateManyAndReturn<T extends rede_social_clienteUpdateManyAndReturnArgs>(args: SelectSubset<T, rede_social_clienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rede_social_clientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rede_social_cliente.
     * @param {rede_social_clienteUpsertArgs} args - Arguments to update or create a Rede_social_cliente.
     * @example
     * // Update or create a Rede_social_cliente
     * const rede_social_cliente = await prisma.rede_social_cliente.upsert({
     *   create: {
     *     // ... data to create a Rede_social_cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rede_social_cliente we want to update
     *   }
     * })
     */
    upsert<T extends rede_social_clienteUpsertArgs>(args: SelectSubset<T, rede_social_clienteUpsertArgs<ExtArgs>>): Prisma__rede_social_clienteClient<$Result.GetResult<Prisma.$rede_social_clientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rede_social_clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rede_social_clienteCountArgs} args - Arguments to filter Rede_social_clientes to count.
     * @example
     * // Count the number of Rede_social_clientes
     * const count = await prisma.rede_social_cliente.count({
     *   where: {
     *     // ... the filter for the Rede_social_clientes we want to count
     *   }
     * })
    **/
    count<T extends rede_social_clienteCountArgs>(
      args?: Subset<T, rede_social_clienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rede_social_clienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rede_social_cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rede_social_clienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Rede_social_clienteAggregateArgs>(args: Subset<T, Rede_social_clienteAggregateArgs>): Prisma.PrismaPromise<GetRede_social_clienteAggregateType<T>>

    /**
     * Group by Rede_social_cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rede_social_clienteGroupByArgs} args - Group by arguments.
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
      T extends rede_social_clienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rede_social_clienteGroupByArgs['orderBy'] }
        : { orderBy?: rede_social_clienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rede_social_clienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRede_social_clienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rede_social_cliente model
   */
  readonly fields: rede_social_clienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rede_social_cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rede_social_clienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends clienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clienteDefaultArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the rede_social_cliente model
   */
  interface rede_social_clienteFieldRefs {
    readonly id: FieldRef<"rede_social_cliente", 'Int'>
    readonly uuid_cliente: FieldRef<"rede_social_cliente", 'String'>
    readonly url: FieldRef<"rede_social_cliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * rede_social_cliente findUnique
   */
  export type rede_social_clienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rede_social_cliente
     */
    select?: rede_social_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rede_social_cliente
     */
    omit?: rede_social_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rede_social_clienteInclude<ExtArgs> | null
    /**
     * Filter, which rede_social_cliente to fetch.
     */
    where: rede_social_clienteWhereUniqueInput
  }

  /**
   * rede_social_cliente findUniqueOrThrow
   */
  export type rede_social_clienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rede_social_cliente
     */
    select?: rede_social_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rede_social_cliente
     */
    omit?: rede_social_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rede_social_clienteInclude<ExtArgs> | null
    /**
     * Filter, which rede_social_cliente to fetch.
     */
    where: rede_social_clienteWhereUniqueInput
  }

  /**
   * rede_social_cliente findFirst
   */
  export type rede_social_clienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rede_social_cliente
     */
    select?: rede_social_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rede_social_cliente
     */
    omit?: rede_social_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rede_social_clienteInclude<ExtArgs> | null
    /**
     * Filter, which rede_social_cliente to fetch.
     */
    where?: rede_social_clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rede_social_clientes to fetch.
     */
    orderBy?: rede_social_clienteOrderByWithRelationInput | rede_social_clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rede_social_clientes.
     */
    cursor?: rede_social_clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rede_social_clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rede_social_clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rede_social_clientes.
     */
    distinct?: Rede_social_clienteScalarFieldEnum | Rede_social_clienteScalarFieldEnum[]
  }

  /**
   * rede_social_cliente findFirstOrThrow
   */
  export type rede_social_clienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rede_social_cliente
     */
    select?: rede_social_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rede_social_cliente
     */
    omit?: rede_social_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rede_social_clienteInclude<ExtArgs> | null
    /**
     * Filter, which rede_social_cliente to fetch.
     */
    where?: rede_social_clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rede_social_clientes to fetch.
     */
    orderBy?: rede_social_clienteOrderByWithRelationInput | rede_social_clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rede_social_clientes.
     */
    cursor?: rede_social_clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rede_social_clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rede_social_clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rede_social_clientes.
     */
    distinct?: Rede_social_clienteScalarFieldEnum | Rede_social_clienteScalarFieldEnum[]
  }

  /**
   * rede_social_cliente findMany
   */
  export type rede_social_clienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rede_social_cliente
     */
    select?: rede_social_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rede_social_cliente
     */
    omit?: rede_social_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rede_social_clienteInclude<ExtArgs> | null
    /**
     * Filter, which rede_social_clientes to fetch.
     */
    where?: rede_social_clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rede_social_clientes to fetch.
     */
    orderBy?: rede_social_clienteOrderByWithRelationInput | rede_social_clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rede_social_clientes.
     */
    cursor?: rede_social_clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rede_social_clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rede_social_clientes.
     */
    skip?: number
    distinct?: Rede_social_clienteScalarFieldEnum | Rede_social_clienteScalarFieldEnum[]
  }

  /**
   * rede_social_cliente create
   */
  export type rede_social_clienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rede_social_cliente
     */
    select?: rede_social_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rede_social_cliente
     */
    omit?: rede_social_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rede_social_clienteInclude<ExtArgs> | null
    /**
     * The data needed to create a rede_social_cliente.
     */
    data: XOR<rede_social_clienteCreateInput, rede_social_clienteUncheckedCreateInput>
  }

  /**
   * rede_social_cliente createMany
   */
  export type rede_social_clienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rede_social_clientes.
     */
    data: rede_social_clienteCreateManyInput | rede_social_clienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rede_social_cliente createManyAndReturn
   */
  export type rede_social_clienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rede_social_cliente
     */
    select?: rede_social_clienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rede_social_cliente
     */
    omit?: rede_social_clienteOmit<ExtArgs> | null
    /**
     * The data used to create many rede_social_clientes.
     */
    data: rede_social_clienteCreateManyInput | rede_social_clienteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rede_social_clienteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * rede_social_cliente update
   */
  export type rede_social_clienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rede_social_cliente
     */
    select?: rede_social_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rede_social_cliente
     */
    omit?: rede_social_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rede_social_clienteInclude<ExtArgs> | null
    /**
     * The data needed to update a rede_social_cliente.
     */
    data: XOR<rede_social_clienteUpdateInput, rede_social_clienteUncheckedUpdateInput>
    /**
     * Choose, which rede_social_cliente to update.
     */
    where: rede_social_clienteWhereUniqueInput
  }

  /**
   * rede_social_cliente updateMany
   */
  export type rede_social_clienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rede_social_clientes.
     */
    data: XOR<rede_social_clienteUpdateManyMutationInput, rede_social_clienteUncheckedUpdateManyInput>
    /**
     * Filter which rede_social_clientes to update
     */
    where?: rede_social_clienteWhereInput
    /**
     * Limit how many rede_social_clientes to update.
     */
    limit?: number
  }

  /**
   * rede_social_cliente updateManyAndReturn
   */
  export type rede_social_clienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rede_social_cliente
     */
    select?: rede_social_clienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rede_social_cliente
     */
    omit?: rede_social_clienteOmit<ExtArgs> | null
    /**
     * The data used to update rede_social_clientes.
     */
    data: XOR<rede_social_clienteUpdateManyMutationInput, rede_social_clienteUncheckedUpdateManyInput>
    /**
     * Filter which rede_social_clientes to update
     */
    where?: rede_social_clienteWhereInput
    /**
     * Limit how many rede_social_clientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rede_social_clienteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * rede_social_cliente upsert
   */
  export type rede_social_clienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rede_social_cliente
     */
    select?: rede_social_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rede_social_cliente
     */
    omit?: rede_social_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rede_social_clienteInclude<ExtArgs> | null
    /**
     * The filter to search for the rede_social_cliente to update in case it exists.
     */
    where: rede_social_clienteWhereUniqueInput
    /**
     * In case the rede_social_cliente found by the `where` argument doesn't exist, create a new rede_social_cliente with this data.
     */
    create: XOR<rede_social_clienteCreateInput, rede_social_clienteUncheckedCreateInput>
    /**
     * In case the rede_social_cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rede_social_clienteUpdateInput, rede_social_clienteUncheckedUpdateInput>
  }

  /**
   * rede_social_cliente delete
   */
  export type rede_social_clienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rede_social_cliente
     */
    select?: rede_social_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rede_social_cliente
     */
    omit?: rede_social_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rede_social_clienteInclude<ExtArgs> | null
    /**
     * Filter which rede_social_cliente to delete.
     */
    where: rede_social_clienteWhereUniqueInput
  }

  /**
   * rede_social_cliente deleteMany
   */
  export type rede_social_clienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rede_social_clientes to delete
     */
    where?: rede_social_clienteWhereInput
    /**
     * Limit how many rede_social_clientes to delete.
     */
    limit?: number
  }

  /**
   * rede_social_cliente without action
   */
  export type rede_social_clienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rede_social_cliente
     */
    select?: rede_social_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rede_social_cliente
     */
    omit?: rede_social_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rede_social_clienteInclude<ExtArgs> | null
  }


  /**
   * Model configuracao
   */

  export type AggregateConfiguracao = {
    _count: ConfiguracaoCountAggregateOutputType | null
    _avg: ConfiguracaoAvgAggregateOutputType | null
    _sum: ConfiguracaoSumAggregateOutputType | null
    _min: ConfiguracaoMinAggregateOutputType | null
    _max: ConfiguracaoMaxAggregateOutputType | null
  }

  export type ConfiguracaoAvgAggregateOutputType = {
    id: number | null
    alerta_dias_antes: number | null
    senha_entrada: number | null
  }

  export type ConfiguracaoSumAggregateOutputType = {
    id: number | null
    alerta_dias_antes: number | null
    senha_entrada: number | null
  }

  export type ConfiguracaoMinAggregateOutputType = {
    id: number | null
    alerta_dias_antes: number | null
    senha_entrada: number | null
    uuid_operador: string | null
  }

  export type ConfiguracaoMaxAggregateOutputType = {
    id: number | null
    alerta_dias_antes: number | null
    senha_entrada: number | null
    uuid_operador: string | null
  }

  export type ConfiguracaoCountAggregateOutputType = {
    id: number
    alerta_dias_antes: number
    senha_entrada: number
    uuid_operador: number
    _all: number
  }


  export type ConfiguracaoAvgAggregateInputType = {
    id?: true
    alerta_dias_antes?: true
    senha_entrada?: true
  }

  export type ConfiguracaoSumAggregateInputType = {
    id?: true
    alerta_dias_antes?: true
    senha_entrada?: true
  }

  export type ConfiguracaoMinAggregateInputType = {
    id?: true
    alerta_dias_antes?: true
    senha_entrada?: true
    uuid_operador?: true
  }

  export type ConfiguracaoMaxAggregateInputType = {
    id?: true
    alerta_dias_antes?: true
    senha_entrada?: true
    uuid_operador?: true
  }

  export type ConfiguracaoCountAggregateInputType = {
    id?: true
    alerta_dias_antes?: true
    senha_entrada?: true
    uuid_operador?: true
    _all?: true
  }

  export type ConfiguracaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which configuracao to aggregate.
     */
    where?: configuracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuracaos to fetch.
     */
    orderBy?: configuracaoOrderByWithRelationInput | configuracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: configuracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuracaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuracaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned configuracaos
    **/
    _count?: true | ConfiguracaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConfiguracaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConfiguracaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfiguracaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfiguracaoMaxAggregateInputType
  }

  export type GetConfiguracaoAggregateType<T extends ConfiguracaoAggregateArgs> = {
        [P in keyof T & keyof AggregateConfiguracao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfiguracao[P]>
      : GetScalarType<T[P], AggregateConfiguracao[P]>
  }




  export type configuracaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: configuracaoWhereInput
    orderBy?: configuracaoOrderByWithAggregationInput | configuracaoOrderByWithAggregationInput[]
    by: ConfiguracaoScalarFieldEnum[] | ConfiguracaoScalarFieldEnum
    having?: configuracaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfiguracaoCountAggregateInputType | true
    _avg?: ConfiguracaoAvgAggregateInputType
    _sum?: ConfiguracaoSumAggregateInputType
    _min?: ConfiguracaoMinAggregateInputType
    _max?: ConfiguracaoMaxAggregateInputType
  }

  export type ConfiguracaoGroupByOutputType = {
    id: number
    alerta_dias_antes: number
    senha_entrada: number
    uuid_operador: string
    _count: ConfiguracaoCountAggregateOutputType | null
    _avg: ConfiguracaoAvgAggregateOutputType | null
    _sum: ConfiguracaoSumAggregateOutputType | null
    _min: ConfiguracaoMinAggregateOutputType | null
    _max: ConfiguracaoMaxAggregateOutputType | null
  }

  type GetConfiguracaoGroupByPayload<T extends configuracaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfiguracaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfiguracaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfiguracaoGroupByOutputType[P]>
            : GetScalarType<T[P], ConfiguracaoGroupByOutputType[P]>
        }
      >
    >


  export type configuracaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alerta_dias_antes?: boolean
    senha_entrada?: boolean
    uuid_operador?: boolean
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["configuracao"]>

  export type configuracaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alerta_dias_antes?: boolean
    senha_entrada?: boolean
    uuid_operador?: boolean
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["configuracao"]>

  export type configuracaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alerta_dias_antes?: boolean
    senha_entrada?: boolean
    uuid_operador?: boolean
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["configuracao"]>

  export type configuracaoSelectScalar = {
    id?: boolean
    alerta_dias_antes?: boolean
    senha_entrada?: boolean
    uuid_operador?: boolean
  }

  export type configuracaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alerta_dias_antes" | "senha_entrada" | "uuid_operador", ExtArgs["result"]["configuracao"]>
  export type configuracaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }
  export type configuracaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }
  export type configuracaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }

  export type $configuracaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "configuracao"
    objects: {
      operador: Prisma.$operadorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      alerta_dias_antes: number
      senha_entrada: number
      uuid_operador: string
    }, ExtArgs["result"]["configuracao"]>
    composites: {}
  }

  type configuracaoGetPayload<S extends boolean | null | undefined | configuracaoDefaultArgs> = $Result.GetResult<Prisma.$configuracaoPayload, S>

  type configuracaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<configuracaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfiguracaoCountAggregateInputType | true
    }

  export interface configuracaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['configuracao'], meta: { name: 'configuracao' } }
    /**
     * Find zero or one Configuracao that matches the filter.
     * @param {configuracaoFindUniqueArgs} args - Arguments to find a Configuracao
     * @example
     * // Get one Configuracao
     * const configuracao = await prisma.configuracao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends configuracaoFindUniqueArgs>(args: SelectSubset<T, configuracaoFindUniqueArgs<ExtArgs>>): Prisma__configuracaoClient<$Result.GetResult<Prisma.$configuracaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Configuracao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {configuracaoFindUniqueOrThrowArgs} args - Arguments to find a Configuracao
     * @example
     * // Get one Configuracao
     * const configuracao = await prisma.configuracao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends configuracaoFindUniqueOrThrowArgs>(args: SelectSubset<T, configuracaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__configuracaoClient<$Result.GetResult<Prisma.$configuracaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuracao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracaoFindFirstArgs} args - Arguments to find a Configuracao
     * @example
     * // Get one Configuracao
     * const configuracao = await prisma.configuracao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends configuracaoFindFirstArgs>(args?: SelectSubset<T, configuracaoFindFirstArgs<ExtArgs>>): Prisma__configuracaoClient<$Result.GetResult<Prisma.$configuracaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuracao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracaoFindFirstOrThrowArgs} args - Arguments to find a Configuracao
     * @example
     * // Get one Configuracao
     * const configuracao = await prisma.configuracao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends configuracaoFindFirstOrThrowArgs>(args?: SelectSubset<T, configuracaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__configuracaoClient<$Result.GetResult<Prisma.$configuracaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Configuracaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configuracaos
     * const configuracaos = await prisma.configuracao.findMany()
     * 
     * // Get first 10 Configuracaos
     * const configuracaos = await prisma.configuracao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configuracaoWithIdOnly = await prisma.configuracao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends configuracaoFindManyArgs>(args?: SelectSubset<T, configuracaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$configuracaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Configuracao.
     * @param {configuracaoCreateArgs} args - Arguments to create a Configuracao.
     * @example
     * // Create one Configuracao
     * const Configuracao = await prisma.configuracao.create({
     *   data: {
     *     // ... data to create a Configuracao
     *   }
     * })
     * 
     */
    create<T extends configuracaoCreateArgs>(args: SelectSubset<T, configuracaoCreateArgs<ExtArgs>>): Prisma__configuracaoClient<$Result.GetResult<Prisma.$configuracaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Configuracaos.
     * @param {configuracaoCreateManyArgs} args - Arguments to create many Configuracaos.
     * @example
     * // Create many Configuracaos
     * const configuracao = await prisma.configuracao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends configuracaoCreateManyArgs>(args?: SelectSubset<T, configuracaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Configuracaos and returns the data saved in the database.
     * @param {configuracaoCreateManyAndReturnArgs} args - Arguments to create many Configuracaos.
     * @example
     * // Create many Configuracaos
     * const configuracao = await prisma.configuracao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Configuracaos and only return the `id`
     * const configuracaoWithIdOnly = await prisma.configuracao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends configuracaoCreateManyAndReturnArgs>(args?: SelectSubset<T, configuracaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$configuracaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Configuracao.
     * @param {configuracaoDeleteArgs} args - Arguments to delete one Configuracao.
     * @example
     * // Delete one Configuracao
     * const Configuracao = await prisma.configuracao.delete({
     *   where: {
     *     // ... filter to delete one Configuracao
     *   }
     * })
     * 
     */
    delete<T extends configuracaoDeleteArgs>(args: SelectSubset<T, configuracaoDeleteArgs<ExtArgs>>): Prisma__configuracaoClient<$Result.GetResult<Prisma.$configuracaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Configuracao.
     * @param {configuracaoUpdateArgs} args - Arguments to update one Configuracao.
     * @example
     * // Update one Configuracao
     * const configuracao = await prisma.configuracao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends configuracaoUpdateArgs>(args: SelectSubset<T, configuracaoUpdateArgs<ExtArgs>>): Prisma__configuracaoClient<$Result.GetResult<Prisma.$configuracaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Configuracaos.
     * @param {configuracaoDeleteManyArgs} args - Arguments to filter Configuracaos to delete.
     * @example
     * // Delete a few Configuracaos
     * const { count } = await prisma.configuracao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends configuracaoDeleteManyArgs>(args?: SelectSubset<T, configuracaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configuracaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configuracaos
     * const configuracao = await prisma.configuracao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends configuracaoUpdateManyArgs>(args: SelectSubset<T, configuracaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configuracaos and returns the data updated in the database.
     * @param {configuracaoUpdateManyAndReturnArgs} args - Arguments to update many Configuracaos.
     * @example
     * // Update many Configuracaos
     * const configuracao = await prisma.configuracao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Configuracaos and only return the `id`
     * const configuracaoWithIdOnly = await prisma.configuracao.updateManyAndReturn({
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
    updateManyAndReturn<T extends configuracaoUpdateManyAndReturnArgs>(args: SelectSubset<T, configuracaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$configuracaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Configuracao.
     * @param {configuracaoUpsertArgs} args - Arguments to update or create a Configuracao.
     * @example
     * // Update or create a Configuracao
     * const configuracao = await prisma.configuracao.upsert({
     *   create: {
     *     // ... data to create a Configuracao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Configuracao we want to update
     *   }
     * })
     */
    upsert<T extends configuracaoUpsertArgs>(args: SelectSubset<T, configuracaoUpsertArgs<ExtArgs>>): Prisma__configuracaoClient<$Result.GetResult<Prisma.$configuracaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Configuracaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracaoCountArgs} args - Arguments to filter Configuracaos to count.
     * @example
     * // Count the number of Configuracaos
     * const count = await prisma.configuracao.count({
     *   where: {
     *     // ... the filter for the Configuracaos we want to count
     *   }
     * })
    **/
    count<T extends configuracaoCountArgs>(
      args?: Subset<T, configuracaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfiguracaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Configuracao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConfiguracaoAggregateArgs>(args: Subset<T, ConfiguracaoAggregateArgs>): Prisma.PrismaPromise<GetConfiguracaoAggregateType<T>>

    /**
     * Group by Configuracao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracaoGroupByArgs} args - Group by arguments.
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
      T extends configuracaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: configuracaoGroupByArgs['orderBy'] }
        : { orderBy?: configuracaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, configuracaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfiguracaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the configuracao model
   */
  readonly fields: configuracaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for configuracao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__configuracaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    operador<T extends operadorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, operadorDefaultArgs<ExtArgs>>): Prisma__operadorClient<$Result.GetResult<Prisma.$operadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the configuracao model
   */
  interface configuracaoFieldRefs {
    readonly id: FieldRef<"configuracao", 'Int'>
    readonly alerta_dias_antes: FieldRef<"configuracao", 'Int'>
    readonly senha_entrada: FieldRef<"configuracao", 'Int'>
    readonly uuid_operador: FieldRef<"configuracao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * configuracao findUnique
   */
  export type configuracaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracao
     */
    select?: configuracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracao
     */
    omit?: configuracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracaoInclude<ExtArgs> | null
    /**
     * Filter, which configuracao to fetch.
     */
    where: configuracaoWhereUniqueInput
  }

  /**
   * configuracao findUniqueOrThrow
   */
  export type configuracaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracao
     */
    select?: configuracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracao
     */
    omit?: configuracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracaoInclude<ExtArgs> | null
    /**
     * Filter, which configuracao to fetch.
     */
    where: configuracaoWhereUniqueInput
  }

  /**
   * configuracao findFirst
   */
  export type configuracaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracao
     */
    select?: configuracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracao
     */
    omit?: configuracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracaoInclude<ExtArgs> | null
    /**
     * Filter, which configuracao to fetch.
     */
    where?: configuracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuracaos to fetch.
     */
    orderBy?: configuracaoOrderByWithRelationInput | configuracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for configuracaos.
     */
    cursor?: configuracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuracaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuracaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of configuracaos.
     */
    distinct?: ConfiguracaoScalarFieldEnum | ConfiguracaoScalarFieldEnum[]
  }

  /**
   * configuracao findFirstOrThrow
   */
  export type configuracaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracao
     */
    select?: configuracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracao
     */
    omit?: configuracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracaoInclude<ExtArgs> | null
    /**
     * Filter, which configuracao to fetch.
     */
    where?: configuracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuracaos to fetch.
     */
    orderBy?: configuracaoOrderByWithRelationInput | configuracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for configuracaos.
     */
    cursor?: configuracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuracaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuracaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of configuracaos.
     */
    distinct?: ConfiguracaoScalarFieldEnum | ConfiguracaoScalarFieldEnum[]
  }

  /**
   * configuracao findMany
   */
  export type configuracaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracao
     */
    select?: configuracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracao
     */
    omit?: configuracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracaoInclude<ExtArgs> | null
    /**
     * Filter, which configuracaos to fetch.
     */
    where?: configuracaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuracaos to fetch.
     */
    orderBy?: configuracaoOrderByWithRelationInput | configuracaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing configuracaos.
     */
    cursor?: configuracaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuracaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuracaos.
     */
    skip?: number
    distinct?: ConfiguracaoScalarFieldEnum | ConfiguracaoScalarFieldEnum[]
  }

  /**
   * configuracao create
   */
  export type configuracaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracao
     */
    select?: configuracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracao
     */
    omit?: configuracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracaoInclude<ExtArgs> | null
    /**
     * The data needed to create a configuracao.
     */
    data: XOR<configuracaoCreateInput, configuracaoUncheckedCreateInput>
  }

  /**
   * configuracao createMany
   */
  export type configuracaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many configuracaos.
     */
    data: configuracaoCreateManyInput | configuracaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * configuracao createManyAndReturn
   */
  export type configuracaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracao
     */
    select?: configuracaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the configuracao
     */
    omit?: configuracaoOmit<ExtArgs> | null
    /**
     * The data used to create many configuracaos.
     */
    data: configuracaoCreateManyInput | configuracaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * configuracao update
   */
  export type configuracaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracao
     */
    select?: configuracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracao
     */
    omit?: configuracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracaoInclude<ExtArgs> | null
    /**
     * The data needed to update a configuracao.
     */
    data: XOR<configuracaoUpdateInput, configuracaoUncheckedUpdateInput>
    /**
     * Choose, which configuracao to update.
     */
    where: configuracaoWhereUniqueInput
  }

  /**
   * configuracao updateMany
   */
  export type configuracaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update configuracaos.
     */
    data: XOR<configuracaoUpdateManyMutationInput, configuracaoUncheckedUpdateManyInput>
    /**
     * Filter which configuracaos to update
     */
    where?: configuracaoWhereInput
    /**
     * Limit how many configuracaos to update.
     */
    limit?: number
  }

  /**
   * configuracao updateManyAndReturn
   */
  export type configuracaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracao
     */
    select?: configuracaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the configuracao
     */
    omit?: configuracaoOmit<ExtArgs> | null
    /**
     * The data used to update configuracaos.
     */
    data: XOR<configuracaoUpdateManyMutationInput, configuracaoUncheckedUpdateManyInput>
    /**
     * Filter which configuracaos to update
     */
    where?: configuracaoWhereInput
    /**
     * Limit how many configuracaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * configuracao upsert
   */
  export type configuracaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracao
     */
    select?: configuracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracao
     */
    omit?: configuracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracaoInclude<ExtArgs> | null
    /**
     * The filter to search for the configuracao to update in case it exists.
     */
    where: configuracaoWhereUniqueInput
    /**
     * In case the configuracao found by the `where` argument doesn't exist, create a new configuracao with this data.
     */
    create: XOR<configuracaoCreateInput, configuracaoUncheckedCreateInput>
    /**
     * In case the configuracao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<configuracaoUpdateInput, configuracaoUncheckedUpdateInput>
  }

  /**
   * configuracao delete
   */
  export type configuracaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracao
     */
    select?: configuracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracao
     */
    omit?: configuracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracaoInclude<ExtArgs> | null
    /**
     * Filter which configuracao to delete.
     */
    where: configuracaoWhereUniqueInput
  }

  /**
   * configuracao deleteMany
   */
  export type configuracaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which configuracaos to delete
     */
    where?: configuracaoWhereInput
    /**
     * Limit how many configuracaos to delete.
     */
    limit?: number
  }

  /**
   * configuracao without action
   */
  export type configuracaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracao
     */
    select?: configuracaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracao
     */
    omit?: configuracaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configuracaoInclude<ExtArgs> | null
  }


  /**
   * Model emprestimo
   */

  export type AggregateEmprestimo = {
    _count: EmprestimoCountAggregateOutputType | null
    _avg: EmprestimoAvgAggregateOutputType | null
    _sum: EmprestimoSumAggregateOutputType | null
    _min: EmprestimoMinAggregateOutputType | null
    _max: EmprestimoMaxAggregateOutputType | null
  }

  export type EmprestimoAvgAggregateOutputType = {
    valor_emprestimo: number | null
    valor_receber: number | null
    valor_recebido: number | null
  }

  export type EmprestimoSumAggregateOutputType = {
    valor_emprestimo: number | null
    valor_receber: number | null
    valor_recebido: number | null
  }

  export type EmprestimoMinAggregateOutputType = {
    uuid: string | null
    nome_emprestimo: string | null
    valor_emprestimo: number | null
    valor_receber: number | null
    valor_recebido: number | null
    tipo: $Enums.Tipo_cobranca | null
    data_emprestimo: Date | null
    data_final: Date | null
    observacao: string | null
    status: $Enums.Status_divida | null
    uuid_operador: string | null
    uuid_cliente: string | null
    delete: boolean | null
  }

  export type EmprestimoMaxAggregateOutputType = {
    uuid: string | null
    nome_emprestimo: string | null
    valor_emprestimo: number | null
    valor_receber: number | null
    valor_recebido: number | null
    tipo: $Enums.Tipo_cobranca | null
    data_emprestimo: Date | null
    data_final: Date | null
    observacao: string | null
    status: $Enums.Status_divida | null
    uuid_operador: string | null
    uuid_cliente: string | null
    delete: boolean | null
  }

  export type EmprestimoCountAggregateOutputType = {
    uuid: number
    nome_emprestimo: number
    valor_emprestimo: number
    valor_receber: number
    valor_recebido: number
    tipo: number
    data_emprestimo: number
    data_final: number
    observacao: number
    status: number
    uuid_operador: number
    uuid_cliente: number
    delete: number
    _all: number
  }


  export type EmprestimoAvgAggregateInputType = {
    valor_emprestimo?: true
    valor_receber?: true
    valor_recebido?: true
  }

  export type EmprestimoSumAggregateInputType = {
    valor_emprestimo?: true
    valor_receber?: true
    valor_recebido?: true
  }

  export type EmprestimoMinAggregateInputType = {
    uuid?: true
    nome_emprestimo?: true
    valor_emprestimo?: true
    valor_receber?: true
    valor_recebido?: true
    tipo?: true
    data_emprestimo?: true
    data_final?: true
    observacao?: true
    status?: true
    uuid_operador?: true
    uuid_cliente?: true
    delete?: true
  }

  export type EmprestimoMaxAggregateInputType = {
    uuid?: true
    nome_emprestimo?: true
    valor_emprestimo?: true
    valor_receber?: true
    valor_recebido?: true
    tipo?: true
    data_emprestimo?: true
    data_final?: true
    observacao?: true
    status?: true
    uuid_operador?: true
    uuid_cliente?: true
    delete?: true
  }

  export type EmprestimoCountAggregateInputType = {
    uuid?: true
    nome_emprestimo?: true
    valor_emprestimo?: true
    valor_receber?: true
    valor_recebido?: true
    tipo?: true
    data_emprestimo?: true
    data_final?: true
    observacao?: true
    status?: true
    uuid_operador?: true
    uuid_cliente?: true
    delete?: true
    _all?: true
  }

  export type EmprestimoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which emprestimo to aggregate.
     */
    where?: emprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emprestimos to fetch.
     */
    orderBy?: emprestimoOrderByWithRelationInput | emprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: emprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emprestimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned emprestimos
    **/
    _count?: true | EmprestimoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmprestimoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmprestimoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmprestimoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmprestimoMaxAggregateInputType
  }

  export type GetEmprestimoAggregateType<T extends EmprestimoAggregateArgs> = {
        [P in keyof T & keyof AggregateEmprestimo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmprestimo[P]>
      : GetScalarType<T[P], AggregateEmprestimo[P]>
  }




  export type emprestimoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: emprestimoWhereInput
    orderBy?: emprestimoOrderByWithAggregationInput | emprestimoOrderByWithAggregationInput[]
    by: EmprestimoScalarFieldEnum[] | EmprestimoScalarFieldEnum
    having?: emprestimoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmprestimoCountAggregateInputType | true
    _avg?: EmprestimoAvgAggregateInputType
    _sum?: EmprestimoSumAggregateInputType
    _min?: EmprestimoMinAggregateInputType
    _max?: EmprestimoMaxAggregateInputType
  }

  export type EmprestimoGroupByOutputType = {
    uuid: string
    nome_emprestimo: string
    valor_emprestimo: number
    valor_receber: number
    valor_recebido: number | null
    tipo: $Enums.Tipo_cobranca
    data_emprestimo: Date
    data_final: Date
    observacao: string | null
    status: $Enums.Status_divida
    uuid_operador: string
    uuid_cliente: string
    delete: boolean | null
    _count: EmprestimoCountAggregateOutputType | null
    _avg: EmprestimoAvgAggregateOutputType | null
    _sum: EmprestimoSumAggregateOutputType | null
    _min: EmprestimoMinAggregateOutputType | null
    _max: EmprestimoMaxAggregateOutputType | null
  }

  type GetEmprestimoGroupByPayload<T extends emprestimoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmprestimoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmprestimoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmprestimoGroupByOutputType[P]>
            : GetScalarType<T[P], EmprestimoGroupByOutputType[P]>
        }
      >
    >


  export type emprestimoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    nome_emprestimo?: boolean
    valor_emprestimo?: boolean
    valor_receber?: boolean
    valor_recebido?: boolean
    tipo?: boolean
    data_emprestimo?: boolean
    data_final?: boolean
    observacao?: boolean
    status?: boolean
    uuid_operador?: boolean
    uuid_cliente?: boolean
    delete?: boolean
    pagamentos?: boolean | emprestimo$pagamentosArgs<ExtArgs>
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
    operador?: boolean | operadorDefaultArgs<ExtArgs>
    _count?: boolean | EmprestimoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprestimo"]>

  export type emprestimoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    nome_emprestimo?: boolean
    valor_emprestimo?: boolean
    valor_receber?: boolean
    valor_recebido?: boolean
    tipo?: boolean
    data_emprestimo?: boolean
    data_final?: boolean
    observacao?: boolean
    status?: boolean
    uuid_operador?: boolean
    uuid_cliente?: boolean
    delete?: boolean
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprestimo"]>

  export type emprestimoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    nome_emprestimo?: boolean
    valor_emprestimo?: boolean
    valor_receber?: boolean
    valor_recebido?: boolean
    tipo?: boolean
    data_emprestimo?: boolean
    data_final?: boolean
    observacao?: boolean
    status?: boolean
    uuid_operador?: boolean
    uuid_cliente?: boolean
    delete?: boolean
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprestimo"]>

  export type emprestimoSelectScalar = {
    uuid?: boolean
    nome_emprestimo?: boolean
    valor_emprestimo?: boolean
    valor_receber?: boolean
    valor_recebido?: boolean
    tipo?: boolean
    data_emprestimo?: boolean
    data_final?: boolean
    observacao?: boolean
    status?: boolean
    uuid_operador?: boolean
    uuid_cliente?: boolean
    delete?: boolean
  }

  export type emprestimoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "nome_emprestimo" | "valor_emprestimo" | "valor_receber" | "valor_recebido" | "tipo" | "data_emprestimo" | "data_final" | "observacao" | "status" | "uuid_operador" | "uuid_cliente" | "delete", ExtArgs["result"]["emprestimo"]>
  export type emprestimoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagamentos?: boolean | emprestimo$pagamentosArgs<ExtArgs>
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
    operador?: boolean | operadorDefaultArgs<ExtArgs>
    _count?: boolean | EmprestimoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type emprestimoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }
  export type emprestimoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
    operador?: boolean | operadorDefaultArgs<ExtArgs>
  }

  export type $emprestimoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "emprestimo"
    objects: {
      pagamentos: Prisma.$pagamentoPayload<ExtArgs>[]
      cliente: Prisma.$clientePayload<ExtArgs>
      operador: Prisma.$operadorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      nome_emprestimo: string
      valor_emprestimo: number
      valor_receber: number
      valor_recebido: number | null
      tipo: $Enums.Tipo_cobranca
      data_emprestimo: Date
      data_final: Date
      observacao: string | null
      status: $Enums.Status_divida
      uuid_operador: string
      uuid_cliente: string
      delete: boolean | null
    }, ExtArgs["result"]["emprestimo"]>
    composites: {}
  }

  type emprestimoGetPayload<S extends boolean | null | undefined | emprestimoDefaultArgs> = $Result.GetResult<Prisma.$emprestimoPayload, S>

  type emprestimoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<emprestimoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmprestimoCountAggregateInputType | true
    }

  export interface emprestimoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['emprestimo'], meta: { name: 'emprestimo' } }
    /**
     * Find zero or one Emprestimo that matches the filter.
     * @param {emprestimoFindUniqueArgs} args - Arguments to find a Emprestimo
     * @example
     * // Get one Emprestimo
     * const emprestimo = await prisma.emprestimo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends emprestimoFindUniqueArgs>(args: SelectSubset<T, emprestimoFindUniqueArgs<ExtArgs>>): Prisma__emprestimoClient<$Result.GetResult<Prisma.$emprestimoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Emprestimo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {emprestimoFindUniqueOrThrowArgs} args - Arguments to find a Emprestimo
     * @example
     * // Get one Emprestimo
     * const emprestimo = await prisma.emprestimo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends emprestimoFindUniqueOrThrowArgs>(args: SelectSubset<T, emprestimoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__emprestimoClient<$Result.GetResult<Prisma.$emprestimoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emprestimo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emprestimoFindFirstArgs} args - Arguments to find a Emprestimo
     * @example
     * // Get one Emprestimo
     * const emprestimo = await prisma.emprestimo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends emprestimoFindFirstArgs>(args?: SelectSubset<T, emprestimoFindFirstArgs<ExtArgs>>): Prisma__emprestimoClient<$Result.GetResult<Prisma.$emprestimoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emprestimo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emprestimoFindFirstOrThrowArgs} args - Arguments to find a Emprestimo
     * @example
     * // Get one Emprestimo
     * const emprestimo = await prisma.emprestimo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends emprestimoFindFirstOrThrowArgs>(args?: SelectSubset<T, emprestimoFindFirstOrThrowArgs<ExtArgs>>): Prisma__emprestimoClient<$Result.GetResult<Prisma.$emprestimoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Emprestimos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emprestimoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emprestimos
     * const emprestimos = await prisma.emprestimo.findMany()
     * 
     * // Get first 10 Emprestimos
     * const emprestimos = await prisma.emprestimo.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const emprestimoWithUuidOnly = await prisma.emprestimo.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends emprestimoFindManyArgs>(args?: SelectSubset<T, emprestimoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$emprestimoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Emprestimo.
     * @param {emprestimoCreateArgs} args - Arguments to create a Emprestimo.
     * @example
     * // Create one Emprestimo
     * const Emprestimo = await prisma.emprestimo.create({
     *   data: {
     *     // ... data to create a Emprestimo
     *   }
     * })
     * 
     */
    create<T extends emprestimoCreateArgs>(args: SelectSubset<T, emprestimoCreateArgs<ExtArgs>>): Prisma__emprestimoClient<$Result.GetResult<Prisma.$emprestimoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Emprestimos.
     * @param {emprestimoCreateManyArgs} args - Arguments to create many Emprestimos.
     * @example
     * // Create many Emprestimos
     * const emprestimo = await prisma.emprestimo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends emprestimoCreateManyArgs>(args?: SelectSubset<T, emprestimoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Emprestimos and returns the data saved in the database.
     * @param {emprestimoCreateManyAndReturnArgs} args - Arguments to create many Emprestimos.
     * @example
     * // Create many Emprestimos
     * const emprestimo = await prisma.emprestimo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Emprestimos and only return the `uuid`
     * const emprestimoWithUuidOnly = await prisma.emprestimo.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends emprestimoCreateManyAndReturnArgs>(args?: SelectSubset<T, emprestimoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$emprestimoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Emprestimo.
     * @param {emprestimoDeleteArgs} args - Arguments to delete one Emprestimo.
     * @example
     * // Delete one Emprestimo
     * const Emprestimo = await prisma.emprestimo.delete({
     *   where: {
     *     // ... filter to delete one Emprestimo
     *   }
     * })
     * 
     */
    delete<T extends emprestimoDeleteArgs>(args: SelectSubset<T, emprestimoDeleteArgs<ExtArgs>>): Prisma__emprestimoClient<$Result.GetResult<Prisma.$emprestimoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Emprestimo.
     * @param {emprestimoUpdateArgs} args - Arguments to update one Emprestimo.
     * @example
     * // Update one Emprestimo
     * const emprestimo = await prisma.emprestimo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends emprestimoUpdateArgs>(args: SelectSubset<T, emprestimoUpdateArgs<ExtArgs>>): Prisma__emprestimoClient<$Result.GetResult<Prisma.$emprestimoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Emprestimos.
     * @param {emprestimoDeleteManyArgs} args - Arguments to filter Emprestimos to delete.
     * @example
     * // Delete a few Emprestimos
     * const { count } = await prisma.emprestimo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends emprestimoDeleteManyArgs>(args?: SelectSubset<T, emprestimoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emprestimos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emprestimoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emprestimos
     * const emprestimo = await prisma.emprestimo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends emprestimoUpdateManyArgs>(args: SelectSubset<T, emprestimoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emprestimos and returns the data updated in the database.
     * @param {emprestimoUpdateManyAndReturnArgs} args - Arguments to update many Emprestimos.
     * @example
     * // Update many Emprestimos
     * const emprestimo = await prisma.emprestimo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Emprestimos and only return the `uuid`
     * const emprestimoWithUuidOnly = await prisma.emprestimo.updateManyAndReturn({
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
    updateManyAndReturn<T extends emprestimoUpdateManyAndReturnArgs>(args: SelectSubset<T, emprestimoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$emprestimoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Emprestimo.
     * @param {emprestimoUpsertArgs} args - Arguments to update or create a Emprestimo.
     * @example
     * // Update or create a Emprestimo
     * const emprestimo = await prisma.emprestimo.upsert({
     *   create: {
     *     // ... data to create a Emprestimo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Emprestimo we want to update
     *   }
     * })
     */
    upsert<T extends emprestimoUpsertArgs>(args: SelectSubset<T, emprestimoUpsertArgs<ExtArgs>>): Prisma__emprestimoClient<$Result.GetResult<Prisma.$emprestimoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Emprestimos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emprestimoCountArgs} args - Arguments to filter Emprestimos to count.
     * @example
     * // Count the number of Emprestimos
     * const count = await prisma.emprestimo.count({
     *   where: {
     *     // ... the filter for the Emprestimos we want to count
     *   }
     * })
    **/
    count<T extends emprestimoCountArgs>(
      args?: Subset<T, emprestimoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmprestimoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Emprestimo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmprestimoAggregateArgs>(args: Subset<T, EmprestimoAggregateArgs>): Prisma.PrismaPromise<GetEmprestimoAggregateType<T>>

    /**
     * Group by Emprestimo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emprestimoGroupByArgs} args - Group by arguments.
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
      T extends emprestimoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: emprestimoGroupByArgs['orderBy'] }
        : { orderBy?: emprestimoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, emprestimoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmprestimoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the emprestimo model
   */
  readonly fields: emprestimoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for emprestimo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__emprestimoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pagamentos<T extends emprestimo$pagamentosArgs<ExtArgs> = {}>(args?: Subset<T, emprestimo$pagamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cliente<T extends clienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clienteDefaultArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    operador<T extends operadorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, operadorDefaultArgs<ExtArgs>>): Prisma__operadorClient<$Result.GetResult<Prisma.$operadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the emprestimo model
   */
  interface emprestimoFieldRefs {
    readonly uuid: FieldRef<"emprestimo", 'String'>
    readonly nome_emprestimo: FieldRef<"emprestimo", 'String'>
    readonly valor_emprestimo: FieldRef<"emprestimo", 'Float'>
    readonly valor_receber: FieldRef<"emprestimo", 'Float'>
    readonly valor_recebido: FieldRef<"emprestimo", 'Float'>
    readonly tipo: FieldRef<"emprestimo", 'Tipo_cobranca'>
    readonly data_emprestimo: FieldRef<"emprestimo", 'DateTime'>
    readonly data_final: FieldRef<"emprestimo", 'DateTime'>
    readonly observacao: FieldRef<"emprestimo", 'String'>
    readonly status: FieldRef<"emprestimo", 'Status_divida'>
    readonly uuid_operador: FieldRef<"emprestimo", 'String'>
    readonly uuid_cliente: FieldRef<"emprestimo", 'String'>
    readonly delete: FieldRef<"emprestimo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * emprestimo findUnique
   */
  export type emprestimoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emprestimo
     */
    select?: emprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emprestimo
     */
    omit?: emprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emprestimoInclude<ExtArgs> | null
    /**
     * Filter, which emprestimo to fetch.
     */
    where: emprestimoWhereUniqueInput
  }

  /**
   * emprestimo findUniqueOrThrow
   */
  export type emprestimoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emprestimo
     */
    select?: emprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emprestimo
     */
    omit?: emprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emprestimoInclude<ExtArgs> | null
    /**
     * Filter, which emprestimo to fetch.
     */
    where: emprestimoWhereUniqueInput
  }

  /**
   * emprestimo findFirst
   */
  export type emprestimoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emprestimo
     */
    select?: emprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emprestimo
     */
    omit?: emprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emprestimoInclude<ExtArgs> | null
    /**
     * Filter, which emprestimo to fetch.
     */
    where?: emprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emprestimos to fetch.
     */
    orderBy?: emprestimoOrderByWithRelationInput | emprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for emprestimos.
     */
    cursor?: emprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emprestimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of emprestimos.
     */
    distinct?: EmprestimoScalarFieldEnum | EmprestimoScalarFieldEnum[]
  }

  /**
   * emprestimo findFirstOrThrow
   */
  export type emprestimoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emprestimo
     */
    select?: emprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emprestimo
     */
    omit?: emprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emprestimoInclude<ExtArgs> | null
    /**
     * Filter, which emprestimo to fetch.
     */
    where?: emprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emprestimos to fetch.
     */
    orderBy?: emprestimoOrderByWithRelationInput | emprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for emprestimos.
     */
    cursor?: emprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emprestimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of emprestimos.
     */
    distinct?: EmprestimoScalarFieldEnum | EmprestimoScalarFieldEnum[]
  }

  /**
   * emprestimo findMany
   */
  export type emprestimoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emprestimo
     */
    select?: emprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emprestimo
     */
    omit?: emprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emprestimoInclude<ExtArgs> | null
    /**
     * Filter, which emprestimos to fetch.
     */
    where?: emprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emprestimos to fetch.
     */
    orderBy?: emprestimoOrderByWithRelationInput | emprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing emprestimos.
     */
    cursor?: emprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emprestimos.
     */
    skip?: number
    distinct?: EmprestimoScalarFieldEnum | EmprestimoScalarFieldEnum[]
  }

  /**
   * emprestimo create
   */
  export type emprestimoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emprestimo
     */
    select?: emprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emprestimo
     */
    omit?: emprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emprestimoInclude<ExtArgs> | null
    /**
     * The data needed to create a emprestimo.
     */
    data: XOR<emprestimoCreateInput, emprestimoUncheckedCreateInput>
  }

  /**
   * emprestimo createMany
   */
  export type emprestimoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many emprestimos.
     */
    data: emprestimoCreateManyInput | emprestimoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * emprestimo createManyAndReturn
   */
  export type emprestimoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emprestimo
     */
    select?: emprestimoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the emprestimo
     */
    omit?: emprestimoOmit<ExtArgs> | null
    /**
     * The data used to create many emprestimos.
     */
    data: emprestimoCreateManyInput | emprestimoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emprestimoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * emprestimo update
   */
  export type emprestimoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emprestimo
     */
    select?: emprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emprestimo
     */
    omit?: emprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emprestimoInclude<ExtArgs> | null
    /**
     * The data needed to update a emprestimo.
     */
    data: XOR<emprestimoUpdateInput, emprestimoUncheckedUpdateInput>
    /**
     * Choose, which emprestimo to update.
     */
    where: emprestimoWhereUniqueInput
  }

  /**
   * emprestimo updateMany
   */
  export type emprestimoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update emprestimos.
     */
    data: XOR<emprestimoUpdateManyMutationInput, emprestimoUncheckedUpdateManyInput>
    /**
     * Filter which emprestimos to update
     */
    where?: emprestimoWhereInput
    /**
     * Limit how many emprestimos to update.
     */
    limit?: number
  }

  /**
   * emprestimo updateManyAndReturn
   */
  export type emprestimoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emprestimo
     */
    select?: emprestimoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the emprestimo
     */
    omit?: emprestimoOmit<ExtArgs> | null
    /**
     * The data used to update emprestimos.
     */
    data: XOR<emprestimoUpdateManyMutationInput, emprestimoUncheckedUpdateManyInput>
    /**
     * Filter which emprestimos to update
     */
    where?: emprestimoWhereInput
    /**
     * Limit how many emprestimos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emprestimoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * emprestimo upsert
   */
  export type emprestimoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emprestimo
     */
    select?: emprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emprestimo
     */
    omit?: emprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emprestimoInclude<ExtArgs> | null
    /**
     * The filter to search for the emprestimo to update in case it exists.
     */
    where: emprestimoWhereUniqueInput
    /**
     * In case the emprestimo found by the `where` argument doesn't exist, create a new emprestimo with this data.
     */
    create: XOR<emprestimoCreateInput, emprestimoUncheckedCreateInput>
    /**
     * In case the emprestimo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<emprestimoUpdateInput, emprestimoUncheckedUpdateInput>
  }

  /**
   * emprestimo delete
   */
  export type emprestimoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emprestimo
     */
    select?: emprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emprestimo
     */
    omit?: emprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emprestimoInclude<ExtArgs> | null
    /**
     * Filter which emprestimo to delete.
     */
    where: emprestimoWhereUniqueInput
  }

  /**
   * emprestimo deleteMany
   */
  export type emprestimoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which emprestimos to delete
     */
    where?: emprestimoWhereInput
    /**
     * Limit how many emprestimos to delete.
     */
    limit?: number
  }

  /**
   * emprestimo.pagamentos
   */
  export type emprestimo$pagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento
     */
    omit?: pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    where?: pagamentoWhereInput
    orderBy?: pagamentoOrderByWithRelationInput | pagamentoOrderByWithRelationInput[]
    cursor?: pagamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * emprestimo without action
   */
  export type emprestimoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emprestimo
     */
    select?: emprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emprestimo
     */
    omit?: emprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emprestimoInclude<ExtArgs> | null
  }


  /**
   * Model pagamento
   */

  export type AggregatePagamento = {
    _count: PagamentoCountAggregateOutputType | null
    _avg: PagamentoAvgAggregateOutputType | null
    _sum: PagamentoSumAggregateOutputType | null
    _min: PagamentoMinAggregateOutputType | null
    _max: PagamentoMaxAggregateOutputType | null
  }

  export type PagamentoAvgAggregateOutputType = {
    valor_pago: number | null
    valor_previsto: number | null
  }

  export type PagamentoSumAggregateOutputType = {
    valor_pago: number | null
    valor_previsto: number | null
  }

  export type PagamentoMinAggregateOutputType = {
    uuid: string | null
    valor_pago: number | null
    valor_previsto: number | null
    uuid_emprestimo: string | null
    tipo_pagamento: $Enums.Tipo_pagamento | null
    data_pagamento: Date | null
    data_vencimento: Date | null
    comprovante: Bytes | null
    observacao: string | null
    uuid_cliente: string | null
    uuid_operador: string | null
    delete: boolean | null
    status: $Enums.Status_divida | null
  }

  export type PagamentoMaxAggregateOutputType = {
    uuid: string | null
    valor_pago: number | null
    valor_previsto: number | null
    uuid_emprestimo: string | null
    tipo_pagamento: $Enums.Tipo_pagamento | null
    data_pagamento: Date | null
    data_vencimento: Date | null
    comprovante: Bytes | null
    observacao: string | null
    uuid_cliente: string | null
    uuid_operador: string | null
    delete: boolean | null
    status: $Enums.Status_divida | null
  }

  export type PagamentoCountAggregateOutputType = {
    uuid: number
    valor_pago: number
    valor_previsto: number
    uuid_emprestimo: number
    tipo_pagamento: number
    data_pagamento: number
    data_vencimento: number
    comprovante: number
    observacao: number
    uuid_cliente: number
    uuid_operador: number
    delete: number
    status: number
    _all: number
  }


  export type PagamentoAvgAggregateInputType = {
    valor_pago?: true
    valor_previsto?: true
  }

  export type PagamentoSumAggregateInputType = {
    valor_pago?: true
    valor_previsto?: true
  }

  export type PagamentoMinAggregateInputType = {
    uuid?: true
    valor_pago?: true
    valor_previsto?: true
    uuid_emprestimo?: true
    tipo_pagamento?: true
    data_pagamento?: true
    data_vencimento?: true
    comprovante?: true
    observacao?: true
    uuid_cliente?: true
    uuid_operador?: true
    delete?: true
    status?: true
  }

  export type PagamentoMaxAggregateInputType = {
    uuid?: true
    valor_pago?: true
    valor_previsto?: true
    uuid_emprestimo?: true
    tipo_pagamento?: true
    data_pagamento?: true
    data_vencimento?: true
    comprovante?: true
    observacao?: true
    uuid_cliente?: true
    uuid_operador?: true
    delete?: true
    status?: true
  }

  export type PagamentoCountAggregateInputType = {
    uuid?: true
    valor_pago?: true
    valor_previsto?: true
    uuid_emprestimo?: true
    tipo_pagamento?: true
    data_pagamento?: true
    data_vencimento?: true
    comprovante?: true
    observacao?: true
    uuid_cliente?: true
    uuid_operador?: true
    delete?: true
    status?: true
    _all?: true
  }

  export type PagamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pagamento to aggregate.
     */
    where?: pagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagamentos to fetch.
     */
    orderBy?: pagamentoOrderByWithRelationInput | pagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pagamentos
    **/
    _count?: true | PagamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagamentoMaxAggregateInputType
  }

  export type GetPagamentoAggregateType<T extends PagamentoAggregateArgs> = {
        [P in keyof T & keyof AggregatePagamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagamento[P]>
      : GetScalarType<T[P], AggregatePagamento[P]>
  }




  export type pagamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagamentoWhereInput
    orderBy?: pagamentoOrderByWithAggregationInput | pagamentoOrderByWithAggregationInput[]
    by: PagamentoScalarFieldEnum[] | PagamentoScalarFieldEnum
    having?: pagamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagamentoCountAggregateInputType | true
    _avg?: PagamentoAvgAggregateInputType
    _sum?: PagamentoSumAggregateInputType
    _min?: PagamentoMinAggregateInputType
    _max?: PagamentoMaxAggregateInputType
  }

  export type PagamentoGroupByOutputType = {
    uuid: string
    valor_pago: number | null
    valor_previsto: number
    uuid_emprestimo: string
    tipo_pagamento: $Enums.Tipo_pagamento | null
    data_pagamento: Date | null
    data_vencimento: Date
    comprovante: Bytes | null
    observacao: string | null
    uuid_cliente: string
    uuid_operador: string
    delete: boolean | null
    status: $Enums.Status_divida
    _count: PagamentoCountAggregateOutputType | null
    _avg: PagamentoAvgAggregateOutputType | null
    _sum: PagamentoSumAggregateOutputType | null
    _min: PagamentoMinAggregateOutputType | null
    _max: PagamentoMaxAggregateOutputType | null
  }

  type GetPagamentoGroupByPayload<T extends pagamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagamentoGroupByOutputType[P]>
            : GetScalarType<T[P], PagamentoGroupByOutputType[P]>
        }
      >
    >


  export type pagamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    valor_pago?: boolean
    valor_previsto?: boolean
    uuid_emprestimo?: boolean
    tipo_pagamento?: boolean
    data_pagamento?: boolean
    data_vencimento?: boolean
    comprovante?: boolean
    observacao?: boolean
    uuid_cliente?: boolean
    uuid_operador?: boolean
    delete?: boolean
    status?: boolean
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
    operador?: boolean | operadorDefaultArgs<ExtArgs>
    emprestimo?: boolean | emprestimoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type pagamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    valor_pago?: boolean
    valor_previsto?: boolean
    uuid_emprestimo?: boolean
    tipo_pagamento?: boolean
    data_pagamento?: boolean
    data_vencimento?: boolean
    comprovante?: boolean
    observacao?: boolean
    uuid_cliente?: boolean
    uuid_operador?: boolean
    delete?: boolean
    status?: boolean
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
    operador?: boolean | operadorDefaultArgs<ExtArgs>
    emprestimo?: boolean | emprestimoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type pagamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    valor_pago?: boolean
    valor_previsto?: boolean
    uuid_emprestimo?: boolean
    tipo_pagamento?: boolean
    data_pagamento?: boolean
    data_vencimento?: boolean
    comprovante?: boolean
    observacao?: boolean
    uuid_cliente?: boolean
    uuid_operador?: boolean
    delete?: boolean
    status?: boolean
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
    operador?: boolean | operadorDefaultArgs<ExtArgs>
    emprestimo?: boolean | emprestimoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type pagamentoSelectScalar = {
    uuid?: boolean
    valor_pago?: boolean
    valor_previsto?: boolean
    uuid_emprestimo?: boolean
    tipo_pagamento?: boolean
    data_pagamento?: boolean
    data_vencimento?: boolean
    comprovante?: boolean
    observacao?: boolean
    uuid_cliente?: boolean
    uuid_operador?: boolean
    delete?: boolean
    status?: boolean
  }

  export type pagamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "valor_pago" | "valor_previsto" | "uuid_emprestimo" | "tipo_pagamento" | "data_pagamento" | "data_vencimento" | "comprovante" | "observacao" | "uuid_cliente" | "uuid_operador" | "delete" | "status", ExtArgs["result"]["pagamento"]>
  export type pagamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
    operador?: boolean | operadorDefaultArgs<ExtArgs>
    emprestimo?: boolean | emprestimoDefaultArgs<ExtArgs>
  }
  export type pagamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
    operador?: boolean | operadorDefaultArgs<ExtArgs>
    emprestimo?: boolean | emprestimoDefaultArgs<ExtArgs>
  }
  export type pagamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
    operador?: boolean | operadorDefaultArgs<ExtArgs>
    emprestimo?: boolean | emprestimoDefaultArgs<ExtArgs>
  }

  export type $pagamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pagamento"
    objects: {
      cliente: Prisma.$clientePayload<ExtArgs>
      operador: Prisma.$operadorPayload<ExtArgs>
      emprestimo: Prisma.$emprestimoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      valor_pago: number | null
      valor_previsto: number
      uuid_emprestimo: string
      tipo_pagamento: $Enums.Tipo_pagamento | null
      data_pagamento: Date | null
      data_vencimento: Date
      comprovante: Prisma.Bytes | null
      observacao: string | null
      uuid_cliente: string
      uuid_operador: string
      delete: boolean | null
      status: $Enums.Status_divida
    }, ExtArgs["result"]["pagamento"]>
    composites: {}
  }

  type pagamentoGetPayload<S extends boolean | null | undefined | pagamentoDefaultArgs> = $Result.GetResult<Prisma.$pagamentoPayload, S>

  type pagamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pagamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PagamentoCountAggregateInputType | true
    }

  export interface pagamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pagamento'], meta: { name: 'pagamento' } }
    /**
     * Find zero or one Pagamento that matches the filter.
     * @param {pagamentoFindUniqueArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pagamentoFindUniqueArgs>(args: SelectSubset<T, pagamentoFindUniqueArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pagamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pagamentoFindUniqueOrThrowArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pagamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, pagamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentoFindFirstArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pagamentoFindFirstArgs>(args?: SelectSubset<T, pagamentoFindFirstArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentoFindFirstOrThrowArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pagamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, pagamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pagamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagamentos
     * const pagamentos = await prisma.pagamento.findMany()
     * 
     * // Get first 10 Pagamentos
     * const pagamentos = await prisma.pagamento.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const pagamentoWithUuidOnly = await prisma.pagamento.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends pagamentoFindManyArgs>(args?: SelectSubset<T, pagamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pagamento.
     * @param {pagamentoCreateArgs} args - Arguments to create a Pagamento.
     * @example
     * // Create one Pagamento
     * const Pagamento = await prisma.pagamento.create({
     *   data: {
     *     // ... data to create a Pagamento
     *   }
     * })
     * 
     */
    create<T extends pagamentoCreateArgs>(args: SelectSubset<T, pagamentoCreateArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pagamentos.
     * @param {pagamentoCreateManyArgs} args - Arguments to create many Pagamentos.
     * @example
     * // Create many Pagamentos
     * const pagamento = await prisma.pagamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pagamentoCreateManyArgs>(args?: SelectSubset<T, pagamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pagamentos and returns the data saved in the database.
     * @param {pagamentoCreateManyAndReturnArgs} args - Arguments to create many Pagamentos.
     * @example
     * // Create many Pagamentos
     * const pagamento = await prisma.pagamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pagamentos and only return the `uuid`
     * const pagamentoWithUuidOnly = await prisma.pagamento.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pagamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, pagamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pagamento.
     * @param {pagamentoDeleteArgs} args - Arguments to delete one Pagamento.
     * @example
     * // Delete one Pagamento
     * const Pagamento = await prisma.pagamento.delete({
     *   where: {
     *     // ... filter to delete one Pagamento
     *   }
     * })
     * 
     */
    delete<T extends pagamentoDeleteArgs>(args: SelectSubset<T, pagamentoDeleteArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pagamento.
     * @param {pagamentoUpdateArgs} args - Arguments to update one Pagamento.
     * @example
     * // Update one Pagamento
     * const pagamento = await prisma.pagamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pagamentoUpdateArgs>(args: SelectSubset<T, pagamentoUpdateArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pagamentos.
     * @param {pagamentoDeleteManyArgs} args - Arguments to filter Pagamentos to delete.
     * @example
     * // Delete a few Pagamentos
     * const { count } = await prisma.pagamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pagamentoDeleteManyArgs>(args?: SelectSubset<T, pagamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagamentos
     * const pagamento = await prisma.pagamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pagamentoUpdateManyArgs>(args: SelectSubset<T, pagamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagamentos and returns the data updated in the database.
     * @param {pagamentoUpdateManyAndReturnArgs} args - Arguments to update many Pagamentos.
     * @example
     * // Update many Pagamentos
     * const pagamento = await prisma.pagamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pagamentos and only return the `uuid`
     * const pagamentoWithUuidOnly = await prisma.pagamento.updateManyAndReturn({
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
    updateManyAndReturn<T extends pagamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, pagamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pagamento.
     * @param {pagamentoUpsertArgs} args - Arguments to update or create a Pagamento.
     * @example
     * // Update or create a Pagamento
     * const pagamento = await prisma.pagamento.upsert({
     *   create: {
     *     // ... data to create a Pagamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pagamento we want to update
     *   }
     * })
     */
    upsert<T extends pagamentoUpsertArgs>(args: SelectSubset<T, pagamentoUpsertArgs<ExtArgs>>): Prisma__pagamentoClient<$Result.GetResult<Prisma.$pagamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentoCountArgs} args - Arguments to filter Pagamentos to count.
     * @example
     * // Count the number of Pagamentos
     * const count = await prisma.pagamento.count({
     *   where: {
     *     // ... the filter for the Pagamentos we want to count
     *   }
     * })
    **/
    count<T extends pagamentoCountArgs>(
      args?: Subset<T, pagamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PagamentoAggregateArgs>(args: Subset<T, PagamentoAggregateArgs>): Prisma.PrismaPromise<GetPagamentoAggregateType<T>>

    /**
     * Group by Pagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentoGroupByArgs} args - Group by arguments.
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
      T extends pagamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pagamentoGroupByArgs['orderBy'] }
        : { orderBy?: pagamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pagamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pagamento model
   */
  readonly fields: pagamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pagamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pagamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends clienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clienteDefaultArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    operador<T extends operadorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, operadorDefaultArgs<ExtArgs>>): Prisma__operadorClient<$Result.GetResult<Prisma.$operadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    emprestimo<T extends emprestimoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, emprestimoDefaultArgs<ExtArgs>>): Prisma__emprestimoClient<$Result.GetResult<Prisma.$emprestimoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the pagamento model
   */
  interface pagamentoFieldRefs {
    readonly uuid: FieldRef<"pagamento", 'String'>
    readonly valor_pago: FieldRef<"pagamento", 'Float'>
    readonly valor_previsto: FieldRef<"pagamento", 'Float'>
    readonly uuid_emprestimo: FieldRef<"pagamento", 'String'>
    readonly tipo_pagamento: FieldRef<"pagamento", 'Tipo_pagamento'>
    readonly data_pagamento: FieldRef<"pagamento", 'DateTime'>
    readonly data_vencimento: FieldRef<"pagamento", 'DateTime'>
    readonly comprovante: FieldRef<"pagamento", 'Bytes'>
    readonly observacao: FieldRef<"pagamento", 'String'>
    readonly uuid_cliente: FieldRef<"pagamento", 'String'>
    readonly uuid_operador: FieldRef<"pagamento", 'String'>
    readonly delete: FieldRef<"pagamento", 'Boolean'>
    readonly status: FieldRef<"pagamento", 'Status_divida'>
  }
    

  // Custom InputTypes
  /**
   * pagamento findUnique
   */
  export type pagamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento
     */
    omit?: pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * Filter, which pagamento to fetch.
     */
    where: pagamentoWhereUniqueInput
  }

  /**
   * pagamento findUniqueOrThrow
   */
  export type pagamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento
     */
    omit?: pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * Filter, which pagamento to fetch.
     */
    where: pagamentoWhereUniqueInput
  }

  /**
   * pagamento findFirst
   */
  export type pagamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento
     */
    omit?: pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * Filter, which pagamento to fetch.
     */
    where?: pagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagamentos to fetch.
     */
    orderBy?: pagamentoOrderByWithRelationInput | pagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pagamentos.
     */
    cursor?: pagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagamentos.
     */
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * pagamento findFirstOrThrow
   */
  export type pagamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento
     */
    omit?: pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * Filter, which pagamento to fetch.
     */
    where?: pagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagamentos to fetch.
     */
    orderBy?: pagamentoOrderByWithRelationInput | pagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pagamentos.
     */
    cursor?: pagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagamentos.
     */
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * pagamento findMany
   */
  export type pagamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento
     */
    omit?: pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * Filter, which pagamentos to fetch.
     */
    where?: pagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagamentos to fetch.
     */
    orderBy?: pagamentoOrderByWithRelationInput | pagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pagamentos.
     */
    cursor?: pagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagamentos.
     */
    skip?: number
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * pagamento create
   */
  export type pagamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento
     */
    omit?: pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a pagamento.
     */
    data: XOR<pagamentoCreateInput, pagamentoUncheckedCreateInput>
  }

  /**
   * pagamento createMany
   */
  export type pagamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pagamentos.
     */
    data: pagamentoCreateManyInput | pagamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pagamento createManyAndReturn
   */
  export type pagamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento
     */
    omit?: pagamentoOmit<ExtArgs> | null
    /**
     * The data used to create many pagamentos.
     */
    data: pagamentoCreateManyInput | pagamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pagamento update
   */
  export type pagamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento
     */
    omit?: pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a pagamento.
     */
    data: XOR<pagamentoUpdateInput, pagamentoUncheckedUpdateInput>
    /**
     * Choose, which pagamento to update.
     */
    where: pagamentoWhereUniqueInput
  }

  /**
   * pagamento updateMany
   */
  export type pagamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pagamentos.
     */
    data: XOR<pagamentoUpdateManyMutationInput, pagamentoUncheckedUpdateManyInput>
    /**
     * Filter which pagamentos to update
     */
    where?: pagamentoWhereInput
    /**
     * Limit how many pagamentos to update.
     */
    limit?: number
  }

  /**
   * pagamento updateManyAndReturn
   */
  export type pagamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento
     */
    omit?: pagamentoOmit<ExtArgs> | null
    /**
     * The data used to update pagamentos.
     */
    data: XOR<pagamentoUpdateManyMutationInput, pagamentoUncheckedUpdateManyInput>
    /**
     * Filter which pagamentos to update
     */
    where?: pagamentoWhereInput
    /**
     * Limit how many pagamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pagamento upsert
   */
  export type pagamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento
     */
    omit?: pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the pagamento to update in case it exists.
     */
    where: pagamentoWhereUniqueInput
    /**
     * In case the pagamento found by the `where` argument doesn't exist, create a new pagamento with this data.
     */
    create: XOR<pagamentoCreateInput, pagamentoUncheckedCreateInput>
    /**
     * In case the pagamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pagamentoUpdateInput, pagamentoUncheckedUpdateInput>
  }

  /**
   * pagamento delete
   */
  export type pagamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento
     */
    omit?: pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
    /**
     * Filter which pagamento to delete.
     */
    where: pagamentoWhereUniqueInput
  }

  /**
   * pagamento deleteMany
   */
  export type pagamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pagamentos to delete
     */
    where?: pagamentoWhereInput
    /**
     * Limit how many pagamentos to delete.
     */
    limit?: number
  }

  /**
   * pagamento without action
   */
  export type pagamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamento
     */
    select?: pagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagamento
     */
    omit?: pagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentoInclude<ExtArgs> | null
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


  export const OperadorScalarFieldEnum: {
    uuid: 'uuid',
    nome_completo: 'nome_completo',
    num_cpf: 'num_cpf',
    num_cnpj: 'num_cnpj',
    data_nascimento: 'data_nascimento',
    correio_eletronico: 'correio_eletronico'
  };

  export type OperadorScalarFieldEnum = (typeof OperadorScalarFieldEnum)[keyof typeof OperadorScalarFieldEnum]


  export const Celular_operadorScalarFieldEnum: {
    id: 'id',
    num_cel: 'num_cel',
    status: 'status',
    uuid_operador: 'uuid_operador'
  };

  export type Celular_operadorScalarFieldEnum = (typeof Celular_operadorScalarFieldEnum)[keyof typeof Celular_operadorScalarFieldEnum]


  export const Endereco_operadorScalarFieldEnum: {
    id: 'id',
    codigo_postal: 'codigo_postal',
    numero_residencial: 'numero_residencial',
    status: 'status',
    uuid_operador: 'uuid_operador'
  };

  export type Endereco_operadorScalarFieldEnum = (typeof Endereco_operadorScalarFieldEnum)[keyof typeof Endereco_operadorScalarFieldEnum]


  export const Rede_social_operadorScalarFieldEnum: {
    id: 'id',
    uuid_operador: 'uuid_operador',
    url: 'url'
  };

  export type Rede_social_operadorScalarFieldEnum = (typeof Rede_social_operadorScalarFieldEnum)[keyof typeof Rede_social_operadorScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    uuid: 'uuid',
    nome_completo: 'nome_completo',
    num_cpf: 'num_cpf',
    num_cnpj: 'num_cnpj',
    data_nascimento: 'data_nascimento',
    correio_eletronico: 'correio_eletronico',
    observacao: 'observacao',
    uuid_operador: 'uuid_operador',
    status: 'status',
    delete: 'delete'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const Celular_clienteScalarFieldEnum: {
    id: 'id',
    num_cel: 'num_cel',
    status: 'status',
    uuid_cliente: 'uuid_cliente'
  };

  export type Celular_clienteScalarFieldEnum = (typeof Celular_clienteScalarFieldEnum)[keyof typeof Celular_clienteScalarFieldEnum]


  export const Endereco_clienteScalarFieldEnum: {
    id: 'id',
    codigo_postal: 'codigo_postal',
    numero_residencial: 'numero_residencial',
    status: 'status',
    uuid_cliente: 'uuid_cliente'
  };

  export type Endereco_clienteScalarFieldEnum = (typeof Endereco_clienteScalarFieldEnum)[keyof typeof Endereco_clienteScalarFieldEnum]


  export const Rede_social_clienteScalarFieldEnum: {
    id: 'id',
    uuid_cliente: 'uuid_cliente',
    url: 'url'
  };

  export type Rede_social_clienteScalarFieldEnum = (typeof Rede_social_clienteScalarFieldEnum)[keyof typeof Rede_social_clienteScalarFieldEnum]


  export const ConfiguracaoScalarFieldEnum: {
    id: 'id',
    alerta_dias_antes: 'alerta_dias_antes',
    senha_entrada: 'senha_entrada',
    uuid_operador: 'uuid_operador'
  };

  export type ConfiguracaoScalarFieldEnum = (typeof ConfiguracaoScalarFieldEnum)[keyof typeof ConfiguracaoScalarFieldEnum]


  export const EmprestimoScalarFieldEnum: {
    uuid: 'uuid',
    nome_emprestimo: 'nome_emprestimo',
    valor_emprestimo: 'valor_emprestimo',
    valor_receber: 'valor_receber',
    valor_recebido: 'valor_recebido',
    tipo: 'tipo',
    data_emprestimo: 'data_emprestimo',
    data_final: 'data_final',
    observacao: 'observacao',
    status: 'status',
    uuid_operador: 'uuid_operador',
    uuid_cliente: 'uuid_cliente',
    delete: 'delete'
  };

  export type EmprestimoScalarFieldEnum = (typeof EmprestimoScalarFieldEnum)[keyof typeof EmprestimoScalarFieldEnum]


  export const PagamentoScalarFieldEnum: {
    uuid: 'uuid',
    valor_pago: 'valor_pago',
    valor_previsto: 'valor_previsto',
    uuid_emprestimo: 'uuid_emprestimo',
    tipo_pagamento: 'tipo_pagamento',
    data_pagamento: 'data_pagamento',
    data_vencimento: 'data_vencimento',
    comprovante: 'comprovante',
    observacao: 'observacao',
    uuid_cliente: 'uuid_cliente',
    uuid_operador: 'uuid_operador',
    delete: 'delete',
    status: 'status'
  };

  export type PagamentoScalarFieldEnum = (typeof PagamentoScalarFieldEnum)[keyof typeof PagamentoScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Tipo_cobranca'
   */
  export type EnumTipo_cobrancaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Tipo_cobranca'>
    


  /**
   * Reference to a field of type 'Tipo_cobranca[]'
   */
  export type ListEnumTipo_cobrancaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Tipo_cobranca[]'>
    


  /**
   * Reference to a field of type 'Status_divida'
   */
  export type EnumStatus_dividaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status_divida'>
    


  /**
   * Reference to a field of type 'Status_divida[]'
   */
  export type ListEnumStatus_dividaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status_divida[]'>
    


  /**
   * Reference to a field of type 'Tipo_pagamento'
   */
  export type EnumTipo_pagamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Tipo_pagamento'>
    


  /**
   * Reference to a field of type 'Tipo_pagamento[]'
   */
  export type ListEnumTipo_pagamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Tipo_pagamento[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    
  /**
   * Deep Input Types
   */


  export type operadorWhereInput = {
    AND?: operadorWhereInput | operadorWhereInput[]
    OR?: operadorWhereInput[]
    NOT?: operadorWhereInput | operadorWhereInput[]
    uuid?: StringFilter<"operador"> | string
    nome_completo?: StringFilter<"operador"> | string
    num_cpf?: StringFilter<"operador"> | string
    num_cnpj?: StringNullableFilter<"operador"> | string | null
    data_nascimento?: DateTimeNullableFilter<"operador"> | Date | string | null
    correio_eletronico?: StringFilter<"operador"> | string
    celularOperadors?: Celular_operadorListRelationFilter
    enderecoOperadors?: Endereco_operadorListRelationFilter
    redeSocialOperadors?: Rede_social_operadorListRelationFilter
    clientes?: ClienteListRelationFilter
    configuracaos?: ConfiguracaoListRelationFilter
    emprestimos?: EmprestimoListRelationFilter
    pagamentos?: PagamentoListRelationFilter
  }

  export type operadorOrderByWithRelationInput = {
    uuid?: SortOrder
    nome_completo?: SortOrder
    num_cpf?: SortOrder
    num_cnpj?: SortOrderInput | SortOrder
    data_nascimento?: SortOrderInput | SortOrder
    correio_eletronico?: SortOrder
    celularOperadors?: celular_operadorOrderByRelationAggregateInput
    enderecoOperadors?: endereco_operadorOrderByRelationAggregateInput
    redeSocialOperadors?: rede_social_operadorOrderByRelationAggregateInput
    clientes?: clienteOrderByRelationAggregateInput
    configuracaos?: configuracaoOrderByRelationAggregateInput
    emprestimos?: emprestimoOrderByRelationAggregateInput
    pagamentos?: pagamentoOrderByRelationAggregateInput
  }

  export type operadorWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    num_cpf?: string
    correio_eletronico?: string
    AND?: operadorWhereInput | operadorWhereInput[]
    OR?: operadorWhereInput[]
    NOT?: operadorWhereInput | operadorWhereInput[]
    nome_completo?: StringFilter<"operador"> | string
    num_cnpj?: StringNullableFilter<"operador"> | string | null
    data_nascimento?: DateTimeNullableFilter<"operador"> | Date | string | null
    celularOperadors?: Celular_operadorListRelationFilter
    enderecoOperadors?: Endereco_operadorListRelationFilter
    redeSocialOperadors?: Rede_social_operadorListRelationFilter
    clientes?: ClienteListRelationFilter
    configuracaos?: ConfiguracaoListRelationFilter
    emprestimos?: EmprestimoListRelationFilter
    pagamentos?: PagamentoListRelationFilter
  }, "uuid" | "uuid" | "num_cpf" | "correio_eletronico">

  export type operadorOrderByWithAggregationInput = {
    uuid?: SortOrder
    nome_completo?: SortOrder
    num_cpf?: SortOrder
    num_cnpj?: SortOrderInput | SortOrder
    data_nascimento?: SortOrderInput | SortOrder
    correio_eletronico?: SortOrder
    _count?: operadorCountOrderByAggregateInput
    _max?: operadorMaxOrderByAggregateInput
    _min?: operadorMinOrderByAggregateInput
  }

  export type operadorScalarWhereWithAggregatesInput = {
    AND?: operadorScalarWhereWithAggregatesInput | operadorScalarWhereWithAggregatesInput[]
    OR?: operadorScalarWhereWithAggregatesInput[]
    NOT?: operadorScalarWhereWithAggregatesInput | operadorScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"operador"> | string
    nome_completo?: StringWithAggregatesFilter<"operador"> | string
    num_cpf?: StringWithAggregatesFilter<"operador"> | string
    num_cnpj?: StringNullableWithAggregatesFilter<"operador"> | string | null
    data_nascimento?: DateTimeNullableWithAggregatesFilter<"operador"> | Date | string | null
    correio_eletronico?: StringWithAggregatesFilter<"operador"> | string
  }

  export type celular_operadorWhereInput = {
    AND?: celular_operadorWhereInput | celular_operadorWhereInput[]
    OR?: celular_operadorWhereInput[]
    NOT?: celular_operadorWhereInput | celular_operadorWhereInput[]
    id?: IntFilter<"celular_operador"> | number
    num_cel?: StringFilter<"celular_operador"> | string
    status?: BoolFilter<"celular_operador"> | boolean
    uuid_operador?: StringFilter<"celular_operador"> | string
    operador?: XOR<OperadorScalarRelationFilter, operadorWhereInput>
  }

  export type celular_operadorOrderByWithRelationInput = {
    id?: SortOrder
    num_cel?: SortOrder
    status?: SortOrder
    uuid_operador?: SortOrder
    operador?: operadorOrderByWithRelationInput
  }

  export type celular_operadorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    num_cel?: string
    AND?: celular_operadorWhereInput | celular_operadorWhereInput[]
    OR?: celular_operadorWhereInput[]
    NOT?: celular_operadorWhereInput | celular_operadorWhereInput[]
    status?: BoolFilter<"celular_operador"> | boolean
    uuid_operador?: StringFilter<"celular_operador"> | string
    operador?: XOR<OperadorScalarRelationFilter, operadorWhereInput>
  }, "id" | "num_cel">

  export type celular_operadorOrderByWithAggregationInput = {
    id?: SortOrder
    num_cel?: SortOrder
    status?: SortOrder
    uuid_operador?: SortOrder
    _count?: celular_operadorCountOrderByAggregateInput
    _avg?: celular_operadorAvgOrderByAggregateInput
    _max?: celular_operadorMaxOrderByAggregateInput
    _min?: celular_operadorMinOrderByAggregateInput
    _sum?: celular_operadorSumOrderByAggregateInput
  }

  export type celular_operadorScalarWhereWithAggregatesInput = {
    AND?: celular_operadorScalarWhereWithAggregatesInput | celular_operadorScalarWhereWithAggregatesInput[]
    OR?: celular_operadorScalarWhereWithAggregatesInput[]
    NOT?: celular_operadorScalarWhereWithAggregatesInput | celular_operadorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"celular_operador"> | number
    num_cel?: StringWithAggregatesFilter<"celular_operador"> | string
    status?: BoolWithAggregatesFilter<"celular_operador"> | boolean
    uuid_operador?: StringWithAggregatesFilter<"celular_operador"> | string
  }

  export type endereco_operadorWhereInput = {
    AND?: endereco_operadorWhereInput | endereco_operadorWhereInput[]
    OR?: endereco_operadorWhereInput[]
    NOT?: endereco_operadorWhereInput | endereco_operadorWhereInput[]
    id?: IntFilter<"endereco_operador"> | number
    codigo_postal?: StringFilter<"endereco_operador"> | string
    numero_residencial?: StringFilter<"endereco_operador"> | string
    status?: BoolFilter<"endereco_operador"> | boolean
    uuid_operador?: StringFilter<"endereco_operador"> | string
    operador?: XOR<OperadorScalarRelationFilter, operadorWhereInput>
  }

  export type endereco_operadorOrderByWithRelationInput = {
    id?: SortOrder
    codigo_postal?: SortOrder
    numero_residencial?: SortOrder
    status?: SortOrder
    uuid_operador?: SortOrder
    operador?: operadorOrderByWithRelationInput
  }

  export type endereco_operadorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: endereco_operadorWhereInput | endereco_operadorWhereInput[]
    OR?: endereco_operadorWhereInput[]
    NOT?: endereco_operadorWhereInput | endereco_operadorWhereInput[]
    codigo_postal?: StringFilter<"endereco_operador"> | string
    numero_residencial?: StringFilter<"endereco_operador"> | string
    status?: BoolFilter<"endereco_operador"> | boolean
    uuid_operador?: StringFilter<"endereco_operador"> | string
    operador?: XOR<OperadorScalarRelationFilter, operadorWhereInput>
  }, "id">

  export type endereco_operadorOrderByWithAggregationInput = {
    id?: SortOrder
    codigo_postal?: SortOrder
    numero_residencial?: SortOrder
    status?: SortOrder
    uuid_operador?: SortOrder
    _count?: endereco_operadorCountOrderByAggregateInput
    _avg?: endereco_operadorAvgOrderByAggregateInput
    _max?: endereco_operadorMaxOrderByAggregateInput
    _min?: endereco_operadorMinOrderByAggregateInput
    _sum?: endereco_operadorSumOrderByAggregateInput
  }

  export type endereco_operadorScalarWhereWithAggregatesInput = {
    AND?: endereco_operadorScalarWhereWithAggregatesInput | endereco_operadorScalarWhereWithAggregatesInput[]
    OR?: endereco_operadorScalarWhereWithAggregatesInput[]
    NOT?: endereco_operadorScalarWhereWithAggregatesInput | endereco_operadorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"endereco_operador"> | number
    codigo_postal?: StringWithAggregatesFilter<"endereco_operador"> | string
    numero_residencial?: StringWithAggregatesFilter<"endereco_operador"> | string
    status?: BoolWithAggregatesFilter<"endereco_operador"> | boolean
    uuid_operador?: StringWithAggregatesFilter<"endereco_operador"> | string
  }

  export type rede_social_operadorWhereInput = {
    AND?: rede_social_operadorWhereInput | rede_social_operadorWhereInput[]
    OR?: rede_social_operadorWhereInput[]
    NOT?: rede_social_operadorWhereInput | rede_social_operadorWhereInput[]
    id?: IntFilter<"rede_social_operador"> | number
    uuid_operador?: StringFilter<"rede_social_operador"> | string
    url?: StringFilter<"rede_social_operador"> | string
    operador?: XOR<OperadorScalarRelationFilter, operadorWhereInput>
  }

  export type rede_social_operadorOrderByWithRelationInput = {
    id?: SortOrder
    uuid_operador?: SortOrder
    url?: SortOrder
    operador?: operadorOrderByWithRelationInput
  }

  export type rede_social_operadorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: rede_social_operadorWhereInput | rede_social_operadorWhereInput[]
    OR?: rede_social_operadorWhereInput[]
    NOT?: rede_social_operadorWhereInput | rede_social_operadorWhereInput[]
    uuid_operador?: StringFilter<"rede_social_operador"> | string
    url?: StringFilter<"rede_social_operador"> | string
    operador?: XOR<OperadorScalarRelationFilter, operadorWhereInput>
  }, "id" | "id">

  export type rede_social_operadorOrderByWithAggregationInput = {
    id?: SortOrder
    uuid_operador?: SortOrder
    url?: SortOrder
    _count?: rede_social_operadorCountOrderByAggregateInput
    _avg?: rede_social_operadorAvgOrderByAggregateInput
    _max?: rede_social_operadorMaxOrderByAggregateInput
    _min?: rede_social_operadorMinOrderByAggregateInput
    _sum?: rede_social_operadorSumOrderByAggregateInput
  }

  export type rede_social_operadorScalarWhereWithAggregatesInput = {
    AND?: rede_social_operadorScalarWhereWithAggregatesInput | rede_social_operadorScalarWhereWithAggregatesInput[]
    OR?: rede_social_operadorScalarWhereWithAggregatesInput[]
    NOT?: rede_social_operadorScalarWhereWithAggregatesInput | rede_social_operadorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"rede_social_operador"> | number
    uuid_operador?: StringWithAggregatesFilter<"rede_social_operador"> | string
    url?: StringWithAggregatesFilter<"rede_social_operador"> | string
  }

  export type clienteWhereInput = {
    AND?: clienteWhereInput | clienteWhereInput[]
    OR?: clienteWhereInput[]
    NOT?: clienteWhereInput | clienteWhereInput[]
    uuid?: StringFilter<"cliente"> | string
    nome_completo?: StringFilter<"cliente"> | string
    num_cpf?: StringFilter<"cliente"> | string
    num_cnpj?: StringNullableFilter<"cliente"> | string | null
    data_nascimento?: DateTimeNullableFilter<"cliente"> | Date | string | null
    correio_eletronico?: StringNullableFilter<"cliente"> | string | null
    observacao?: StringNullableFilter<"cliente"> | string | null
    uuid_operador?: StringFilter<"cliente"> | string
    status?: BoolFilter<"cliente"> | boolean
    delete?: BoolNullableFilter<"cliente"> | boolean | null
    celularClientes?: Celular_clienteListRelationFilter
    enderecoClientes?: Endereco_clienteListRelationFilter
    redeSocialClientes?: Rede_social_clienteListRelationFilter
    operador?: XOR<OperadorScalarRelationFilter, operadorWhereInput>
    emprestimos?: EmprestimoListRelationFilter
    pagamentos?: PagamentoListRelationFilter
  }

  export type clienteOrderByWithRelationInput = {
    uuid?: SortOrder
    nome_completo?: SortOrder
    num_cpf?: SortOrder
    num_cnpj?: SortOrderInput | SortOrder
    data_nascimento?: SortOrderInput | SortOrder
    correio_eletronico?: SortOrderInput | SortOrder
    observacao?: SortOrderInput | SortOrder
    uuid_operador?: SortOrder
    status?: SortOrder
    delete?: SortOrderInput | SortOrder
    celularClientes?: celular_clienteOrderByRelationAggregateInput
    enderecoClientes?: endereco_clienteOrderByRelationAggregateInput
    redeSocialClientes?: rede_social_clienteOrderByRelationAggregateInput
    operador?: operadorOrderByWithRelationInput
    emprestimos?: emprestimoOrderByRelationAggregateInput
    pagamentos?: pagamentoOrderByRelationAggregateInput
  }

  export type clienteWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    correio_eletronico?: string
    AND?: clienteWhereInput | clienteWhereInput[]
    OR?: clienteWhereInput[]
    NOT?: clienteWhereInput | clienteWhereInput[]
    nome_completo?: StringFilter<"cliente"> | string
    num_cpf?: StringFilter<"cliente"> | string
    num_cnpj?: StringNullableFilter<"cliente"> | string | null
    data_nascimento?: DateTimeNullableFilter<"cliente"> | Date | string | null
    observacao?: StringNullableFilter<"cliente"> | string | null
    uuid_operador?: StringFilter<"cliente"> | string
    status?: BoolFilter<"cliente"> | boolean
    delete?: BoolNullableFilter<"cliente"> | boolean | null
    celularClientes?: Celular_clienteListRelationFilter
    enderecoClientes?: Endereco_clienteListRelationFilter
    redeSocialClientes?: Rede_social_clienteListRelationFilter
    operador?: XOR<OperadorScalarRelationFilter, operadorWhereInput>
    emprestimos?: EmprestimoListRelationFilter
    pagamentos?: PagamentoListRelationFilter
  }, "uuid" | "uuid" | "correio_eletronico">

  export type clienteOrderByWithAggregationInput = {
    uuid?: SortOrder
    nome_completo?: SortOrder
    num_cpf?: SortOrder
    num_cnpj?: SortOrderInput | SortOrder
    data_nascimento?: SortOrderInput | SortOrder
    correio_eletronico?: SortOrderInput | SortOrder
    observacao?: SortOrderInput | SortOrder
    uuid_operador?: SortOrder
    status?: SortOrder
    delete?: SortOrderInput | SortOrder
    _count?: clienteCountOrderByAggregateInput
    _max?: clienteMaxOrderByAggregateInput
    _min?: clienteMinOrderByAggregateInput
  }

  export type clienteScalarWhereWithAggregatesInput = {
    AND?: clienteScalarWhereWithAggregatesInput | clienteScalarWhereWithAggregatesInput[]
    OR?: clienteScalarWhereWithAggregatesInput[]
    NOT?: clienteScalarWhereWithAggregatesInput | clienteScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"cliente"> | string
    nome_completo?: StringWithAggregatesFilter<"cliente"> | string
    num_cpf?: StringWithAggregatesFilter<"cliente"> | string
    num_cnpj?: StringNullableWithAggregatesFilter<"cliente"> | string | null
    data_nascimento?: DateTimeNullableWithAggregatesFilter<"cliente"> | Date | string | null
    correio_eletronico?: StringNullableWithAggregatesFilter<"cliente"> | string | null
    observacao?: StringNullableWithAggregatesFilter<"cliente"> | string | null
    uuid_operador?: StringWithAggregatesFilter<"cliente"> | string
    status?: BoolWithAggregatesFilter<"cliente"> | boolean
    delete?: BoolNullableWithAggregatesFilter<"cliente"> | boolean | null
  }

  export type celular_clienteWhereInput = {
    AND?: celular_clienteWhereInput | celular_clienteWhereInput[]
    OR?: celular_clienteWhereInput[]
    NOT?: celular_clienteWhereInput | celular_clienteWhereInput[]
    id?: IntFilter<"celular_cliente"> | number
    num_cel?: StringFilter<"celular_cliente"> | string
    status?: BoolFilter<"celular_cliente"> | boolean
    uuid_cliente?: StringFilter<"celular_cliente"> | string
    cliente?: XOR<ClienteScalarRelationFilter, clienteWhereInput>
  }

  export type celular_clienteOrderByWithRelationInput = {
    id?: SortOrder
    num_cel?: SortOrder
    status?: SortOrder
    uuid_cliente?: SortOrder
    cliente?: clienteOrderByWithRelationInput
  }

  export type celular_clienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    num_cel?: string
    AND?: celular_clienteWhereInput | celular_clienteWhereInput[]
    OR?: celular_clienteWhereInput[]
    NOT?: celular_clienteWhereInput | celular_clienteWhereInput[]
    status?: BoolFilter<"celular_cliente"> | boolean
    uuid_cliente?: StringFilter<"celular_cliente"> | string
    cliente?: XOR<ClienteScalarRelationFilter, clienteWhereInput>
  }, "id" | "num_cel">

  export type celular_clienteOrderByWithAggregationInput = {
    id?: SortOrder
    num_cel?: SortOrder
    status?: SortOrder
    uuid_cliente?: SortOrder
    _count?: celular_clienteCountOrderByAggregateInput
    _avg?: celular_clienteAvgOrderByAggregateInput
    _max?: celular_clienteMaxOrderByAggregateInput
    _min?: celular_clienteMinOrderByAggregateInput
    _sum?: celular_clienteSumOrderByAggregateInput
  }

  export type celular_clienteScalarWhereWithAggregatesInput = {
    AND?: celular_clienteScalarWhereWithAggregatesInput | celular_clienteScalarWhereWithAggregatesInput[]
    OR?: celular_clienteScalarWhereWithAggregatesInput[]
    NOT?: celular_clienteScalarWhereWithAggregatesInput | celular_clienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"celular_cliente"> | number
    num_cel?: StringWithAggregatesFilter<"celular_cliente"> | string
    status?: BoolWithAggregatesFilter<"celular_cliente"> | boolean
    uuid_cliente?: StringWithAggregatesFilter<"celular_cliente"> | string
  }

  export type endereco_clienteWhereInput = {
    AND?: endereco_clienteWhereInput | endereco_clienteWhereInput[]
    OR?: endereco_clienteWhereInput[]
    NOT?: endereco_clienteWhereInput | endereco_clienteWhereInput[]
    id?: IntFilter<"endereco_cliente"> | number
    codigo_postal?: StringFilter<"endereco_cliente"> | string
    numero_residencial?: StringFilter<"endereco_cliente"> | string
    status?: BoolFilter<"endereco_cliente"> | boolean
    uuid_cliente?: StringFilter<"endereco_cliente"> | string
    cliente?: XOR<ClienteScalarRelationFilter, clienteWhereInput>
  }

  export type endereco_clienteOrderByWithRelationInput = {
    id?: SortOrder
    codigo_postal?: SortOrder
    numero_residencial?: SortOrder
    status?: SortOrder
    uuid_cliente?: SortOrder
    cliente?: clienteOrderByWithRelationInput
  }

  export type endereco_clienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: endereco_clienteWhereInput | endereco_clienteWhereInput[]
    OR?: endereco_clienteWhereInput[]
    NOT?: endereco_clienteWhereInput | endereco_clienteWhereInput[]
    codigo_postal?: StringFilter<"endereco_cliente"> | string
    numero_residencial?: StringFilter<"endereco_cliente"> | string
    status?: BoolFilter<"endereco_cliente"> | boolean
    uuid_cliente?: StringFilter<"endereco_cliente"> | string
    cliente?: XOR<ClienteScalarRelationFilter, clienteWhereInput>
  }, "id">

  export type endereco_clienteOrderByWithAggregationInput = {
    id?: SortOrder
    codigo_postal?: SortOrder
    numero_residencial?: SortOrder
    status?: SortOrder
    uuid_cliente?: SortOrder
    _count?: endereco_clienteCountOrderByAggregateInput
    _avg?: endereco_clienteAvgOrderByAggregateInput
    _max?: endereco_clienteMaxOrderByAggregateInput
    _min?: endereco_clienteMinOrderByAggregateInput
    _sum?: endereco_clienteSumOrderByAggregateInput
  }

  export type endereco_clienteScalarWhereWithAggregatesInput = {
    AND?: endereco_clienteScalarWhereWithAggregatesInput | endereco_clienteScalarWhereWithAggregatesInput[]
    OR?: endereco_clienteScalarWhereWithAggregatesInput[]
    NOT?: endereco_clienteScalarWhereWithAggregatesInput | endereco_clienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"endereco_cliente"> | number
    codigo_postal?: StringWithAggregatesFilter<"endereco_cliente"> | string
    numero_residencial?: StringWithAggregatesFilter<"endereco_cliente"> | string
    status?: BoolWithAggregatesFilter<"endereco_cliente"> | boolean
    uuid_cliente?: StringWithAggregatesFilter<"endereco_cliente"> | string
  }

  export type rede_social_clienteWhereInput = {
    AND?: rede_social_clienteWhereInput | rede_social_clienteWhereInput[]
    OR?: rede_social_clienteWhereInput[]
    NOT?: rede_social_clienteWhereInput | rede_social_clienteWhereInput[]
    id?: IntFilter<"rede_social_cliente"> | number
    uuid_cliente?: StringFilter<"rede_social_cliente"> | string
    url?: StringFilter<"rede_social_cliente"> | string
    cliente?: XOR<ClienteScalarRelationFilter, clienteWhereInput>
  }

  export type rede_social_clienteOrderByWithRelationInput = {
    id?: SortOrder
    uuid_cliente?: SortOrder
    url?: SortOrder
    cliente?: clienteOrderByWithRelationInput
  }

  export type rede_social_clienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: rede_social_clienteWhereInput | rede_social_clienteWhereInput[]
    OR?: rede_social_clienteWhereInput[]
    NOT?: rede_social_clienteWhereInput | rede_social_clienteWhereInput[]
    uuid_cliente?: StringFilter<"rede_social_cliente"> | string
    url?: StringFilter<"rede_social_cliente"> | string
    cliente?: XOR<ClienteScalarRelationFilter, clienteWhereInput>
  }, "id" | "id">

  export type rede_social_clienteOrderByWithAggregationInput = {
    id?: SortOrder
    uuid_cliente?: SortOrder
    url?: SortOrder
    _count?: rede_social_clienteCountOrderByAggregateInput
    _avg?: rede_social_clienteAvgOrderByAggregateInput
    _max?: rede_social_clienteMaxOrderByAggregateInput
    _min?: rede_social_clienteMinOrderByAggregateInput
    _sum?: rede_social_clienteSumOrderByAggregateInput
  }

  export type rede_social_clienteScalarWhereWithAggregatesInput = {
    AND?: rede_social_clienteScalarWhereWithAggregatesInput | rede_social_clienteScalarWhereWithAggregatesInput[]
    OR?: rede_social_clienteScalarWhereWithAggregatesInput[]
    NOT?: rede_social_clienteScalarWhereWithAggregatesInput | rede_social_clienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"rede_social_cliente"> | number
    uuid_cliente?: StringWithAggregatesFilter<"rede_social_cliente"> | string
    url?: StringWithAggregatesFilter<"rede_social_cliente"> | string
  }

  export type configuracaoWhereInput = {
    AND?: configuracaoWhereInput | configuracaoWhereInput[]
    OR?: configuracaoWhereInput[]
    NOT?: configuracaoWhereInput | configuracaoWhereInput[]
    id?: IntFilter<"configuracao"> | number
    alerta_dias_antes?: IntFilter<"configuracao"> | number
    senha_entrada?: IntFilter<"configuracao"> | number
    uuid_operador?: StringFilter<"configuracao"> | string
    operador?: XOR<OperadorScalarRelationFilter, operadorWhereInput>
  }

  export type configuracaoOrderByWithRelationInput = {
    id?: SortOrder
    alerta_dias_antes?: SortOrder
    senha_entrada?: SortOrder
    uuid_operador?: SortOrder
    operador?: operadorOrderByWithRelationInput
  }

  export type configuracaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid_operador?: string
    AND?: configuracaoWhereInput | configuracaoWhereInput[]
    OR?: configuracaoWhereInput[]
    NOT?: configuracaoWhereInput | configuracaoWhereInput[]
    alerta_dias_antes?: IntFilter<"configuracao"> | number
    senha_entrada?: IntFilter<"configuracao"> | number
    operador?: XOR<OperadorScalarRelationFilter, operadorWhereInput>
  }, "id" | "uuid_operador">

  export type configuracaoOrderByWithAggregationInput = {
    id?: SortOrder
    alerta_dias_antes?: SortOrder
    senha_entrada?: SortOrder
    uuid_operador?: SortOrder
    _count?: configuracaoCountOrderByAggregateInput
    _avg?: configuracaoAvgOrderByAggregateInput
    _max?: configuracaoMaxOrderByAggregateInput
    _min?: configuracaoMinOrderByAggregateInput
    _sum?: configuracaoSumOrderByAggregateInput
  }

  export type configuracaoScalarWhereWithAggregatesInput = {
    AND?: configuracaoScalarWhereWithAggregatesInput | configuracaoScalarWhereWithAggregatesInput[]
    OR?: configuracaoScalarWhereWithAggregatesInput[]
    NOT?: configuracaoScalarWhereWithAggregatesInput | configuracaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"configuracao"> | number
    alerta_dias_antes?: IntWithAggregatesFilter<"configuracao"> | number
    senha_entrada?: IntWithAggregatesFilter<"configuracao"> | number
    uuid_operador?: StringWithAggregatesFilter<"configuracao"> | string
  }

  export type emprestimoWhereInput = {
    AND?: emprestimoWhereInput | emprestimoWhereInput[]
    OR?: emprestimoWhereInput[]
    NOT?: emprestimoWhereInput | emprestimoWhereInput[]
    uuid?: StringFilter<"emprestimo"> | string
    nome_emprestimo?: StringFilter<"emprestimo"> | string
    valor_emprestimo?: FloatFilter<"emprestimo"> | number
    valor_receber?: FloatFilter<"emprestimo"> | number
    valor_recebido?: FloatNullableFilter<"emprestimo"> | number | null
    tipo?: EnumTipo_cobrancaFilter<"emprestimo"> | $Enums.Tipo_cobranca
    data_emprestimo?: DateTimeFilter<"emprestimo"> | Date | string
    data_final?: DateTimeFilter<"emprestimo"> | Date | string
    observacao?: StringNullableFilter<"emprestimo"> | string | null
    status?: EnumStatus_dividaFilter<"emprestimo"> | $Enums.Status_divida
    uuid_operador?: StringFilter<"emprestimo"> | string
    uuid_cliente?: StringFilter<"emprestimo"> | string
    delete?: BoolNullableFilter<"emprestimo"> | boolean | null
    pagamentos?: PagamentoListRelationFilter
    cliente?: XOR<ClienteScalarRelationFilter, clienteWhereInput>
    operador?: XOR<OperadorScalarRelationFilter, operadorWhereInput>
  }

  export type emprestimoOrderByWithRelationInput = {
    uuid?: SortOrder
    nome_emprestimo?: SortOrder
    valor_emprestimo?: SortOrder
    valor_receber?: SortOrder
    valor_recebido?: SortOrderInput | SortOrder
    tipo?: SortOrder
    data_emprestimo?: SortOrder
    data_final?: SortOrder
    observacao?: SortOrderInput | SortOrder
    status?: SortOrder
    uuid_operador?: SortOrder
    uuid_cliente?: SortOrder
    delete?: SortOrderInput | SortOrder
    pagamentos?: pagamentoOrderByRelationAggregateInput
    cliente?: clienteOrderByWithRelationInput
    operador?: operadorOrderByWithRelationInput
  }

  export type emprestimoWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: emprestimoWhereInput | emprestimoWhereInput[]
    OR?: emprestimoWhereInput[]
    NOT?: emprestimoWhereInput | emprestimoWhereInput[]
    nome_emprestimo?: StringFilter<"emprestimo"> | string
    valor_emprestimo?: FloatFilter<"emprestimo"> | number
    valor_receber?: FloatFilter<"emprestimo"> | number
    valor_recebido?: FloatNullableFilter<"emprestimo"> | number | null
    tipo?: EnumTipo_cobrancaFilter<"emprestimo"> | $Enums.Tipo_cobranca
    data_emprestimo?: DateTimeFilter<"emprestimo"> | Date | string
    data_final?: DateTimeFilter<"emprestimo"> | Date | string
    observacao?: StringNullableFilter<"emprestimo"> | string | null
    status?: EnumStatus_dividaFilter<"emprestimo"> | $Enums.Status_divida
    uuid_operador?: StringFilter<"emprestimo"> | string
    uuid_cliente?: StringFilter<"emprestimo"> | string
    delete?: BoolNullableFilter<"emprestimo"> | boolean | null
    pagamentos?: PagamentoListRelationFilter
    cliente?: XOR<ClienteScalarRelationFilter, clienteWhereInput>
    operador?: XOR<OperadorScalarRelationFilter, operadorWhereInput>
  }, "uuid" | "uuid">

  export type emprestimoOrderByWithAggregationInput = {
    uuid?: SortOrder
    nome_emprestimo?: SortOrder
    valor_emprestimo?: SortOrder
    valor_receber?: SortOrder
    valor_recebido?: SortOrderInput | SortOrder
    tipo?: SortOrder
    data_emprestimo?: SortOrder
    data_final?: SortOrder
    observacao?: SortOrderInput | SortOrder
    status?: SortOrder
    uuid_operador?: SortOrder
    uuid_cliente?: SortOrder
    delete?: SortOrderInput | SortOrder
    _count?: emprestimoCountOrderByAggregateInput
    _avg?: emprestimoAvgOrderByAggregateInput
    _max?: emprestimoMaxOrderByAggregateInput
    _min?: emprestimoMinOrderByAggregateInput
    _sum?: emprestimoSumOrderByAggregateInput
  }

  export type emprestimoScalarWhereWithAggregatesInput = {
    AND?: emprestimoScalarWhereWithAggregatesInput | emprestimoScalarWhereWithAggregatesInput[]
    OR?: emprestimoScalarWhereWithAggregatesInput[]
    NOT?: emprestimoScalarWhereWithAggregatesInput | emprestimoScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"emprestimo"> | string
    nome_emprestimo?: StringWithAggregatesFilter<"emprestimo"> | string
    valor_emprestimo?: FloatWithAggregatesFilter<"emprestimo"> | number
    valor_receber?: FloatWithAggregatesFilter<"emprestimo"> | number
    valor_recebido?: FloatNullableWithAggregatesFilter<"emprestimo"> | number | null
    tipo?: EnumTipo_cobrancaWithAggregatesFilter<"emprestimo"> | $Enums.Tipo_cobranca
    data_emprestimo?: DateTimeWithAggregatesFilter<"emprestimo"> | Date | string
    data_final?: DateTimeWithAggregatesFilter<"emprestimo"> | Date | string
    observacao?: StringNullableWithAggregatesFilter<"emprestimo"> | string | null
    status?: EnumStatus_dividaWithAggregatesFilter<"emprestimo"> | $Enums.Status_divida
    uuid_operador?: StringWithAggregatesFilter<"emprestimo"> | string
    uuid_cliente?: StringWithAggregatesFilter<"emprestimo"> | string
    delete?: BoolNullableWithAggregatesFilter<"emprestimo"> | boolean | null
  }

  export type pagamentoWhereInput = {
    AND?: pagamentoWhereInput | pagamentoWhereInput[]
    OR?: pagamentoWhereInput[]
    NOT?: pagamentoWhereInput | pagamentoWhereInput[]
    uuid?: StringFilter<"pagamento"> | string
    valor_pago?: FloatNullableFilter<"pagamento"> | number | null
    valor_previsto?: FloatFilter<"pagamento"> | number
    uuid_emprestimo?: StringFilter<"pagamento"> | string
    tipo_pagamento?: EnumTipo_pagamentoNullableFilter<"pagamento"> | $Enums.Tipo_pagamento | null
    data_pagamento?: DateTimeNullableFilter<"pagamento"> | Date | string | null
    data_vencimento?: DateTimeFilter<"pagamento"> | Date | string
    comprovante?: BytesNullableFilter<"pagamento"> | Bytes | null
    observacao?: StringNullableFilter<"pagamento"> | string | null
    uuid_cliente?: StringFilter<"pagamento"> | string
    uuid_operador?: StringFilter<"pagamento"> | string
    delete?: BoolNullableFilter<"pagamento"> | boolean | null
    status?: EnumStatus_dividaFilter<"pagamento"> | $Enums.Status_divida
    cliente?: XOR<ClienteScalarRelationFilter, clienteWhereInput>
    operador?: XOR<OperadorScalarRelationFilter, operadorWhereInput>
    emprestimo?: XOR<EmprestimoScalarRelationFilter, emprestimoWhereInput>
  }

  export type pagamentoOrderByWithRelationInput = {
    uuid?: SortOrder
    valor_pago?: SortOrderInput | SortOrder
    valor_previsto?: SortOrder
    uuid_emprestimo?: SortOrder
    tipo_pagamento?: SortOrderInput | SortOrder
    data_pagamento?: SortOrderInput | SortOrder
    data_vencimento?: SortOrder
    comprovante?: SortOrderInput | SortOrder
    observacao?: SortOrderInput | SortOrder
    uuid_cliente?: SortOrder
    uuid_operador?: SortOrder
    delete?: SortOrderInput | SortOrder
    status?: SortOrder
    cliente?: clienteOrderByWithRelationInput
    operador?: operadorOrderByWithRelationInput
    emprestimo?: emprestimoOrderByWithRelationInput
  }

  export type pagamentoWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: pagamentoWhereInput | pagamentoWhereInput[]
    OR?: pagamentoWhereInput[]
    NOT?: pagamentoWhereInput | pagamentoWhereInput[]
    valor_pago?: FloatNullableFilter<"pagamento"> | number | null
    valor_previsto?: FloatFilter<"pagamento"> | number
    uuid_emprestimo?: StringFilter<"pagamento"> | string
    tipo_pagamento?: EnumTipo_pagamentoNullableFilter<"pagamento"> | $Enums.Tipo_pagamento | null
    data_pagamento?: DateTimeNullableFilter<"pagamento"> | Date | string | null
    data_vencimento?: DateTimeFilter<"pagamento"> | Date | string
    comprovante?: BytesNullableFilter<"pagamento"> | Bytes | null
    observacao?: StringNullableFilter<"pagamento"> | string | null
    uuid_cliente?: StringFilter<"pagamento"> | string
    uuid_operador?: StringFilter<"pagamento"> | string
    delete?: BoolNullableFilter<"pagamento"> | boolean | null
    status?: EnumStatus_dividaFilter<"pagamento"> | $Enums.Status_divida
    cliente?: XOR<ClienteScalarRelationFilter, clienteWhereInput>
    operador?: XOR<OperadorScalarRelationFilter, operadorWhereInput>
    emprestimo?: XOR<EmprestimoScalarRelationFilter, emprestimoWhereInput>
  }, "uuid" | "uuid">

  export type pagamentoOrderByWithAggregationInput = {
    uuid?: SortOrder
    valor_pago?: SortOrderInput | SortOrder
    valor_previsto?: SortOrder
    uuid_emprestimo?: SortOrder
    tipo_pagamento?: SortOrderInput | SortOrder
    data_pagamento?: SortOrderInput | SortOrder
    data_vencimento?: SortOrder
    comprovante?: SortOrderInput | SortOrder
    observacao?: SortOrderInput | SortOrder
    uuid_cliente?: SortOrder
    uuid_operador?: SortOrder
    delete?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: pagamentoCountOrderByAggregateInput
    _avg?: pagamentoAvgOrderByAggregateInput
    _max?: pagamentoMaxOrderByAggregateInput
    _min?: pagamentoMinOrderByAggregateInput
    _sum?: pagamentoSumOrderByAggregateInput
  }

  export type pagamentoScalarWhereWithAggregatesInput = {
    AND?: pagamentoScalarWhereWithAggregatesInput | pagamentoScalarWhereWithAggregatesInput[]
    OR?: pagamentoScalarWhereWithAggregatesInput[]
    NOT?: pagamentoScalarWhereWithAggregatesInput | pagamentoScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"pagamento"> | string
    valor_pago?: FloatNullableWithAggregatesFilter<"pagamento"> | number | null
    valor_previsto?: FloatWithAggregatesFilter<"pagamento"> | number
    uuid_emprestimo?: StringWithAggregatesFilter<"pagamento"> | string
    tipo_pagamento?: EnumTipo_pagamentoNullableWithAggregatesFilter<"pagamento"> | $Enums.Tipo_pagamento | null
    data_pagamento?: DateTimeNullableWithAggregatesFilter<"pagamento"> | Date | string | null
    data_vencimento?: DateTimeWithAggregatesFilter<"pagamento"> | Date | string
    comprovante?: BytesNullableWithAggregatesFilter<"pagamento"> | Bytes | null
    observacao?: StringNullableWithAggregatesFilter<"pagamento"> | string | null
    uuid_cliente?: StringWithAggregatesFilter<"pagamento"> | string
    uuid_operador?: StringWithAggregatesFilter<"pagamento"> | string
    delete?: BoolNullableWithAggregatesFilter<"pagamento"> | boolean | null
    status?: EnumStatus_dividaWithAggregatesFilter<"pagamento"> | $Enums.Status_divida
  }

  export type operadorCreateInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico: string
    celularOperadors?: celular_operadorCreateNestedManyWithoutOperadorInput
    enderecoOperadors?: endereco_operadorCreateNestedManyWithoutOperadorInput
    redeSocialOperadors?: rede_social_operadorCreateNestedManyWithoutOperadorInput
    clientes?: clienteCreateNestedManyWithoutOperadorInput
    configuracaos?: configuracaoCreateNestedManyWithoutOperadorInput
    emprestimos?: emprestimoCreateNestedManyWithoutOperadorInput
    pagamentos?: pagamentoCreateNestedManyWithoutOperadorInput
  }

  export type operadorUncheckedCreateInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico: string
    celularOperadors?: celular_operadorUncheckedCreateNestedManyWithoutOperadorInput
    enderecoOperadors?: endereco_operadorUncheckedCreateNestedManyWithoutOperadorInput
    redeSocialOperadors?: rede_social_operadorUncheckedCreateNestedManyWithoutOperadorInput
    clientes?: clienteUncheckedCreateNestedManyWithoutOperadorInput
    configuracaos?: configuracaoUncheckedCreateNestedManyWithoutOperadorInput
    emprestimos?: emprestimoUncheckedCreateNestedManyWithoutOperadorInput
    pagamentos?: pagamentoUncheckedCreateNestedManyWithoutOperadorInput
  }

  export type operadorUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: StringFieldUpdateOperationsInput | string
    celularOperadors?: celular_operadorUpdateManyWithoutOperadorNestedInput
    enderecoOperadors?: endereco_operadorUpdateManyWithoutOperadorNestedInput
    redeSocialOperadors?: rede_social_operadorUpdateManyWithoutOperadorNestedInput
    clientes?: clienteUpdateManyWithoutOperadorNestedInput
    configuracaos?: configuracaoUpdateManyWithoutOperadorNestedInput
    emprestimos?: emprestimoUpdateManyWithoutOperadorNestedInput
    pagamentos?: pagamentoUpdateManyWithoutOperadorNestedInput
  }

  export type operadorUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: StringFieldUpdateOperationsInput | string
    celularOperadors?: celular_operadorUncheckedUpdateManyWithoutOperadorNestedInput
    enderecoOperadors?: endereco_operadorUncheckedUpdateManyWithoutOperadorNestedInput
    redeSocialOperadors?: rede_social_operadorUncheckedUpdateManyWithoutOperadorNestedInput
    clientes?: clienteUncheckedUpdateManyWithoutOperadorNestedInput
    configuracaos?: configuracaoUncheckedUpdateManyWithoutOperadorNestedInput
    emprestimos?: emprestimoUncheckedUpdateManyWithoutOperadorNestedInput
    pagamentos?: pagamentoUncheckedUpdateManyWithoutOperadorNestedInput
  }

  export type operadorCreateManyInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico: string
  }

  export type operadorUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: StringFieldUpdateOperationsInput | string
  }

  export type operadorUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: StringFieldUpdateOperationsInput | string
  }

  export type celular_operadorCreateInput = {
    num_cel: string
    status?: boolean
    operador: operadorCreateNestedOneWithoutCelularOperadorsInput
  }

  export type celular_operadorUncheckedCreateInput = {
    id?: number
    num_cel: string
    status?: boolean
    uuid_operador: string
  }

  export type celular_operadorUpdateInput = {
    num_cel?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    operador?: operadorUpdateOneRequiredWithoutCelularOperadorsNestedInput
  }

  export type celular_operadorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    num_cel?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    uuid_operador?: StringFieldUpdateOperationsInput | string
  }

  export type celular_operadorCreateManyInput = {
    id?: number
    num_cel: string
    status?: boolean
    uuid_operador: string
  }

  export type celular_operadorUpdateManyMutationInput = {
    num_cel?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type celular_operadorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    num_cel?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    uuid_operador?: StringFieldUpdateOperationsInput | string
  }

  export type endereco_operadorCreateInput = {
    codigo_postal: string
    numero_residencial: string
    status?: boolean
    operador: operadorCreateNestedOneWithoutEnderecoOperadorsInput
  }

  export type endereco_operadorUncheckedCreateInput = {
    id?: number
    codigo_postal: string
    numero_residencial: string
    status?: boolean
    uuid_operador: string
  }

  export type endereco_operadorUpdateInput = {
    codigo_postal?: StringFieldUpdateOperationsInput | string
    numero_residencial?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    operador?: operadorUpdateOneRequiredWithoutEnderecoOperadorsNestedInput
  }

  export type endereco_operadorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo_postal?: StringFieldUpdateOperationsInput | string
    numero_residencial?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    uuid_operador?: StringFieldUpdateOperationsInput | string
  }

  export type endereco_operadorCreateManyInput = {
    id?: number
    codigo_postal: string
    numero_residencial: string
    status?: boolean
    uuid_operador: string
  }

  export type endereco_operadorUpdateManyMutationInput = {
    codigo_postal?: StringFieldUpdateOperationsInput | string
    numero_residencial?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type endereco_operadorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo_postal?: StringFieldUpdateOperationsInput | string
    numero_residencial?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    uuid_operador?: StringFieldUpdateOperationsInput | string
  }

  export type rede_social_operadorCreateInput = {
    url: string
    operador: operadorCreateNestedOneWithoutRedeSocialOperadorsInput
  }

  export type rede_social_operadorUncheckedCreateInput = {
    id?: number
    uuid_operador: string
    url: string
  }

  export type rede_social_operadorUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    operador?: operadorUpdateOneRequiredWithoutRedeSocialOperadorsNestedInput
  }

  export type rede_social_operadorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid_operador?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type rede_social_operadorCreateManyInput = {
    id?: number
    uuid_operador: string
    url: string
  }

  export type rede_social_operadorUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type rede_social_operadorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid_operador?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type clienteCreateInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico?: string | null
    observacao?: string | null
    status?: boolean
    delete?: boolean | null
    celularClientes?: celular_clienteCreateNestedManyWithoutClienteInput
    enderecoClientes?: endereco_clienteCreateNestedManyWithoutClienteInput
    redeSocialClientes?: rede_social_clienteCreateNestedManyWithoutClienteInput
    operador: operadorCreateNestedOneWithoutClientesInput
    emprestimos?: emprestimoCreateNestedManyWithoutClienteInput
    pagamentos?: pagamentoCreateNestedManyWithoutClienteInput
  }

  export type clienteUncheckedCreateInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico?: string | null
    observacao?: string | null
    uuid_operador: string
    status?: boolean
    delete?: boolean | null
    celularClientes?: celular_clienteUncheckedCreateNestedManyWithoutClienteInput
    enderecoClientes?: endereco_clienteUncheckedCreateNestedManyWithoutClienteInput
    redeSocialClientes?: rede_social_clienteUncheckedCreateNestedManyWithoutClienteInput
    emprestimos?: emprestimoUncheckedCreateNestedManyWithoutClienteInput
    pagamentos?: pagamentoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type clienteUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    celularClientes?: celular_clienteUpdateManyWithoutClienteNestedInput
    enderecoClientes?: endereco_clienteUpdateManyWithoutClienteNestedInput
    redeSocialClientes?: rede_social_clienteUpdateManyWithoutClienteNestedInput
    operador?: operadorUpdateOneRequiredWithoutClientesNestedInput
    emprestimos?: emprestimoUpdateManyWithoutClienteNestedInput
    pagamentos?: pagamentoUpdateManyWithoutClienteNestedInput
  }

  export type clienteUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    uuid_operador?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    celularClientes?: celular_clienteUncheckedUpdateManyWithoutClienteNestedInput
    enderecoClientes?: endereco_clienteUncheckedUpdateManyWithoutClienteNestedInput
    redeSocialClientes?: rede_social_clienteUncheckedUpdateManyWithoutClienteNestedInput
    emprestimos?: emprestimoUncheckedUpdateManyWithoutClienteNestedInput
    pagamentos?: pagamentoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type clienteCreateManyInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico?: string | null
    observacao?: string | null
    uuid_operador: string
    status?: boolean
    delete?: boolean | null
  }

  export type clienteUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type clienteUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    uuid_operador?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type celular_clienteCreateInput = {
    num_cel: string
    status?: boolean
    cliente: clienteCreateNestedOneWithoutCelularClientesInput
  }

  export type celular_clienteUncheckedCreateInput = {
    id?: number
    num_cel: string
    status?: boolean
    uuid_cliente: string
  }

  export type celular_clienteUpdateInput = {
    num_cel?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    cliente?: clienteUpdateOneRequiredWithoutCelularClientesNestedInput
  }

  export type celular_clienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    num_cel?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    uuid_cliente?: StringFieldUpdateOperationsInput | string
  }

  export type celular_clienteCreateManyInput = {
    id?: number
    num_cel: string
    status?: boolean
    uuid_cliente: string
  }

  export type celular_clienteUpdateManyMutationInput = {
    num_cel?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type celular_clienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    num_cel?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    uuid_cliente?: StringFieldUpdateOperationsInput | string
  }

  export type endereco_clienteCreateInput = {
    codigo_postal: string
    numero_residencial: string
    status?: boolean
    cliente: clienteCreateNestedOneWithoutEnderecoClientesInput
  }

  export type endereco_clienteUncheckedCreateInput = {
    id?: number
    codigo_postal: string
    numero_residencial: string
    status?: boolean
    uuid_cliente: string
  }

  export type endereco_clienteUpdateInput = {
    codigo_postal?: StringFieldUpdateOperationsInput | string
    numero_residencial?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    cliente?: clienteUpdateOneRequiredWithoutEnderecoClientesNestedInput
  }

  export type endereco_clienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo_postal?: StringFieldUpdateOperationsInput | string
    numero_residencial?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    uuid_cliente?: StringFieldUpdateOperationsInput | string
  }

  export type endereco_clienteCreateManyInput = {
    id?: number
    codigo_postal: string
    numero_residencial: string
    status?: boolean
    uuid_cliente: string
  }

  export type endereco_clienteUpdateManyMutationInput = {
    codigo_postal?: StringFieldUpdateOperationsInput | string
    numero_residencial?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type endereco_clienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo_postal?: StringFieldUpdateOperationsInput | string
    numero_residencial?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    uuid_cliente?: StringFieldUpdateOperationsInput | string
  }

  export type rede_social_clienteCreateInput = {
    url: string
    cliente: clienteCreateNestedOneWithoutRedeSocialClientesInput
  }

  export type rede_social_clienteUncheckedCreateInput = {
    id?: number
    uuid_cliente: string
    url: string
  }

  export type rede_social_clienteUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    cliente?: clienteUpdateOneRequiredWithoutRedeSocialClientesNestedInput
  }

  export type rede_social_clienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid_cliente?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type rede_social_clienteCreateManyInput = {
    id?: number
    uuid_cliente: string
    url: string
  }

  export type rede_social_clienteUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type rede_social_clienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid_cliente?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type configuracaoCreateInput = {
    alerta_dias_antes: number
    senha_entrada: number
    operador: operadorCreateNestedOneWithoutConfiguracaosInput
  }

  export type configuracaoUncheckedCreateInput = {
    id?: number
    alerta_dias_antes: number
    senha_entrada: number
    uuid_operador: string
  }

  export type configuracaoUpdateInput = {
    alerta_dias_antes?: IntFieldUpdateOperationsInput | number
    senha_entrada?: IntFieldUpdateOperationsInput | number
    operador?: operadorUpdateOneRequiredWithoutConfiguracaosNestedInput
  }

  export type configuracaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    alerta_dias_antes?: IntFieldUpdateOperationsInput | number
    senha_entrada?: IntFieldUpdateOperationsInput | number
    uuid_operador?: StringFieldUpdateOperationsInput | string
  }

  export type configuracaoCreateManyInput = {
    id?: number
    alerta_dias_antes: number
    senha_entrada: number
    uuid_operador: string
  }

  export type configuracaoUpdateManyMutationInput = {
    alerta_dias_antes?: IntFieldUpdateOperationsInput | number
    senha_entrada?: IntFieldUpdateOperationsInput | number
  }

  export type configuracaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    alerta_dias_antes?: IntFieldUpdateOperationsInput | number
    senha_entrada?: IntFieldUpdateOperationsInput | number
    uuid_operador?: StringFieldUpdateOperationsInput | string
  }

  export type emprestimoCreateInput = {
    uuid?: string
    nome_emprestimo: string
    valor_emprestimo: number
    valor_receber: number
    valor_recebido?: number | null
    tipo: $Enums.Tipo_cobranca
    data_emprestimo?: Date | string
    data_final: Date | string
    observacao?: string | null
    status?: $Enums.Status_divida
    delete?: boolean | null
    pagamentos?: pagamentoCreateNestedManyWithoutEmprestimoInput
    cliente: clienteCreateNestedOneWithoutEmprestimosInput
    operador: operadorCreateNestedOneWithoutEmprestimosInput
  }

  export type emprestimoUncheckedCreateInput = {
    uuid?: string
    nome_emprestimo: string
    valor_emprestimo: number
    valor_receber: number
    valor_recebido?: number | null
    tipo: $Enums.Tipo_cobranca
    data_emprestimo?: Date | string
    data_final: Date | string
    observacao?: string | null
    status?: $Enums.Status_divida
    uuid_operador: string
    uuid_cliente: string
    delete?: boolean | null
    pagamentos?: pagamentoUncheckedCreateNestedManyWithoutEmprestimoInput
  }

  export type emprestimoUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_emprestimo?: StringFieldUpdateOperationsInput | string
    valor_emprestimo?: FloatFieldUpdateOperationsInput | number
    valor_receber?: FloatFieldUpdateOperationsInput | number
    valor_recebido?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: EnumTipo_cobrancaFieldUpdateOperationsInput | $Enums.Tipo_cobranca
    data_emprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    data_final?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatus_dividaFieldUpdateOperationsInput | $Enums.Status_divida
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pagamentos?: pagamentoUpdateManyWithoutEmprestimoNestedInput
    cliente?: clienteUpdateOneRequiredWithoutEmprestimosNestedInput
    operador?: operadorUpdateOneRequiredWithoutEmprestimosNestedInput
  }

  export type emprestimoUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_emprestimo?: StringFieldUpdateOperationsInput | string
    valor_emprestimo?: FloatFieldUpdateOperationsInput | number
    valor_receber?: FloatFieldUpdateOperationsInput | number
    valor_recebido?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: EnumTipo_cobrancaFieldUpdateOperationsInput | $Enums.Tipo_cobranca
    data_emprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    data_final?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatus_dividaFieldUpdateOperationsInput | $Enums.Status_divida
    uuid_operador?: StringFieldUpdateOperationsInput | string
    uuid_cliente?: StringFieldUpdateOperationsInput | string
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pagamentos?: pagamentoUncheckedUpdateManyWithoutEmprestimoNestedInput
  }

  export type emprestimoCreateManyInput = {
    uuid?: string
    nome_emprestimo: string
    valor_emprestimo: number
    valor_receber: number
    valor_recebido?: number | null
    tipo: $Enums.Tipo_cobranca
    data_emprestimo?: Date | string
    data_final: Date | string
    observacao?: string | null
    status?: $Enums.Status_divida
    uuid_operador: string
    uuid_cliente: string
    delete?: boolean | null
  }

  export type emprestimoUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_emprestimo?: StringFieldUpdateOperationsInput | string
    valor_emprestimo?: FloatFieldUpdateOperationsInput | number
    valor_receber?: FloatFieldUpdateOperationsInput | number
    valor_recebido?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: EnumTipo_cobrancaFieldUpdateOperationsInput | $Enums.Tipo_cobranca
    data_emprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    data_final?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatus_dividaFieldUpdateOperationsInput | $Enums.Status_divida
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type emprestimoUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_emprestimo?: StringFieldUpdateOperationsInput | string
    valor_emprestimo?: FloatFieldUpdateOperationsInput | number
    valor_receber?: FloatFieldUpdateOperationsInput | number
    valor_recebido?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: EnumTipo_cobrancaFieldUpdateOperationsInput | $Enums.Tipo_cobranca
    data_emprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    data_final?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatus_dividaFieldUpdateOperationsInput | $Enums.Status_divida
    uuid_operador?: StringFieldUpdateOperationsInput | string
    uuid_cliente?: StringFieldUpdateOperationsInput | string
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type pagamentoCreateInput = {
    uuid?: string
    valor_pago?: number | null
    valor_previsto: number
    tipo_pagamento?: $Enums.Tipo_pagamento | null
    data_pagamento?: Date | string | null
    data_vencimento: Date | string
    comprovante?: Bytes | null
    observacao?: string | null
    delete?: boolean | null
    status?: $Enums.Status_divida
    cliente: clienteCreateNestedOneWithoutPagamentosInput
    operador: operadorCreateNestedOneWithoutPagamentosInput
    emprestimo: emprestimoCreateNestedOneWithoutPagamentosInput
  }

  export type pagamentoUncheckedCreateInput = {
    uuid?: string
    valor_pago?: number | null
    valor_previsto: number
    uuid_emprestimo: string
    tipo_pagamento?: $Enums.Tipo_pagamento | null
    data_pagamento?: Date | string | null
    data_vencimento: Date | string
    comprovante?: Bytes | null
    observacao?: string | null
    uuid_cliente: string
    uuid_operador: string
    delete?: boolean | null
    status?: $Enums.Status_divida
  }

  export type pagamentoUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    valor_pago?: NullableFloatFieldUpdateOperationsInput | number | null
    valor_previsto?: FloatFieldUpdateOperationsInput | number
    tipo_pagamento?: NullableEnumTipo_pagamentoFieldUpdateOperationsInput | $Enums.Tipo_pagamento | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    comprovante?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatus_dividaFieldUpdateOperationsInput | $Enums.Status_divida
    cliente?: clienteUpdateOneRequiredWithoutPagamentosNestedInput
    operador?: operadorUpdateOneRequiredWithoutPagamentosNestedInput
    emprestimo?: emprestimoUpdateOneRequiredWithoutPagamentosNestedInput
  }

  export type pagamentoUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    valor_pago?: NullableFloatFieldUpdateOperationsInput | number | null
    valor_previsto?: FloatFieldUpdateOperationsInput | number
    uuid_emprestimo?: StringFieldUpdateOperationsInput | string
    tipo_pagamento?: NullableEnumTipo_pagamentoFieldUpdateOperationsInput | $Enums.Tipo_pagamento | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    comprovante?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    uuid_cliente?: StringFieldUpdateOperationsInput | string
    uuid_operador?: StringFieldUpdateOperationsInput | string
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatus_dividaFieldUpdateOperationsInput | $Enums.Status_divida
  }

  export type pagamentoCreateManyInput = {
    uuid?: string
    valor_pago?: number | null
    valor_previsto: number
    uuid_emprestimo: string
    tipo_pagamento?: $Enums.Tipo_pagamento | null
    data_pagamento?: Date | string | null
    data_vencimento: Date | string
    comprovante?: Bytes | null
    observacao?: string | null
    uuid_cliente: string
    uuid_operador: string
    delete?: boolean | null
    status?: $Enums.Status_divida
  }

  export type pagamentoUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    valor_pago?: NullableFloatFieldUpdateOperationsInput | number | null
    valor_previsto?: FloatFieldUpdateOperationsInput | number
    tipo_pagamento?: NullableEnumTipo_pagamentoFieldUpdateOperationsInput | $Enums.Tipo_pagamento | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    comprovante?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatus_dividaFieldUpdateOperationsInput | $Enums.Status_divida
  }

  export type pagamentoUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    valor_pago?: NullableFloatFieldUpdateOperationsInput | number | null
    valor_previsto?: FloatFieldUpdateOperationsInput | number
    uuid_emprestimo?: StringFieldUpdateOperationsInput | string
    tipo_pagamento?: NullableEnumTipo_pagamentoFieldUpdateOperationsInput | $Enums.Tipo_pagamento | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    comprovante?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    uuid_cliente?: StringFieldUpdateOperationsInput | string
    uuid_operador?: StringFieldUpdateOperationsInput | string
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatus_dividaFieldUpdateOperationsInput | $Enums.Status_divida
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

  export type Celular_operadorListRelationFilter = {
    every?: celular_operadorWhereInput
    some?: celular_operadorWhereInput
    none?: celular_operadorWhereInput
  }

  export type Endereco_operadorListRelationFilter = {
    every?: endereco_operadorWhereInput
    some?: endereco_operadorWhereInput
    none?: endereco_operadorWhereInput
  }

  export type Rede_social_operadorListRelationFilter = {
    every?: rede_social_operadorWhereInput
    some?: rede_social_operadorWhereInput
    none?: rede_social_operadorWhereInput
  }

  export type ClienteListRelationFilter = {
    every?: clienteWhereInput
    some?: clienteWhereInput
    none?: clienteWhereInput
  }

  export type ConfiguracaoListRelationFilter = {
    every?: configuracaoWhereInput
    some?: configuracaoWhereInput
    none?: configuracaoWhereInput
  }

  export type EmprestimoListRelationFilter = {
    every?: emprestimoWhereInput
    some?: emprestimoWhereInput
    none?: emprestimoWhereInput
  }

  export type PagamentoListRelationFilter = {
    every?: pagamentoWhereInput
    some?: pagamentoWhereInput
    none?: pagamentoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type celular_operadorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type endereco_operadorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rede_social_operadorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type configuracaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type emprestimoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pagamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type operadorCountOrderByAggregateInput = {
    uuid?: SortOrder
    nome_completo?: SortOrder
    num_cpf?: SortOrder
    num_cnpj?: SortOrder
    data_nascimento?: SortOrder
    correio_eletronico?: SortOrder
  }

  export type operadorMaxOrderByAggregateInput = {
    uuid?: SortOrder
    nome_completo?: SortOrder
    num_cpf?: SortOrder
    num_cnpj?: SortOrder
    data_nascimento?: SortOrder
    correio_eletronico?: SortOrder
  }

  export type operadorMinOrderByAggregateInput = {
    uuid?: SortOrder
    nome_completo?: SortOrder
    num_cpf?: SortOrder
    num_cnpj?: SortOrder
    data_nascimento?: SortOrder
    correio_eletronico?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type OperadorScalarRelationFilter = {
    is?: operadorWhereInput
    isNot?: operadorWhereInput
  }

  export type celular_operadorCountOrderByAggregateInput = {
    id?: SortOrder
    num_cel?: SortOrder
    status?: SortOrder
    uuid_operador?: SortOrder
  }

  export type celular_operadorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type celular_operadorMaxOrderByAggregateInput = {
    id?: SortOrder
    num_cel?: SortOrder
    status?: SortOrder
    uuid_operador?: SortOrder
  }

  export type celular_operadorMinOrderByAggregateInput = {
    id?: SortOrder
    num_cel?: SortOrder
    status?: SortOrder
    uuid_operador?: SortOrder
  }

  export type celular_operadorSumOrderByAggregateInput = {
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type endereco_operadorCountOrderByAggregateInput = {
    id?: SortOrder
    codigo_postal?: SortOrder
    numero_residencial?: SortOrder
    status?: SortOrder
    uuid_operador?: SortOrder
  }

  export type endereco_operadorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type endereco_operadorMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo_postal?: SortOrder
    numero_residencial?: SortOrder
    status?: SortOrder
    uuid_operador?: SortOrder
  }

  export type endereco_operadorMinOrderByAggregateInput = {
    id?: SortOrder
    codigo_postal?: SortOrder
    numero_residencial?: SortOrder
    status?: SortOrder
    uuid_operador?: SortOrder
  }

  export type endereco_operadorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type rede_social_operadorCountOrderByAggregateInput = {
    id?: SortOrder
    uuid_operador?: SortOrder
    url?: SortOrder
  }

  export type rede_social_operadorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type rede_social_operadorMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid_operador?: SortOrder
    url?: SortOrder
  }

  export type rede_social_operadorMinOrderByAggregateInput = {
    id?: SortOrder
    uuid_operador?: SortOrder
    url?: SortOrder
  }

  export type rede_social_operadorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Celular_clienteListRelationFilter = {
    every?: celular_clienteWhereInput
    some?: celular_clienteWhereInput
    none?: celular_clienteWhereInput
  }

  export type Endereco_clienteListRelationFilter = {
    every?: endereco_clienteWhereInput
    some?: endereco_clienteWhereInput
    none?: endereco_clienteWhereInput
  }

  export type Rede_social_clienteListRelationFilter = {
    every?: rede_social_clienteWhereInput
    some?: rede_social_clienteWhereInput
    none?: rede_social_clienteWhereInput
  }

  export type celular_clienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type endereco_clienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rede_social_clienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clienteCountOrderByAggregateInput = {
    uuid?: SortOrder
    nome_completo?: SortOrder
    num_cpf?: SortOrder
    num_cnpj?: SortOrder
    data_nascimento?: SortOrder
    correio_eletronico?: SortOrder
    observacao?: SortOrder
    uuid_operador?: SortOrder
    status?: SortOrder
    delete?: SortOrder
  }

  export type clienteMaxOrderByAggregateInput = {
    uuid?: SortOrder
    nome_completo?: SortOrder
    num_cpf?: SortOrder
    num_cnpj?: SortOrder
    data_nascimento?: SortOrder
    correio_eletronico?: SortOrder
    observacao?: SortOrder
    uuid_operador?: SortOrder
    status?: SortOrder
    delete?: SortOrder
  }

  export type clienteMinOrderByAggregateInput = {
    uuid?: SortOrder
    nome_completo?: SortOrder
    num_cpf?: SortOrder
    num_cnpj?: SortOrder
    data_nascimento?: SortOrder
    correio_eletronico?: SortOrder
    observacao?: SortOrder
    uuid_operador?: SortOrder
    status?: SortOrder
    delete?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ClienteScalarRelationFilter = {
    is?: clienteWhereInput
    isNot?: clienteWhereInput
  }

  export type celular_clienteCountOrderByAggregateInput = {
    id?: SortOrder
    num_cel?: SortOrder
    status?: SortOrder
    uuid_cliente?: SortOrder
  }

  export type celular_clienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type celular_clienteMaxOrderByAggregateInput = {
    id?: SortOrder
    num_cel?: SortOrder
    status?: SortOrder
    uuid_cliente?: SortOrder
  }

  export type celular_clienteMinOrderByAggregateInput = {
    id?: SortOrder
    num_cel?: SortOrder
    status?: SortOrder
    uuid_cliente?: SortOrder
  }

  export type celular_clienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type endereco_clienteCountOrderByAggregateInput = {
    id?: SortOrder
    codigo_postal?: SortOrder
    numero_residencial?: SortOrder
    status?: SortOrder
    uuid_cliente?: SortOrder
  }

  export type endereco_clienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type endereco_clienteMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo_postal?: SortOrder
    numero_residencial?: SortOrder
    status?: SortOrder
    uuid_cliente?: SortOrder
  }

  export type endereco_clienteMinOrderByAggregateInput = {
    id?: SortOrder
    codigo_postal?: SortOrder
    numero_residencial?: SortOrder
    status?: SortOrder
    uuid_cliente?: SortOrder
  }

  export type endereco_clienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type rede_social_clienteCountOrderByAggregateInput = {
    id?: SortOrder
    uuid_cliente?: SortOrder
    url?: SortOrder
  }

  export type rede_social_clienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type rede_social_clienteMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid_cliente?: SortOrder
    url?: SortOrder
  }

  export type rede_social_clienteMinOrderByAggregateInput = {
    id?: SortOrder
    uuid_cliente?: SortOrder
    url?: SortOrder
  }

  export type rede_social_clienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type configuracaoCountOrderByAggregateInput = {
    id?: SortOrder
    alerta_dias_antes?: SortOrder
    senha_entrada?: SortOrder
    uuid_operador?: SortOrder
  }

  export type configuracaoAvgOrderByAggregateInput = {
    id?: SortOrder
    alerta_dias_antes?: SortOrder
    senha_entrada?: SortOrder
  }

  export type configuracaoMaxOrderByAggregateInput = {
    id?: SortOrder
    alerta_dias_antes?: SortOrder
    senha_entrada?: SortOrder
    uuid_operador?: SortOrder
  }

  export type configuracaoMinOrderByAggregateInput = {
    id?: SortOrder
    alerta_dias_antes?: SortOrder
    senha_entrada?: SortOrder
    uuid_operador?: SortOrder
  }

  export type configuracaoSumOrderByAggregateInput = {
    id?: SortOrder
    alerta_dias_antes?: SortOrder
    senha_entrada?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumTipo_cobrancaFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipo_cobranca | EnumTipo_cobrancaFieldRefInput<$PrismaModel>
    in?: $Enums.Tipo_cobranca[] | ListEnumTipo_cobrancaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tipo_cobranca[] | ListEnumTipo_cobrancaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipo_cobrancaFilter<$PrismaModel> | $Enums.Tipo_cobranca
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

  export type EnumStatus_dividaFilter<$PrismaModel = never> = {
    equals?: $Enums.Status_divida | EnumStatus_dividaFieldRefInput<$PrismaModel>
    in?: $Enums.Status_divida[] | ListEnumStatus_dividaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status_divida[] | ListEnumStatus_dividaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatus_dividaFilter<$PrismaModel> | $Enums.Status_divida
  }

  export type emprestimoCountOrderByAggregateInput = {
    uuid?: SortOrder
    nome_emprestimo?: SortOrder
    valor_emprestimo?: SortOrder
    valor_receber?: SortOrder
    valor_recebido?: SortOrder
    tipo?: SortOrder
    data_emprestimo?: SortOrder
    data_final?: SortOrder
    observacao?: SortOrder
    status?: SortOrder
    uuid_operador?: SortOrder
    uuid_cliente?: SortOrder
    delete?: SortOrder
  }

  export type emprestimoAvgOrderByAggregateInput = {
    valor_emprestimo?: SortOrder
    valor_receber?: SortOrder
    valor_recebido?: SortOrder
  }

  export type emprestimoMaxOrderByAggregateInput = {
    uuid?: SortOrder
    nome_emprestimo?: SortOrder
    valor_emprestimo?: SortOrder
    valor_receber?: SortOrder
    valor_recebido?: SortOrder
    tipo?: SortOrder
    data_emprestimo?: SortOrder
    data_final?: SortOrder
    observacao?: SortOrder
    status?: SortOrder
    uuid_operador?: SortOrder
    uuid_cliente?: SortOrder
    delete?: SortOrder
  }

  export type emprestimoMinOrderByAggregateInput = {
    uuid?: SortOrder
    nome_emprestimo?: SortOrder
    valor_emprestimo?: SortOrder
    valor_receber?: SortOrder
    valor_recebido?: SortOrder
    tipo?: SortOrder
    data_emprestimo?: SortOrder
    data_final?: SortOrder
    observacao?: SortOrder
    status?: SortOrder
    uuid_operador?: SortOrder
    uuid_cliente?: SortOrder
    delete?: SortOrder
  }

  export type emprestimoSumOrderByAggregateInput = {
    valor_emprestimo?: SortOrder
    valor_receber?: SortOrder
    valor_recebido?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumTipo_cobrancaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipo_cobranca | EnumTipo_cobrancaFieldRefInput<$PrismaModel>
    in?: $Enums.Tipo_cobranca[] | ListEnumTipo_cobrancaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tipo_cobranca[] | ListEnumTipo_cobrancaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipo_cobrancaWithAggregatesFilter<$PrismaModel> | $Enums.Tipo_cobranca
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipo_cobrancaFilter<$PrismaModel>
    _max?: NestedEnumTipo_cobrancaFilter<$PrismaModel>
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

  export type EnumStatus_dividaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status_divida | EnumStatus_dividaFieldRefInput<$PrismaModel>
    in?: $Enums.Status_divida[] | ListEnumStatus_dividaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status_divida[] | ListEnumStatus_dividaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatus_dividaWithAggregatesFilter<$PrismaModel> | $Enums.Status_divida
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatus_dividaFilter<$PrismaModel>
    _max?: NestedEnumStatus_dividaFilter<$PrismaModel>
  }

  export type EnumTipo_pagamentoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipo_pagamento | EnumTipo_pagamentoFieldRefInput<$PrismaModel> | null
    in?: $Enums.Tipo_pagamento[] | ListEnumTipo_pagamentoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Tipo_pagamento[] | ListEnumTipo_pagamentoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTipo_pagamentoNullableFilter<$PrismaModel> | $Enums.Tipo_pagamento | null
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Bytes | null
  }

  export type EmprestimoScalarRelationFilter = {
    is?: emprestimoWhereInput
    isNot?: emprestimoWhereInput
  }

  export type pagamentoCountOrderByAggregateInput = {
    uuid?: SortOrder
    valor_pago?: SortOrder
    valor_previsto?: SortOrder
    uuid_emprestimo?: SortOrder
    tipo_pagamento?: SortOrder
    data_pagamento?: SortOrder
    data_vencimento?: SortOrder
    comprovante?: SortOrder
    observacao?: SortOrder
    uuid_cliente?: SortOrder
    uuid_operador?: SortOrder
    delete?: SortOrder
    status?: SortOrder
  }

  export type pagamentoAvgOrderByAggregateInput = {
    valor_pago?: SortOrder
    valor_previsto?: SortOrder
  }

  export type pagamentoMaxOrderByAggregateInput = {
    uuid?: SortOrder
    valor_pago?: SortOrder
    valor_previsto?: SortOrder
    uuid_emprestimo?: SortOrder
    tipo_pagamento?: SortOrder
    data_pagamento?: SortOrder
    data_vencimento?: SortOrder
    comprovante?: SortOrder
    observacao?: SortOrder
    uuid_cliente?: SortOrder
    uuid_operador?: SortOrder
    delete?: SortOrder
    status?: SortOrder
  }

  export type pagamentoMinOrderByAggregateInput = {
    uuid?: SortOrder
    valor_pago?: SortOrder
    valor_previsto?: SortOrder
    uuid_emprestimo?: SortOrder
    tipo_pagamento?: SortOrder
    data_pagamento?: SortOrder
    data_vencimento?: SortOrder
    comprovante?: SortOrder
    observacao?: SortOrder
    uuid_cliente?: SortOrder
    uuid_operador?: SortOrder
    delete?: SortOrder
    status?: SortOrder
  }

  export type pagamentoSumOrderByAggregateInput = {
    valor_pago?: SortOrder
    valor_previsto?: SortOrder
  }

  export type EnumTipo_pagamentoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipo_pagamento | EnumTipo_pagamentoFieldRefInput<$PrismaModel> | null
    in?: $Enums.Tipo_pagamento[] | ListEnumTipo_pagamentoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Tipo_pagamento[] | ListEnumTipo_pagamentoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTipo_pagamentoNullableWithAggregatesFilter<$PrismaModel> | $Enums.Tipo_pagamento | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTipo_pagamentoNullableFilter<$PrismaModel>
    _max?: NestedEnumTipo_pagamentoNullableFilter<$PrismaModel>
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Bytes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type celular_operadorCreateNestedManyWithoutOperadorInput = {
    create?: XOR<celular_operadorCreateWithoutOperadorInput, celular_operadorUncheckedCreateWithoutOperadorInput> | celular_operadorCreateWithoutOperadorInput[] | celular_operadorUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: celular_operadorCreateOrConnectWithoutOperadorInput | celular_operadorCreateOrConnectWithoutOperadorInput[]
    createMany?: celular_operadorCreateManyOperadorInputEnvelope
    connect?: celular_operadorWhereUniqueInput | celular_operadorWhereUniqueInput[]
  }

  export type endereco_operadorCreateNestedManyWithoutOperadorInput = {
    create?: XOR<endereco_operadorCreateWithoutOperadorInput, endereco_operadorUncheckedCreateWithoutOperadorInput> | endereco_operadorCreateWithoutOperadorInput[] | endereco_operadorUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: endereco_operadorCreateOrConnectWithoutOperadorInput | endereco_operadorCreateOrConnectWithoutOperadorInput[]
    createMany?: endereco_operadorCreateManyOperadorInputEnvelope
    connect?: endereco_operadorWhereUniqueInput | endereco_operadorWhereUniqueInput[]
  }

  export type rede_social_operadorCreateNestedManyWithoutOperadorInput = {
    create?: XOR<rede_social_operadorCreateWithoutOperadorInput, rede_social_operadorUncheckedCreateWithoutOperadorInput> | rede_social_operadorCreateWithoutOperadorInput[] | rede_social_operadorUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: rede_social_operadorCreateOrConnectWithoutOperadorInput | rede_social_operadorCreateOrConnectWithoutOperadorInput[]
    createMany?: rede_social_operadorCreateManyOperadorInputEnvelope
    connect?: rede_social_operadorWhereUniqueInput | rede_social_operadorWhereUniqueInput[]
  }

  export type clienteCreateNestedManyWithoutOperadorInput = {
    create?: XOR<clienteCreateWithoutOperadorInput, clienteUncheckedCreateWithoutOperadorInput> | clienteCreateWithoutOperadorInput[] | clienteUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: clienteCreateOrConnectWithoutOperadorInput | clienteCreateOrConnectWithoutOperadorInput[]
    createMany?: clienteCreateManyOperadorInputEnvelope
    connect?: clienteWhereUniqueInput | clienteWhereUniqueInput[]
  }

  export type configuracaoCreateNestedManyWithoutOperadorInput = {
    create?: XOR<configuracaoCreateWithoutOperadorInput, configuracaoUncheckedCreateWithoutOperadorInput> | configuracaoCreateWithoutOperadorInput[] | configuracaoUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: configuracaoCreateOrConnectWithoutOperadorInput | configuracaoCreateOrConnectWithoutOperadorInput[]
    createMany?: configuracaoCreateManyOperadorInputEnvelope
    connect?: configuracaoWhereUniqueInput | configuracaoWhereUniqueInput[]
  }

  export type emprestimoCreateNestedManyWithoutOperadorInput = {
    create?: XOR<emprestimoCreateWithoutOperadorInput, emprestimoUncheckedCreateWithoutOperadorInput> | emprestimoCreateWithoutOperadorInput[] | emprestimoUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: emprestimoCreateOrConnectWithoutOperadorInput | emprestimoCreateOrConnectWithoutOperadorInput[]
    createMany?: emprestimoCreateManyOperadorInputEnvelope
    connect?: emprestimoWhereUniqueInput | emprestimoWhereUniqueInput[]
  }

  export type pagamentoCreateNestedManyWithoutOperadorInput = {
    create?: XOR<pagamentoCreateWithoutOperadorInput, pagamentoUncheckedCreateWithoutOperadorInput> | pagamentoCreateWithoutOperadorInput[] | pagamentoUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: pagamentoCreateOrConnectWithoutOperadorInput | pagamentoCreateOrConnectWithoutOperadorInput[]
    createMany?: pagamentoCreateManyOperadorInputEnvelope
    connect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
  }

  export type celular_operadorUncheckedCreateNestedManyWithoutOperadorInput = {
    create?: XOR<celular_operadorCreateWithoutOperadorInput, celular_operadorUncheckedCreateWithoutOperadorInput> | celular_operadorCreateWithoutOperadorInput[] | celular_operadorUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: celular_operadorCreateOrConnectWithoutOperadorInput | celular_operadorCreateOrConnectWithoutOperadorInput[]
    createMany?: celular_operadorCreateManyOperadorInputEnvelope
    connect?: celular_operadorWhereUniqueInput | celular_operadorWhereUniqueInput[]
  }

  export type endereco_operadorUncheckedCreateNestedManyWithoutOperadorInput = {
    create?: XOR<endereco_operadorCreateWithoutOperadorInput, endereco_operadorUncheckedCreateWithoutOperadorInput> | endereco_operadorCreateWithoutOperadorInput[] | endereco_operadorUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: endereco_operadorCreateOrConnectWithoutOperadorInput | endereco_operadorCreateOrConnectWithoutOperadorInput[]
    createMany?: endereco_operadorCreateManyOperadorInputEnvelope
    connect?: endereco_operadorWhereUniqueInput | endereco_operadorWhereUniqueInput[]
  }

  export type rede_social_operadorUncheckedCreateNestedManyWithoutOperadorInput = {
    create?: XOR<rede_social_operadorCreateWithoutOperadorInput, rede_social_operadorUncheckedCreateWithoutOperadorInput> | rede_social_operadorCreateWithoutOperadorInput[] | rede_social_operadorUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: rede_social_operadorCreateOrConnectWithoutOperadorInput | rede_social_operadorCreateOrConnectWithoutOperadorInput[]
    createMany?: rede_social_operadorCreateManyOperadorInputEnvelope
    connect?: rede_social_operadorWhereUniqueInput | rede_social_operadorWhereUniqueInput[]
  }

  export type clienteUncheckedCreateNestedManyWithoutOperadorInput = {
    create?: XOR<clienteCreateWithoutOperadorInput, clienteUncheckedCreateWithoutOperadorInput> | clienteCreateWithoutOperadorInput[] | clienteUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: clienteCreateOrConnectWithoutOperadorInput | clienteCreateOrConnectWithoutOperadorInput[]
    createMany?: clienteCreateManyOperadorInputEnvelope
    connect?: clienteWhereUniqueInput | clienteWhereUniqueInput[]
  }

  export type configuracaoUncheckedCreateNestedManyWithoutOperadorInput = {
    create?: XOR<configuracaoCreateWithoutOperadorInput, configuracaoUncheckedCreateWithoutOperadorInput> | configuracaoCreateWithoutOperadorInput[] | configuracaoUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: configuracaoCreateOrConnectWithoutOperadorInput | configuracaoCreateOrConnectWithoutOperadorInput[]
    createMany?: configuracaoCreateManyOperadorInputEnvelope
    connect?: configuracaoWhereUniqueInput | configuracaoWhereUniqueInput[]
  }

  export type emprestimoUncheckedCreateNestedManyWithoutOperadorInput = {
    create?: XOR<emprestimoCreateWithoutOperadorInput, emprestimoUncheckedCreateWithoutOperadorInput> | emprestimoCreateWithoutOperadorInput[] | emprestimoUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: emprestimoCreateOrConnectWithoutOperadorInput | emprestimoCreateOrConnectWithoutOperadorInput[]
    createMany?: emprestimoCreateManyOperadorInputEnvelope
    connect?: emprestimoWhereUniqueInput | emprestimoWhereUniqueInput[]
  }

  export type pagamentoUncheckedCreateNestedManyWithoutOperadorInput = {
    create?: XOR<pagamentoCreateWithoutOperadorInput, pagamentoUncheckedCreateWithoutOperadorInput> | pagamentoCreateWithoutOperadorInput[] | pagamentoUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: pagamentoCreateOrConnectWithoutOperadorInput | pagamentoCreateOrConnectWithoutOperadorInput[]
    createMany?: pagamentoCreateManyOperadorInputEnvelope
    connect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type celular_operadorUpdateManyWithoutOperadorNestedInput = {
    create?: XOR<celular_operadorCreateWithoutOperadorInput, celular_operadorUncheckedCreateWithoutOperadorInput> | celular_operadorCreateWithoutOperadorInput[] | celular_operadorUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: celular_operadorCreateOrConnectWithoutOperadorInput | celular_operadorCreateOrConnectWithoutOperadorInput[]
    upsert?: celular_operadorUpsertWithWhereUniqueWithoutOperadorInput | celular_operadorUpsertWithWhereUniqueWithoutOperadorInput[]
    createMany?: celular_operadorCreateManyOperadorInputEnvelope
    set?: celular_operadorWhereUniqueInput | celular_operadorWhereUniqueInput[]
    disconnect?: celular_operadorWhereUniqueInput | celular_operadorWhereUniqueInput[]
    delete?: celular_operadorWhereUniqueInput | celular_operadorWhereUniqueInput[]
    connect?: celular_operadorWhereUniqueInput | celular_operadorWhereUniqueInput[]
    update?: celular_operadorUpdateWithWhereUniqueWithoutOperadorInput | celular_operadorUpdateWithWhereUniqueWithoutOperadorInput[]
    updateMany?: celular_operadorUpdateManyWithWhereWithoutOperadorInput | celular_operadorUpdateManyWithWhereWithoutOperadorInput[]
    deleteMany?: celular_operadorScalarWhereInput | celular_operadorScalarWhereInput[]
  }

  export type endereco_operadorUpdateManyWithoutOperadorNestedInput = {
    create?: XOR<endereco_operadorCreateWithoutOperadorInput, endereco_operadorUncheckedCreateWithoutOperadorInput> | endereco_operadorCreateWithoutOperadorInput[] | endereco_operadorUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: endereco_operadorCreateOrConnectWithoutOperadorInput | endereco_operadorCreateOrConnectWithoutOperadorInput[]
    upsert?: endereco_operadorUpsertWithWhereUniqueWithoutOperadorInput | endereco_operadorUpsertWithWhereUniqueWithoutOperadorInput[]
    createMany?: endereco_operadorCreateManyOperadorInputEnvelope
    set?: endereco_operadorWhereUniqueInput | endereco_operadorWhereUniqueInput[]
    disconnect?: endereco_operadorWhereUniqueInput | endereco_operadorWhereUniqueInput[]
    delete?: endereco_operadorWhereUniqueInput | endereco_operadorWhereUniqueInput[]
    connect?: endereco_operadorWhereUniqueInput | endereco_operadorWhereUniqueInput[]
    update?: endereco_operadorUpdateWithWhereUniqueWithoutOperadorInput | endereco_operadorUpdateWithWhereUniqueWithoutOperadorInput[]
    updateMany?: endereco_operadorUpdateManyWithWhereWithoutOperadorInput | endereco_operadorUpdateManyWithWhereWithoutOperadorInput[]
    deleteMany?: endereco_operadorScalarWhereInput | endereco_operadorScalarWhereInput[]
  }

  export type rede_social_operadorUpdateManyWithoutOperadorNestedInput = {
    create?: XOR<rede_social_operadorCreateWithoutOperadorInput, rede_social_operadorUncheckedCreateWithoutOperadorInput> | rede_social_operadorCreateWithoutOperadorInput[] | rede_social_operadorUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: rede_social_operadorCreateOrConnectWithoutOperadorInput | rede_social_operadorCreateOrConnectWithoutOperadorInput[]
    upsert?: rede_social_operadorUpsertWithWhereUniqueWithoutOperadorInput | rede_social_operadorUpsertWithWhereUniqueWithoutOperadorInput[]
    createMany?: rede_social_operadorCreateManyOperadorInputEnvelope
    set?: rede_social_operadorWhereUniqueInput | rede_social_operadorWhereUniqueInput[]
    disconnect?: rede_social_operadorWhereUniqueInput | rede_social_operadorWhereUniqueInput[]
    delete?: rede_social_operadorWhereUniqueInput | rede_social_operadorWhereUniqueInput[]
    connect?: rede_social_operadorWhereUniqueInput | rede_social_operadorWhereUniqueInput[]
    update?: rede_social_operadorUpdateWithWhereUniqueWithoutOperadorInput | rede_social_operadorUpdateWithWhereUniqueWithoutOperadorInput[]
    updateMany?: rede_social_operadorUpdateManyWithWhereWithoutOperadorInput | rede_social_operadorUpdateManyWithWhereWithoutOperadorInput[]
    deleteMany?: rede_social_operadorScalarWhereInput | rede_social_operadorScalarWhereInput[]
  }

  export type clienteUpdateManyWithoutOperadorNestedInput = {
    create?: XOR<clienteCreateWithoutOperadorInput, clienteUncheckedCreateWithoutOperadorInput> | clienteCreateWithoutOperadorInput[] | clienteUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: clienteCreateOrConnectWithoutOperadorInput | clienteCreateOrConnectWithoutOperadorInput[]
    upsert?: clienteUpsertWithWhereUniqueWithoutOperadorInput | clienteUpsertWithWhereUniqueWithoutOperadorInput[]
    createMany?: clienteCreateManyOperadorInputEnvelope
    set?: clienteWhereUniqueInput | clienteWhereUniqueInput[]
    disconnect?: clienteWhereUniqueInput | clienteWhereUniqueInput[]
    delete?: clienteWhereUniqueInput | clienteWhereUniqueInput[]
    connect?: clienteWhereUniqueInput | clienteWhereUniqueInput[]
    update?: clienteUpdateWithWhereUniqueWithoutOperadorInput | clienteUpdateWithWhereUniqueWithoutOperadorInput[]
    updateMany?: clienteUpdateManyWithWhereWithoutOperadorInput | clienteUpdateManyWithWhereWithoutOperadorInput[]
    deleteMany?: clienteScalarWhereInput | clienteScalarWhereInput[]
  }

  export type configuracaoUpdateManyWithoutOperadorNestedInput = {
    create?: XOR<configuracaoCreateWithoutOperadorInput, configuracaoUncheckedCreateWithoutOperadorInput> | configuracaoCreateWithoutOperadorInput[] | configuracaoUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: configuracaoCreateOrConnectWithoutOperadorInput | configuracaoCreateOrConnectWithoutOperadorInput[]
    upsert?: configuracaoUpsertWithWhereUniqueWithoutOperadorInput | configuracaoUpsertWithWhereUniqueWithoutOperadorInput[]
    createMany?: configuracaoCreateManyOperadorInputEnvelope
    set?: configuracaoWhereUniqueInput | configuracaoWhereUniqueInput[]
    disconnect?: configuracaoWhereUniqueInput | configuracaoWhereUniqueInput[]
    delete?: configuracaoWhereUniqueInput | configuracaoWhereUniqueInput[]
    connect?: configuracaoWhereUniqueInput | configuracaoWhereUniqueInput[]
    update?: configuracaoUpdateWithWhereUniqueWithoutOperadorInput | configuracaoUpdateWithWhereUniqueWithoutOperadorInput[]
    updateMany?: configuracaoUpdateManyWithWhereWithoutOperadorInput | configuracaoUpdateManyWithWhereWithoutOperadorInput[]
    deleteMany?: configuracaoScalarWhereInput | configuracaoScalarWhereInput[]
  }

  export type emprestimoUpdateManyWithoutOperadorNestedInput = {
    create?: XOR<emprestimoCreateWithoutOperadorInput, emprestimoUncheckedCreateWithoutOperadorInput> | emprestimoCreateWithoutOperadorInput[] | emprestimoUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: emprestimoCreateOrConnectWithoutOperadorInput | emprestimoCreateOrConnectWithoutOperadorInput[]
    upsert?: emprestimoUpsertWithWhereUniqueWithoutOperadorInput | emprestimoUpsertWithWhereUniqueWithoutOperadorInput[]
    createMany?: emprestimoCreateManyOperadorInputEnvelope
    set?: emprestimoWhereUniqueInput | emprestimoWhereUniqueInput[]
    disconnect?: emprestimoWhereUniqueInput | emprestimoWhereUniqueInput[]
    delete?: emprestimoWhereUniqueInput | emprestimoWhereUniqueInput[]
    connect?: emprestimoWhereUniqueInput | emprestimoWhereUniqueInput[]
    update?: emprestimoUpdateWithWhereUniqueWithoutOperadorInput | emprestimoUpdateWithWhereUniqueWithoutOperadorInput[]
    updateMany?: emprestimoUpdateManyWithWhereWithoutOperadorInput | emprestimoUpdateManyWithWhereWithoutOperadorInput[]
    deleteMany?: emprestimoScalarWhereInput | emprestimoScalarWhereInput[]
  }

  export type pagamentoUpdateManyWithoutOperadorNestedInput = {
    create?: XOR<pagamentoCreateWithoutOperadorInput, pagamentoUncheckedCreateWithoutOperadorInput> | pagamentoCreateWithoutOperadorInput[] | pagamentoUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: pagamentoCreateOrConnectWithoutOperadorInput | pagamentoCreateOrConnectWithoutOperadorInput[]
    upsert?: pagamentoUpsertWithWhereUniqueWithoutOperadorInput | pagamentoUpsertWithWhereUniqueWithoutOperadorInput[]
    createMany?: pagamentoCreateManyOperadorInputEnvelope
    set?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    disconnect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    delete?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    connect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    update?: pagamentoUpdateWithWhereUniqueWithoutOperadorInput | pagamentoUpdateWithWhereUniqueWithoutOperadorInput[]
    updateMany?: pagamentoUpdateManyWithWhereWithoutOperadorInput | pagamentoUpdateManyWithWhereWithoutOperadorInput[]
    deleteMany?: pagamentoScalarWhereInput | pagamentoScalarWhereInput[]
  }

  export type celular_operadorUncheckedUpdateManyWithoutOperadorNestedInput = {
    create?: XOR<celular_operadorCreateWithoutOperadorInput, celular_operadorUncheckedCreateWithoutOperadorInput> | celular_operadorCreateWithoutOperadorInput[] | celular_operadorUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: celular_operadorCreateOrConnectWithoutOperadorInput | celular_operadorCreateOrConnectWithoutOperadorInput[]
    upsert?: celular_operadorUpsertWithWhereUniqueWithoutOperadorInput | celular_operadorUpsertWithWhereUniqueWithoutOperadorInput[]
    createMany?: celular_operadorCreateManyOperadorInputEnvelope
    set?: celular_operadorWhereUniqueInput | celular_operadorWhereUniqueInput[]
    disconnect?: celular_operadorWhereUniqueInput | celular_operadorWhereUniqueInput[]
    delete?: celular_operadorWhereUniqueInput | celular_operadorWhereUniqueInput[]
    connect?: celular_operadorWhereUniqueInput | celular_operadorWhereUniqueInput[]
    update?: celular_operadorUpdateWithWhereUniqueWithoutOperadorInput | celular_operadorUpdateWithWhereUniqueWithoutOperadorInput[]
    updateMany?: celular_operadorUpdateManyWithWhereWithoutOperadorInput | celular_operadorUpdateManyWithWhereWithoutOperadorInput[]
    deleteMany?: celular_operadorScalarWhereInput | celular_operadorScalarWhereInput[]
  }

  export type endereco_operadorUncheckedUpdateManyWithoutOperadorNestedInput = {
    create?: XOR<endereco_operadorCreateWithoutOperadorInput, endereco_operadorUncheckedCreateWithoutOperadorInput> | endereco_operadorCreateWithoutOperadorInput[] | endereco_operadorUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: endereco_operadorCreateOrConnectWithoutOperadorInput | endereco_operadorCreateOrConnectWithoutOperadorInput[]
    upsert?: endereco_operadorUpsertWithWhereUniqueWithoutOperadorInput | endereco_operadorUpsertWithWhereUniqueWithoutOperadorInput[]
    createMany?: endereco_operadorCreateManyOperadorInputEnvelope
    set?: endereco_operadorWhereUniqueInput | endereco_operadorWhereUniqueInput[]
    disconnect?: endereco_operadorWhereUniqueInput | endereco_operadorWhereUniqueInput[]
    delete?: endereco_operadorWhereUniqueInput | endereco_operadorWhereUniqueInput[]
    connect?: endereco_operadorWhereUniqueInput | endereco_operadorWhereUniqueInput[]
    update?: endereco_operadorUpdateWithWhereUniqueWithoutOperadorInput | endereco_operadorUpdateWithWhereUniqueWithoutOperadorInput[]
    updateMany?: endereco_operadorUpdateManyWithWhereWithoutOperadorInput | endereco_operadorUpdateManyWithWhereWithoutOperadorInput[]
    deleteMany?: endereco_operadorScalarWhereInput | endereco_operadorScalarWhereInput[]
  }

  export type rede_social_operadorUncheckedUpdateManyWithoutOperadorNestedInput = {
    create?: XOR<rede_social_operadorCreateWithoutOperadorInput, rede_social_operadorUncheckedCreateWithoutOperadorInput> | rede_social_operadorCreateWithoutOperadorInput[] | rede_social_operadorUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: rede_social_operadorCreateOrConnectWithoutOperadorInput | rede_social_operadorCreateOrConnectWithoutOperadorInput[]
    upsert?: rede_social_operadorUpsertWithWhereUniqueWithoutOperadorInput | rede_social_operadorUpsertWithWhereUniqueWithoutOperadorInput[]
    createMany?: rede_social_operadorCreateManyOperadorInputEnvelope
    set?: rede_social_operadorWhereUniqueInput | rede_social_operadorWhereUniqueInput[]
    disconnect?: rede_social_operadorWhereUniqueInput | rede_social_operadorWhereUniqueInput[]
    delete?: rede_social_operadorWhereUniqueInput | rede_social_operadorWhereUniqueInput[]
    connect?: rede_social_operadorWhereUniqueInput | rede_social_operadorWhereUniqueInput[]
    update?: rede_social_operadorUpdateWithWhereUniqueWithoutOperadorInput | rede_social_operadorUpdateWithWhereUniqueWithoutOperadorInput[]
    updateMany?: rede_social_operadorUpdateManyWithWhereWithoutOperadorInput | rede_social_operadorUpdateManyWithWhereWithoutOperadorInput[]
    deleteMany?: rede_social_operadorScalarWhereInput | rede_social_operadorScalarWhereInput[]
  }

  export type clienteUncheckedUpdateManyWithoutOperadorNestedInput = {
    create?: XOR<clienteCreateWithoutOperadorInput, clienteUncheckedCreateWithoutOperadorInput> | clienteCreateWithoutOperadorInput[] | clienteUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: clienteCreateOrConnectWithoutOperadorInput | clienteCreateOrConnectWithoutOperadorInput[]
    upsert?: clienteUpsertWithWhereUniqueWithoutOperadorInput | clienteUpsertWithWhereUniqueWithoutOperadorInput[]
    createMany?: clienteCreateManyOperadorInputEnvelope
    set?: clienteWhereUniqueInput | clienteWhereUniqueInput[]
    disconnect?: clienteWhereUniqueInput | clienteWhereUniqueInput[]
    delete?: clienteWhereUniqueInput | clienteWhereUniqueInput[]
    connect?: clienteWhereUniqueInput | clienteWhereUniqueInput[]
    update?: clienteUpdateWithWhereUniqueWithoutOperadorInput | clienteUpdateWithWhereUniqueWithoutOperadorInput[]
    updateMany?: clienteUpdateManyWithWhereWithoutOperadorInput | clienteUpdateManyWithWhereWithoutOperadorInput[]
    deleteMany?: clienteScalarWhereInput | clienteScalarWhereInput[]
  }

  export type configuracaoUncheckedUpdateManyWithoutOperadorNestedInput = {
    create?: XOR<configuracaoCreateWithoutOperadorInput, configuracaoUncheckedCreateWithoutOperadorInput> | configuracaoCreateWithoutOperadorInput[] | configuracaoUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: configuracaoCreateOrConnectWithoutOperadorInput | configuracaoCreateOrConnectWithoutOperadorInput[]
    upsert?: configuracaoUpsertWithWhereUniqueWithoutOperadorInput | configuracaoUpsertWithWhereUniqueWithoutOperadorInput[]
    createMany?: configuracaoCreateManyOperadorInputEnvelope
    set?: configuracaoWhereUniqueInput | configuracaoWhereUniqueInput[]
    disconnect?: configuracaoWhereUniqueInput | configuracaoWhereUniqueInput[]
    delete?: configuracaoWhereUniqueInput | configuracaoWhereUniqueInput[]
    connect?: configuracaoWhereUniqueInput | configuracaoWhereUniqueInput[]
    update?: configuracaoUpdateWithWhereUniqueWithoutOperadorInput | configuracaoUpdateWithWhereUniqueWithoutOperadorInput[]
    updateMany?: configuracaoUpdateManyWithWhereWithoutOperadorInput | configuracaoUpdateManyWithWhereWithoutOperadorInput[]
    deleteMany?: configuracaoScalarWhereInput | configuracaoScalarWhereInput[]
  }

  export type emprestimoUncheckedUpdateManyWithoutOperadorNestedInput = {
    create?: XOR<emprestimoCreateWithoutOperadorInput, emprestimoUncheckedCreateWithoutOperadorInput> | emprestimoCreateWithoutOperadorInput[] | emprestimoUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: emprestimoCreateOrConnectWithoutOperadorInput | emprestimoCreateOrConnectWithoutOperadorInput[]
    upsert?: emprestimoUpsertWithWhereUniqueWithoutOperadorInput | emprestimoUpsertWithWhereUniqueWithoutOperadorInput[]
    createMany?: emprestimoCreateManyOperadorInputEnvelope
    set?: emprestimoWhereUniqueInput | emprestimoWhereUniqueInput[]
    disconnect?: emprestimoWhereUniqueInput | emprestimoWhereUniqueInput[]
    delete?: emprestimoWhereUniqueInput | emprestimoWhereUniqueInput[]
    connect?: emprestimoWhereUniqueInput | emprestimoWhereUniqueInput[]
    update?: emprestimoUpdateWithWhereUniqueWithoutOperadorInput | emprestimoUpdateWithWhereUniqueWithoutOperadorInput[]
    updateMany?: emprestimoUpdateManyWithWhereWithoutOperadorInput | emprestimoUpdateManyWithWhereWithoutOperadorInput[]
    deleteMany?: emprestimoScalarWhereInput | emprestimoScalarWhereInput[]
  }

  export type pagamentoUncheckedUpdateManyWithoutOperadorNestedInput = {
    create?: XOR<pagamentoCreateWithoutOperadorInput, pagamentoUncheckedCreateWithoutOperadorInput> | pagamentoCreateWithoutOperadorInput[] | pagamentoUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: pagamentoCreateOrConnectWithoutOperadorInput | pagamentoCreateOrConnectWithoutOperadorInput[]
    upsert?: pagamentoUpsertWithWhereUniqueWithoutOperadorInput | pagamentoUpsertWithWhereUniqueWithoutOperadorInput[]
    createMany?: pagamentoCreateManyOperadorInputEnvelope
    set?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    disconnect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    delete?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    connect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    update?: pagamentoUpdateWithWhereUniqueWithoutOperadorInput | pagamentoUpdateWithWhereUniqueWithoutOperadorInput[]
    updateMany?: pagamentoUpdateManyWithWhereWithoutOperadorInput | pagamentoUpdateManyWithWhereWithoutOperadorInput[]
    deleteMany?: pagamentoScalarWhereInput | pagamentoScalarWhereInput[]
  }

  export type operadorCreateNestedOneWithoutCelularOperadorsInput = {
    create?: XOR<operadorCreateWithoutCelularOperadorsInput, operadorUncheckedCreateWithoutCelularOperadorsInput>
    connectOrCreate?: operadorCreateOrConnectWithoutCelularOperadorsInput
    connect?: operadorWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type operadorUpdateOneRequiredWithoutCelularOperadorsNestedInput = {
    create?: XOR<operadorCreateWithoutCelularOperadorsInput, operadorUncheckedCreateWithoutCelularOperadorsInput>
    connectOrCreate?: operadorCreateOrConnectWithoutCelularOperadorsInput
    upsert?: operadorUpsertWithoutCelularOperadorsInput
    connect?: operadorWhereUniqueInput
    update?: XOR<XOR<operadorUpdateToOneWithWhereWithoutCelularOperadorsInput, operadorUpdateWithoutCelularOperadorsInput>, operadorUncheckedUpdateWithoutCelularOperadorsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type operadorCreateNestedOneWithoutEnderecoOperadorsInput = {
    create?: XOR<operadorCreateWithoutEnderecoOperadorsInput, operadorUncheckedCreateWithoutEnderecoOperadorsInput>
    connectOrCreate?: operadorCreateOrConnectWithoutEnderecoOperadorsInput
    connect?: operadorWhereUniqueInput
  }

  export type operadorUpdateOneRequiredWithoutEnderecoOperadorsNestedInput = {
    create?: XOR<operadorCreateWithoutEnderecoOperadorsInput, operadorUncheckedCreateWithoutEnderecoOperadorsInput>
    connectOrCreate?: operadorCreateOrConnectWithoutEnderecoOperadorsInput
    upsert?: operadorUpsertWithoutEnderecoOperadorsInput
    connect?: operadorWhereUniqueInput
    update?: XOR<XOR<operadorUpdateToOneWithWhereWithoutEnderecoOperadorsInput, operadorUpdateWithoutEnderecoOperadorsInput>, operadorUncheckedUpdateWithoutEnderecoOperadorsInput>
  }

  export type operadorCreateNestedOneWithoutRedeSocialOperadorsInput = {
    create?: XOR<operadorCreateWithoutRedeSocialOperadorsInput, operadorUncheckedCreateWithoutRedeSocialOperadorsInput>
    connectOrCreate?: operadorCreateOrConnectWithoutRedeSocialOperadorsInput
    connect?: operadorWhereUniqueInput
  }

  export type operadorUpdateOneRequiredWithoutRedeSocialOperadorsNestedInput = {
    create?: XOR<operadorCreateWithoutRedeSocialOperadorsInput, operadorUncheckedCreateWithoutRedeSocialOperadorsInput>
    connectOrCreate?: operadorCreateOrConnectWithoutRedeSocialOperadorsInput
    upsert?: operadorUpsertWithoutRedeSocialOperadorsInput
    connect?: operadorWhereUniqueInput
    update?: XOR<XOR<operadorUpdateToOneWithWhereWithoutRedeSocialOperadorsInput, operadorUpdateWithoutRedeSocialOperadorsInput>, operadorUncheckedUpdateWithoutRedeSocialOperadorsInput>
  }

  export type celular_clienteCreateNestedManyWithoutClienteInput = {
    create?: XOR<celular_clienteCreateWithoutClienteInput, celular_clienteUncheckedCreateWithoutClienteInput> | celular_clienteCreateWithoutClienteInput[] | celular_clienteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: celular_clienteCreateOrConnectWithoutClienteInput | celular_clienteCreateOrConnectWithoutClienteInput[]
    createMany?: celular_clienteCreateManyClienteInputEnvelope
    connect?: celular_clienteWhereUniqueInput | celular_clienteWhereUniqueInput[]
  }

  export type endereco_clienteCreateNestedManyWithoutClienteInput = {
    create?: XOR<endereco_clienteCreateWithoutClienteInput, endereco_clienteUncheckedCreateWithoutClienteInput> | endereco_clienteCreateWithoutClienteInput[] | endereco_clienteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: endereco_clienteCreateOrConnectWithoutClienteInput | endereco_clienteCreateOrConnectWithoutClienteInput[]
    createMany?: endereco_clienteCreateManyClienteInputEnvelope
    connect?: endereco_clienteWhereUniqueInput | endereco_clienteWhereUniqueInput[]
  }

  export type rede_social_clienteCreateNestedManyWithoutClienteInput = {
    create?: XOR<rede_social_clienteCreateWithoutClienteInput, rede_social_clienteUncheckedCreateWithoutClienteInput> | rede_social_clienteCreateWithoutClienteInput[] | rede_social_clienteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: rede_social_clienteCreateOrConnectWithoutClienteInput | rede_social_clienteCreateOrConnectWithoutClienteInput[]
    createMany?: rede_social_clienteCreateManyClienteInputEnvelope
    connect?: rede_social_clienteWhereUniqueInput | rede_social_clienteWhereUniqueInput[]
  }

  export type operadorCreateNestedOneWithoutClientesInput = {
    create?: XOR<operadorCreateWithoutClientesInput, operadorUncheckedCreateWithoutClientesInput>
    connectOrCreate?: operadorCreateOrConnectWithoutClientesInput
    connect?: operadorWhereUniqueInput
  }

  export type emprestimoCreateNestedManyWithoutClienteInput = {
    create?: XOR<emprestimoCreateWithoutClienteInput, emprestimoUncheckedCreateWithoutClienteInput> | emprestimoCreateWithoutClienteInput[] | emprestimoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: emprestimoCreateOrConnectWithoutClienteInput | emprestimoCreateOrConnectWithoutClienteInput[]
    createMany?: emprestimoCreateManyClienteInputEnvelope
    connect?: emprestimoWhereUniqueInput | emprestimoWhereUniqueInput[]
  }

  export type pagamentoCreateNestedManyWithoutClienteInput = {
    create?: XOR<pagamentoCreateWithoutClienteInput, pagamentoUncheckedCreateWithoutClienteInput> | pagamentoCreateWithoutClienteInput[] | pagamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: pagamentoCreateOrConnectWithoutClienteInput | pagamentoCreateOrConnectWithoutClienteInput[]
    createMany?: pagamentoCreateManyClienteInputEnvelope
    connect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
  }

  export type celular_clienteUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<celular_clienteCreateWithoutClienteInput, celular_clienteUncheckedCreateWithoutClienteInput> | celular_clienteCreateWithoutClienteInput[] | celular_clienteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: celular_clienteCreateOrConnectWithoutClienteInput | celular_clienteCreateOrConnectWithoutClienteInput[]
    createMany?: celular_clienteCreateManyClienteInputEnvelope
    connect?: celular_clienteWhereUniqueInput | celular_clienteWhereUniqueInput[]
  }

  export type endereco_clienteUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<endereco_clienteCreateWithoutClienteInput, endereco_clienteUncheckedCreateWithoutClienteInput> | endereco_clienteCreateWithoutClienteInput[] | endereco_clienteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: endereco_clienteCreateOrConnectWithoutClienteInput | endereco_clienteCreateOrConnectWithoutClienteInput[]
    createMany?: endereco_clienteCreateManyClienteInputEnvelope
    connect?: endereco_clienteWhereUniqueInput | endereco_clienteWhereUniqueInput[]
  }

  export type rede_social_clienteUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<rede_social_clienteCreateWithoutClienteInput, rede_social_clienteUncheckedCreateWithoutClienteInput> | rede_social_clienteCreateWithoutClienteInput[] | rede_social_clienteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: rede_social_clienteCreateOrConnectWithoutClienteInput | rede_social_clienteCreateOrConnectWithoutClienteInput[]
    createMany?: rede_social_clienteCreateManyClienteInputEnvelope
    connect?: rede_social_clienteWhereUniqueInput | rede_social_clienteWhereUniqueInput[]
  }

  export type emprestimoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<emprestimoCreateWithoutClienteInput, emprestimoUncheckedCreateWithoutClienteInput> | emprestimoCreateWithoutClienteInput[] | emprestimoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: emprestimoCreateOrConnectWithoutClienteInput | emprestimoCreateOrConnectWithoutClienteInput[]
    createMany?: emprestimoCreateManyClienteInputEnvelope
    connect?: emprestimoWhereUniqueInput | emprestimoWhereUniqueInput[]
  }

  export type pagamentoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<pagamentoCreateWithoutClienteInput, pagamentoUncheckedCreateWithoutClienteInput> | pagamentoCreateWithoutClienteInput[] | pagamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: pagamentoCreateOrConnectWithoutClienteInput | pagamentoCreateOrConnectWithoutClienteInput[]
    createMany?: pagamentoCreateManyClienteInputEnvelope
    connect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type celular_clienteUpdateManyWithoutClienteNestedInput = {
    create?: XOR<celular_clienteCreateWithoutClienteInput, celular_clienteUncheckedCreateWithoutClienteInput> | celular_clienteCreateWithoutClienteInput[] | celular_clienteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: celular_clienteCreateOrConnectWithoutClienteInput | celular_clienteCreateOrConnectWithoutClienteInput[]
    upsert?: celular_clienteUpsertWithWhereUniqueWithoutClienteInput | celular_clienteUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: celular_clienteCreateManyClienteInputEnvelope
    set?: celular_clienteWhereUniqueInput | celular_clienteWhereUniqueInput[]
    disconnect?: celular_clienteWhereUniqueInput | celular_clienteWhereUniqueInput[]
    delete?: celular_clienteWhereUniqueInput | celular_clienteWhereUniqueInput[]
    connect?: celular_clienteWhereUniqueInput | celular_clienteWhereUniqueInput[]
    update?: celular_clienteUpdateWithWhereUniqueWithoutClienteInput | celular_clienteUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: celular_clienteUpdateManyWithWhereWithoutClienteInput | celular_clienteUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: celular_clienteScalarWhereInput | celular_clienteScalarWhereInput[]
  }

  export type endereco_clienteUpdateManyWithoutClienteNestedInput = {
    create?: XOR<endereco_clienteCreateWithoutClienteInput, endereco_clienteUncheckedCreateWithoutClienteInput> | endereco_clienteCreateWithoutClienteInput[] | endereco_clienteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: endereco_clienteCreateOrConnectWithoutClienteInput | endereco_clienteCreateOrConnectWithoutClienteInput[]
    upsert?: endereco_clienteUpsertWithWhereUniqueWithoutClienteInput | endereco_clienteUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: endereco_clienteCreateManyClienteInputEnvelope
    set?: endereco_clienteWhereUniqueInput | endereco_clienteWhereUniqueInput[]
    disconnect?: endereco_clienteWhereUniqueInput | endereco_clienteWhereUniqueInput[]
    delete?: endereco_clienteWhereUniqueInput | endereco_clienteWhereUniqueInput[]
    connect?: endereco_clienteWhereUniqueInput | endereco_clienteWhereUniqueInput[]
    update?: endereco_clienteUpdateWithWhereUniqueWithoutClienteInput | endereco_clienteUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: endereco_clienteUpdateManyWithWhereWithoutClienteInput | endereco_clienteUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: endereco_clienteScalarWhereInput | endereco_clienteScalarWhereInput[]
  }

  export type rede_social_clienteUpdateManyWithoutClienteNestedInput = {
    create?: XOR<rede_social_clienteCreateWithoutClienteInput, rede_social_clienteUncheckedCreateWithoutClienteInput> | rede_social_clienteCreateWithoutClienteInput[] | rede_social_clienteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: rede_social_clienteCreateOrConnectWithoutClienteInput | rede_social_clienteCreateOrConnectWithoutClienteInput[]
    upsert?: rede_social_clienteUpsertWithWhereUniqueWithoutClienteInput | rede_social_clienteUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: rede_social_clienteCreateManyClienteInputEnvelope
    set?: rede_social_clienteWhereUniqueInput | rede_social_clienteWhereUniqueInput[]
    disconnect?: rede_social_clienteWhereUniqueInput | rede_social_clienteWhereUniqueInput[]
    delete?: rede_social_clienteWhereUniqueInput | rede_social_clienteWhereUniqueInput[]
    connect?: rede_social_clienteWhereUniqueInput | rede_social_clienteWhereUniqueInput[]
    update?: rede_social_clienteUpdateWithWhereUniqueWithoutClienteInput | rede_social_clienteUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: rede_social_clienteUpdateManyWithWhereWithoutClienteInput | rede_social_clienteUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: rede_social_clienteScalarWhereInput | rede_social_clienteScalarWhereInput[]
  }

  export type operadorUpdateOneRequiredWithoutClientesNestedInput = {
    create?: XOR<operadorCreateWithoutClientesInput, operadorUncheckedCreateWithoutClientesInput>
    connectOrCreate?: operadorCreateOrConnectWithoutClientesInput
    upsert?: operadorUpsertWithoutClientesInput
    connect?: operadorWhereUniqueInput
    update?: XOR<XOR<operadorUpdateToOneWithWhereWithoutClientesInput, operadorUpdateWithoutClientesInput>, operadorUncheckedUpdateWithoutClientesInput>
  }

  export type emprestimoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<emprestimoCreateWithoutClienteInput, emprestimoUncheckedCreateWithoutClienteInput> | emprestimoCreateWithoutClienteInput[] | emprestimoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: emprestimoCreateOrConnectWithoutClienteInput | emprestimoCreateOrConnectWithoutClienteInput[]
    upsert?: emprestimoUpsertWithWhereUniqueWithoutClienteInput | emprestimoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: emprestimoCreateManyClienteInputEnvelope
    set?: emprestimoWhereUniqueInput | emprestimoWhereUniqueInput[]
    disconnect?: emprestimoWhereUniqueInput | emprestimoWhereUniqueInput[]
    delete?: emprestimoWhereUniqueInput | emprestimoWhereUniqueInput[]
    connect?: emprestimoWhereUniqueInput | emprestimoWhereUniqueInput[]
    update?: emprestimoUpdateWithWhereUniqueWithoutClienteInput | emprestimoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: emprestimoUpdateManyWithWhereWithoutClienteInput | emprestimoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: emprestimoScalarWhereInput | emprestimoScalarWhereInput[]
  }

  export type pagamentoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<pagamentoCreateWithoutClienteInput, pagamentoUncheckedCreateWithoutClienteInput> | pagamentoCreateWithoutClienteInput[] | pagamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: pagamentoCreateOrConnectWithoutClienteInput | pagamentoCreateOrConnectWithoutClienteInput[]
    upsert?: pagamentoUpsertWithWhereUniqueWithoutClienteInput | pagamentoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: pagamentoCreateManyClienteInputEnvelope
    set?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    disconnect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    delete?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    connect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    update?: pagamentoUpdateWithWhereUniqueWithoutClienteInput | pagamentoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: pagamentoUpdateManyWithWhereWithoutClienteInput | pagamentoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: pagamentoScalarWhereInput | pagamentoScalarWhereInput[]
  }

  export type celular_clienteUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<celular_clienteCreateWithoutClienteInput, celular_clienteUncheckedCreateWithoutClienteInput> | celular_clienteCreateWithoutClienteInput[] | celular_clienteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: celular_clienteCreateOrConnectWithoutClienteInput | celular_clienteCreateOrConnectWithoutClienteInput[]
    upsert?: celular_clienteUpsertWithWhereUniqueWithoutClienteInput | celular_clienteUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: celular_clienteCreateManyClienteInputEnvelope
    set?: celular_clienteWhereUniqueInput | celular_clienteWhereUniqueInput[]
    disconnect?: celular_clienteWhereUniqueInput | celular_clienteWhereUniqueInput[]
    delete?: celular_clienteWhereUniqueInput | celular_clienteWhereUniqueInput[]
    connect?: celular_clienteWhereUniqueInput | celular_clienteWhereUniqueInput[]
    update?: celular_clienteUpdateWithWhereUniqueWithoutClienteInput | celular_clienteUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: celular_clienteUpdateManyWithWhereWithoutClienteInput | celular_clienteUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: celular_clienteScalarWhereInput | celular_clienteScalarWhereInput[]
  }

  export type endereco_clienteUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<endereco_clienteCreateWithoutClienteInput, endereco_clienteUncheckedCreateWithoutClienteInput> | endereco_clienteCreateWithoutClienteInput[] | endereco_clienteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: endereco_clienteCreateOrConnectWithoutClienteInput | endereco_clienteCreateOrConnectWithoutClienteInput[]
    upsert?: endereco_clienteUpsertWithWhereUniqueWithoutClienteInput | endereco_clienteUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: endereco_clienteCreateManyClienteInputEnvelope
    set?: endereco_clienteWhereUniqueInput | endereco_clienteWhereUniqueInput[]
    disconnect?: endereco_clienteWhereUniqueInput | endereco_clienteWhereUniqueInput[]
    delete?: endereco_clienteWhereUniqueInput | endereco_clienteWhereUniqueInput[]
    connect?: endereco_clienteWhereUniqueInput | endereco_clienteWhereUniqueInput[]
    update?: endereco_clienteUpdateWithWhereUniqueWithoutClienteInput | endereco_clienteUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: endereco_clienteUpdateManyWithWhereWithoutClienteInput | endereco_clienteUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: endereco_clienteScalarWhereInput | endereco_clienteScalarWhereInput[]
  }

  export type rede_social_clienteUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<rede_social_clienteCreateWithoutClienteInput, rede_social_clienteUncheckedCreateWithoutClienteInput> | rede_social_clienteCreateWithoutClienteInput[] | rede_social_clienteUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: rede_social_clienteCreateOrConnectWithoutClienteInput | rede_social_clienteCreateOrConnectWithoutClienteInput[]
    upsert?: rede_social_clienteUpsertWithWhereUniqueWithoutClienteInput | rede_social_clienteUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: rede_social_clienteCreateManyClienteInputEnvelope
    set?: rede_social_clienteWhereUniqueInput | rede_social_clienteWhereUniqueInput[]
    disconnect?: rede_social_clienteWhereUniqueInput | rede_social_clienteWhereUniqueInput[]
    delete?: rede_social_clienteWhereUniqueInput | rede_social_clienteWhereUniqueInput[]
    connect?: rede_social_clienteWhereUniqueInput | rede_social_clienteWhereUniqueInput[]
    update?: rede_social_clienteUpdateWithWhereUniqueWithoutClienteInput | rede_social_clienteUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: rede_social_clienteUpdateManyWithWhereWithoutClienteInput | rede_social_clienteUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: rede_social_clienteScalarWhereInput | rede_social_clienteScalarWhereInput[]
  }

  export type emprestimoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<emprestimoCreateWithoutClienteInput, emprestimoUncheckedCreateWithoutClienteInput> | emprestimoCreateWithoutClienteInput[] | emprestimoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: emprestimoCreateOrConnectWithoutClienteInput | emprestimoCreateOrConnectWithoutClienteInput[]
    upsert?: emprestimoUpsertWithWhereUniqueWithoutClienteInput | emprestimoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: emprestimoCreateManyClienteInputEnvelope
    set?: emprestimoWhereUniqueInput | emprestimoWhereUniqueInput[]
    disconnect?: emprestimoWhereUniqueInput | emprestimoWhereUniqueInput[]
    delete?: emprestimoWhereUniqueInput | emprestimoWhereUniqueInput[]
    connect?: emprestimoWhereUniqueInput | emprestimoWhereUniqueInput[]
    update?: emprestimoUpdateWithWhereUniqueWithoutClienteInput | emprestimoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: emprestimoUpdateManyWithWhereWithoutClienteInput | emprestimoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: emprestimoScalarWhereInput | emprestimoScalarWhereInput[]
  }

  export type pagamentoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<pagamentoCreateWithoutClienteInput, pagamentoUncheckedCreateWithoutClienteInput> | pagamentoCreateWithoutClienteInput[] | pagamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: pagamentoCreateOrConnectWithoutClienteInput | pagamentoCreateOrConnectWithoutClienteInput[]
    upsert?: pagamentoUpsertWithWhereUniqueWithoutClienteInput | pagamentoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: pagamentoCreateManyClienteInputEnvelope
    set?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    disconnect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    delete?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    connect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    update?: pagamentoUpdateWithWhereUniqueWithoutClienteInput | pagamentoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: pagamentoUpdateManyWithWhereWithoutClienteInput | pagamentoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: pagamentoScalarWhereInput | pagamentoScalarWhereInput[]
  }

  export type clienteCreateNestedOneWithoutCelularClientesInput = {
    create?: XOR<clienteCreateWithoutCelularClientesInput, clienteUncheckedCreateWithoutCelularClientesInput>
    connectOrCreate?: clienteCreateOrConnectWithoutCelularClientesInput
    connect?: clienteWhereUniqueInput
  }

  export type clienteUpdateOneRequiredWithoutCelularClientesNestedInput = {
    create?: XOR<clienteCreateWithoutCelularClientesInput, clienteUncheckedCreateWithoutCelularClientesInput>
    connectOrCreate?: clienteCreateOrConnectWithoutCelularClientesInput
    upsert?: clienteUpsertWithoutCelularClientesInput
    connect?: clienteWhereUniqueInput
    update?: XOR<XOR<clienteUpdateToOneWithWhereWithoutCelularClientesInput, clienteUpdateWithoutCelularClientesInput>, clienteUncheckedUpdateWithoutCelularClientesInput>
  }

  export type clienteCreateNestedOneWithoutEnderecoClientesInput = {
    create?: XOR<clienteCreateWithoutEnderecoClientesInput, clienteUncheckedCreateWithoutEnderecoClientesInput>
    connectOrCreate?: clienteCreateOrConnectWithoutEnderecoClientesInput
    connect?: clienteWhereUniqueInput
  }

  export type clienteUpdateOneRequiredWithoutEnderecoClientesNestedInput = {
    create?: XOR<clienteCreateWithoutEnderecoClientesInput, clienteUncheckedCreateWithoutEnderecoClientesInput>
    connectOrCreate?: clienteCreateOrConnectWithoutEnderecoClientesInput
    upsert?: clienteUpsertWithoutEnderecoClientesInput
    connect?: clienteWhereUniqueInput
    update?: XOR<XOR<clienteUpdateToOneWithWhereWithoutEnderecoClientesInput, clienteUpdateWithoutEnderecoClientesInput>, clienteUncheckedUpdateWithoutEnderecoClientesInput>
  }

  export type clienteCreateNestedOneWithoutRedeSocialClientesInput = {
    create?: XOR<clienteCreateWithoutRedeSocialClientesInput, clienteUncheckedCreateWithoutRedeSocialClientesInput>
    connectOrCreate?: clienteCreateOrConnectWithoutRedeSocialClientesInput
    connect?: clienteWhereUniqueInput
  }

  export type clienteUpdateOneRequiredWithoutRedeSocialClientesNestedInput = {
    create?: XOR<clienteCreateWithoutRedeSocialClientesInput, clienteUncheckedCreateWithoutRedeSocialClientesInput>
    connectOrCreate?: clienteCreateOrConnectWithoutRedeSocialClientesInput
    upsert?: clienteUpsertWithoutRedeSocialClientesInput
    connect?: clienteWhereUniqueInput
    update?: XOR<XOR<clienteUpdateToOneWithWhereWithoutRedeSocialClientesInput, clienteUpdateWithoutRedeSocialClientesInput>, clienteUncheckedUpdateWithoutRedeSocialClientesInput>
  }

  export type operadorCreateNestedOneWithoutConfiguracaosInput = {
    create?: XOR<operadorCreateWithoutConfiguracaosInput, operadorUncheckedCreateWithoutConfiguracaosInput>
    connectOrCreate?: operadorCreateOrConnectWithoutConfiguracaosInput
    connect?: operadorWhereUniqueInput
  }

  export type operadorUpdateOneRequiredWithoutConfiguracaosNestedInput = {
    create?: XOR<operadorCreateWithoutConfiguracaosInput, operadorUncheckedCreateWithoutConfiguracaosInput>
    connectOrCreate?: operadorCreateOrConnectWithoutConfiguracaosInput
    upsert?: operadorUpsertWithoutConfiguracaosInput
    connect?: operadorWhereUniqueInput
    update?: XOR<XOR<operadorUpdateToOneWithWhereWithoutConfiguracaosInput, operadorUpdateWithoutConfiguracaosInput>, operadorUncheckedUpdateWithoutConfiguracaosInput>
  }

  export type pagamentoCreateNestedManyWithoutEmprestimoInput = {
    create?: XOR<pagamentoCreateWithoutEmprestimoInput, pagamentoUncheckedCreateWithoutEmprestimoInput> | pagamentoCreateWithoutEmprestimoInput[] | pagamentoUncheckedCreateWithoutEmprestimoInput[]
    connectOrCreate?: pagamentoCreateOrConnectWithoutEmprestimoInput | pagamentoCreateOrConnectWithoutEmprestimoInput[]
    createMany?: pagamentoCreateManyEmprestimoInputEnvelope
    connect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
  }

  export type clienteCreateNestedOneWithoutEmprestimosInput = {
    create?: XOR<clienteCreateWithoutEmprestimosInput, clienteUncheckedCreateWithoutEmprestimosInput>
    connectOrCreate?: clienteCreateOrConnectWithoutEmprestimosInput
    connect?: clienteWhereUniqueInput
  }

  export type operadorCreateNestedOneWithoutEmprestimosInput = {
    create?: XOR<operadorCreateWithoutEmprestimosInput, operadorUncheckedCreateWithoutEmprestimosInput>
    connectOrCreate?: operadorCreateOrConnectWithoutEmprestimosInput
    connect?: operadorWhereUniqueInput
  }

  export type pagamentoUncheckedCreateNestedManyWithoutEmprestimoInput = {
    create?: XOR<pagamentoCreateWithoutEmprestimoInput, pagamentoUncheckedCreateWithoutEmprestimoInput> | pagamentoCreateWithoutEmprestimoInput[] | pagamentoUncheckedCreateWithoutEmprestimoInput[]
    connectOrCreate?: pagamentoCreateOrConnectWithoutEmprestimoInput | pagamentoCreateOrConnectWithoutEmprestimoInput[]
    createMany?: pagamentoCreateManyEmprestimoInputEnvelope
    connect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTipo_cobrancaFieldUpdateOperationsInput = {
    set?: $Enums.Tipo_cobranca
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumStatus_dividaFieldUpdateOperationsInput = {
    set?: $Enums.Status_divida
  }

  export type pagamentoUpdateManyWithoutEmprestimoNestedInput = {
    create?: XOR<pagamentoCreateWithoutEmprestimoInput, pagamentoUncheckedCreateWithoutEmprestimoInput> | pagamentoCreateWithoutEmprestimoInput[] | pagamentoUncheckedCreateWithoutEmprestimoInput[]
    connectOrCreate?: pagamentoCreateOrConnectWithoutEmprestimoInput | pagamentoCreateOrConnectWithoutEmprestimoInput[]
    upsert?: pagamentoUpsertWithWhereUniqueWithoutEmprestimoInput | pagamentoUpsertWithWhereUniqueWithoutEmprestimoInput[]
    createMany?: pagamentoCreateManyEmprestimoInputEnvelope
    set?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    disconnect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    delete?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    connect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    update?: pagamentoUpdateWithWhereUniqueWithoutEmprestimoInput | pagamentoUpdateWithWhereUniqueWithoutEmprestimoInput[]
    updateMany?: pagamentoUpdateManyWithWhereWithoutEmprestimoInput | pagamentoUpdateManyWithWhereWithoutEmprestimoInput[]
    deleteMany?: pagamentoScalarWhereInput | pagamentoScalarWhereInput[]
  }

  export type clienteUpdateOneRequiredWithoutEmprestimosNestedInput = {
    create?: XOR<clienteCreateWithoutEmprestimosInput, clienteUncheckedCreateWithoutEmprestimosInput>
    connectOrCreate?: clienteCreateOrConnectWithoutEmprestimosInput
    upsert?: clienteUpsertWithoutEmprestimosInput
    connect?: clienteWhereUniqueInput
    update?: XOR<XOR<clienteUpdateToOneWithWhereWithoutEmprestimosInput, clienteUpdateWithoutEmprestimosInput>, clienteUncheckedUpdateWithoutEmprestimosInput>
  }

  export type operadorUpdateOneRequiredWithoutEmprestimosNestedInput = {
    create?: XOR<operadorCreateWithoutEmprestimosInput, operadorUncheckedCreateWithoutEmprestimosInput>
    connectOrCreate?: operadorCreateOrConnectWithoutEmprestimosInput
    upsert?: operadorUpsertWithoutEmprestimosInput
    connect?: operadorWhereUniqueInput
    update?: XOR<XOR<operadorUpdateToOneWithWhereWithoutEmprestimosInput, operadorUpdateWithoutEmprestimosInput>, operadorUncheckedUpdateWithoutEmprestimosInput>
  }

  export type pagamentoUncheckedUpdateManyWithoutEmprestimoNestedInput = {
    create?: XOR<pagamentoCreateWithoutEmprestimoInput, pagamentoUncheckedCreateWithoutEmprestimoInput> | pagamentoCreateWithoutEmprestimoInput[] | pagamentoUncheckedCreateWithoutEmprestimoInput[]
    connectOrCreate?: pagamentoCreateOrConnectWithoutEmprestimoInput | pagamentoCreateOrConnectWithoutEmprestimoInput[]
    upsert?: pagamentoUpsertWithWhereUniqueWithoutEmprestimoInput | pagamentoUpsertWithWhereUniqueWithoutEmprestimoInput[]
    createMany?: pagamentoCreateManyEmprestimoInputEnvelope
    set?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    disconnect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    delete?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    connect?: pagamentoWhereUniqueInput | pagamentoWhereUniqueInput[]
    update?: pagamentoUpdateWithWhereUniqueWithoutEmprestimoInput | pagamentoUpdateWithWhereUniqueWithoutEmprestimoInput[]
    updateMany?: pagamentoUpdateManyWithWhereWithoutEmprestimoInput | pagamentoUpdateManyWithWhereWithoutEmprestimoInput[]
    deleteMany?: pagamentoScalarWhereInput | pagamentoScalarWhereInput[]
  }

  export type clienteCreateNestedOneWithoutPagamentosInput = {
    create?: XOR<clienteCreateWithoutPagamentosInput, clienteUncheckedCreateWithoutPagamentosInput>
    connectOrCreate?: clienteCreateOrConnectWithoutPagamentosInput
    connect?: clienteWhereUniqueInput
  }

  export type operadorCreateNestedOneWithoutPagamentosInput = {
    create?: XOR<operadorCreateWithoutPagamentosInput, operadorUncheckedCreateWithoutPagamentosInput>
    connectOrCreate?: operadorCreateOrConnectWithoutPagamentosInput
    connect?: operadorWhereUniqueInput
  }

  export type emprestimoCreateNestedOneWithoutPagamentosInput = {
    create?: XOR<emprestimoCreateWithoutPagamentosInput, emprestimoUncheckedCreateWithoutPagamentosInput>
    connectOrCreate?: emprestimoCreateOrConnectWithoutPagamentosInput
    connect?: emprestimoWhereUniqueInput
  }

  export type NullableEnumTipo_pagamentoFieldUpdateOperationsInput = {
    set?: $Enums.Tipo_pagamento | null
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Bytes | null
  }

  export type clienteUpdateOneRequiredWithoutPagamentosNestedInput = {
    create?: XOR<clienteCreateWithoutPagamentosInput, clienteUncheckedCreateWithoutPagamentosInput>
    connectOrCreate?: clienteCreateOrConnectWithoutPagamentosInput
    upsert?: clienteUpsertWithoutPagamentosInput
    connect?: clienteWhereUniqueInput
    update?: XOR<XOR<clienteUpdateToOneWithWhereWithoutPagamentosInput, clienteUpdateWithoutPagamentosInput>, clienteUncheckedUpdateWithoutPagamentosInput>
  }

  export type operadorUpdateOneRequiredWithoutPagamentosNestedInput = {
    create?: XOR<operadorCreateWithoutPagamentosInput, operadorUncheckedCreateWithoutPagamentosInput>
    connectOrCreate?: operadorCreateOrConnectWithoutPagamentosInput
    upsert?: operadorUpsertWithoutPagamentosInput
    connect?: operadorWhereUniqueInput
    update?: XOR<XOR<operadorUpdateToOneWithWhereWithoutPagamentosInput, operadorUpdateWithoutPagamentosInput>, operadorUncheckedUpdateWithoutPagamentosInput>
  }

  export type emprestimoUpdateOneRequiredWithoutPagamentosNestedInput = {
    create?: XOR<emprestimoCreateWithoutPagamentosInput, emprestimoUncheckedCreateWithoutPagamentosInput>
    connectOrCreate?: emprestimoCreateOrConnectWithoutPagamentosInput
    upsert?: emprestimoUpsertWithoutPagamentosInput
    connect?: emprestimoWhereUniqueInput
    update?: XOR<XOR<emprestimoUpdateToOneWithWhereWithoutPagamentosInput, emprestimoUpdateWithoutPagamentosInput>, emprestimoUncheckedUpdateWithoutPagamentosInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTipo_cobrancaFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipo_cobranca | EnumTipo_cobrancaFieldRefInput<$PrismaModel>
    in?: $Enums.Tipo_cobranca[] | ListEnumTipo_cobrancaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tipo_cobranca[] | ListEnumTipo_cobrancaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipo_cobrancaFilter<$PrismaModel> | $Enums.Tipo_cobranca
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

  export type NestedEnumStatus_dividaFilter<$PrismaModel = never> = {
    equals?: $Enums.Status_divida | EnumStatus_dividaFieldRefInput<$PrismaModel>
    in?: $Enums.Status_divida[] | ListEnumStatus_dividaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status_divida[] | ListEnumStatus_dividaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatus_dividaFilter<$PrismaModel> | $Enums.Status_divida
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumTipo_cobrancaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipo_cobranca | EnumTipo_cobrancaFieldRefInput<$PrismaModel>
    in?: $Enums.Tipo_cobranca[] | ListEnumTipo_cobrancaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tipo_cobranca[] | ListEnumTipo_cobrancaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipo_cobrancaWithAggregatesFilter<$PrismaModel> | $Enums.Tipo_cobranca
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipo_cobrancaFilter<$PrismaModel>
    _max?: NestedEnumTipo_cobrancaFilter<$PrismaModel>
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

  export type NestedEnumStatus_dividaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status_divida | EnumStatus_dividaFieldRefInput<$PrismaModel>
    in?: $Enums.Status_divida[] | ListEnumStatus_dividaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status_divida[] | ListEnumStatus_dividaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatus_dividaWithAggregatesFilter<$PrismaModel> | $Enums.Status_divida
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatus_dividaFilter<$PrismaModel>
    _max?: NestedEnumStatus_dividaFilter<$PrismaModel>
  }

  export type NestedEnumTipo_pagamentoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipo_pagamento | EnumTipo_pagamentoFieldRefInput<$PrismaModel> | null
    in?: $Enums.Tipo_pagamento[] | ListEnumTipo_pagamentoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Tipo_pagamento[] | ListEnumTipo_pagamentoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTipo_pagamentoNullableFilter<$PrismaModel> | $Enums.Tipo_pagamento | null
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Bytes | null
  }

  export type NestedEnumTipo_pagamentoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipo_pagamento | EnumTipo_pagamentoFieldRefInput<$PrismaModel> | null
    in?: $Enums.Tipo_pagamento[] | ListEnumTipo_pagamentoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Tipo_pagamento[] | ListEnumTipo_pagamentoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTipo_pagamentoNullableWithAggregatesFilter<$PrismaModel> | $Enums.Tipo_pagamento | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTipo_pagamentoNullableFilter<$PrismaModel>
    _max?: NestedEnumTipo_pagamentoNullableFilter<$PrismaModel>
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Bytes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type celular_operadorCreateWithoutOperadorInput = {
    num_cel: string
    status?: boolean
  }

  export type celular_operadorUncheckedCreateWithoutOperadorInput = {
    id?: number
    num_cel: string
    status?: boolean
  }

  export type celular_operadorCreateOrConnectWithoutOperadorInput = {
    where: celular_operadorWhereUniqueInput
    create: XOR<celular_operadorCreateWithoutOperadorInput, celular_operadorUncheckedCreateWithoutOperadorInput>
  }

  export type celular_operadorCreateManyOperadorInputEnvelope = {
    data: celular_operadorCreateManyOperadorInput | celular_operadorCreateManyOperadorInput[]
    skipDuplicates?: boolean
  }

  export type endereco_operadorCreateWithoutOperadorInput = {
    codigo_postal: string
    numero_residencial: string
    status?: boolean
  }

  export type endereco_operadorUncheckedCreateWithoutOperadorInput = {
    id?: number
    codigo_postal: string
    numero_residencial: string
    status?: boolean
  }

  export type endereco_operadorCreateOrConnectWithoutOperadorInput = {
    where: endereco_operadorWhereUniqueInput
    create: XOR<endereco_operadorCreateWithoutOperadorInput, endereco_operadorUncheckedCreateWithoutOperadorInput>
  }

  export type endereco_operadorCreateManyOperadorInputEnvelope = {
    data: endereco_operadorCreateManyOperadorInput | endereco_operadorCreateManyOperadorInput[]
    skipDuplicates?: boolean
  }

  export type rede_social_operadorCreateWithoutOperadorInput = {
    url: string
  }

  export type rede_social_operadorUncheckedCreateWithoutOperadorInput = {
    id?: number
    url: string
  }

  export type rede_social_operadorCreateOrConnectWithoutOperadorInput = {
    where: rede_social_operadorWhereUniqueInput
    create: XOR<rede_social_operadorCreateWithoutOperadorInput, rede_social_operadorUncheckedCreateWithoutOperadorInput>
  }

  export type rede_social_operadorCreateManyOperadorInputEnvelope = {
    data: rede_social_operadorCreateManyOperadorInput | rede_social_operadorCreateManyOperadorInput[]
    skipDuplicates?: boolean
  }

  export type clienteCreateWithoutOperadorInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico?: string | null
    observacao?: string | null
    status?: boolean
    delete?: boolean | null
    celularClientes?: celular_clienteCreateNestedManyWithoutClienteInput
    enderecoClientes?: endereco_clienteCreateNestedManyWithoutClienteInput
    redeSocialClientes?: rede_social_clienteCreateNestedManyWithoutClienteInput
    emprestimos?: emprestimoCreateNestedManyWithoutClienteInput
    pagamentos?: pagamentoCreateNestedManyWithoutClienteInput
  }

  export type clienteUncheckedCreateWithoutOperadorInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico?: string | null
    observacao?: string | null
    status?: boolean
    delete?: boolean | null
    celularClientes?: celular_clienteUncheckedCreateNestedManyWithoutClienteInput
    enderecoClientes?: endereco_clienteUncheckedCreateNestedManyWithoutClienteInput
    redeSocialClientes?: rede_social_clienteUncheckedCreateNestedManyWithoutClienteInput
    emprestimos?: emprestimoUncheckedCreateNestedManyWithoutClienteInput
    pagamentos?: pagamentoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type clienteCreateOrConnectWithoutOperadorInput = {
    where: clienteWhereUniqueInput
    create: XOR<clienteCreateWithoutOperadorInput, clienteUncheckedCreateWithoutOperadorInput>
  }

  export type clienteCreateManyOperadorInputEnvelope = {
    data: clienteCreateManyOperadorInput | clienteCreateManyOperadorInput[]
    skipDuplicates?: boolean
  }

  export type configuracaoCreateWithoutOperadorInput = {
    alerta_dias_antes: number
    senha_entrada: number
  }

  export type configuracaoUncheckedCreateWithoutOperadorInput = {
    id?: number
    alerta_dias_antes: number
    senha_entrada: number
  }

  export type configuracaoCreateOrConnectWithoutOperadorInput = {
    where: configuracaoWhereUniqueInput
    create: XOR<configuracaoCreateWithoutOperadorInput, configuracaoUncheckedCreateWithoutOperadorInput>
  }

  export type configuracaoCreateManyOperadorInputEnvelope = {
    data: configuracaoCreateManyOperadorInput | configuracaoCreateManyOperadorInput[]
    skipDuplicates?: boolean
  }

  export type emprestimoCreateWithoutOperadorInput = {
    uuid?: string
    nome_emprestimo: string
    valor_emprestimo: number
    valor_receber: number
    valor_recebido?: number | null
    tipo: $Enums.Tipo_cobranca
    data_emprestimo?: Date | string
    data_final: Date | string
    observacao?: string | null
    status?: $Enums.Status_divida
    delete?: boolean | null
    pagamentos?: pagamentoCreateNestedManyWithoutEmprestimoInput
    cliente: clienteCreateNestedOneWithoutEmprestimosInput
  }

  export type emprestimoUncheckedCreateWithoutOperadorInput = {
    uuid?: string
    nome_emprestimo: string
    valor_emprestimo: number
    valor_receber: number
    valor_recebido?: number | null
    tipo: $Enums.Tipo_cobranca
    data_emprestimo?: Date | string
    data_final: Date | string
    observacao?: string | null
    status?: $Enums.Status_divida
    uuid_cliente: string
    delete?: boolean | null
    pagamentos?: pagamentoUncheckedCreateNestedManyWithoutEmprestimoInput
  }

  export type emprestimoCreateOrConnectWithoutOperadorInput = {
    where: emprestimoWhereUniqueInput
    create: XOR<emprestimoCreateWithoutOperadorInput, emprestimoUncheckedCreateWithoutOperadorInput>
  }

  export type emprestimoCreateManyOperadorInputEnvelope = {
    data: emprestimoCreateManyOperadorInput | emprestimoCreateManyOperadorInput[]
    skipDuplicates?: boolean
  }

  export type pagamentoCreateWithoutOperadorInput = {
    uuid?: string
    valor_pago?: number | null
    valor_previsto: number
    tipo_pagamento?: $Enums.Tipo_pagamento | null
    data_pagamento?: Date | string | null
    data_vencimento: Date | string
    comprovante?: Bytes | null
    observacao?: string | null
    delete?: boolean | null
    status?: $Enums.Status_divida
    cliente: clienteCreateNestedOneWithoutPagamentosInput
    emprestimo: emprestimoCreateNestedOneWithoutPagamentosInput
  }

  export type pagamentoUncheckedCreateWithoutOperadorInput = {
    uuid?: string
    valor_pago?: number | null
    valor_previsto: number
    uuid_emprestimo: string
    tipo_pagamento?: $Enums.Tipo_pagamento | null
    data_pagamento?: Date | string | null
    data_vencimento: Date | string
    comprovante?: Bytes | null
    observacao?: string | null
    uuid_cliente: string
    delete?: boolean | null
    status?: $Enums.Status_divida
  }

  export type pagamentoCreateOrConnectWithoutOperadorInput = {
    where: pagamentoWhereUniqueInput
    create: XOR<pagamentoCreateWithoutOperadorInput, pagamentoUncheckedCreateWithoutOperadorInput>
  }

  export type pagamentoCreateManyOperadorInputEnvelope = {
    data: pagamentoCreateManyOperadorInput | pagamentoCreateManyOperadorInput[]
    skipDuplicates?: boolean
  }

  export type celular_operadorUpsertWithWhereUniqueWithoutOperadorInput = {
    where: celular_operadorWhereUniqueInput
    update: XOR<celular_operadorUpdateWithoutOperadorInput, celular_operadorUncheckedUpdateWithoutOperadorInput>
    create: XOR<celular_operadorCreateWithoutOperadorInput, celular_operadorUncheckedCreateWithoutOperadorInput>
  }

  export type celular_operadorUpdateWithWhereUniqueWithoutOperadorInput = {
    where: celular_operadorWhereUniqueInput
    data: XOR<celular_operadorUpdateWithoutOperadorInput, celular_operadorUncheckedUpdateWithoutOperadorInput>
  }

  export type celular_operadorUpdateManyWithWhereWithoutOperadorInput = {
    where: celular_operadorScalarWhereInput
    data: XOR<celular_operadorUpdateManyMutationInput, celular_operadorUncheckedUpdateManyWithoutOperadorInput>
  }

  export type celular_operadorScalarWhereInput = {
    AND?: celular_operadorScalarWhereInput | celular_operadorScalarWhereInput[]
    OR?: celular_operadorScalarWhereInput[]
    NOT?: celular_operadorScalarWhereInput | celular_operadorScalarWhereInput[]
    id?: IntFilter<"celular_operador"> | number
    num_cel?: StringFilter<"celular_operador"> | string
    status?: BoolFilter<"celular_operador"> | boolean
    uuid_operador?: StringFilter<"celular_operador"> | string
  }

  export type endereco_operadorUpsertWithWhereUniqueWithoutOperadorInput = {
    where: endereco_operadorWhereUniqueInput
    update: XOR<endereco_operadorUpdateWithoutOperadorInput, endereco_operadorUncheckedUpdateWithoutOperadorInput>
    create: XOR<endereco_operadorCreateWithoutOperadorInput, endereco_operadorUncheckedCreateWithoutOperadorInput>
  }

  export type endereco_operadorUpdateWithWhereUniqueWithoutOperadorInput = {
    where: endereco_operadorWhereUniqueInput
    data: XOR<endereco_operadorUpdateWithoutOperadorInput, endereco_operadorUncheckedUpdateWithoutOperadorInput>
  }

  export type endereco_operadorUpdateManyWithWhereWithoutOperadorInput = {
    where: endereco_operadorScalarWhereInput
    data: XOR<endereco_operadorUpdateManyMutationInput, endereco_operadorUncheckedUpdateManyWithoutOperadorInput>
  }

  export type endereco_operadorScalarWhereInput = {
    AND?: endereco_operadorScalarWhereInput | endereco_operadorScalarWhereInput[]
    OR?: endereco_operadorScalarWhereInput[]
    NOT?: endereco_operadorScalarWhereInput | endereco_operadorScalarWhereInput[]
    id?: IntFilter<"endereco_operador"> | number
    codigo_postal?: StringFilter<"endereco_operador"> | string
    numero_residencial?: StringFilter<"endereco_operador"> | string
    status?: BoolFilter<"endereco_operador"> | boolean
    uuid_operador?: StringFilter<"endereco_operador"> | string
  }

  export type rede_social_operadorUpsertWithWhereUniqueWithoutOperadorInput = {
    where: rede_social_operadorWhereUniqueInput
    update: XOR<rede_social_operadorUpdateWithoutOperadorInput, rede_social_operadorUncheckedUpdateWithoutOperadorInput>
    create: XOR<rede_social_operadorCreateWithoutOperadorInput, rede_social_operadorUncheckedCreateWithoutOperadorInput>
  }

  export type rede_social_operadorUpdateWithWhereUniqueWithoutOperadorInput = {
    where: rede_social_operadorWhereUniqueInput
    data: XOR<rede_social_operadorUpdateWithoutOperadorInput, rede_social_operadorUncheckedUpdateWithoutOperadorInput>
  }

  export type rede_social_operadorUpdateManyWithWhereWithoutOperadorInput = {
    where: rede_social_operadorScalarWhereInput
    data: XOR<rede_social_operadorUpdateManyMutationInput, rede_social_operadorUncheckedUpdateManyWithoutOperadorInput>
  }

  export type rede_social_operadorScalarWhereInput = {
    AND?: rede_social_operadorScalarWhereInput | rede_social_operadorScalarWhereInput[]
    OR?: rede_social_operadorScalarWhereInput[]
    NOT?: rede_social_operadorScalarWhereInput | rede_social_operadorScalarWhereInput[]
    id?: IntFilter<"rede_social_operador"> | number
    uuid_operador?: StringFilter<"rede_social_operador"> | string
    url?: StringFilter<"rede_social_operador"> | string
  }

  export type clienteUpsertWithWhereUniqueWithoutOperadorInput = {
    where: clienteWhereUniqueInput
    update: XOR<clienteUpdateWithoutOperadorInput, clienteUncheckedUpdateWithoutOperadorInput>
    create: XOR<clienteCreateWithoutOperadorInput, clienteUncheckedCreateWithoutOperadorInput>
  }

  export type clienteUpdateWithWhereUniqueWithoutOperadorInput = {
    where: clienteWhereUniqueInput
    data: XOR<clienteUpdateWithoutOperadorInput, clienteUncheckedUpdateWithoutOperadorInput>
  }

  export type clienteUpdateManyWithWhereWithoutOperadorInput = {
    where: clienteScalarWhereInput
    data: XOR<clienteUpdateManyMutationInput, clienteUncheckedUpdateManyWithoutOperadorInput>
  }

  export type clienteScalarWhereInput = {
    AND?: clienteScalarWhereInput | clienteScalarWhereInput[]
    OR?: clienteScalarWhereInput[]
    NOT?: clienteScalarWhereInput | clienteScalarWhereInput[]
    uuid?: StringFilter<"cliente"> | string
    nome_completo?: StringFilter<"cliente"> | string
    num_cpf?: StringFilter<"cliente"> | string
    num_cnpj?: StringNullableFilter<"cliente"> | string | null
    data_nascimento?: DateTimeNullableFilter<"cliente"> | Date | string | null
    correio_eletronico?: StringNullableFilter<"cliente"> | string | null
    observacao?: StringNullableFilter<"cliente"> | string | null
    uuid_operador?: StringFilter<"cliente"> | string
    status?: BoolFilter<"cliente"> | boolean
    delete?: BoolNullableFilter<"cliente"> | boolean | null
  }

  export type configuracaoUpsertWithWhereUniqueWithoutOperadorInput = {
    where: configuracaoWhereUniqueInput
    update: XOR<configuracaoUpdateWithoutOperadorInput, configuracaoUncheckedUpdateWithoutOperadorInput>
    create: XOR<configuracaoCreateWithoutOperadorInput, configuracaoUncheckedCreateWithoutOperadorInput>
  }

  export type configuracaoUpdateWithWhereUniqueWithoutOperadorInput = {
    where: configuracaoWhereUniqueInput
    data: XOR<configuracaoUpdateWithoutOperadorInput, configuracaoUncheckedUpdateWithoutOperadorInput>
  }

  export type configuracaoUpdateManyWithWhereWithoutOperadorInput = {
    where: configuracaoScalarWhereInput
    data: XOR<configuracaoUpdateManyMutationInput, configuracaoUncheckedUpdateManyWithoutOperadorInput>
  }

  export type configuracaoScalarWhereInput = {
    AND?: configuracaoScalarWhereInput | configuracaoScalarWhereInput[]
    OR?: configuracaoScalarWhereInput[]
    NOT?: configuracaoScalarWhereInput | configuracaoScalarWhereInput[]
    id?: IntFilter<"configuracao"> | number
    alerta_dias_antes?: IntFilter<"configuracao"> | number
    senha_entrada?: IntFilter<"configuracao"> | number
    uuid_operador?: StringFilter<"configuracao"> | string
  }

  export type emprestimoUpsertWithWhereUniqueWithoutOperadorInput = {
    where: emprestimoWhereUniqueInput
    update: XOR<emprestimoUpdateWithoutOperadorInput, emprestimoUncheckedUpdateWithoutOperadorInput>
    create: XOR<emprestimoCreateWithoutOperadorInput, emprestimoUncheckedCreateWithoutOperadorInput>
  }

  export type emprestimoUpdateWithWhereUniqueWithoutOperadorInput = {
    where: emprestimoWhereUniqueInput
    data: XOR<emprestimoUpdateWithoutOperadorInput, emprestimoUncheckedUpdateWithoutOperadorInput>
  }

  export type emprestimoUpdateManyWithWhereWithoutOperadorInput = {
    where: emprestimoScalarWhereInput
    data: XOR<emprestimoUpdateManyMutationInput, emprestimoUncheckedUpdateManyWithoutOperadorInput>
  }

  export type emprestimoScalarWhereInput = {
    AND?: emprestimoScalarWhereInput | emprestimoScalarWhereInput[]
    OR?: emprestimoScalarWhereInput[]
    NOT?: emprestimoScalarWhereInput | emprestimoScalarWhereInput[]
    uuid?: StringFilter<"emprestimo"> | string
    nome_emprestimo?: StringFilter<"emprestimo"> | string
    valor_emprestimo?: FloatFilter<"emprestimo"> | number
    valor_receber?: FloatFilter<"emprestimo"> | number
    valor_recebido?: FloatNullableFilter<"emprestimo"> | number | null
    tipo?: EnumTipo_cobrancaFilter<"emprestimo"> | $Enums.Tipo_cobranca
    data_emprestimo?: DateTimeFilter<"emprestimo"> | Date | string
    data_final?: DateTimeFilter<"emprestimo"> | Date | string
    observacao?: StringNullableFilter<"emprestimo"> | string | null
    status?: EnumStatus_dividaFilter<"emprestimo"> | $Enums.Status_divida
    uuid_operador?: StringFilter<"emprestimo"> | string
    uuid_cliente?: StringFilter<"emprestimo"> | string
    delete?: BoolNullableFilter<"emprestimo"> | boolean | null
  }

  export type pagamentoUpsertWithWhereUniqueWithoutOperadorInput = {
    where: pagamentoWhereUniqueInput
    update: XOR<pagamentoUpdateWithoutOperadorInput, pagamentoUncheckedUpdateWithoutOperadorInput>
    create: XOR<pagamentoCreateWithoutOperadorInput, pagamentoUncheckedCreateWithoutOperadorInput>
  }

  export type pagamentoUpdateWithWhereUniqueWithoutOperadorInput = {
    where: pagamentoWhereUniqueInput
    data: XOR<pagamentoUpdateWithoutOperadorInput, pagamentoUncheckedUpdateWithoutOperadorInput>
  }

  export type pagamentoUpdateManyWithWhereWithoutOperadorInput = {
    where: pagamentoScalarWhereInput
    data: XOR<pagamentoUpdateManyMutationInput, pagamentoUncheckedUpdateManyWithoutOperadorInput>
  }

  export type pagamentoScalarWhereInput = {
    AND?: pagamentoScalarWhereInput | pagamentoScalarWhereInput[]
    OR?: pagamentoScalarWhereInput[]
    NOT?: pagamentoScalarWhereInput | pagamentoScalarWhereInput[]
    uuid?: StringFilter<"pagamento"> | string
    valor_pago?: FloatNullableFilter<"pagamento"> | number | null
    valor_previsto?: FloatFilter<"pagamento"> | number
    uuid_emprestimo?: StringFilter<"pagamento"> | string
    tipo_pagamento?: EnumTipo_pagamentoNullableFilter<"pagamento"> | $Enums.Tipo_pagamento | null
    data_pagamento?: DateTimeNullableFilter<"pagamento"> | Date | string | null
    data_vencimento?: DateTimeFilter<"pagamento"> | Date | string
    comprovante?: BytesNullableFilter<"pagamento"> | Bytes | null
    observacao?: StringNullableFilter<"pagamento"> | string | null
    uuid_cliente?: StringFilter<"pagamento"> | string
    uuid_operador?: StringFilter<"pagamento"> | string
    delete?: BoolNullableFilter<"pagamento"> | boolean | null
    status?: EnumStatus_dividaFilter<"pagamento"> | $Enums.Status_divida
  }

  export type operadorCreateWithoutCelularOperadorsInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico: string
    enderecoOperadors?: endereco_operadorCreateNestedManyWithoutOperadorInput
    redeSocialOperadors?: rede_social_operadorCreateNestedManyWithoutOperadorInput
    clientes?: clienteCreateNestedManyWithoutOperadorInput
    configuracaos?: configuracaoCreateNestedManyWithoutOperadorInput
    emprestimos?: emprestimoCreateNestedManyWithoutOperadorInput
    pagamentos?: pagamentoCreateNestedManyWithoutOperadorInput
  }

  export type operadorUncheckedCreateWithoutCelularOperadorsInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico: string
    enderecoOperadors?: endereco_operadorUncheckedCreateNestedManyWithoutOperadorInput
    redeSocialOperadors?: rede_social_operadorUncheckedCreateNestedManyWithoutOperadorInput
    clientes?: clienteUncheckedCreateNestedManyWithoutOperadorInput
    configuracaos?: configuracaoUncheckedCreateNestedManyWithoutOperadorInput
    emprestimos?: emprestimoUncheckedCreateNestedManyWithoutOperadorInput
    pagamentos?: pagamentoUncheckedCreateNestedManyWithoutOperadorInput
  }

  export type operadorCreateOrConnectWithoutCelularOperadorsInput = {
    where: operadorWhereUniqueInput
    create: XOR<operadorCreateWithoutCelularOperadorsInput, operadorUncheckedCreateWithoutCelularOperadorsInput>
  }

  export type operadorUpsertWithoutCelularOperadorsInput = {
    update: XOR<operadorUpdateWithoutCelularOperadorsInput, operadorUncheckedUpdateWithoutCelularOperadorsInput>
    create: XOR<operadorCreateWithoutCelularOperadorsInput, operadorUncheckedCreateWithoutCelularOperadorsInput>
    where?: operadorWhereInput
  }

  export type operadorUpdateToOneWithWhereWithoutCelularOperadorsInput = {
    where?: operadorWhereInput
    data: XOR<operadorUpdateWithoutCelularOperadorsInput, operadorUncheckedUpdateWithoutCelularOperadorsInput>
  }

  export type operadorUpdateWithoutCelularOperadorsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: StringFieldUpdateOperationsInput | string
    enderecoOperadors?: endereco_operadorUpdateManyWithoutOperadorNestedInput
    redeSocialOperadors?: rede_social_operadorUpdateManyWithoutOperadorNestedInput
    clientes?: clienteUpdateManyWithoutOperadorNestedInput
    configuracaos?: configuracaoUpdateManyWithoutOperadorNestedInput
    emprestimos?: emprestimoUpdateManyWithoutOperadorNestedInput
    pagamentos?: pagamentoUpdateManyWithoutOperadorNestedInput
  }

  export type operadorUncheckedUpdateWithoutCelularOperadorsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: StringFieldUpdateOperationsInput | string
    enderecoOperadors?: endereco_operadorUncheckedUpdateManyWithoutOperadorNestedInput
    redeSocialOperadors?: rede_social_operadorUncheckedUpdateManyWithoutOperadorNestedInput
    clientes?: clienteUncheckedUpdateManyWithoutOperadorNestedInput
    configuracaos?: configuracaoUncheckedUpdateManyWithoutOperadorNestedInput
    emprestimos?: emprestimoUncheckedUpdateManyWithoutOperadorNestedInput
    pagamentos?: pagamentoUncheckedUpdateManyWithoutOperadorNestedInput
  }

  export type operadorCreateWithoutEnderecoOperadorsInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico: string
    celularOperadors?: celular_operadorCreateNestedManyWithoutOperadorInput
    redeSocialOperadors?: rede_social_operadorCreateNestedManyWithoutOperadorInput
    clientes?: clienteCreateNestedManyWithoutOperadorInput
    configuracaos?: configuracaoCreateNestedManyWithoutOperadorInput
    emprestimos?: emprestimoCreateNestedManyWithoutOperadorInput
    pagamentos?: pagamentoCreateNestedManyWithoutOperadorInput
  }

  export type operadorUncheckedCreateWithoutEnderecoOperadorsInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico: string
    celularOperadors?: celular_operadorUncheckedCreateNestedManyWithoutOperadorInput
    redeSocialOperadors?: rede_social_operadorUncheckedCreateNestedManyWithoutOperadorInput
    clientes?: clienteUncheckedCreateNestedManyWithoutOperadorInput
    configuracaos?: configuracaoUncheckedCreateNestedManyWithoutOperadorInput
    emprestimos?: emprestimoUncheckedCreateNestedManyWithoutOperadorInput
    pagamentos?: pagamentoUncheckedCreateNestedManyWithoutOperadorInput
  }

  export type operadorCreateOrConnectWithoutEnderecoOperadorsInput = {
    where: operadorWhereUniqueInput
    create: XOR<operadorCreateWithoutEnderecoOperadorsInput, operadorUncheckedCreateWithoutEnderecoOperadorsInput>
  }

  export type operadorUpsertWithoutEnderecoOperadorsInput = {
    update: XOR<operadorUpdateWithoutEnderecoOperadorsInput, operadorUncheckedUpdateWithoutEnderecoOperadorsInput>
    create: XOR<operadorCreateWithoutEnderecoOperadorsInput, operadorUncheckedCreateWithoutEnderecoOperadorsInput>
    where?: operadorWhereInput
  }

  export type operadorUpdateToOneWithWhereWithoutEnderecoOperadorsInput = {
    where?: operadorWhereInput
    data: XOR<operadorUpdateWithoutEnderecoOperadorsInput, operadorUncheckedUpdateWithoutEnderecoOperadorsInput>
  }

  export type operadorUpdateWithoutEnderecoOperadorsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: StringFieldUpdateOperationsInput | string
    celularOperadors?: celular_operadorUpdateManyWithoutOperadorNestedInput
    redeSocialOperadors?: rede_social_operadorUpdateManyWithoutOperadorNestedInput
    clientes?: clienteUpdateManyWithoutOperadorNestedInput
    configuracaos?: configuracaoUpdateManyWithoutOperadorNestedInput
    emprestimos?: emprestimoUpdateManyWithoutOperadorNestedInput
    pagamentos?: pagamentoUpdateManyWithoutOperadorNestedInput
  }

  export type operadorUncheckedUpdateWithoutEnderecoOperadorsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: StringFieldUpdateOperationsInput | string
    celularOperadors?: celular_operadorUncheckedUpdateManyWithoutOperadorNestedInput
    redeSocialOperadors?: rede_social_operadorUncheckedUpdateManyWithoutOperadorNestedInput
    clientes?: clienteUncheckedUpdateManyWithoutOperadorNestedInput
    configuracaos?: configuracaoUncheckedUpdateManyWithoutOperadorNestedInput
    emprestimos?: emprestimoUncheckedUpdateManyWithoutOperadorNestedInput
    pagamentos?: pagamentoUncheckedUpdateManyWithoutOperadorNestedInput
  }

  export type operadorCreateWithoutRedeSocialOperadorsInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico: string
    celularOperadors?: celular_operadorCreateNestedManyWithoutOperadorInput
    enderecoOperadors?: endereco_operadorCreateNestedManyWithoutOperadorInput
    clientes?: clienteCreateNestedManyWithoutOperadorInput
    configuracaos?: configuracaoCreateNestedManyWithoutOperadorInput
    emprestimos?: emprestimoCreateNestedManyWithoutOperadorInput
    pagamentos?: pagamentoCreateNestedManyWithoutOperadorInput
  }

  export type operadorUncheckedCreateWithoutRedeSocialOperadorsInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico: string
    celularOperadors?: celular_operadorUncheckedCreateNestedManyWithoutOperadorInput
    enderecoOperadors?: endereco_operadorUncheckedCreateNestedManyWithoutOperadorInput
    clientes?: clienteUncheckedCreateNestedManyWithoutOperadorInput
    configuracaos?: configuracaoUncheckedCreateNestedManyWithoutOperadorInput
    emprestimos?: emprestimoUncheckedCreateNestedManyWithoutOperadorInput
    pagamentos?: pagamentoUncheckedCreateNestedManyWithoutOperadorInput
  }

  export type operadorCreateOrConnectWithoutRedeSocialOperadorsInput = {
    where: operadorWhereUniqueInput
    create: XOR<operadorCreateWithoutRedeSocialOperadorsInput, operadorUncheckedCreateWithoutRedeSocialOperadorsInput>
  }

  export type operadorUpsertWithoutRedeSocialOperadorsInput = {
    update: XOR<operadorUpdateWithoutRedeSocialOperadorsInput, operadorUncheckedUpdateWithoutRedeSocialOperadorsInput>
    create: XOR<operadorCreateWithoutRedeSocialOperadorsInput, operadorUncheckedCreateWithoutRedeSocialOperadorsInput>
    where?: operadorWhereInput
  }

  export type operadorUpdateToOneWithWhereWithoutRedeSocialOperadorsInput = {
    where?: operadorWhereInput
    data: XOR<operadorUpdateWithoutRedeSocialOperadorsInput, operadorUncheckedUpdateWithoutRedeSocialOperadorsInput>
  }

  export type operadorUpdateWithoutRedeSocialOperadorsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: StringFieldUpdateOperationsInput | string
    celularOperadors?: celular_operadorUpdateManyWithoutOperadorNestedInput
    enderecoOperadors?: endereco_operadorUpdateManyWithoutOperadorNestedInput
    clientes?: clienteUpdateManyWithoutOperadorNestedInput
    configuracaos?: configuracaoUpdateManyWithoutOperadorNestedInput
    emprestimos?: emprestimoUpdateManyWithoutOperadorNestedInput
    pagamentos?: pagamentoUpdateManyWithoutOperadorNestedInput
  }

  export type operadorUncheckedUpdateWithoutRedeSocialOperadorsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: StringFieldUpdateOperationsInput | string
    celularOperadors?: celular_operadorUncheckedUpdateManyWithoutOperadorNestedInput
    enderecoOperadors?: endereco_operadorUncheckedUpdateManyWithoutOperadorNestedInput
    clientes?: clienteUncheckedUpdateManyWithoutOperadorNestedInput
    configuracaos?: configuracaoUncheckedUpdateManyWithoutOperadorNestedInput
    emprestimos?: emprestimoUncheckedUpdateManyWithoutOperadorNestedInput
    pagamentos?: pagamentoUncheckedUpdateManyWithoutOperadorNestedInput
  }

  export type celular_clienteCreateWithoutClienteInput = {
    num_cel: string
    status?: boolean
  }

  export type celular_clienteUncheckedCreateWithoutClienteInput = {
    id?: number
    num_cel: string
    status?: boolean
  }

  export type celular_clienteCreateOrConnectWithoutClienteInput = {
    where: celular_clienteWhereUniqueInput
    create: XOR<celular_clienteCreateWithoutClienteInput, celular_clienteUncheckedCreateWithoutClienteInput>
  }

  export type celular_clienteCreateManyClienteInputEnvelope = {
    data: celular_clienteCreateManyClienteInput | celular_clienteCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type endereco_clienteCreateWithoutClienteInput = {
    codigo_postal: string
    numero_residencial: string
    status?: boolean
  }

  export type endereco_clienteUncheckedCreateWithoutClienteInput = {
    id?: number
    codigo_postal: string
    numero_residencial: string
    status?: boolean
  }

  export type endereco_clienteCreateOrConnectWithoutClienteInput = {
    where: endereco_clienteWhereUniqueInput
    create: XOR<endereco_clienteCreateWithoutClienteInput, endereco_clienteUncheckedCreateWithoutClienteInput>
  }

  export type endereco_clienteCreateManyClienteInputEnvelope = {
    data: endereco_clienteCreateManyClienteInput | endereco_clienteCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type rede_social_clienteCreateWithoutClienteInput = {
    url: string
  }

  export type rede_social_clienteUncheckedCreateWithoutClienteInput = {
    id?: number
    url: string
  }

  export type rede_social_clienteCreateOrConnectWithoutClienteInput = {
    where: rede_social_clienteWhereUniqueInput
    create: XOR<rede_social_clienteCreateWithoutClienteInput, rede_social_clienteUncheckedCreateWithoutClienteInput>
  }

  export type rede_social_clienteCreateManyClienteInputEnvelope = {
    data: rede_social_clienteCreateManyClienteInput | rede_social_clienteCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type operadorCreateWithoutClientesInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico: string
    celularOperadors?: celular_operadorCreateNestedManyWithoutOperadorInput
    enderecoOperadors?: endereco_operadorCreateNestedManyWithoutOperadorInput
    redeSocialOperadors?: rede_social_operadorCreateNestedManyWithoutOperadorInput
    configuracaos?: configuracaoCreateNestedManyWithoutOperadorInput
    emprestimos?: emprestimoCreateNestedManyWithoutOperadorInput
    pagamentos?: pagamentoCreateNestedManyWithoutOperadorInput
  }

  export type operadorUncheckedCreateWithoutClientesInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico: string
    celularOperadors?: celular_operadorUncheckedCreateNestedManyWithoutOperadorInput
    enderecoOperadors?: endereco_operadorUncheckedCreateNestedManyWithoutOperadorInput
    redeSocialOperadors?: rede_social_operadorUncheckedCreateNestedManyWithoutOperadorInput
    configuracaos?: configuracaoUncheckedCreateNestedManyWithoutOperadorInput
    emprestimos?: emprestimoUncheckedCreateNestedManyWithoutOperadorInput
    pagamentos?: pagamentoUncheckedCreateNestedManyWithoutOperadorInput
  }

  export type operadorCreateOrConnectWithoutClientesInput = {
    where: operadorWhereUniqueInput
    create: XOR<operadorCreateWithoutClientesInput, operadorUncheckedCreateWithoutClientesInput>
  }

  export type emprestimoCreateWithoutClienteInput = {
    uuid?: string
    nome_emprestimo: string
    valor_emprestimo: number
    valor_receber: number
    valor_recebido?: number | null
    tipo: $Enums.Tipo_cobranca
    data_emprestimo?: Date | string
    data_final: Date | string
    observacao?: string | null
    status?: $Enums.Status_divida
    delete?: boolean | null
    pagamentos?: pagamentoCreateNestedManyWithoutEmprestimoInput
    operador: operadorCreateNestedOneWithoutEmprestimosInput
  }

  export type emprestimoUncheckedCreateWithoutClienteInput = {
    uuid?: string
    nome_emprestimo: string
    valor_emprestimo: number
    valor_receber: number
    valor_recebido?: number | null
    tipo: $Enums.Tipo_cobranca
    data_emprestimo?: Date | string
    data_final: Date | string
    observacao?: string | null
    status?: $Enums.Status_divida
    uuid_operador: string
    delete?: boolean | null
    pagamentos?: pagamentoUncheckedCreateNestedManyWithoutEmprestimoInput
  }

  export type emprestimoCreateOrConnectWithoutClienteInput = {
    where: emprestimoWhereUniqueInput
    create: XOR<emprestimoCreateWithoutClienteInput, emprestimoUncheckedCreateWithoutClienteInput>
  }

  export type emprestimoCreateManyClienteInputEnvelope = {
    data: emprestimoCreateManyClienteInput | emprestimoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type pagamentoCreateWithoutClienteInput = {
    uuid?: string
    valor_pago?: number | null
    valor_previsto: number
    tipo_pagamento?: $Enums.Tipo_pagamento | null
    data_pagamento?: Date | string | null
    data_vencimento: Date | string
    comprovante?: Bytes | null
    observacao?: string | null
    delete?: boolean | null
    status?: $Enums.Status_divida
    operador: operadorCreateNestedOneWithoutPagamentosInput
    emprestimo: emprestimoCreateNestedOneWithoutPagamentosInput
  }

  export type pagamentoUncheckedCreateWithoutClienteInput = {
    uuid?: string
    valor_pago?: number | null
    valor_previsto: number
    uuid_emprestimo: string
    tipo_pagamento?: $Enums.Tipo_pagamento | null
    data_pagamento?: Date | string | null
    data_vencimento: Date | string
    comprovante?: Bytes | null
    observacao?: string | null
    uuid_operador: string
    delete?: boolean | null
    status?: $Enums.Status_divida
  }

  export type pagamentoCreateOrConnectWithoutClienteInput = {
    where: pagamentoWhereUniqueInput
    create: XOR<pagamentoCreateWithoutClienteInput, pagamentoUncheckedCreateWithoutClienteInput>
  }

  export type pagamentoCreateManyClienteInputEnvelope = {
    data: pagamentoCreateManyClienteInput | pagamentoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type celular_clienteUpsertWithWhereUniqueWithoutClienteInput = {
    where: celular_clienteWhereUniqueInput
    update: XOR<celular_clienteUpdateWithoutClienteInput, celular_clienteUncheckedUpdateWithoutClienteInput>
    create: XOR<celular_clienteCreateWithoutClienteInput, celular_clienteUncheckedCreateWithoutClienteInput>
  }

  export type celular_clienteUpdateWithWhereUniqueWithoutClienteInput = {
    where: celular_clienteWhereUniqueInput
    data: XOR<celular_clienteUpdateWithoutClienteInput, celular_clienteUncheckedUpdateWithoutClienteInput>
  }

  export type celular_clienteUpdateManyWithWhereWithoutClienteInput = {
    where: celular_clienteScalarWhereInput
    data: XOR<celular_clienteUpdateManyMutationInput, celular_clienteUncheckedUpdateManyWithoutClienteInput>
  }

  export type celular_clienteScalarWhereInput = {
    AND?: celular_clienteScalarWhereInput | celular_clienteScalarWhereInput[]
    OR?: celular_clienteScalarWhereInput[]
    NOT?: celular_clienteScalarWhereInput | celular_clienteScalarWhereInput[]
    id?: IntFilter<"celular_cliente"> | number
    num_cel?: StringFilter<"celular_cliente"> | string
    status?: BoolFilter<"celular_cliente"> | boolean
    uuid_cliente?: StringFilter<"celular_cliente"> | string
  }

  export type endereco_clienteUpsertWithWhereUniqueWithoutClienteInput = {
    where: endereco_clienteWhereUniqueInput
    update: XOR<endereco_clienteUpdateWithoutClienteInput, endereco_clienteUncheckedUpdateWithoutClienteInput>
    create: XOR<endereco_clienteCreateWithoutClienteInput, endereco_clienteUncheckedCreateWithoutClienteInput>
  }

  export type endereco_clienteUpdateWithWhereUniqueWithoutClienteInput = {
    where: endereco_clienteWhereUniqueInput
    data: XOR<endereco_clienteUpdateWithoutClienteInput, endereco_clienteUncheckedUpdateWithoutClienteInput>
  }

  export type endereco_clienteUpdateManyWithWhereWithoutClienteInput = {
    where: endereco_clienteScalarWhereInput
    data: XOR<endereco_clienteUpdateManyMutationInput, endereco_clienteUncheckedUpdateManyWithoutClienteInput>
  }

  export type endereco_clienteScalarWhereInput = {
    AND?: endereco_clienteScalarWhereInput | endereco_clienteScalarWhereInput[]
    OR?: endereco_clienteScalarWhereInput[]
    NOT?: endereco_clienteScalarWhereInput | endereco_clienteScalarWhereInput[]
    id?: IntFilter<"endereco_cliente"> | number
    codigo_postal?: StringFilter<"endereco_cliente"> | string
    numero_residencial?: StringFilter<"endereco_cliente"> | string
    status?: BoolFilter<"endereco_cliente"> | boolean
    uuid_cliente?: StringFilter<"endereco_cliente"> | string
  }

  export type rede_social_clienteUpsertWithWhereUniqueWithoutClienteInput = {
    where: rede_social_clienteWhereUniqueInput
    update: XOR<rede_social_clienteUpdateWithoutClienteInput, rede_social_clienteUncheckedUpdateWithoutClienteInput>
    create: XOR<rede_social_clienteCreateWithoutClienteInput, rede_social_clienteUncheckedCreateWithoutClienteInput>
  }

  export type rede_social_clienteUpdateWithWhereUniqueWithoutClienteInput = {
    where: rede_social_clienteWhereUniqueInput
    data: XOR<rede_social_clienteUpdateWithoutClienteInput, rede_social_clienteUncheckedUpdateWithoutClienteInput>
  }

  export type rede_social_clienteUpdateManyWithWhereWithoutClienteInput = {
    where: rede_social_clienteScalarWhereInput
    data: XOR<rede_social_clienteUpdateManyMutationInput, rede_social_clienteUncheckedUpdateManyWithoutClienteInput>
  }

  export type rede_social_clienteScalarWhereInput = {
    AND?: rede_social_clienteScalarWhereInput | rede_social_clienteScalarWhereInput[]
    OR?: rede_social_clienteScalarWhereInput[]
    NOT?: rede_social_clienteScalarWhereInput | rede_social_clienteScalarWhereInput[]
    id?: IntFilter<"rede_social_cliente"> | number
    uuid_cliente?: StringFilter<"rede_social_cliente"> | string
    url?: StringFilter<"rede_social_cliente"> | string
  }

  export type operadorUpsertWithoutClientesInput = {
    update: XOR<operadorUpdateWithoutClientesInput, operadorUncheckedUpdateWithoutClientesInput>
    create: XOR<operadorCreateWithoutClientesInput, operadorUncheckedCreateWithoutClientesInput>
    where?: operadorWhereInput
  }

  export type operadorUpdateToOneWithWhereWithoutClientesInput = {
    where?: operadorWhereInput
    data: XOR<operadorUpdateWithoutClientesInput, operadorUncheckedUpdateWithoutClientesInput>
  }

  export type operadorUpdateWithoutClientesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: StringFieldUpdateOperationsInput | string
    celularOperadors?: celular_operadorUpdateManyWithoutOperadorNestedInput
    enderecoOperadors?: endereco_operadorUpdateManyWithoutOperadorNestedInput
    redeSocialOperadors?: rede_social_operadorUpdateManyWithoutOperadorNestedInput
    configuracaos?: configuracaoUpdateManyWithoutOperadorNestedInput
    emprestimos?: emprestimoUpdateManyWithoutOperadorNestedInput
    pagamentos?: pagamentoUpdateManyWithoutOperadorNestedInput
  }

  export type operadorUncheckedUpdateWithoutClientesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: StringFieldUpdateOperationsInput | string
    celularOperadors?: celular_operadorUncheckedUpdateManyWithoutOperadorNestedInput
    enderecoOperadors?: endereco_operadorUncheckedUpdateManyWithoutOperadorNestedInput
    redeSocialOperadors?: rede_social_operadorUncheckedUpdateManyWithoutOperadorNestedInput
    configuracaos?: configuracaoUncheckedUpdateManyWithoutOperadorNestedInput
    emprestimos?: emprestimoUncheckedUpdateManyWithoutOperadorNestedInput
    pagamentos?: pagamentoUncheckedUpdateManyWithoutOperadorNestedInput
  }

  export type emprestimoUpsertWithWhereUniqueWithoutClienteInput = {
    where: emprestimoWhereUniqueInput
    update: XOR<emprestimoUpdateWithoutClienteInput, emprestimoUncheckedUpdateWithoutClienteInput>
    create: XOR<emprestimoCreateWithoutClienteInput, emprestimoUncheckedCreateWithoutClienteInput>
  }

  export type emprestimoUpdateWithWhereUniqueWithoutClienteInput = {
    where: emprestimoWhereUniqueInput
    data: XOR<emprestimoUpdateWithoutClienteInput, emprestimoUncheckedUpdateWithoutClienteInput>
  }

  export type emprestimoUpdateManyWithWhereWithoutClienteInput = {
    where: emprestimoScalarWhereInput
    data: XOR<emprestimoUpdateManyMutationInput, emprestimoUncheckedUpdateManyWithoutClienteInput>
  }

  export type pagamentoUpsertWithWhereUniqueWithoutClienteInput = {
    where: pagamentoWhereUniqueInput
    update: XOR<pagamentoUpdateWithoutClienteInput, pagamentoUncheckedUpdateWithoutClienteInput>
    create: XOR<pagamentoCreateWithoutClienteInput, pagamentoUncheckedCreateWithoutClienteInput>
  }

  export type pagamentoUpdateWithWhereUniqueWithoutClienteInput = {
    where: pagamentoWhereUniqueInput
    data: XOR<pagamentoUpdateWithoutClienteInput, pagamentoUncheckedUpdateWithoutClienteInput>
  }

  export type pagamentoUpdateManyWithWhereWithoutClienteInput = {
    where: pagamentoScalarWhereInput
    data: XOR<pagamentoUpdateManyMutationInput, pagamentoUncheckedUpdateManyWithoutClienteInput>
  }

  export type clienteCreateWithoutCelularClientesInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico?: string | null
    observacao?: string | null
    status?: boolean
    delete?: boolean | null
    enderecoClientes?: endereco_clienteCreateNestedManyWithoutClienteInput
    redeSocialClientes?: rede_social_clienteCreateNestedManyWithoutClienteInput
    operador: operadorCreateNestedOneWithoutClientesInput
    emprestimos?: emprestimoCreateNestedManyWithoutClienteInput
    pagamentos?: pagamentoCreateNestedManyWithoutClienteInput
  }

  export type clienteUncheckedCreateWithoutCelularClientesInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico?: string | null
    observacao?: string | null
    uuid_operador: string
    status?: boolean
    delete?: boolean | null
    enderecoClientes?: endereco_clienteUncheckedCreateNestedManyWithoutClienteInput
    redeSocialClientes?: rede_social_clienteUncheckedCreateNestedManyWithoutClienteInput
    emprestimos?: emprestimoUncheckedCreateNestedManyWithoutClienteInput
    pagamentos?: pagamentoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type clienteCreateOrConnectWithoutCelularClientesInput = {
    where: clienteWhereUniqueInput
    create: XOR<clienteCreateWithoutCelularClientesInput, clienteUncheckedCreateWithoutCelularClientesInput>
  }

  export type clienteUpsertWithoutCelularClientesInput = {
    update: XOR<clienteUpdateWithoutCelularClientesInput, clienteUncheckedUpdateWithoutCelularClientesInput>
    create: XOR<clienteCreateWithoutCelularClientesInput, clienteUncheckedCreateWithoutCelularClientesInput>
    where?: clienteWhereInput
  }

  export type clienteUpdateToOneWithWhereWithoutCelularClientesInput = {
    where?: clienteWhereInput
    data: XOR<clienteUpdateWithoutCelularClientesInput, clienteUncheckedUpdateWithoutCelularClientesInput>
  }

  export type clienteUpdateWithoutCelularClientesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enderecoClientes?: endereco_clienteUpdateManyWithoutClienteNestedInput
    redeSocialClientes?: rede_social_clienteUpdateManyWithoutClienteNestedInput
    operador?: operadorUpdateOneRequiredWithoutClientesNestedInput
    emprestimos?: emprestimoUpdateManyWithoutClienteNestedInput
    pagamentos?: pagamentoUpdateManyWithoutClienteNestedInput
  }

  export type clienteUncheckedUpdateWithoutCelularClientesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    uuid_operador?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enderecoClientes?: endereco_clienteUncheckedUpdateManyWithoutClienteNestedInput
    redeSocialClientes?: rede_social_clienteUncheckedUpdateManyWithoutClienteNestedInput
    emprestimos?: emprestimoUncheckedUpdateManyWithoutClienteNestedInput
    pagamentos?: pagamentoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type clienteCreateWithoutEnderecoClientesInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico?: string | null
    observacao?: string | null
    status?: boolean
    delete?: boolean | null
    celularClientes?: celular_clienteCreateNestedManyWithoutClienteInput
    redeSocialClientes?: rede_social_clienteCreateNestedManyWithoutClienteInput
    operador: operadorCreateNestedOneWithoutClientesInput
    emprestimos?: emprestimoCreateNestedManyWithoutClienteInput
    pagamentos?: pagamentoCreateNestedManyWithoutClienteInput
  }

  export type clienteUncheckedCreateWithoutEnderecoClientesInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico?: string | null
    observacao?: string | null
    uuid_operador: string
    status?: boolean
    delete?: boolean | null
    celularClientes?: celular_clienteUncheckedCreateNestedManyWithoutClienteInput
    redeSocialClientes?: rede_social_clienteUncheckedCreateNestedManyWithoutClienteInput
    emprestimos?: emprestimoUncheckedCreateNestedManyWithoutClienteInput
    pagamentos?: pagamentoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type clienteCreateOrConnectWithoutEnderecoClientesInput = {
    where: clienteWhereUniqueInput
    create: XOR<clienteCreateWithoutEnderecoClientesInput, clienteUncheckedCreateWithoutEnderecoClientesInput>
  }

  export type clienteUpsertWithoutEnderecoClientesInput = {
    update: XOR<clienteUpdateWithoutEnderecoClientesInput, clienteUncheckedUpdateWithoutEnderecoClientesInput>
    create: XOR<clienteCreateWithoutEnderecoClientesInput, clienteUncheckedCreateWithoutEnderecoClientesInput>
    where?: clienteWhereInput
  }

  export type clienteUpdateToOneWithWhereWithoutEnderecoClientesInput = {
    where?: clienteWhereInput
    data: XOR<clienteUpdateWithoutEnderecoClientesInput, clienteUncheckedUpdateWithoutEnderecoClientesInput>
  }

  export type clienteUpdateWithoutEnderecoClientesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    celularClientes?: celular_clienteUpdateManyWithoutClienteNestedInput
    redeSocialClientes?: rede_social_clienteUpdateManyWithoutClienteNestedInput
    operador?: operadorUpdateOneRequiredWithoutClientesNestedInput
    emprestimos?: emprestimoUpdateManyWithoutClienteNestedInput
    pagamentos?: pagamentoUpdateManyWithoutClienteNestedInput
  }

  export type clienteUncheckedUpdateWithoutEnderecoClientesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    uuid_operador?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    celularClientes?: celular_clienteUncheckedUpdateManyWithoutClienteNestedInput
    redeSocialClientes?: rede_social_clienteUncheckedUpdateManyWithoutClienteNestedInput
    emprestimos?: emprestimoUncheckedUpdateManyWithoutClienteNestedInput
    pagamentos?: pagamentoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type clienteCreateWithoutRedeSocialClientesInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico?: string | null
    observacao?: string | null
    status?: boolean
    delete?: boolean | null
    celularClientes?: celular_clienteCreateNestedManyWithoutClienteInput
    enderecoClientes?: endereco_clienteCreateNestedManyWithoutClienteInput
    operador: operadorCreateNestedOneWithoutClientesInput
    emprestimos?: emprestimoCreateNestedManyWithoutClienteInput
    pagamentos?: pagamentoCreateNestedManyWithoutClienteInput
  }

  export type clienteUncheckedCreateWithoutRedeSocialClientesInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico?: string | null
    observacao?: string | null
    uuid_operador: string
    status?: boolean
    delete?: boolean | null
    celularClientes?: celular_clienteUncheckedCreateNestedManyWithoutClienteInput
    enderecoClientes?: endereco_clienteUncheckedCreateNestedManyWithoutClienteInput
    emprestimos?: emprestimoUncheckedCreateNestedManyWithoutClienteInput
    pagamentos?: pagamentoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type clienteCreateOrConnectWithoutRedeSocialClientesInput = {
    where: clienteWhereUniqueInput
    create: XOR<clienteCreateWithoutRedeSocialClientesInput, clienteUncheckedCreateWithoutRedeSocialClientesInput>
  }

  export type clienteUpsertWithoutRedeSocialClientesInput = {
    update: XOR<clienteUpdateWithoutRedeSocialClientesInput, clienteUncheckedUpdateWithoutRedeSocialClientesInput>
    create: XOR<clienteCreateWithoutRedeSocialClientesInput, clienteUncheckedCreateWithoutRedeSocialClientesInput>
    where?: clienteWhereInput
  }

  export type clienteUpdateToOneWithWhereWithoutRedeSocialClientesInput = {
    where?: clienteWhereInput
    data: XOR<clienteUpdateWithoutRedeSocialClientesInput, clienteUncheckedUpdateWithoutRedeSocialClientesInput>
  }

  export type clienteUpdateWithoutRedeSocialClientesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    celularClientes?: celular_clienteUpdateManyWithoutClienteNestedInput
    enderecoClientes?: endereco_clienteUpdateManyWithoutClienteNestedInput
    operador?: operadorUpdateOneRequiredWithoutClientesNestedInput
    emprestimos?: emprestimoUpdateManyWithoutClienteNestedInput
    pagamentos?: pagamentoUpdateManyWithoutClienteNestedInput
  }

  export type clienteUncheckedUpdateWithoutRedeSocialClientesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    uuid_operador?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    celularClientes?: celular_clienteUncheckedUpdateManyWithoutClienteNestedInput
    enderecoClientes?: endereco_clienteUncheckedUpdateManyWithoutClienteNestedInput
    emprestimos?: emprestimoUncheckedUpdateManyWithoutClienteNestedInput
    pagamentos?: pagamentoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type operadorCreateWithoutConfiguracaosInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico: string
    celularOperadors?: celular_operadorCreateNestedManyWithoutOperadorInput
    enderecoOperadors?: endereco_operadorCreateNestedManyWithoutOperadorInput
    redeSocialOperadors?: rede_social_operadorCreateNestedManyWithoutOperadorInput
    clientes?: clienteCreateNestedManyWithoutOperadorInput
    emprestimos?: emprestimoCreateNestedManyWithoutOperadorInput
    pagamentos?: pagamentoCreateNestedManyWithoutOperadorInput
  }

  export type operadorUncheckedCreateWithoutConfiguracaosInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico: string
    celularOperadors?: celular_operadorUncheckedCreateNestedManyWithoutOperadorInput
    enderecoOperadors?: endereco_operadorUncheckedCreateNestedManyWithoutOperadorInput
    redeSocialOperadors?: rede_social_operadorUncheckedCreateNestedManyWithoutOperadorInput
    clientes?: clienteUncheckedCreateNestedManyWithoutOperadorInput
    emprestimos?: emprestimoUncheckedCreateNestedManyWithoutOperadorInput
    pagamentos?: pagamentoUncheckedCreateNestedManyWithoutOperadorInput
  }

  export type operadorCreateOrConnectWithoutConfiguracaosInput = {
    where: operadorWhereUniqueInput
    create: XOR<operadorCreateWithoutConfiguracaosInput, operadorUncheckedCreateWithoutConfiguracaosInput>
  }

  export type operadorUpsertWithoutConfiguracaosInput = {
    update: XOR<operadorUpdateWithoutConfiguracaosInput, operadorUncheckedUpdateWithoutConfiguracaosInput>
    create: XOR<operadorCreateWithoutConfiguracaosInput, operadorUncheckedCreateWithoutConfiguracaosInput>
    where?: operadorWhereInput
  }

  export type operadorUpdateToOneWithWhereWithoutConfiguracaosInput = {
    where?: operadorWhereInput
    data: XOR<operadorUpdateWithoutConfiguracaosInput, operadorUncheckedUpdateWithoutConfiguracaosInput>
  }

  export type operadorUpdateWithoutConfiguracaosInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: StringFieldUpdateOperationsInput | string
    celularOperadors?: celular_operadorUpdateManyWithoutOperadorNestedInput
    enderecoOperadors?: endereco_operadorUpdateManyWithoutOperadorNestedInput
    redeSocialOperadors?: rede_social_operadorUpdateManyWithoutOperadorNestedInput
    clientes?: clienteUpdateManyWithoutOperadorNestedInput
    emprestimos?: emprestimoUpdateManyWithoutOperadorNestedInput
    pagamentos?: pagamentoUpdateManyWithoutOperadorNestedInput
  }

  export type operadorUncheckedUpdateWithoutConfiguracaosInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: StringFieldUpdateOperationsInput | string
    celularOperadors?: celular_operadorUncheckedUpdateManyWithoutOperadorNestedInput
    enderecoOperadors?: endereco_operadorUncheckedUpdateManyWithoutOperadorNestedInput
    redeSocialOperadors?: rede_social_operadorUncheckedUpdateManyWithoutOperadorNestedInput
    clientes?: clienteUncheckedUpdateManyWithoutOperadorNestedInput
    emprestimos?: emprestimoUncheckedUpdateManyWithoutOperadorNestedInput
    pagamentos?: pagamentoUncheckedUpdateManyWithoutOperadorNestedInput
  }

  export type pagamentoCreateWithoutEmprestimoInput = {
    uuid?: string
    valor_pago?: number | null
    valor_previsto: number
    tipo_pagamento?: $Enums.Tipo_pagamento | null
    data_pagamento?: Date | string | null
    data_vencimento: Date | string
    comprovante?: Bytes | null
    observacao?: string | null
    delete?: boolean | null
    status?: $Enums.Status_divida
    cliente: clienteCreateNestedOneWithoutPagamentosInput
    operador: operadorCreateNestedOneWithoutPagamentosInput
  }

  export type pagamentoUncheckedCreateWithoutEmprestimoInput = {
    uuid?: string
    valor_pago?: number | null
    valor_previsto: number
    tipo_pagamento?: $Enums.Tipo_pagamento | null
    data_pagamento?: Date | string | null
    data_vencimento: Date | string
    comprovante?: Bytes | null
    observacao?: string | null
    uuid_cliente: string
    uuid_operador: string
    delete?: boolean | null
    status?: $Enums.Status_divida
  }

  export type pagamentoCreateOrConnectWithoutEmprestimoInput = {
    where: pagamentoWhereUniqueInput
    create: XOR<pagamentoCreateWithoutEmprestimoInput, pagamentoUncheckedCreateWithoutEmprestimoInput>
  }

  export type pagamentoCreateManyEmprestimoInputEnvelope = {
    data: pagamentoCreateManyEmprestimoInput | pagamentoCreateManyEmprestimoInput[]
    skipDuplicates?: boolean
  }

  export type clienteCreateWithoutEmprestimosInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico?: string | null
    observacao?: string | null
    status?: boolean
    delete?: boolean | null
    celularClientes?: celular_clienteCreateNestedManyWithoutClienteInput
    enderecoClientes?: endereco_clienteCreateNestedManyWithoutClienteInput
    redeSocialClientes?: rede_social_clienteCreateNestedManyWithoutClienteInput
    operador: operadorCreateNestedOneWithoutClientesInput
    pagamentos?: pagamentoCreateNestedManyWithoutClienteInput
  }

  export type clienteUncheckedCreateWithoutEmprestimosInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico?: string | null
    observacao?: string | null
    uuid_operador: string
    status?: boolean
    delete?: boolean | null
    celularClientes?: celular_clienteUncheckedCreateNestedManyWithoutClienteInput
    enderecoClientes?: endereco_clienteUncheckedCreateNestedManyWithoutClienteInput
    redeSocialClientes?: rede_social_clienteUncheckedCreateNestedManyWithoutClienteInput
    pagamentos?: pagamentoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type clienteCreateOrConnectWithoutEmprestimosInput = {
    where: clienteWhereUniqueInput
    create: XOR<clienteCreateWithoutEmprestimosInput, clienteUncheckedCreateWithoutEmprestimosInput>
  }

  export type operadorCreateWithoutEmprestimosInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico: string
    celularOperadors?: celular_operadorCreateNestedManyWithoutOperadorInput
    enderecoOperadors?: endereco_operadorCreateNestedManyWithoutOperadorInput
    redeSocialOperadors?: rede_social_operadorCreateNestedManyWithoutOperadorInput
    clientes?: clienteCreateNestedManyWithoutOperadorInput
    configuracaos?: configuracaoCreateNestedManyWithoutOperadorInput
    pagamentos?: pagamentoCreateNestedManyWithoutOperadorInput
  }

  export type operadorUncheckedCreateWithoutEmprestimosInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico: string
    celularOperadors?: celular_operadorUncheckedCreateNestedManyWithoutOperadorInput
    enderecoOperadors?: endereco_operadorUncheckedCreateNestedManyWithoutOperadorInput
    redeSocialOperadors?: rede_social_operadorUncheckedCreateNestedManyWithoutOperadorInput
    clientes?: clienteUncheckedCreateNestedManyWithoutOperadorInput
    configuracaos?: configuracaoUncheckedCreateNestedManyWithoutOperadorInput
    pagamentos?: pagamentoUncheckedCreateNestedManyWithoutOperadorInput
  }

  export type operadorCreateOrConnectWithoutEmprestimosInput = {
    where: operadorWhereUniqueInput
    create: XOR<operadorCreateWithoutEmprestimosInput, operadorUncheckedCreateWithoutEmprestimosInput>
  }

  export type pagamentoUpsertWithWhereUniqueWithoutEmprestimoInput = {
    where: pagamentoWhereUniqueInput
    update: XOR<pagamentoUpdateWithoutEmprestimoInput, pagamentoUncheckedUpdateWithoutEmprestimoInput>
    create: XOR<pagamentoCreateWithoutEmprestimoInput, pagamentoUncheckedCreateWithoutEmprestimoInput>
  }

  export type pagamentoUpdateWithWhereUniqueWithoutEmprestimoInput = {
    where: pagamentoWhereUniqueInput
    data: XOR<pagamentoUpdateWithoutEmprestimoInput, pagamentoUncheckedUpdateWithoutEmprestimoInput>
  }

  export type pagamentoUpdateManyWithWhereWithoutEmprestimoInput = {
    where: pagamentoScalarWhereInput
    data: XOR<pagamentoUpdateManyMutationInput, pagamentoUncheckedUpdateManyWithoutEmprestimoInput>
  }

  export type clienteUpsertWithoutEmprestimosInput = {
    update: XOR<clienteUpdateWithoutEmprestimosInput, clienteUncheckedUpdateWithoutEmprestimosInput>
    create: XOR<clienteCreateWithoutEmprestimosInput, clienteUncheckedCreateWithoutEmprestimosInput>
    where?: clienteWhereInput
  }

  export type clienteUpdateToOneWithWhereWithoutEmprestimosInput = {
    where?: clienteWhereInput
    data: XOR<clienteUpdateWithoutEmprestimosInput, clienteUncheckedUpdateWithoutEmprestimosInput>
  }

  export type clienteUpdateWithoutEmprestimosInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    celularClientes?: celular_clienteUpdateManyWithoutClienteNestedInput
    enderecoClientes?: endereco_clienteUpdateManyWithoutClienteNestedInput
    redeSocialClientes?: rede_social_clienteUpdateManyWithoutClienteNestedInput
    operador?: operadorUpdateOneRequiredWithoutClientesNestedInput
    pagamentos?: pagamentoUpdateManyWithoutClienteNestedInput
  }

  export type clienteUncheckedUpdateWithoutEmprestimosInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    uuid_operador?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    celularClientes?: celular_clienteUncheckedUpdateManyWithoutClienteNestedInput
    enderecoClientes?: endereco_clienteUncheckedUpdateManyWithoutClienteNestedInput
    redeSocialClientes?: rede_social_clienteUncheckedUpdateManyWithoutClienteNestedInput
    pagamentos?: pagamentoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type operadorUpsertWithoutEmprestimosInput = {
    update: XOR<operadorUpdateWithoutEmprestimosInput, operadorUncheckedUpdateWithoutEmprestimosInput>
    create: XOR<operadorCreateWithoutEmprestimosInput, operadorUncheckedCreateWithoutEmprestimosInput>
    where?: operadorWhereInput
  }

  export type operadorUpdateToOneWithWhereWithoutEmprestimosInput = {
    where?: operadorWhereInput
    data: XOR<operadorUpdateWithoutEmprestimosInput, operadorUncheckedUpdateWithoutEmprestimosInput>
  }

  export type operadorUpdateWithoutEmprestimosInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: StringFieldUpdateOperationsInput | string
    celularOperadors?: celular_operadorUpdateManyWithoutOperadorNestedInput
    enderecoOperadors?: endereco_operadorUpdateManyWithoutOperadorNestedInput
    redeSocialOperadors?: rede_social_operadorUpdateManyWithoutOperadorNestedInput
    clientes?: clienteUpdateManyWithoutOperadorNestedInput
    configuracaos?: configuracaoUpdateManyWithoutOperadorNestedInput
    pagamentos?: pagamentoUpdateManyWithoutOperadorNestedInput
  }

  export type operadorUncheckedUpdateWithoutEmprestimosInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: StringFieldUpdateOperationsInput | string
    celularOperadors?: celular_operadorUncheckedUpdateManyWithoutOperadorNestedInput
    enderecoOperadors?: endereco_operadorUncheckedUpdateManyWithoutOperadorNestedInput
    redeSocialOperadors?: rede_social_operadorUncheckedUpdateManyWithoutOperadorNestedInput
    clientes?: clienteUncheckedUpdateManyWithoutOperadorNestedInput
    configuracaos?: configuracaoUncheckedUpdateManyWithoutOperadorNestedInput
    pagamentos?: pagamentoUncheckedUpdateManyWithoutOperadorNestedInput
  }

  export type clienteCreateWithoutPagamentosInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico?: string | null
    observacao?: string | null
    status?: boolean
    delete?: boolean | null
    celularClientes?: celular_clienteCreateNestedManyWithoutClienteInput
    enderecoClientes?: endereco_clienteCreateNestedManyWithoutClienteInput
    redeSocialClientes?: rede_social_clienteCreateNestedManyWithoutClienteInput
    operador: operadorCreateNestedOneWithoutClientesInput
    emprestimos?: emprestimoCreateNestedManyWithoutClienteInput
  }

  export type clienteUncheckedCreateWithoutPagamentosInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico?: string | null
    observacao?: string | null
    uuid_operador: string
    status?: boolean
    delete?: boolean | null
    celularClientes?: celular_clienteUncheckedCreateNestedManyWithoutClienteInput
    enderecoClientes?: endereco_clienteUncheckedCreateNestedManyWithoutClienteInput
    redeSocialClientes?: rede_social_clienteUncheckedCreateNestedManyWithoutClienteInput
    emprestimos?: emprestimoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type clienteCreateOrConnectWithoutPagamentosInput = {
    where: clienteWhereUniqueInput
    create: XOR<clienteCreateWithoutPagamentosInput, clienteUncheckedCreateWithoutPagamentosInput>
  }

  export type operadorCreateWithoutPagamentosInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico: string
    celularOperadors?: celular_operadorCreateNestedManyWithoutOperadorInput
    enderecoOperadors?: endereco_operadorCreateNestedManyWithoutOperadorInput
    redeSocialOperadors?: rede_social_operadorCreateNestedManyWithoutOperadorInput
    clientes?: clienteCreateNestedManyWithoutOperadorInput
    configuracaos?: configuracaoCreateNestedManyWithoutOperadorInput
    emprestimos?: emprestimoCreateNestedManyWithoutOperadorInput
  }

  export type operadorUncheckedCreateWithoutPagamentosInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico: string
    celularOperadors?: celular_operadorUncheckedCreateNestedManyWithoutOperadorInput
    enderecoOperadors?: endereco_operadorUncheckedCreateNestedManyWithoutOperadorInput
    redeSocialOperadors?: rede_social_operadorUncheckedCreateNestedManyWithoutOperadorInput
    clientes?: clienteUncheckedCreateNestedManyWithoutOperadorInput
    configuracaos?: configuracaoUncheckedCreateNestedManyWithoutOperadorInput
    emprestimos?: emprestimoUncheckedCreateNestedManyWithoutOperadorInput
  }

  export type operadorCreateOrConnectWithoutPagamentosInput = {
    where: operadorWhereUniqueInput
    create: XOR<operadorCreateWithoutPagamentosInput, operadorUncheckedCreateWithoutPagamentosInput>
  }

  export type emprestimoCreateWithoutPagamentosInput = {
    uuid?: string
    nome_emprestimo: string
    valor_emprestimo: number
    valor_receber: number
    valor_recebido?: number | null
    tipo: $Enums.Tipo_cobranca
    data_emprestimo?: Date | string
    data_final: Date | string
    observacao?: string | null
    status?: $Enums.Status_divida
    delete?: boolean | null
    cliente: clienteCreateNestedOneWithoutEmprestimosInput
    operador: operadorCreateNestedOneWithoutEmprestimosInput
  }

  export type emprestimoUncheckedCreateWithoutPagamentosInput = {
    uuid?: string
    nome_emprestimo: string
    valor_emprestimo: number
    valor_receber: number
    valor_recebido?: number | null
    tipo: $Enums.Tipo_cobranca
    data_emprestimo?: Date | string
    data_final: Date | string
    observacao?: string | null
    status?: $Enums.Status_divida
    uuid_operador: string
    uuid_cliente: string
    delete?: boolean | null
  }

  export type emprestimoCreateOrConnectWithoutPagamentosInput = {
    where: emprestimoWhereUniqueInput
    create: XOR<emprestimoCreateWithoutPagamentosInput, emprestimoUncheckedCreateWithoutPagamentosInput>
  }

  export type clienteUpsertWithoutPagamentosInput = {
    update: XOR<clienteUpdateWithoutPagamentosInput, clienteUncheckedUpdateWithoutPagamentosInput>
    create: XOR<clienteCreateWithoutPagamentosInput, clienteUncheckedCreateWithoutPagamentosInput>
    where?: clienteWhereInput
  }

  export type clienteUpdateToOneWithWhereWithoutPagamentosInput = {
    where?: clienteWhereInput
    data: XOR<clienteUpdateWithoutPagamentosInput, clienteUncheckedUpdateWithoutPagamentosInput>
  }

  export type clienteUpdateWithoutPagamentosInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    celularClientes?: celular_clienteUpdateManyWithoutClienteNestedInput
    enderecoClientes?: endereco_clienteUpdateManyWithoutClienteNestedInput
    redeSocialClientes?: rede_social_clienteUpdateManyWithoutClienteNestedInput
    operador?: operadorUpdateOneRequiredWithoutClientesNestedInput
    emprestimos?: emprestimoUpdateManyWithoutClienteNestedInput
  }

  export type clienteUncheckedUpdateWithoutPagamentosInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    uuid_operador?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    celularClientes?: celular_clienteUncheckedUpdateManyWithoutClienteNestedInput
    enderecoClientes?: endereco_clienteUncheckedUpdateManyWithoutClienteNestedInput
    redeSocialClientes?: rede_social_clienteUncheckedUpdateManyWithoutClienteNestedInput
    emprestimos?: emprestimoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type operadorUpsertWithoutPagamentosInput = {
    update: XOR<operadorUpdateWithoutPagamentosInput, operadorUncheckedUpdateWithoutPagamentosInput>
    create: XOR<operadorCreateWithoutPagamentosInput, operadorUncheckedCreateWithoutPagamentosInput>
    where?: operadorWhereInput
  }

  export type operadorUpdateToOneWithWhereWithoutPagamentosInput = {
    where?: operadorWhereInput
    data: XOR<operadorUpdateWithoutPagamentosInput, operadorUncheckedUpdateWithoutPagamentosInput>
  }

  export type operadorUpdateWithoutPagamentosInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: StringFieldUpdateOperationsInput | string
    celularOperadors?: celular_operadorUpdateManyWithoutOperadorNestedInput
    enderecoOperadors?: endereco_operadorUpdateManyWithoutOperadorNestedInput
    redeSocialOperadors?: rede_social_operadorUpdateManyWithoutOperadorNestedInput
    clientes?: clienteUpdateManyWithoutOperadorNestedInput
    configuracaos?: configuracaoUpdateManyWithoutOperadorNestedInput
    emprestimos?: emprestimoUpdateManyWithoutOperadorNestedInput
  }

  export type operadorUncheckedUpdateWithoutPagamentosInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: StringFieldUpdateOperationsInput | string
    celularOperadors?: celular_operadorUncheckedUpdateManyWithoutOperadorNestedInput
    enderecoOperadors?: endereco_operadorUncheckedUpdateManyWithoutOperadorNestedInput
    redeSocialOperadors?: rede_social_operadorUncheckedUpdateManyWithoutOperadorNestedInput
    clientes?: clienteUncheckedUpdateManyWithoutOperadorNestedInput
    configuracaos?: configuracaoUncheckedUpdateManyWithoutOperadorNestedInput
    emprestimos?: emprestimoUncheckedUpdateManyWithoutOperadorNestedInput
  }

  export type emprestimoUpsertWithoutPagamentosInput = {
    update: XOR<emprestimoUpdateWithoutPagamentosInput, emprestimoUncheckedUpdateWithoutPagamentosInput>
    create: XOR<emprestimoCreateWithoutPagamentosInput, emprestimoUncheckedCreateWithoutPagamentosInput>
    where?: emprestimoWhereInput
  }

  export type emprestimoUpdateToOneWithWhereWithoutPagamentosInput = {
    where?: emprestimoWhereInput
    data: XOR<emprestimoUpdateWithoutPagamentosInput, emprestimoUncheckedUpdateWithoutPagamentosInput>
  }

  export type emprestimoUpdateWithoutPagamentosInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_emprestimo?: StringFieldUpdateOperationsInput | string
    valor_emprestimo?: FloatFieldUpdateOperationsInput | number
    valor_receber?: FloatFieldUpdateOperationsInput | number
    valor_recebido?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: EnumTipo_cobrancaFieldUpdateOperationsInput | $Enums.Tipo_cobranca
    data_emprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    data_final?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatus_dividaFieldUpdateOperationsInput | $Enums.Status_divida
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cliente?: clienteUpdateOneRequiredWithoutEmprestimosNestedInput
    operador?: operadorUpdateOneRequiredWithoutEmprestimosNestedInput
  }

  export type emprestimoUncheckedUpdateWithoutPagamentosInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_emprestimo?: StringFieldUpdateOperationsInput | string
    valor_emprestimo?: FloatFieldUpdateOperationsInput | number
    valor_receber?: FloatFieldUpdateOperationsInput | number
    valor_recebido?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: EnumTipo_cobrancaFieldUpdateOperationsInput | $Enums.Tipo_cobranca
    data_emprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    data_final?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatus_dividaFieldUpdateOperationsInput | $Enums.Status_divida
    uuid_operador?: StringFieldUpdateOperationsInput | string
    uuid_cliente?: StringFieldUpdateOperationsInput | string
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type celular_operadorCreateManyOperadorInput = {
    id?: number
    num_cel: string
    status?: boolean
  }

  export type endereco_operadorCreateManyOperadorInput = {
    id?: number
    codigo_postal: string
    numero_residencial: string
    status?: boolean
  }

  export type rede_social_operadorCreateManyOperadorInput = {
    id?: number
    url: string
  }

  export type clienteCreateManyOperadorInput = {
    uuid: string
    nome_completo: string
    num_cpf: string
    num_cnpj?: string | null
    data_nascimento?: Date | string | null
    correio_eletronico?: string | null
    observacao?: string | null
    status?: boolean
    delete?: boolean | null
  }

  export type configuracaoCreateManyOperadorInput = {
    id?: number
    alerta_dias_antes: number
    senha_entrada: number
  }

  export type emprestimoCreateManyOperadorInput = {
    uuid?: string
    nome_emprestimo: string
    valor_emprestimo: number
    valor_receber: number
    valor_recebido?: number | null
    tipo: $Enums.Tipo_cobranca
    data_emprestimo?: Date | string
    data_final: Date | string
    observacao?: string | null
    status?: $Enums.Status_divida
    uuid_cliente: string
    delete?: boolean | null
  }

  export type pagamentoCreateManyOperadorInput = {
    uuid?: string
    valor_pago?: number | null
    valor_previsto: number
    uuid_emprestimo: string
    tipo_pagamento?: $Enums.Tipo_pagamento | null
    data_pagamento?: Date | string | null
    data_vencimento: Date | string
    comprovante?: Bytes | null
    observacao?: string | null
    uuid_cliente: string
    delete?: boolean | null
    status?: $Enums.Status_divida
  }

  export type celular_operadorUpdateWithoutOperadorInput = {
    num_cel?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type celular_operadorUncheckedUpdateWithoutOperadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    num_cel?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type celular_operadorUncheckedUpdateManyWithoutOperadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    num_cel?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type endereco_operadorUpdateWithoutOperadorInput = {
    codigo_postal?: StringFieldUpdateOperationsInput | string
    numero_residencial?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type endereco_operadorUncheckedUpdateWithoutOperadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo_postal?: StringFieldUpdateOperationsInput | string
    numero_residencial?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type endereco_operadorUncheckedUpdateManyWithoutOperadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo_postal?: StringFieldUpdateOperationsInput | string
    numero_residencial?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type rede_social_operadorUpdateWithoutOperadorInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type rede_social_operadorUncheckedUpdateWithoutOperadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type rede_social_operadorUncheckedUpdateManyWithoutOperadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type clienteUpdateWithoutOperadorInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    celularClientes?: celular_clienteUpdateManyWithoutClienteNestedInput
    enderecoClientes?: endereco_clienteUpdateManyWithoutClienteNestedInput
    redeSocialClientes?: rede_social_clienteUpdateManyWithoutClienteNestedInput
    emprestimos?: emprestimoUpdateManyWithoutClienteNestedInput
    pagamentos?: pagamentoUpdateManyWithoutClienteNestedInput
  }

  export type clienteUncheckedUpdateWithoutOperadorInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    celularClientes?: celular_clienteUncheckedUpdateManyWithoutClienteNestedInput
    enderecoClientes?: endereco_clienteUncheckedUpdateManyWithoutClienteNestedInput
    redeSocialClientes?: rede_social_clienteUncheckedUpdateManyWithoutClienteNestedInput
    emprestimos?: emprestimoUncheckedUpdateManyWithoutClienteNestedInput
    pagamentos?: pagamentoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type clienteUncheckedUpdateManyWithoutOperadorInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_completo?: StringFieldUpdateOperationsInput | string
    num_cpf?: StringFieldUpdateOperationsInput | string
    num_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correio_eletronico?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type configuracaoUpdateWithoutOperadorInput = {
    alerta_dias_antes?: IntFieldUpdateOperationsInput | number
    senha_entrada?: IntFieldUpdateOperationsInput | number
  }

  export type configuracaoUncheckedUpdateWithoutOperadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    alerta_dias_antes?: IntFieldUpdateOperationsInput | number
    senha_entrada?: IntFieldUpdateOperationsInput | number
  }

  export type configuracaoUncheckedUpdateManyWithoutOperadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    alerta_dias_antes?: IntFieldUpdateOperationsInput | number
    senha_entrada?: IntFieldUpdateOperationsInput | number
  }

  export type emprestimoUpdateWithoutOperadorInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_emprestimo?: StringFieldUpdateOperationsInput | string
    valor_emprestimo?: FloatFieldUpdateOperationsInput | number
    valor_receber?: FloatFieldUpdateOperationsInput | number
    valor_recebido?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: EnumTipo_cobrancaFieldUpdateOperationsInput | $Enums.Tipo_cobranca
    data_emprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    data_final?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatus_dividaFieldUpdateOperationsInput | $Enums.Status_divida
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pagamentos?: pagamentoUpdateManyWithoutEmprestimoNestedInput
    cliente?: clienteUpdateOneRequiredWithoutEmprestimosNestedInput
  }

  export type emprestimoUncheckedUpdateWithoutOperadorInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_emprestimo?: StringFieldUpdateOperationsInput | string
    valor_emprestimo?: FloatFieldUpdateOperationsInput | number
    valor_receber?: FloatFieldUpdateOperationsInput | number
    valor_recebido?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: EnumTipo_cobrancaFieldUpdateOperationsInput | $Enums.Tipo_cobranca
    data_emprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    data_final?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatus_dividaFieldUpdateOperationsInput | $Enums.Status_divida
    uuid_cliente?: StringFieldUpdateOperationsInput | string
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pagamentos?: pagamentoUncheckedUpdateManyWithoutEmprestimoNestedInput
  }

  export type emprestimoUncheckedUpdateManyWithoutOperadorInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_emprestimo?: StringFieldUpdateOperationsInput | string
    valor_emprestimo?: FloatFieldUpdateOperationsInput | number
    valor_receber?: FloatFieldUpdateOperationsInput | number
    valor_recebido?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: EnumTipo_cobrancaFieldUpdateOperationsInput | $Enums.Tipo_cobranca
    data_emprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    data_final?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatus_dividaFieldUpdateOperationsInput | $Enums.Status_divida
    uuid_cliente?: StringFieldUpdateOperationsInput | string
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type pagamentoUpdateWithoutOperadorInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    valor_pago?: NullableFloatFieldUpdateOperationsInput | number | null
    valor_previsto?: FloatFieldUpdateOperationsInput | number
    tipo_pagamento?: NullableEnumTipo_pagamentoFieldUpdateOperationsInput | $Enums.Tipo_pagamento | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    comprovante?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatus_dividaFieldUpdateOperationsInput | $Enums.Status_divida
    cliente?: clienteUpdateOneRequiredWithoutPagamentosNestedInput
    emprestimo?: emprestimoUpdateOneRequiredWithoutPagamentosNestedInput
  }

  export type pagamentoUncheckedUpdateWithoutOperadorInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    valor_pago?: NullableFloatFieldUpdateOperationsInput | number | null
    valor_previsto?: FloatFieldUpdateOperationsInput | number
    uuid_emprestimo?: StringFieldUpdateOperationsInput | string
    tipo_pagamento?: NullableEnumTipo_pagamentoFieldUpdateOperationsInput | $Enums.Tipo_pagamento | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    comprovante?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    uuid_cliente?: StringFieldUpdateOperationsInput | string
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatus_dividaFieldUpdateOperationsInput | $Enums.Status_divida
  }

  export type pagamentoUncheckedUpdateManyWithoutOperadorInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    valor_pago?: NullableFloatFieldUpdateOperationsInput | number | null
    valor_previsto?: FloatFieldUpdateOperationsInput | number
    uuid_emprestimo?: StringFieldUpdateOperationsInput | string
    tipo_pagamento?: NullableEnumTipo_pagamentoFieldUpdateOperationsInput | $Enums.Tipo_pagamento | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    comprovante?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    uuid_cliente?: StringFieldUpdateOperationsInput | string
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatus_dividaFieldUpdateOperationsInput | $Enums.Status_divida
  }

  export type celular_clienteCreateManyClienteInput = {
    id?: number
    num_cel: string
    status?: boolean
  }

  export type endereco_clienteCreateManyClienteInput = {
    id?: number
    codigo_postal: string
    numero_residencial: string
    status?: boolean
  }

  export type rede_social_clienteCreateManyClienteInput = {
    id?: number
    url: string
  }

  export type emprestimoCreateManyClienteInput = {
    uuid?: string
    nome_emprestimo: string
    valor_emprestimo: number
    valor_receber: number
    valor_recebido?: number | null
    tipo: $Enums.Tipo_cobranca
    data_emprestimo?: Date | string
    data_final: Date | string
    observacao?: string | null
    status?: $Enums.Status_divida
    uuid_operador: string
    delete?: boolean | null
  }

  export type pagamentoCreateManyClienteInput = {
    uuid?: string
    valor_pago?: number | null
    valor_previsto: number
    uuid_emprestimo: string
    tipo_pagamento?: $Enums.Tipo_pagamento | null
    data_pagamento?: Date | string | null
    data_vencimento: Date | string
    comprovante?: Bytes | null
    observacao?: string | null
    uuid_operador: string
    delete?: boolean | null
    status?: $Enums.Status_divida
  }

  export type celular_clienteUpdateWithoutClienteInput = {
    num_cel?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type celular_clienteUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    num_cel?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type celular_clienteUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    num_cel?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type endereco_clienteUpdateWithoutClienteInput = {
    codigo_postal?: StringFieldUpdateOperationsInput | string
    numero_residencial?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type endereco_clienteUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo_postal?: StringFieldUpdateOperationsInput | string
    numero_residencial?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type endereco_clienteUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo_postal?: StringFieldUpdateOperationsInput | string
    numero_residencial?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type rede_social_clienteUpdateWithoutClienteInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type rede_social_clienteUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type rede_social_clienteUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type emprestimoUpdateWithoutClienteInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_emprestimo?: StringFieldUpdateOperationsInput | string
    valor_emprestimo?: FloatFieldUpdateOperationsInput | number
    valor_receber?: FloatFieldUpdateOperationsInput | number
    valor_recebido?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: EnumTipo_cobrancaFieldUpdateOperationsInput | $Enums.Tipo_cobranca
    data_emprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    data_final?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatus_dividaFieldUpdateOperationsInput | $Enums.Status_divida
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pagamentos?: pagamentoUpdateManyWithoutEmprestimoNestedInput
    operador?: operadorUpdateOneRequiredWithoutEmprestimosNestedInput
  }

  export type emprestimoUncheckedUpdateWithoutClienteInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_emprestimo?: StringFieldUpdateOperationsInput | string
    valor_emprestimo?: FloatFieldUpdateOperationsInput | number
    valor_receber?: FloatFieldUpdateOperationsInput | number
    valor_recebido?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: EnumTipo_cobrancaFieldUpdateOperationsInput | $Enums.Tipo_cobranca
    data_emprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    data_final?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatus_dividaFieldUpdateOperationsInput | $Enums.Status_divida
    uuid_operador?: StringFieldUpdateOperationsInput | string
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pagamentos?: pagamentoUncheckedUpdateManyWithoutEmprestimoNestedInput
  }

  export type emprestimoUncheckedUpdateManyWithoutClienteInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nome_emprestimo?: StringFieldUpdateOperationsInput | string
    valor_emprestimo?: FloatFieldUpdateOperationsInput | number
    valor_receber?: FloatFieldUpdateOperationsInput | number
    valor_recebido?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: EnumTipo_cobrancaFieldUpdateOperationsInput | $Enums.Tipo_cobranca
    data_emprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    data_final?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatus_dividaFieldUpdateOperationsInput | $Enums.Status_divida
    uuid_operador?: StringFieldUpdateOperationsInput | string
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type pagamentoUpdateWithoutClienteInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    valor_pago?: NullableFloatFieldUpdateOperationsInput | number | null
    valor_previsto?: FloatFieldUpdateOperationsInput | number
    tipo_pagamento?: NullableEnumTipo_pagamentoFieldUpdateOperationsInput | $Enums.Tipo_pagamento | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    comprovante?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatus_dividaFieldUpdateOperationsInput | $Enums.Status_divida
    operador?: operadorUpdateOneRequiredWithoutPagamentosNestedInput
    emprestimo?: emprestimoUpdateOneRequiredWithoutPagamentosNestedInput
  }

  export type pagamentoUncheckedUpdateWithoutClienteInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    valor_pago?: NullableFloatFieldUpdateOperationsInput | number | null
    valor_previsto?: FloatFieldUpdateOperationsInput | number
    uuid_emprestimo?: StringFieldUpdateOperationsInput | string
    tipo_pagamento?: NullableEnumTipo_pagamentoFieldUpdateOperationsInput | $Enums.Tipo_pagamento | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    comprovante?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    uuid_operador?: StringFieldUpdateOperationsInput | string
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatus_dividaFieldUpdateOperationsInput | $Enums.Status_divida
  }

  export type pagamentoUncheckedUpdateManyWithoutClienteInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    valor_pago?: NullableFloatFieldUpdateOperationsInput | number | null
    valor_previsto?: FloatFieldUpdateOperationsInput | number
    uuid_emprestimo?: StringFieldUpdateOperationsInput | string
    tipo_pagamento?: NullableEnumTipo_pagamentoFieldUpdateOperationsInput | $Enums.Tipo_pagamento | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    comprovante?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    uuid_operador?: StringFieldUpdateOperationsInput | string
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatus_dividaFieldUpdateOperationsInput | $Enums.Status_divida
  }

  export type pagamentoCreateManyEmprestimoInput = {
    uuid?: string
    valor_pago?: number | null
    valor_previsto: number
    tipo_pagamento?: $Enums.Tipo_pagamento | null
    data_pagamento?: Date | string | null
    data_vencimento: Date | string
    comprovante?: Bytes | null
    observacao?: string | null
    uuid_cliente: string
    uuid_operador: string
    delete?: boolean | null
    status?: $Enums.Status_divida
  }

  export type pagamentoUpdateWithoutEmprestimoInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    valor_pago?: NullableFloatFieldUpdateOperationsInput | number | null
    valor_previsto?: FloatFieldUpdateOperationsInput | number
    tipo_pagamento?: NullableEnumTipo_pagamentoFieldUpdateOperationsInput | $Enums.Tipo_pagamento | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    comprovante?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatus_dividaFieldUpdateOperationsInput | $Enums.Status_divida
    cliente?: clienteUpdateOneRequiredWithoutPagamentosNestedInput
    operador?: operadorUpdateOneRequiredWithoutPagamentosNestedInput
  }

  export type pagamentoUncheckedUpdateWithoutEmprestimoInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    valor_pago?: NullableFloatFieldUpdateOperationsInput | number | null
    valor_previsto?: FloatFieldUpdateOperationsInput | number
    tipo_pagamento?: NullableEnumTipo_pagamentoFieldUpdateOperationsInput | $Enums.Tipo_pagamento | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    comprovante?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    uuid_cliente?: StringFieldUpdateOperationsInput | string
    uuid_operador?: StringFieldUpdateOperationsInput | string
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatus_dividaFieldUpdateOperationsInput | $Enums.Status_divida
  }

  export type pagamentoUncheckedUpdateManyWithoutEmprestimoInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    valor_pago?: NullableFloatFieldUpdateOperationsInput | number | null
    valor_previsto?: FloatFieldUpdateOperationsInput | number
    tipo_pagamento?: NullableEnumTipo_pagamentoFieldUpdateOperationsInput | $Enums.Tipo_pagamento | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    comprovante?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    uuid_cliente?: StringFieldUpdateOperationsInput | string
    uuid_operador?: StringFieldUpdateOperationsInput | string
    delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumStatus_dividaFieldUpdateOperationsInput | $Enums.Status_divida
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