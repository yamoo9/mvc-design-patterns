// -----------------------------------------------------------------
// Module Design Pattern
// -----------------------------------------------------------------
// 모듈은 특정 코드 조각을 독립적으로 유지하기 위해 가장 널리 사용되는 디자인 패턴입니다.
// 모듈을 사용하면 코드를 캡슐화(외부 접근으로부터 보호)할 수 있습니다.
// -----------------------------------------------------------------


// IIFE 모듈 패턴 (비공개 / 공개)
const toggler = (() => {

  // private
  toggleState = false;

  // public
  return {
    get toggled() {
      return toggleState;
    },
    toggle() {
      this.toggled ? this.off() : this.on();
    },
    on() {
      toggleState = true;
    },
    off() {
      toggleState = false;
    }
  };

})();


// Class 모듈 패턴 (비공개 / 공개)
class Toggler {

  #toggleState = false;

  constructor(initialToggleState) {
    this.#toggleState = initialToggleState;
  }

  get toggled() {
    return this.#toggleState;
  }

  on() {
    this.#toggleState = true;
  }

  off() {
    this.#toggleState = false;
  }

  toggle() {
    this.toggled ? this.off() : this.on();
  }
  
}
