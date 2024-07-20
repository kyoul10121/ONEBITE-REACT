//1. if 조건문 (if문)
let num = 9;

if (num >= 10){
    console.log("num은 10이상입니다.");
    console.log("조건이 참 입니다!");
}else if(num >= 5){
    console.log("num은 5이상입니다.");
}else if(num >= 3){
    console.log("num은 3이상입니다.");
}else {
    console.log("조건이 거짓입니다.");
}
//무조건 if로 시작해서 else로 끝나던가 else없이 끝나던가 둘 중 하나여야한다.

//2. Switch 문
//-> if문과 기능 자체는 동일
//-> 다수의 조건을 처리할 때 if보다 더 직관적이다.

let animal = "owl";

switch (animal){
    case "cat" : {
        console.log("고양이");
        break;
    }
    case "dog" : {
        console.log("강아지");
        break;
    }
    case "bear" : {
        console.log("곰");
        break;
    }
    case "snake"
    : {
        console.log("뱀");
        break;
    }
    case "tiger" : {
        console.log("호랑이");
        break;
    }
    default : {
        console.log("그런 동물은 전 모릅니다.");
    }
}
/*스위치 케이스문은 기본적으로 소괄호안에 있는 변수의 값과 일치하는 케이스를 위에서부터 아래로 차례대로 탐색을 한다.
그리고 일치하는 케이스를 만나게되면 그 아래에 있는 모든 코드를 다 수행을 시켜준다. 그래서 기본적으로 모든 케이스에 break를 필수적으로 달아야한다. */
