type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U extends PromiseLike<unknown> ? MyAwaited<U> : U : T
