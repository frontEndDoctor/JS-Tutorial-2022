//To get the element
// var funFact = document.querySelector(".tgif1")

// to assign it to a local storage
// const plan = document.querySelector(".tgif1");
// localStorage.setItem("task", "Work")

// to display the stored dat)
//document.getElementById("tgif1").innerHTML = localStorage.getItem("task")



// to remove the stored data
// document.getElementsByClassName(".tgif1").innerHTML = localStorage.removeItem("task", "hang-out");

// function addCount() {
//     if (localStorage.clickcount) {
//         localStorage.clickcount = Number (localStorage.clickcount ) +1;
//     }
//     else{
//         localStorage.clickcount = 1;
//     }
//    document.getElementById("cnt").innerHTML = localStorage.clickcount;
// }


// Writing the codes for a task-list App; the steps are:
//1. render localstorage of stored data
//2.  store tasks in local storage
//remove data stored


// Render all input tasks on the UI
document.addEventListener("DOMContentLoaded", function(){
    renderListData();
     
});
// event handler for deleting saved task
document.addEventListener('click',function(e){
     
    if(e.target && e.target.className == 'removeTask'){
        let removeTaskBtn = e.target 
        if(removeTaskBtn){
            event.preventDefault();
            let removeIndex = event.target.getAttribute('data-key');
            let tasksList = JSON.parse(localStorage.getItem('tasks_mgmt'));
            let removeTaskList = tasksList.splice(removeIndex,1);
            localStorage.setItem('tasks_mgmt', JSON.stringify(tasksList));
            renderListData();
        }
    }
 });
 
 
// submit form and store the input task
document.querySelector('form#taskGenerate').addEventListener('submit', function(event){
 
    event.preventDefault();
    //getting the html DOM into js variables
    let taskName = document.querySelector('#taskName');
    let taskTime = document.querySelector('#taskTime');
    let taskDescription = document.querySelector('#taskDescription');
    let taskStatus = document.querySelector('#taskDescription');

   // creating an object for the new input task  
    letNewTask = { 
        'taskName' : taskName.value,
         'taskTime' : taskTime.value,
          'taskDescription' : taskDescription.value };
 // assigning the new object created to a list of tasks called tasksList
    let tasksList;
 // using localStorage to get the stored session with a key of "taskmgmt"    
    if(localStorage.getItem('tasks_mgmt') == null){
        tasksList = [];
    } else {
        tasksList = JSON.parse(localStorage.getItem('tasks_mgmt'));
    }
  // pushing the new task created to the created tasksList   
    tasksList.push(letNewTask);
    //save the session with loacl storage using  a key of "taskmgmt" and a value of JSON.stringify
    localStorage.setItem('tasks_mgmt', JSON.stringify(tasksList));
     
    taskName.value = '';
    taskTime.value = '';
    taskDescription.value = '';
    renderListData();
     
});
 
function renderListData(){
    // Handler when the DOM is fully loaded
    const tasks = JSON.parse(localStorage.getItem('tasks_mgmt'));
    let taskList = '';
    const taskA = document.querySelector('#taskList');
    taskA.innerHTML = '';
    tasks.forEach(function(task, index){
        taskA.innerHTML += '<li data-key="'+ index +'"><h2>'+task.taskName+'</h2> <p><strong>Time: </strong>'+ task.taskTime +'</p> <p>'+ task.taskDescription +'</p> <a class="removeTask" href="#" data-key="'+ index +'">Remove</a> </li>';
    });
}