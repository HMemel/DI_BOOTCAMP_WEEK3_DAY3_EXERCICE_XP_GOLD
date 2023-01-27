// Exercise 1 : Animation With The Alphabet

let mainDiv = document.createElement("div")
mainDiv.classList.add = "main"
let alphabet = String.fromCharCode(...Array(123).keys()).slice(97)

for (let i = 0; i< alphabet.length; i++){
element = document.createElement("div")
element.setAttribute("id", "letter")
dragDrop(element)
element.innerHTML = alphabet[i]
mainDiv.appendChild(element)
}
document.body.appendChild(mainDiv)

function dragDrop (element) {
element.setAttribute('draggable', 'true');
element.addEventListener("dragstart", function(event) {event.target.style.backgroundColor = "lightpink"});
element.addEventListener("dragend", function(event) {
      event.target.style.backgroundColor = "lightgreen";
      let _x = event.clientX;
      let _y = event.clientY;
      event.target.style.left = _x + "px";
      event.target.style.top = _y + "px";
      event.target.style.position = "absolute"; //Necessary
});
}


// Exercise 2 : Animation With A Paragraph

let p = document.querySelector('p')
p.setAttribute('draggable', true)
p.addEventListener('dragend', (e) => {
    p.style.position = 'absolute';
    p.style.left = (e.x) + "px";
    p.style.top = (e.y) + "px";
    p.style.fontSize = (((e.x + e.y) / 2) % 48).toString() + "pt";
    p.style.color = "blue";
})