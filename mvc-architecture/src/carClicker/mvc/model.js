import Euid from '../../libs/Euid.js';

const carData = {
  currentCar: null,
  cars: [
    {
      id: 'coupe-maserati',
      name: '쿠페 마세라티',
      image: 'assets/black-convertible-coupe.jpg',
      clickCount: 0,
    },
    {
      id: 'camaro-ss-1le',
      name: '카마로 SS 1LE',
      image: 'assets/chevrolet-camaro.jpg',
      clickCount: 0,
    },
    {
      id: 'dodger-charger-1970',
      name: '다저 차저 1970',
      image: 'assets/dodge-charger.jpg',
      clickCount: 0,
    },
    {
      id: 'ford-mustang-1966',
      name: '포드 머스탱 1966',
      image: 'assets/ford-mustang.jpg',
      clickCount: 0,
    },
    {
      id: '190-sl-roadster-1962',
      name: '190 SL 로드스터 1962',
      image: 'assets/mercedes-benz.jpg',
      clickCount: 0,
    },
  ],
};

export default class CarModel extends Euid.Model {
  constructor(...args) {
    super(...args);
    this.setData(carData);
  }
  getCars() {
    return this.getData().cars;
  }

  getCurrentCar() {
    return this.getData().currentCar;
  }

  setCurrentCar(id) {
    const cars = this.getCars();
    this.setData({
      currentCar: cars.find((car) => car.id === id),
      cars,
    });
  }

  setCars(newCars) {
    this.setData({
      currentCar: this.getCurrentCar(),
      cars: newCars,
    });
  }
}
