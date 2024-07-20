// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three] = arr;

//2. 객체의 구조 분해 할당
let person = {
    name : "김윤일",
    age : 27, 
    hobby : "테니스",
};

let {
    age : myAge,     //age라는 프로퍼티의 값을  age라는 변수가 아닌 myAge라는 변수에 할당받고 싶다.
    hobby,
    name,
    extra = "hello", //변수 extra를 만들어서 추가로 기본값("hello")을 설정해줄 수 있다. 기본값 설정을 안한다면 undefined이 나옴.
} = person;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, hobby, extra}) => {
    console.log(name, age, hobby, extra);
}

func(person);   //주의할 점 : 인수로 객체를 넘겼을 때만 중괄호와 함께 구조분해할당을 받을 수 있다.