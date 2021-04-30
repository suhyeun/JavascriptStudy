// 따옴표
let single = '작은따옴표';
let double = "큰따옴표";
let backticks = `백틱`; // 표현식을 ${…}로 감싸고 이를 백틱으로 감싼 문자열 중간에 넣어주면 해당 표현식을 문자열 중간에 쉽게 삽입
// 템플릿 리터럴(template literal)

// ex)
function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.


let guestList = `손님:
 * John
 * Pete
 * Mary
`;

alert(guestList); // 손님 리스트를 여러 줄에 걸쳐 작성

// 따옴표를 이용해 만든 여러 줄 문자열과 백틱을 이용해 만든 여러 줄 문자열은 표현 방식만 다를 뿐 차이가 없음

let str1 = "Hello\nWorld"; // '줄 바꿈 기호'를 사용해 두 줄짜리 문자열을 만듦

// 백틱과 일반적인 줄 바꿈 방법(엔터)을 사용해 두 줄짜리 문자열을 만듦
let str2 = `Hello
World`;

alert(str1 == str2); // true