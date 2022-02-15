const markweight=22;
const markheight=1.9;
const johnweight=30;
const johnheight=1.6;
BMI_mark=markweight/markheight**2;
BMI_john=johnweight/johnheight**2;
console.log(BMI_john,BMI_mark);
if(BMI_mark>BMI_john){
   // templete string use ` this only and $ 
   console.log(`marks BMI value is (${BMI_mark})`)

}
else{
    console.log(`BMI_john is (${BMI_john}) `)
}