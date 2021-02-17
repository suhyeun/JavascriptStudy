// 원시값의 메서드
// 자바 스크립트는 우너시값을 마치 객체처럼 다룰 수 있게 해줌

// 객체의 장점 중 하나는 함수를 프로퍼티로 저장할 수 있다는 것입니다.
let john = {
    name: "John",
    sayHi: function() {
      alert("친구야 반갑다!");
    }
  };
  
john.sayHi(); // 친구야 반갑다!

// 원시값을 객체처럼 사용하기
// 인수로 받은 문자열의 모든 글자를 대문자로 바꿔주는 메서드 str.toUpperCase
let str = "Hello";

alert( str.toUpperCase() ); // HELLO

// 원하는 자리에서 소수점 아래 숫자를 반올림 할 수 있는 toFixed(n)
let n = 1.23456;

alert( n.toFixed(2) ); // 1.23

// String / Number / Boolean 을 생성자로 쓰는 것을 추천하지 않음
// 몇몇 상황에서 혼동을 불러일으킴
// ex1)
alert( typeof 0 ); // "number"

alert( typeof new Number(0) ); // "object"!
// 얼럿 창은 무조건 열림

// ex2)
let zero = new Number(0);

if (zero) { // 변수 zero는 객체이므로, 조건문이 참이 됩니다.
  alert( "그런데 여러분은 zero가 참이라는 것에 동의하시나요!?!" );
}
// new를 붙이지 않고 사용 하는 것은 괜찮음

// ex3)
let num = Number("123"); // 문자열을 숫자로 바꿔줌