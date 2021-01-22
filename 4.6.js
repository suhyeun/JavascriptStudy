// 옵셔널 체이닝이 필요한 이유
// querySelector(...) 호출 결과가 null인 경우 에러 발생
let html = document.querySelector('.my-element').innerHTML;

// ?.이 추가되기 전에는 문제를 해결하기 위해 && 연산자 사용