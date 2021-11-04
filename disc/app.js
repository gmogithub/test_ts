"use strict";
//
// const compteur = document.querySelector("#compteur");
// let i = 0;
//
// const increment = (e: Event) => {
//   if (compteur) {
//     i++;
//     compteur.querySelector('span')!.innerText = i.toString();
//   }
// }
// if (compteur) {
//
//   compteur.addEventListener("click", increment);
// }
//
//
// function test(e: HTMLInputElement | MouseEvent) {
//   if ("value" in e) {
//
//   }
// }
//
// function isDate(value: any): value is Date {
//   return value instanceof Date;
// }
//
//
// class Point {
//   x = 0;
//   y = 0;
//
//   surface() {
//     return this.x * this.y;
//   }
// }
//
// class Point3D {
//   x = 0;
//   y = 0;
//   z = 0;
// }
//
//
// function testReadonlyArg(a: readonly { lastName: string }[]) {
//
// }
//
// function getX(p: Point) {
//   return p.x;
// }
//
// getX(new Point());
//
// class Test {
//   private static test = { x: 10, y: 20 };
// }
//
//
// type  InstantiableShape = {
//   new(x: number, y: number): {
//     surface: () => number
//   }
// }
//
// function shapeGenerator(shapeType: InstantiableShape, x: number, y: number) {
//   return new shapeType(x, y);
// }
//
// const point = shapeGenerator(Point, 10, 20);
//
// class Fish {
//   cri() {
//     return "false";
//   }
// }
//
// class Cat {
//   cri() {
//     return "miaou"
//   }
// }
//
//
// type AnimalCri<T> = T extends { cri: () => infer U } ? U : never;
//
// type A = AnimalCri<Fish>;
// type B = AnimalCri<Cat>;
//
// type Swim = { swim: boolean }
// type Jump = { jump: boolean };
// type SwimOrJump = Swim | Jump;
// type AnimalOptions<T> = T extends Swim ? Fish : Cat;
//
// function generatorAnimal<T extends SwimOrJump>(options: T): AnimalOptions<T> {
//   if ("swim" in options) {
//     return new Fish()
//   } else {
//     return new Cat();
//   }
// }
//
// const a = generatorAnimal({ jump: true });
//
//
// class FeatureFlags {
//   env = "test";
//
//   darkMode() {
//     return true;
//   }
//
//   privateMode() {
//     return true;
//   }
//
//   nsfMode() {
//     return true;
//   }
// }
//
// type OptionsFlag<T> = {
//   +readonly [key in keyof T as `is${Capitalize<string & key>}`]: T[key] extends () => boolean ? boolean : never;
// }
//
//
// export type KeyA = OptionsFlag<FeatureFlags>;
//
// type MyPick<T, K> = {
//   [key in keyof T]: T[key]
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// function CustomElement(name: string) {
//   return function (constructor: typeof HTMLElement) {
//     customElements.define(name, constructor);
//   }
// }
//
// @CustomElement("demo-hello")
// class Demo extends HTMLElement {
//
//   connectedCallback() {
//     this.innerHTML = "hello word"
//   }
// }
function Constraint({ min, max }) {
    return function (target, key) {
        let val = target[key];
        console.log(val, "value");
        const setter = (v) => {
            console.log(v, min, max, typeof v);
            if (typeof v === "number" && v > min && v < max) {
                val = v;
                return;
            }
            else {
                throw new Error(`on attend un nombre ${min} et ${max}`);
            }
        };
        const getter = () => val;
        Object.defineProperty(target, key, {
            set: setter,
            get: getter
        });
    };
}
class User {
    constructor() {
        this.age = 0;
    }
}
__decorate([
    Constraint({
        min: 0,
        max: 100
    })
], User.prototype, "age", void 0);
const u = new User();
u.age = 10;
