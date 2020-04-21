## compose

### 特点

- 嵌套执行 -> 平铺

### 作用

- 实现函数式编程pointfree（不使用引用）

### 应用

- webpack loader从右往左 因为使用的是reduceRight

## pipe

### 特点

是从左向右，是reduce；从右往左，compose