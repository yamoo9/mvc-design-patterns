// -----------------------------------------------------------------
// Facade Design Pattern
// -----------------------------------------------------------------
// 파사드 패턴은 기존 인터페이스를 추상화화여 보다 편리한 인터페이스를 제공하는 방법입니다.
// -----------------------------------------------------------------

class Facade {
  static create(url, body, options) {
    const facade = new Facade({
      url,
      method: 'POST',
      body,
      ...options,
    });

    return facade.fetch();
  }

  static read(url, params = null, options) {
    const facade = new Facade({
      url,
      params,
      ...options,
    });

    return facade.fetch();
  }

  static update(url, body, options) {
    const facade = new Facade({
      url,
      method: 'PUT',
      body,
      ...options,
    });

    return facade.fetch();
  }

  static delete(url, options) {
    const facade = new Facade({
      url,
      method: 'DELETE',
      ...options,
    });

    return facade.fetch();
  }

  constructor(
    /* options */ { url, params = {}, body = null, method = 'GET' } = {}
  ) {
    this.url = new URL(url);
    this.url.search = new URLSearchParams(params).toString();
    this.method = method;
    this.body = JSON.stringify(body);
  }

  fetch() {
    return fetch(this.url, {
      method: this.method,
      body: this.method.includes('GET') ? null : this.body,
    })
      .then((response) => response.json())
      .catch((error) => ({ error }));
  }
}


// -----------------------------------------------------------------
// 파사드 패턴이 적용된 클래스를 사용한 유틸리티 함수

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';


// CREATE
function createUser(newUser) {
  Facade
    .create(ENDPOINT, newUser)
    .then((data) => console.log('📢 POST: 새 사용자 생성 됨.\n', data));
}


// READ
function readUser(userId) {
  Facade
    .read(`${ENDPOINT}${userId ? `/${userId}` : ''}`)
    // .then((data) => console.log(`📢 GET: id 값이 ${userId}인 사용자 가져 옴.\n`, data));
    .then(({ id, name, username, email, website }) => 
      console.log(`📢 GET: id 값이 ${userId}인 사용자 가져 옴.\n`, { id, name, username, email, website })
    );
}


// UPDATE
function updateUser(userId, editUser) {
  Facade
    .update(`${ENDPOINT}/${userId}`, editUser)
    .then((data) => console.log(`📢 PUT: id 값이 ${userId}인 사용자 수정 됨.\n`, data));
}


// DELETE
function deleteUser(userId) {
  Facade
    .delete(`${ENDPOINT}/${userId}`)
    .then((data) => console.log(`📢 DELETE: id 값이 ${userId}인 사용자 삭제 됨.\n`, data));
}


// -----------------------------------------------------------------
// 데모(시연)

let TIMEMOUT = 1000;
const updateTimeout = (amount = 1000) => TIMEMOUT += amount;

setTimeout(() => {
  createUser({
    name: 'Jee Hoon',
    username: 'yamoo9',
    email: 'yamoo9@euid.dev',
    website: 'euid.dev',
  });
}, TIMEMOUT);

setTimeout(() => readUser(9), updateTimeout());

setTimeout(() => {
  updateUser(9, {
    name: 'Park Ju Ah',
  });
}, updateTimeout());

setTimeout(() => deleteUser(4), updateTimeout());