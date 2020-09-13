
export default class App {
  rootElement: HTMLElement

  constructor(rootElement: HTMLElement){
    this.rootElement = rootElement
  }

  start(){
    this.rootElement.textContent = "Hello World"
  }
}
