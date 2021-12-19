var a = [1,1,23,34,1]
console.log(a.join(''))
console.log(a.toString())

function * all(a){
  yield a+1
  yield a+2
  return a +3
}
const abb = all(2)

console.log(abb)

function* foo(x) {
  let a = yield x + 0;
  let b= yield a + 2;
  yield x; 
  yield a 
  yield b 
}
const result = foo(0)

result.next() //  {value: 0, done: false}
console.log(result.next(3) ,'11')
result.next(2) // {value: 4, done: false}
result.next(3) // {value: 0, done: false}
result.next(4) // {value: 2, done: false}
result.next(5) // {value: 3, done: false}
