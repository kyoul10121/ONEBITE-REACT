for ( let idx = 1; idx <= 10; idx++){
    if(idx % 2 === 0){
        continue;       //continue문을 만나게되면 이 반복문 내에 다른 코드들은 실행하지 않고 그냥 바로 다음 반복회차로 넘어가게 된다
    }
    console.log(idx);

    if (idx >= 5){      //조건식을 수정하지 않고 조건문과 함께 break를 이용할 수 있다.
        break;
    }
}

