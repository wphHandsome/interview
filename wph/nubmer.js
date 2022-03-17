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

const obj = {
  a:1,
  b:2
}

const newobj = Object.create(obj)
// const newobj = Object.create(obj,Object.getOwnPropertyDescriptors(obj))

console.log(Object.getPrototypeOf(newobj),'111')

function jieliu(fn, delay) {
  let timer;
  return function() {
      if(!timer) {
          fn.apply(this,arguments)
           timer = setTimeout(()=>{ 
              clearTimeout(timer);
              timer = null;
          },delay)
      }
  }
}

let dada  = function(){
  console.log('danjdah')
}

let func = jieliu(dada,500)

func()

// function jieliu(fn,delay){
//   let timer
//   return function(){
//     timer = setTimeout(() => {
      
//     })
//   }
// }

const hellp ={
  name:"daddd",
  age:"dadad"
}

function helloda(){
  console.log('111111dadaa')
}

helloda.apply(hellp,['1','2'])



var num = 0;
function Obj (){
    this.num = 1,
    this.getNum = function(){
        console.log(this.num);
    },
    this.getNumLater = function(){
        setTimeout(function(){
            console.log(this.num);
        }, 1000)
    }
}
var objRRR = new Obj; 
objRRR.getNum();//1　　打印的是obj.num，值为1
objRRR.getNumLater()//0　