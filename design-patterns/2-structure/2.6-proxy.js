// -----------------------------------------------------------------
// Proxy Design Pattern
// -----------------------------------------------------------------
// 다른 객체에 접근하는 것을 제어하기 위해 대리(proxy)를 제공하는 패턴입니다.
// 프록시 패턴을 사용하면 캐싱(caching) 등 추가 기능을 제공할 수 있습니다.
// -----------------------------------------------------------------

const CURRENCY_TYPE = {
  bitcoin: 'bitcoin',
  ethereum: 'ethereum',
  dogecoin: 'dogecoin',
};

class CryptoCurrencyAPI {
  
  getValue(coin) {
    console.log(`Crypto API에서 직접 호출 됨: ${coin} 현재가`);

    switch(coin) {
      case CURRENCY_TYPE.bitcoin:
        return 38_000;
      case CURRENCY_TYPE.ethereum:
        return 2_775;
      case CURRENCY_TYPE.dogecoin:
        return 0.39;
    }
  }
}

class CryptoCurrencyProxy {
  #api = new CryptoCurrencyAPI();
  #cache = {};

  getValue(coin) {
    return this.#api.getValue(coin);
  }

  getCacheValue(coin) {
    if (!this.#cache[coin]) {
      console.log(`${coin} 값 캐시 됨`);
      this.#cache[coin] = this.#api.getValue(coin);
    }
    return this.#cache[coin];
  }

}

const cryptoCurrencyProxy = new CryptoCurrencyProxy();

console.log('\nUncached ---------------------------------------------------------\n');

let bitcoinValue = cryptoCurrencyProxy.getValue(CURRENCY_TYPE.bitcoin);
console.log(bitcoinValue);

bitcoinValue = cryptoCurrencyProxy.getValue(CURRENCY_TYPE.bitcoin);
console.log(bitcoinValue);

bitcoinValue = cryptoCurrencyProxy.getValue(CURRENCY_TYPE.bitcoin);
console.log(bitcoinValue);

console.log('\nCached ---------------------------------------------------------\n');

let ethereumValue = cryptoCurrencyProxy.getCacheValue(CURRENCY_TYPE.ethereum);
console.log(ethereumValue);

ethereumValue = cryptoCurrencyProxy.getCacheValue(CURRENCY_TYPE.ethereum);
console.log(ethereumValue);

ethereumValue = cryptoCurrencyProxy.getCacheValue(CURRENCY_TYPE.ethereum);
console.log(ethereumValue);


// -----------------------------------------------------------------
// ECMAScript, Proxy 객체
// Proxy 객체를 사용하면 객체의 작업을 가로채 재정의 하는 프록시를 만들 수 있습니다.

console.log('\nES:Proxy ---------------------------------------------------------\n');

const products = {
  browsers: ['IE', 'Firefox']
};

const productsProxy = new Proxy(products, {
  get(obj, prop) {
    if (prop === 'latestBrowser') {
      return obj.browsers[obj.browsers.length - 1];
    }
    
    return obj[prop];
  },
  set(obj, prop, newValue) {
    if (prop === 'latestBrowser') {
      obj.browsers.push(newValue);
      return true;
    }

    if (typeof newValue === 'string') {
      newValue = [newValue];
    }

    obj[prop] = newValue;

    return true;
  },
});

console.log(productsProxy.browsers);

console.log(productsProxy.latestBrowser);

productsProxy.latestBrowser = 'Chrome';

console.log(productsProxy.latestBrowser);

console.log(productsProxy.browsers);

productsProxy.browsers = 'Edge';

console.log(productsProxy.browsers);
