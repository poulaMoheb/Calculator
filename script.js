    // Variables 
    let total=0
        ,numberHolder=""
        ,equationNum=[]
        ,equationOperation=""
        ,totalFlag=false;

    //   DOM elements
    const equationHolderText=document.querySelector("#equation-holder")
        ,acText=document.querySelector("#ac")
        ,sevenText=document.querySelector("#seven")
        ,eightText=document.querySelector("#eight")
        ,nineText=document.querySelector("#nine")
        ,fourText=document.querySelector("#four")
        ,fiveText=document.querySelector("#five")
        ,sixText=document.querySelector("#six")
        ,oneText=document.querySelector("#one")
        ,twoText=document.querySelector("#two")
        ,threeText=document.querySelector("#three")
        ,zeroText=document.querySelector("#zero")
        ,dotText=document.querySelector("#dot")
        ,plusMinusText=document.querySelector("#plus-minus")
        ,modulesText=document.querySelector("#modules")
        ,divideText=document.querySelector("#divide")
        ,subtractText=document.querySelector("#subtract")
        ,sumText=document.querySelector("#sum")
        ,multiplyText=document.querySelector("#multiply")
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
    dotText.addEventListener("click",()=>{
        numberHolder.length===0?
        writingNumber("0."):
        writingNumber(".");
        
    });
        // operations
    plusMinusText.addEventListener("click",()=>{
        if(numberHolder.length>0 && !numberHolder.includes("-")){
            numberHolder=`-${numberHolder}`;
            equationHolderText.textContent=numberHolder;}
        else if(numberHolder.length>0 && numberHolder.includes("-")){
            numberHolder=numberHolder.slice(1,numberHolder.length);
            equationHolderText.textContent=numberHolder;}
    });
    modulesText.addEventListener("click",()=>{
        if(equationNum.length < 2)
            operationClicked(modules);
        else 
            equal();
    });
    multiplyText.addEventListener("click",()=>{
        if(equationNum.length < 2)
            operationClicked(multiply);
        else 
            equal();
    });
    divideText.addEventListener("click",()=>{
        if(equationNum.length < 2)
            operationClicked(divide);
        else 
            equal();
    });
    subtractText.addEventListener("click",()=>{
        {if(equationNum.length < 2)
            operationClicked(subtract);
        else 
            equal();}
    });
    sumText.addEventListener("click",()=>{
        if(equationNum.length < 2)
            operationClicked(sum);
        else 
            equal();
    });

    equalText.addEventListener("click",()=>{
        if(numberHolder.length>0){       
            equal();}
    });
    // functions 
    function reset (){
        total=0
        ,totalFlag=false
        ,equationNum=[]
        ,numberHolder=""
        ,equationOperation=[]
        ,equationHolderText.textContent="0";
    } 
    function writingNumber(numString){
        numberHolder+=numString;
        equationHolderText.textContent=numberHolder;
    }
    function operationClicked(operation){
        equationOperation=operation;
        if(numberHolder.length>=1)equationNum.push(Number(numberHolder)); 
        numberHolder="";
        equationHolderText.textContent="0";
        console.log(equationNum);
    }
    function modules(num1 , num2){
        return num1 % num2;
    }
    function multiply(num1 , num2){
        return num1 * num2;
    }
    function sum(num1 , num2){
        console.log(Number(num1) , num2);
        return Number(num1) + Number(num2);
    }
    function subtract(num1 , num2){
        return num1 - num2
    }
    function divide(num1 , num2){
        return num1 / num2;
    }
    function equal(){
            if(numberHolder){
            equationNum.push(Number(numberHolder));
            numberHolder=equationOperation(equationNum[0],equationNum[1]);
            equationHolderText.textContent=numberHolder;
            equationNum=[Number(numberHolder)];
            console.log(equationNum);
            numberHolder=""
            totalFlag=true;
            }
    }
    if(totalFlag) alert("click AC button to continue");
