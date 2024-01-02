function createDebounceFunction(fn,delay) {
    let funId;

    return function (...args) {
        clearTimeout(funId)

        funId = setTimeout(()=>{
            fn(args)
        },delay)
    };
}
