// 1. 상수 객체
// 상수 객체 자체는 바꿀 수 없지만 객체의 프로퍼티는 수정 가능
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

// 2. 메서드
// 값이 함수인 프로퍼티를 말함

const person = {
  name: "홍길동",
  // 메서드 선언
  sayHi() {
    console.log("안녕!");
  },
};

person.sayHi();
person["sayHi"]();
