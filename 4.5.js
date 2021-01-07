// 'new'연산자와 생성자 함수

// #1.생성자함수
// 함수 이름의 첫글자는 대문자로 시작한다
// 반드시 "new"연산자를 붙여 실행한다
function User(name) {
    this.name = name;
    this.isAdmin = false;
}
  
let user = new User("Jack");
  
alert(user.name); // Jack
alert(user.isAdmin); // false


// #2.new.target과 생성자 함수
function User() {
    alert(new.target);
}
  
// "new" 없이 호출함
User(); // undefined
  
//"new"를 붙여 호출함
new User(); // function User { ... }
// 일반적인 방법으로 함수를 호출했다면 new.target은 undefined를 반환 
// 반면 new와 함께 호출한 경우엔 new.target은 함수 자체를 반환



