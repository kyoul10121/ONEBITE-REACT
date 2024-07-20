 //함수선언
//->직사각형의 넓이를 구하는 함수

function getArea () {
    let width = 10;
    let heigth = 20;
    let ara = width * heigth;

    console.log(area);
}

getArea ();
/*위처럼 고정된 가로와 세로를 가지고 직사각형을 구하기 보단 
동적으로 getArea함수를 호출할 때마다 함수에 우리가 직접 넘겨준 값을 통해서 넓이를 구하도록 바꿔보자*/
/*
함수를 호출할때 소괄호안에 값을 콤마로 구분해서 넣어주면 이 값들을 함수가 받아서 사용할 수 있다.
함수를 호출하면서 함수에게 전달한 이 값들을 각각 인수라고 한다. 
이 인수를 받아서 사용하기 위해서는 함수 선언할 때의 소괄호 안에 변수를 선언한다. 그렇다고 소괄호 안에 let, const를 쓰는 것은 아니고
선언하고 싶은 변수명만 적어주면 된다. 즉 이 함수의 소괄호 안에선 변수의 이름만 써줘도 된다.*/
 //함수호출시 소괄호 반드시 작성

 function getArea (width, heigth) {
    function another() {        //중첩 함수 : 자스에서는 함수안에 함수를 선언 가능.
        console.log("another");
    }
    another();
    let ara = width * heigth;

    return area; //함수안에 리턴이 들어가면 값을 반환하고 종료된다. 그 값이 함수의 결과값이 된다. 리턴문 밑에 어떤 코드가 있어도 실행되지않는다.
}

let area1 = getArea (10, 20);

//인수의 값을 바꿔가면서 동적으로 함수에서 쓸 값들을 계속해서 바꿔가면서 넘겨줄 수 있다.

//c나 java에서는 선언하지 않은 함수를 미리 호출하려고 하면 오류를 발생시키는게 일반적이다. 
//자스에서는 정상적으로 실행시켜준다.
//호이스팅
//-> 끌어올리다 라는 뜻
//실제로 호출문보다 선언문이 아래에 있더라도 내부적으로 알아서 호이스팅 되어 실행되기 때문에 아무런 문제가 없다.
//호이스팅 덕분에 함수선언이 무조건 위에 있지 않아도 되기 때문에 좀 더 유연하게 코드작성을 할 수 있다.