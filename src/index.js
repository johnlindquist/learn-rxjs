let logValue = value => {
  console.log(value)
}

let isOdd = source => oldDestination => {
  return source(value => {
    if (value % 2) {
      oldDestination(value)
    }
  })
}

let stopWhenGreaterThan10 = source => oldDestination => {
  let stop = source(value => {

    if (value > 10) {
      stop()
    } else {
      oldDestination(value)
    }
  })
}


let interval = amount => oldDestination => {
  let i = 0
  let id = setInterval(() => {
    oldDestination(i)
    i++
  }, amount)

  return () => {
    clearInterval(id)
  }
}

stopWhenGreaterThan10(isOdd(interval(1000)))(logValue)



