let logValue = value => {
  console.log(value)
}

let clickSource = destination => {
  document.addEventListener("click", destination)
}

let numbersSource = destination => {
  for (let number of [1, 2, 3]) {
    destination(number)
  }
}

numbersSource(event => {
  console.log("hello")
})
clickSource(logValue)

clickSource(event => {
  console.log("hello")
})

