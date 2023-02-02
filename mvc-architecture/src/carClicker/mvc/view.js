import Euid from '../../libs/Euid.js';

export class CarListView extends Euid.View {
  init() {
    this.carListElement = document.getElementById('carListView');
    this.activeClass = 'active';
    this.bindEvents();
    this.render();
  }

  render() {
    const cars = this.controller.getCars();
    const currentCar = this.controller.getCurrentCar();

    this.carListElement.innerHTML = '';

    let listItemsHTML = cars
      .map(({ id, name }) => {
        return `
        <li>
          <a href="#${id}" class="${id === currentCar.id ? this.activeClass : ''}">${name}</a>
        </li>
      `.trim();
      })
      .join('');

    this.carListElement.insertAdjacentHTML?.('beforeend', listItemsHTML);
  }

  bindEvents() {
    this.carListElement?.addEventListener('click', (e) => {
      if (e.target.matches('a[href]')) {
        e.preventDefault();
        let id = e.target.getAttribute('href');
        this.controller.changeView(id);
      }
    });
  }
}

export class CarView extends Euid.View {
  init() {
    this.carElement = document.getElementById('carView');
    this.bindEvents();
    this.render();
  }

  render() {
    const car = this.controller.getCurrentCar();

    this.carElement.innerHTML = '';

    this.carElement?.insertAdjacentHTML(
      'beforeend',
      `
      <img src="${car.image}" alt="" />
      <figcaption>
        <strong>${car.name}</strong>
        <button type="button">${car.clickCount}</button>
      </figcaption>
    `
    );
  }

  bindEvents() {
    this.carElement?.addEventListener('click', (e) => {
      if (e.target.matches('button') || e.target.matches('img')) {
        this.controller.incrementClickCount();
      }
    });
  }
}
