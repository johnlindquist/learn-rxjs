import { fromEvent } from "./from"

let logValue = value => {
  console.log(value)
}

let input = document.createElement("input")
document.body.appendChild(input)

let output = document.createElement("div")
document.body.appendChild(output)

let showArray = array => {
  output.innerHTML = array.map(string => {
    return `<div>${string}</div>`
  }).join("")
}

let targetValue = source => destination => {
  return source(value => destination(value.target.value))
}

let inputSource = fromEvent(input, "input")

let names = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']


let includesString = names => source => destination => {
  return source(value => {
    destination(names.filter(name => name.toLowerCase().includes(value.toLowerCase())))
  })
}

includesString(names)(targetValue(inputSource))(showArray)