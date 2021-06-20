const data = ['a','a','b','c','d','c'];

function remove(arr,...otherElements) {
  const result = [];
  let arr1 = arr;
  let random = Math.random().toString(36).substring(7);

  for (let j = 0; j < otherElements.length; j++) {
    for (let i = 0; i < arr1.length; i++) {
      if(arr1[i] === otherElements[j]){
            arr1[i] = random;
          }
  }
}
for (let i = 0; i < arr1.length; i++) {
  if(arr1[i] !== random){
    result.push(arr1[i]);
  }
}
  return result;
}

// Time Complexity of this is bigO(n*k+n) but will reduce later on
console.log(remove(data,'a','c','d'));
