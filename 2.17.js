// #1.화살표 함수 기본
// let func = (arg1, arg2, ...argN) => expression

let sum = (a, b) => a + b;

/* 위 화살표 함수는 아래 함수의 축약 버전입니다.

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3
 // 인수가 하나밖에 없다면 인수를 감싸는 괄호를 생략할 수 있음
 // 인수가 하나도 없을 경우에는 괄호를 비워놓음


 // #2. 본문이 여러 줄인 화살표 함수
let sum = (a, b) => {  // 중괄호는 본문 여러 줄로 구성되어 있음을 알려줍니다.
    let result = a + b;
    return result; // 중괄호를 사용했다면, return 지시자로 결괏값을 반환해주어야 합니다.
};
  
alert( sum(1, 2) ); // 3


