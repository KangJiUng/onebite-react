// 1. 변수
let age = 27;
console.log(age);

age = 30;
console.log(age);

// 중복 선언 불가
// let age = 40;

// 2. 상수
// 상수는 무조건 초기화 필요
const birth = "2003.02.06";

// 상수값은 변경 불가능
// birth = "123";

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
// 3-2. 숫자로 시작할 수 없다.
// 3-3. 예약어를 사용할 수 없다.

// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
