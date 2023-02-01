// -----------------------------------------------------------------
// Decorator Design Pattern
// -----------------------------------------------------------------
// 데코레이터 패턴은 객체 생성 방식과 크게 관련되지 않고 기능 확장 문제에 중점을 둡니다.
// 기본 클래스로부터 생성된 객체를 데코레이팅(장식)하여 기능을 추가할 수 있습니다.
// -----------------------------------------------------------------


class MacBookPro {
  constructor() {
    this.cost = 997;
    this.screenSize = 11.6;
  }

  getCost() {
    return this.cost;
  }

  getScreenSize() {
    return this.screenSize;
  }
}


class Memory extends MacBookPro {
  constructor(macBookPro) {
    super();
    this.macBookPro = macBookPro;
  }

  getCost() {
    return this.macBookPro.getCost() + 75;
  }
}


class Engraving extends MacBookPro {
  constructor(macBookPro) {
    super();
    this.macBookPro = macBookPro;
  }

  getCost() {
    return this.macBookPro.getCost() + 200;
  }
}


class Insurance extends MacBookPro {
  constructor(macBookPro) {
    super();
    this.macBookPro = macBookPro;
  }

  getCost() {
    return this.macBookPro.getCost() + 250;
  }
}


let myMacBookPro = new MacBookPro();

myMacBookPro = new Memory(myMacBookPro);
myMacBookPro = new Engraving(myMacBookPro);
myMacBookPro = new Insurance(myMacBookPro);

console.log(myMacBookPro.getCost()); // 1522
console.log(myMacBookPro.getScreenSize()); // 11.6