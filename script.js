// Variables 
let total=0
    ,equationNum=[0]
    ,numberHolder=""
    ,equationOperation=[];

//   DOM elements
const equationHolderText=document.querySelector("#equation-holder")
     ,acText=document.querySelector("#ac")
     ,plusMinusText=document.querySelector("#plus-minus")
     ,percentText=document.querySelector("#percent")
     ,divideText=document.querySelector("#divide")
     ,sevenText=document.querySelector("#seven")
     ,eightText=document.querySelector("#eight")
     ,nineText=document.querySelector("#nine")
     ,multiplyText=document.querySelector("#multiply")
     ,fourText=document.querySelector("#four")
     ,fiveText=document.querySelector("#five")
     ,sixText=document.querySelector("#six")
     ,subtractText=document.querySelector("#subtract")
     ,oneText=document.querySelector("#one")
     ,twoText=document.querySelector("#two")
     ,threeText=document.querySelector("#three")
     ,sumText=document.querySelector("#sum")
     ,zeroText=document.querySelector("#zero")
     ,dotText=document.querySelector("#dot")
     ,equalText=document.querySelector("#equal");
// event listener
acText.addEventListener("click",()=>{
    reset();
});
    // num 
zeroText.addEventListener("click",()=>{
    numberHolder.length>0?writingNumber(0):numberHolder="";
});
oneText.addEventListener("click",()=>{
    writingNumber(1);
});
twoText.addEventListener("click",()=>{
    writingNumber(2);
});
threeText.addEventListener("click",()=>{
    writingNumber(3);
});
fourText.addEventListener("click",()=>{
    writingNumber(4);
});
fiveText.addEventListener("click",()=>{
    writingNumber(5);
});
sixText.addEventListener("click",()=>{
    writingNumber(6);
});
sevenText.addEventListener("click",()=>{
    writingNumber(7);
});
eightText.addEventListener("click",()=>{
    writingNumber(8);
});
nineText.addEventListener("click",()=>{
    writingNumber(9);
});
    // operations

// functions 
function reset (){
    total=0
    ,equationNum=[0]
    ,numberHolder=""
    ,equationOperation=[]
    ,equationHolderText.textContent="0";
} 
function writingNumber(numString){
    numberHolder+=numString;
    equationHolderText.textContent=numberHolder;
}