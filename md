# TypeScript
=============

## 환경설정
1 ts파일이 들어갈 폴더에서 터미널을 열어준다
1 npm i TypeScript -g 를 입력하여 실행
1 tsc 파일명.ts 를 실행하면 ts파일이 js파일로 컴파일 됨

## TypeScript 설정 파일
- tsconfig.json 파일을 만든다.
- tsconfig의 옵션은 아래 사이트에서 확인 가능
    -https://www.typescriptlang.org/tsconfig
```
{
    "compilerOption":{
        "allowJs": true,
        "checkJs": true,
        "noImplicitAny": true,
        ....
    }
}
```
- tsc 파일명.ts 로 컴파일

## TypeScript 사이트 소개
- 플레이그라운드 url : https://www.typescriptlang.org/play/
- 바벨  url : https://babeljs.io/
