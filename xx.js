var array1=[1,2,3,4,5]
function doWhileLoop(array1) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  while (array1.length > 0 && maybeTrue()) {
    array1.pop()
  }
return array1
console.log(array1)
}
doWhileLoop(array1)
