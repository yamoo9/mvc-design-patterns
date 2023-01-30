// -----------------------------------------------------------------
// Prototype Design Pattern
// -----------------------------------------------------------------
// 프로토타입 디자인 패턴을 사용해 기존 객체의 복제본을 만들 수 있습니다.
// 이 패턴은 주로 JavaScript에서 상속을 구현하는 데 사용됩니다.
// -----------------------------------------------------------------

// 일반 객체
const note = { name: '노트' };

// Object.create(프로토타입 객체 or 기존 객체)
// note 객체를 프로토타입 객체로 확장
const deathNote = Object.create(note, {
  name: { value: '데스노트', enumerable: true, },
  owner: { value: '야가미 라이토', enumerable: true, },
  pages: { value: 444, enumerable: true, },
  write: { 
    value(action) { return `노트에 적은 내용은 "${action}". 노트에 적은 것은 정확히 실현될 것이다.` },
    enumerable: true,
  },
});

// 프로토타입 객체(note 객체) 확장
Object.defineProperties(note, {
  material: { value: '두꺼운 재질', enumerable: true, configurable: true, },
  waterproof: { value: false, enumerable: true, configurable: true, },
});

// 프로토타입 객체(note 객체) 능력 확장 반영 여부 확인
console.log(deathNote.material); // '두꺼운 재질'

// deathNote 객체 열거형 속성 순환
// - 프로토타입 객체(note 객체)의 확장된 속성은 열거되지 않음.
for (const [key] of Object.entries(deathNote)) {
  console.log(`key: ${key}`); // key: name, owner, pages, write
}