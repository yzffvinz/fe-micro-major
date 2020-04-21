Array.prototype.myMap = function(func) {
  const arr = []
  this.forEach(item => {
    arr.push(func(item))
  })
  return arr;
};

let arr = [1,2,3];

console.log(arr.myMap(item => 2 * item));
