let clickSource = destination => {
  document.addEventListener("click", destination)
}

clickSource(event => {
  console.log(event)
})

clickSource(event => {
  console.log("hello")
})

