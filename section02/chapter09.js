//5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    { name: "이정환", hobby: "테니스" },
    { name: "김효빈", hobby: "테니스" },
    { name: "홍길동", hobby: "독서" },

];

const tennisPeople = arr1.filter(
    (item) => item.hobby === "테니스"
);

console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 변환
// forEach함수와 같이 매개변수를 전달받고, 필터함수도 동일함
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
    return item * 2;
});

let names = arr1.map((item) => item.name);

console.log(names);

// 3. sort
// 원본 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();

//배열을 숫자 대소를 비교하여 정렬하려고 할 떄(오름차순)
let arr4 = [1, 5, 2];
const sort = arr4.sort((a, b) => {
    if(a>b){
        //b가 a앞으로 와라  
        return 1;   // 양수 -> b, a 배치
    }else if(a < b){
        //a가 b앞으로 와라 
        return -1;  // 음수 -> a, b 배치
    }else{
        //두 값의 자리를 바꾸지 마라
        return 0;   // a, b 자리를 그대로 유지
    }
});

//4. toSorted (가장 최근에 추가된 최신 함수)
//원본 배열은 놔두고 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

//5. join
//배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join(" ");  //인수로 바꾸고 싶은 구분자로 바꿀 수 있다("-" 등등)
console.log(joined);