var vasya = {
  name: "Vasiliy",
  lastName: "Petrovskiy",
  age: 25,
  hobbies: {
    art: "drawing, singing",
    
  },
  greet: function() { //method
    document.write(`Hello, my name is ${this.name}! And I'm ${this.age}. <br>`);
  },
  bye: function() {
    document.write(`Have a nice day ${this.name}, bye`);
  }
}

vasya.greet();

// 1. Call 'greet' method multiple times.
// vasya.greet();
// vasya.greet();
// 2. Include age in the greeting.
// 3. try changing name and age.
vasya.name = "Alexander";
vasya.age = 28;
// vasya.greet();
// 4. Create method 'bye'.
// vasya.bye();

// document.body.style.background = "violet";
// document.body.textContent = "Hello world";

// getElementById
let helloWorldDiv = document.getElementById("hello-world");

helloWorldDiv.textContent = "Nice to meet you!";
helloWorldDiv.style.background = "brown";
helloWorldDiv.style.color = "white";
helloWorldDiv.style.padding = "6px";
helloWorldDiv.style.textDecoration = "underline";
helloWorldDiv.style.fontSize = "18px";

// getElementByTagName
let allParagraphs = document.getElementsByTagName("p");

// console.log(allParagraphs);
for (let paragraph of allParagraphs) {
  paragraph.style.backgroundColor = "green";
  paragraph.style.fontWeight = "bold";
  paragraph.style.color = "yellow";
  paragraph.style.padding = "5px";
}

// getElementsByClassName
let allHelloWorlds = document.getElementsByClassName("hello-world");

for (let helloWorld of allHelloWorlds) {
  helloWorld.style.fontStyle = "italic";
  helloWorld.style.background = "pink";
  helloWorld.style.color = "blue";
  helloWorld.style.padding = "3px";
}

// HOW TO GET DEFINITE ELEMENTS
// querySelector
let helloWorld2 = document.querySelector("#hello-world");
helloWorld2.style.background = "purple";

// querySelectorAll
let allHelloWorlds2 = document.querySelectorAll(".hello-world");
for (let helloWorld of allHelloWorlds2) {
  helloWorld.style.fontSize = "13px";
}

document.querySelector('p:first-of-type').textContent = "HELLO";











