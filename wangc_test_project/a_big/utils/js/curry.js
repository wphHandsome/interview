
function curry(...args) {
    const argList = [...args]
    const fn = (...arg) => {
        console.log('argList', argList)
        argList.push(...arg)
        return fn;
    }
    fn.toString = () => {
        return argList.reduce((a, b) => a + b)
    }
    return fn;
}


const val = curry(1)(2)(3)

console.log('val', val + 1)



