export let fromBothSources = (source1, source2) => destination => {
    let stop1 = source1(destination)
    let stop2 = source2(destination)

    return () => {
        stop1()
        stop2()
    }
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

    return stop
}

export let fromOneThenOther = (source1, source2) => destination => {
    return source1(value => {
        return source2(value => {
            destination(value)
        })
    })
}