//1. 대입 연산자
let var1 = 1; //equal sign, '='대입연산자

//2. 산술 연산자 
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1 + 2) * 10; //우선순위가 낮은 연산을 먼저 계산하고 싶을 땐 괄호로 묶어준다.

//3. 복합 대입 연산자 (산술 + 대입)
let num7 = 10;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 10;

//4. 증감 연산자
let num8 = 10;
++num8 //전위 연산 : 바로 적용되는 연산
num8++ //후위 연산 : 다음라인에서 적용되는 연산

//5. 논리 연산자
let or = true || false;

let and = true && false;

let not = !true;

//6. 비교 연산자
let comp1 = 1 === '1'; //==은 자료형이 같은지는 확인불가 
let comp2 = 1 !== 2;

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
