
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Promotor
 * 
 */
export type Promotor = $Result.DefaultSelection<Prisma.$PromotorPayload>
/**
 * Model UserCoupon
 * 
 */
export type UserCoupon = $Result.DefaultSelection<Prisma.$UserCouponPayload>
/**
 * Model RefLog
 * 
 */
export type RefLog = $Result.DefaultSelection<Prisma.$RefLogPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Reviews
 * 
 */
export type Reviews = $Result.DefaultSelection<Prisma.$ReviewsPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model OrderDetail
 * 
 */
export type OrderDetail = $Result.DefaultSelection<Prisma.$OrderDetailPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Category: {
  Music: 'Music',
  Orchestra: 'Orchestra',
  Opera: 'Opera',
  Other: 'Other'
};

export type Category = (typeof Category)[keyof typeof Category]


export const Location: {
  Bandung: 'Bandung',
  Bali: 'Bali',
  Surabaya: 'Surabaya',
  Jakarta: 'Jakarta'
};

export type Location = (typeof Location)[keyof typeof Location]


export const Status: {
  PAID: 'PAID',
  CANCELED: 'CANCELED',
  PENDING: 'PENDING'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

export type Location = $Enums.Location

export const Location: typeof $Enums.Location

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.promotor`: Exposes CRUD operations for the **Promotor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promotors
    * const promotors = await prisma.promotor.findMany()
    * ```
    */
  get promotor(): Prisma.PromotorDelegate<ExtArgs>;

  /**
   * `prisma.userCoupon`: Exposes CRUD operations for the **UserCoupon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCoupons
    * const userCoupons = await prisma.userCoupon.findMany()
    * ```
    */
  get userCoupon(): Prisma.UserCouponDelegate<ExtArgs>;

  /**
   * `prisma.refLog`: Exposes CRUD operations for the **RefLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefLogs
    * const refLogs = await prisma.refLog.findMany()
    * ```
    */
  get refLog(): Prisma.RefLogDelegate<ExtArgs>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **Reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.ReviewsDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs>;

  /**
   * `prisma.orderDetail`: Exposes CRUD operations for the **OrderDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderDetails
    * const orderDetails = await prisma.orderDetail.findMany()
    * ```
    */
  get orderDetail(): Prisma.OrderDetailDelegate<ExtArgs>;
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
   * Prisma Client JS version: 6.1.0
   * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    Promotor: 'Promotor',
    UserCoupon: 'UserCoupon',
    RefLog: 'RefLog',
    Event: 'Event',
    Reviews: 'Reviews',
    Order: 'Order',
    Ticket: 'Ticket',
    OrderDetail: 'OrderDetail'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "promotor" | "userCoupon" | "refLog" | "event" | "reviews" | "order" | "ticket" | "orderDetail"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Promotor: {
        payload: Prisma.$PromotorPayload<ExtArgs>
        fields: Prisma.PromotorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromotorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromotorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>
          }
          findFirst: {
            args: Prisma.PromotorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromotorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>
          }
          findMany: {
            args: Prisma.PromotorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>[]
          }
          create: {
            args: Prisma.PromotorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>
          }
          createMany: {
            args: Prisma.PromotorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromotorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>[]
          }
          delete: {
            args: Prisma.PromotorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>
          }
          update: {
            args: Prisma.PromotorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>
          }
          deleteMany: {
            args: Prisma.PromotorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromotorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PromotorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotorPayload>
          }
          aggregate: {
            args: Prisma.PromotorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromotor>
          }
          groupBy: {
            args: Prisma.PromotorGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromotorGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromotorCountArgs<ExtArgs>
            result: $Utils.Optional<PromotorCountAggregateOutputType> | number
          }
        }
      }
      UserCoupon: {
        payload: Prisma.$UserCouponPayload<ExtArgs>
        fields: Prisma.UserCouponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCouponFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCouponFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>
          }
          findFirst: {
            args: Prisma.UserCouponFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCouponFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>
          }
          findMany: {
            args: Prisma.UserCouponFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>[]
          }
          create: {
            args: Prisma.UserCouponCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>
          }
          createMany: {
            args: Prisma.UserCouponCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCouponCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>[]
          }
          delete: {
            args: Prisma.UserCouponDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>
          }
          update: {
            args: Prisma.UserCouponUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>
          }
          deleteMany: {
            args: Prisma.UserCouponDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCouponUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserCouponUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>
          }
          aggregate: {
            args: Prisma.UserCouponAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCoupon>
          }
          groupBy: {
            args: Prisma.UserCouponGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCouponGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCouponCountArgs<ExtArgs>
            result: $Utils.Optional<UserCouponCountAggregateOutputType> | number
          }
        }
      }
      RefLog: {
        payload: Prisma.$RefLogPayload<ExtArgs>
        fields: Prisma.RefLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefLogPayload>
          }
          findFirst: {
            args: Prisma.RefLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefLogPayload>
          }
          findMany: {
            args: Prisma.RefLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefLogPayload>[]
          }
          create: {
            args: Prisma.RefLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefLogPayload>
          }
          createMany: {
            args: Prisma.RefLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefLogPayload>[]
          }
          delete: {
            args: Prisma.RefLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefLogPayload>
          }
          update: {
            args: Prisma.RefLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefLogPayload>
          }
          deleteMany: {
            args: Prisma.RefLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RefLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefLogPayload>
          }
          aggregate: {
            args: Prisma.RefLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefLog>
          }
          groupBy: {
            args: Prisma.RefLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefLogCountArgs<ExtArgs>
            result: $Utils.Optional<RefLogCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Reviews: {
        payload: Prisma.$ReviewsPayload<ExtArgs>
        fields: Prisma.ReviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findFirst: {
            args: Prisma.ReviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findMany: {
            args: Prisma.ReviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          create: {
            args: Prisma.ReviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          createMany: {
            args: Prisma.ReviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          delete: {
            args: Prisma.ReviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          update: {
            args: Prisma.ReviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          deleteMany: {
            args: Prisma.ReviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.ReviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewsCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      OrderDetail: {
        payload: Prisma.$OrderDetailPayload<ExtArgs>
        fields: Prisma.OrderDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>
          }
          findFirst: {
            args: Prisma.OrderDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>
          }
          findMany: {
            args: Prisma.OrderDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>[]
          }
          create: {
            args: Prisma.OrderDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>
          }
          createMany: {
            args: Prisma.OrderDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>[]
          }
          delete: {
            args: Prisma.OrderDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>
          }
          update: {
            args: Prisma.OrderDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>
          }
          deleteMany: {
            args: Prisma.OrderDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>
          }
          aggregate: {
            args: Prisma.OrderDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderDetail>
          }
          groupBy: {
            args: Prisma.OrderDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderDetailCountArgs<ExtArgs>
            result: $Utils.Optional<OrderDetailCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    orders: number
    reviews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }


  /**
   * Count Type PromotorCountOutputType
   */

  export type PromotorCountOutputType = {
    events: number
  }

  export type PromotorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | PromotorCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * PromotorCountOutputType without action
   */
  export type PromotorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotorCountOutputType
     */
    select?: PromotorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PromotorCountOutputType without action
   */
  export type PromotorCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type UserCouponCountOutputType
   */

  export type UserCouponCountOutputType = {
    orderdetail: number
    User: number
  }

  export type UserCouponCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderdetail?: boolean | UserCouponCountOutputTypeCountOrderdetailArgs
    User?: boolean | UserCouponCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * UserCouponCountOutputType without action
   */
  export type UserCouponCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCouponCountOutputType
     */
    select?: UserCouponCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCouponCountOutputType without action
   */
  export type UserCouponCountOutputTypeCountOrderdetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailWhereInput
  }

  /**
   * UserCouponCountOutputType without action
   */
  export type UserCouponCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type RefLogCountOutputType
   */

  export type RefLogCountOutputType = {
    user: number
  }

  export type RefLogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | RefLogCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * RefLogCountOutputType without action
   */
  export type RefLogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefLogCountOutputType
     */
    select?: RefLogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RefLogCountOutputType without action
   */
  export type RefLogCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    orders: number
    tickets: number
    reviews: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | EventCountOutputTypeCountOrdersArgs
    tickets?: boolean | EventCountOutputTypeCountTicketsArgs
    reviews?: boolean | EventCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    details: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | OrderCountOutputTypeCountDetailsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailWhereInput
  }


  /**
   * Count Type OrderDetailCountOutputType
   */

  export type OrderDetailCountOutputType = {
    tickets: number
  }

  export type OrderDetailCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | OrderDetailCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * OrderDetailCountOutputType without action
   */
  export type OrderDetailCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetailCountOutputType
     */
    select?: OrderDetailCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderDetailCountOutputType without action
   */
  export type OrderDetailCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    points: number | null
    refLogId: number | null
    percentage: number | null
    userCouponId: number | null
  }

  export type UserSumAggregateOutputType = {
    points: number | null
    refLogId: number | null
    percentage: number | null
    userCouponId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    avatar: string | null
    isVerify: boolean | null
    refCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
    points: number | null
    refCodeBy: string | null
    refLogId: number | null
    percentage: number | null
    userCouponId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    avatar: string | null
    isVerify: boolean | null
    refCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
    points: number | null
    refCodeBy: string | null
    refLogId: number | null
    percentage: number | null
    userCouponId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    avatar: number
    isVerify: number
    refCode: number
    createdAt: number
    updatedAt: number
    points: number
    refCodeBy: number
    refLogId: number
    percentage: number
    userCouponId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    points?: true
    refLogId?: true
    percentage?: true
    userCouponId?: true
  }

  export type UserSumAggregateInputType = {
    points?: true
    refLogId?: true
    percentage?: true
    userCouponId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    avatar?: true
    isVerify?: true
    refCode?: true
    createdAt?: true
    updatedAt?: true
    points?: true
    refCodeBy?: true
    refLogId?: true
    percentage?: true
    userCouponId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    avatar?: true
    isVerify?: true
    refCode?: true
    createdAt?: true
    updatedAt?: true
    points?: true
    refCodeBy?: true
    refLogId?: true
    percentage?: true
    userCouponId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    avatar?: true
    isVerify?: true
    refCode?: true
    createdAt?: true
    updatedAt?: true
    points?: true
    refCodeBy?: true
    refLogId?: true
    percentage?: true
    userCouponId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    password: string
    avatar: string | null
    isVerify: boolean
    refCode: string | null
    createdAt: Date
    updatedAt: Date
    points: number
    refCodeBy: string | null
    refLogId: number | null
    percentage: number | null
    userCouponId: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerify?: boolean
    refCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    points?: boolean
    refCodeBy?: boolean
    refLogId?: boolean
    percentage?: boolean
    userCouponId?: boolean
    orders?: boolean | User$ordersArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    RefLog?: boolean | User$RefLogArgs<ExtArgs>
    usercoupon?: boolean | User$usercouponArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerify?: boolean
    refCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    points?: boolean
    refCodeBy?: boolean
    refLogId?: boolean
    percentage?: boolean
    userCouponId?: boolean
    RefLog?: boolean | User$RefLogArgs<ExtArgs>
    usercoupon?: boolean | User$usercouponArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerify?: boolean
    refCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    points?: boolean
    refCodeBy?: boolean
    refLogId?: boolean
    percentage?: boolean
    userCouponId?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | User$ordersArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    RefLog?: boolean | User$RefLogArgs<ExtArgs>
    usercoupon?: boolean | User$usercouponArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RefLog?: boolean | User$RefLogArgs<ExtArgs>
    usercoupon?: boolean | User$usercouponArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      reviews: Prisma.$ReviewsPayload<ExtArgs>[]
      RefLog: Prisma.$RefLogPayload<ExtArgs> | null
      usercoupon: Prisma.$UserCouponPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
      avatar: string | null
      isVerify: boolean
      refCode: string | null
      createdAt: Date
      updatedAt: Date
      points: number
      refCodeBy: string | null
      refLogId: number | null
      percentage: number | null
      userCouponId: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany"> | Null>
    RefLog<T extends User$RefLogArgs<ExtArgs> = {}>(args?: Subset<T, User$RefLogArgs<ExtArgs>>): Prisma__RefLogClient<$Result.GetResult<Prisma.$RefLogPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    usercoupon<T extends User$usercouponArgs<ExtArgs> = {}>(args?: Subset<T, User$usercouponArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly isVerify: FieldRef<"User", 'Boolean'>
    readonly refCode: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly points: FieldRef<"User", 'Int'>
    readonly refCodeBy: FieldRef<"User", 'String'>
    readonly refLogId: FieldRef<"User", 'Int'>
    readonly percentage: FieldRef<"User", 'Float'>
    readonly userCouponId: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * User.RefLog
   */
  export type User$RefLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefLog
     */
    select?: RefLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefLogInclude<ExtArgs> | null
    where?: RefLogWhereInput
  }

  /**
   * User.usercoupon
   */
  export type User$usercouponArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    where?: UserCouponWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Promotor
   */

  export type AggregatePromotor = {
    _count: PromotorCountAggregateOutputType | null
    _min: PromotorMinAggregateOutputType | null
    _max: PromotorMaxAggregateOutputType | null
  }

  export type PromotorMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    isVerify: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromotorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    isVerify: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromotorCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    avatar: number
    isVerify: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PromotorMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    isVerify?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromotorMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    isVerify?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromotorCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    isVerify?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PromotorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotor to aggregate.
     */
    where?: PromotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotors to fetch.
     */
    orderBy?: PromotorOrderByWithRelationInput | PromotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Promotors
    **/
    _count?: true | PromotorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromotorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromotorMaxAggregateInputType
  }

  export type GetPromotorAggregateType<T extends PromotorAggregateArgs> = {
        [P in keyof T & keyof AggregatePromotor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromotor[P]>
      : GetScalarType<T[P], AggregatePromotor[P]>
  }




  export type PromotorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotorWhereInput
    orderBy?: PromotorOrderByWithAggregationInput | PromotorOrderByWithAggregationInput[]
    by: PromotorScalarFieldEnum[] | PromotorScalarFieldEnum
    having?: PromotorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromotorCountAggregateInputType | true
    _min?: PromotorMinAggregateInputType
    _max?: PromotorMaxAggregateInputType
  }

  export type PromotorGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    avatar: string | null
    isVerify: boolean
    createdAt: Date
    updatedAt: Date
    _count: PromotorCountAggregateOutputType | null
    _min: PromotorMinAggregateOutputType | null
    _max: PromotorMaxAggregateOutputType | null
  }

  type GetPromotorGroupByPayload<T extends PromotorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromotorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromotorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromotorGroupByOutputType[P]>
            : GetScalarType<T[P], PromotorGroupByOutputType[P]>
        }
      >
    >


  export type PromotorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerify?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    events?: boolean | Promotor$eventsArgs<ExtArgs>
    _count?: boolean | PromotorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promotor"]>

  export type PromotorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerify?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promotor"]>

  export type PromotorSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerify?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PromotorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | Promotor$eventsArgs<ExtArgs>
    _count?: boolean | PromotorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PromotorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PromotorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Promotor"
    objects: {
      events: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      avatar: string | null
      isVerify: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["promotor"]>
    composites: {}
  }

  type PromotorGetPayload<S extends boolean | null | undefined | PromotorDefaultArgs> = $Result.GetResult<Prisma.$PromotorPayload, S>

  type PromotorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PromotorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PromotorCountAggregateInputType | true
    }

  export interface PromotorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Promotor'], meta: { name: 'Promotor' } }
    /**
     * Find zero or one Promotor that matches the filter.
     * @param {PromotorFindUniqueArgs} args - Arguments to find a Promotor
     * @example
     * // Get one Promotor
     * const promotor = await prisma.promotor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromotorFindUniqueArgs>(args: SelectSubset<T, PromotorFindUniqueArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Promotor that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PromotorFindUniqueOrThrowArgs} args - Arguments to find a Promotor
     * @example
     * // Get one Promotor
     * const promotor = await prisma.promotor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromotorFindUniqueOrThrowArgs>(args: SelectSubset<T, PromotorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Promotor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorFindFirstArgs} args - Arguments to find a Promotor
     * @example
     * // Get one Promotor
     * const promotor = await prisma.promotor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromotorFindFirstArgs>(args?: SelectSubset<T, PromotorFindFirstArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Promotor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorFindFirstOrThrowArgs} args - Arguments to find a Promotor
     * @example
     * // Get one Promotor
     * const promotor = await prisma.promotor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromotorFindFirstOrThrowArgs>(args?: SelectSubset<T, PromotorFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Promotors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promotors
     * const promotors = await prisma.promotor.findMany()
     * 
     * // Get first 10 Promotors
     * const promotors = await prisma.promotor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promotorWithIdOnly = await prisma.promotor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromotorFindManyArgs>(args?: SelectSubset<T, PromotorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Promotor.
     * @param {PromotorCreateArgs} args - Arguments to create a Promotor.
     * @example
     * // Create one Promotor
     * const Promotor = await prisma.promotor.create({
     *   data: {
     *     // ... data to create a Promotor
     *   }
     * })
     * 
     */
    create<T extends PromotorCreateArgs>(args: SelectSubset<T, PromotorCreateArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Promotors.
     * @param {PromotorCreateManyArgs} args - Arguments to create many Promotors.
     * @example
     * // Create many Promotors
     * const promotor = await prisma.promotor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromotorCreateManyArgs>(args?: SelectSubset<T, PromotorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Promotors and returns the data saved in the database.
     * @param {PromotorCreateManyAndReturnArgs} args - Arguments to create many Promotors.
     * @example
     * // Create many Promotors
     * const promotor = await prisma.promotor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Promotors and only return the `id`
     * const promotorWithIdOnly = await prisma.promotor.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromotorCreateManyAndReturnArgs>(args?: SelectSubset<T, PromotorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Promotor.
     * @param {PromotorDeleteArgs} args - Arguments to delete one Promotor.
     * @example
     * // Delete one Promotor
     * const Promotor = await prisma.promotor.delete({
     *   where: {
     *     // ... filter to delete one Promotor
     *   }
     * })
     * 
     */
    delete<T extends PromotorDeleteArgs>(args: SelectSubset<T, PromotorDeleteArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Promotor.
     * @param {PromotorUpdateArgs} args - Arguments to update one Promotor.
     * @example
     * // Update one Promotor
     * const promotor = await prisma.promotor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromotorUpdateArgs>(args: SelectSubset<T, PromotorUpdateArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Promotors.
     * @param {PromotorDeleteManyArgs} args - Arguments to filter Promotors to delete.
     * @example
     * // Delete a few Promotors
     * const { count } = await prisma.promotor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromotorDeleteManyArgs>(args?: SelectSubset<T, PromotorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promotors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promotors
     * const promotor = await prisma.promotor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromotorUpdateManyArgs>(args: SelectSubset<T, PromotorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Promotor.
     * @param {PromotorUpsertArgs} args - Arguments to update or create a Promotor.
     * @example
     * // Update or create a Promotor
     * const promotor = await prisma.promotor.upsert({
     *   create: {
     *     // ... data to create a Promotor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promotor we want to update
     *   }
     * })
     */
    upsert<T extends PromotorUpsertArgs>(args: SelectSubset<T, PromotorUpsertArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Promotors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorCountArgs} args - Arguments to filter Promotors to count.
     * @example
     * // Count the number of Promotors
     * const count = await prisma.promotor.count({
     *   where: {
     *     // ... the filter for the Promotors we want to count
     *   }
     * })
    **/
    count<T extends PromotorCountArgs>(
      args?: Subset<T, PromotorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromotorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promotor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PromotorAggregateArgs>(args: Subset<T, PromotorAggregateArgs>): Prisma.PrismaPromise<GetPromotorAggregateType<T>>

    /**
     * Group by Promotor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotorGroupByArgs} args - Group by arguments.
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
      T extends PromotorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromotorGroupByArgs['orderBy'] }
        : { orderBy?: PromotorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PromotorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromotorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Promotor model
   */
  readonly fields: PromotorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Promotor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromotorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends Promotor$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Promotor$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Promotor model
   */ 
  interface PromotorFieldRefs {
    readonly id: FieldRef<"Promotor", 'String'>
    readonly name: FieldRef<"Promotor", 'String'>
    readonly email: FieldRef<"Promotor", 'String'>
    readonly password: FieldRef<"Promotor", 'String'>
    readonly avatar: FieldRef<"Promotor", 'String'>
    readonly isVerify: FieldRef<"Promotor", 'Boolean'>
    readonly createdAt: FieldRef<"Promotor", 'DateTime'>
    readonly updatedAt: FieldRef<"Promotor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Promotor findUnique
   */
  export type PromotorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * Filter, which Promotor to fetch.
     */
    where: PromotorWhereUniqueInput
  }

  /**
   * Promotor findUniqueOrThrow
   */
  export type PromotorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * Filter, which Promotor to fetch.
     */
    where: PromotorWhereUniqueInput
  }

  /**
   * Promotor findFirst
   */
  export type PromotorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * Filter, which Promotor to fetch.
     */
    where?: PromotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotors to fetch.
     */
    orderBy?: PromotorOrderByWithRelationInput | PromotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotors.
     */
    cursor?: PromotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotors.
     */
    distinct?: PromotorScalarFieldEnum | PromotorScalarFieldEnum[]
  }

  /**
   * Promotor findFirstOrThrow
   */
  export type PromotorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * Filter, which Promotor to fetch.
     */
    where?: PromotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotors to fetch.
     */
    orderBy?: PromotorOrderByWithRelationInput | PromotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotors.
     */
    cursor?: PromotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotors.
     */
    distinct?: PromotorScalarFieldEnum | PromotorScalarFieldEnum[]
  }

  /**
   * Promotor findMany
   */
  export type PromotorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * Filter, which Promotors to fetch.
     */
    where?: PromotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotors to fetch.
     */
    orderBy?: PromotorOrderByWithRelationInput | PromotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Promotors.
     */
    cursor?: PromotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotors.
     */
    skip?: number
    distinct?: PromotorScalarFieldEnum | PromotorScalarFieldEnum[]
  }

  /**
   * Promotor create
   */
  export type PromotorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * The data needed to create a Promotor.
     */
    data: XOR<PromotorCreateInput, PromotorUncheckedCreateInput>
  }

  /**
   * Promotor createMany
   */
  export type PromotorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Promotors.
     */
    data: PromotorCreateManyInput | PromotorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promotor createManyAndReturn
   */
  export type PromotorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Promotors.
     */
    data: PromotorCreateManyInput | PromotorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promotor update
   */
  export type PromotorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * The data needed to update a Promotor.
     */
    data: XOR<PromotorUpdateInput, PromotorUncheckedUpdateInput>
    /**
     * Choose, which Promotor to update.
     */
    where: PromotorWhereUniqueInput
  }

  /**
   * Promotor updateMany
   */
  export type PromotorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Promotors.
     */
    data: XOR<PromotorUpdateManyMutationInput, PromotorUncheckedUpdateManyInput>
    /**
     * Filter which Promotors to update
     */
    where?: PromotorWhereInput
  }

  /**
   * Promotor upsert
   */
  export type PromotorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * The filter to search for the Promotor to update in case it exists.
     */
    where: PromotorWhereUniqueInput
    /**
     * In case the Promotor found by the `where` argument doesn't exist, create a new Promotor with this data.
     */
    create: XOR<PromotorCreateInput, PromotorUncheckedCreateInput>
    /**
     * In case the Promotor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromotorUpdateInput, PromotorUncheckedUpdateInput>
  }

  /**
   * Promotor delete
   */
  export type PromotorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    /**
     * Filter which Promotor to delete.
     */
    where: PromotorWhereUniqueInput
  }

  /**
   * Promotor deleteMany
   */
  export type PromotorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotors to delete
     */
    where?: PromotorWhereInput
  }

  /**
   * Promotor.events
   */
  export type Promotor$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Promotor without action
   */
  export type PromotorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
  }


  /**
   * Model UserCoupon
   */

  export type AggregateUserCoupon = {
    _count: UserCouponCountAggregateOutputType | null
    _avg: UserCouponAvgAggregateOutputType | null
    _sum: UserCouponSumAggregateOutputType | null
    _min: UserCouponMinAggregateOutputType | null
    _max: UserCouponMaxAggregateOutputType | null
  }

  export type UserCouponAvgAggregateOutputType = {
    id: number | null
    percentage: number | null
  }

  export type UserCouponSumAggregateOutputType = {
    id: number | null
    percentage: number | null
  }

  export type UserCouponMinAggregateOutputType = {
    id: number | null
    isRedeem: boolean | null
    percentage: number | null
    expiredAt: Date | null
  }

  export type UserCouponMaxAggregateOutputType = {
    id: number | null
    isRedeem: boolean | null
    percentage: number | null
    expiredAt: Date | null
  }

  export type UserCouponCountAggregateOutputType = {
    id: number
    isRedeem: number
    percentage: number
    expiredAt: number
    _all: number
  }


  export type UserCouponAvgAggregateInputType = {
    id?: true
    percentage?: true
  }

  export type UserCouponSumAggregateInputType = {
    id?: true
    percentage?: true
  }

  export type UserCouponMinAggregateInputType = {
    id?: true
    isRedeem?: true
    percentage?: true
    expiredAt?: true
  }

  export type UserCouponMaxAggregateInputType = {
    id?: true
    isRedeem?: true
    percentage?: true
    expiredAt?: true
  }

  export type UserCouponCountAggregateInputType = {
    id?: true
    isRedeem?: true
    percentage?: true
    expiredAt?: true
    _all?: true
  }

  export type UserCouponAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCoupon to aggregate.
     */
    where?: UserCouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCoupons to fetch.
     */
    orderBy?: UserCouponOrderByWithRelationInput | UserCouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCoupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCoupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCoupons
    **/
    _count?: true | UserCouponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserCouponAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserCouponSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCouponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCouponMaxAggregateInputType
  }

  export type GetUserCouponAggregateType<T extends UserCouponAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCoupon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCoupon[P]>
      : GetScalarType<T[P], AggregateUserCoupon[P]>
  }




  export type UserCouponGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCouponWhereInput
    orderBy?: UserCouponOrderByWithAggregationInput | UserCouponOrderByWithAggregationInput[]
    by: UserCouponScalarFieldEnum[] | UserCouponScalarFieldEnum
    having?: UserCouponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCouponCountAggregateInputType | true
    _avg?: UserCouponAvgAggregateInputType
    _sum?: UserCouponSumAggregateInputType
    _min?: UserCouponMinAggregateInputType
    _max?: UserCouponMaxAggregateInputType
  }

  export type UserCouponGroupByOutputType = {
    id: number
    isRedeem: boolean
    percentage: number
    expiredAt: Date
    _count: UserCouponCountAggregateOutputType | null
    _avg: UserCouponAvgAggregateOutputType | null
    _sum: UserCouponSumAggregateOutputType | null
    _min: UserCouponMinAggregateOutputType | null
    _max: UserCouponMaxAggregateOutputType | null
  }

  type GetUserCouponGroupByPayload<T extends UserCouponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCouponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCouponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCouponGroupByOutputType[P]>
            : GetScalarType<T[P], UserCouponGroupByOutputType[P]>
        }
      >
    >


  export type UserCouponSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isRedeem?: boolean
    percentage?: boolean
    expiredAt?: boolean
    orderdetail?: boolean | UserCoupon$orderdetailArgs<ExtArgs>
    User?: boolean | UserCoupon$UserArgs<ExtArgs>
    _count?: boolean | UserCouponCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCoupon"]>

  export type UserCouponSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isRedeem?: boolean
    percentage?: boolean
    expiredAt?: boolean
  }, ExtArgs["result"]["userCoupon"]>

  export type UserCouponSelectScalar = {
    id?: boolean
    isRedeem?: boolean
    percentage?: boolean
    expiredAt?: boolean
  }

  export type UserCouponInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderdetail?: boolean | UserCoupon$orderdetailArgs<ExtArgs>
    User?: boolean | UserCoupon$UserArgs<ExtArgs>
    _count?: boolean | UserCouponCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserCouponIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserCouponPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCoupon"
    objects: {
      orderdetail: Prisma.$OrderDetailPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      isRedeem: boolean
      percentage: number
      expiredAt: Date
    }, ExtArgs["result"]["userCoupon"]>
    composites: {}
  }

  type UserCouponGetPayload<S extends boolean | null | undefined | UserCouponDefaultArgs> = $Result.GetResult<Prisma.$UserCouponPayload, S>

  type UserCouponCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserCouponFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCouponCountAggregateInputType | true
    }

  export interface UserCouponDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCoupon'], meta: { name: 'UserCoupon' } }
    /**
     * Find zero or one UserCoupon that matches the filter.
     * @param {UserCouponFindUniqueArgs} args - Arguments to find a UserCoupon
     * @example
     * // Get one UserCoupon
     * const userCoupon = await prisma.userCoupon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCouponFindUniqueArgs>(args: SelectSubset<T, UserCouponFindUniqueArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserCoupon that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserCouponFindUniqueOrThrowArgs} args - Arguments to find a UserCoupon
     * @example
     * // Get one UserCoupon
     * const userCoupon = await prisma.userCoupon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCouponFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCouponFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserCoupon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCouponFindFirstArgs} args - Arguments to find a UserCoupon
     * @example
     * // Get one UserCoupon
     * const userCoupon = await prisma.userCoupon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCouponFindFirstArgs>(args?: SelectSubset<T, UserCouponFindFirstArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserCoupon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCouponFindFirstOrThrowArgs} args - Arguments to find a UserCoupon
     * @example
     * // Get one UserCoupon
     * const userCoupon = await prisma.userCoupon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCouponFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCouponFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserCoupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCouponFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCoupons
     * const userCoupons = await prisma.userCoupon.findMany()
     * 
     * // Get first 10 UserCoupons
     * const userCoupons = await prisma.userCoupon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCouponWithIdOnly = await prisma.userCoupon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCouponFindManyArgs>(args?: SelectSubset<T, UserCouponFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserCoupon.
     * @param {UserCouponCreateArgs} args - Arguments to create a UserCoupon.
     * @example
     * // Create one UserCoupon
     * const UserCoupon = await prisma.userCoupon.create({
     *   data: {
     *     // ... data to create a UserCoupon
     *   }
     * })
     * 
     */
    create<T extends UserCouponCreateArgs>(args: SelectSubset<T, UserCouponCreateArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserCoupons.
     * @param {UserCouponCreateManyArgs} args - Arguments to create many UserCoupons.
     * @example
     * // Create many UserCoupons
     * const userCoupon = await prisma.userCoupon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCouponCreateManyArgs>(args?: SelectSubset<T, UserCouponCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserCoupons and returns the data saved in the database.
     * @param {UserCouponCreateManyAndReturnArgs} args - Arguments to create many UserCoupons.
     * @example
     * // Create many UserCoupons
     * const userCoupon = await prisma.userCoupon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserCoupons and only return the `id`
     * const userCouponWithIdOnly = await prisma.userCoupon.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCouponCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCouponCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserCoupon.
     * @param {UserCouponDeleteArgs} args - Arguments to delete one UserCoupon.
     * @example
     * // Delete one UserCoupon
     * const UserCoupon = await prisma.userCoupon.delete({
     *   where: {
     *     // ... filter to delete one UserCoupon
     *   }
     * })
     * 
     */
    delete<T extends UserCouponDeleteArgs>(args: SelectSubset<T, UserCouponDeleteArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserCoupon.
     * @param {UserCouponUpdateArgs} args - Arguments to update one UserCoupon.
     * @example
     * // Update one UserCoupon
     * const userCoupon = await prisma.userCoupon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCouponUpdateArgs>(args: SelectSubset<T, UserCouponUpdateArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserCoupons.
     * @param {UserCouponDeleteManyArgs} args - Arguments to filter UserCoupons to delete.
     * @example
     * // Delete a few UserCoupons
     * const { count } = await prisma.userCoupon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCouponDeleteManyArgs>(args?: SelectSubset<T, UserCouponDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCoupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCouponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCoupons
     * const userCoupon = await prisma.userCoupon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCouponUpdateManyArgs>(args: SelectSubset<T, UserCouponUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserCoupon.
     * @param {UserCouponUpsertArgs} args - Arguments to update or create a UserCoupon.
     * @example
     * // Update or create a UserCoupon
     * const userCoupon = await prisma.userCoupon.upsert({
     *   create: {
     *     // ... data to create a UserCoupon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCoupon we want to update
     *   }
     * })
     */
    upsert<T extends UserCouponUpsertArgs>(args: SelectSubset<T, UserCouponUpsertArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserCoupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCouponCountArgs} args - Arguments to filter UserCoupons to count.
     * @example
     * // Count the number of UserCoupons
     * const count = await prisma.userCoupon.count({
     *   where: {
     *     // ... the filter for the UserCoupons we want to count
     *   }
     * })
    **/
    count<T extends UserCouponCountArgs>(
      args?: Subset<T, UserCouponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCouponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCoupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCouponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserCouponAggregateArgs>(args: Subset<T, UserCouponAggregateArgs>): Prisma.PrismaPromise<GetUserCouponAggregateType<T>>

    /**
     * Group by UserCoupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCouponGroupByArgs} args - Group by arguments.
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
      T extends UserCouponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCouponGroupByArgs['orderBy'] }
        : { orderBy?: UserCouponGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserCouponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCouponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCoupon model
   */
  readonly fields: UserCouponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCoupon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCouponClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderdetail<T extends UserCoupon$orderdetailArgs<ExtArgs> = {}>(args?: Subset<T, UserCoupon$orderdetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "findMany"> | Null>
    User<T extends UserCoupon$UserArgs<ExtArgs> = {}>(args?: Subset<T, UserCoupon$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the UserCoupon model
   */ 
  interface UserCouponFieldRefs {
    readonly id: FieldRef<"UserCoupon", 'Int'>
    readonly isRedeem: FieldRef<"UserCoupon", 'Boolean'>
    readonly percentage: FieldRef<"UserCoupon", 'Float'>
    readonly expiredAt: FieldRef<"UserCoupon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserCoupon findUnique
   */
  export type UserCouponFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * Filter, which UserCoupon to fetch.
     */
    where: UserCouponWhereUniqueInput
  }

  /**
   * UserCoupon findUniqueOrThrow
   */
  export type UserCouponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * Filter, which UserCoupon to fetch.
     */
    where: UserCouponWhereUniqueInput
  }

  /**
   * UserCoupon findFirst
   */
  export type UserCouponFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * Filter, which UserCoupon to fetch.
     */
    where?: UserCouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCoupons to fetch.
     */
    orderBy?: UserCouponOrderByWithRelationInput | UserCouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCoupons.
     */
    cursor?: UserCouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCoupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCoupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCoupons.
     */
    distinct?: UserCouponScalarFieldEnum | UserCouponScalarFieldEnum[]
  }

  /**
   * UserCoupon findFirstOrThrow
   */
  export type UserCouponFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * Filter, which UserCoupon to fetch.
     */
    where?: UserCouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCoupons to fetch.
     */
    orderBy?: UserCouponOrderByWithRelationInput | UserCouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCoupons.
     */
    cursor?: UserCouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCoupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCoupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCoupons.
     */
    distinct?: UserCouponScalarFieldEnum | UserCouponScalarFieldEnum[]
  }

  /**
   * UserCoupon findMany
   */
  export type UserCouponFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * Filter, which UserCoupons to fetch.
     */
    where?: UserCouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCoupons to fetch.
     */
    orderBy?: UserCouponOrderByWithRelationInput | UserCouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCoupons.
     */
    cursor?: UserCouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCoupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCoupons.
     */
    skip?: number
    distinct?: UserCouponScalarFieldEnum | UserCouponScalarFieldEnum[]
  }

  /**
   * UserCoupon create
   */
  export type UserCouponCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCoupon.
     */
    data: XOR<UserCouponCreateInput, UserCouponUncheckedCreateInput>
  }

  /**
   * UserCoupon createMany
   */
  export type UserCouponCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCoupons.
     */
    data: UserCouponCreateManyInput | UserCouponCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCoupon createManyAndReturn
   */
  export type UserCouponCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserCoupons.
     */
    data: UserCouponCreateManyInput | UserCouponCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCoupon update
   */
  export type UserCouponUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCoupon.
     */
    data: XOR<UserCouponUpdateInput, UserCouponUncheckedUpdateInput>
    /**
     * Choose, which UserCoupon to update.
     */
    where: UserCouponWhereUniqueInput
  }

  /**
   * UserCoupon updateMany
   */
  export type UserCouponUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCoupons.
     */
    data: XOR<UserCouponUpdateManyMutationInput, UserCouponUncheckedUpdateManyInput>
    /**
     * Filter which UserCoupons to update
     */
    where?: UserCouponWhereInput
  }

  /**
   * UserCoupon upsert
   */
  export type UserCouponUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCoupon to update in case it exists.
     */
    where: UserCouponWhereUniqueInput
    /**
     * In case the UserCoupon found by the `where` argument doesn't exist, create a new UserCoupon with this data.
     */
    create: XOR<UserCouponCreateInput, UserCouponUncheckedCreateInput>
    /**
     * In case the UserCoupon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCouponUpdateInput, UserCouponUncheckedUpdateInput>
  }

  /**
   * UserCoupon delete
   */
  export type UserCouponDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * Filter which UserCoupon to delete.
     */
    where: UserCouponWhereUniqueInput
  }

  /**
   * UserCoupon deleteMany
   */
  export type UserCouponDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCoupons to delete
     */
    where?: UserCouponWhereInput
  }

  /**
   * UserCoupon.orderdetail
   */
  export type UserCoupon$orderdetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    where?: OrderDetailWhereInput
    orderBy?: OrderDetailOrderByWithRelationInput | OrderDetailOrderByWithRelationInput[]
    cursor?: OrderDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderDetailScalarFieldEnum | OrderDetailScalarFieldEnum[]
  }

  /**
   * UserCoupon.User
   */
  export type UserCoupon$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * UserCoupon without action
   */
  export type UserCouponDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
  }


  /**
   * Model RefLog
   */

  export type AggregateRefLog = {
    _count: RefLogCountAggregateOutputType | null
    _avg: RefLogAvgAggregateOutputType | null
    _sum: RefLogSumAggregateOutputType | null
    _min: RefLogMinAggregateOutputType | null
    _max: RefLogMaxAggregateOutputType | null
  }

  export type RefLogAvgAggregateOutputType = {
    id: number | null
    pointGet: number | null
  }

  export type RefLogSumAggregateOutputType = {
    id: number | null
    pointGet: number | null
  }

  export type RefLogMinAggregateOutputType = {
    id: number | null
    pointGet: number | null
    createdAt: Date | null
    expiredAt: Date | null
    isUsed: boolean | null
  }

  export type RefLogMaxAggregateOutputType = {
    id: number | null
    pointGet: number | null
    createdAt: Date | null
    expiredAt: Date | null
    isUsed: boolean | null
  }

  export type RefLogCountAggregateOutputType = {
    id: number
    pointGet: number
    createdAt: number
    expiredAt: number
    isUsed: number
    _all: number
  }


  export type RefLogAvgAggregateInputType = {
    id?: true
    pointGet?: true
  }

  export type RefLogSumAggregateInputType = {
    id?: true
    pointGet?: true
  }

  export type RefLogMinAggregateInputType = {
    id?: true
    pointGet?: true
    createdAt?: true
    expiredAt?: true
    isUsed?: true
  }

  export type RefLogMaxAggregateInputType = {
    id?: true
    pointGet?: true
    createdAt?: true
    expiredAt?: true
    isUsed?: true
  }

  export type RefLogCountAggregateInputType = {
    id?: true
    pointGet?: true
    createdAt?: true
    expiredAt?: true
    isUsed?: true
    _all?: true
  }

  export type RefLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefLog to aggregate.
     */
    where?: RefLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefLogs to fetch.
     */
    orderBy?: RefLogOrderByWithRelationInput | RefLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefLogs
    **/
    _count?: true | RefLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefLogMaxAggregateInputType
  }

  export type GetRefLogAggregateType<T extends RefLogAggregateArgs> = {
        [P in keyof T & keyof AggregateRefLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefLog[P]>
      : GetScalarType<T[P], AggregateRefLog[P]>
  }




  export type RefLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefLogWhereInput
    orderBy?: RefLogOrderByWithAggregationInput | RefLogOrderByWithAggregationInput[]
    by: RefLogScalarFieldEnum[] | RefLogScalarFieldEnum
    having?: RefLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefLogCountAggregateInputType | true
    _avg?: RefLogAvgAggregateInputType
    _sum?: RefLogSumAggregateInputType
    _min?: RefLogMinAggregateInputType
    _max?: RefLogMaxAggregateInputType
  }

  export type RefLogGroupByOutputType = {
    id: number
    pointGet: number
    createdAt: Date
    expiredAt: Date
    isUsed: boolean
    _count: RefLogCountAggregateOutputType | null
    _avg: RefLogAvgAggregateOutputType | null
    _sum: RefLogSumAggregateOutputType | null
    _min: RefLogMinAggregateOutputType | null
    _max: RefLogMaxAggregateOutputType | null
  }

  type GetRefLogGroupByPayload<T extends RefLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefLogGroupByOutputType[P]>
            : GetScalarType<T[P], RefLogGroupByOutputType[P]>
        }
      >
    >


  export type RefLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pointGet?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    isUsed?: boolean
    user?: boolean | RefLog$userArgs<ExtArgs>
    _count?: boolean | RefLogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refLog"]>

  export type RefLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pointGet?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    isUsed?: boolean
  }, ExtArgs["result"]["refLog"]>

  export type RefLogSelectScalar = {
    id?: boolean
    pointGet?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    isUsed?: boolean
  }

  export type RefLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | RefLog$userArgs<ExtArgs>
    _count?: boolean | RefLogCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RefLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RefLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pointGet: number
      createdAt: Date
      expiredAt: Date
      isUsed: boolean
    }, ExtArgs["result"]["refLog"]>
    composites: {}
  }

  type RefLogGetPayload<S extends boolean | null | undefined | RefLogDefaultArgs> = $Result.GetResult<Prisma.$RefLogPayload, S>

  type RefLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RefLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RefLogCountAggregateInputType | true
    }

  export interface RefLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefLog'], meta: { name: 'RefLog' } }
    /**
     * Find zero or one RefLog that matches the filter.
     * @param {RefLogFindUniqueArgs} args - Arguments to find a RefLog
     * @example
     * // Get one RefLog
     * const refLog = await prisma.refLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefLogFindUniqueArgs>(args: SelectSubset<T, RefLogFindUniqueArgs<ExtArgs>>): Prisma__RefLogClient<$Result.GetResult<Prisma.$RefLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RefLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RefLogFindUniqueOrThrowArgs} args - Arguments to find a RefLog
     * @example
     * // Get one RefLog
     * const refLog = await prisma.refLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefLogFindUniqueOrThrowArgs>(args: SelectSubset<T, RefLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefLogClient<$Result.GetResult<Prisma.$RefLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RefLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefLogFindFirstArgs} args - Arguments to find a RefLog
     * @example
     * // Get one RefLog
     * const refLog = await prisma.refLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefLogFindFirstArgs>(args?: SelectSubset<T, RefLogFindFirstArgs<ExtArgs>>): Prisma__RefLogClient<$Result.GetResult<Prisma.$RefLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RefLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefLogFindFirstOrThrowArgs} args - Arguments to find a RefLog
     * @example
     * // Get one RefLog
     * const refLog = await prisma.refLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefLogFindFirstOrThrowArgs>(args?: SelectSubset<T, RefLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefLogClient<$Result.GetResult<Prisma.$RefLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RefLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefLogs
     * const refLogs = await prisma.refLog.findMany()
     * 
     * // Get first 10 RefLogs
     * const refLogs = await prisma.refLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refLogWithIdOnly = await prisma.refLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefLogFindManyArgs>(args?: SelectSubset<T, RefLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RefLog.
     * @param {RefLogCreateArgs} args - Arguments to create a RefLog.
     * @example
     * // Create one RefLog
     * const RefLog = await prisma.refLog.create({
     *   data: {
     *     // ... data to create a RefLog
     *   }
     * })
     * 
     */
    create<T extends RefLogCreateArgs>(args: SelectSubset<T, RefLogCreateArgs<ExtArgs>>): Prisma__RefLogClient<$Result.GetResult<Prisma.$RefLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RefLogs.
     * @param {RefLogCreateManyArgs} args - Arguments to create many RefLogs.
     * @example
     * // Create many RefLogs
     * const refLog = await prisma.refLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefLogCreateManyArgs>(args?: SelectSubset<T, RefLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefLogs and returns the data saved in the database.
     * @param {RefLogCreateManyAndReturnArgs} args - Arguments to create many RefLogs.
     * @example
     * // Create many RefLogs
     * const refLog = await prisma.refLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefLogs and only return the `id`
     * const refLogWithIdOnly = await prisma.refLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefLogCreateManyAndReturnArgs>(args?: SelectSubset<T, RefLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RefLog.
     * @param {RefLogDeleteArgs} args - Arguments to delete one RefLog.
     * @example
     * // Delete one RefLog
     * const RefLog = await prisma.refLog.delete({
     *   where: {
     *     // ... filter to delete one RefLog
     *   }
     * })
     * 
     */
    delete<T extends RefLogDeleteArgs>(args: SelectSubset<T, RefLogDeleteArgs<ExtArgs>>): Prisma__RefLogClient<$Result.GetResult<Prisma.$RefLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RefLog.
     * @param {RefLogUpdateArgs} args - Arguments to update one RefLog.
     * @example
     * // Update one RefLog
     * const refLog = await prisma.refLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefLogUpdateArgs>(args: SelectSubset<T, RefLogUpdateArgs<ExtArgs>>): Prisma__RefLogClient<$Result.GetResult<Prisma.$RefLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RefLogs.
     * @param {RefLogDeleteManyArgs} args - Arguments to filter RefLogs to delete.
     * @example
     * // Delete a few RefLogs
     * const { count } = await prisma.refLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefLogDeleteManyArgs>(args?: SelectSubset<T, RefLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefLogs
     * const refLog = await prisma.refLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefLogUpdateManyArgs>(args: SelectSubset<T, RefLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RefLog.
     * @param {RefLogUpsertArgs} args - Arguments to update or create a RefLog.
     * @example
     * // Update or create a RefLog
     * const refLog = await prisma.refLog.upsert({
     *   create: {
     *     // ... data to create a RefLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefLog we want to update
     *   }
     * })
     */
    upsert<T extends RefLogUpsertArgs>(args: SelectSubset<T, RefLogUpsertArgs<ExtArgs>>): Prisma__RefLogClient<$Result.GetResult<Prisma.$RefLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RefLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefLogCountArgs} args - Arguments to filter RefLogs to count.
     * @example
     * // Count the number of RefLogs
     * const count = await prisma.refLog.count({
     *   where: {
     *     // ... the filter for the RefLogs we want to count
     *   }
     * })
    **/
    count<T extends RefLogCountArgs>(
      args?: Subset<T, RefLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefLogAggregateArgs>(args: Subset<T, RefLogAggregateArgs>): Prisma.PrismaPromise<GetRefLogAggregateType<T>>

    /**
     * Group by RefLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefLogGroupByArgs} args - Group by arguments.
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
      T extends RefLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefLogGroupByArgs['orderBy'] }
        : { orderBy?: RefLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefLog model
   */
  readonly fields: RefLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends RefLog$userArgs<ExtArgs> = {}>(args?: Subset<T, RefLog$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the RefLog model
   */ 
  interface RefLogFieldRefs {
    readonly id: FieldRef<"RefLog", 'Int'>
    readonly pointGet: FieldRef<"RefLog", 'Int'>
    readonly createdAt: FieldRef<"RefLog", 'DateTime'>
    readonly expiredAt: FieldRef<"RefLog", 'DateTime'>
    readonly isUsed: FieldRef<"RefLog", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * RefLog findUnique
   */
  export type RefLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefLog
     */
    select?: RefLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefLogInclude<ExtArgs> | null
    /**
     * Filter, which RefLog to fetch.
     */
    where: RefLogWhereUniqueInput
  }

  /**
   * RefLog findUniqueOrThrow
   */
  export type RefLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefLog
     */
    select?: RefLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefLogInclude<ExtArgs> | null
    /**
     * Filter, which RefLog to fetch.
     */
    where: RefLogWhereUniqueInput
  }

  /**
   * RefLog findFirst
   */
  export type RefLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefLog
     */
    select?: RefLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefLogInclude<ExtArgs> | null
    /**
     * Filter, which RefLog to fetch.
     */
    where?: RefLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefLogs to fetch.
     */
    orderBy?: RefLogOrderByWithRelationInput | RefLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefLogs.
     */
    cursor?: RefLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefLogs.
     */
    distinct?: RefLogScalarFieldEnum | RefLogScalarFieldEnum[]
  }

  /**
   * RefLog findFirstOrThrow
   */
  export type RefLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefLog
     */
    select?: RefLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefLogInclude<ExtArgs> | null
    /**
     * Filter, which RefLog to fetch.
     */
    where?: RefLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefLogs to fetch.
     */
    orderBy?: RefLogOrderByWithRelationInput | RefLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefLogs.
     */
    cursor?: RefLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefLogs.
     */
    distinct?: RefLogScalarFieldEnum | RefLogScalarFieldEnum[]
  }

  /**
   * RefLog findMany
   */
  export type RefLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefLog
     */
    select?: RefLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefLogInclude<ExtArgs> | null
    /**
     * Filter, which RefLogs to fetch.
     */
    where?: RefLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefLogs to fetch.
     */
    orderBy?: RefLogOrderByWithRelationInput | RefLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefLogs.
     */
    cursor?: RefLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefLogs.
     */
    skip?: number
    distinct?: RefLogScalarFieldEnum | RefLogScalarFieldEnum[]
  }

  /**
   * RefLog create
   */
  export type RefLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefLog
     */
    select?: RefLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefLogInclude<ExtArgs> | null
    /**
     * The data needed to create a RefLog.
     */
    data: XOR<RefLogCreateInput, RefLogUncheckedCreateInput>
  }

  /**
   * RefLog createMany
   */
  export type RefLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefLogs.
     */
    data: RefLogCreateManyInput | RefLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefLog createManyAndReturn
   */
  export type RefLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefLog
     */
    select?: RefLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RefLogs.
     */
    data: RefLogCreateManyInput | RefLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefLog update
   */
  export type RefLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefLog
     */
    select?: RefLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefLogInclude<ExtArgs> | null
    /**
     * The data needed to update a RefLog.
     */
    data: XOR<RefLogUpdateInput, RefLogUncheckedUpdateInput>
    /**
     * Choose, which RefLog to update.
     */
    where: RefLogWhereUniqueInput
  }

  /**
   * RefLog updateMany
   */
  export type RefLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefLogs.
     */
    data: XOR<RefLogUpdateManyMutationInput, RefLogUncheckedUpdateManyInput>
    /**
     * Filter which RefLogs to update
     */
    where?: RefLogWhereInput
  }

  /**
   * RefLog upsert
   */
  export type RefLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefLog
     */
    select?: RefLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefLogInclude<ExtArgs> | null
    /**
     * The filter to search for the RefLog to update in case it exists.
     */
    where: RefLogWhereUniqueInput
    /**
     * In case the RefLog found by the `where` argument doesn't exist, create a new RefLog with this data.
     */
    create: XOR<RefLogCreateInput, RefLogUncheckedCreateInput>
    /**
     * In case the RefLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefLogUpdateInput, RefLogUncheckedUpdateInput>
  }

  /**
   * RefLog delete
   */
  export type RefLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefLog
     */
    select?: RefLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefLogInclude<ExtArgs> | null
    /**
     * Filter which RefLog to delete.
     */
    where: RefLogWhereUniqueInput
  }

  /**
   * RefLog deleteMany
   */
  export type RefLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefLogs to delete
     */
    where?: RefLogWhereInput
  }

  /**
   * RefLog.user
   */
  export type RefLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * RefLog without action
   */
  export type RefLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefLog
     */
    select?: RefLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefLogInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
  }

  export type EventSumAggregateOutputType = {
    id: number | null
  }

  export type EventMinAggregateOutputType = {
    id: number | null
    title: string | null
    category: $Enums.Category | null
    location: $Enums.Location | null
    venue: string | null
    description: string | null
    date: Date | null
    time: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    promotorId: string | null
    thumbnail: string | null
    slug: string | null
  }

  export type EventMaxAggregateOutputType = {
    id: number | null
    title: string | null
    category: $Enums.Category | null
    location: $Enums.Location | null
    venue: string | null
    description: string | null
    date: Date | null
    time: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    promotorId: string | null
    thumbnail: string | null
    slug: string | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    category: number
    location: number
    venue: number
    description: number
    date: number
    time: number
    createdAt: number
    updatedAt: number
    promotorId: number
    thumbnail: number
    slug: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    category?: true
    location?: true
    venue?: true
    description?: true
    date?: true
    time?: true
    createdAt?: true
    updatedAt?: true
    promotorId?: true
    thumbnail?: true
    slug?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    category?: true
    location?: true
    venue?: true
    description?: true
    date?: true
    time?: true
    createdAt?: true
    updatedAt?: true
    promotorId?: true
    thumbnail?: true
    slug?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    category?: true
    location?: true
    venue?: true
    description?: true
    date?: true
    time?: true
    createdAt?: true
    updatedAt?: true
    promotorId?: true
    thumbnail?: true
    slug?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: number
    title: string
    category: $Enums.Category
    location: $Enums.Location
    venue: string
    description: string
    date: Date
    time: Date
    createdAt: Date
    updatedAt: Date
    promotorId: string | null
    thumbnail: string | null
    slug: string
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    location?: boolean
    venue?: boolean
    description?: boolean
    date?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    promotorId?: boolean
    thumbnail?: boolean
    slug?: boolean
    promotor?: boolean | Event$promotorArgs<ExtArgs>
    orders?: boolean | Event$ordersArgs<ExtArgs>
    tickets?: boolean | Event$ticketsArgs<ExtArgs>
    reviews?: boolean | Event$reviewsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    location?: boolean
    venue?: boolean
    description?: boolean
    date?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    promotorId?: boolean
    thumbnail?: boolean
    slug?: boolean
    promotor?: boolean | Event$promotorArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    category?: boolean
    location?: boolean
    venue?: boolean
    description?: boolean
    date?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    promotorId?: boolean
    thumbnail?: boolean
    slug?: boolean
  }

  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promotor?: boolean | Event$promotorArgs<ExtArgs>
    orders?: boolean | Event$ordersArgs<ExtArgs>
    tickets?: boolean | Event$ticketsArgs<ExtArgs>
    reviews?: boolean | Event$reviewsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promotor?: boolean | Event$promotorArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      promotor: Prisma.$PromotorPayload<ExtArgs> | null
      orders: Prisma.$OrderPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      reviews: Prisma.$ReviewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      category: $Enums.Category
      location: $Enums.Location
      venue: string
      description: string
      date: Date
      time: Date
      createdAt: Date
      updatedAt: Date
      promotorId: string | null
      thumbnail: string | null
      slug: string
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    promotor<T extends Event$promotorArgs<ExtArgs> = {}>(args?: Subset<T, Event$promotorArgs<ExtArgs>>): Prisma__PromotorClient<$Result.GetResult<Prisma.$PromotorPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    orders<T extends Event$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Event$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    tickets<T extends Event$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Event$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany"> | Null>
    reviews<T extends Event$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Event$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Event model
   */ 
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'Int'>
    readonly title: FieldRef<"Event", 'String'>
    readonly category: FieldRef<"Event", 'Category'>
    readonly location: FieldRef<"Event", 'Location'>
    readonly venue: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly date: FieldRef<"Event", 'DateTime'>
    readonly time: FieldRef<"Event", 'DateTime'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
    readonly promotorId: FieldRef<"Event", 'String'>
    readonly thumbnail: FieldRef<"Event", 'String'>
    readonly slug: FieldRef<"Event", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
  }

  /**
   * Event.promotor
   */
  export type Event$promotorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotor
     */
    select?: PromotorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotorInclude<ExtArgs> | null
    where?: PromotorWhereInput
  }

  /**
   * Event.orders
   */
  export type Event$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Event.tickets
   */
  export type Event$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Event.reviews
   */
  export type Event$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    eventId: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    id: number | null
    rating: number | null
    eventId: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    id: number | null
    comment: string | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    eventId: number | null
  }

  export type ReviewsMaxAggregateOutputType = {
    id: number | null
    comment: string | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    eventId: number | null
  }

  export type ReviewsCountAggregateOutputType = {
    id: number
    comment: number
    rating: number
    createdAt: number
    updatedAt: number
    userId: number
    eventId: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    id?: true
    rating?: true
    eventId?: true
  }

  export type ReviewsSumAggregateInputType = {
    id?: true
    rating?: true
    eventId?: true
  }

  export type ReviewsMinAggregateInputType = {
    id?: true
    comment?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    eventId?: true
  }

  export type ReviewsMaxAggregateInputType = {
    id?: true
    comment?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    eventId?: true
  }

  export type ReviewsCountAggregateInputType = {
    id?: true
    comment?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    eventId?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to aggregate.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type ReviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithAggregationInput | ReviewsOrderByWithAggregationInput[]
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum
    having?: ReviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }

  export type ReviewsGroupByOutputType = {
    id: number
    comment: string
    rating: number
    createdAt: Date
    updatedAt: Date
    userId: string | null
    eventId: number | null
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends ReviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type ReviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    eventId?: boolean
    user?: boolean | Reviews$userArgs<ExtArgs>
    event?: boolean | Reviews$eventArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    eventId?: boolean
    user?: boolean | Reviews$userArgs<ExtArgs>
    event?: boolean | Reviews$eventArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectScalar = {
    id?: boolean
    comment?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    eventId?: boolean
  }

  export type ReviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Reviews$userArgs<ExtArgs>
    event?: boolean | Reviews$eventArgs<ExtArgs>
  }
  export type ReviewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Reviews$userArgs<ExtArgs>
    event?: boolean | Reviews$eventArgs<ExtArgs>
  }

  export type $ReviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reviews"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      event: Prisma.$EventPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      comment: string
      rating: number
      createdAt: Date
      updatedAt: Date
      userId: string | null
      eventId: number | null
    }, ExtArgs["result"]["reviews"]>
    composites: {}
  }

  type ReviewsGetPayload<S extends boolean | null | undefined | ReviewsDefaultArgs> = $Result.GetResult<Prisma.$ReviewsPayload, S>

  type ReviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface ReviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reviews'], meta: { name: 'Reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {ReviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewsFindUniqueArgs>(args: SelectSubset<T, ReviewsFindUniqueArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Reviews that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewsFindFirstArgs>(args?: SelectSubset<T, ReviewsFindFirstArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewsWithIdOnly = await prisma.reviews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewsFindManyArgs>(args?: SelectSubset<T, ReviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Reviews.
     * @param {ReviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
     */
    create<T extends ReviewsCreateArgs>(args: SelectSubset<T, ReviewsCreateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reviews.
     * @param {ReviewsCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewsCreateManyArgs>(args?: SelectSubset<T, ReviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewsCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewsCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Reviews.
     * @param {ReviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
     */
    delete<T extends ReviewsDeleteArgs>(args: SelectSubset<T, ReviewsDeleteArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Reviews.
     * @param {ReviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewsUpdateArgs>(args: SelectSubset<T, ReviewsUpdateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewsDeleteManyArgs>(args?: SelectSubset<T, ReviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewsUpdateManyArgs>(args: SelectSubset<T, ReviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reviews.
     * @param {ReviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
     */
    upsert<T extends ReviewsUpsertArgs>(args: SelectSubset<T, ReviewsUpsertArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewsCountArgs>(
      args?: Subset<T, ReviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsGroupByArgs} args - Group by arguments.
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
      T extends ReviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewsGroupByArgs['orderBy'] }
        : { orderBy?: ReviewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reviews model
   */
  readonly fields: ReviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Reviews$userArgs<ExtArgs> = {}>(args?: Subset<T, Reviews$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    event<T extends Reviews$eventArgs<ExtArgs> = {}>(args?: Subset<T, Reviews$eventArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Reviews model
   */ 
  interface ReviewsFieldRefs {
    readonly id: FieldRef<"Reviews", 'Int'>
    readonly comment: FieldRef<"Reviews", 'String'>
    readonly rating: FieldRef<"Reviews", 'Int'>
    readonly createdAt: FieldRef<"Reviews", 'DateTime'>
    readonly updatedAt: FieldRef<"Reviews", 'DateTime'>
    readonly userId: FieldRef<"Reviews", 'String'>
    readonly eventId: FieldRef<"Reviews", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Reviews findUnique
   */
  export type ReviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findUniqueOrThrow
   */
  export type ReviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findFirst
   */
  export type ReviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findFirstOrThrow
   */
  export type ReviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findMany
   */
  export type ReviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews create
   */
  export type ReviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a Reviews.
     */
    data: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
  }

  /**
   * Reviews createMany
   */
  export type ReviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reviews createManyAndReturn
   */
  export type ReviewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reviews update
   */
  export type ReviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a Reviews.
     */
    data: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
    /**
     * Choose, which Reviews to update.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews updateMany
   */
  export type ReviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
  }

  /**
   * Reviews upsert
   */
  export type ReviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the Reviews to update in case it exists.
     */
    where: ReviewsWhereUniqueInput
    /**
     * In case the Reviews found by the `where` argument doesn't exist, create a new Reviews with this data.
     */
    create: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
    /**
     * In case the Reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
  }

  /**
   * Reviews delete
   */
  export type ReviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter which Reviews to delete.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews deleteMany
   */
  export type ReviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewsWhereInput
  }

  /**
   * Reviews.user
   */
  export type Reviews$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Reviews.event
   */
  export type Reviews$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
  }

  /**
   * Reviews without action
   */
  export type ReviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    totalPrice: number | null
    finalPrice: number | null
    eventId: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    totalPrice: number | null
    finalPrice: number | null
    eventId: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    totalPrice: number | null
    finalPrice: number | null
    paymentProof: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    eventId: number | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    totalPrice: number | null
    finalPrice: number | null
    paymentProof: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    eventId: number | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    totalPrice: number
    finalPrice: number
    paymentProof: number
    status: number
    createdAt: number
    updatedAt: number
    userId: number
    eventId: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    totalPrice?: true
    finalPrice?: true
    eventId?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    totalPrice?: true
    finalPrice?: true
    eventId?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    totalPrice?: true
    finalPrice?: true
    paymentProof?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    eventId?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    totalPrice?: true
    finalPrice?: true
    paymentProof?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    eventId?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    totalPrice?: true
    finalPrice?: true
    paymentProof?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    eventId?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    totalPrice: number
    finalPrice: number
    paymentProof: string | null
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    userId: string | null
    eventId: number | null
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalPrice?: boolean
    finalPrice?: boolean
    paymentProof?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    eventId?: boolean
    event?: boolean | Order$eventArgs<ExtArgs>
    user?: boolean | Order$userArgs<ExtArgs>
    details?: boolean | Order$detailsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalPrice?: boolean
    finalPrice?: boolean
    paymentProof?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    eventId?: boolean
    event?: boolean | Order$eventArgs<ExtArgs>
    user?: boolean | Order$userArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    totalPrice?: boolean
    finalPrice?: boolean
    paymentProof?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    eventId?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | Order$eventArgs<ExtArgs>
    user?: boolean | Order$userArgs<ExtArgs>
    details?: boolean | Order$detailsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | Order$eventArgs<ExtArgs>
    user?: boolean | Order$userArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      event: Prisma.$EventPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
      details: Prisma.$OrderDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      totalPrice: number
      finalPrice: number
      paymentProof: string | null
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
      userId: string | null
      eventId: number | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends Order$eventArgs<ExtArgs> = {}>(args?: Subset<T, Order$eventArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    user<T extends Order$userArgs<ExtArgs> = {}>(args?: Subset<T, Order$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    details<T extends Order$detailsArgs<ExtArgs> = {}>(args?: Subset<T, Order$detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly totalPrice: FieldRef<"Order", 'Int'>
    readonly finalPrice: FieldRef<"Order", 'Int'>
    readonly paymentProof: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'Status'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly eventId: FieldRef<"Order", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }

  /**
   * Order.event
   */
  export type Order$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
  }

  /**
   * Order.user
   */
  export type Order$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Order.details
   */
  export type Order$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    where?: OrderDetailWhereInput
    orderBy?: OrderDetailOrderByWithRelationInput | OrderDetailOrderByWithRelationInput[]
    cursor?: OrderDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderDetailScalarFieldEnum | OrderDetailScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
    price: number | null
    eventId: number | null
    orderDetailId: number | null
    quantity: number | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
    price: number | null
    eventId: number | null
    orderDetailId: number | null
    quantity: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    category: string | null
    price: number | null
    eventId: number | null
    orderDetailId: number | null
    quantity: number | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    category: string | null
    price: number | null
    eventId: number | null
    orderDetailId: number | null
    quantity: number | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    category: number
    price: number
    eventId: number
    orderDetailId: number
    quantity: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
    price?: true
    eventId?: true
    orderDetailId?: true
    quantity?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
    price?: true
    eventId?: true
    orderDetailId?: true
    quantity?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    category?: true
    price?: true
    eventId?: true
    orderDetailId?: true
    quantity?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    category?: true
    price?: true
    eventId?: true
    orderDetailId?: true
    quantity?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    category?: true
    price?: true
    eventId?: true
    orderDetailId?: true
    quantity?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    category: string
    price: number
    eventId: number | null
    orderDetailId: number | null
    quantity: number
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    price?: boolean
    eventId?: boolean
    orderDetailId?: boolean
    quantity?: boolean
    event?: boolean | Ticket$eventArgs<ExtArgs>
    orderDetail?: boolean | Ticket$orderDetailArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    price?: boolean
    eventId?: boolean
    orderDetailId?: boolean
    quantity?: boolean
    event?: boolean | Ticket$eventArgs<ExtArgs>
    orderDetail?: boolean | Ticket$orderDetailArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    category?: boolean
    price?: boolean
    eventId?: boolean
    orderDetailId?: boolean
    quantity?: boolean
  }

  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | Ticket$eventArgs<ExtArgs>
    orderDetail?: boolean | Ticket$orderDetailArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | Ticket$eventArgs<ExtArgs>
    orderDetail?: boolean | Ticket$orderDetailArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      event: Prisma.$EventPayload<ExtArgs> | null
      orderDetail: Prisma.$OrderDetailPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category: string
      price: number
      eventId: number | null
      orderDetailId: number | null
      quantity: number
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
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
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends Ticket$eventArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$eventArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    orderDetail<T extends Ticket$orderDetailArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$orderDetailArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Ticket model
   */ 
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'Int'>
    readonly category: FieldRef<"Ticket", 'String'>
    readonly price: FieldRef<"Ticket", 'Int'>
    readonly eventId: FieldRef<"Ticket", 'Int'>
    readonly orderDetailId: FieldRef<"Ticket", 'Int'>
    readonly quantity: FieldRef<"Ticket", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
  }

  /**
   * Ticket.event
   */
  export type Ticket$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
  }

  /**
   * Ticket.orderDetail
   */
  export type Ticket$orderDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    where?: OrderDetailWhereInput
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model OrderDetail
   */

  export type AggregateOrderDetail = {
    _count: OrderDetailCountAggregateOutputType | null
    _avg: OrderDetailAvgAggregateOutputType | null
    _sum: OrderDetailSumAggregateOutputType | null
    _min: OrderDetailMinAggregateOutputType | null
    _max: OrderDetailMaxAggregateOutputType | null
  }

  export type OrderDetailAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    orderId: number | null
    userCouponId: number | null
  }

  export type OrderDetailSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    orderId: number | null
    userCouponId: number | null
  }

  export type OrderDetailMinAggregateOutputType = {
    id: number | null
    quantity: number | null
    orderId: number | null
    userCouponId: number | null
  }

  export type OrderDetailMaxAggregateOutputType = {
    id: number | null
    quantity: number | null
    orderId: number | null
    userCouponId: number | null
  }

  export type OrderDetailCountAggregateOutputType = {
    id: number
    quantity: number
    orderId: number
    userCouponId: number
    _all: number
  }


  export type OrderDetailAvgAggregateInputType = {
    id?: true
    quantity?: true
    orderId?: true
    userCouponId?: true
  }

  export type OrderDetailSumAggregateInputType = {
    id?: true
    quantity?: true
    orderId?: true
    userCouponId?: true
  }

  export type OrderDetailMinAggregateInputType = {
    id?: true
    quantity?: true
    orderId?: true
    userCouponId?: true
  }

  export type OrderDetailMaxAggregateInputType = {
    id?: true
    quantity?: true
    orderId?: true
    userCouponId?: true
  }

  export type OrderDetailCountAggregateInputType = {
    id?: true
    quantity?: true
    orderId?: true
    userCouponId?: true
    _all?: true
  }

  export type OrderDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderDetail to aggregate.
     */
    where?: OrderDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailOrderByWithRelationInput | OrderDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderDetails
    **/
    _count?: true | OrderDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderDetailMaxAggregateInputType
  }

  export type GetOrderDetailAggregateType<T extends OrderDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderDetail[P]>
      : GetScalarType<T[P], AggregateOrderDetail[P]>
  }




  export type OrderDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailWhereInput
    orderBy?: OrderDetailOrderByWithAggregationInput | OrderDetailOrderByWithAggregationInput[]
    by: OrderDetailScalarFieldEnum[] | OrderDetailScalarFieldEnum
    having?: OrderDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderDetailCountAggregateInputType | true
    _avg?: OrderDetailAvgAggregateInputType
    _sum?: OrderDetailSumAggregateInputType
    _min?: OrderDetailMinAggregateInputType
    _max?: OrderDetailMaxAggregateInputType
  }

  export type OrderDetailGroupByOutputType = {
    id: number
    quantity: number
    orderId: number | null
    userCouponId: number | null
    _count: OrderDetailCountAggregateOutputType | null
    _avg: OrderDetailAvgAggregateOutputType | null
    _sum: OrderDetailSumAggregateOutputType | null
    _min: OrderDetailMinAggregateOutputType | null
    _max: OrderDetailMaxAggregateOutputType | null
  }

  type GetOrderDetailGroupByPayload<T extends OrderDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderDetailGroupByOutputType[P]>
            : GetScalarType<T[P], OrderDetailGroupByOutputType[P]>
        }
      >
    >


  export type OrderDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    orderId?: boolean
    userCouponId?: boolean
    order?: boolean | OrderDetail$orderArgs<ExtArgs>
    UserCoupon?: boolean | OrderDetail$UserCouponArgs<ExtArgs>
    tickets?: boolean | OrderDetail$ticketsArgs<ExtArgs>
    _count?: boolean | OrderDetailCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderDetail"]>

  export type OrderDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    orderId?: boolean
    userCouponId?: boolean
    order?: boolean | OrderDetail$orderArgs<ExtArgs>
    UserCoupon?: boolean | OrderDetail$UserCouponArgs<ExtArgs>
  }, ExtArgs["result"]["orderDetail"]>

  export type OrderDetailSelectScalar = {
    id?: boolean
    quantity?: boolean
    orderId?: boolean
    userCouponId?: boolean
  }

  export type OrderDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDetail$orderArgs<ExtArgs>
    UserCoupon?: boolean | OrderDetail$UserCouponArgs<ExtArgs>
    tickets?: boolean | OrderDetail$ticketsArgs<ExtArgs>
    _count?: boolean | OrderDetailCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDetail$orderArgs<ExtArgs>
    UserCoupon?: boolean | OrderDetail$UserCouponArgs<ExtArgs>
  }

  export type $OrderDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderDetail"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs> | null
      UserCoupon: Prisma.$UserCouponPayload<ExtArgs> | null
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantity: number
      orderId: number | null
      userCouponId: number | null
    }, ExtArgs["result"]["orderDetail"]>
    composites: {}
  }

  type OrderDetailGetPayload<S extends boolean | null | undefined | OrderDetailDefaultArgs> = $Result.GetResult<Prisma.$OrderDetailPayload, S>

  type OrderDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderDetailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderDetailCountAggregateInputType | true
    }

  export interface OrderDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderDetail'], meta: { name: 'OrderDetail' } }
    /**
     * Find zero or one OrderDetail that matches the filter.
     * @param {OrderDetailFindUniqueArgs} args - Arguments to find a OrderDetail
     * @example
     * // Get one OrderDetail
     * const orderDetail = await prisma.orderDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderDetailFindUniqueArgs>(args: SelectSubset<T, OrderDetailFindUniqueArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OrderDetail that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderDetailFindUniqueOrThrowArgs} args - Arguments to find a OrderDetail
     * @example
     * // Get one OrderDetail
     * const orderDetail = await prisma.orderDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OrderDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailFindFirstArgs} args - Arguments to find a OrderDetail
     * @example
     * // Get one OrderDetail
     * const orderDetail = await prisma.orderDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderDetailFindFirstArgs>(args?: SelectSubset<T, OrderDetailFindFirstArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OrderDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailFindFirstOrThrowArgs} args - Arguments to find a OrderDetail
     * @example
     * // Get one OrderDetail
     * const orderDetail = await prisma.orderDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OrderDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderDetails
     * const orderDetails = await prisma.orderDetail.findMany()
     * 
     * // Get first 10 OrderDetails
     * const orderDetails = await prisma.orderDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderDetailWithIdOnly = await prisma.orderDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderDetailFindManyArgs>(args?: SelectSubset<T, OrderDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OrderDetail.
     * @param {OrderDetailCreateArgs} args - Arguments to create a OrderDetail.
     * @example
     * // Create one OrderDetail
     * const OrderDetail = await prisma.orderDetail.create({
     *   data: {
     *     // ... data to create a OrderDetail
     *   }
     * })
     * 
     */
    create<T extends OrderDetailCreateArgs>(args: SelectSubset<T, OrderDetailCreateArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OrderDetails.
     * @param {OrderDetailCreateManyArgs} args - Arguments to create many OrderDetails.
     * @example
     * // Create many OrderDetails
     * const orderDetail = await prisma.orderDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderDetailCreateManyArgs>(args?: SelectSubset<T, OrderDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderDetails and returns the data saved in the database.
     * @param {OrderDetailCreateManyAndReturnArgs} args - Arguments to create many OrderDetails.
     * @example
     * // Create many OrderDetails
     * const orderDetail = await prisma.orderDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderDetails and only return the `id`
     * const orderDetailWithIdOnly = await prisma.orderDetail.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OrderDetail.
     * @param {OrderDetailDeleteArgs} args - Arguments to delete one OrderDetail.
     * @example
     * // Delete one OrderDetail
     * const OrderDetail = await prisma.orderDetail.delete({
     *   where: {
     *     // ... filter to delete one OrderDetail
     *   }
     * })
     * 
     */
    delete<T extends OrderDetailDeleteArgs>(args: SelectSubset<T, OrderDetailDeleteArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OrderDetail.
     * @param {OrderDetailUpdateArgs} args - Arguments to update one OrderDetail.
     * @example
     * // Update one OrderDetail
     * const orderDetail = await prisma.orderDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderDetailUpdateArgs>(args: SelectSubset<T, OrderDetailUpdateArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OrderDetails.
     * @param {OrderDetailDeleteManyArgs} args - Arguments to filter OrderDetails to delete.
     * @example
     * // Delete a few OrderDetails
     * const { count } = await prisma.orderDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDetailDeleteManyArgs>(args?: SelectSubset<T, OrderDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderDetails
     * const orderDetail = await prisma.orderDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderDetailUpdateManyArgs>(args: SelectSubset<T, OrderDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderDetail.
     * @param {OrderDetailUpsertArgs} args - Arguments to update or create a OrderDetail.
     * @example
     * // Update or create a OrderDetail
     * const orderDetail = await prisma.orderDetail.upsert({
     *   create: {
     *     // ... data to create a OrderDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderDetail we want to update
     *   }
     * })
     */
    upsert<T extends OrderDetailUpsertArgs>(args: SelectSubset<T, OrderDetailUpsertArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailCountArgs} args - Arguments to filter OrderDetails to count.
     * @example
     * // Count the number of OrderDetails
     * const count = await prisma.orderDetail.count({
     *   where: {
     *     // ... the filter for the OrderDetails we want to count
     *   }
     * })
    **/
    count<T extends OrderDetailCountArgs>(
      args?: Subset<T, OrderDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderDetailAggregateArgs>(args: Subset<T, OrderDetailAggregateArgs>): Prisma.PrismaPromise<GetOrderDetailAggregateType<T>>

    /**
     * Group by OrderDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailGroupByArgs} args - Group by arguments.
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
      T extends OrderDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderDetailGroupByArgs['orderBy'] }
        : { orderBy?: OrderDetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderDetail model
   */
  readonly fields: OrderDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDetail$orderArgs<ExtArgs> = {}>(args?: Subset<T, OrderDetail$orderArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    UserCoupon<T extends OrderDetail$UserCouponArgs<ExtArgs> = {}>(args?: Subset<T, OrderDetail$UserCouponArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    tickets<T extends OrderDetail$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, OrderDetail$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the OrderDetail model
   */ 
  interface OrderDetailFieldRefs {
    readonly id: FieldRef<"OrderDetail", 'Int'>
    readonly quantity: FieldRef<"OrderDetail", 'Int'>
    readonly orderId: FieldRef<"OrderDetail", 'Int'>
    readonly userCouponId: FieldRef<"OrderDetail", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OrderDetail findUnique
   */
  export type OrderDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetail to fetch.
     */
    where: OrderDetailWhereUniqueInput
  }

  /**
   * OrderDetail findUniqueOrThrow
   */
  export type OrderDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetail to fetch.
     */
    where: OrderDetailWhereUniqueInput
  }

  /**
   * OrderDetail findFirst
   */
  export type OrderDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetail to fetch.
     */
    where?: OrderDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailOrderByWithRelationInput | OrderDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderDetails.
     */
    cursor?: OrderDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderDetails.
     */
    distinct?: OrderDetailScalarFieldEnum | OrderDetailScalarFieldEnum[]
  }

  /**
   * OrderDetail findFirstOrThrow
   */
  export type OrderDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetail to fetch.
     */
    where?: OrderDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailOrderByWithRelationInput | OrderDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderDetails.
     */
    cursor?: OrderDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderDetails.
     */
    distinct?: OrderDetailScalarFieldEnum | OrderDetailScalarFieldEnum[]
  }

  /**
   * OrderDetail findMany
   */
  export type OrderDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailOrderByWithRelationInput | OrderDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderDetails.
     */
    cursor?: OrderDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    distinct?: OrderDetailScalarFieldEnum | OrderDetailScalarFieldEnum[]
  }

  /**
   * OrderDetail create
   */
  export type OrderDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderDetail.
     */
    data: XOR<OrderDetailCreateInput, OrderDetailUncheckedCreateInput>
  }

  /**
   * OrderDetail createMany
   */
  export type OrderDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderDetails.
     */
    data: OrderDetailCreateManyInput | OrderDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderDetail createManyAndReturn
   */
  export type OrderDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OrderDetails.
     */
    data: OrderDetailCreateManyInput | OrderDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderDetail update
   */
  export type OrderDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderDetail.
     */
    data: XOR<OrderDetailUpdateInput, OrderDetailUncheckedUpdateInput>
    /**
     * Choose, which OrderDetail to update.
     */
    where: OrderDetailWhereUniqueInput
  }

  /**
   * OrderDetail updateMany
   */
  export type OrderDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderDetails.
     */
    data: XOR<OrderDetailUpdateManyMutationInput, OrderDetailUncheckedUpdateManyInput>
    /**
     * Filter which OrderDetails to update
     */
    where?: OrderDetailWhereInput
  }

  /**
   * OrderDetail upsert
   */
  export type OrderDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderDetail to update in case it exists.
     */
    where: OrderDetailWhereUniqueInput
    /**
     * In case the OrderDetail found by the `where` argument doesn't exist, create a new OrderDetail with this data.
     */
    create: XOR<OrderDetailCreateInput, OrderDetailUncheckedCreateInput>
    /**
     * In case the OrderDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderDetailUpdateInput, OrderDetailUncheckedUpdateInput>
  }

  /**
   * OrderDetail delete
   */
  export type OrderDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * Filter which OrderDetail to delete.
     */
    where: OrderDetailWhereUniqueInput
  }

  /**
   * OrderDetail deleteMany
   */
  export type OrderDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderDetails to delete
     */
    where?: OrderDetailWhereInput
  }

  /**
   * OrderDetail.order
   */
  export type OrderDetail$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
  }

  /**
   * OrderDetail.UserCoupon
   */
  export type OrderDetail$UserCouponArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    where?: UserCouponWhereInput
  }

  /**
   * OrderDetail.tickets
   */
  export type OrderDetail$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * OrderDetail without action
   */
  export type OrderDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    isVerify: 'isVerify',
    refCode: 'refCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    points: 'points',
    refCodeBy: 'refCodeBy',
    refLogId: 'refLogId',
    percentage: 'percentage',
    userCouponId: 'userCouponId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PromotorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    isVerify: 'isVerify',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PromotorScalarFieldEnum = (typeof PromotorScalarFieldEnum)[keyof typeof PromotorScalarFieldEnum]


  export const UserCouponScalarFieldEnum: {
    id: 'id',
    isRedeem: 'isRedeem',
    percentage: 'percentage',
    expiredAt: 'expiredAt'
  };

  export type UserCouponScalarFieldEnum = (typeof UserCouponScalarFieldEnum)[keyof typeof UserCouponScalarFieldEnum]


  export const RefLogScalarFieldEnum: {
    id: 'id',
    pointGet: 'pointGet',
    createdAt: 'createdAt',
    expiredAt: 'expiredAt',
    isUsed: 'isUsed'
  };

  export type RefLogScalarFieldEnum = (typeof RefLogScalarFieldEnum)[keyof typeof RefLogScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    category: 'category',
    location: 'location',
    venue: 'venue',
    description: 'description',
    date: 'date',
    time: 'time',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    promotorId: 'promotorId',
    thumbnail: 'thumbnail',
    slug: 'slug'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
    id: 'id',
    comment: 'comment',
    rating: 'rating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    eventId: 'eventId'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    totalPrice: 'totalPrice',
    finalPrice: 'finalPrice',
    paymentProof: 'paymentProof',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    eventId: 'eventId'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    category: 'category',
    price: 'price',
    eventId: 'eventId',
    orderDetailId: 'orderDetailId',
    quantity: 'quantity'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const OrderDetailScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    orderId: 'orderId',
    userCouponId: 'userCouponId'
  };

  export type OrderDetailScalarFieldEnum = (typeof OrderDetailScalarFieldEnum)[keyof typeof OrderDetailScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'Location'
   */
  export type EnumLocationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Location'>
    


  /**
   * Reference to a field of type 'Location[]'
   */
  export type ListEnumLocationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Location[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    isVerify?: BoolFilter<"User"> | boolean
    refCode?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    points?: IntFilter<"User"> | number
    refCodeBy?: StringNullableFilter<"User"> | string | null
    refLogId?: IntNullableFilter<"User"> | number | null
    percentage?: FloatNullableFilter<"User"> | number | null
    userCouponId?: IntNullableFilter<"User"> | number | null
    orders?: OrderListRelationFilter
    reviews?: ReviewsListRelationFilter
    RefLog?: XOR<RefLogNullableScalarRelationFilter, RefLogWhereInput> | null
    usercoupon?: XOR<UserCouponNullableScalarRelationFilter, UserCouponWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    isVerify?: SortOrder
    refCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    points?: SortOrder
    refCodeBy?: SortOrderInput | SortOrder
    refLogId?: SortOrderInput | SortOrder
    percentage?: SortOrderInput | SortOrder
    userCouponId?: SortOrderInput | SortOrder
    orders?: OrderOrderByRelationAggregateInput
    reviews?: ReviewsOrderByRelationAggregateInput
    RefLog?: RefLogOrderByWithRelationInput
    usercoupon?: UserCouponOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    refCode?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    isVerify?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    points?: IntFilter<"User"> | number
    refCodeBy?: StringNullableFilter<"User"> | string | null
    refLogId?: IntNullableFilter<"User"> | number | null
    percentage?: FloatNullableFilter<"User"> | number | null
    userCouponId?: IntNullableFilter<"User"> | number | null
    orders?: OrderListRelationFilter
    reviews?: ReviewsListRelationFilter
    RefLog?: XOR<RefLogNullableScalarRelationFilter, RefLogWhereInput> | null
    usercoupon?: XOR<UserCouponNullableScalarRelationFilter, UserCouponWhereInput> | null
  }, "id" | "email" | "refCode">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    isVerify?: SortOrder
    refCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    points?: SortOrder
    refCodeBy?: SortOrderInput | SortOrder
    refLogId?: SortOrderInput | SortOrder
    percentage?: SortOrderInput | SortOrder
    userCouponId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    isVerify?: BoolWithAggregatesFilter<"User"> | boolean
    refCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    points?: IntWithAggregatesFilter<"User"> | number
    refCodeBy?: StringNullableWithAggregatesFilter<"User"> | string | null
    refLogId?: IntNullableWithAggregatesFilter<"User"> | number | null
    percentage?: FloatNullableWithAggregatesFilter<"User"> | number | null
    userCouponId?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type PromotorWhereInput = {
    AND?: PromotorWhereInput | PromotorWhereInput[]
    OR?: PromotorWhereInput[]
    NOT?: PromotorWhereInput | PromotorWhereInput[]
    id?: StringFilter<"Promotor"> | string
    name?: StringFilter<"Promotor"> | string
    email?: StringFilter<"Promotor"> | string
    password?: StringFilter<"Promotor"> | string
    avatar?: StringNullableFilter<"Promotor"> | string | null
    isVerify?: BoolFilter<"Promotor"> | boolean
    createdAt?: DateTimeFilter<"Promotor"> | Date | string
    updatedAt?: DateTimeFilter<"Promotor"> | Date | string
    events?: EventListRelationFilter
  }

  export type PromotorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    isVerify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    events?: EventOrderByRelationAggregateInput
  }

  export type PromotorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: PromotorWhereInput | PromotorWhereInput[]
    OR?: PromotorWhereInput[]
    NOT?: PromotorWhereInput | PromotorWhereInput[]
    name?: StringFilter<"Promotor"> | string
    password?: StringFilter<"Promotor"> | string
    avatar?: StringNullableFilter<"Promotor"> | string | null
    isVerify?: BoolFilter<"Promotor"> | boolean
    createdAt?: DateTimeFilter<"Promotor"> | Date | string
    updatedAt?: DateTimeFilter<"Promotor"> | Date | string
    events?: EventListRelationFilter
  }, "id" | "email">

  export type PromotorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    isVerify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PromotorCountOrderByAggregateInput
    _max?: PromotorMaxOrderByAggregateInput
    _min?: PromotorMinOrderByAggregateInput
  }

  export type PromotorScalarWhereWithAggregatesInput = {
    AND?: PromotorScalarWhereWithAggregatesInput | PromotorScalarWhereWithAggregatesInput[]
    OR?: PromotorScalarWhereWithAggregatesInput[]
    NOT?: PromotorScalarWhereWithAggregatesInput | PromotorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Promotor"> | string
    name?: StringWithAggregatesFilter<"Promotor"> | string
    email?: StringWithAggregatesFilter<"Promotor"> | string
    password?: StringWithAggregatesFilter<"Promotor"> | string
    avatar?: StringNullableWithAggregatesFilter<"Promotor"> | string | null
    isVerify?: BoolWithAggregatesFilter<"Promotor"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Promotor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Promotor"> | Date | string
  }

  export type UserCouponWhereInput = {
    AND?: UserCouponWhereInput | UserCouponWhereInput[]
    OR?: UserCouponWhereInput[]
    NOT?: UserCouponWhereInput | UserCouponWhereInput[]
    id?: IntFilter<"UserCoupon"> | number
    isRedeem?: BoolFilter<"UserCoupon"> | boolean
    percentage?: FloatFilter<"UserCoupon"> | number
    expiredAt?: DateTimeFilter<"UserCoupon"> | Date | string
    orderdetail?: OrderDetailListRelationFilter
    User?: UserListRelationFilter
  }

  export type UserCouponOrderByWithRelationInput = {
    id?: SortOrder
    isRedeem?: SortOrder
    percentage?: SortOrder
    expiredAt?: SortOrder
    orderdetail?: OrderDetailOrderByRelationAggregateInput
    User?: UserOrderByRelationAggregateInput
  }

  export type UserCouponWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserCouponWhereInput | UserCouponWhereInput[]
    OR?: UserCouponWhereInput[]
    NOT?: UserCouponWhereInput | UserCouponWhereInput[]
    isRedeem?: BoolFilter<"UserCoupon"> | boolean
    percentage?: FloatFilter<"UserCoupon"> | number
    expiredAt?: DateTimeFilter<"UserCoupon"> | Date | string
    orderdetail?: OrderDetailListRelationFilter
    User?: UserListRelationFilter
  }, "id">

  export type UserCouponOrderByWithAggregationInput = {
    id?: SortOrder
    isRedeem?: SortOrder
    percentage?: SortOrder
    expiredAt?: SortOrder
    _count?: UserCouponCountOrderByAggregateInput
    _avg?: UserCouponAvgOrderByAggregateInput
    _max?: UserCouponMaxOrderByAggregateInput
    _min?: UserCouponMinOrderByAggregateInput
    _sum?: UserCouponSumOrderByAggregateInput
  }

  export type UserCouponScalarWhereWithAggregatesInput = {
    AND?: UserCouponScalarWhereWithAggregatesInput | UserCouponScalarWhereWithAggregatesInput[]
    OR?: UserCouponScalarWhereWithAggregatesInput[]
    NOT?: UserCouponScalarWhereWithAggregatesInput | UserCouponScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserCoupon"> | number
    isRedeem?: BoolWithAggregatesFilter<"UserCoupon"> | boolean
    percentage?: FloatWithAggregatesFilter<"UserCoupon"> | number
    expiredAt?: DateTimeWithAggregatesFilter<"UserCoupon"> | Date | string
  }

  export type RefLogWhereInput = {
    AND?: RefLogWhereInput | RefLogWhereInput[]
    OR?: RefLogWhereInput[]
    NOT?: RefLogWhereInput | RefLogWhereInput[]
    id?: IntFilter<"RefLog"> | number
    pointGet?: IntFilter<"RefLog"> | number
    createdAt?: DateTimeFilter<"RefLog"> | Date | string
    expiredAt?: DateTimeFilter<"RefLog"> | Date | string
    isUsed?: BoolFilter<"RefLog"> | boolean
    user?: UserListRelationFilter
  }

  export type RefLogOrderByWithRelationInput = {
    id?: SortOrder
    pointGet?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
    user?: UserOrderByRelationAggregateInput
  }

  export type RefLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RefLogWhereInput | RefLogWhereInput[]
    OR?: RefLogWhereInput[]
    NOT?: RefLogWhereInput | RefLogWhereInput[]
    pointGet?: IntFilter<"RefLog"> | number
    createdAt?: DateTimeFilter<"RefLog"> | Date | string
    expiredAt?: DateTimeFilter<"RefLog"> | Date | string
    isUsed?: BoolFilter<"RefLog"> | boolean
    user?: UserListRelationFilter
  }, "id">

  export type RefLogOrderByWithAggregationInput = {
    id?: SortOrder
    pointGet?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
    _count?: RefLogCountOrderByAggregateInput
    _avg?: RefLogAvgOrderByAggregateInput
    _max?: RefLogMaxOrderByAggregateInput
    _min?: RefLogMinOrderByAggregateInput
    _sum?: RefLogSumOrderByAggregateInput
  }

  export type RefLogScalarWhereWithAggregatesInput = {
    AND?: RefLogScalarWhereWithAggregatesInput | RefLogScalarWhereWithAggregatesInput[]
    OR?: RefLogScalarWhereWithAggregatesInput[]
    NOT?: RefLogScalarWhereWithAggregatesInput | RefLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RefLog"> | number
    pointGet?: IntWithAggregatesFilter<"RefLog"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RefLog"> | Date | string
    expiredAt?: DateTimeWithAggregatesFilter<"RefLog"> | Date | string
    isUsed?: BoolWithAggregatesFilter<"RefLog"> | boolean
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    category?: EnumCategoryFilter<"Event"> | $Enums.Category
    location?: EnumLocationFilter<"Event"> | $Enums.Location
    venue?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    time?: DateTimeFilter<"Event"> | Date | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    promotorId?: StringNullableFilter<"Event"> | string | null
    thumbnail?: StringNullableFilter<"Event"> | string | null
    slug?: StringFilter<"Event"> | string
    promotor?: XOR<PromotorNullableScalarRelationFilter, PromotorWhereInput> | null
    orders?: OrderListRelationFilter
    tickets?: TicketListRelationFilter
    reviews?: ReviewsListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    description?: SortOrder
    date?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    promotorId?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    slug?: SortOrder
    promotor?: PromotorOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
    reviews?: ReviewsOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    category?: EnumCategoryFilter<"Event"> | $Enums.Category
    location?: EnumLocationFilter<"Event"> | $Enums.Location
    venue?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    time?: DateTimeFilter<"Event"> | Date | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    promotorId?: StringNullableFilter<"Event"> | string | null
    thumbnail?: StringNullableFilter<"Event"> | string | null
    promotor?: XOR<PromotorNullableScalarRelationFilter, PromotorWhereInput> | null
    orders?: OrderListRelationFilter
    tickets?: TicketListRelationFilter
    reviews?: ReviewsListRelationFilter
  }, "id" | "slug">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    description?: SortOrder
    date?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    promotorId?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    slug?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Event"> | number
    title?: StringWithAggregatesFilter<"Event"> | string
    category?: EnumCategoryWithAggregatesFilter<"Event"> | $Enums.Category
    location?: EnumLocationWithAggregatesFilter<"Event"> | $Enums.Location
    venue?: StringWithAggregatesFilter<"Event"> | string
    description?: StringWithAggregatesFilter<"Event"> | string
    date?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    time?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    promotorId?: StringNullableWithAggregatesFilter<"Event"> | string | null
    thumbnail?: StringNullableWithAggregatesFilter<"Event"> | string | null
    slug?: StringWithAggregatesFilter<"Event"> | string
  }

  export type ReviewsWhereInput = {
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    id?: IntFilter<"Reviews"> | number
    comment?: StringFilter<"Reviews"> | string
    rating?: IntFilter<"Reviews"> | number
    createdAt?: DateTimeFilter<"Reviews"> | Date | string
    updatedAt?: DateTimeFilter<"Reviews"> | Date | string
    userId?: StringNullableFilter<"Reviews"> | string | null
    eventId?: IntNullableFilter<"Reviews"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
  }

  export type ReviewsOrderByWithRelationInput = {
    id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    eventId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
  }

  export type ReviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    comment?: StringFilter<"Reviews"> | string
    rating?: IntFilter<"Reviews"> | number
    createdAt?: DateTimeFilter<"Reviews"> | Date | string
    updatedAt?: DateTimeFilter<"Reviews"> | Date | string
    userId?: StringNullableFilter<"Reviews"> | string | null
    eventId?: IntNullableFilter<"Reviews"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
  }, "id">

  export type ReviewsOrderByWithAggregationInput = {
    id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    eventId?: SortOrderInput | SortOrder
    _count?: ReviewsCountOrderByAggregateInput
    _avg?: ReviewsAvgOrderByAggregateInput
    _max?: ReviewsMaxOrderByAggregateInput
    _min?: ReviewsMinOrderByAggregateInput
    _sum?: ReviewsSumOrderByAggregateInput
  }

  export type ReviewsScalarWhereWithAggregatesInput = {
    AND?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    OR?: ReviewsScalarWhereWithAggregatesInput[]
    NOT?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reviews"> | number
    comment?: StringWithAggregatesFilter<"Reviews"> | string
    rating?: IntWithAggregatesFilter<"Reviews"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Reviews"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reviews"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Reviews"> | string | null
    eventId?: IntNullableWithAggregatesFilter<"Reviews"> | number | null
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    totalPrice?: IntFilter<"Order"> | number
    finalPrice?: IntFilter<"Order"> | number
    paymentProof?: StringNullableFilter<"Order"> | string | null
    status?: EnumStatusFilter<"Order"> | $Enums.Status
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    userId?: StringNullableFilter<"Order"> | string | null
    eventId?: IntNullableFilter<"Order"> | number | null
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    details?: OrderDetailListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    finalPrice?: SortOrder
    paymentProof?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    eventId?: SortOrderInput | SortOrder
    event?: EventOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    details?: OrderDetailOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    totalPrice?: IntFilter<"Order"> | number
    finalPrice?: IntFilter<"Order"> | number
    paymentProof?: StringNullableFilter<"Order"> | string | null
    status?: EnumStatusFilter<"Order"> | $Enums.Status
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    userId?: StringNullableFilter<"Order"> | string | null
    eventId?: IntNullableFilter<"Order"> | number | null
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    details?: OrderDetailListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    finalPrice?: SortOrder
    paymentProof?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    eventId?: SortOrderInput | SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    totalPrice?: IntWithAggregatesFilter<"Order"> | number
    finalPrice?: IntWithAggregatesFilter<"Order"> | number
    paymentProof?: StringNullableWithAggregatesFilter<"Order"> | string | null
    status?: EnumStatusWithAggregatesFilter<"Order"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    eventId?: IntNullableWithAggregatesFilter<"Order"> | number | null
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: IntFilter<"Ticket"> | number
    category?: StringFilter<"Ticket"> | string
    price?: IntFilter<"Ticket"> | number
    eventId?: IntNullableFilter<"Ticket"> | number | null
    orderDetailId?: IntNullableFilter<"Ticket"> | number | null
    quantity?: IntFilter<"Ticket"> | number
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
    orderDetail?: XOR<OrderDetailNullableScalarRelationFilter, OrderDetailWhereInput> | null
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    price?: SortOrder
    eventId?: SortOrderInput | SortOrder
    orderDetailId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    event?: EventOrderByWithRelationInput
    orderDetail?: OrderDetailOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    category?: StringFilter<"Ticket"> | string
    price?: IntFilter<"Ticket"> | number
    eventId?: IntNullableFilter<"Ticket"> | number | null
    orderDetailId?: IntNullableFilter<"Ticket"> | number | null
    quantity?: IntFilter<"Ticket"> | number
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
    orderDetail?: XOR<OrderDetailNullableScalarRelationFilter, OrderDetailWhereInput> | null
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    price?: SortOrder
    eventId?: SortOrderInput | SortOrder
    orderDetailId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ticket"> | number
    category?: StringWithAggregatesFilter<"Ticket"> | string
    price?: IntWithAggregatesFilter<"Ticket"> | number
    eventId?: IntNullableWithAggregatesFilter<"Ticket"> | number | null
    orderDetailId?: IntNullableWithAggregatesFilter<"Ticket"> | number | null
    quantity?: IntWithAggregatesFilter<"Ticket"> | number
  }

  export type OrderDetailWhereInput = {
    AND?: OrderDetailWhereInput | OrderDetailWhereInput[]
    OR?: OrderDetailWhereInput[]
    NOT?: OrderDetailWhereInput | OrderDetailWhereInput[]
    id?: IntFilter<"OrderDetail"> | number
    quantity?: IntFilter<"OrderDetail"> | number
    orderId?: IntNullableFilter<"OrderDetail"> | number | null
    userCouponId?: IntNullableFilter<"OrderDetail"> | number | null
    order?: XOR<OrderNullableScalarRelationFilter, OrderWhereInput> | null
    UserCoupon?: XOR<UserCouponNullableScalarRelationFilter, UserCouponWhereInput> | null
    tickets?: TicketListRelationFilter
  }

  export type OrderDetailOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    orderId?: SortOrderInput | SortOrder
    userCouponId?: SortOrderInput | SortOrder
    order?: OrderOrderByWithRelationInput
    UserCoupon?: UserCouponOrderByWithRelationInput
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type OrderDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderDetailWhereInput | OrderDetailWhereInput[]
    OR?: OrderDetailWhereInput[]
    NOT?: OrderDetailWhereInput | OrderDetailWhereInput[]
    quantity?: IntFilter<"OrderDetail"> | number
    orderId?: IntNullableFilter<"OrderDetail"> | number | null
    userCouponId?: IntNullableFilter<"OrderDetail"> | number | null
    order?: XOR<OrderNullableScalarRelationFilter, OrderWhereInput> | null
    UserCoupon?: XOR<UserCouponNullableScalarRelationFilter, UserCouponWhereInput> | null
    tickets?: TicketListRelationFilter
  }, "id">

  export type OrderDetailOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    orderId?: SortOrderInput | SortOrder
    userCouponId?: SortOrderInput | SortOrder
    _count?: OrderDetailCountOrderByAggregateInput
    _avg?: OrderDetailAvgOrderByAggregateInput
    _max?: OrderDetailMaxOrderByAggregateInput
    _min?: OrderDetailMinOrderByAggregateInput
    _sum?: OrderDetailSumOrderByAggregateInput
  }

  export type OrderDetailScalarWhereWithAggregatesInput = {
    AND?: OrderDetailScalarWhereWithAggregatesInput | OrderDetailScalarWhereWithAggregatesInput[]
    OR?: OrderDetailScalarWhereWithAggregatesInput[]
    NOT?: OrderDetailScalarWhereWithAggregatesInput | OrderDetailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderDetail"> | number
    quantity?: IntWithAggregatesFilter<"OrderDetail"> | number
    orderId?: IntNullableWithAggregatesFilter<"OrderDetail"> | number | null
    userCouponId?: IntNullableWithAggregatesFilter<"OrderDetail"> | number | null
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    refCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number
    refCodeBy?: string | null
    percentage?: number | null
    orders?: OrderCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    RefLog?: RefLogCreateNestedOneWithoutUserInput
    usercoupon?: UserCouponCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    refCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number
    refCodeBy?: string | null
    refLogId?: number | null
    percentage?: number | null
    userCouponId?: number | null
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    refCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: IntFieldUpdateOperationsInput | number
    refCodeBy?: NullableStringFieldUpdateOperationsInput | string | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    orders?: OrderUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    RefLog?: RefLogUpdateOneWithoutUserNestedInput
    usercoupon?: UserCouponUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    refCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: IntFieldUpdateOperationsInput | number
    refCodeBy?: NullableStringFieldUpdateOperationsInput | string | null
    refLogId?: NullableIntFieldUpdateOperationsInput | number | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    userCouponId?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    refCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number
    refCodeBy?: string | null
    refLogId?: number | null
    percentage?: number | null
    userCouponId?: number | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    refCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: IntFieldUpdateOperationsInput | number
    refCodeBy?: NullableStringFieldUpdateOperationsInput | string | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    refCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: IntFieldUpdateOperationsInput | number
    refCodeBy?: NullableStringFieldUpdateOperationsInput | string | null
    refLogId?: NullableIntFieldUpdateOperationsInput | number | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    userCouponId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PromotorCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutPromotorInput
  }

  export type PromotorUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutPromotorInput
  }

  export type PromotorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutPromotorNestedInput
  }

  export type PromotorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutPromotorNestedInput
  }

  export type PromotorCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromotorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCouponCreateInput = {
    isRedeem?: boolean
    percentage?: number
    expiredAt: Date | string
    orderdetail?: OrderDetailCreateNestedManyWithoutUserCouponInput
    User?: UserCreateNestedManyWithoutUsercouponInput
  }

  export type UserCouponUncheckedCreateInput = {
    id?: number
    isRedeem?: boolean
    percentage?: number
    expiredAt: Date | string
    orderdetail?: OrderDetailUncheckedCreateNestedManyWithoutUserCouponInput
    User?: UserUncheckedCreateNestedManyWithoutUsercouponInput
  }

  export type UserCouponUpdateInput = {
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    percentage?: FloatFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderdetail?: OrderDetailUpdateManyWithoutUserCouponNestedInput
    User?: UserUpdateManyWithoutUsercouponNestedInput
  }

  export type UserCouponUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    percentage?: FloatFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderdetail?: OrderDetailUncheckedUpdateManyWithoutUserCouponNestedInput
    User?: UserUncheckedUpdateManyWithoutUsercouponNestedInput
  }

  export type UserCouponCreateManyInput = {
    id?: number
    isRedeem?: boolean
    percentage?: number
    expiredAt: Date | string
  }

  export type UserCouponUpdateManyMutationInput = {
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    percentage?: FloatFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCouponUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    percentage?: FloatFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefLogCreateInput = {
    pointGet?: number
    createdAt?: Date | string
    expiredAt: Date | string
    isUsed: boolean
    user?: UserCreateNestedManyWithoutRefLogInput
  }

  export type RefLogUncheckedCreateInput = {
    id?: number
    pointGet?: number
    createdAt?: Date | string
    expiredAt: Date | string
    isUsed: boolean
    user?: UserUncheckedCreateNestedManyWithoutRefLogInput
  }

  export type RefLogUpdateInput = {
    pointGet?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateManyWithoutRefLogNestedInput
  }

  export type RefLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pointGet?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUncheckedUpdateManyWithoutRefLogNestedInput
  }

  export type RefLogCreateManyInput = {
    id?: number
    pointGet?: number
    createdAt?: Date | string
    expiredAt: Date | string
    isUsed: boolean
  }

  export type RefLogUpdateManyMutationInput = {
    pointGet?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RefLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pointGet?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventCreateInput = {
    title: string
    category: $Enums.Category
    location: $Enums.Location
    venue: string
    description: string
    date: Date | string
    time: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    thumbnail?: string | null
    slug: string
    promotor?: PromotorCreateNestedOneWithoutEventsInput
    orders?: OrderCreateNestedManyWithoutEventInput
    tickets?: TicketCreateNestedManyWithoutEventInput
    reviews?: ReviewsCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: number
    title: string
    category: $Enums.Category
    location: $Enums.Location
    venue: string
    description: string
    date: Date | string
    time: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    promotorId?: string | null
    thumbnail?: string | null
    slug: string
    orders?: OrderUncheckedCreateNestedManyWithoutEventInput
    tickets?: TicketUncheckedCreateNestedManyWithoutEventInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    promotor?: PromotorUpdateOneWithoutEventsNestedInput
    orders?: OrderUpdateManyWithoutEventNestedInput
    tickets?: TicketUpdateManyWithoutEventNestedInput
    reviews?: ReviewsUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promotorId?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutEventNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutEventNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: number
    title: string
    category: $Enums.Category
    location: $Enums.Location
    venue: string
    description: string
    date: Date | string
    time: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    promotorId?: string | null
    thumbnail?: string | null
    slug: string
  }

  export type EventUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promotorId?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewsCreateInput = {
    comment: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutReviewsInput
    event?: EventCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateInput = {
    id?: number
    comment: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    eventId?: number | null
  }

  export type ReviewsUpdateInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutReviewsNestedInput
    event?: EventUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReviewsCreateManyInput = {
    id?: number
    comment: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    eventId?: number | null
  }

  export type ReviewsUpdateManyMutationInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrderCreateInput = {
    totalPrice: number
    finalPrice: number
    paymentProof?: string | null
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    event?: EventCreateNestedOneWithoutOrdersInput
    user?: UserCreateNestedOneWithoutOrdersInput
    details?: OrderDetailCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    totalPrice: number
    finalPrice: number
    paymentProof?: string | null
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    eventId?: number | null
    details?: OrderDetailUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneWithoutOrdersNestedInput
    user?: UserUpdateOneWithoutOrdersNestedInput
    details?: OrderDetailUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableIntFieldUpdateOperationsInput | number | null
    details?: OrderDetailUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    totalPrice: number
    finalPrice: number
    paymentProof?: string | null
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    eventId?: number | null
  }

  export type OrderUpdateManyMutationInput = {
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TicketCreateInput = {
    category: string
    price: number
    quantity: number
    event?: EventCreateNestedOneWithoutTicketsInput
    orderDetail?: OrderDetailCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateInput = {
    id?: number
    category: string
    price: number
    eventId?: number | null
    orderDetailId?: number | null
    quantity: number
  }

  export type TicketUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    event?: EventUpdateOneWithoutTicketsNestedInput
    orderDetail?: OrderDetailUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    eventId?: NullableIntFieldUpdateOperationsInput | number | null
    orderDetailId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type TicketCreateManyInput = {
    id?: number
    category: string
    price: number
    eventId?: number | null
    orderDetailId?: number | null
    quantity: number
  }

  export type TicketUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    eventId?: NullableIntFieldUpdateOperationsInput | number | null
    orderDetailId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderDetailCreateInput = {
    quantity: number
    order?: OrderCreateNestedOneWithoutDetailsInput
    UserCoupon?: UserCouponCreateNestedOneWithoutOrderdetailInput
    tickets?: TicketCreateNestedManyWithoutOrderDetailInput
  }

  export type OrderDetailUncheckedCreateInput = {
    id?: number
    quantity: number
    orderId?: number | null
    userCouponId?: number | null
    tickets?: TicketUncheckedCreateNestedManyWithoutOrderDetailInput
  }

  export type OrderDetailUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneWithoutDetailsNestedInput
    UserCoupon?: UserCouponUpdateOneWithoutOrderdetailNestedInput
    tickets?: TicketUpdateManyWithoutOrderDetailNestedInput
  }

  export type OrderDetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    userCouponId?: NullableIntFieldUpdateOperationsInput | number | null
    tickets?: TicketUncheckedUpdateManyWithoutOrderDetailNestedInput
  }

  export type OrderDetailCreateManyInput = {
    id?: number
    quantity: number
    orderId?: number | null
    userCouponId?: number | null
  }

  export type OrderDetailUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderDetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    userCouponId?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type ReviewsListRelationFilter = {
    every?: ReviewsWhereInput
    some?: ReviewsWhereInput
    none?: ReviewsWhereInput
  }

  export type RefLogNullableScalarRelationFilter = {
    is?: RefLogWhereInput | null
    isNot?: RefLogWhereInput | null
  }

  export type UserCouponNullableScalarRelationFilter = {
    is?: UserCouponWhereInput | null
    isNot?: UserCouponWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
    refCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    points?: SortOrder
    refCodeBy?: SortOrder
    refLogId?: SortOrder
    percentage?: SortOrder
    userCouponId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    points?: SortOrder
    refLogId?: SortOrder
    percentage?: SortOrder
    userCouponId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
    refCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    points?: SortOrder
    refCodeBy?: SortOrder
    refLogId?: SortOrder
    percentage?: SortOrder
    userCouponId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
    refCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    points?: SortOrder
    refCodeBy?: SortOrder
    refLogId?: SortOrder
    percentage?: SortOrder
    userCouponId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    points?: SortOrder
    refLogId?: SortOrder
    percentage?: SortOrder
    userCouponId?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromotorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromotorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromotorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type OrderDetailListRelationFilter = {
    every?: OrderDetailWhereInput
    some?: OrderDetailWhereInput
    none?: OrderDetailWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type OrderDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCouponCountOrderByAggregateInput = {
    id?: SortOrder
    isRedeem?: SortOrder
    percentage?: SortOrder
    expiredAt?: SortOrder
  }

  export type UserCouponAvgOrderByAggregateInput = {
    id?: SortOrder
    percentage?: SortOrder
  }

  export type UserCouponMaxOrderByAggregateInput = {
    id?: SortOrder
    isRedeem?: SortOrder
    percentage?: SortOrder
    expiredAt?: SortOrder
  }

  export type UserCouponMinOrderByAggregateInput = {
    id?: SortOrder
    isRedeem?: SortOrder
    percentage?: SortOrder
    expiredAt?: SortOrder
  }

  export type UserCouponSumOrderByAggregateInput = {
    id?: SortOrder
    percentage?: SortOrder
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

  export type RefLogCountOrderByAggregateInput = {
    id?: SortOrder
    pointGet?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
  }

  export type RefLogAvgOrderByAggregateInput = {
    id?: SortOrder
    pointGet?: SortOrder
  }

  export type RefLogMaxOrderByAggregateInput = {
    id?: SortOrder
    pointGet?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
  }

  export type RefLogMinOrderByAggregateInput = {
    id?: SortOrder
    pointGet?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
  }

  export type RefLogSumOrderByAggregateInput = {
    id?: SortOrder
    pointGet?: SortOrder
  }

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type EnumLocationFilter<$PrismaModel = never> = {
    equals?: $Enums.Location | EnumLocationFieldRefInput<$PrismaModel>
    in?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationFilter<$PrismaModel> | $Enums.Location
  }

  export type PromotorNullableScalarRelationFilter = {
    is?: PromotorWhereInput | null
    isNot?: PromotorWhereInput | null
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    description?: SortOrder
    date?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    promotorId?: SortOrder
    thumbnail?: SortOrder
    slug?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    description?: SortOrder
    date?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    promotorId?: SortOrder
    thumbnail?: SortOrder
    slug?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    description?: SortOrder
    date?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    promotorId?: SortOrder
    thumbnail?: SortOrder
    slug?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type EnumLocationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Location | EnumLocationFieldRefInput<$PrismaModel>
    in?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationWithAggregatesFilter<$PrismaModel> | $Enums.Location
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLocationFilter<$PrismaModel>
    _max?: NestedEnumLocationFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type EventNullableScalarRelationFilter = {
    is?: EventWhereInput | null
    isNot?: EventWhereInput | null
  }

  export type ReviewsCountOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type ReviewsAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    eventId?: SortOrder
  }

  export type ReviewsMaxOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type ReviewsMinOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type ReviewsSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    eventId?: SortOrder
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    finalPrice?: SortOrder
    paymentProof?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    finalPrice?: SortOrder
    eventId?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    finalPrice?: SortOrder
    paymentProof?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    finalPrice?: SortOrder
    paymentProof?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    finalPrice?: SortOrder
    eventId?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type OrderDetailNullableScalarRelationFilter = {
    is?: OrderDetailWhereInput | null
    isNot?: OrderDetailWhereInput | null
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    price?: SortOrder
    eventId?: SortOrder
    orderDetailId?: SortOrder
    quantity?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    eventId?: SortOrder
    orderDetailId?: SortOrder
    quantity?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    price?: SortOrder
    eventId?: SortOrder
    orderDetailId?: SortOrder
    quantity?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    price?: SortOrder
    eventId?: SortOrder
    orderDetailId?: SortOrder
    quantity?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    eventId?: SortOrder
    orderDetailId?: SortOrder
    quantity?: SortOrder
  }

  export type OrderNullableScalarRelationFilter = {
    is?: OrderWhereInput | null
    isNot?: OrderWhereInput | null
  }

  export type OrderDetailCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    orderId?: SortOrder
    userCouponId?: SortOrder
  }

  export type OrderDetailAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    orderId?: SortOrder
    userCouponId?: SortOrder
  }

  export type OrderDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    orderId?: SortOrder
    userCouponId?: SortOrder
  }

  export type OrderDetailMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    orderId?: SortOrder
    userCouponId?: SortOrder
  }

  export type OrderDetailSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    orderId?: SortOrder
    userCouponId?: SortOrder
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type RefLogCreateNestedOneWithoutUserInput = {
    create?: XOR<RefLogCreateWithoutUserInput, RefLogUncheckedCreateWithoutUserInput>
    connectOrCreate?: RefLogCreateOrConnectWithoutUserInput
    connect?: RefLogWhereUniqueInput
  }

  export type UserCouponCreateNestedOneWithoutUserInput = {
    create?: XOR<UserCouponCreateWithoutUserInput, UserCouponUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserCouponCreateOrConnectWithoutUserInput
    connect?: UserCouponWhereUniqueInput
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
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

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutUserInput | ReviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutUserInput | ReviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutUserInput | ReviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type RefLogUpdateOneWithoutUserNestedInput = {
    create?: XOR<RefLogCreateWithoutUserInput, RefLogUncheckedCreateWithoutUserInput>
    connectOrCreate?: RefLogCreateOrConnectWithoutUserInput
    upsert?: RefLogUpsertWithoutUserInput
    disconnect?: RefLogWhereInput | boolean
    delete?: RefLogWhereInput | boolean
    connect?: RefLogWhereUniqueInput
    update?: XOR<XOR<RefLogUpdateToOneWithWhereWithoutUserInput, RefLogUpdateWithoutUserInput>, RefLogUncheckedUpdateWithoutUserInput>
  }

  export type UserCouponUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserCouponCreateWithoutUserInput, UserCouponUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserCouponCreateOrConnectWithoutUserInput
    upsert?: UserCouponUpsertWithoutUserInput
    disconnect?: UserCouponWhereInput | boolean
    delete?: UserCouponWhereInput | boolean
    connect?: UserCouponWhereUniqueInput
    update?: XOR<XOR<UserCouponUpdateToOneWithWhereWithoutUserInput, UserCouponUpdateWithoutUserInput>, UserCouponUncheckedUpdateWithoutUserInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutUserInput | ReviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutUserInput | ReviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutUserInput | ReviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type EventCreateNestedManyWithoutPromotorInput = {
    create?: XOR<EventCreateWithoutPromotorInput, EventUncheckedCreateWithoutPromotorInput> | EventCreateWithoutPromotorInput[] | EventUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutPromotorInput | EventCreateOrConnectWithoutPromotorInput[]
    createMany?: EventCreateManyPromotorInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutPromotorInput = {
    create?: XOR<EventCreateWithoutPromotorInput, EventUncheckedCreateWithoutPromotorInput> | EventCreateWithoutPromotorInput[] | EventUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutPromotorInput | EventCreateOrConnectWithoutPromotorInput[]
    createMany?: EventCreateManyPromotorInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUpdateManyWithoutPromotorNestedInput = {
    create?: XOR<EventCreateWithoutPromotorInput, EventUncheckedCreateWithoutPromotorInput> | EventCreateWithoutPromotorInput[] | EventUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutPromotorInput | EventCreateOrConnectWithoutPromotorInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutPromotorInput | EventUpsertWithWhereUniqueWithoutPromotorInput[]
    createMany?: EventCreateManyPromotorInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutPromotorInput | EventUpdateWithWhereUniqueWithoutPromotorInput[]
    updateMany?: EventUpdateManyWithWhereWithoutPromotorInput | EventUpdateManyWithWhereWithoutPromotorInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutPromotorNestedInput = {
    create?: XOR<EventCreateWithoutPromotorInput, EventUncheckedCreateWithoutPromotorInput> | EventCreateWithoutPromotorInput[] | EventUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutPromotorInput | EventCreateOrConnectWithoutPromotorInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutPromotorInput | EventUpsertWithWhereUniqueWithoutPromotorInput[]
    createMany?: EventCreateManyPromotorInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutPromotorInput | EventUpdateWithWhereUniqueWithoutPromotorInput[]
    updateMany?: EventUpdateManyWithWhereWithoutPromotorInput | EventUpdateManyWithWhereWithoutPromotorInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type OrderDetailCreateNestedManyWithoutUserCouponInput = {
    create?: XOR<OrderDetailCreateWithoutUserCouponInput, OrderDetailUncheckedCreateWithoutUserCouponInput> | OrderDetailCreateWithoutUserCouponInput[] | OrderDetailUncheckedCreateWithoutUserCouponInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutUserCouponInput | OrderDetailCreateOrConnectWithoutUserCouponInput[]
    createMany?: OrderDetailCreateManyUserCouponInputEnvelope
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutUsercouponInput = {
    create?: XOR<UserCreateWithoutUsercouponInput, UserUncheckedCreateWithoutUsercouponInput> | UserCreateWithoutUsercouponInput[] | UserUncheckedCreateWithoutUsercouponInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUsercouponInput | UserCreateOrConnectWithoutUsercouponInput[]
    createMany?: UserCreateManyUsercouponInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type OrderDetailUncheckedCreateNestedManyWithoutUserCouponInput = {
    create?: XOR<OrderDetailCreateWithoutUserCouponInput, OrderDetailUncheckedCreateWithoutUserCouponInput> | OrderDetailCreateWithoutUserCouponInput[] | OrderDetailUncheckedCreateWithoutUserCouponInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutUserCouponInput | OrderDetailCreateOrConnectWithoutUserCouponInput[]
    createMany?: OrderDetailCreateManyUserCouponInputEnvelope
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutUsercouponInput = {
    create?: XOR<UserCreateWithoutUsercouponInput, UserUncheckedCreateWithoutUsercouponInput> | UserCreateWithoutUsercouponInput[] | UserUncheckedCreateWithoutUsercouponInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUsercouponInput | UserCreateOrConnectWithoutUsercouponInput[]
    createMany?: UserCreateManyUsercouponInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderDetailUpdateManyWithoutUserCouponNestedInput = {
    create?: XOR<OrderDetailCreateWithoutUserCouponInput, OrderDetailUncheckedCreateWithoutUserCouponInput> | OrderDetailCreateWithoutUserCouponInput[] | OrderDetailUncheckedCreateWithoutUserCouponInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutUserCouponInput | OrderDetailCreateOrConnectWithoutUserCouponInput[]
    upsert?: OrderDetailUpsertWithWhereUniqueWithoutUserCouponInput | OrderDetailUpsertWithWhereUniqueWithoutUserCouponInput[]
    createMany?: OrderDetailCreateManyUserCouponInputEnvelope
    set?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    disconnect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    delete?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    update?: OrderDetailUpdateWithWhereUniqueWithoutUserCouponInput | OrderDetailUpdateWithWhereUniqueWithoutUserCouponInput[]
    updateMany?: OrderDetailUpdateManyWithWhereWithoutUserCouponInput | OrderDetailUpdateManyWithWhereWithoutUserCouponInput[]
    deleteMany?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[]
  }

  export type UserUpdateManyWithoutUsercouponNestedInput = {
    create?: XOR<UserCreateWithoutUsercouponInput, UserUncheckedCreateWithoutUsercouponInput> | UserCreateWithoutUsercouponInput[] | UserUncheckedCreateWithoutUsercouponInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUsercouponInput | UserCreateOrConnectWithoutUsercouponInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUsercouponInput | UserUpsertWithWhereUniqueWithoutUsercouponInput[]
    createMany?: UserCreateManyUsercouponInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUsercouponInput | UserUpdateWithWhereUniqueWithoutUsercouponInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUsercouponInput | UserUpdateManyWithWhereWithoutUsercouponInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type OrderDetailUncheckedUpdateManyWithoutUserCouponNestedInput = {
    create?: XOR<OrderDetailCreateWithoutUserCouponInput, OrderDetailUncheckedCreateWithoutUserCouponInput> | OrderDetailCreateWithoutUserCouponInput[] | OrderDetailUncheckedCreateWithoutUserCouponInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutUserCouponInput | OrderDetailCreateOrConnectWithoutUserCouponInput[]
    upsert?: OrderDetailUpsertWithWhereUniqueWithoutUserCouponInput | OrderDetailUpsertWithWhereUniqueWithoutUserCouponInput[]
    createMany?: OrderDetailCreateManyUserCouponInputEnvelope
    set?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    disconnect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    delete?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    update?: OrderDetailUpdateWithWhereUniqueWithoutUserCouponInput | OrderDetailUpdateWithWhereUniqueWithoutUserCouponInput[]
    updateMany?: OrderDetailUpdateManyWithWhereWithoutUserCouponInput | OrderDetailUpdateManyWithWhereWithoutUserCouponInput[]
    deleteMany?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutUsercouponNestedInput = {
    create?: XOR<UserCreateWithoutUsercouponInput, UserUncheckedCreateWithoutUsercouponInput> | UserCreateWithoutUsercouponInput[] | UserUncheckedCreateWithoutUsercouponInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUsercouponInput | UserCreateOrConnectWithoutUsercouponInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUsercouponInput | UserUpsertWithWhereUniqueWithoutUsercouponInput[]
    createMany?: UserCreateManyUsercouponInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUsercouponInput | UserUpdateWithWhereUniqueWithoutUsercouponInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUsercouponInput | UserUpdateManyWithWhereWithoutUsercouponInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutRefLogInput = {
    create?: XOR<UserCreateWithoutRefLogInput, UserUncheckedCreateWithoutRefLogInput> | UserCreateWithoutRefLogInput[] | UserUncheckedCreateWithoutRefLogInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRefLogInput | UserCreateOrConnectWithoutRefLogInput[]
    createMany?: UserCreateManyRefLogInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRefLogInput = {
    create?: XOR<UserCreateWithoutRefLogInput, UserUncheckedCreateWithoutRefLogInput> | UserCreateWithoutRefLogInput[] | UserUncheckedCreateWithoutRefLogInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRefLogInput | UserCreateOrConnectWithoutRefLogInput[]
    createMany?: UserCreateManyRefLogInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRefLogNestedInput = {
    create?: XOR<UserCreateWithoutRefLogInput, UserUncheckedCreateWithoutRefLogInput> | UserCreateWithoutRefLogInput[] | UserUncheckedCreateWithoutRefLogInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRefLogInput | UserCreateOrConnectWithoutRefLogInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRefLogInput | UserUpsertWithWhereUniqueWithoutRefLogInput[]
    createMany?: UserCreateManyRefLogInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRefLogInput | UserUpdateWithWhereUniqueWithoutRefLogInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRefLogInput | UserUpdateManyWithWhereWithoutRefLogInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRefLogNestedInput = {
    create?: XOR<UserCreateWithoutRefLogInput, UserUncheckedCreateWithoutRefLogInput> | UserCreateWithoutRefLogInput[] | UserUncheckedCreateWithoutRefLogInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRefLogInput | UserCreateOrConnectWithoutRefLogInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRefLogInput | UserUpsertWithWhereUniqueWithoutRefLogInput[]
    createMany?: UserCreateManyRefLogInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRefLogInput | UserUpdateWithWhereUniqueWithoutRefLogInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRefLogInput | UserUpdateManyWithWhereWithoutRefLogInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PromotorCreateNestedOneWithoutEventsInput = {
    create?: XOR<PromotorCreateWithoutEventsInput, PromotorUncheckedCreateWithoutEventsInput>
    connectOrCreate?: PromotorCreateOrConnectWithoutEventsInput
    connect?: PromotorWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutEventInput = {
    create?: XOR<OrderCreateWithoutEventInput, OrderUncheckedCreateWithoutEventInput> | OrderCreateWithoutEventInput[] | OrderUncheckedCreateWithoutEventInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutEventInput | OrderCreateOrConnectWithoutEventInput[]
    createMany?: OrderCreateManyEventInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutEventInput = {
    create?: XOR<ReviewsCreateWithoutEventInput, ReviewsUncheckedCreateWithoutEventInput> | ReviewsCreateWithoutEventInput[] | ReviewsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutEventInput | ReviewsCreateOrConnectWithoutEventInput[]
    createMany?: ReviewsCreateManyEventInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<OrderCreateWithoutEventInput, OrderUncheckedCreateWithoutEventInput> | OrderCreateWithoutEventInput[] | OrderUncheckedCreateWithoutEventInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutEventInput | OrderCreateOrConnectWithoutEventInput[]
    createMany?: OrderCreateManyEventInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<ReviewsCreateWithoutEventInput, ReviewsUncheckedCreateWithoutEventInput> | ReviewsCreateWithoutEventInput[] | ReviewsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutEventInput | ReviewsCreateOrConnectWithoutEventInput[]
    createMany?: ReviewsCreateManyEventInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type EnumLocationFieldUpdateOperationsInput = {
    set?: $Enums.Location
  }

  export type PromotorUpdateOneWithoutEventsNestedInput = {
    create?: XOR<PromotorCreateWithoutEventsInput, PromotorUncheckedCreateWithoutEventsInput>
    connectOrCreate?: PromotorCreateOrConnectWithoutEventsInput
    upsert?: PromotorUpsertWithoutEventsInput
    disconnect?: PromotorWhereInput | boolean
    delete?: PromotorWhereInput | boolean
    connect?: PromotorWhereUniqueInput
    update?: XOR<XOR<PromotorUpdateToOneWithWhereWithoutEventsInput, PromotorUpdateWithoutEventsInput>, PromotorUncheckedUpdateWithoutEventsInput>
  }

  export type OrderUpdateManyWithoutEventNestedInput = {
    create?: XOR<OrderCreateWithoutEventInput, OrderUncheckedCreateWithoutEventInput> | OrderCreateWithoutEventInput[] | OrderUncheckedCreateWithoutEventInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutEventInput | OrderCreateOrConnectWithoutEventInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutEventInput | OrderUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: OrderCreateManyEventInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutEventInput | OrderUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutEventInput | OrderUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutEventInput | TicketUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutEventInput | TicketUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutEventInput | TicketUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutEventNestedInput = {
    create?: XOR<ReviewsCreateWithoutEventInput, ReviewsUncheckedCreateWithoutEventInput> | ReviewsCreateWithoutEventInput[] | ReviewsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutEventInput | ReviewsCreateOrConnectWithoutEventInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutEventInput | ReviewsUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ReviewsCreateManyEventInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutEventInput | ReviewsUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutEventInput | ReviewsUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<OrderCreateWithoutEventInput, OrderUncheckedCreateWithoutEventInput> | OrderCreateWithoutEventInput[] | OrderUncheckedCreateWithoutEventInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutEventInput | OrderCreateOrConnectWithoutEventInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutEventInput | OrderUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: OrderCreateManyEventInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutEventInput | OrderUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutEventInput | OrderUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutEventInput | TicketUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutEventInput | TicketUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutEventInput | TicketUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<ReviewsCreateWithoutEventInput, ReviewsUncheckedCreateWithoutEventInput> | ReviewsCreateWithoutEventInput[] | ReviewsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutEventInput | ReviewsCreateOrConnectWithoutEventInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutEventInput | ReviewsUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ReviewsCreateManyEventInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutEventInput | ReviewsUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutEventInput | ReviewsUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutReviewsInput = {
    create?: XOR<EventCreateWithoutReviewsInput, EventUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: EventCreateOrConnectWithoutReviewsInput
    connect?: EventWhereUniqueInput
  }

  export type UserUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type EventUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<EventCreateWithoutReviewsInput, EventUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: EventCreateOrConnectWithoutReviewsInput
    upsert?: EventUpsertWithoutReviewsInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutReviewsInput, EventUpdateWithoutReviewsInput>, EventUncheckedUpdateWithoutReviewsInput>
  }

  export type EventCreateNestedOneWithoutOrdersInput = {
    create?: XOR<EventCreateWithoutOrdersInput, EventUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: EventCreateOrConnectWithoutOrdersInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type OrderDetailCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderDetailCreateWithoutOrderInput, OrderDetailUncheckedCreateWithoutOrderInput> | OrderDetailCreateWithoutOrderInput[] | OrderDetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutOrderInput | OrderDetailCreateOrConnectWithoutOrderInput[]
    createMany?: OrderDetailCreateManyOrderInputEnvelope
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
  }

  export type OrderDetailUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderDetailCreateWithoutOrderInput, OrderDetailUncheckedCreateWithoutOrderInput> | OrderDetailCreateWithoutOrderInput[] | OrderDetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutOrderInput | OrderDetailCreateOrConnectWithoutOrderInput[]
    createMany?: OrderDetailCreateManyOrderInputEnvelope
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type EventUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<EventCreateWithoutOrdersInput, EventUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: EventCreateOrConnectWithoutOrdersInput
    upsert?: EventUpsertWithoutOrdersInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutOrdersInput, EventUpdateWithoutOrdersInput>, EventUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderDetailUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderDetailCreateWithoutOrderInput, OrderDetailUncheckedCreateWithoutOrderInput> | OrderDetailCreateWithoutOrderInput[] | OrderDetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutOrderInput | OrderDetailCreateOrConnectWithoutOrderInput[]
    upsert?: OrderDetailUpsertWithWhereUniqueWithoutOrderInput | OrderDetailUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderDetailCreateManyOrderInputEnvelope
    set?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    disconnect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    delete?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    update?: OrderDetailUpdateWithWhereUniqueWithoutOrderInput | OrderDetailUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderDetailUpdateManyWithWhereWithoutOrderInput | OrderDetailUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[]
  }

  export type OrderDetailUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderDetailCreateWithoutOrderInput, OrderDetailUncheckedCreateWithoutOrderInput> | OrderDetailCreateWithoutOrderInput[] | OrderDetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutOrderInput | OrderDetailCreateOrConnectWithoutOrderInput[]
    upsert?: OrderDetailUpsertWithWhereUniqueWithoutOrderInput | OrderDetailUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderDetailCreateManyOrderInputEnvelope
    set?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    disconnect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    delete?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    update?: OrderDetailUpdateWithWhereUniqueWithoutOrderInput | OrderDetailUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderDetailUpdateManyWithWhereWithoutOrderInput | OrderDetailUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutTicketsInput = {
    create?: XOR<EventCreateWithoutTicketsInput, EventUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketsInput
    connect?: EventWhereUniqueInput
  }

  export type OrderDetailCreateNestedOneWithoutTicketsInput = {
    create?: XOR<OrderDetailCreateWithoutTicketsInput, OrderDetailUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: OrderDetailCreateOrConnectWithoutTicketsInput
    connect?: OrderDetailWhereUniqueInput
  }

  export type EventUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<EventCreateWithoutTicketsInput, EventUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketsInput
    upsert?: EventUpsertWithoutTicketsInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTicketsInput, EventUpdateWithoutTicketsInput>, EventUncheckedUpdateWithoutTicketsInput>
  }

  export type OrderDetailUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<OrderDetailCreateWithoutTicketsInput, OrderDetailUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: OrderDetailCreateOrConnectWithoutTicketsInput
    upsert?: OrderDetailUpsertWithoutTicketsInput
    disconnect?: OrderDetailWhereInput | boolean
    delete?: OrderDetailWhereInput | boolean
    connect?: OrderDetailWhereUniqueInput
    update?: XOR<XOR<OrderDetailUpdateToOneWithWhereWithoutTicketsInput, OrderDetailUpdateWithoutTicketsInput>, OrderDetailUncheckedUpdateWithoutTicketsInput>
  }

  export type OrderCreateNestedOneWithoutDetailsInput = {
    create?: XOR<OrderCreateWithoutDetailsInput, OrderUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutDetailsInput
    connect?: OrderWhereUniqueInput
  }

  export type UserCouponCreateNestedOneWithoutOrderdetailInput = {
    create?: XOR<UserCouponCreateWithoutOrderdetailInput, UserCouponUncheckedCreateWithoutOrderdetailInput>
    connectOrCreate?: UserCouponCreateOrConnectWithoutOrderdetailInput
    connect?: UserCouponWhereUniqueInput
  }

  export type TicketCreateNestedManyWithoutOrderDetailInput = {
    create?: XOR<TicketCreateWithoutOrderDetailInput, TicketUncheckedCreateWithoutOrderDetailInput> | TicketCreateWithoutOrderDetailInput[] | TicketUncheckedCreateWithoutOrderDetailInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutOrderDetailInput | TicketCreateOrConnectWithoutOrderDetailInput[]
    createMany?: TicketCreateManyOrderDetailInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutOrderDetailInput = {
    create?: XOR<TicketCreateWithoutOrderDetailInput, TicketUncheckedCreateWithoutOrderDetailInput> | TicketCreateWithoutOrderDetailInput[] | TicketUncheckedCreateWithoutOrderDetailInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutOrderDetailInput | TicketCreateOrConnectWithoutOrderDetailInput[]
    createMany?: TicketCreateManyOrderDetailInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type OrderUpdateOneWithoutDetailsNestedInput = {
    create?: XOR<OrderCreateWithoutDetailsInput, OrderUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutDetailsInput
    upsert?: OrderUpsertWithoutDetailsInput
    disconnect?: OrderWhereInput | boolean
    delete?: OrderWhereInput | boolean
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutDetailsInput, OrderUpdateWithoutDetailsInput>, OrderUncheckedUpdateWithoutDetailsInput>
  }

  export type UserCouponUpdateOneWithoutOrderdetailNestedInput = {
    create?: XOR<UserCouponCreateWithoutOrderdetailInput, UserCouponUncheckedCreateWithoutOrderdetailInput>
    connectOrCreate?: UserCouponCreateOrConnectWithoutOrderdetailInput
    upsert?: UserCouponUpsertWithoutOrderdetailInput
    disconnect?: UserCouponWhereInput | boolean
    delete?: UserCouponWhereInput | boolean
    connect?: UserCouponWhereUniqueInput
    update?: XOR<XOR<UserCouponUpdateToOneWithWhereWithoutOrderdetailInput, UserCouponUpdateWithoutOrderdetailInput>, UserCouponUncheckedUpdateWithoutOrderdetailInput>
  }

  export type TicketUpdateManyWithoutOrderDetailNestedInput = {
    create?: XOR<TicketCreateWithoutOrderDetailInput, TicketUncheckedCreateWithoutOrderDetailInput> | TicketCreateWithoutOrderDetailInput[] | TicketUncheckedCreateWithoutOrderDetailInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutOrderDetailInput | TicketCreateOrConnectWithoutOrderDetailInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutOrderDetailInput | TicketUpsertWithWhereUniqueWithoutOrderDetailInput[]
    createMany?: TicketCreateManyOrderDetailInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutOrderDetailInput | TicketUpdateWithWhereUniqueWithoutOrderDetailInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutOrderDetailInput | TicketUpdateManyWithWhereWithoutOrderDetailInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutOrderDetailNestedInput = {
    create?: XOR<TicketCreateWithoutOrderDetailInput, TicketUncheckedCreateWithoutOrderDetailInput> | TicketCreateWithoutOrderDetailInput[] | TicketUncheckedCreateWithoutOrderDetailInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutOrderDetailInput | TicketCreateOrConnectWithoutOrderDetailInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutOrderDetailInput | TicketUpsertWithWhereUniqueWithoutOrderDetailInput[]
    createMany?: TicketCreateManyOrderDetailInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutOrderDetailInput | TicketUpdateWithWhereUniqueWithoutOrderDetailInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutOrderDetailInput | TicketUpdateManyWithWhereWithoutOrderDetailInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedEnumLocationFilter<$PrismaModel = never> = {
    equals?: $Enums.Location | EnumLocationFieldRefInput<$PrismaModel>
    in?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationFilter<$PrismaModel> | $Enums.Location
  }

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type NestedEnumLocationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Location | EnumLocationFieldRefInput<$PrismaModel>
    in?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationWithAggregatesFilter<$PrismaModel> | $Enums.Location
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLocationFilter<$PrismaModel>
    _max?: NestedEnumLocationFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type OrderCreateWithoutUserInput = {
    totalPrice: number
    finalPrice: number
    paymentProof?: string | null
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    event?: EventCreateNestedOneWithoutOrdersInput
    details?: OrderDetailCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: number
    totalPrice: number
    finalPrice: number
    paymentProof?: string | null
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    eventId?: number | null
    details?: OrderDetailUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutUserInput = {
    comment: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    event?: EventCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutUserInput = {
    id?: number
    comment: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    eventId?: number | null
  }

  export type ReviewsCreateOrConnectWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput>
  }

  export type ReviewsCreateManyUserInputEnvelope = {
    data: ReviewsCreateManyUserInput | ReviewsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RefLogCreateWithoutUserInput = {
    pointGet?: number
    createdAt?: Date | string
    expiredAt: Date | string
    isUsed: boolean
  }

  export type RefLogUncheckedCreateWithoutUserInput = {
    id?: number
    pointGet?: number
    createdAt?: Date | string
    expiredAt: Date | string
    isUsed: boolean
  }

  export type RefLogCreateOrConnectWithoutUserInput = {
    where: RefLogWhereUniqueInput
    create: XOR<RefLogCreateWithoutUserInput, RefLogUncheckedCreateWithoutUserInput>
  }

  export type UserCouponCreateWithoutUserInput = {
    isRedeem?: boolean
    percentage?: number
    expiredAt: Date | string
    orderdetail?: OrderDetailCreateNestedManyWithoutUserCouponInput
  }

  export type UserCouponUncheckedCreateWithoutUserInput = {
    id?: number
    isRedeem?: boolean
    percentage?: number
    expiredAt: Date | string
    orderdetail?: OrderDetailUncheckedCreateNestedManyWithoutUserCouponInput
  }

  export type UserCouponCreateOrConnectWithoutUserInput = {
    where: UserCouponWhereUniqueInput
    create: XOR<UserCouponCreateWithoutUserInput, UserCouponUncheckedCreateWithoutUserInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    totalPrice?: IntFilter<"Order"> | number
    finalPrice?: IntFilter<"Order"> | number
    paymentProof?: StringNullableFilter<"Order"> | string | null
    status?: EnumStatusFilter<"Order"> | $Enums.Status
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    userId?: StringNullableFilter<"Order"> | string | null
    eventId?: IntNullableFilter<"Order"> | number | null
  }

  export type ReviewsUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutUserInput, ReviewsUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutUserInput, ReviewsUncheckedUpdateWithoutUserInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutUserInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewsScalarWhereInput = {
    AND?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    OR?: ReviewsScalarWhereInput[]
    NOT?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    id?: IntFilter<"Reviews"> | number
    comment?: StringFilter<"Reviews"> | string
    rating?: IntFilter<"Reviews"> | number
    createdAt?: DateTimeFilter<"Reviews"> | Date | string
    updatedAt?: DateTimeFilter<"Reviews"> | Date | string
    userId?: StringNullableFilter<"Reviews"> | string | null
    eventId?: IntNullableFilter<"Reviews"> | number | null
  }

  export type RefLogUpsertWithoutUserInput = {
    update: XOR<RefLogUpdateWithoutUserInput, RefLogUncheckedUpdateWithoutUserInput>
    create: XOR<RefLogCreateWithoutUserInput, RefLogUncheckedCreateWithoutUserInput>
    where?: RefLogWhereInput
  }

  export type RefLogUpdateToOneWithWhereWithoutUserInput = {
    where?: RefLogWhereInput
    data: XOR<RefLogUpdateWithoutUserInput, RefLogUncheckedUpdateWithoutUserInput>
  }

  export type RefLogUpdateWithoutUserInput = {
    pointGet?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RefLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    pointGet?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCouponUpsertWithoutUserInput = {
    update: XOR<UserCouponUpdateWithoutUserInput, UserCouponUncheckedUpdateWithoutUserInput>
    create: XOR<UserCouponCreateWithoutUserInput, UserCouponUncheckedCreateWithoutUserInput>
    where?: UserCouponWhereInput
  }

  export type UserCouponUpdateToOneWithWhereWithoutUserInput = {
    where?: UserCouponWhereInput
    data: XOR<UserCouponUpdateWithoutUserInput, UserCouponUncheckedUpdateWithoutUserInput>
  }

  export type UserCouponUpdateWithoutUserInput = {
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    percentage?: FloatFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderdetail?: OrderDetailUpdateManyWithoutUserCouponNestedInput
  }

  export type UserCouponUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    percentage?: FloatFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderdetail?: OrderDetailUncheckedUpdateManyWithoutUserCouponNestedInput
  }

  export type EventCreateWithoutPromotorInput = {
    title: string
    category: $Enums.Category
    location: $Enums.Location
    venue: string
    description: string
    date: Date | string
    time: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    thumbnail?: string | null
    slug: string
    orders?: OrderCreateNestedManyWithoutEventInput
    tickets?: TicketCreateNestedManyWithoutEventInput
    reviews?: ReviewsCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutPromotorInput = {
    id?: number
    title: string
    category: $Enums.Category
    location: $Enums.Location
    venue: string
    description: string
    date: Date | string
    time: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    thumbnail?: string | null
    slug: string
    orders?: OrderUncheckedCreateNestedManyWithoutEventInput
    tickets?: TicketUncheckedCreateNestedManyWithoutEventInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutPromotorInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutPromotorInput, EventUncheckedCreateWithoutPromotorInput>
  }

  export type EventCreateManyPromotorInputEnvelope = {
    data: EventCreateManyPromotorInput | EventCreateManyPromotorInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutPromotorInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutPromotorInput, EventUncheckedUpdateWithoutPromotorInput>
    create: XOR<EventCreateWithoutPromotorInput, EventUncheckedCreateWithoutPromotorInput>
  }

  export type EventUpdateWithWhereUniqueWithoutPromotorInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutPromotorInput, EventUncheckedUpdateWithoutPromotorInput>
  }

  export type EventUpdateManyWithWhereWithoutPromotorInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutPromotorInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    category?: EnumCategoryFilter<"Event"> | $Enums.Category
    location?: EnumLocationFilter<"Event"> | $Enums.Location
    venue?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    time?: DateTimeFilter<"Event"> | Date | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    promotorId?: StringNullableFilter<"Event"> | string | null
    thumbnail?: StringNullableFilter<"Event"> | string | null
    slug?: StringFilter<"Event"> | string
  }

  export type OrderDetailCreateWithoutUserCouponInput = {
    quantity: number
    order?: OrderCreateNestedOneWithoutDetailsInput
    tickets?: TicketCreateNestedManyWithoutOrderDetailInput
  }

  export type OrderDetailUncheckedCreateWithoutUserCouponInput = {
    id?: number
    quantity: number
    orderId?: number | null
    tickets?: TicketUncheckedCreateNestedManyWithoutOrderDetailInput
  }

  export type OrderDetailCreateOrConnectWithoutUserCouponInput = {
    where: OrderDetailWhereUniqueInput
    create: XOR<OrderDetailCreateWithoutUserCouponInput, OrderDetailUncheckedCreateWithoutUserCouponInput>
  }

  export type OrderDetailCreateManyUserCouponInputEnvelope = {
    data: OrderDetailCreateManyUserCouponInput | OrderDetailCreateManyUserCouponInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutUsercouponInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    refCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number
    refCodeBy?: string | null
    percentage?: number | null
    orders?: OrderCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    RefLog?: RefLogCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUsercouponInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    refCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number
    refCodeBy?: string | null
    refLogId?: number | null
    percentage?: number | null
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUsercouponInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUsercouponInput, UserUncheckedCreateWithoutUsercouponInput>
  }

  export type UserCreateManyUsercouponInputEnvelope = {
    data: UserCreateManyUsercouponInput | UserCreateManyUsercouponInput[]
    skipDuplicates?: boolean
  }

  export type OrderDetailUpsertWithWhereUniqueWithoutUserCouponInput = {
    where: OrderDetailWhereUniqueInput
    update: XOR<OrderDetailUpdateWithoutUserCouponInput, OrderDetailUncheckedUpdateWithoutUserCouponInput>
    create: XOR<OrderDetailCreateWithoutUserCouponInput, OrderDetailUncheckedCreateWithoutUserCouponInput>
  }

  export type OrderDetailUpdateWithWhereUniqueWithoutUserCouponInput = {
    where: OrderDetailWhereUniqueInput
    data: XOR<OrderDetailUpdateWithoutUserCouponInput, OrderDetailUncheckedUpdateWithoutUserCouponInput>
  }

  export type OrderDetailUpdateManyWithWhereWithoutUserCouponInput = {
    where: OrderDetailScalarWhereInput
    data: XOR<OrderDetailUpdateManyMutationInput, OrderDetailUncheckedUpdateManyWithoutUserCouponInput>
  }

  export type OrderDetailScalarWhereInput = {
    AND?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[]
    OR?: OrderDetailScalarWhereInput[]
    NOT?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[]
    id?: IntFilter<"OrderDetail"> | number
    quantity?: IntFilter<"OrderDetail"> | number
    orderId?: IntNullableFilter<"OrderDetail"> | number | null
    userCouponId?: IntNullableFilter<"OrderDetail"> | number | null
  }

  export type UserUpsertWithWhereUniqueWithoutUsercouponInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutUsercouponInput, UserUncheckedUpdateWithoutUsercouponInput>
    create: XOR<UserCreateWithoutUsercouponInput, UserUncheckedCreateWithoutUsercouponInput>
  }

  export type UserUpdateWithWhereUniqueWithoutUsercouponInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutUsercouponInput, UserUncheckedUpdateWithoutUsercouponInput>
  }

  export type UserUpdateManyWithWhereWithoutUsercouponInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUsercouponInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    isVerify?: BoolFilter<"User"> | boolean
    refCode?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    points?: IntFilter<"User"> | number
    refCodeBy?: StringNullableFilter<"User"> | string | null
    refLogId?: IntNullableFilter<"User"> | number | null
    percentage?: FloatNullableFilter<"User"> | number | null
    userCouponId?: IntNullableFilter<"User"> | number | null
  }

  export type UserCreateWithoutRefLogInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    refCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number
    refCodeBy?: string | null
    percentage?: number | null
    orders?: OrderCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    usercoupon?: UserCouponCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefLogInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    refCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number
    refCodeBy?: string | null
    percentage?: number | null
    userCouponId?: number | null
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefLogInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefLogInput, UserUncheckedCreateWithoutRefLogInput>
  }

  export type UserCreateManyRefLogInputEnvelope = {
    data: UserCreateManyRefLogInput | UserCreateManyRefLogInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRefLogInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRefLogInput, UserUncheckedUpdateWithoutRefLogInput>
    create: XOR<UserCreateWithoutRefLogInput, UserUncheckedCreateWithoutRefLogInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRefLogInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRefLogInput, UserUncheckedUpdateWithoutRefLogInput>
  }

  export type UserUpdateManyWithWhereWithoutRefLogInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRefLogInput>
  }

  export type PromotorCreateWithoutEventsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromotorUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromotorCreateOrConnectWithoutEventsInput = {
    where: PromotorWhereUniqueInput
    create: XOR<PromotorCreateWithoutEventsInput, PromotorUncheckedCreateWithoutEventsInput>
  }

  export type OrderCreateWithoutEventInput = {
    totalPrice: number
    finalPrice: number
    paymentProof?: string | null
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutOrdersInput
    details?: OrderDetailCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutEventInput = {
    id?: number
    totalPrice: number
    finalPrice: number
    paymentProof?: string | null
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    details?: OrderDetailUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutEventInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutEventInput, OrderUncheckedCreateWithoutEventInput>
  }

  export type OrderCreateManyEventInputEnvelope = {
    data: OrderCreateManyEventInput | OrderCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutEventInput = {
    category: string
    price: number
    quantity: number
    orderDetail?: OrderDetailCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutEventInput = {
    id?: number
    category: string
    price: number
    orderDetailId?: number | null
    quantity: number
  }

  export type TicketCreateOrConnectWithoutEventInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput>
  }

  export type TicketCreateManyEventInputEnvelope = {
    data: TicketCreateManyEventInput | TicketCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutEventInput = {
    comment: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutEventInput = {
    id?: number
    comment: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type ReviewsCreateOrConnectWithoutEventInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutEventInput, ReviewsUncheckedCreateWithoutEventInput>
  }

  export type ReviewsCreateManyEventInputEnvelope = {
    data: ReviewsCreateManyEventInput | ReviewsCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type PromotorUpsertWithoutEventsInput = {
    update: XOR<PromotorUpdateWithoutEventsInput, PromotorUncheckedUpdateWithoutEventsInput>
    create: XOR<PromotorCreateWithoutEventsInput, PromotorUncheckedCreateWithoutEventsInput>
    where?: PromotorWhereInput
  }

  export type PromotorUpdateToOneWithWhereWithoutEventsInput = {
    where?: PromotorWhereInput
    data: XOR<PromotorUpdateWithoutEventsInput, PromotorUncheckedUpdateWithoutEventsInput>
  }

  export type PromotorUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotorUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutEventInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutEventInput, OrderUncheckedUpdateWithoutEventInput>
    create: XOR<OrderCreateWithoutEventInput, OrderUncheckedCreateWithoutEventInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutEventInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutEventInput, OrderUncheckedUpdateWithoutEventInput>
  }

  export type OrderUpdateManyWithWhereWithoutEventInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutEventInput>
  }

  export type TicketUpsertWithWhereUniqueWithoutEventInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutEventInput, TicketUncheckedUpdateWithoutEventInput>
    create: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutEventInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutEventInput, TicketUncheckedUpdateWithoutEventInput>
  }

  export type TicketUpdateManyWithWhereWithoutEventInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutEventInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: IntFilter<"Ticket"> | number
    category?: StringFilter<"Ticket"> | string
    price?: IntFilter<"Ticket"> | number
    eventId?: IntNullableFilter<"Ticket"> | number | null
    orderDetailId?: IntNullableFilter<"Ticket"> | number | null
    quantity?: IntFilter<"Ticket"> | number
  }

  export type ReviewsUpsertWithWhereUniqueWithoutEventInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutEventInput, ReviewsUncheckedUpdateWithoutEventInput>
    create: XOR<ReviewsCreateWithoutEventInput, ReviewsUncheckedCreateWithoutEventInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutEventInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutEventInput, ReviewsUncheckedUpdateWithoutEventInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutEventInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutEventInput>
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    refCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number
    refCodeBy?: string | null
    percentage?: number | null
    orders?: OrderCreateNestedManyWithoutUserInput
    RefLog?: RefLogCreateNestedOneWithoutUserInput
    usercoupon?: UserCouponCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    refCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number
    refCodeBy?: string | null
    refLogId?: number | null
    percentage?: number | null
    userCouponId?: number | null
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type EventCreateWithoutReviewsInput = {
    title: string
    category: $Enums.Category
    location: $Enums.Location
    venue: string
    description: string
    date: Date | string
    time: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    thumbnail?: string | null
    slug: string
    promotor?: PromotorCreateNestedOneWithoutEventsInput
    orders?: OrderCreateNestedManyWithoutEventInput
    tickets?: TicketCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutReviewsInput = {
    id?: number
    title: string
    category: $Enums.Category
    location: $Enums.Location
    venue: string
    description: string
    date: Date | string
    time: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    promotorId?: string | null
    thumbnail?: string | null
    slug: string
    orders?: OrderUncheckedCreateNestedManyWithoutEventInput
    tickets?: TicketUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutReviewsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutReviewsInput, EventUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    refCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: IntFieldUpdateOperationsInput | number
    refCodeBy?: NullableStringFieldUpdateOperationsInput | string | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    orders?: OrderUpdateManyWithoutUserNestedInput
    RefLog?: RefLogUpdateOneWithoutUserNestedInput
    usercoupon?: UserCouponUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    refCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: IntFieldUpdateOperationsInput | number
    refCodeBy?: NullableStringFieldUpdateOperationsInput | string | null
    refLogId?: NullableIntFieldUpdateOperationsInput | number | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    userCouponId?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventUpsertWithoutReviewsInput = {
    update: XOR<EventUpdateWithoutReviewsInput, EventUncheckedUpdateWithoutReviewsInput>
    create: XOR<EventCreateWithoutReviewsInput, EventUncheckedCreateWithoutReviewsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutReviewsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutReviewsInput, EventUncheckedUpdateWithoutReviewsInput>
  }

  export type EventUpdateWithoutReviewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    promotor?: PromotorUpdateOneWithoutEventsNestedInput
    orders?: OrderUpdateManyWithoutEventNestedInput
    tickets?: TicketUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promotorId?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutEventNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateWithoutOrdersInput = {
    title: string
    category: $Enums.Category
    location: $Enums.Location
    venue: string
    description: string
    date: Date | string
    time: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    thumbnail?: string | null
    slug: string
    promotor?: PromotorCreateNestedOneWithoutEventsInput
    tickets?: TicketCreateNestedManyWithoutEventInput
    reviews?: ReviewsCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutOrdersInput = {
    id?: number
    title: string
    category: $Enums.Category
    location: $Enums.Location
    venue: string
    description: string
    date: Date | string
    time: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    promotorId?: string | null
    thumbnail?: string | null
    slug: string
    tickets?: TicketUncheckedCreateNestedManyWithoutEventInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutOrdersInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutOrdersInput, EventUncheckedCreateWithoutOrdersInput>
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    refCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number
    refCodeBy?: string | null
    percentage?: number | null
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    RefLog?: RefLogCreateNestedOneWithoutUserInput
    usercoupon?: UserCouponCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    refCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number
    refCodeBy?: string | null
    refLogId?: number | null
    percentage?: number | null
    userCouponId?: number | null
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type OrderDetailCreateWithoutOrderInput = {
    quantity: number
    UserCoupon?: UserCouponCreateNestedOneWithoutOrderdetailInput
    tickets?: TicketCreateNestedManyWithoutOrderDetailInput
  }

  export type OrderDetailUncheckedCreateWithoutOrderInput = {
    id?: number
    quantity: number
    userCouponId?: number | null
    tickets?: TicketUncheckedCreateNestedManyWithoutOrderDetailInput
  }

  export type OrderDetailCreateOrConnectWithoutOrderInput = {
    where: OrderDetailWhereUniqueInput
    create: XOR<OrderDetailCreateWithoutOrderInput, OrderDetailUncheckedCreateWithoutOrderInput>
  }

  export type OrderDetailCreateManyOrderInputEnvelope = {
    data: OrderDetailCreateManyOrderInput | OrderDetailCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutOrdersInput = {
    update: XOR<EventUpdateWithoutOrdersInput, EventUncheckedUpdateWithoutOrdersInput>
    create: XOR<EventCreateWithoutOrdersInput, EventUncheckedCreateWithoutOrdersInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutOrdersInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutOrdersInput, EventUncheckedUpdateWithoutOrdersInput>
  }

  export type EventUpdateWithoutOrdersInput = {
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    promotor?: PromotorUpdateOneWithoutEventsNestedInput
    tickets?: TicketUpdateManyWithoutEventNestedInput
    reviews?: ReviewsUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promotorId?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUncheckedUpdateManyWithoutEventNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    refCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: IntFieldUpdateOperationsInput | number
    refCodeBy?: NullableStringFieldUpdateOperationsInput | string | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    RefLog?: RefLogUpdateOneWithoutUserNestedInput
    usercoupon?: UserCouponUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    refCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: IntFieldUpdateOperationsInput | number
    refCodeBy?: NullableStringFieldUpdateOperationsInput | string | null
    refLogId?: NullableIntFieldUpdateOperationsInput | number | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    userCouponId?: NullableIntFieldUpdateOperationsInput | number | null
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderDetailUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderDetailWhereUniqueInput
    update: XOR<OrderDetailUpdateWithoutOrderInput, OrderDetailUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderDetailCreateWithoutOrderInput, OrderDetailUncheckedCreateWithoutOrderInput>
  }

  export type OrderDetailUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderDetailWhereUniqueInput
    data: XOR<OrderDetailUpdateWithoutOrderInput, OrderDetailUncheckedUpdateWithoutOrderInput>
  }

  export type OrderDetailUpdateManyWithWhereWithoutOrderInput = {
    where: OrderDetailScalarWhereInput
    data: XOR<OrderDetailUpdateManyMutationInput, OrderDetailUncheckedUpdateManyWithoutOrderInput>
  }

  export type EventCreateWithoutTicketsInput = {
    title: string
    category: $Enums.Category
    location: $Enums.Location
    venue: string
    description: string
    date: Date | string
    time: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    thumbnail?: string | null
    slug: string
    promotor?: PromotorCreateNestedOneWithoutEventsInput
    orders?: OrderCreateNestedManyWithoutEventInput
    reviews?: ReviewsCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutTicketsInput = {
    id?: number
    title: string
    category: $Enums.Category
    location: $Enums.Location
    venue: string
    description: string
    date: Date | string
    time: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    promotorId?: string | null
    thumbnail?: string | null
    slug: string
    orders?: OrderUncheckedCreateNestedManyWithoutEventInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutTicketsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTicketsInput, EventUncheckedCreateWithoutTicketsInput>
  }

  export type OrderDetailCreateWithoutTicketsInput = {
    quantity: number
    order?: OrderCreateNestedOneWithoutDetailsInput
    UserCoupon?: UserCouponCreateNestedOneWithoutOrderdetailInput
  }

  export type OrderDetailUncheckedCreateWithoutTicketsInput = {
    id?: number
    quantity: number
    orderId?: number | null
    userCouponId?: number | null
  }

  export type OrderDetailCreateOrConnectWithoutTicketsInput = {
    where: OrderDetailWhereUniqueInput
    create: XOR<OrderDetailCreateWithoutTicketsInput, OrderDetailUncheckedCreateWithoutTicketsInput>
  }

  export type EventUpsertWithoutTicketsInput = {
    update: XOR<EventUpdateWithoutTicketsInput, EventUncheckedUpdateWithoutTicketsInput>
    create: XOR<EventCreateWithoutTicketsInput, EventUncheckedCreateWithoutTicketsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTicketsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTicketsInput, EventUncheckedUpdateWithoutTicketsInput>
  }

  export type EventUpdateWithoutTicketsInput = {
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    promotor?: PromotorUpdateOneWithoutEventsNestedInput
    orders?: OrderUpdateManyWithoutEventNestedInput
    reviews?: ReviewsUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promotorId?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutEventNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutEventNestedInput
  }

  export type OrderDetailUpsertWithoutTicketsInput = {
    update: XOR<OrderDetailUpdateWithoutTicketsInput, OrderDetailUncheckedUpdateWithoutTicketsInput>
    create: XOR<OrderDetailCreateWithoutTicketsInput, OrderDetailUncheckedCreateWithoutTicketsInput>
    where?: OrderDetailWhereInput
  }

  export type OrderDetailUpdateToOneWithWhereWithoutTicketsInput = {
    where?: OrderDetailWhereInput
    data: XOR<OrderDetailUpdateWithoutTicketsInput, OrderDetailUncheckedUpdateWithoutTicketsInput>
  }

  export type OrderDetailUpdateWithoutTicketsInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneWithoutDetailsNestedInput
    UserCoupon?: UserCouponUpdateOneWithoutOrderdetailNestedInput
  }

  export type OrderDetailUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    userCouponId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrderCreateWithoutDetailsInput = {
    totalPrice: number
    finalPrice: number
    paymentProof?: string | null
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    event?: EventCreateNestedOneWithoutOrdersInput
    user?: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutDetailsInput = {
    id?: number
    totalPrice: number
    finalPrice: number
    paymentProof?: string | null
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    eventId?: number | null
  }

  export type OrderCreateOrConnectWithoutDetailsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutDetailsInput, OrderUncheckedCreateWithoutDetailsInput>
  }

  export type UserCouponCreateWithoutOrderdetailInput = {
    isRedeem?: boolean
    percentage?: number
    expiredAt: Date | string
    User?: UserCreateNestedManyWithoutUsercouponInput
  }

  export type UserCouponUncheckedCreateWithoutOrderdetailInput = {
    id?: number
    isRedeem?: boolean
    percentage?: number
    expiredAt: Date | string
    User?: UserUncheckedCreateNestedManyWithoutUsercouponInput
  }

  export type UserCouponCreateOrConnectWithoutOrderdetailInput = {
    where: UserCouponWhereUniqueInput
    create: XOR<UserCouponCreateWithoutOrderdetailInput, UserCouponUncheckedCreateWithoutOrderdetailInput>
  }

  export type TicketCreateWithoutOrderDetailInput = {
    category: string
    price: number
    quantity: number
    event?: EventCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutOrderDetailInput = {
    id?: number
    category: string
    price: number
    eventId?: number | null
    quantity: number
  }

  export type TicketCreateOrConnectWithoutOrderDetailInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutOrderDetailInput, TicketUncheckedCreateWithoutOrderDetailInput>
  }

  export type TicketCreateManyOrderDetailInputEnvelope = {
    data: TicketCreateManyOrderDetailInput | TicketCreateManyOrderDetailInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithoutDetailsInput = {
    update: XOR<OrderUpdateWithoutDetailsInput, OrderUncheckedUpdateWithoutDetailsInput>
    create: XOR<OrderCreateWithoutDetailsInput, OrderUncheckedCreateWithoutDetailsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutDetailsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutDetailsInput, OrderUncheckedUpdateWithoutDetailsInput>
  }

  export type OrderUpdateWithoutDetailsInput = {
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneWithoutOrdersNestedInput
    user?: UserUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCouponUpsertWithoutOrderdetailInput = {
    update: XOR<UserCouponUpdateWithoutOrderdetailInput, UserCouponUncheckedUpdateWithoutOrderdetailInput>
    create: XOR<UserCouponCreateWithoutOrderdetailInput, UserCouponUncheckedCreateWithoutOrderdetailInput>
    where?: UserCouponWhereInput
  }

  export type UserCouponUpdateToOneWithWhereWithoutOrderdetailInput = {
    where?: UserCouponWhereInput
    data: XOR<UserCouponUpdateWithoutOrderdetailInput, UserCouponUncheckedUpdateWithoutOrderdetailInput>
  }

  export type UserCouponUpdateWithoutOrderdetailInput = {
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    percentage?: FloatFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateManyWithoutUsercouponNestedInput
  }

  export type UserCouponUncheckedUpdateWithoutOrderdetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    percentage?: FloatFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutUsercouponNestedInput
  }

  export type TicketUpsertWithWhereUniqueWithoutOrderDetailInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutOrderDetailInput, TicketUncheckedUpdateWithoutOrderDetailInput>
    create: XOR<TicketCreateWithoutOrderDetailInput, TicketUncheckedCreateWithoutOrderDetailInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutOrderDetailInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutOrderDetailInput, TicketUncheckedUpdateWithoutOrderDetailInput>
  }

  export type TicketUpdateManyWithWhereWithoutOrderDetailInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutOrderDetailInput>
  }

  export type OrderCreateManyUserInput = {
    id?: number
    totalPrice: number
    finalPrice: number
    paymentProof?: string | null
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    eventId?: number | null
  }

  export type ReviewsCreateManyUserInput = {
    id?: number
    comment: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    eventId?: number | null
  }

  export type OrderUpdateWithoutUserInput = {
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneWithoutOrdersNestedInput
    details?: OrderDetailUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventId?: NullableIntFieldUpdateOperationsInput | number | null
    details?: OrderDetailUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReviewsUpdateWithoutUserInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReviewsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EventCreateManyPromotorInput = {
    id?: number
    title: string
    category: $Enums.Category
    location: $Enums.Location
    venue: string
    description: string
    date: Date | string
    time: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    thumbnail?: string | null
    slug: string
  }

  export type EventUpdateWithoutPromotorInput = {
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutEventNestedInput
    tickets?: TicketUpdateManyWithoutEventNestedInput
    reviews?: ReviewsUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutPromotorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutEventNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutEventNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutPromotorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type OrderDetailCreateManyUserCouponInput = {
    id?: number
    quantity: number
    orderId?: number | null
  }

  export type UserCreateManyUsercouponInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    refCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number
    refCodeBy?: string | null
    refLogId?: number | null
    percentage?: number | null
  }

  export type OrderDetailUpdateWithoutUserCouponInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneWithoutDetailsNestedInput
    tickets?: TicketUpdateManyWithoutOrderDetailNestedInput
  }

  export type OrderDetailUncheckedUpdateWithoutUserCouponInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    tickets?: TicketUncheckedUpdateManyWithoutOrderDetailNestedInput
  }

  export type OrderDetailUncheckedUpdateManyWithoutUserCouponInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUpdateWithoutUsercouponInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    refCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: IntFieldUpdateOperationsInput | number
    refCodeBy?: NullableStringFieldUpdateOperationsInput | string | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    orders?: OrderUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    RefLog?: RefLogUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUsercouponInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    refCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: IntFieldUpdateOperationsInput | number
    refCodeBy?: NullableStringFieldUpdateOperationsInput | string | null
    refLogId?: NullableIntFieldUpdateOperationsInput | number | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUsercouponInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    refCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: IntFieldUpdateOperationsInput | number
    refCodeBy?: NullableStringFieldUpdateOperationsInput | string | null
    refLogId?: NullableIntFieldUpdateOperationsInput | number | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type UserCreateManyRefLogInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    refCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number
    refCodeBy?: string | null
    percentage?: number | null
    userCouponId?: number | null
  }

  export type UserUpdateWithoutRefLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    refCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: IntFieldUpdateOperationsInput | number
    refCodeBy?: NullableStringFieldUpdateOperationsInput | string | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    orders?: OrderUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    usercoupon?: UserCouponUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    refCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: IntFieldUpdateOperationsInput | number
    refCodeBy?: NullableStringFieldUpdateOperationsInput | string | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    userCouponId?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRefLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    refCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: IntFieldUpdateOperationsInput | number
    refCodeBy?: NullableStringFieldUpdateOperationsInput | string | null
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    userCouponId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrderCreateManyEventInput = {
    id?: number
    totalPrice: number
    finalPrice: number
    paymentProof?: string | null
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type TicketCreateManyEventInput = {
    id?: number
    category: string
    price: number
    orderDetailId?: number | null
    quantity: number
  }

  export type ReviewsCreateManyEventInput = {
    id?: number
    comment: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type OrderUpdateWithoutEventInput = {
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutOrdersNestedInput
    details?: OrderDetailUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: OrderDetailUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    finalPrice?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketUpdateWithoutEventInput = {
    category?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    orderDetail?: OrderDetailUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    orderDetailId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type TicketUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    orderDetailId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewsUpdateWithoutEventInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewsUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderDetailCreateManyOrderInput = {
    id?: number
    quantity: number
    userCouponId?: number | null
  }

  export type OrderDetailUpdateWithoutOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    UserCoupon?: UserCouponUpdateOneWithoutOrderdetailNestedInput
    tickets?: TicketUpdateManyWithoutOrderDetailNestedInput
  }

  export type OrderDetailUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    userCouponId?: NullableIntFieldUpdateOperationsInput | number | null
    tickets?: TicketUncheckedUpdateManyWithoutOrderDetailNestedInput
  }

  export type OrderDetailUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    userCouponId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TicketCreateManyOrderDetailInput = {
    id?: number
    category: string
    price: number
    eventId?: number | null
    quantity: number
  }

  export type TicketUpdateWithoutOrderDetailInput = {
    category?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    event?: EventUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutOrderDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    eventId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type TicketUncheckedUpdateManyWithoutOrderDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    eventId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
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