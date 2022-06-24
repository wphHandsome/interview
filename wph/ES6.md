### Es6
#### 1、谈谈你对es6的理解/新增了哪些东西

#### 2、const let 的作用 --- 和var之间的区别
* const定义常量，let定义变量，let和const块级作用域，var全局变量
* 不存在变量提升：let声明的变量一定要在声明后使用，否则会报错
* const ：声明的时候一定要赋值，不然会报错。
* const ：如果声明了一个常量为json对象类型，那么这个常量里面的对象属性可以更改和添加

#### 3、解构理解和使用场景
* 定义：ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）解构步骤：1.变量的声明；2.变量的赋值
* 解构成对象，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
* 解构成数组，等号右边必须为可迭代对象。
##### 解构赋值使用场景
* 浅拷贝
* 交换变量
* 遍历Map结构
* 函数参数
* 提取 JSON 数据
* 输入模块的指定方法,加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。

#### 4、Promise --- 我每次面试必问 – 是干什么的，用来解决什么问题的
* Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理且更强大
* 对象的状态不受外界影响 （3种状态）
    * Pending状态（进行中）
    * Fulfilled状态（已成功）
    * Rejected状态（已失败）
* Promise的all方法提供了并行执行异步操作的能力，并且在所有异步操作执行完后才执行回调。
* all方法的效果实际上是「谁跑的慢，以谁为准执行回调」，那么相对的就有另一个方法「谁跑的快，以谁为准执行回调」，这就是race方法，这个词本来就是赛跑的意思。race的用法与all一样


#### 5、手写promise，实现promise.all()方法
* const p = new Promise((resolve,reject) => {
  resolve (true)
  return p 
})

* promiseALL(arr){
    let result = []
    return new Promise((resolve,reject) => {
        if(arr.length === 0) resolve(result)
        for(let i= 0;i<arr.length;i++){
        if(typeof arr[i].then === 'function'){
            arr[i].then(value => {
            result.splice(i,0,value)
            let result2 = Object.entries(result)
            if(result2.length === arr.length) resolve(result)
            },err=>{
            console.log('第'+[i]+'失败了！')
            reject(err)
            })
        }
        }
    })
}
* promiserace(arr){
    return new Promise((resolve,reject) => {
        arr.forEach(element => {
            if(typeof element.then === 'function'){
                element.then(value =>{
                resolve(value)
                },err => {
                reject(err)
                })
            }
        });
    })
}

#####  promise 怎么取消请求
* throw一个错误

##### 如何中断promise
* 中断promise链的方法只有一个，就是让then返回一个pending状态的promise，因为promise的状态没有改变，then方法就没办法执行。
```
p.then(value=>{
	return new Promise((resolve,reject)=>{})
}).then(value=>{
	console.log(value)
}).then(value=>{
	console.log(value)
})

```


#### 6、async/await相比于Promise的优势？
* 代码读起来更加同步，Promise虽然摆脱了回调地狱，但是then的链式调用也会带来额外的阅读负担
* Promise传递中间值非常麻烦，而async/await几乎是同步的写法，非常优雅
* 错误处理友好，async/await可以用成熟的try/catch，Promise的错误捕获非常冗余
* 调试友好，Promise的调试很差，由于没有代码块，你不能在一个返回表达式的箭头函数中设置断点，如果你在一个.then代码块中使用调试器的步进(step-over)功能，调试器并不会进入后续的.then代码块，因为调试器只能跟踪同步代码的『每一步』。



#### 7、类和继承
* 类的声明一般有两种方式
    var Animal = function () {
        this.name = 'Animal';
    };

    //ES6中类的声明
    class Animal2 {
        constructor () {
            this.name = 'Animal2';
        }
    }   
* 实例化就比较简单，直接用new运算符
    new Animall()
    new Animal2()
