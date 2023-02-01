// -----------------------------------------------------------------
// Observer Design Pattern
// -----------------------------------------------------------------
// 객체가 시스템의 한 부분에서 발생한 변경사항을 다른 객체와 통신할 수 있는 방법입니다.
// 이 패턴의 가장 일반적인 예는 알림(notification) 시스템입니다.
// -----------------------------------------------------------------


class Subject {
  #observers = [];

  constructor(name) {
    this.name = name;
  }

  subscribe(observer) {
    console.log('\n[구독]\n', observer.name);
    this.#observers.push(observer);
  }

  unsubscribe(observer) {
    console.log('\n[구독 취소]\n', observer.name);
    this.#observers = this.#observers.filter(o => !Object.is(o, observer));
  }

  notifyObserver(observer) {
    console.log('\n[구독 알림]\n', observer.name);
    let targetObserver = this.#observers.find(o => Object.is(o, observer));
    targetObserver.notify();
  }

  notifyAllObservers() {
    console.log('\n[모든 구독 알림]\n');
    this.#observers.forEach(observer => {
      observer.notify();
    });
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  notify() {
    console.log(`🛎️ ${this.name} 옵저버 알림`);
  }
}


const subject = new Subject();

const obsA = new Observer('observer A')
const obsJ = new Observer('observer J')
const obsZ = new Observer('observer Z')

subject.subscribe(obsA);
subject.subscribe(obsJ);
subject.subscribe(obsZ);

subject.notifyObserver(obsZ);

setTimeout(() => subject.unsubscribe(obsZ), 1000);
setTimeout(() => subject.notifyAllObservers(), 2000);


