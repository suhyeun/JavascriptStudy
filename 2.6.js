// alert
// 실행되면 사용자가 ‘확인(OK)’ 버튼을 누를 때까지 메시지를 보여주는 창이 계속 떠있음
// 메세지가 있는 작은 창은 모달 창(modal window)라고 함.
alert("Hello");


// prompt
// 두 개의 인수를 받음
// 실행 시 텍스트 메세지와 입력필드, 확인 및 취소 버튼이 있는 모달 창을 띄움
// result = prompt(title, [default]);
// title = 사용자에게 보여줄 문자열
// default = 입력 필드의 초깃값
//default를 감싸는 대괄호는 이 매개변수가 필수가 아닌 선택값이라는 것을 의미함

let age = prompt('나이를 입력해주세요.', 100);
alert(`당신의 나이는 ${age}살 입니다.`); // 당신의 나이는 100살입니다.

// prompt 함수는 사용자가 입력 필드에 기재한 문자열을 반환. 사용자가 입력을 취소한 경우는 null이 반환


// 컨펌 대화상자
// result = confirm(question);
// confirm 함수는 매개변수로 받은 question(질문)과 확인 및 취소 버튼이 있는 모달 창을 보여줌
// 확인시 true, 그 외에는 false 반환
let isBoss = confirm("당신이 주인인가요?");
alert( isBoss ); // 확인 버튼을 눌렀다면 true가 출력됩니다.
