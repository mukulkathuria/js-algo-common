function removeDuplicate(arr){
	if(!Array.isArray(arr)){
	return [];
	}
	const result = arr;
	let index=0;
	for(let i=1;i<arr.length;i+=1){
	if(result[i] !== result[index]){
	index += 1;
	result[index]=result[i];
	}
	}
	result.length = index+1;
	return result;
}

const arr = [2,2,2,3,3,3,3,4,4,4,4];
console.log(removeDuplicate(arr));
