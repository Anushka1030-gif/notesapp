let taskData={};

const todo=document.querySelector("#todo");
const progress=document.querySelector("#progress");
const done=document.querySelector("#done");
let dragElement=null;

if (localStorage.getItem("tasks")) {
    const data = JSON.parse(localStorage.getItem("tasks"));

    for (const col in data) {
        const column = document.getElementById(col);

        if (Array.isArray(data[col])) {
            data[col].forEach(task => {
                const div = document.createElement("div");
                div.classList.add("task");
                div.setAttribute("draggable", true);

                div.innerHTML = `
                    <h2>${task.title}</h2>
                    <p>${task.desc}</p>
                    <button>Delete</button>
                `;

                // delete
                div.querySelector("button").addEventListener("click", () => {
                    div.remove();
                    updateCount();
                });

                // drag
                div.addEventListener("dragstart", () => {
                    dragElement = div;
                });
                div.addEventListener("dragend", () => {
                    dragElement = null;
                });

                column.appendChild(div);
            });
        }
    }

    updateCount(); // ✅ inside block
}

const tasks=document.querySelectorAll(".task");

tasks.forEach(task=>{
    task.addEventListener("dragstart",(e) => {
        // console.log("dragging",e);
        dragElement=e.target;
    });
    task.addEventListener("dragend",(e)=>{
        dragElement=null;
    });
})

function addDragEventOnColumn(column){
    column.addEventListener("dragenter",(e)=>{
        e.preventDefault();
        column.classList.add("hover-over");
    })
    column.addEventListener("dragleave",(e)=>{
        e.preventDefault();
        column.classList.remove("hover-over");
    })

    column.addEventListener("dragover",(e)=>{
        e.preventDefault();
    })
    column.addEventListener("drop",(e)=>{
        e.preventDefault();

        if(dragElement){
            column.appendChild(dragElement);
            updateCount();
        }
        column.classList.remove("hover-over");
    })
    
}
function updateCount(){
    [todo,progress,done].forEach(col=>{
        const tasks=col.querySelectorAll(".task");
        const count=col.querySelector(".right");

        taskData[col.id]=[...tasks].map(t=>{
            return{
                title:t.querySelector("h2").innerText,
                desc:t.querySelector("p").innerText
            }
        })
        localStorage.setItem("tasks", JSON.stringify(taskData));
        count.innerText=tasks.length;
    });
}

addDragEventOnColumn(todo);
addDragEventOnColumn(progress);
addDragEventOnColumn(done);

const toggleModalButton=document.querySelector("#toggle-modal");
const modalBg=document.querySelector(".modal .bg");
const modal=document.querySelector(".modal");
const addTaskButton=document.querySelector("#add-new-task");

toggleModalButton.addEventListener("click",()=>{
    modal.classList.toggle("active");
})
modalBg.addEventListener("click",()=>{
    modal.classList.remove("active");
})
addTaskButton.addEventListener("click",()=>{
    const taskTitle=document.querySelector("#task-title-input").value;
    const taskDesc=document.querySelector("#task-desc-input").value;
    const div=document.createElement("div");
    div.classList.add("task")
    div.setAttribute("draggable","true")
    div.innerHTML=`<h2>${taskTitle}</h2>
    <p>${taskDesc}</p>
    <button>Delete </button>`

    div.querySelector("button").addEventListener("click",()=>{
        div.remove();
        updateCount();
    })

    todo.appendChild(div);

    document.querySelector("#task-title-input").value="";
    document.querySelector("#task-desc-input").value="";

    updateCount();
    div.addEventListener("dragstart",(e)=>{
        dragElement=div;
    });
    div.addEventListener("dragend",(e)=>{
        dragElement=null;
    })
    modal.classList.remove("active");
})