// 5가지 요소 순회 및 탐색 메서드 
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr){
    //console.log(idx, item * 2);
}); /*반복문처럼 순회하면서 매 반복마다 이 콜백 함수를 호출하고 매개 변수로 현재 요소의 값과
현재 반복 카운트와 그리고 전체 배열의 값을 전달해 줍니다. 그러므로 이 콜백함수는 이 배열의 요소의 개수만큼 호출이 될 것이다.
*/

let doubleArr = [];

arr1.forEach((item) => {
    doubleArr.push(item * 2);
})

//console.log(doubleArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3, 1);

//console.log(isInclude); //true

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 배열의 맨 앞에부터 탐색을 시작하기 때문에 가장 첫 번째로 찾아낸 이 요소의 인덱스를 반환한다.
let arr3 = [2, 2, 2];
let index = arr3.indexOf(2);    //현재 배열에 존재하지 않는 값을 찾아달라고 하면 없다는 뜻으로 -1을 출력한다.

//console.log(index);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런 특정 요소의 인덱스(위치)를 반환하는 메서드
//forEach함수처럼 콜백함수를 전달한다, 이렇게 전달한 콜백함수를 만족하는 요소를 배열에서 찾아서 그 인덱스를 반환해준다.
let arr4 = [1, 2, 3];
const findIndex = arr4.findIndex((item) => {
    if (item === 999) return true;
});
//indexOf와 마찬가지로 값이 없다면 -1을 출력한다.
console.log(findIndex);

/*
indexOf는 얕은 비교를 하기 때문에 원시타입은 찾을 수 있지만 복잡한 객체타입은
찾을 수 없다. findIndex는 콜백함수를 이용해서 직접 특정 프로퍼티의 값을 기준으로 비교시킬 수 있기 때문에
복잡한 객체 값도 조건식만 잘 만들어 주면 쉽게 찾아낼 수 있다는 장점이 있다.
*/ 

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [
    { name: '이정환' },
    { name: '홍길동' },
];

const finded = arr5.find(
    (item) => item.name === "이정환"
)

console.log(finded);