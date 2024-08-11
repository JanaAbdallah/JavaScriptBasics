// var VarName = "hello from jana , here we goo"
// the above method is an old way method to delcare a var , now we have 2 new ways :

// let VarName="hello from jana , here we goo";
// in let method we can change the variable initialized value for an e.g we can say that :
// VarName="jana";
// remove the "//" from line 7,4 to see what i mean 

// const VarName="hello from jana , here we goo";
// but here in const way , we can't change the assigned value during the whole program for an e.g we can say that :
 // VarName="jana"; 
 // remove the "//" from line 11,9 to see what i mean 

 // it's preferable to use 'let' rather than 'var' but 'let' has some constrains we gonna know them during the course 
 // so i'm gonna use 'let' 

 let VarName = "Hello , how can i help you today ? ";

 console.log(VarName);
 console.log("Test");


 // we have a different way in declaration using const or let or var 
 // when we store a string we can make this , we can add a varname to a string by using this quotes -> "it's called Backticks" `...` not this one "..."
 // here is an e.g :
 let Varname="jana";
 let XN=`Hello, ${Varname}, welcome`;

console.log(XN);

//we can use 2 different ways to print a result that has a num like this : 
let y=2+2;
let z =`${2+2}`;

 console.log(y);
 console.log(z);

 // we can know or inspect the data type of any value assigned to any Variable by using "type of + VarName"
 // e.g:
 let Variable ="jana";
 let VarN=2;
 let VarNam;

 console.log(typeof Variable);
 console.log(typeof VarN);
 console.log(typeof VarNam);

 // JavaScript is very friendly when it comes to numbers , here we don't have to specify the type of the number we called this behavior untyped 
 let Num =2;
 let FloatNum=2.5;
 let NuM;

 console.log(typeof Num);
 console.log(typeof FloatNum);
 console.log(typeof NuM);


//Booleans hae only two possible values 1 or 0 / true or false
//e.g
let B = true ;
console.log(B);


//Null -> nothing/empty
let age =null ;
console.log(age);


//Undefined -> a variable that has no assigned value 
let Und;
console.log(Und);


//Object 
//let NAME = "Jana";
//let AGE=20;
//instead of this one we can do this the below one 

let Person={
    NAME:"jana" ,
    AGE:20,
}

console.log(Person);

//what if we want a specific value let's say the name , we can do this 
console.log(Person.NAME); //called dot notation


// Array 
let Arr=[1,2,3,4];
console.log(Arr);


//we have date object that gives the date of the current day 
let date=new Date();

console.log(date);

//When it comes to datatypes there are two types of programming languages : Statically tyed language and Dynamically typed language 

//Statically typed languages : are languages where each variable and expression type is already known at compile time so once a variable declared with a specific type it can't hold values of any other data type 
//like in C or C++ or Java  if we say int x so we have to store here only numbers we can't store a string or any different data type , it accepts only int 

//Dynamically typed languages : are languages that can receive differnet data types over time and JAVASCRIPT IS DYNAMICALLY TYPED 



//Comparison operators  (<,>,=) they compare two values and return either true or false 
let a =5 ,b=6 ;
console.log(a>b);
console.log(a==b);
console.log(a<=b);


//Strict Equality "===" javascript interpretes compares the values as well as their types and only return true when both are the same 
let l =20 ,p="20";
console.log(l===p);

let u=1 ,i=1.8;
console.log(u===i);


//Loose Equaltiy is unlike Strict Equality , in Loose Equality JS interpreter compares only values 
let h=1,k='1';
console.log(h==k); //it doesn't matter that k is string and h is num unlike Strict Equality it checks both value and data type 
//it is preferable to use Strict Equality in JS



// Functions in JS 
// We've 3 different ways to ake a function : 

// 1) Function Declaration
function SquareArea(num){ // We don't have to use let or var or const 
    return num*num;
}
// A function call (calling/executing a function)
let Result = SquareArea(5);
console.log(Result);

// 2) A function expression it defines a named or anonymous function an anonymous function is a function that has no name ,e.g :
let FuncExp=function(){
    console.log("Hello"); 
} 

FuncExp();

// 3) An arrow function , has arrow points to a block of code  
let funcname=(x)=>{
    x=x+1;
    return x ;
}
console.log(funcname(100));

// usually we use Arrow function in 99 of the cases 

// We can also make this by arrow function : 
 let RectangleArea=(l,w)=>l*w ;
 let res=RectangleArea(5,5);
 console.log(res);

 // JavaScript achieves this flexibility by converting values from one type to another ,a process known as corecion



 /* Arrays in JavaScript --> has the folllowing characteristics:
       1- in JS array can hold values of mixed data types. For example, you can have an array that stores elements with the types : number ,string ,boolean and null. 
       2- in JS the size of an array is dynamic and auto-growing, you don't neeed to specify the array size up front.
    these 2 characteristics are unlike for low level programming languages 
 */

// We have 2 ways to create an array 

// FIRST_WAY : by using Array Constructor "for those who do not know constructors -> it will be explained later in oop but here we can say that constructor is a functionthat can be called only one time to create an object form an Array type "
let ScoreArr= new Array();

// we can initialize the size if we know it 
let arr= new Array(5); // array size 

// JS allows us to remove new operator when we use Array() Constructor so we can write it in this way 
let array1=Array();

// SECOND_WAY & the more preferred way 
let array2=[1,2,3,4]; //array elements
let array3=[];       // empty array

// Accessing JS Array elements 
let arr4=[1,4,5,6];
// console.log(arr[index]) -> first element index is 0 not 1
console.log(arr4[2]);

// Getting array size by using length property 
console.log(arr4.length); // 4 

// Basic operations on arrays :

// 1)Adding an element to the end of an array 
let colors =['blue','green','red'];
// we use push() method to add an elements to the end of an array 
colors.push('black');
console.log(colors);

// 2)Adding an element to the beginning of an array 
// we use unshift() method to add an elements at the beginning 
colors.unshift('yellow');
console.log(colors);

// 3)Removing an element from the end of an array 
// we use pop() method to remove an element from the end 
colors.pop();
console.log(colors);

// 4)Removing an element from the beginning of an array
// we use shift() method to remove an element from the beginning
colors.shift();
console.log(colors);

// 5)Finding an index of an element in the array 
// we use indexof() method 
 let index = colors.indexOf('red');
 console.log(index); //2

 // 6)Check if a value is an array 
 // we use Array.isArray() method 
 console.log(Array.isArray(colors));  // return true or false








 