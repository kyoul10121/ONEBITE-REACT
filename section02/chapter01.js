// 1. Falsy한 값 (7가지)
let f1 = null;
let f2 = undefined;
let f3 = 0;
let f4 = -0;
let f5 = NaN; //not a number
let f6 = ""; //빈 문자열
let f7 = 0n; //Big integer라는 특수한 자료형에 해당되는 값, 아주아주 큰 숫자를 저장할 때 사용.

if(!f1) {
    console.log("falsy");
}

//2. Truthy 한 값
// -> 7가지 Falsy 한 값들 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if(t1){
    console.log("Truthy");
}

//3. 활용사례 : 매개변수로 객체를 받을거라고 생각했지만 실제로는 undefined값이 들어오는 상황, 
/* -> 보통 이렇게 객체의 특정 프로퍼티에 접근하는 이러한 기능들을 담고 있는 함수에서는 
//조건문으로 person의 매개변수의 값이 null이거나 undefined이 아님을 먼저 확인해주어야 한다. */
function printName(person) {
    if (!person) {      //truthy,falsy를 사용하지 않는다면 (person === undefined || person === null)이처럼 조건문이 복잡해진다.
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

let person = { name : "이정환" };
printName(person);

/*person 매개변수의 값이 null이나 undefined으로 들어왔을 경우에는 이 조건문이 거짓으로 평가하기 때문에 
not연산자와 함께 true가 되어서 조건식이 참이 되면서 내부의 코드를 실행하고 함수 종료.
그런데 반대로 name은 이정환이라는 실제 객체값이 들어왔을 경우에는 모두 truthy이기 때문에 
이 조건식은 거짓이 되어 결국 name프로퍼티에 접근할 수 있도록 만들어준다. 
즉 비효율적인 조건문을 좀 더 간결하게 개선할 수 있다.*/
