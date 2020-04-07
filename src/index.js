import { fromArray, fromEvent, fromFirst } from "./from"

let logValue = value => {
  console.log(value)
}

let clickSource = fromEvent(document, "click")

let numbersSource = fromArray([1, 2, 3])

let fromOneThenOther = (source1, source2) => destination => {
  source1(value => {
    source2(value => {
      destination(value)
    })
  })
}

fromOneThenOther(clickSource, fromFirst(numbersSource))(logValue)

