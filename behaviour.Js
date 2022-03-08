let todocontainer=document.getElementById("add-task-container");
let add_button=document.getElementById("button-action");
let clear_button=document.getElementById("button-action-clear");
array_list=[
];
let todocount=array_list.length;

function onTodoStatusChange(checkboxId, labelId) {
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);
  
    labelElement.classList.toggle('checked');
  };

  function delete_func(todoId) {
    let todoElement = document.getElementById(todoId);
    console.log(todoElement);  
    todocontainer.removeChild(todoElement);
  };
function createAndAppendToDo(todo){
    let todoId="todo"+todo.uniqueNo;
    let checkboxId="checkbox"+todo.uniqueNo;
    let labelId="label"+todo.uniqueNo;
    
    let todocontainer_ul=document.getElementById("add-task-container")
    let todoelement=document.createElement("li");
    todoelement.classList.add("d-flex","m-2");
    todoelement.id=todoId;
    todocontainer_ul.appendChild(todoelement);


    let checkelement=document.createElement("input");
    checkelement.setAttribute("type","checkbox");
    checkelement.classList.add("mt-2");
    checkelement.id=checkboxId;
    checkelement.onclick=function(){
        onTodoStatusChange(checkboxId,labelId);
    
    };
    todoelement.appendChild(checkelement);

    let container_div=document.createElement("div");
    container_div.classList.add("tile_style","d-flex","ml-2");
    console.log(container_div);

    todoelement.appendChild(container_div);

    let container_div2=document.createElement("div");
    container_div2.classList.add("ml-2");
    container_div.appendChild(container_div2);

    let label_element=document.createElement("label");

    label_element.for=checkboxId;
    label_element.id=labelId;
    label_element.textContent=todo.input;
    container_div.appendChild(label_element);


    let delete_Icon=document.createElement("i");
    delete_Icon.classList.add("fa", "fa-trash", "ml-auto", "icon_styling");

    delete_Icon.onclick=function(){
        delete_func(todoId);
    };
    container_div.appendChild(delete_Icon);
}


function onAddToDo(){
    let input_element=document.getElementById("input_text");
    let input_element_value=input_element.value;
    if(input_element_value===""){
        alert("Enter any valid input");
        return;
    }

    todocount=todocount+1;
    let new_to_do={input : input_element_value,uniqueNo : todocount};
    array_list.push(new_to_do);

    createAndAppendToDo(new_to_do);
    input_element.value=""          
};

add_button.onclick = function(){    
    onAddToDo();
};


clear_button.onclick=function(){
    for (let i of array_list){
        delete_func('todo'+i.uniqueNo);
    };
};
