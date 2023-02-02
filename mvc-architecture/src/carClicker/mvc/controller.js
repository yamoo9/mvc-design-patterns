import Euid from '../../libs/Euid.js';

export default class CarClickerController extends Euid.Controller {
  getCars() {
    return this.model.getCars();
  }

  getCurrentCar() {
    return this.model.getCurrentCar();
  }

  setCurrentCar(id) {
    this.model.setCurrentCar(id);
  }

  changeView(id) {
    this.setCurrentCar(id.replace('#', ''));
    this.getView('carView').render();
    this.getView('carListView').render();
    this.updateHash(id);
  }

  incrementClickCount() {
    const newCars = this.model.getCars().map((car) => {
      if (car.id === this.getCurrentCar().id) {
        car.clickCount += 1;
      }
      return car;
    });

    this.model.setCars(newCars);
    this.getView('carView').render();
  }

  updateHash(id) {
    location.hash = id.replace('#', '/');
  }

  run() {
    let currentCar = this.model.getCurrentCar();
    if (!currentCar) {
      let { id } = this.model.getCars()[0];
      this.model.setCurrentCar(id);
      this.updateHash(id);
    }
    Object.entries(this.views).forEach(([, view]) => view.init());
  }
}
