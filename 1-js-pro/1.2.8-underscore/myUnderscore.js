void function (root) {
  // 保证new 和 直接执行函数返回一致
  var _ = function(obj) {
    if (!(this instanceof _)) {
      return new _(obj);
    }
    this.wrap = obj;
  };

  _.assert = function assert(a, b) {
    return a === b;
  };

  _.type = function type(obj) {
    return Object.prototype.toString.call(obj);
  };

  _.isArray = function isArray(arr) {
    return _.assert(_.type(arr), _.type([]));
  };

  _.isObject = function isObject(obj) {
    return _.assert(_.type(obj), _.type({}));
  };

  _.isFunction = function isFunction(func) {
    return _.assert(_.type(func), _.type(function() {}));
  }

  _.each = function each(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback.call(arr, arr[i], i, arr);
    }
  }

  _.map = function map(arr, callback) {
    let rst = [];
    for (let i = 0; i < arr.length; i++) {
      rst.push(callback.call(arr, arr[i], i, arr));
    }
    return rst;
  }

  _.functions = function functions(obj) {
    let functions = [];
    for (let k in obj) {
      if (_.isFunction(obj[k])) functions.push(k);
    }
    return functions;
  }

  _.prototype.chain = function chain() {
    this._chain = true;
    return this;
  }

  _.prototype.result = function result() {
    return this.wrap;
  }

  _.mixin = function mixin(obj) {
    _.each(_.functions(obj), function(k) {
      _.prototype[k] = function() {
        const args = arguments;
        if (this._chain) {
          this.wrap = obj[k].apply(this.wrap, [this.wrap, ...args]);
          return this;
        } else {
          return obj[k].apply(this.wrap, [this.wrap, ...arguments]);
        }
      };
    });
  }

  _.mixin(_);
  root._ = _;
}(this);
