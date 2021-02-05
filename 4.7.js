// 심볼형

// id는 새로운 심볼이 됨
let id = Symbol();

// 심볼 id에는 "id"라는 설명이 붙음
let id = Symbol("id");

// 심볼은 문자형으로 자동 형 변환되지 않음

// 숨김 프로퍼티
let user = { // 서드파티 코드에서 가져온 객체
    name: "John"
};
let id = Symbol("id");
user[id] = 1; 
alert( user[id] ); // 심볼을 키로 사용해 데이터에 접근할 수 있습니다.


// Symbols in a literal
let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123 // "id": 123은 안됨
};


// 심볼은 for ... in.. 에서 배제됨
let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) alert(key); // name과 age만 출력되고, 심볼은 출력되지 않습니다.

// 심볼로 직접 접근하면 잘 작동합니다.
alert( "직접 접근한 값: " + user[id] );

// 전역 심볼
// 전역 레지스트리에서 심볼을 읽음
let id = Symbol.for("id"); // 심볼이 존재하지 않으면 새로운 심볼을 만듦

// 동일한 이름을 이용해 심볼을 다시 읽음.(멀리 떨어진 코드에서도 가능)
let idAgain = Symbol.for("id");

// 두 심볼은 같음.
alert( id === idAgain ); // true
