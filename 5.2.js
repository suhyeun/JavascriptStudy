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