const data = [ 'a', 1 ];

function join(arr,toJoinWith) {
  if(toJoinWith === undefined || toJoinWith === null || typeof toJoinWith === 'object' || Array.isArray(toJoinWith)){
    throw new Error('Cant able to join');
  }
    let result = '';
    for (let i = 0; i < arr.length; i++) {
      if(typeof arr[i] === 'object'){
        throw new Error('Cant join with object')
      }
      if(i < arr.length-1){
        result += arr[i] + toJoinWith;
      }else{
        result += arr[i];
      }
    }
    return result;
}
try {
  console.log(join(data,''));
} catch (e) {
  console.log(e.message);
}
