let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compuscorepara=document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showwiner = (userwin,userChoice,Compuchoise) => {
    if (userwin) {
        userScore++;
        userscorepara.innerText=userScore; 
        msg.innerText=`you win! your ${userChoice} beats ${Compuchoise}`;
        msg.style.backgroundColor="green";
    }
    else {
        compScore++;
        compuscorepara.innerText=compScore;
        console.log("you lose");
        msg.innerText=`you lose ${Compuchoise} beats your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
};

const playGame = (userChoice) => {
    console.log("userChoice", userChoice);
    const Compuchoise = genCompChoice();
    console.log("compChoice", Compuchoise);

    if (userChoice === Compuchoise) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = Compuchoise === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = Compuchoise === "scissors" ? false : true;
        }
        else {
            userWin = Compuchoise === "rock" ? false : true;
        }
        showwiner(userWin,userChoice,Compuchoise);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});







/* const student={
    fullname:"khudabux",
    city:"ghotki",
    age:23,
    mark:32,
    ispass:true,
};
console.log(typeof student["fullname"]);
console.log(typeof student["city"]);
console.log(typeof student["mark"]);
console.log(typeof student["ispass"]);
student["age"] =student["age"]+12;
console.log(student["age"]);*/

//  logical operator
// let a=9;
// let b=8;
// condi1=a>b;
// condi2=a!=b;
// console.log("condi1 &&  condi2 =",condi1 && condi2);

// const z=93;
// const x=32;
//  condi1=z<x;
//  condi2=z!=x;
//  console.log("condi1 and condi2 are not equal =",condi1 && condi2);
// let age = 16;
// if(age>18){
//     console.log("you go to vote");
// }
// if(age<18){
//     console.log("you are not go to vote ");
// }


// ternary operater

// let age=12;
// let result;
// result=age>11 ? "adult":"not adult";
// console.log(result);

// let zubair=22;
// result=zubair>25 ? "ready for marraige ":"your are not baig ";
// console.log(result);

// practice ques



// alert("hello dear");
// let name =prompt("hi asad jani ");
// console.log(name);

// let num=prompt("enetr a number ");
// if(num%5==0){
//     console.log(num,"number is miultipiler of 5 ");
// }
// else{
//    console.log (num,"is not a multipiler of 5 ");5
// }





//  for of and for in loop ;for string and array
/*
let str="khudabux";
for(let i of str){
    console.log("i=",i);
}

let siz=0;
let arr="Elonmusk";
for(let i of arr){
    console.log("arr of i =",i);
    size++;
}
    console.log("the size of arr is =",size);

const str="khudabuxghoto";
for(const i in str){
    console.log("str of i is =",i);
}

let size=0;
let arr="Elonmusk";
for(let i of arr){
    console.log("arr of i =",i);
    size++;
};
console.log("the size of arr is =",size);



// for in use in object
let student={
    name:"asad",
    cgpa:4.5,
    age:25,
    ispass:true,
};
for(let key in student){
    console.log("key=",key,"value=",student[key]);
}
// use for in loop for object
const clas={
    class:"tenth",
    student:25,
    cgpa:3.4,
}
for(const key in clas){
    console.log("key=",key,"value=",clas[key])
} */
//question game

// let gamenum=24;
// let usernum=prompt("enetr your number for login: ");
// while(gamenum !=usernum){
//     usernum=prompt("enetr your number for login: ");
// }
// console.log("your account open ");

// let teacher=50;
// let userstd=prompt("please enter the studetn in class");
// while(teacher !=userstd){
//     userstd=prompt("enter student in class ");
// }
// console.log("wel come in class sir ");

// let usergame="khudabux";
// let gameplayer=prompt("enter your password");
// while(usergame != gameplayer){
//     gameplayer=prompt("enter your password");
// }
// console.log("wel come in game ");


// let pasword="asadali";
// let enterpasword=prompt("enter your login password");
// while(pasword !=enterpasword){
//     enterpasword=prompt("enter your login password");
// }
// console.log("wel come to party");


// loops and string

// for(i=1;i<=50;i++){
//     console.log("apna college by sharda khapra ")

// }

//
// let i=20;
// do{
//     console.log("apna  kk colleg");
//     i++;
// }while(i<20);

// let i =20;
//  do{
//     console.log("i=",i);
//     i++;
//  }while(i<=10);

// let i=1;
// do{
//     console.log("i=",i);
//     i++;
// }while(i<=5);

// let a=1;
// do{
//     console.log("khua bux",a);
//     a++;
// }while(a<9);

// let b=1;
// do{
//     console.log("tokhn aghi mohjo sah achi ",b);
//     b++;
// }while(b<=20);


// let c=1;
// do{
//     console.log("pahji hathan san lash latjan chadi wachar gi gal na kr  ",c);
//     c++;
// }while(c<=15);
// let d=1;
// do{
//     console.log("hamesha sath rahe ap ki ",d);
//     d++;
// }while(d<50);


//for_of loop use for string and array

// let items=[{id:1,name:'zaheer'},{id:2,name:'kb'},{id:3,name:'noor'}];
// const what = items.forEach((item,index) =>{
//     if(index==2){
//         item.name = 'noor nabi';
//     }
//     console.log('what in foreach1?:',items);
// })
// console.log('what in foreach2?:',what);


// let items2=[{id:1,name:'zaheer'},{id:2,name:'kb'},{id:3,name:'noor'}];
// const what2 = items2.map((item,index) =>{
//     if(index==2){
//         item.name = 'noor nabi';
//         item.email = "kab@gmal.com"
//     }
//     return item;
// })
// console.log('what in map?:',JSON.stringify(what2));

// let arr="khudabux";
// for(let a of arr){
//     console.log("arr=",a);
// }

// string
// let str="khudabux";
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
// console.log(str[4]);
// console.log(str[5]);

// let obj = {
//     price: 15,
//     item: 'pen',
// };
// let output = `the cost of ${obj.item} si ${obj.price} rupe`;
// console.log(output);

// let student = {
//     class: 'six',
//     std: 24,
//     day: 'sunday',
//     // ispass: true,
// };
// let result = `the student of school ${student.class} is the student of
// ${student.std} is the studetn of ${student.day}`;
// console.log(result);
// let name='khudabux';

// let html;
// html="<h1>this is my heading </h1>"+
//        "<p>this is my para</p>"
// html=html.concat('this','str2');
// console.log(html);

// let myHtml="this is 'my heading' ";

// let fruit1='apple';
// let fruit2='mango';
// lethtml=`heloo ${name}
//       <h1>this is "this is my "</h>
//       <p>you like ${fruit2}`;

// document.body.innerHTML = myHtml;





//   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//

//Template
// let str1='JAVASCRIPT';
// let str2='JS TUTORIAL';
// let sem=` <h3>i learn ${str1}
//  from CODE WITH HARRY ${str2}</h3> `

// document.body.innerHTML=sem;

// let student={
//     class:'6',
//     ispass:'yes',
//     std:23,
// };
// let studentres=`the student in class is ${student.class}
// all student ispass ${student.ispass}
// the class of student is ${student.std}`;

// document.body.innerHTML=studentres;

// let str="  relex and joy every bit of your life    ";
// console.log(str.trim());
// console.log(str.trimEnd());
// console.log(str.trimStart());

// slice
// let str="0123456";
// console.log(str.slice(0,5));
// console.log(str.slice(3,5));

// concat
//  let str='ustad';
//  let str2='rehman';

//  let res=str.concat(str2);
//  console.log(res);

//  let kb="khuda";
//  let bk="bux";
//  let result = `${kb} ${bk}`;
//  console.log(result);


//
// //  replace
// let kb='khuda';
// let bk='bux';
// bk[kb]='khuda';
// console.log(bk.replace("khuda","bux"));


// let str='hoor';
// console.log(str.replace("h","n"));

// let str1="23241";
// console.log(str1.replace("41","23"));


// array     apna college //

// function countvowel(str) {
//     let count = 0;
//     for (const char of str) {
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u")
//         {
//             count++;
//         }
//     }
//     console.log(count);
// }

// function myfunction(){
//     console.log('well come to js');

// }
// myfunction();


// const arrowsum=(a,b)=>{
//     console.log(a-b);
// };

// let arr=[12,34,56,7,9,1];
// let evenarr=arr.filter((vale)=>{
//     return vale %2===0;
// })
// console.log(evenarr);

// let arr=[12,3,4,5,6,78];
// let arrres=arr.filter((val,arr)=>{
//     return val %2 !==0;
// })
// console.log(arrres);

// let arr=[1,2,3,4];
// let arrredu=arr.reduce((res,curr)=>{
//     return res+curr;
// })
// console.log(arrredu);

// let Array=[2,3,34,6];
// let Arroutput=Array.reduce((res,curr)=>{
//     return curr+res;
// })
// console.log(Arroutput);

// let Arr=[3,5,6,7,8];
// let arrayresult=Arr.reduce((pre,curr)=>{
//     return pre>curr?pre:curr;
// })
// console.log(arrayresult);

// DOOM

// let div=document.querySelector("div");
// console.log(div);

// let id=div.getAttribute("id");
// console.log(id);
// div.style.background="green"




// let newbtn=document.createElement("button");
// newbtn.innerText="click me!";
// console.log(newbtn);

// // let div=document.querySelector("div");
// // div.append(newbtn);

// // let div=document.querySelector("div");
// // div.prepend(newbtn);

// // let div=document.querySelector("div");
// // div.after(newbtn);

// let div=document.querySelector("div");
// div.before(newbtn);

// let newbtn=document.createElement("button");
// newbtn.innerText="click me!";
// newbtn.style.color="white";
// newbtn.style.backgroundColor="red";
// document.querySelector("body").prepend(newbtn);

// let para=document.querySelector("p");
// para.setgetAttribute("class","newclass");


// console.log("well come to js");
// let res=prompt("enter your namwe here");
// // console.log(res);

// let modebtn=document.querySelector("#mode");
// let currentmode="light";
// btnmode=addEventListener("click",()=>{
//     if(currentmode === "light"){
//         document.querySelector("body").style.backgroundColor="black";
//        currentmode="dark";
//     }
//     else{
//         currentmode="light";
//         document.querySelector("body").style.backgroundColor="white";

//     }
//     console.log(currentmode);
// });


//     rock game   

