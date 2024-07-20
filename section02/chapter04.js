// 1. spread 연산자
// -> spread : 흩뿌리다. 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할


//배열
let arr1 = [1, 2, 3];
//let arr2 = [4, arr1[0], arr1[1], 5, 6];  //이렇게 인덱스로 일일이 배열을 펼쳐놓는것은 위험한 방법, 배열은 중간에 값을 바꾸려고 쓰는 것이라 값이 삭제되거나 수정될 수 있다. 이럴때 스프레드 연산자를 사용하면 안전하다. 
let arr2 = [4, ...arr1, 5, 6];  //...arr1 : arr1의 모든 요소들을 일일이 풀어헤쳐라라는 의미


//객체
let obj1 ={
    a : 1,
    b : 2,
};

let obj2 = {
    ...obj1,
    c : 3,
    d : 4,
};

function funcA(p1, p2, p3){
   // console.log(p1, p2, p3);
};

funcA(...arr1); //funcA함수에서는 arr1의 값이 3개니까 3개의 매개변수가 들어올 것을 예상하고 p1,p2,p3를 만들어서 값을 받아올 수 있다.

// 2. Rest 매개변수
// -> Rest는 나머지,  나머지 매개변수
//여러개의 매개변수를 받아야 할 때 배열 형태로 한 방에 여러 개의 매개변수를 받아올 수 있도록 해주는 문법
// -> Rest 매개변수 뒤에는 추가로 다른 매개변수를 더 선언할 수 없다. 반드시 Rest매개변수는 마지막에 와야한다. 
// -> 첫번째 매개변수의 경우에는 꼭 다른 이름으로 받고 싶다면 rest매개변수 앞에 적어주면 된다. 앞에 적는 건 가능.

function funcB(...rest) {//참고로 ... 은 매개변수를 정의하는 공간인 소괄호 안에 사용되었기 때문에 spread연산자와는 다르다는 것을 주의하자.
    console.log(rest);
};
funcB(...arr1);
