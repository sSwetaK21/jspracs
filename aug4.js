//============js Basics=============

let bodyEl = document.body
// print.append("Hello Shweta!")
bodyEl.append("Hello Shweta!", "Hey")

let divEl = document.createElement("div")
divEl.innerText = "hi div!"

divEl.innerHTML = `<strong>this is strong tag</strong>`

bodyEl.append(divEl)

// body.appendChild(divEl)

let pEl = document.createElement("p")
// pEl.innerText = "Paragraph is here"
pEl.textContent = "Paragraph is here"

divEl.append(pEl)

let p1El = document.querySelector("#p1")
let spanEl = document.querySelector(".span1")

spanEl.remove()

console.log(document.getElementsByClassName("span1"))
