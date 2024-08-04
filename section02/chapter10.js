// 1. Date 객체 생성
let date1 = new Date(); // 생성자
let date2 = new Date("2002/06/20/10:10:10"); // 특정 날짜, 시간을 기준으로 생성 : 인수에 문자열로 특정 날짜 넣기
let date3 = new Date(2002,6,20,10,10,10); // 콤마를 구분자로 사용하여 숫자로 넣어도 가능하다.

// 2. 타임 스탬프 : 복잡한 형태를 가지고 있는 시간정보를 간단한 숫자로 표현가능하기 때문에 실무에서도 많이 사용한다.
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값 (특정 시간 : UTC(세계 모든나라의 표준 시작 시간))
let timeStemp = date1.getTime();    //getTime() : date1의 객체 안에 있는 시간에 해당하는 타임스탬프를 계산해서 반환
let date4 = new Date(timeStemp);
console.log(date1, date4);  // 새로운 date객체를 선언하여 인수값으로 타임스탬프를 넣으면 타임스탬프에 해당하는 시간으로 date객체가 생성된다.

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1;   // JS에서 월은 0부터 시작함, 배열의 인덱스와 비슷하다.
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(
    year,
    month,
    date,
    hour,
    minute,
    seconds
);

// 4. 시간 수정하기 
date1.setFullYear(2023);
date1.setMonth(2);  // JS에서 월은 0부터 시작하므로 3월로 변경하고 싶다면 2로 적어야함.
date1.setDate(15);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);
    //console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());  // 시간 제외한 날짜만 출력
console.log(date1.toLocaleString());// 영어포맷이 아닌 현지화 포맷으로 출력
