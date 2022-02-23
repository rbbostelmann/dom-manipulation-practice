const container = document.querySelector("#container");

const firstLine = document.createElement("p");
firstLine.textContent = "Hey I’m red!"
firstLine.style.color = "red";

container.appendChild(firstLine);

const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm a blue h3!";
blueH3.style.color = "blue";

container.appendChild(blueH3);

const div = document.createElement("div");
div.style.border = "black";
div.style.backgroundColor = "pink";

container.appendChild(div);

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div!";

const secondLine = document.createElement("p");
secondLine.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(secondLine);