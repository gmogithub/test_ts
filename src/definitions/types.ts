type Awaited<T extends Promise<any>> = T extends Promise<infer U> ? U : never;
type If<C extends boolean, T, F> = C extends true ? T : F;
type Concat<T extends any[], U extends any[]> = [...T, ...U];

type IsEqual<T, U> = T extends U ? (U extends T ? true : false) : false;
type TupleToUnion<T extends readonly any[]> = T[number];
type IncludesTmp<T extends readonly any[], U> = U extends TupleToUnion<T> ? true : false;
type Includes<T extends readonly any[], U> = U extends [infer First, ...infer Rest] ? (IsEqual<U, First> extends true ? true : Includes<Rest, U>) : false;
type Push<T extends any[], U> = [...T, U];
type Unshift<T extends any[], U> = [U, ...T];
type Func = (...args: any[]) => any;
type MyParameters<T extends Func> = T extends (...args: infer Args) => any ? Args : never;

type HTMLAttributes = {
  img: {
    alt: string,

  }
  input: {
    type?: 'input' | "number" | "checkbox" | "radio",
    name?: string
  },
  textarea: {
    name?: string,
    cols?: number
  }
}

type HTMLNode<TagName> = {
  tagName: TagName,
  className?: string,
  id?: string,
  attributes?: TagName extends keyof HTMLAttributes ? HTMLAttributes[TagName] : never
}

type ValueOf<T> = T[keyof T];

type Test = HTMLShapes[keyof HTMLShapes];
type Test2 = {
  str: string,
  str2: number
}

type Test3 = Test2[keyof Test2];

type HTMLShapes = {
  [Key in keyof HTMLAttributes]: HTMLNode<Key>
}

type HTMLShape = ValueOf<HTMLShapes>;
type HTMLShapeInline = ValueOf<{
  [TagName in keyof HTMLAttributes]: {
    tagName: TagName,
    className?: string,
    id?: string,
    attributes?: TagName extends keyof HTMLAttributes ? HTMLAttributes[TagName] : never
  }
}>;

const img : HTMLShape = {
  tagName: "img",
  attributes: {
    alt: "test"
  }
}

/**
 *
 *
 * exemples
 *
 *
 */
type  TestIf<T> = T extends Date ? true : false;
const t: If<TestIf<Date>, Date, string> = new Date();

type ArrayString = string[];

type  ArrayNumber = number[];

type ArrayStringAndNumber = (string | number)[];

const ar: ArrayString = ["21d", "dfsdf"];
const ar2: ArrayNumber = [4, 5];

const ar3: ArrayStringAndNumber = [12, "df", 4]

const arFinal: Concat<ArrayNumber, ArrayString> = [...ar, ...ar2];


const t2: TupleToUnion<ArrayStringAndNumber> = 10;

function push<T, V>(arr: T[], value: V) {
  return [...arr, value];
}

const newArray = push([1, 2], "3");

