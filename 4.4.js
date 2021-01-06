// 메서드와 this
// #1. 메서드 만들기
let user = {
    name: "John",
    age: 30
};
  
user.sayHi = function() {
    alert("안녕하세요!");
}; // 메서드
  
user.sayHi(); // 안녕하세요!

// 선언한 함수를 메서드로 등록하기
// 함수 선언
function sayHi() {
    alert("안녕하세요!");
};
  
// 선언된 함수를 메서드로 등록
user.sayHi = sayHi;
  
user.sayHi(); // 안녕하세요!


// #2. 메서드 단축 구문
// 아래 두 객체는 동일하게 동작합니다.
user = {
    sayHi: function() {
      alert("Hello");
    }
};
  
// 단축 구문을 사용하니 더 깔끔해 보이네요.
user = {
    sayHi() { // "sayHi: function()"과 동일합니다.
      alert("Hello");
    }
};

