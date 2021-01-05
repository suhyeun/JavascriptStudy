// 객체
// 원시형과 달리 다양한 데이터를 담을 수 있음

// 빈 객체 생성하기
let user = new Object(); // '객체 생성자' 문법
let user = {};  // '객체 리터럴' 문법

// 중괄호 안에는 '키:값' 쌍으로 구성된 프로퍼티가 들어감
let user = {     // 객체
    name: "John",  // 키: "name",  값: "John"
    age: 30        // 키: "age", 값: 30
};

// 프로퍼티 값 얻기
alert( user.name ); // John
alert( user.age ); // 30

let user = {
    name: "John",
    age: 30,
    "likes birds": true  // 복수의 단어는 따옴표로 묶어야 합니다.
  };

// 마지막 프로퍼티 끝은 쉼표로 끝날 수 있음
let user = {
    name:"John",
    age:30, // trailing(길게 늘어지는)’ 혹은 ‘hanging(매달리는) 쉼표 라고 함
}


// #2.대괄호 표기법
// 여러 단어를 조합해 프로퍼티 키를 만든 경우에는 점 표기법을 사용하여 프로퍼티 값을 읽을 수 없음

// 문법 에러가 발생합니다.
//user.likes birds = true

// 에러가 안나기 위해서는?
let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];