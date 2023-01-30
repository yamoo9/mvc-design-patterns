// -----------------------------------------------------------------
// Singleton Design Pattern
// -----------------------------------------------------------------
// 접근 가능한 단 하나의 객체만을 사용하며 재사용 목적으로 사용됩니다.
// -----------------------------------------------------------------


// -----------------------------------------------------------------
// 클래스 → 싱글톤
class GlobalState {
  #state = {};

  constructor(initialState = {}) {
    if (GlobalState.instance) { return GlobalState.instance; }
    this.#state = { ...initialState };
    Object.defineProperty(GlobalState, 'instance', { value: this });
  }

  getState(key) {
    const state = this.#state;
    return key ? state[key] : state;
  }

  setState(key, value) {
    if (!key) { return; }
    this.#state[key] = value;
  }
}


// -----------------------------------------------------------------
// IIFE → 싱글톤
const EventBus = (() => {
  let instance = null;

  function EventBus(initialState = {}) {
    if (instance) { return instance; }
    this._state = { ...initialState };
  }

  EventBus.prototype = { 
    ...EventBus.prototype, 
    getState(key) {
      const { _state: state } = this
      return key ? state[key] : state;
    },
    setState(key, value) {
      if (!key) { return; }
      this._state[key] = value;
    }
  };

  return EventBus;
})();


// -----------------------------------------------------------------
// 객체 리터럴 {} === 싱글톤
const singleton = Object.defineProperties({}, {
  _state: {
    value: {},
    writable: true,
  },
  getState: {
    value(key) {
      const { _state: state } = this;
      return key ? state[key] : state;
    }
  },
  setState: {
    value(key, value) {
      if (!key) { return; }
      this._state[key] = value;
    }
  }
});
