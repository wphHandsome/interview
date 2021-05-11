const obj = {
    a: 1
}
function test(b) {
    console.log('this.a::', this.a)
    console.log('b::', b)
}

const t = test.bind(obj, 'b')
t()


Function.prototype.myBind = function(thisArg, ...args) {
    const fn = this;
    thisArg.fn = fn;
    return function() {
        thisArg.fn(...args)
    }
}


const myTest = test.myBind(obj, 'b')
myTest()
console.log('muTest', myTest)


