// while과 for 반복문
// #1.while 반복문
let i = 0;
while (i < 3) { // 0, 1, 2가 출력됩니다.
  alert( i );
  i++;
}

// #2.do while 반복문
//본문이 먼저 실행됨
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);

// #3. for 반복문
for (let i = 0; i < 3; i++) { // 0, 1, 2가 출력됩니다.
    alert(i);
}

// #4. 반복문 빠져나오기
let sum = 0;

while (true) {

  let value = +prompt("숫자를 입력하세요.", '');

  if (!value) break; // (*)

  sum += value;

}
alert( '합계: ' + sum );

// #5. 다음 반복으로 넘어가기
for (let i = 0; i < 10; i++) {

    // 조건이 참이라면 남아있는 본문은 실행되지 않습니다.
    if (i % 2 == 0) continue;
  
    alert(i); // 1, 3, 5, 7, 9가 차례대로 출력됨
}

// #6. break/continue와 레이블
outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`(${i},${j})의 값`, '');
  
      // 사용자가 아무것도 입력하지 않거나 Cancel 버튼을 누르면 두 반복문 모두를 빠져나옵니다.
      if (!input) break outer; // (*)
  
      // 입력받은 값을 가지고 무언가를 함
    }
  }
  alert('완료!');

