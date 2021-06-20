const data = [1,2,3,[4,5,6,7],[[8,9,10,[11,12,13]]],14,15,16,[[17,18,19,[20,21,22,[23,34,25]]]]];

function getarray(arr,result) {
  for(let i=0;i<arr.length;i++){
      if(Array.isArray(arr[i])){
        return getarray(arr[i],result);
      }
      else{
          result.push(arr[i]);
      }
    }
}

function getarrayvalue(arr) {
  const result = [];
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
          getarray(arr[i],result);
        }
        else{
            result.push(arr[i]);
        }
    }
    return result;
}
const arr = getarrayvalue(data);
console.log(arr);
