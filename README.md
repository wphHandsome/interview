
面试的问题一般问几类。

### Css基础类 
* 1.清楚浮动的方式以及为什么要清楚浮动。（至少说出4种）
* 2.让一个元素在div中居中显示的方法（至少说出五中）
* 3.css3的新属性，H5新属性，都用过哪些。
* 4.PC端 移动端的常用布局方式  每种方式的优缺点

### Js基础
* 1.闭包(必问) – 什么是闭包 --- 有什么作用 --- 有什么缺点 --- 如何解决 – 引出内存泄漏的几种方式
* 2.原型 原型链  作用域 作用域链
* 3.数组的所有方法 字符串的所有方法
* 4.ajax的创建过程 ajax优缺点
* 5.事件模型 – 事件委派 – 作用好处
* 6.数组去重的方法（至少要说出三种来）
* 7.面向对象的理解

### Es6
* 1.谈谈你对es6的理解/新增了哪些东西
* 2.const let 的作用 --- 和var之间的区别
* 3.解构理解和使用场景
* 4.Promise --- 我每次面试必问 – 是干什么的，用来解决什么问题的
* 5.数组 函数 对象新增的属性和方法 数组主要是Array.from 函数主要是箭头函数 对象是简洁表达式
* 6.类和继承
* 7.和数组去重的方法一样，es6如何实现数组去重 --- 利用 new set() 
* 8.res参数和默认参数
* 9.模块化 主要是 import 和 export

### Js库 
#### jQuery 
有没有看过源码----事件绑定是如何做到的----$.fn.extend和 $.extends的区别----说说JQuery的特性 --- 和vue的区别
#### Bootstrap
了解多少 --- 珊格系统 --- 组件 --- 响应式布局
### 移动端的库
Swiper iscoll 如何在项目中使用 ---- 引出如何用原生js手机轮播—用面向对象的方式—如何封装插件---封装过哪些插件。
#### Zepto 
    和JQuery的区别  从两个方面来说 
            1.大的方面： 大小 适用场景 
            2.细节方面:  css  事件绑定等

### 构版本管理、构建工具
* git里面的常用命令 有时用具体的使用场景来问你。
* 和svn的区别
* Gulp和webpack 这个问的是最多了就是些如何使用 
* Gulpfile.js和webpack.config.js里面的配置。有的时候也会用具体的场景问你。
           

### 项目
必问 --- 在项目中遇到了哪些问题—如何解决的。（最好准备两到三个 一个浅一点的 一个深一点—用来回应面试官的追问）

### vue父子组件加载顺序
这里vue的子组件引入有两中方式：同步和异步，因此父子组件加载的顺序

是不一样的，接着往下看，会有收获的。

#### 一、 同步引入

例子： import Page from '@/components/page'
同步引入时生命周期顺序为：父组件的beforeCreate、created、beforeMount --> 所有子组件的beforeCreate、created、beforeMount --> 所有子组件的mounted --> 父组件的mounted

#### 二、异步引入

例子：const Page = () => import('@/components/page')
或者： const Page = resolve => require(['@/components/page'], page)

异步引入时生命周期顺序：父组件的beforeCreate、created、beforeMount、mounted --> 子组件的beforeCreate、created、beforeMount、mounted


### 写一个方法    这个方法继承了Date上的方法

函数怎么创建一个私有方法？
这个函数私有的  实例访问不到

extends是如何实现继承的，那么extends在babel中如何实现


### 写一个方法  这个方法在调用的时候不用new也能调用实例方法
```js
function Day(date) {
    if (!(this instanceof Day)) {
        return new Day(date)
    }
}
Day.prototype.getToday = function() {}
```


* 手写promise
 
* async   await  实现
 
* generator实现

* Vue3为什么要用proxy，proxy有哪些api

* effect的作用

* Vue3的响应式和Vue2的创建响应式的区别

* vue3用到了 map  set  weakmap这些数据结果  他们的区别是什么，那weakmap有什么优势

* js数据类型，他们的区别（存放位置），引用数据类型中的key存在哪里的

* Vue3 的话   他会问如何实现ref响应式的

* 虚拟dom和diff算法这种·


* 有一个promise，不确定处于什么状态下，怎么判断这个状态？


## Vue中父子组件通信有哪些方式?
* Prop 常用（但是代码中的方式只适合prop里面的数值是原始类型，不能是对象类型，如果count是对象类型，需要进行深拷贝进行赋值，不然的话，改变number的数值，count的数值还是会改变的）
* $emit 组件封装用的较多
* .sync 语法糖  (较少)
* $attrs和$listeners(组件封装用的较多)
* provide和inject(高阶组件/组件库用的较多)
其他方式通信
