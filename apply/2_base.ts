let now = new Date();
let year = now.getFullYear();

const MyName:string = '남대은';
const MyBirth:object = {
    yy:1993,
    mm:08,
    dd:7,
};
let MyAge:number = year - MyBirth.yy + 1;
let MyHobby:Array<string>=['play the game','listen to music'];

function AgeCal(year:number,yy:number):string{
    return year-yy+1+`년`
}
AgeCal(year,1993)