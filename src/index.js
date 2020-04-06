let callback = event => {
  console.log(event)
}

let createClickSource = destination => {
  document.addEventListener("click", destination)
}

