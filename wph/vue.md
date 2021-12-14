### vue父子组件加载顺序
* 这里vue的子组件引入有两中方式：同步和异步，因此父子组件加载的顺序
是不一样的，接着往下看，会有收获的。

### 一、 同步引入

例子： import Page from '@/components/page'
同步引入时生命周期顺序为：父组件的beforeCreate、created、beforeMount --> 所有子组件的beforeCreate、created、beforeMount --> 所有子组件的mounted --> 父组件的mounted

### 二、异步引入

例子：const Page = () => import('@/components/page')
或者： const Page = resolve => require(['@/components/page'], page)

异步引入时生命周期顺序：父组件的beforeCreate、created、beforeMount、mounted --> 子组件的beforeCreate、created、beforeMount、mounted


### Vue3为什么要用proxy，proxy有哪些api

### Vue3的响应式和Vue2的创建响应式的区别

### vue3用到了 map  set  weakmap这些数据结果  他们的区别是什么，那weakmap有什么优势

### Vue3 的话   他会问如何实现ref响应式的

### 虚拟dom和diff算法这种


### Vue中父子组件通信有哪些方式?
* Prop 常用（但是代码中的方式只适合prop里面的数值是原始类型，不能是对象类型，如果count是对象类型，需要进行深拷贝进行赋值，不然的话，改变number的数值，count的数值还是会改变的）
* $emit 组件封装用的较多
* .sync 语法糖  (较少)
* $attrs和$listeners(组件封装用的较多)
* provide和inject(高阶组件/组件库用的较多)
其他方式通信


### 实现发布-订阅模式
实现思路
* 1、创建一个对象
* 2、在该对象上创建一个缓存列表（调度中心）
* 3、on 方法用来把函数 fn 都加到缓存列表中（订阅者注册事件到调度中心）
* 4、emit 方法取到 arguments 里第一个当做 event，根据 event 值去执行对应缓存列表中的函数（发布者发布事件到调度中心，调度中心处理代码）
* 5、off 方法可以根据 event 值取消订阅（取消订阅）
* 6、once 方法只监听一次，调用完毕后删除缓存函数（订阅一次）
