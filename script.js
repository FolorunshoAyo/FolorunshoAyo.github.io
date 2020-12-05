function WhatAreWeEating(){
let today = new Date();
let day = today.getDay() + 1;
let daylist = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

if (day == 1){
    console.log(`today is ${daylist[day]},`);
    console.log(`meals served:`);
    console.log(`lunch- beans and plantain with bread`);
    console.log(`supper- rice and beans`);
}else if (day == 2){
console.log(`today is ${daylist[day]},`);
    console.log(`meals served:`);
    console.log(`lunch- fried rice`);
    console.log(`supper- yam or potato with stew or egg sauce`);
}else if (day == 3){
console.log(`today is ${daylist[day]},`);
    console.log(`meals served:`);
    console.log(`lunch- Eba and egusi`);
    console.log(`supper- rice and stew`);
}else if (day == 4){
console.log(`today is ${daylist[day]},`);
    console.log(`meals served:`);
    console.log(`lunch- beans and plantain with bread`);
    console.log(`supper- spaghetti with egg`);
}else if (day == 5){
console.log(`today is ${daylist[day]},`);
    console.log(`meals served:`);
    console.log(`lunch- eba and egusi`);
    console.log(`supper- jellof rice and fried rice`);
}else if (day == 6){
console.log(`today is ${daylist[day]},`);
    console.log(`meals served:`);
    console.log(`lunch- beans and plantain with bread`);
    console.log(`supper- moi moi and eko or fried yam and potato`);
}else if (day == 7){
console.log(`today is ${daylist[day]},`);
console.log(`special sabbath`);
    console.log(`meals served:`);
    console.log(`lunch- jellof rice with cupcake and zobo`);
    console.log(`supper- rice and beans`);
}
}
WhatAreWeEating()
