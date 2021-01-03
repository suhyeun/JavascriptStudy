// 기본 연산자
// 피연산자(인수) - 연산자가 연산을 수행하는 대상
// 단항 연산자 - 피연산자를 하나만 받는 연산자 ex) 부호를 뒤집는 -
let x = 1;

x = -x;
alert( x ); // -1

// 이항 연산자 - 두 개의 피연산자를 받는 연산자
let x = 1, y = 3;
alert( y - x ); // 2

// 덧셈 연산자 + (문자열 연결 가능)
// 숫자형이 아닌 피연산자는 숫자형으로 변화합니다.
alert( +true ); // 1
alert( +"" );   // 0

// 뺄셈 연산자 -
// 곱셈 연산자 *
// 나눗셈 연산자 /
// 나머지 연산자 %
// 거듭제곱 연산자 **
// 할당 연산자 =

// 할당 연산자 체이닝
let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4

// 복합 할당 연산자 +=, -=, *= ...
let n = 2;
n += 5; // n은 7이 됩니다(n = n + 5와 동일).
n *= 2; // n은 14가 됩니다(n = n * 2와 동일).

alert( n ); // 14

// 증가 연산자 ++
// 감소 연산자 --
// counter++ - 후위형
let counter = 1;
let a = counter++; // (*) ++counter를 counter++로 바꿈

alert(a); // 1

// ++counter - 전위형
let counter = 1;
let a = ++counter; // (*)

alert(a); // 2

// 반환 값을 사용하지 않는 경우라면 전위형과 후위형엔 차이없음
let counter = 0;
counter++;
++counter;
alert( counter ); // 2, 위 두 라인은 동일한 연산을 수행

// 비트 연산자
// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// 왼쪽 시프트(LEFT SHIFT) ( << )
// 오른쪽 시프트(RIGHT SHIFT) ( >> )
// 부호 없는 오른쪽 시프트(ZERO-FILL RIGHT SHIFT) ( >>> )

// 쉼표 연산자
// 마지막 평과 결과만 반환된다.
let a = (1 + 2, 3 + 4);

alert( a ); // 7 (3 + 4의 결과)