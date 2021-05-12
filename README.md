
面试的问题一般问几类。
     Css基础类 ： 1.清楚浮动的方式以及为什么要清楚浮动。（至少说出4种）
                  2.让一个元素在div中居中显示的方法（至少说出五中）
                  3.css3的新属性，H5新属性，都用过哪些。
				  4.PC端 移动端的常用布局方式  每种方式的优缺点
	让我上机写过几个布局的方式 都是什么两边固定 中间自适应 中 左边固定 右边自适应之类的
				(上面的这几个css问题我几乎每家公司都会问我)

     Js基础    ： 1.闭包(必问) – 什么是闭包 --- 有什么作用 --- 有什么缺点 --- 如何解决 – 引出内存泄漏的几种方式
                  2.原型 原型链  作用域 作用域链
                  3.数组的所有方法 字符串的所有方法
                  4.ajax的创建过程 ajax优缺点
                  5.事件模型 – 事件委派 – 作用好处
                  6.数组去重的方法（至少要说出三种来）
                  7.面向对象的理解
     Es6 :      1.谈谈你对es6的理解/新增了哪些东西
               2.const let 的作用 --- 和var之间的区别
               3.解构理解和使用场景
               4.Promise --- 我每次面试必问 – 是干什么的，用来解决什么问题的
               5.数组 函数 对象新增的属性和方法 数组主要是Array.from 函数主要是箭头函数 对象是简洁表达式
               6.类和继承
               7.和数组去重的方法一样，es6如何实现数组去重 --- 利用 new set() 
               8.res参数和默认参数
               9.模块化 主要是 import 和 export
              (因为我对es6很熟悉，所有每次都会把面试官往es6上引导 哈哈哈哈)
Js库 ： jQuery : 有没有看过源码----事件绑定是如何做到的----$.fn.extend和 $.extends的区别----说说JQuery的特性 --- 和vue的区别
       Bootstrap : 了解多少 --- 珊格系统 --- 组件 --- 响应式布局
       移动端的库
           Swiper iscoll 如何在项目中使用 ---- 引出如何用原生js手机轮播—用面向对象的方式—如何封装插件---封装过哪些插件。
       Zepto 和JQuery的区别  从两个方面来说 
            1.大的方面： 大小 适用场景 
            2.细节方面:  css  事件绑定等

构版本管理、构建工具 ： git里面的常用命令 有时用具体的使用场景来问你。
	和svn的区别
    Gulp和webpack 这个问的是最多了就是些如何使用 
                    Gulpfile.js和webpack.config.js里面的配置。有的时候也会用具体的场景问你。
           
框架 ： 基本是根据简历上项目的使用技术来问的
       Vue 问的最多 
       Vue的生命周期  vue父子组件的通信  vuex的使用 vue封装过哪些组件或指定（这几个问题每次必问）
又一次让我封装一个vue+echarts的小功能 实在写不出来 最后就灰溜溜的走了。      
 React 
                生命周期 路由 如何搭建项目 redux flux
Angular 我没用没写过 就没有问我这一类的问题


项目 ： 必问 --- 在项目中遇到了哪些问题—如何解决的。（最好准备两到三个 一个浅一点的 一个深一点—用来回应面试官的追问）

vue父子组件加载顺序
这里vue的子组件引入有两中方式：同步和异步，因此父子组件加载的顺序

是不一样的，接着往下看，会有收获的。

一、 同步引入

例子： import Page from '@/components/page'
同步引入时生命周期顺序为：父组件的beforeCreate、created、beforeMount --> 所有子组件的beforeCreate、created、beforeMount --> 所有子组件的mounted --> 父组件的mounted

二、异步引入

例子：const Page = () => import('@/components/page')
或者： const Page = resolve => require(['@/components/page'], page)

异步引入时生命周期顺序：父组件的beforeCreate、created、beforeMount、mounted --> 子组件的beforeCreate、created、beforeMount、mounted