import { fromFirst } from "./from"

let logValue = value => {
  console.log(value)
}

let fromInterval = time => destination => {
  let id = setInterval(() => {
    destination(new Date().getSeconds())
  }, time)

  return () => {
    clearInterval(id)
  }
}

let fromAmount = amount => source => destination => {
  let i = 0
  let stop = source(value => {
    destination(value)
    i++
    if (i === amount) stop()
  })
}

fromAmount(3)(fromInterval(1000))(logValue)



