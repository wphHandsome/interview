const obj = {
    a: 'a'
}

function test(a, b) {
    console.log('this.a::', this.a)
    console.log('a:: ', a)
    console.log('b:: ', b)
}



test.apply(obj, [1, 2])



Function.prototype.selfApply = function(thisArg, args = []) {
    thisArg.fn = this;
    const ret = thisArg.fn(...args)
    Reflect.deleteProperty(thisArg, 'fn')
    return ret;
}

test.selfApply(obj, [1, 2])



