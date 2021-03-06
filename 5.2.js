// 숫자형
// 자바 스크립트는 숫자를 나타내는 두 가지 자료형을 지원


// 숫자를 입력하는 다양한 방법
// 1. 직접 쓰기
let billion = 1000000000;

// 2. e 붙이기 (e왼쪽의 수에 e 오른쪽에 있는 수만큼 10의 거듭제곱을 곱하는 효과가 있음)
let billion = 1e9;  // 10억, 1과 9개의 0

alert( 7.3e9 );  // 73억 (7,300,000,000)

1e3 = 1 * 1000
1.23e6 = 1.23 * 1000000


// 1마이크로초 표현하기
let ms = 0.000001;

// 작은 숫자를 표현 할 때도 e를 사용할 수 있음
let ms = 1e-6; // 1에서 왼쪽으로 6번 소수점 이동

// 10을 세 번 거듭제곱한 수로 나눔
1e-3 = 1 / 1000  // (=0.001)

// 10을 여섯 번 거듭제곱한 수로 나눔
1.23e-6 = 1.23 / 1000000  // (=0.00000123)


// 16진수 2진수 8진수
// 16진수는 0x를 사용해 표현
alert( 0xff ); // 255
alert( 0xFF ); // 255 (대·소문자를 가리지 않으므로 둘 다 같은 값을 나타냅니다.)

// 2진수와 8진수는 드물게 사용하나 접두사 0b와 0o를 사용해 표현
let a = 0b11111111; // 255의 2진수
let b = 0o377; // 255의 8진수

alert( a == b ); // true, 진법은 다르지만, a와 b는 같은 수임


// toString(base)
let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111


// 어림수 구하기
// 1. Math.floor
// 소수점 첫째 자리에서 내림

// 2. Math.ceil
// 소수점 첫째 자리에서 올림

// 3. Math.round
// 소수점 첫째 자리에서 반올림

// 4. Math.trunc
// 소수부를 무시

// 곱하기와 나누기
let num = 1.23456;
alert( Math.floor(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23

// 소수점 n 번째 수까지의 어림수를 구한 후 이를 문자형으로 반환해주는 메서드인 toFixed(n)를 사용합니다
let num = 12.34;
alert( num.toFixed(1) ); // "12.3"

// toFixed는 Math.round와 유사하게 가장 가까운 값으로 올림 혹은 버림
let num = 12.36;
alert( num.toFixed(1) ); // "12.4"

// toFixed를 사용할 때 주의할 점은 이 메서드의 반환 값이 문자열이라는 것. 소수부의 길이가 인수보다 작으면 끝에 0이 추가
let num = 12.34;
alert( num.toFixed(5) ); // "12.34000", 소수부의 길이를 5로 만들기 위해 0이 추가

// 참고 : num.toFixed(5)처럼 단항 덧셈 연산자를 앞에 붙이거나 Number()를 호출하면 문자형의 숫자를 숫자형으로 변환할 수 있음


// 부정확한 계산
// 숫자가 너무 커질시 64bit 공간이 넘쳐나 Infinity로 처리
alert( 1e500 ); // Infinity

// 정밀도 손실(loss of precision)
alert( 0.1 + 0.2 == 0.3 ); // false
// 0.1 + 0.2 == 0.3의 실제 값은?
alert( 0.1 + 0.2 ); // 0.30000000000000004
// 문제 해결 방법은? - toFixed(n) 메서드 사용하기
let sum = 0.1 + 0.2;
alert( sum.toFixed(2) ); // 0.30

// toFixed는 항상 문자열을 반환하기 때문에 주의
// 문자형으로 바뀐 숫자를 다시 숫자형으로 변환하려면 단항 덧셈 연산자를 사용하면 됨
let sum = 0.1 + 0.2;
alert( +sum.toFixed(2) ); // 0.3

// 숫자에 임시로 100(또는 더 큰 숫자)를 곱하여 정수로 바꾼 후, 다시 100으로 나누는 것도 하나의 방법이 될 수 있음
alert( (0.1 * 10 + 0.2 * 10) / 10 ); // 0.3
alert( (0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001

// 소수점 n 번째 수까지의 어림수를 구한 후 이를 문자형으로 반환해주는 메서드인 toFixed(n)를 사용
let num = 12.34;
alert( num.toFixed(1) ); // "12.3"


// 자바 스크립트는 숫자 손실이 일어나도 오류를 발생시키지 않음

// 두 종류의 0
// 자바 스크립트는 0과 -0이 존재
// 차이는 두드러지지 않음


// isNaN과 isFinite
// isNaN(value) – 인수를 숫자로 변환한 다음 NaN인지 테스트
alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true

alert( NaN === NaN ); // false

alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, NaN이기 때문
alert( isFinite(Infinity) ); // false, Infinity이기 때문

let num = +prompt("숫자를 입력하세요.", '');

// 숫자가 아닌 값을 입력하거나 Infinity, -Infinity를 입력하면 false가 출력
alert( isFinite(num) );


// parseInt와 parseFloat
alert( +"100px" ); // NaN
