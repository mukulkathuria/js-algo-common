const arr = require('./StaticData/paginateData');

function findIndex(arr,keyValue) {
  const keys = Object.keys(keyValue);
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for(let j=0;j<keys.length;j++){
      if(arr[i][keys[j]] === keyValue[keys[j]]){
        count++;
      }
    }
    if(count === keys.length){
      return i;
    }
  }
  return -1;
}

console.log(findIndex(arr,{ name:'Alex', class: 11 }));
