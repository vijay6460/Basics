let averagescores=(a,b,c)=>(a+b+c)/3;
let dolphines=averagescores(44,23,71)
let koalas=averagescores(65,54,49)
console.log(dolphines,koalas)

const checkwinner=function(dolphines,koalas){
if(dolphines>=2*koalas){
    console.log("dolphines wins the trophy")
}    
else if(koalas>=2*dolphines){
console.log("kolas wins the trophy")    
}
else{
    console.log('no one wins')
}

}
let k=checkwinner(dolphines,koalas)
console.log(k)

