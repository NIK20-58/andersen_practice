function createDebounceFunction(fn,delay) {
    let timer;

    return function (...args) {
        if (timer) {
            clearTimeout(funId)
        }

        timer = setTimeout(()=>{
            fn(args)
        }, delay)
    };
}
