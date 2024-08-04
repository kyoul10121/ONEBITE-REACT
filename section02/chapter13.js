const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor
    
    setTimeout(() => {
        const num = null;

        if(typeof num === "number"){
            resolve(num + 10);
        }else {
            reject("num이 숫자가 아닙니다.");
        }
    }, 2000);
});


// then
// -> 그 후에 (promise가 성공했을 때에만 실행되는 함수)
promise.then((value) => {
    console.log(value);
});
// catch (promise가 실패했을 때에만 실행)
promise.catch((error) => {
    console.log(error);
});

// Promise Chaining
promise
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });
