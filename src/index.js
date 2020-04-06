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

let fromBothSources = (source1, source2) => destination => {
  source1(destination)
  source2(destination)
}

let clickAndNumbers = fromBothSources(clickSource, numbersSource)

clickAndNumbers(logValue)

