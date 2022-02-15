let markWeight=78;
let markHeight=1.69;
let johnWeight=92;
let Johnheight=1.95;
BMI_mark= markWeight/markHeight**2;
console.log(BMI_mark)
// BMI_john=johnWeight/(Johnheight*Johnheight);
BMI_john=johnWeight/(Johnheight**2);

console.log(BMI_john);
if(BMI_mark>BMI_john){
    console.log(true)
}
else{
    console.log(false)
}