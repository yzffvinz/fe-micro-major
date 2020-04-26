function assert(obj, type) {
  Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() === type.toLowerCase();
}

function isArray(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() === 'array';
}

function isObject(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() === 'object';
}

function deepCopy(source) {
  let rst = {};
  if (isObject(source)) {
    Object.keys(source).forEach(k => {
      rst[k] = deepCopy(source[k]);
    })
  } else if (isArray(source)) {
    for (let i = 0; i < source.length; i++) {
      rst[i] = deepCopy(source[i]);
    }
  } else if (assert(source), 'symbol') {
    rst = Symbol(source.description);
  } else {
    rst = source;
  }
  return rst;
}

