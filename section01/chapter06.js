//1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str; //자바스크립트 엔진이 오류를 발생시키지 않기 위해서 num에 있는 10이란 숫자를 문자열로 묵시적으로 변환한다. 특정 하나의 변수의 값을 변환했을 때 오류가 발생하지 않고 잘 종료될 수 있는 경우에만 이런 묵시적 형변환이 일어난다. 

//2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1); //Number라는 내장함수로 10이라는 문자열을 숫자로 변환함

let str2 = "10개";
let strToNum2 = parseInt(str2); //parseInt를 사용하면 숫자값이 아닌 값을 포함하고 있는 문자열도 숫자값으로 잘 변환해준다. but 문자가 앞에 있으면 변환이 안될 수 있음 (1000안녕)
console.log( 10 + strToNum2 );

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다.");