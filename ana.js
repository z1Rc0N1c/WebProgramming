console.log("안녕하세요");
console.log("선린인터넷고등학교에","오신 것을 환영합니다.");

const hi = "안녕하세요";
let day = "토요일";
var date = "9월 2일";

hi = "안녕!";
day = "일요일";
let day = "월요일";

date = "9월 3일";
var date = "9월 4일";

let n = 92;
console.log(n);
console.log(typeof(n));
let s = "오늘은 9월 2일";
console.log(s);
console.log(typeof(s));
let truebool = true;
let falsebool = false;
console.log(truebool, falsebool);
console.log(typeof(truebool, falsebool));
let array = [1,2,3,4,5];
console.log(array)
console.log(typeof(array));
let object = {
    "day": "토요일",
    "date": 92,
    "true": true,
}
console.log(typeof(object));

n = "내일은 9월 3일";
console.log(n);
console.log(typeof(n));

//백틱 사용법
let myname = "박형근";
console.log(`안녕하세요 ${myname}님`);
/*백틱 사용시 장점:1. 따옴표나 큰따옴표의 사용이 쉽다.
2. 변수 삽입이 쉽고 코드 가독성이 향상된다.*/
//산술 연산자
let mul1 = 5;
let mul2 = 4;
console.log(mul1*mul2);
let div1 = 20;
let div2 = 5;
console.log(div1/div2);
let remain1 = 13;
let remain2 = 2;
console.log(remain1%remain2);
let plus1 = 3;
let plus2 = 4;
console.log(plus1+plus2);
let minus1 = 5;
let minus2 = 2;
console.log(minus1-minus2);
//관계연산자
let n1 = 1;
let n2 = 2;

console.log(n1<n2);
console.log(1>=2);
console.log(n1>n2);
console.log(1<=2);
console.log(1 == 2);
console.log(1 != 2);

console.log(typeof(1 == 1));

console.log(!(1==2));
console.log((1 == 1)&&(2 <= 1));
console.log((1 >= 2)||(3 < 5));
//증감,대입 연산자
let i = 0;
i++;
console.log(i++);
console.log(i);
let j = 1;
console.log(++j);
console.log(j);
let a = 1;
let b = a;
console.log(a, b);
//조건문
let month = 10;
if(month == 9){
    console.log("이번 달은 9월입니다.");
}else{
    console.log(`이번 달은 ${month}월입니다`);
}

let today = "토요일";
if(today == "토요일"){
    console.log("학교에 가지 않는다.");
}
else if(today == "일요일"){
    console.log("내일은 학교에 간다.");
}
else{
    console.log("오늘은 학교에 간다.");
}
//반복문
for(let i = 1; i<=5; i++){
    console.log(i);
}
let k = 1;
while(k<=5){
    console.log(k);
    k++;
}
//for문은 자체적으로 변수를 사용하기 떄문에 변수명 지정이 쉬움
//while문은 외부 변수를 끌고 오기가 쉬워 외부 변수를 조건식으로 쓸 경우 주로 씀
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
let test;
while(test){
    console.log("안녕하세요");
}
let me = {
    "name": "박형근",
    "age": 16,
    "school": "선린인터넷고등학교",
    "test": false,
}
console.log(me.name);
//무언가에 대한 여러 개의 속성을 나타내야 할 때 사용한다.
//배열
let ANA = ["이주호", "김주성", "박형근", "이유민"];
console.log(ANA[0]);
for(let i = 0; i<4; i++){
    console.log(ANA[i]);
}
ANA.push("김민재");
delete ANA[0];
for(let i = 0; i<5; i++){
    console.log(ANA[i]);
}
//매개변수 활용 예시
function addnum(a, b) {
    console.log(a + b);
}
addnum(3, 5);
//리턴값 활용 예시
function findmax(arr) {
  let max = arr[0];
  for (let i = 0; i<5; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
const numbers = [3, 9, 2, 5, 1];
console.log(findmax(numbers));
// 익명 함수 변수 할당
const multi = function(x, y) {
    return x * y;
};
console.log(multi(3, 5));
//익명 함수 사용처: 콜백 함수, 임시 사용, 인자로 보낼 때
//함수 선언식
const stringplus = (str1, str2) => str1 + " " + str2;
console.log(stringplus("Hello", "World"));
//콜백 함수
const number = [2, 4, 6, 8, 10];
const allEven = number.every(function(num) {
  return num % 2 === 0;
});
console.log(allEven);