// -----------------------------------------------------------------
// Factory Design Pattern
// -----------------------------------------------------------------
// 객체 생성에 사용될 클래스를 선택할 수 있도록 하는 디자인 패턴입니다.
// -----------------------------------------------------------------


// -----------------------------------------------------------------
// 팩토리 함수 → 클래스 선택 → 객체 생성
function createCommunityMember(type, ...args) {
  switch(type) {
    case PERMISSIONS.guest:
      return new Guest(...args);
    case PERMISSIONS.member:
      return new Member(...args);
    case PERMISSIONS.admin:
      return new Administrator(...args);
    default:
      throw new TypeError('생성 가능한 클래스 타입은 "guest", "member", "administrator" 입니다.');
  }
}

class User {
  constructor(name, age, gender) {
    if (!name) { throw new Error('name 인수 설정은 필수입니다.'); }
    this.name = name;
    if (!age) { throw new Error('age 인수 설정은 필수입니다.'); }
    this.age = age;
    if (!gender) { throw new Error('gender 인수 설정은 필수입니다.'); }
    this.gender = gender;
  }
}

class Guest extends User {
  role = PERMISSIONS.guest;
  permission = Object.freeze({
    read: true,
    write: false,
    delete: false,
  });
}

class Member extends User {
  role = PERMISSIONS.member;
  permission = Object.freeze({
    read: true,
    write: true,
    delete: false,
  });
}

class Administrator extends User {
  role = PERMISSIONS.admin;
  permission = Object.freeze({
    read: true,
    write: true,
    delete: true,
  });
}

const PERMISSIONS = {
  guest: 'guest',
  member: 'member',
  admin: 'administrator',
};


// -----------------------------------------------------------------
// 팩토리 패턴을 응용한 유틸리티 함수

function q(selector, context) {
  if (!selector) {
    throw new TypeError('selector 첫번째 매개변수는 필수 값입니다.');
  }
  return /^#/.test(selector)
    ? getElementById(selector.slice(1))
    : getElementBySelector(selector, context);
}

function getElementById(idName) {
  return document.getElementById(idName);
}

function getElementBySelector(selector, context = document) {
  return context.querySelector(selector);
}
