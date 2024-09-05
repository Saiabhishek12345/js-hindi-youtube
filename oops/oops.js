/*const student = {
    fullName:"saiabhishek",
    marks: 94.4,
    printMarks: function () {
        console.log(this.marks); 
    },
};*/

/*const employee = {
    calcTax () {
        console.log("tax is at rate of 10%");
    },
};

const karanArjun = {
    salary: 50000,
};

karanArjun.__proto__=employee; */

/*class ToyotaCar {
    constructor(brand,milleage){
        console.log("creating a object"); 
        this.brand=brand; 
        this.milleage=milleage;  
    }
    start(){
        console.log("Car is started");     
    }

    stop(){
        console.log("Car is stopped");    
    }
    setBrand(brand) {
        this.brand=brand;
    
}

let fortuner = new ToyotaCar("fortuner",100);
// fortuner.setBrand("fortuner");
console.log(fortuner);

let leaxus= new ToyotaCar("lexaus",50);
// leaxus.setBrand("leaxus");
console.log(leaxus); */

/*class person{

    constructor(name){
        this.species="homo sapiens";
        this.name=name;
    }
    eat(){
       console.log("eat");   
    }
}

class Engineer extends person{

    constructor(name){
        super(name);  //to invoke parent class construtor
        
    }
     work(){
        super.eat();
        console.log("solve problems,build something"); 
     }
}*/

/*class Doctor extends person{
    work(){
       console.log("solve problems,build something"); 
    }
}*/

// let obj = new Engineer("saiabhishek");
let DATA="sceret information"
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("data = ",DATA);  
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    viewData(){
        DATA="add a new data";
    }
}

let student1=new User("sai","saiagamil.com");
let student2=new User("aman","aman.com");
let admin=new Admin("admin","admin@gmail.com");
