function forLoop(array) {
  for (var i=0; i<25; i++) {
    if (i===1) {
      array.push("I am 1 strage loop.")
    }
    else {
      array.push (`I am ${i} strage loops.`)
    }
  }
return(array)
}

function whileLoop(number) {
  while (number>0) {
    console.log (--number)
  }
  return "done"
}


function doWhileLoop(array1) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    array1.pop()
  }
  while (array1.length > 0 && maybeTrue())
return array1
}
