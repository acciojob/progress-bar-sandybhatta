let allCircles=document.querySelectorAll(".circle");
const next=document.querySelector("#next");
let idStr="circle-"
let coun=1;

next.addEventListener("click",()=>{

if(coun<5){
    coun++;
    let circ=document.querySelector(`#${idStr+coun}`)
    circ.classList.add("active");
}
updateButtons()
})
let prev=document.querySelector("#prev");


function updateButtons() {
    if (coun === 5) {
        next.classList.add("disable");
    } else {
        next.classList.remove("disable");
    }

    if (coun === 1) {
        prev.classList.add("disable");
    } else {
        prev.classList.remove("disable");
    }
}

// Initial update of buttons based on the starting value of coun
updateButtons();
prev.addEventListener("click",()=>{
  
    let circ=document.querySelector(`#${idStr+coun}`)
    if(coun>1){
        coun--;
    circ.classList.remove("active");
    }
    updateButtons()
})