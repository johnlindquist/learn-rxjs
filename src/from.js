export let fromBothSources = (source1, source2) => destination => {
    source1(destination)
    source2(destination)
}

export let fromEvent = (element, eventType) => destination => {
    element.addEventListener(eventType, destination)
}

export let fromArray = array => destination => {
    for (let item of array) {
        destination(item)
    }
}