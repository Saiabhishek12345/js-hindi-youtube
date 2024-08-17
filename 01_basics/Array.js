/* let marks=[45,56,78,86,67];
console.log(marks);
console.log(marks.length);*/

/*for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
    
}
for(let el of marks){
    console.log(el);
    
}*/
// finding avg marks 
/* let marks=[85,97,44,37,76,60];
let sum=0;
for(let i=0;i<marks.length;i++){
    sum=sum+marks[i];
}
avgMarks=sum/marks.length;
console.log(avgMarks);*/
 
// finding a new array

let items=[250,645,300,900,50];

for(let i=0;i<items.length;i++){
    console.log(items[i]);
    let offer = items[i]/10;
    items[i]=items[i]-offer;
}
console.log(items);

