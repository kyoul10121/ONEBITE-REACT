//단락평가 : AND연산과 같은 논리연산식에서 첫 번째 피연산자의 값만으로도 이 연산의 결과를 확정할 수 있다면 그때는 두 번째 피연산자에는 접근조차 안하는 그런 실행방식
function returnFalse(){
    console.log("False 함수");
    return false;
}
function returnTrue(){
    console.log("True 함수");
    return true;
}
//단락평가가 이뤄져서 returnFalse함수값이 false라서 뒤에 어떤 값이 오더라도 false라서 뒤에 returnTrue함수 호출을 생략한 것
//그래서 출력 결과 'False 함수'만 출력된다.
console.log(returnFalse() && returnTrue()); 

//returnTrue함수 호출의 결과인 true로는 결과가 나지 않기 때문에 두번째 피연산자도 호출을 해봐야한다. 그래서 두번째 피연산자의 값인 "true 함수"도 출력되는 것
//특정 조건에 대해서 호출하지 않도록 방지할 수 있는 기능을 가지고 있다.
console.log(returnTrue() && returnFalse());

//+truthy한 값이나 falsy한 값이더라도 단락평가가 이뤄지고 결과가  truthy한 값이나 falsy한 값으로 출력된다.

// 단락 평가 활용 사례
// function printName(person) {
//     if (!person) {     
//         console.log("person의 값이 없음");
//         return;
//     }
//     console.log(person.name);
// } 위의 함수를 단락평가를 이용하여 더 간결하게 개선할 수 있다.
 function printName(person) {
    const name = person && person.name; //person의 매개변수의 값이 현재 undefined이라면 falsy한 값이기 때문에 단락평가에 의해서 두 번째 피연산자는 생략된다.
    console.log(name || "person의 값이 없음");
 }
//person매개변수의 값이 undefined이기 때문에 두번쨰 피연산자에 접근하지 못하고 name에 undefined이 저장되고, undefined or truthy한 문자열이기 때문에 "person의 값이 없음"을 출력한다.
 printName();


 /*name변수에 저장되는 값이 person의 매개변수의 값이 정상적인 문자열로 truthy한 값이기 때문에 두번째 피연산자의 값인
 person.name이 잘 저장이 되고, 그래서 name에 이정환이 저장이 되고 console.log에서도 이정환 or 문자열로 둘다 truthy한 값이기 때문에
 첫번째 truthy한 값이 저장이되어서 이정환이라는 값이 콘솔에 출력된다.
 (+) truthy || truthy 가 되면 첫 번째 truthy한 값이 반환이 되고 ,  truthy && truthy 가 되면 두 번째 truthy한 값이 반환이 된다. */
 printName({ name : "이정환" });