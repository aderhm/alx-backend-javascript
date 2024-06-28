import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() { /* eslint-disable-line class-methods-use-this */
    return new Car().cloneCar();
  }
}
