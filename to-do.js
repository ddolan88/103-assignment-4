let newTask = document.getElementById("txtTask");
let count =0;

function registerTask(){
    console.log(newTask.value);
    let tmp=`<li id="${count}" class="task">${newTask.value}<button class="del" onclick="deleteTask(${count})"><i class="fa-solid fa-circle-xmark"></i></li>`;
    document.getElementById("todoList").innerHTML+=tmp;
    clearForm();
    count++;
}

function deleteTask(x){
    document.getElementById(x).remove();

}

function clearForm(){
    newTask.value
}