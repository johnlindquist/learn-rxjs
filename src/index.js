import { fromArray, fromEvent, fromFirst } from "./from"

let logValue = value => {
  console.log(value)
}

let clickSource = fromEvent(document, "click")
fromFirst(clickSource)(logValue)

let numbersSource = fromArray([1, 2, 3])
fromFirst(numbersSource)(logValue)

