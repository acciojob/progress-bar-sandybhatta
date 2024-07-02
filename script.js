//your JS code here. If required.
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
})
let prev=document.querySelector("#prev");
prev.addEventListener("click",()=>{
  
    let circ=document.querySelector(`#${idStr+coun}`)
    if(coun>1){
        coun--;
    circ.classList.remove("active");
    }
})