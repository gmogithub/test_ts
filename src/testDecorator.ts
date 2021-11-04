function CustomElement(name: string) {
    return function (constructor: typeof HTMLElement) {
      customElements.define(name, constructor);
    }
}

@CustomElement("demo-hello")
class Demo extends HTMLElement {

  connectedCallback() {
    this.innerHTML = "hello word"
  }

}
