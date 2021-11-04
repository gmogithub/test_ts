declare type Awaited<T extends Promise<any>> = T extends Promise<infer U> ? U : never;
declare type If<C extends boolean, T, F> = C extends true ? T : F;
declare type Concat<T extends any[], U extends any[]> = [...T, ...U];
declare type IsEqual<T, U> = T extends U ? (U extends T ? true : false) : false;
declare type TupleToUnion<T extends readonly any[]> = T[number];
declare type IncludesTmp<T extends readonly any[], U> = U extends TupleToUnion<T> ? true : false;
declare type Includes<T extends readonly any[], U> = U extends [infer First, ...infer Rest] ? (IsEqual<U, First> extends true ? true : Includes<Rest, U>) : false;
declare type Push<T extends any[], U> = [...T, U];
declare type Unshift<T extends any[], U> = [U, ...T];
declare type Func = (...args: any[]) => any;
declare type MyParameters<T extends Func> = T extends (...args: infer Args) => any ? Args : never;
declare type HTMLAttributes = {
    img: {
        alt: string;
    };
    input: {
        type?: 'input' | "number" | "checkbox" | "radio";
        name?: string;
    };
    textarea: {
        name?: string;
        cols?: number;
    };
};
declare type HTMLNode<TagName> = {
    tagName: TagName;
    className?: string;
    id?: string;
    attributes?: TagName extends keyof HTMLAttributes ? HTMLAttributes[TagName] : never;
};
declare type ValueOf<T> = T[keyof T];
declare type Test = HTMLShapes[keyof HTMLShapes];
declare type Test2 = {
    str: string;
    str2: number;
};
declare type Test3 = Test2[keyof Test2];
declare type HTMLShapes = {
    [Key in keyof HTMLAttributes]: HTMLNode<Key>;
};
declare type HTMLShape = ValueOf<HTMLShapes>;
declare type HTMLShapeInline = ValueOf<{
    [TagName in keyof HTMLAttributes]: {
        tagName: TagName;
        className?: string;
        id?: string;
        attributes?: TagName extends keyof HTMLAttributes ? HTMLAttributes[TagName] : never;
    };
}>;
declare const img: HTMLShape;
/**
 *
 *
 * exemples
 *
 *
 */
declare type TestIf<T> = T extends Date ? true : false;
declare const t: If<TestIf<Date>, Date, string>;
declare type ArrayString = string[];
declare type ArrayNumber = number[];
declare type ArrayStringAndNumber = (string | number)[];
declare const ar: ArrayString;
declare const ar2: ArrayNumber;
declare const ar3: ArrayStringAndNumber;
declare const arFinal: Concat<ArrayNumber, ArrayString>;
declare const t2: TupleToUnion<ArrayStringAndNumber>;
declare function push<T, V>(arr: T[], value: V): (T | V)[];
declare const newArray: (string | number)[];
