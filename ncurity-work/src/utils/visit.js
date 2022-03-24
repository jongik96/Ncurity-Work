function dateFormat(date) {
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  month = month >= 10 ? month : "0" + month;
  day = day >= 10 ? day : "0" + day;
  hour = hour >= 10 ? hour : "0" + hour;
  minute = minute >= 10 ? minute : "0" + minute;
  second = second >= 10 ? second : "0" + second;

  return (
    date.getFullYear() +
    "-" +
    month +
    "-" +
    day +
    " " +
    hour +
    ":" +
    minute +
    ":" +
    second
  );
}

/* Top10 방문자 */
// color 설정 추가
function addColor(data) {
  // random color 생성
  let randomColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  };
  let color = new Array();
  for (let i = 0; i < data.length; i++) {
    color[i] = randomColor();
  }
  return color;
}

// 방문자 수 기준으로 정렬
function sortVisitor(visitor) {
  return visitor.sort((b, a) => {
    if (a.visit_count < b.visit_count) return -1;
    else if (a.visit_count > b.visit_count) return 1;
    else return 0;
  });
}

// 순위 정보 추가
function addRank(data) {
  let rank = new Array();
  for (let i = 0; i < data.length; i++) {
    rank[i] = i;
    data[i].rank = i + 1;
    data[i].updated_at = dateFormat(new Date(data[i].updated_at));
  }
  return data;
}

// 총 방문횟수, Top10 방문자들 이름, 방문횟수 반환, 순위 항목 추가
function getVisitData(visitor) {
  // 총 방문횟수
  let visitCount = 0;
  // Top10 방문자들 이름
  let topTenVisitorName = new Array();
  // Top10 방문자들 방문횟수
  let topTenVisitorCount = new Array();

  for (let i = 0; i < visitor.length; i++) {
    topTenVisitorName[i] = visitor[i].name;
    topTenVisitorCount[i] = visitor[i].visit_count;
    visitCount += visitor[i].doc_count;
  }
  let visitData = {
    allCount: visitCount,
    Name: topTenVisitorName,
    Count: topTenVisitorCount,
  };
  return visitData;
}

/* 총 방문횟수 */

// 시간 별 방문자 수
function getVisitCount(visitData) {
  let visitCount = new Array();
  for (let i = 0; i < visitData.length; i++) {
    visitCount[i] = visitData[i].doc_count;
  }
  return visitCount;
}

// // time.json 1일 단위로 나누기
// function getDayVisit(visitData) {
//   let dataArr = new Array();
//   let dayVisit = {
//     label: "",
//     fillColor: "blue",
//     data: [],
//   };

//   for (let i = 0; i < visitData.length / 12 + 1; i++) {
//     dataArr[i] = dayVisit;
//   }
//   for (let i = 0; i < 9; i++) {
//     dataArr[i].dayVisit.label = i + 10;
//   }

//   let divideData = visitData(12);
//   for (let i = 0; i < divideData.length; i++) {
//     dataArr[i].dayVisit.data = divideData[i];
//   }

//   console.log(dataArr);
// }

export {
  sortVisitor,
  addColor,
  addRank,
  getVisitCount,
  // getDayVisit,
  getVisitData,
};
