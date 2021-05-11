
function Person(name) {
    this.name = name;
    
}
Person.prototype.getName = function() {
    return this.name;
}

const person = new Person('张三')
console.log('person', person)
console.log(person.getName())


function selfNew(fn, ...args) {
    const obj = Object.create(fn.prototype) // 创建一个对象，该对象继承构造函数的原型
    const ret = fn.apply(obj, args) // 调用构造函数，构造函数的 this 指向新创建的对象，并且传入参数
    return ret instanceof Object ? ret : obj; // 判断返回的值是否为 Object 类型，如果是则返回调用后的值，否则返回创建的对象本身
}

const selfPerson = selfNew(Person, '张三')
console.log('selfPerson', selfPerson)
console.log(selfPerson.getName())



