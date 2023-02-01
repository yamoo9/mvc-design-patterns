// -----------------------------------------------------------------
// Command Design Pattern
// -----------------------------------------------------------------
// 커맨드 패턴은 일련의 작동 및 처리를 객체로 캡슐화하는 것을 목표로 합니다.
// -----------------------------------------------------------------


const calculationMethods = {
  add(x, ...numbers) {
		return numbers.reduce((result, n) => result + n, x);
	},
	subtract(x, ...numbers) {
		return numbers.reduce((result, n) => result - n, x);
	},
	multiply(x, ...numbers) {
		return numbers.reduce((result, n) => result * n, x);
	},
	divide(x, ...numbers) {
		return numbers.reduce((result, n) => result / n, x);
	},
};

const calculator = {
	execute(command, ...args) {
		if (command in calculationMethods) {
			return calculationMethods[command](...args);
		}
		return false;
	},
};


console.log(calculator.execute('add', 1, 2, 7));
console.log(calculator.execute('subtract', 5, 2, -12));
console.log(calculator.execute('multiply', 11, 2, 9, -3));
console.log(calculator.execute('divide', 10, 2, 8));