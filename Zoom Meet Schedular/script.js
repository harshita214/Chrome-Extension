let btn=document.getElementById("button");
btn.addEventListener('click',()=>
{
    let drop=document.getElementById("options");
    let temp=drop.style.display;
    if(temp==="block")
        drop.style.display="none";
    else
        drop.style.display="block";
    console.log("switched");
});
let close=document.getElementById("close");
close.addEventListener('click',()=>
  {
    let drop=document.getElementById("options");
    drop.style.display="none";
  })