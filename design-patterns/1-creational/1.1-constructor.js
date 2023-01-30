// -----------------------------------------------------------------
// Constructor Design Pattern
// -----------------------------------------------------------------
// JavaScript 객체(인스턴스) 생성을 동일 프로세스를 사용해 생성하는 패턴입니다.
// -----------------------------------------------------------------

// 디자인 패턴이 전통적인 객체 지향 프로그래밍(OOP)에서 온 걸 생각한다면?
// 클래스를 사용해 객체를 생성하는 다른 언어(Java, C# 등)와 마찬가지로
// JavaScript에서도 클래스를 사용해 객체를 생성할 수 있습니다.


// -----------------------------------------------------------------
// 클래스 class
class Todo {
  #done = false;

  constructor(content) {
    this.doit = content;
    Object.defineProperty(this, 'id', {
      value: Todo.generateId(),
      writable: false,
      configurable: false,
      enumerable: true,
    });
  }

  static generateId(limit = 5) {
    let keys = `abcdefghijklmnopqrstuvwxyz`.split(''), key = '';
    while(limit-- > 0) {
      let randomIndex = Math.floor(Math.random() * keys.length);
      key += keys[randomIndex][Math.random() >= 0.5 ? 'toLowerCase' : 'toUpperCase']();
      keys.splice(randomIndex, 1);
    }
    return `todo-${key}`;
  }

  done() { this.#done = true; }
  dont() { this.#done = false; }
}


// -----------------------------------------------------------------
// 생성자 function
function TodoList(list = []) {
  this.list = list.map(item => new Todo(item));
}


// -----------------------------------------------------------------
// 생성자 function + 프로토타입 {}
function TaskList(tasks = []) {
  Object.defineProperty(this, 'tasks', {
    value: tasks.map(task => new Todo(task)),
  });
}

TaskList.prototype = Object.assign(TaskList.prototype, {
  findById(taskId) {
    return this.tasks.find(t => t.id === taskId);
  },
  filterDone() {
    return this.tasks.filter(t => t.done);
  },
  filterDont() {
    return this.tasks.filter(t => !t.done);
  }
});



// -----------------------------------------------------------------
// 클래스 외 다양한 방법도 JavaScript에서는 사용 가능합니다.

// new Object()
const notebook = new Object();
notebook.brand = 'Gram';
notebook.maker = {
  coperation: 'LG',
  website: 'https://brand.lge.co.kr/gram',
};


// 객체 리터럴 {}
const note = { name: '노트' };

  // Object.defineProperty() 
  Object.defineProperty(note, 'pages', {
    value: 264,
    writable: true,
    configurable: true,
    enumerable: true
  });

  // Object.defineProperties()
  Object.defineProperties(note, {
    material: { value: '두꺼운 재질' },
    waterproof: { value: false },
  });


// Object.create()
const otherNote = Object.create(note);