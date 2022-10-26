# generic (제네릭)
제네릭은 재사용성이 높은 컴포넌트를 만들 때 자주 활용되는 특징이다.
한가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는데 사용됨

## generic 기본 문법
```
function logText(text){
    console.log(text);
    return text;
}
logText(10); // 숫자 10
logText('하이'); // 문자열 하이
logText(true); // 진위값 true
```
위와 같은 함수는 어떠한 파라미터값이 들어가더라도 그대로 반환한다.

```
function logText<T>(text: T): T {
    console.log(text);
    return text;
}
logText<string>('하이'); // function logText<string>(text: string): string
```
위의 함수가 generic의 기본적인 함수 모양이다.
함수를 호출할 때 <>안에 함수에서 사용될 타입을 넘겨줄 수 있다.

## generic과 기존 타입정의 방식의 비교
### 기본 타입으로 정의
```
function logText(text:string){
    console.log(text);
    return text;
}

function logNumber(num:number){
    console.log(num);
    return num;
}
```
위의 두 함수는 같은 기능을 처리하지만 단지 다른 타입의 파라미터를 넘겨 받기 위해 사용된 비효율적인 함수이다.

### union Type으로 정의
```
function logText(text:string | number){
    console.log(text);
    return text;
}
logText('a');
logText(10);
const a = logText('a')
```
그래서 하나의 타입을 받는 것이 아닌 여러개의 타입을 받기 위해 union 타입을 사용하였다.
하지만 union 타입을 사용하였을 경우, 
text. 으로 받을 수 있는 공통된 속성이나 api만 받을 수 있게 된다.
그래서 생기는 문제점으로는 변수 a에서 받아주는 타입이 string|number로 지정된다. 
그래서 a.split과 같은 string에만 적용되는 속성에서 에러가 발생하게 된다.

결과적으로 union타입은 파라미터의 input값에 대한 문제는 해결되지만,
반환값에 대한 해결이 되지 않는다.

### generic으로 정의
```
function logText<T>(text:T):T{
    console.log(text);
    return text;
}

const str = logText<string>('a');
str.split('')
```
위의 문제점들을 해결하기 위한 generic은 함수와 파라미터에 대해 함수의 타입을 지정하지 않고 
함수와 인자와 반환값에도 <T>와 동일한 타입을 추가할 수 있다.  
함수를 사용할 때 <type>을 입력해 타입을 지정할 수 있다.

## generic를 interface에 정의하는 방법
```
interface Dropdown{
    value: string;
    selected: boolean;
}
const obj:Dropdown = {
    value:'abc', 
    selected:false
}
```
위의 기존 인터페이스 정의 방식을 제네릭을 사용해 아래와 같이 정의할 수 있다.
```
interface Dropdown<T>{
    value:T;
    selected:boolean;
}
const obj:Dropdown<string> = {
    value:'abc', 
    selected:false
}
```
### union 적용된 함수 generic 적용해보기
```
interface DropdownItem<T>{
  value:T;
  selected:boolean;
}

const emails:DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts:DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem(item:DropdownItem<string> | DropdownItem<number>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function(product){
  const item = createDropdownItem(product)
})
```
```
interface DropdownItem<T>{
  value:T;
  selected:boolean;
}

const emails:DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts:DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem<T>(item:DropdownItem<T>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function(product){
  const item = createDropdownItem<number>(product)
})
```

## 제네릭의 타입 제한
```
function logTextLength<T>(text:T):T{
    console.log(text.length); // .length 오류
    text.forEach(function(text){ // .forEach 오류
        console.log(text);
    });
    return text;
}
```
위와 같이 제네릭을 적용했을 때 
아래의 선언된 함수들은 함수가 length,forEach등의 array의 속성을 반환하더라도 오류가 나지 않습니다.
```
logTextLength<number>(1);
logTextLength<string>('hi');
logTextLength<boolean>(true);
```
하지만 함수 안에서의 .length나 .forEach는 
text에 어떤 타입의 파라미터가 넘어왔는지 알 수 없어서 오류를 발생시킵니다.

이런 경우에는 아래와 같은 방법으로 제네릭에 타입을 줄 수 있습니다.
```
function logTextLength<T>(text:T[]):T[]{
    console.log(text.length);
    text.forEach(function(text){
        console.log(text);
    });
    return text;
}


logTextLength<number>(1); // 오류
logTextLength<string>('hi'); // 오류
logTextLength<boolean>(true); // 오류
logTextLength([1,2,3]);
```

## 제네릭 타입 제한 2 -정의된 타입 적용하기
```
interface LengthType{
    length:number;
}
function logTextLength<T extends LengthType>(text:T):T{
    text.length;
    return text;
}
logTextLength(10); // 오류
logTextLength({length:10}); // 객체에 length가 있기때문에 .length의 값을 불러오는 속성으로 오류가 나지 않음
```
위와 같은 제네릭의 타입제한은 
<T extends LengthType>로 'LengthType이 T에 있다'
로 정의한다.

## 제네릭 타입 제한 3 - keyof
```
interface ShoppingItem{
    name:string;
    price:number;
    stock:number;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption:T):T{
    return itemOption
}

getShoppingItemOption("name")
```
위와같이 <T extends keyof ShoppingItem>으로 정의할 경우
interface ShoppingItem에 정의되어진 키 값만 들어갈 수 있다.