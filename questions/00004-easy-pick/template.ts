type MyPick<T extends Record<PropertyKey, any>, K extends keyof T> = { [Key in K]: T[Key] }
