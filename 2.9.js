// 비교 연산자
// 크거나 작음 a>b, a<b
// 보다 크거나 작거나 같음 a>=b, a<=b
// 같음 a==b
// 같지 않음 a!=b

// 반환값은 불린형
alert( 2 > 1 );  // true
alert( 2 == 1 ); // false
alert( 2 != 1 ); // true

// 할당가능
let result = 5 > 4; // 비교 결과를 변수에 할당
alert( result ); // true

// 문자열 비교(유니코드순으로 비교)
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

// 다른 형을 가진 값 간의 비교
alert( '2' > 1 ); // true, 문자열 '2'가 숫자 2로 변환된 후 비교가 진행
alert( '01' == 1 ); // true, 문자열 '01'이 숫자 1로 변환된 후 비교가 진행


// 일치 연산자 === <=> !==
// 동등 연산자의 엄격한 형태
alert( 0 === false ); // false, 피연산자의 형이 다르기 때문


// null이나 unfined와 비교하기
alert( null === undefined ); // fal
alert( null == undefined ); // true
// 산술 연산자나 기타 비교 연산자로 비교 시
// null과 undefined는 숫자형으로 변환. null은 0, undefined는 NaN으로 변환.


// null vs 0
alert( null > 0 );  // false, 숫자형으로 변환
alert( null == 0 ); // false
alert( null >= 0 ); // true, 숫자형으로 변환


// 비교가 불가능한 unfined
// unfined는 다른 값과 비교해서는 안됌

