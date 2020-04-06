let logValue = value => {
  console.log(value)
}

let fromEvent = (element, eventType) => destination => {
  element.addEventListener(eventType, destination)
}

let fromArray = array => destination => {
  for (let item of array) {
    destination(item)
  }
}

let clickSource = fromEvent(document, "click")
let numbersSource = fromArray([5, 6, 7])

numbersSource(logValue)
clickSource(logValue)

clickSource(event => {
  console.log("hello")
})

