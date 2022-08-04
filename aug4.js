//============js Basics=============

let bodyEl = document.body
// print.append("Hello Shweta!")
bodyEl.append("Hello Shweta!", "Hey")

let divEl = document.createElement("div")
divEl.innerText = "hi div!"

bodyEl.append(divEl)

// body.appendChild(divEl)

let pEl = document.createElement("p")
// pEl.innerText = "Paragraph is here"
pEl.textContent = "Paragraph is here"

divEl.append(pEl)