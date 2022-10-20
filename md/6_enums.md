# 이넘(Enums)
- 집합을 의미하는 자료형
- 숫자형 이넘
- 문자형 이넘

## 숫자형 이넘
```
enum Shoes{
    Nike,
    Adidas
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 0
```
별도의 값을 지정하지 않으면 숫자형 이넘으로 나타난다.
index와 같이 0부터 순서대로 증가한다.
숫자를 지정해주면 그 숫자부터 차례로 증가한다.

## 문자형 이넘
```
enum Shoes{
    Nike = '나이키',
    Adidas = '아디다스',
}

var myShoes = Shoes.Nike;
console.log(myShoes);// '나이키'
```
값에 문자를 지정하주는 방식.

## 이넘 활용
```
function askQuestion(answer:string){
    if(answer === 'yes'){
        console.log('정답입니다.');
    }
    if(answer === 'no'){
        console.log('오답입니다.');
    }
}
askQuestion('예스');
askQuestion('y');
askQuestion('yes');
```
askQuestion의 반환값에 yes라는 값에 여러가지 문자열을 넣을 수 있는데
그 값을 구체적으로 제한하는 것을 enum 이라고 한다.
```
enum Answer{
    Yes = 'Y',
    No = 'N',
}
function askQuestion(answer: Answer){
    if(answer === Answer.Yes){
        console.log('정답입니다.');
    }
    if(answer === Answer.No){
        console.log('오답입니다.');
    }
}
askQuestion(Answer.Yes);
```