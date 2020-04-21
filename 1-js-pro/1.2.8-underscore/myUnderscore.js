(function(root) {
  let _ = function() {
    if (!(root._)) {
      return new _();
    } else {
      return root._;
    }
  };

  _.unique = function(arr) {
    const rst = []
    arr.forEach(item => {
      if (rst.indexOf(item) === -1) rst.push(item)
    })
    return rst
  };

  _.each = function (arr, callback, step) {
    for (let i = 0; i < arr.length; i += step || 1) {
      callback(arr[i], i)
    }
  };

  _.mixin = function() {

  };

  root._ = _;
})(this);
