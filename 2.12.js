// null 병합 연산자 '??'
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// null이나 undefined가 아닌 첫 번째 피연산자
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder


// ??와 ||의 차이
// ||는 첫 번째 truthy 값을 반환
// ??는 첫 번째 정의된(defined) 값을 반환
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

// ??sms &&나 ||와 함께 사용하지 못함
let x = 1 && 2 ?? 3; // SyntaxError: Unexpected token '??'



