let click = callback => {
  document.addEventListener("click", callback)
}

let logValue = value => {
  console.log(value)
}

let debounce = time => source => callback => {
  let id;
  source(value => {
    if (id) clearTimeout(id)
    id = setTimeout(() => {
      callback(value)
    }, time)
  })
}


debounce(1000)(click)(logValue)