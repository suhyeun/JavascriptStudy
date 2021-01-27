// 함수

// 함수 선언
function showMessage() {
    alert( '안녕하세요!' );
  }
  
showMessage();
showMessage();

// 지역 변수
function showMessage() {
  let message = "안녕하세요!"; // 지역 변수

  alert( message );
}

showMessage(); // 안녕하세요!
alert( message ); // message는 함수 내 지역 변수이기 때문에 에러 발생