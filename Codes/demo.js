//Arrow function
//For in
//for Each
//Map
// To-do List App

// var example =(x) => {
//   return x * 3;
// }
// x = 5;
// console.log(example());

// let a = 5;
// let b = 10;
// console.log (a+b);


// cars.forEach(element => {
//     carFunction();
// });
// function carFunction() {
//     console.log(" This is a car");
// }
// check update on forEach method
// let cars =['BMW',]
// cars.forEach(carFunction);

// function carFunction(item,index) {
//     console.log("That is my car");
// }
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

// for (i in cars )[
//     console.log(cars)
// cars.forEach(element => {
//     carFunction();
// });
// function carFunction() {
//     console.log(" This is a car");
// }

// for (const car in cars) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
// let scores =[10,20,30,40]
// const newScores = scores.map(addScores)
// function addScores(score) {
//     return score +5;
// }
// console.log (newScores)

// // to-do List App
// let tasks =[' Wash', 'Eat', 'Read']
// const newTasks = tasks.map(taskFunction)
// function taskFunction(add){
//  return tasks.push['Sleep']
// }

// var submitForm =() =>{

//     alert("Login Successful!!!");
// }
// submitForm();

// document.getElementById("second").style = "background-color: blue";
// document.getElementById("second").style = "color:white";
// document.getElementsByClassName("list").style ="display: float-right";
// document.getElementsByTagName("header").innerHTML = "Sign-in Page";



// Steps in building a To-do list App
//Features of our To-do List APP
// input box for entering new task
//  Update task list
// Add/remove from task
// let todo = prompt("enter a task")
// let tasks =[ ]
// var newTasks =() => {
 // type in what you want to be done when the  onclick button is clicked
//  if (todo!==" "){
//      tasks+=todo;
//      return todo;
//  }

// }


// More examples on DOM
// JS WEB API
// JQUERY
//JSON
//BOOTSTRAP
//REACTJS
// var scores =[40,50,70,20,10,80]
// const i = 's';
// for (let s = 0; s < scores.length; scores+=2 ){
//         console.log(scores)
//         break;
// }
// document.getElementsByClassName("par").style = "background-color:red";

//API (Application Programming Interface)

//WEB API
// Geolocation API
const myLocation = document.getElementById("pos");
function getLocation(){
    try {
        navigator.geolocation.getCurrentPosition(showLocation);
    } catch (error) {
        myLocation.innerHTML = "Location not found";
    }
}
function showLocation(position) {
    myLocation.innerHTML = "This is where I am currently" + position.coords.longitude;
    
}
// API- Application Programming Interface
// Form API
// declaring a function caled submitForm to validate the email address

function submitForm() {
    const myEmail = document.getElementById('chk');
    if (myEmail.checkValidity()) {
        document.getElementsByClassName("ran").innerHTML= myEmail.validationMessage;
        
    }
    else{
        document.getElementsByClassName("ran").innerHTML= myEmail.validationMessage;;
    }
    
}
//History API
//write a function using History API

//Fetch API
let lon;
let lat;
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
const kelvin = 273;

window.addEventListener("load", () => {
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition((position) => {
	console.log(position);
	lon = position.coords.longitude;
	lat = position.coords.latitude;

	// API ID
	const api = "6d055e39ee237af35ca066f35474e9df";

	// API URL
	const base =
`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
`lon=${lon}&appid=6d055e39ee237af35ca066f35474e9df`;

	// Calling the API
	fetch(base)
		.then((response) => {
		return response.json();
		})
		.then((data) => {
		console.log(data);
		temperature.textContent =
			Math.floor(data.main.temp - kelvin) + "°C";
		summary.textContent = data.weather[0].description;
		loc.textContent = data.name + "," + data.sys.country;
		let icon1 = data.weather[0].icon;
		icon.innerHTML =
			`<img src="icons/${icon1}.svg" style= 'height:10rem'/>`;
		});
	});
}
});
