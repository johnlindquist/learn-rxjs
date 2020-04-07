export let fromBothSources = (source1, source2) => destination => {
    source1(destination)
    source2(destination)
}

export let fromEvent = (element, eventType) => destination => {
    element.addEventListener(eventType, destination)

    return () => {
        element.removeEventListener(eventType, destination)
    }
}

export let fromArray = array => destination => {
    let isDone = false

    setTimeout(() => {
        for (let item of array) {
            destination(item)
            if (isDone) break;
        }
    }, 0)

    return () => {
        isDone = true
    }
}

export let fromFirst = source => destination => {
    let stop = source(value => {
        destination(value)
        stop()
    })
}