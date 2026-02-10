let tasks=[];
function addtask(){
    
let input = document.getElementById('input')
let task = input.value.trim();
if(task != "" ){
    
    tasks.push(task);
   
let listdiv = document.getElementById('tasklist');
let taskdiv=document.createElement('div');
taskdiv.className="task";
taskdiv.textContent=task;
let removeButton = document.createElement('button');
removeButton.className= "button";
removeButton.textContent='remove task';
function removebtn(){
    tasks.splice(tasks.indexOf(task),1);
    listdiv.removeChild(taskdiv);

}
removeButton.onclick =removebtn;
taskdiv.appendChild(removeButton);
listdiv.appendChild(taskdiv);
}

input.value="";
}

let input=document.getElementById('input');
input.addEventListener("keypress",   function(event){
    if(event.key === "Enter")
    {
        event.preventDefault();
        document.querySelector('.addtask').click();

    }
})






let glow = document.getElementById("glow");

let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  currentX += (mouseX - currentX) * 0.09;
  currentY += (mouseY - currentY) * 0.09;

  glow.style.left = currentX + "px";
  glow.style.top = currentY + "px";

  requestAnimationFrame(animate);
}

animate();



