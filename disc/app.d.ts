declare function Constraint({ min, max }: {
    min: number;
    max: number;
}): <T>(target: T, key: keyof T) => void;
declare class User {
    age: number;
}
declare const u: User;
