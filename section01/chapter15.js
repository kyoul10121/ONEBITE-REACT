//객체(object) : 객체를 이용하면 현실세계에 존재하는 어떤 사물이나 개념을 표현하기 용이함.
//ex.김윤일이라는 나의 정보를 객체안에 넣어 변수의 값으로 저장할 수 있다.
let person = {
    name : "김윤일",
    nickname : "nilnil",
    age : 27,
    location : "student"
};

//1. 객체 생성
let obj1 = new Object(); //객체 생성자
let obj2 = {};  //객체 리터럴 (대부분 간결한 리터럴 방식을 사용한다)

//2. 객체 프로퍼티 (객체 속성) : 프로퍼티들은 객체의 실질적인 정보를 담고 있는 역할을 한다. 
let person1 = {

    name : '김윤일', 
    age : 23,
    hobby : "테니스",
    extra : {},
    10 : 20,
    "like cat" : true,  
}

//프로퍼티는 콜론을 기준으로 왼쪽에는 프로퍼티 이름을 뜻하는 key, 오른쪽에는 프로퍼티의 값인 value를 적어주면 된다.
//프로퍼티는 key로 불리고 개수 상관 없이 만들 수 있다. 띄어쓰기가 들어간 문자열을 키로 사용하고자 한다면 따옴표로 감싸주어야 한다.
//value는 아무거나와도 상관없다 문자열, 객체 , 배열 ,함수 등등 모두 가능

//3. 객체 프로퍼티를 다루는 방법
//3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법 )
let name = person1.name; //점 표기법
let age = person1["age"]; //괄호 표기법 : 프로퍼티의 키를 꼭 쌍따옴표와 함께 문자열로 작성해야한다.

let property = "hobby"; //괄호 표기법에서는 변수에 접근하고자 하는 키 값을 담아서 프로퍼티를 꺼내올 수 있기 때문에 동적으로 프로퍼티를 변화시킬 수 있다. 
let hobby = person[property];

//3.2 새로운 프로퍼티를 추가하는 방법 (똑같이 점, 괄호)
person.job = "docter";
person["favoriteFood"] = "마라탕";

//3.3 프로퍼티 수정하는 방법 (똑같이 점, 괄호 사용)
person.job = "developer";
person["favoriteFood"] = "칸쵸";

//3.4 프로퍼티 삭제하는 방법 (delete 사용)
delete person.job;
delete person["favoriteFood"];

//3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
/* in 왼쪽에 있는 name이라는 키값을 가진 프로퍼티가 오른쪽에 있는 person객체 안에 있느냐 없느냐를 물어보는 연산자.
그래서 존재하면 true 없으면 false를 반환한다. */
