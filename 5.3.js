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

// 유니코드를 사용한 예시
alert( "\u00A9" ); // ©
alert( "\u{20331}" ); // 佫, 중국어(긴 유니코드)
alert( "\u{1F60D}" ); // 😍, 웃는 얼굴 기호(긴 유니코드)

// 이스케이프 문자(escape character) or 역슬래시(backslash character)
// 역슬래시는 문자열 내에 따옴표를 넣을 때도 사용
alert( 'I\'m the Walrus!' ); // I'm the Walrus!


alert( `I'm the Walrus!` ); // 따옴표 대신 백틱으로 감싸주면 따옴표를 확인 가능

alert( `역슬래시: \\` ); // 역슬래시를 보여줘야 할 경우 2개를 연속으로 붙임

// 문자열의 길이
// length 프로퍼티엔 문자열의 길이가 저장
alert( `My\n`.length ); // 3

// 특정 글자에 접근하기
// 문자열 내 특정 위치인 pos에 있는 글자에 접근하려면 [pos]같이 대괄호를 이용하거나 str.charAt(pos)라는 메서드를 호출
// 위치는 0부터 시작
let str = `Hello`;

// 첫 번째 글자
alert( str[0] ); // H
alert( str.charAt(0) ); // H

// 마지막 글자
alert( str[str.length - 1] ); // o

// 근래에는 대괄호를 이용하는 방식을 사용  charAt은 하위 호환성을 위해 남아있는 메서드
// 두 접근 방식의 차이는 반환할 글자가 없을 때 드러남 접근하려는 위치에 글자가 없는 경우 []는 undefined를, charAt은 빈 문자열을 반환
let str = `Hello`;

alert( str[1000] ); // undefined
alert( str.charAt(1000) ); // '' (빈 문자열)

// for..of를 사용하면 문자열을 구성하는 글자를 대상으로 반복 작업을 할 수 있음

for (let char of "Hello") {
  alert(char); // H,e,l,l,o (char는 순차적으로 H, e, l, l, o가 됩니다.)
}

