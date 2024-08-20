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

// function countVowels(str){
//     let count=0;
//     for(const char of str){
//        if(char==='a' || char==='e' || char==='i' || char==='o'){
//         count++;
//        }
        
//     }
//     console.log(count);
    
// }

/* let arr=["pune","mumbai","delhi"];

arr.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx,arr);
    

});
let brr=[1,2,3,4,5];
brr.forEach((val)=>{
    console.log(val*val);
    
});

let num=[34,56,78];

let newArr=num.map((val)=>{
    return val*val;
});
console.log(newArr);*/

/*let arr=[1,2,3,4,5];

let newArr=arr.filter((val)=>{
    return val%2===0;
})

console.log(newArr);*/

/*let arr=[5,6,2,1,7];

let maxArr=arr.reduce((prev,curr)=>{
    return prev > curr ? prev : curr;
});

console.log(maxArr);*/

let n=prompt("enter the number: ");

let arr=[];
for(let i=1;i<=n;i++){
   arr[i-1]=i;
}
console.log(arr);

let output=arr.reduce((prev,curr)=>{

    return prev*curr;

})

console.log(output);



