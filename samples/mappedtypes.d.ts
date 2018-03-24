// extract example from http://www.typescriptlang.org/docs/handbook/advanced-types.html#mapped-types
export interface Person {
    name: string;
    age: number;
}
type PersonFields = { [P in keyof Person] }

type Keys = 'option1' | 'option2';
type Flags = { [K in Keys]: boolean };

type Readonly<T> = {
    readonly [P in keyof T]: T[P];
}
type Partial<T> = {
    [P in keyof T]?: T[P];
}

// extract example from https://github.com/pixijs/pixi-typescript/blob/91e7d20abb43f17f9e34030c1845a7921dfa2e91/pixi.js.d.ts#L1291
export interface UniformData<V> {
    type: string;
    value: V;
    name?: string;
}
type UniformDataMap<U> = {[K in keyof U]: UniformData<U[K]>};

