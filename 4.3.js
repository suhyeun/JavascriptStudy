// 가비지 컬렉션
// #1. 참조 두 개

// user엔 객체 참조 값이 저장됩니다.
let user = {
    name: "John"
};
  
let admin = user;

user = null; // user의 값을 다른 값을 덮어씌움
// => 전역 변수 admin을 통하면 여전히 객체 John에 접근할 수 있기 때문에 John은 메모리에서 삭제되지 않음
// => 이 상태에서 admin을 다른 값(null 등)으로 덮어쓰면 John은 메모리에서 삭제될 수 있음

// #2. 연결된 객체
function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
  
    return {
      father: man,
      mother: woman
    }
  }
  
  let family = marry({
    name: "John"
  }, {
    name: "Ann"
  });
  