var now = new Date();
var year = now.getFullYear();
var MyName = '남대은';
var MyBirth = {
    yy: 1993,
    mm: 08,
    dd: 7
};
var MyAge = year - MyBirth.yy + 1;
var MyHobby = ['play the game', 'listen to music'];
function AgeCal(year, yy) {
    return year - yy + 1 + "\uB144";
}
AgeCal(year, 1993);
