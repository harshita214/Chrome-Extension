const clear= document.querySelector(".clear");
const list= document.getElementById("list");
const input = document.getElementById("input");


const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

let LIST=[],id=0;


 let data = localStorage.getItem("TODO");
 if(data)
 {
     LIST = JSON.parse(data);
     id = LIST.length;
     loadList(LIST);
 }
 else{
     LIST =[];
     id=0;
 }

 function loadList(array)
 {
     array.forEach(function(item){
         addToDo(item.name, item.id, item.done, item.trash);
     });
 }

 clear.addEventListener("click", function(){
     localStorage.clear();
     location.reload();
 })
function addToDo(toDo, id, done, trash)
{
    if(trash){ return;}

    const DONE = done? CHECK : UNCHECK;
    const LINE = done? LINE_THROUGH : "";

    const item=`<li class="item side-border">
    <i class="co fa ${DONE}" job="complete" id="${id}"></i>
    <p class="text ${LINE}">${toDo}</p>
    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
    </li>`;
    const position="beforeend";
    list.insertAdjacentHTML(position,item);
}

//add item to list after user presses enter key
document.addEventListener("keyup",function(event)
{
    if(event.keyCode==13){
        const toDo= input.value;
        //if input isnt empty
        if(toDo)
        {
            addToDo(toDo);
            LIST.push({
                name : toDo,
                id : id,
                done : false,
                trash : false
            });
            localStorage.setItem("TODO",JSON.stringify(LIST));
            id++;
        }
        input.value = "";
    }
});

function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
}

function removeToDo(element)
{
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}

list.addEventListener("click", function(event){
    const element = event.target; // return the clicked element inside the list
    const elementJob = element.attributes.job.value;

    if(elementJob == "complete"){
        completeToDo(element);
    }
    else if(elementJob == "delete")
    {
        removeToDo(element);
    }
    localStorage.setItem("TODO",JSON.stringify(LIST));
});
