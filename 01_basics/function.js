/* myFunction(msg){
    console.log(msg);
  
}

myFunction("i love javscript");*/

/* function sum(x,y){
    s=x+y;
    return s;
}
let val=sum(4,5);
console.log(val);*/

/*const arrowFunction=(a,b) =>{
    console.log(a+b);
    
}*/

function countVowels(str){
    let count=0;
    for(const char of str){
       if(char==='a' || char==='e' || char==='i' || char==='o'){
        count++;
       }
        
    }
    console.log(count);
    
}

