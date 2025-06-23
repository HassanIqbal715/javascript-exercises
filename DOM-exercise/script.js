const container = document.querySelector("#container");

const paragraph = document.createElement("p");
const heading3 = document.createElement("h3");
const box = document.createElement("div");

paragraph.style.color = "red";
paragraph.textContent = "Hey I'm red!";

heading3.style.color = "blue";
heading3.textContent = "I'm a blue h3!";

box.setAttribute("style", "border: 2px solid black; background: pink;");
const b_heading1 = document.createElement("h1");
const b_paragraph = document.createElement("p");

b_heading1.textContent = "I'm in a div";
b_paragraph.textContent = "ME TOO!";

box.appendChild(b_heading1);
box.appendChild(b_paragraph);

container.appendChild(paragraph);
container.appendChild(heading3);
container.appendChild(box);

// // Method 2 of events
// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");

// Method 3 of events
// Arrow functions can be created like this anywhere instead of calling a function
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//     alert("Hello World");
// });

// Method 3.2 of events
function clickEvent() {
    alert("Hello World");
}

// Call back function btw. Recall karo parameters use nahi kar sakte inke saath.
const btn = document.querySelector("#btn");
btn.addEventListener("click", clickEvent);