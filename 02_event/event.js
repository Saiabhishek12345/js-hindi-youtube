// let btn1=document.querySelector("#btn1");

/* btn1.onclick= () => {
    console.log("btn1 was clicked");
    let a=25;
    a++;
    console.log(a)
} */
    /*btn1.onclick= (evt) => {
        console.log(evt);
        console.log(evt.type);
        console.log(evt.target);
        console.log(evt.clientX,evt.clientY);
    }*/
   
      /*  btn1.addEventListener("click",() => {
            console.log("button was Handler1");
        });
        
        btn1.addEventListener("click",() => {
            console.log("button was Handler2");
        });

       const handler3 = () => {
        console.log("button was Handler3");
       };
       btn1.addEventListener("click",handler3);

        btn1.addEventListener("click",() => {
            console.log("button was Handler4");
        });
        btn1.removeEventListener("click",handler3);*/
        
   // let div=document.querySelector("div");
  
/* div.onmouseover = () => {
    console.log("you are inside div");
} */

    let modeBtn=document.querySelector("#mode");
    let body=document.querySelector("body");
    let currMode= "light";

    modeBtn.addEventListener("click", () => {
        if(currMode==="light"){
            currMode="dark";
          //  document.querySelector("body").style.backgroundColor="black";
             body.classList.add("dark");
             body.classList.remove("light");
        }else{
            currMode="light";         
            //  document.querySelector("body").style.backgroundColor="white";
            body.classList.add("light");
            body.classList.remove("dark");
        }
        console.log(currMode);
    });
