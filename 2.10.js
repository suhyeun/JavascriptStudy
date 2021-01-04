// if문
let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');

if (year == 2015){
    alert("정답입니다!");
    alert("똑똑하시군요!");
}

// 불린형으로의 변환
// if(...) 일때, 괄호 안에 표현식이 false일시 작동하지 않음.
// 반대로 괄호 안이 true일 경우에는 항상 작동함
// 평가를 통해 확정된 불린값을 if문에 전달하기 가능


// else, else if
let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');

if (year < 2015) {
  alert( '숫자를 좀 더 올려보세요.' );
} else if (year > 2015) {
  alert( '숫자를 좀 더 내려보세요.' );
} else {
  alert( '정답입니다!' );
}


// 조건부 연산자 ?
// let result = condition ? value1 : value2;
let accessAllowed = (age > 18) ? true : false;


// 다중 ?
let age = prompt('나이를 입력해주세요.', 18);

let message = (age < 3) ? '아기야 안녕?' :
  (age < 18) ? '안녕!' :
  (age < 100) ? '환영합니다!' :
  '나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!';

alert( message );

// else if를 사용할 시
if (age < 3) {
    message = '아기야 안녕?';
  } else if (age < 18) {
    message = '안녕!';
  } else if (age < 100) {
    message = '환영합니다!';
  } else {
    message = '나이가 아닌 값을 입력 하셨군요!';
  }

  
