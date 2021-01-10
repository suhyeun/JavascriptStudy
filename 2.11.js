// 논리연산자
// 세 종류의 논리 연산자 ||(OR), &&(AND), !(NOT)

// #1.||(OR)
// 하나라도 true라면 true를 반환
// result = a || b;
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

if (1 || 0) { // if( true || false ) 와 동일하게 동작
    alert( 'truthy!' );
}

let hour = 12;
let isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {
    alert( '영업시간이 아닙니다.' ); // 주말이기 때문임
}

// 피연산자가 여러개인 경우
// result = value1 || value2 || value3;
// 피연산자 모두를 평가한 경우(모든 피연산자가 false로 평가되는 경우)엔 마지막 피연산자를 반환

alert( 1 || 0 ); // 1 (1은 truthy임)

alert( null || 1 ); // 1 (1은 truthy임)
alert( null || 0 || 1 ); // 1 (1은 truthy임)

alert( undefined || null || 0 ); // 0 (모두 falsy이므로, 마지막 값을 반환함)

// 변수 또는 표현식으로 구성된 목록에서 첫 번째 truthy 얻기
let firstName = "";
let lastName = "";
let nickName = "바이올렛";

alert( firstName || lastName || nickName || "익명"); // 바이올렛
// 모든 변수가 falsy 였다면 "익명"이 출력됨

// 단락 평가
// 실행시 두번째만 실행
true || alert("not printed");
false || alert("printed");


// #2.&&(AND)
// 두 피연산자가 모두 참일때 true를 반환
// result = a && b;
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( '현재 시각은 12시 30분입니다.' );
}

// 피연산자가 여러개인 경우
// result = value1 && value2 && value3;
// 첫 번째 피연산자가 truthy이면, AND는 두 번째 피연산자를 반환
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// 첫 번째 피연산자가 falsy이면,
// AND는 첫 번째 피연산자를 반환, 두 번째 피연산자는 무시
alert( null && 5 ); // null
alert( 0 && "아무거나 와도 상관없습니다." ); // 0

alert( 1 && 2 && null && 3 ); // null

// 모두 truthy일 경우 마지막 피연산자가 반환
alert( 1 && 2 && 3 ); // 마지막 값, 3


// #3.!(NOT)
// 인수를 하나만 받고, 다음 순서대로 연산을 수행
// 피연산자를 불린형으로 변환
// result = !value;

alert( !true ); // false
alert( !0 ); // true

alert( !!"non-empty string" ); // true
alert( !!null ); // false

// 내장함수 Boolean을 사용할 경우 !!와 같은 결과를 도출할 수 있음
alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false