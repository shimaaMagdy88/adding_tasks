var myBtn = document.querySelector(".submit-btn");
var myInput = document.querySelector(".input");
var myContent = document.querySelector(".content");
var delBtn = document.querySelector(".del-btn");
var inputs = [];


myInput.addEventListener("keydown",(e)=>{
    if(myInput.value.length >= 6){
        myBtn.removeAttribute("disabled");
    }else{
        myBtn.setAttribute("disabled","");
    }
});

myBtn.addEventListener("click",()=>{
    myBtn.setAttribute("disabled","");

    var newValue = myInput.value;
    inputs.push(newValue);
    myInput.value = "";

    display(inputs);
});

function display(list){ 
    var result = "";
    var index = 0;

    list.forEach((r) => {
        result += `
        <li class="names">
            <h1 data-index=${index}>${r}</h1>
            <button class="del-btn" data-index=${index} onclick="remove(${index++})">X</button>
        </li>
        `;
    });
    myContent.innerHTML = result;
};

function remove(index){
    inputs.splice(index,1);
    display(inputs);
};