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


// #3. 생성자와 return문
// 생성자에 return문을 만들기 
// 객체를 리턴하여 this대신 객체가 반환됨
function BigUser() {

    this.name = "John";
  
    return { name: "Godzilla" };  // <-- this가 아닌 새로운 객체를 반환함
}
  
alert( new BigUser().name );  // Godzilla

// return문을 무시
function SmallUser() {

    this.name = "John";
  
    return; // <-- this를 반환함
}
  
alert( new SmallUser().name );  // John

// 인수가 없는 생성자 함수는 괄호를 생략해 호출할 수 있음

// #4. 생성자 내 메서드
function User(name) {
    this.name = name;
  
    this.sayHi = function() {
      alert( "My name is: " + this.name );
    };
}
  
let john = new User("John");
  
john.sayHi(); // My name is: John
  
/*
john = {
    name: "John",
    sayHi: function() { ... }
}
*/