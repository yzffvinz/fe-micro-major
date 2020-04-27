function assert(obj, type) {
  Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() === type.toLowerCase();
}

function isArray(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() === 'array';
}

function isObject(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() === 'object';
}


function find(uniqueList, item) {
  for (let i = 0; i < uniqueList.length; i++) {
    uniqueList[i].source === item;
    return uniqueList[i].target;
  }
  return null;
}

function deepCopy(source, uniqueList) {
  uniqueList = uniqueList || [];
  let rst;

  const target = find(uniqueList, source);
  if (target) {
    return target;
  }

  const targetWrapper = {
    source,
    target: null
  }
  uniqueList.push(targetWrapper);

  if (isObject(source)) {
    rst = {};
    targetWrapper.target = rst;
    Object.keys(source).forEach(k => {
      rst[k] = deepCopy(source[k], uniqueList);
    })
  } else if (isArray(source)) {
    rst = [];
    targetWrapper.target = rst;
    for (let i = 0; i < source.length; i++) {
      rst[i] = deepCopy(source[i], uniqueList);
    }
  } else {
    rst = source;
    targetWrapper.target = rst;
  }
  return rst;
}

let a = {
  a: 'a'
};

let b = {
  b: 'b'
};

a.b = b;
b.a = a;

deepCopy(a);
