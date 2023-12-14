type MyReadonly<T extends Record<PropertyKey, any>> = { readonly [K in keyof T]: T[K] }
