// 'keyof T' will be something like '0' | '1' | '2'.
// '0' extends '0' | '1' | '2' is only false when the array is empty.
type First<T extends any[]> = '0' extends keyof T ? T[0] : never

// 'T extends []' means "does the type extend an empty array?"
type First2<T extends any[]> = T extends [] ? never : T[0]

// infer the type of the first item, infer and ignore the type of the remaining items. If T extends that type, return the type of the first item.
type First3<T extends any[]> = T extends [infer TFirst, ...infer _TRemaining] ? TFirst : never
