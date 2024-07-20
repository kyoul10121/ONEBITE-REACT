//6가지의 요소 조작 메서드

//1. push
//배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 10];
const poppedItem = arr2.pop();

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드 
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0,3);
console.log(newLength2, arr4);
//shift와 unshift는 push와 pop보다 느리다.

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5);  //arr5[2]부터 arr5[5]전까지 잘라낸다.
//slice의 함수의 두번째 인덱스는 꼭 더하기 1을 하고 넣어줘야 한다.
let sliced2 = arr5.slice(2);    //arr5[2]부터 배열 끝까지 잘라낸다.
let sliced3 = arr5.slice(-3);   //뒤에서부터 3개 잘라낸다.

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);