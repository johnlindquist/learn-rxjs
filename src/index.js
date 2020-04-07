import { fromArray, fromEvent, fromFirst, fromBothSources } from "./from"

let logValue = value => {
  console.log(value)
}

let clickSource = fromEvent(document, "click")

let numbersSource = fromArray([1, 2, 3])

let fromOneThenOther = (source1, source2) => destination => {
  return source1(value => {
    return source2(value => {
      destination(value)
    })
  })
}

let keyDownSource = fromEvent(document, "keydown")
fromFirst(fromBothSources(clickSource, keyDownSource))(logValue)