* 实现继承的方式主要有两种：
    * 第一种借助构造函数实现继承
      function Parent1 () {
          this.name = 'parent1';
      }
      function Child1 () {
          Parent1.call(this); //这里的call用apply也可以
          this.type = 'child1';
      }
      console.log(new Child1());//Child1{name:'parent1',type:'child1'}
      * 但这种继承的方法有一个缺点，它只是把父类中的属性继承了，但父类的原型中的属性继承不了
      
    * 第二种是借助原型链实现继承
        function Parent2 () {
          this.name = 'parent2';
          this.play = [1, 2, 3];
        }

        function Child2 () {
            this.type = 'child2';
        }

        Child2.prototype = new Parent2(); //通过把Child2的原型指向Parent2来实现继承

        * 缺点：var s1 = new Child2();
              var s2 = new Child2();
              s1.play.push(4);
              console.log('s1.play);//[1,2,3,4]
              console.log(s2.play);//[1,2,3,4]
        我们只改了s1这个实例的属性，却发现Child2的其他实例的属性都一起改变了，因为s1修改的是它原型的属性，原型的属性修改，所有继承自该原型的类的属性都会一起改变，因此Child2的实例之间并没有隔离开来
    
    * 第三种 组合方式
        function Parent5 () {
            this.name = 'parent5';
            this.play = [1, 2, 3];
        }

        function Child5 () {
            Parent5.call(this);
            this.type = 'child5';
        }

        //把子类的原型指向通过Object.create创建的中间对象
        Child5.prototype = Object.create(Parent5.prototype);

        //把Child5的原型的构造函数指向自己
        Child5.prototype.constructor = Child5;

#### 8、创建对象
* new Object() 通过构造函数来创建对象, 添加的属性是在自身实例下。
* Object.create() es6创建对象的另一种方式，可以理解为继承一个对象, 添加的属性是在原型下。
* JavaScript 的对象继承是通过原型链实现的。ES6 提供了更多原型对象的操作方法。
__proto__属性（前后各两个下划线），用来读取或设置当前对象的prototype对象。目前只有浏览器环境必须部署有这个属性，其他运行环境不一定要部署，因此不建议使用这个属性，而是使用下面这些来 Object.setPrototypeOf()（写操作）、Object.getPrototypeOf()（读操作）、Object.create()（生成操作）代替。

#### 9、和数组去重的方法一样，es6如何实现数组去重 --- 利用 new set() 
* let [a,b,c] = new Set([1,2,2,3])
console.log(a,b,c)//1,2,3


#### 10、模块化
  * AMD: 一般来说，AMD是 RequireJS 在推广过程中对模块定义的规范化的产出，在开发中比较常用的是require.js进行模块的定义和加载，一般是使用define来定义模块，使用require来加载模块
  * define(id?, dependencies?, factory)
    id是定义中模块的名字，这个参数是可选的，如果没有提供该参数，模块的名字应该默认为模块加载器请求的指定脚本的名字，如果提供了该参数，模块名必须是“顶级”的和绝对的

    dependencies是定义的模块中所依赖模块的数组，依赖模块必须根据模块的工厂方法优先级执行，并且执行的结果应该按照依赖数组中的位置顺序以参数的形式传入（定义中模块的）工厂方法中

    factory是模块初始化要执行的函数或对象，如果为函数，它应该只被执行一次，如果是对象，此对象应该为模块的输出值

  * require([module], callback);
    require要传入两个参数，第一个参数[module]，是一个数组，里面的成员就是要加载的模块，第二个参数callback，则是加载成功之后的回调函数
      
    * es6中的模块化:ES6的模块化分为导出（export）与导入（import）两个模块。
    * 默认导出（default export）一个模块只能有一个默认导出，对于默认导出，导入的名称可以和导出的名称不一致。
  * AMD与CMD区别
    * 最明显的区别就是在模块定义时对依赖的处理不同，AMD推崇依赖前置，在定义模块的时候就要声明其依赖的模块，CMD推崇就近依赖，只有在用到某个模块的时候再去require

 
#### 11、generator实现
* Generator函数的返回值是一个带有状态的Generator实例。它可以被for of 调用，进行遍历，且只可被for of 调用。此时将返回他的所有状态
  function* foo(x) {
      yield x + 1;
      yield x + 2;
      return x + 3;
  }
  const result = foo(0) // foo {<suspended>}
  result.next();  // {value: 1, done: false}
  result.next();  // {value: 2, done: false}
  result.next();  // {value: 3, done: true}
  result.next();  //{value: undefined, done: true}

* Generator函数的实例。它具有状态值suspended和closed，suspended代表暂停，closed则为结束。但是这个状态是无法捕获的，我们只能通过Generator函数的提供的方法获取当前的状态。
在执行next方法后，顺序执行了yield的返回值。返回值有value和done两个状态。value为返回值，可以是任意类型。done的状态为false和true，true即为执行完毕。在执行完毕后再次调用返回{value: undefined, done: true}
注意:在遇到return的时候，所有剩下的yield不再执行，直接返回{ value: undefined, done: true }

#### 12、async  await  实现
* async/await语法糖就是使用Generator函数+自动执行器来运作的。

#### 13、作用于链
*  当在当前作用域下没有定义变量就是自由变量，当前作用域没有的话，就会去他的上级作用域找，这就是作用域链。

#### 14、闭包
* 简单的说，闭包就是能够读取其他函数内部变量的函数。
* 闭包主要有以下两种应用场景
    函数作为返回值
    函数作为参数来传递

#### this指向问题
* 在全局执行上下文中（在任何函数之外），this指的是全局对象，无论是否处于严格模式。
* 函数内部,this取决于函数的调用方式。严格模式，this在进入执行上下文时没有设置的值，则它保持为undefined

#### 类型BigInt


