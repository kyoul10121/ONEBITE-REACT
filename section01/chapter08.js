//1. null 병합 연산자
//-> 존재하는 값을 추려내는 기능
//-> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
let var6 = var2 ?? var3;

console.log(var6);
//이렇게 null 병합 연산자에 참여하는 이 두 개의 P-연산자가 둘 다 null이나 undefined이 아니라면 맨 처음에 적힌 값이 반환이 됩니다.
//그래서 var6를 콘솔로 출력해보면 var2의 값인 10이 그대로 출력된다.

//2. typeof 연산자
//-> 값의 타입을 문자열로 반환하는 기능을 하는 연산자 

let var7 = 1;
var7 = "hello";

let t1 = typeof var7; //현재 변수에 저장된 값의 타입이 궁금하다면 typeof함수를 쓰자

//3. 삼항 연산자
//-> 항을 3개 사용하는 연산자
//조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
let var8 = 10;

//요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝수" : "홀수"; //?를 기준으로 왼쪽은 조건식 오른쪽은 콜론을 기준으로 왼쪽은 조건식이 참일때의 반환값 오른쪽은 거짓일때의 반환값
//var8의 값이 2로 나누어 떨어지면 참이고, 참이면 짝수라는 값을 res에 저장하고 , 거짓이라면 홀수라는 값을 res에 저장한다.
console.log(res);