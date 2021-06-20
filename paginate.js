const data = require('./StaticData/paginateData');

function getPaginateArr(arr,itemsPerPage,currentPage) {
  if(itemsPerPage < 0 || currentPage < 0){
    throw new Error('Invalid Page Number');
  }
    const currentIndex = itemsPerPage * (currentPage - 1);
    let lastIndex = itemsPerPage * currentPage;
    if(lastIndex > arr.length){
      lastIndex = arr.length;
    }
    return arr.splice(currentIndex,lastIndex);
}
console.log(getPaginateArr(data,6,1));
