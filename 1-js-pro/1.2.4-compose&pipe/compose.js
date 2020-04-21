// 计算数 * 10 + 10
const commonCalc = (num) => (num + 10) * 10

// 一般组合方式
const add = x => x + 10
const multipy = x => x * 10

const baseCompose = (f, g) => {
  return function(x) {
    return f(g(x))
  }
}

// 通用组合:右->左
const compose = function() {
  const args = [].slice.call(arguments)
  return function(x) {
    return args.reduceRight(function (res, cb) {
      return cb(res)
    }, x);
  }
}

// 通用组合:左->右
const composeLeft = function() {
  const args = [].slice.call(arguments);
  return function(x) {
    return args.reduce(function (res, cb) {
      return cb(res)
    }, x);
  }
}

// 使用es6
// let es6Compose = (...args) => {
//   return x => {
//     args.reduceRight((res, cb) => {
//       return cb(res)
//     }, x)
//   }
// }
// 缩短
const es6Compose = (...args) => x => args.reduceRight((res, cb) => cb(res), x)

// es6 compose left
let es6ComposeLef = (...args) => x => args.reduce((res, cb) => cb(res), x)


// final-compose
const Compose = (...funcs) => {
  if (funcs.length === 0) return arg => arg;
  return funcs.reduceRight((accu, func) => (...args) => func(accu(...args)))
}

// final-pipe
const Pipe = (...funcs) => {
  if (funcs.length === 0) return arg => arg;
  return funcs.reduce((accu, func) => (...args) => func(accu(...args)))
}

module.exports = {
  Compose,
  Pipe
}
