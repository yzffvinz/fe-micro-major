/**
 * Memoization
 *
 * Memoization 是一种将函数返回值缓存起来的方法，在 Lisp, Ruby, Perl, Python 等语言中使用非常广泛。
 * 随着 Ajax 的兴起，客户端对服务器的请求越来越密集（经典如 autocomplete），
 * 如果有一个良好的缓存机制，那么客户端 JavaScript 程序的效率的提升是显而易见的。
 *
 * 请实现一个memo函数，并使得memo.test.js中的单元测试通过
 *
 * @param {Function} func 需要执行的函数
 * @param {Function} hasher 散列函数
 */
function hasherDefault(...args) {
  return args.join('');
}

export default function memo(func, hasher) {
  const memo = {};
  if (typeof hasher !== 'function') {
    hasher = hasherDefault;
  }
  return function (...args) {
    const hashKey = hasher(args);
    if (memo.hasOwnProperty(hashKey)) {
      console.log('from cache');
      return memo[hashKey];
    } else {
      const val = func.apply(this, args);
      memo[hashKey] = val;
      console.log(memo);
      return val;
    }
  }
}
