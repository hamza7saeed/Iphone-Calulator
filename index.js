document.title = "Calculator";
let head = document.head;
let link = document.createElement("link");
link.href = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Calculator_icon.svg/2048px-Calculator_icon.svg.png"
link.rel = "icon"


head.appendChild(link)



let buttons = document.querySelectorAll("button");
let inPut = document.querySelector("#input");
let str = ""
let arrBtn = Array.from(buttons);
buttons.forEach(e=>{
    e.style.color = "white";
    e.style.fontSize = "18px";
})


arrBtn.forEach(ee=>{
    ee.addEventListener("click",(btn)=>{
       if(btn.target.innerHTML == '='){
        str = eval(str);
        inPut.value = str
       } else if(btn.target.innerHTML == 'C'){
        str = "";
        inPut.value = str;
       } else if (btn.target.innerHTML == 'DEL'){
        str = str.substring(0,str.length-1);
        inPut.value = str;
       } else {
        str += btn.target.innerHTML;
        inPut.value = str;
       }
    })
})
