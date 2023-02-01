// -----------------------------------------------------------------
// Template Method Design Pattern
// -----------------------------------------------------------------
// 서브 클래스가 알고리즘 구조를 변경하지 않고도 특정 단계를 재정의할 수 있습니다.
// 쉽게 말해 서브 클래스가 구현해야 할 상위 클래스를 정의한 후
// 상위 클래스의 특정 메서드를 서브 클래스에서 재정의할 수 있도록 하는 패턴입니다.
// -----------------------------------------------------------------


class HouseTemplate {
	constructor(name, address) {
		this.name = name;
		this.address = address;
	}

	buildHouse() {
		this.buildFoundation();
		this.buildPillars();
		this.buildWalls();
		this.buildWindows();
		console.log(`${this.address}에 ${this.name} 하우스 빌드에 성공했습니다.`);
	}

	buildFoundation() {
		console.log('기초 공사...');
	}

	buildPillars() {
		throw new Error('하우스 특성에 따른 기둥을 만들어야 합니다.');
	}

	buildWalls() {
		throw new Error('하우스 특성에 따른 벽을 만들어야 합니다.');
	}

	buildWindows() {
		console.log('창문 공사');
	}
}

class WoodenHouse extends HouseTemplate {
	constructor(name, address) {
		super(name, address);
	}

	buildPillars() {
		console.log('우드 하우스를 위한 기둥 공사');
	}

	buildWalls() {
		console.log('우드 하우스를 위한 벽 공사');
	}
}

class BrickHouse extends HouseTemplate {
	constructor(name, address) {
		super(name, address);
	}

	buildPillars() {
		console.log('브릭 하우스를 위한 기둥 공사');
	}

	buildWalls() {
		console.log('브릭 하우스를 위한 벽 공사');
	}
}


const woodenHouse = new WoodenHouse('나무 집', '강원도 원주시');
const brickHouse = new BrickHouse('벽돌 집', '서울시 성북구');

woodenHouse.buildHouse();
brickHouse.buildHouse();