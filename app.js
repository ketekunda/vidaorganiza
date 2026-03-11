let tasks=[]

function addTask(){

const input=document.getElementById("taskInput")
const text=input.value

if(text==="") return

tasks.push(text)

input.value=""

render()

}

function deleteTask(index){

tasks.splice(index,1)

render()

}

function render(){

const list=document.getElementById("taskList")

list.innerHTML=""

tasks.forEach((task,index)=>{

const li=document.createElement("li")

li.innerHTML=task+" <button onclick='deleteTask("+index+")'>❌</button>"

list.appendChild(li)

})

}
