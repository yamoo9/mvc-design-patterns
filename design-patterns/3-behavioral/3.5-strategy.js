// -----------------------------------------------------------------
// Strategy Design Pattern
// -----------------------------------------------------------------
// 런타임(실행) 중 즉석에서 알고리즘 제품군 중 하나를 선택할 수 있습니다.
// 이 패턴은 알고리즘 계열을 정의하고 각각을 캡슐화하며 클라이언트 간섭 없이
// 런타임 중에 상호 교환 가능하도록 합니다.
// -----------------------------------------------------------------


// 스트레티지(Strategy) 1 
class CGV {
  getTicketPrice(quantity) {
    return quantity * 12_000;
  }
}
 
// 스트레티지(Strategy) 2
class LotteCinema {
  getTicketPrice(quantity) {
    return quantity * 11_000;
  }
}
 
// 스트레티지(Strategy) 3
class MegaBox {
  getTicketPrice(quantity) {
    return quantity * 10_500;
  }
}
 
// 캡슐화(Encapsulation)
class TicketPrice {
  theaterBrand = '';

  setTheaterBrand(brand) {
    this.theaterBrand = brand;
  }

  calculate(quantity) {
    return this.theaterBrand.getTicketPrice(quantity);
  }
}
 
// 사용법(usage)
const cgv = new CGV();
const lotteCinema = new LotteCinema();
const megaBox = new MegaBox();
 
const ticketPrice = new TicketPrice();

ticketPrice.setTheaterBrand(cgv);
console.log(`CGV 티켓(1명) 가격: ${numberWithComma(ticketPrice.calculate(1))}원`);

ticketPrice.setTheaterBrand(lotteCinema);
console.log(`롯데시네마 티켓(2명) 가격: ${numberWithComma(ticketPrice.calculate(2))}원`);

ticketPrice.setTheaterBrand(megaBox);
console.log(`메가박스 티켓(4명) 가격: ${numberWithComma(ticketPrice.calculate(4))}원`);


function numberWithComma(n) {
  return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}