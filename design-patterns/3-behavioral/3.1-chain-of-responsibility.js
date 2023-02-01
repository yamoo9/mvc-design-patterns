// -----------------------------------------------------------------
// Chain of Responsibility Design Pattern
// -----------------------------------------------------------------
// 각 요청이 메서드(함수) 체인을 통과하는 시스템을 구축할 때 사용합니다.
// 메서드는 요청을 처리하고, 체인의 다른 메서드로 요청을 전달하거나 거부할 수 있습니다.
// 이 패턴은 요청된 사항을 순차적으로 검사해야 하는 시스템에 사용됩니다.
// -----------------------------------------------------------------


class ATM {
  constructor(amount) {
    this.amount = amount;
    console.log(`요청 금액: ${numberWithComma(this.amount)}원`);
  }

  withdraw(bill, unit = '장') {
    let count = Math.floor(this.amount / bill);
    this.amount -= count * bill;
    console.log(`${numberWithComma(bill)}원: ${count}${unit}`);
    return this;
  }

}

function run() {
  const atm = new ATM(98_640);
  atm
    .withdraw(50_000)
    .withdraw(10_000)
    .withdraw(5000)
    .withdraw(1000)
    .withdraw(500, '개')
    .withdraw(100, '개')
    .withdraw(10, '개');
}

run();


function numberWithComma(n) {
  return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}


// Express 웹 서버의 미들웨어(Middlewares)
// 미들웨어는 요청을 처리하고 체인의 다음 미들웨어로 전달합니다.
// 또는 들어오는 요청이 미들웨어에 의해 차단될 수 있습니다.
// 즉, 요청이 유효하지 않은 것으로 간주되는 경우 모든 미들웨어는
// 요청을 거부하고 체인을 통한 전파를 중지할 수 있습니다.
