export let compose = (...functions) => {
    return functions.reduce((prevFn, nextFn) => (...args) => {
        return prevFn(nextFn(...args))
    })
}
