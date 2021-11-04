declare function CustomElement(name: string): (constructor: typeof HTMLElement) => void;
declare class Demo extends HTMLElement {
    connectedCallback(): void;
}
