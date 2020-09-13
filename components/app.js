export default class App {
    constructor(rootElement) {
        this.rootElement = rootElement;
    }
    start() {
        this.rootElement.textContent = "Hello World";
    }
}
