//원시타입
//1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity;   //양의 무한대
let mInf = -Infinity; //음의 무한대

let nan = NaN; //불가능한 수칙연산을 했을 때의 값으로 나타남

//2. String Type
let myName = "김윤일"; //문자열 사용시에는 쌍따옴표, 작은따옴표 필수, 사용하지않으면 변수명으로 인식함
let myLocation = "목동";
let introduce = myName + myLocation; //String Type에서는 덧셈연산도 지원

//템플릿 리터럴 문법
//backtick - 물결기호를 영어 입력 상태에서 누르면 사용가능
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;
console.log(introduceText);
/*백틱으로 문자열을 만들면 기본적으로는 쌍따옴표로 만든 문자열과 동일하지만 
달러기호와 중괄호를 통해 변수의 값을 동적으로 문자열에 포함시킬 수 있다.*/

//3. Boolean Type
let isSwitchOn = true; //스위치가 켜져있다.
let isEmpty = false;   //비어있지 않다.

//어떠한 현재의 상태를 의미하는 데에 주로 사용된다.

//4. Null Type
let empty = null;
//어떠한 변수에 아무런 값도 저장되어 있지 않음을 표현한다. 개발자가 직접 이 변수에 어떠한 값도 없다고 명시적으로 할당해줘야 하는 값.

//5. Undefined Type
let none;
//변수를 미처 초기화하지 못했거나 아니면 존재하지 않는 어떤 값을 불러오려고 할 때 발생할 수 있는 값, 아무런 값도 할당하지 않았을 때 자동으로 들어가는 값