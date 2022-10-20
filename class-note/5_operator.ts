// function logMassage(value:any){
//    console.log(value); 
// }
// logMassage('hello');
// logMassage(100);

var seho: string | number | boolean;
function logMassage(value: string | number){
    if(typeof value==='number'){
        value.toLocaleString();
    }
    if(typeof value==='string'){
        value.toString();''
    }
    throw new TypeError('value must be a string or number');
}
logMassage('hello');
logMassage(100);

interface Developer{
    name:string;
    skill:string;
}
interface Person{
    name:string;
    age:number;
}
// function askSomeone(someone:Developer|Person){
//     someone.name;
//     someone.skill;
//     someone.age;
// }
// askSomeone({name:'디벨로퍼', skill:'웹 개발'});
// askSomeone({name:'캡턴', age:100});

function askSomeone(someone:Developer&Person){
    someone.name;
    someone.skill;
    someone.age;
}
askSomeone({name:'디벨로퍼', skill:'웹 개발', age:100});
askSomeone({name:'캡턴', age:100});

var seho: string | number | boolean;
var capt: string & number & boolean;