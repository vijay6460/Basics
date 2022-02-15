const hasbag=true;
// const mobile=true;
const mobile=false;
const walk=true

console.log(hasbag && mobile)
console.log(hasbag || mobile)
console.log(!hasbag)// for not operation
const car=hasbag && mobile && walk;
// const car=hasbag || mobile;

if(car){
    console.log("go by car")
}
else{
    console.log("go with bike")}

