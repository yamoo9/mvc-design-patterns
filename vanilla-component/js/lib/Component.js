export default class Component {
  constructor(element, props = {}) {
    this.element = element;
    this.props = props;
    this.state = {};
    this.init();
    this.bindEvents();
    this.render();
  }

  init() {}
  bindEvents() {}

  template() {
    return ``;
  }

  render() {
    this.element.innerHTML = this.template();
    this.updated();
  }

  updated() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  on(type, selector, listener) {
    this.element.addEventListener(type, (e) => {
      if (e.target.matches(selector) || e.target.closest(selector)) {
        listener(e);
      }
    });
  }

  static getRandomNumber(n) {
    return Math.floor(Math.random() * n);
  }

  static generateId({ prefix = 'euid', digit = 10 } = {}) {
    const { getRandomNumber } = Component;
    const characters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let id = `${prefix}-`;
    
    while(digit-- > 0) {
      let randomIndex = getRandomNumber(characters.length - 1);
      let randomChar = characters[randomIndex];
      if (getRandomNumber(2) > 0) { randomChar = randomChar.toUpperCase(); }
      id += randomChar;
      characters.splice(randomIndex, 1);
    }

    return id;
  }
}