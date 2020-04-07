import { fromArray, fromEvent, fromBothSources } from "./from"
let logValue = value => {
  console.log(value)
}



let clickSource = fromEvent(document, "click")
let numbersSource = fromArray([5, 6, 7])


let clickAndNumbers = fromBothSources(clickSource, numbersSource)

clickAndNumbers(logValue)

