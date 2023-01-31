// -----------------------------------------------------------------
// Adopter Design Pattern
// -----------------------------------------------------------------
// 다른 포멧과 구조를 가진 객체 간 공통의 인터페이스를 사용해 작동할 수 있도록 합니다.
// -----------------------------------------------------------------

// 문제 상황
// - XML만 제공하는 오래된 API
// - JSON만 허용하는 Chart 라이브러리

// 해결 방법
// XML만 제공하는 오래된 API → [어댑터 함수] → JSON만 허용하는 Chart 라이브러리
// 어댑터 함수의 역할 : 호환되지 않는 두 구조를 연결 (XML → JSON 변환)
// 참고
// - https://davidwalsh.name/convert-xml-json
// - https://www.appsloveworld.com/free-online-sample-xml-api-for-testing-purpose
// - https://canvasjs.com/docs/charts/how-to/create-charts-xml-data-ajax


// -----------------------------------------------------------------
// XML → JSON 변환 유틸리티 함수
function xml2json(xml) {
  let obj = {};

  if (xml.nodeType === document.ELEMENT_NODE) {
    if (xml.attributes.length > 0) {
      obj['@attributes'] = Array.from(xml.attributes).reduce(
        (o, attribute, index) => {
          o[attribute.nodeName] = attribute.nodeValue;
          return o;
        },
        {}
      );
    }
  }

  if (xml.nodeType === document.TEXT_NODE) {
    obj = xml.nodeValue;
  }

  if (xml.hasChildNodes()) {
    Array.from(xml.childNodes).forEach((child) => {
      const { nodeName, nodeValue } = child;
      if (!obj[nodeName]) {
        obj[nodeName] = xml2json(child);
      } else {
        if (!('push' in obj[nodeName])) {
          let oldObj = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(oldObj);
        }
        obj[nodeName].push(xml2json(child));
      }
    });
  }

  return obj;
}


// -----------------------------------------------------------------
// 차트 데이터 패치 함수
function fetchChartData() {
  const url = new URL(ENDPOINTS.chart.api);
  url.search = new URLSearchParams(ENDPOINTS.chart.params).toString();

  return fetch(url)
    .then((response) => response.text())
    .then((data) => {
      const xml = new DOMParser().parseFromString(data, 'application/xml');
      const json = xml2json(xml);
      return json;
    })
    .catch((error) => {
      console.error(error.message);
    });
}


// -----------------------------------------------------------------
// API 엔드포인트
const ENDPOINTS = {
  traveler: {
    api: 'http://restapi.adequateshop.com/api/Traveler',
    params: {
      page: 1,
    },
  },
  chart: {
    api: 'https://canvasjs.com/services/data/datapoints.php',
    params: {
      xstart: 5,
      ystart: 10,
      length: 10,
      type: 'xml',
    },
  },
};


// -----------------------------------------------------------------
// Chart 렌더링
let chart = null;

async function renderChart() {
  
  let ctx = document.querySelector('[data-chart-id="myChart"]').getContext('2d');
  const { data: { point } } = await fetchChartData();
  const dataList = point.map(({ x, y }) => Number(x['#text']) + Number(y['#text']));

  const chartOptions = {
    type: 'bar',
    data: {
      labels: '서울 수원 원주 용인 여주 청주 대전 곡성 부산 광주'.split(' '),
      datasets: [{
        label: '🗳️ 투표',
        data: dataList,
        fill: false,
        backgroundColor: '#ff777b',
        borderColor: '#ece9e9',
        borderWidth: 1,
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  }

  if (!chart) { 
    chart = new Chart(ctx, chartOptions);
  } else {
    chart.data.datasets.map((dataset) => {
      dataset.data = dataList;
      return dataset;
    });
    chart.update('active');
  }

}

renderChart();