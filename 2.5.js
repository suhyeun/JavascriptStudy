// 자료형

// 자바 스크립트는 대입하는 값에 따라서 자료형이 바뀐다.
// 이를 동적타입 이라고 함.

// #1.숫자형
let n = 1.3; // 정수
n = 123; // 부동소수점
n = 1 / 0; // 무한대 (어느 숫자든 0으로 나누면 무한대를 얻을 수 있음)
n = Infinity // 무한대

// NaN = 계산 중 에러가 발생함을 나타내는 값


// #2.BigInt
// 정수 리터럴 끝에 n을 붙이면 만들 수 있음
const BigInt = 12344567891234567890n;


// #3. 문자형
// 자바 스크립트에는 글자형(char)은 존재하지 않음
let str = "Hello"; // 큰따옴표
let str2 = 'Single auotes are ok too'; // 작은따옴표
let phrase = `can embed another ${str}`; // 역 따옴표

// 역 따옴표로 변수나 표현식을 감싼 후 ${} 안에 넣으면 원하는 변수나 표현식을 문자열 중간에 손쉽게 넣을 수 있음.
let name = "John";

// 변수를 문자열 중간에 삽입
alert( `Hello, ${name}!` ); // Hello, John!

// 표현식을 문자열 중간에 삽입
alert( `the result is ${1 + 2}` ); // the result is 3

// 큰따옴표는 확장 기능을 지원하지 않습니다.
alert( "the result is ${1 + 2}" ); // the result is ${1 + 2}


// #4.불린형
// true와 false로 나뉨
let nameFieldChecked = true; // 네, name field가 확인되었습니다(checked).
let ageFieldChecked = false; // 아니요, age field를 확인하지 않았습니다(not checked)

// 비교 결과를 저장할 때 사용 
let isGreater = 4 > 1;
alert( isGreater ); // true


// #5.null
let age = null;


// #6.undefined
// 값이 할당 되지 않은 상태
// 변수는 선언했지만 값을 할당하지 않았다면 해당 변수에 자동으로 할당
let age;
alert(age); // undefined

let age = 100;
// 값을 undefined로 바꿈
age = undefined;
alert(age); // "undefined"


// #7.객체와 심볼
// 객체(object) 형
// 객체형을 제외한 다른 자료형은 문자열이든 숫자든 한 가지만 표현할 수 있기 때문에 원시 자료형이라 부름
// 반면 객체는 데이터 컬렉션이나 복잡한 개체를 표현할 수 있음.

// 심볼(symbol)형
// 고유한 식별자를 만들때 사용


// #8.typeof 연산자
// 인수의 자료형을 반환함.
// 연산자: typeof x
// 함수: typeof(x)

typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object", 수학 연산을 제공하는 내장 객체이기때문
typeof null // "object", 언어 자체의 오류
typeof alert // "function", 피연산자가 함수일 시 function 반환

