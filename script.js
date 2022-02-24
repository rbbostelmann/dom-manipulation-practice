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

//method 2

const btn = document.querySelector("#btn")
btn.onclick = () => alert("This also has the problem of only allowing 1 onclick event per element.")

const btn2 = document.querySelector("#other-btn")
btn2.addEventListener("click", () => {
   
    alert("This is the most flexible method as it allows for multiple event listeners.")
})

//the second part could be in its own event listener
btn2.addEventListener('click', function (e) {
    console.log(e.target);
    e.target.style.background = 'blue';
});

//querySelectorAll

const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});