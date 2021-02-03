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