// 객체를 원시형으로 변환하기
// ToPrimitive
// 특수 객체 메서드를 사용하면 숫자형이나 문자형으로의 형 변환을 원하는 대로 조절할 수 있음

// 객체를 출력하려고 함
alert(obj);

// 객체를 프로퍼티 키로 사용하고 있음
anotherObj[obj] = 123;


// "number"
// 수학적 연산을 적용하려 할 때(객체 - 숫자형 변환), hint는 number가 됨.
// 명시적 형 변환
let num = Number(obj);

// (이항 덧셈 연산을 제외한) 수학 연산
let n = +obj; // 단항 덧셈 연산
let delta = date1 - date2;

// 크고 작음 비교하기
let greater = user1 > user2;

// "defualt"
// 연산자가 기대하는 자료형이 확실하지 않을 때 hint는 default가 됨
// 이항 덧셈 연산은 hint로 `default`를 사용합니다.
let total = obj1 + obj2;

// obj == number 연산은 hint로 `default`를 사용합니다.
if (user == 1) { };

// "boolean" hint는 없음


// Symbol.to.Primitive
obj[Symbol.toPrimitive] = function(hint) {
    // 반드시 원시값을 반환해야 합니다.
    // hint는 "string", "number", "default" 중 하나가 될 수 있습니다.
};