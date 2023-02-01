// -----------------------------------------------------------------
// Composite Design Pattern
// -----------------------------------------------------------------
// 컴포지트 패턴을 잘 나타내는 구조는 폴더와 파일의 관계입니다.
// HTML DOM 트리(tree) 또한 부모-자식, 형제, 부모-자손의 관계를 가집니다.
// React와 같은 JavaScript 프레임워크는 컴포지트 패턴을 사용해 UI를 구축합니다.
// -----------------------------------------------------------------

class File {
  constructor(name) {
    this.name = `[file] ${name}`;
  }

  display() {
    console.log(`- ${this.name}`);
    return this.name;
  }
}

class Directory {
  constructor(name) {
    this.name = `[directory] ${name}`;
    this.files = [];
  }

  add(file) {
    this.files.push(file);
    return this;
  }

  remove(file) {
    let index = this.files.findIndex(f => Object.is(f, file));
    if (index > -1) { this.files.splice(index, 1); }
    return this;
  }

  getFileName(index) {
    return this.files[index].display();
  }

  display() {
    console.log(this.name);
    this.files.forEach((_file, index) => {
      this.getFileName(index)
    });
    return this;
  }
}


const utilsDir = new Directory('utils');
const numberWithCommaFile = new File('numberWithComma');
const currencyFile = new File('currency');

utilsDir
  .add(numberWithCommaFile)
  .add(currencyFile)
  .display();

const componentsDir = new Directory('components');
const tabsFile = new File('tabs');
const buttonFile = new File('button');
const carouselFile = new File('carousel');

componentsDir
  .add(buttonFile)
  .add(carouselFile)
  .add(tabsFile)
  .display();



