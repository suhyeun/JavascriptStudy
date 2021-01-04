// switch문
let a = 2 + 2;

switch (a) {
  case 3:
    alert( '비교하려는 값보다 작습니다.' );
    break;
  case 4:
    alert( '비교하려는 값과 일치합니다.' );
    break;
  case 5:
    alert( '비교하려는 값보다 큽니다.' );
    break;
  default:
    alert( "어떤 값인지 파악이 되지 않습니다." );
}

// switch/case문 인수엔 어떤 표현식이든 올 수 있음
let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("표현식 +a는 1, 표현식 b+1는 1이므로 이 코드가 실행됩니다.");
    break;

  default:
    alert("이 코드는 실행되지 않습니다.");
}


// 여러 개의 case문 묶기
let a = 3;

switch (a) {
  case 4:
    alert('계산이 맞습니다!');
    break;

  case 3: // (*) 두 case문을 묶음
  case 5:
    alert('계산이 틀립니다!');
    alert("수학 수업을 다시 들어보는걸 권유 드립니다.");
    break;

  default:
    alert('계산 결과가 이상하네요.');
}
