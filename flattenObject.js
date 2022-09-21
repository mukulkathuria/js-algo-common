function deepObj(obj, obj2={}, deep = 1){
	if(typeof obj !== 'object'){
	return {}
	}

	let result = { ...obj2 };
	Object.keys(obj).forEach((l) => {
		if(typeof obj[l] === 'object') {
			 deep++;
			 result[l] = deep;
			 result = deepObj(obj[l], result, deep);
		} else {
			result[l] = obj[l];
		} 
	});
	return result;
}

const abc = { key: 'value' , key2: { key3:'value3', key4: { key5: 'value5' , key6: 'value6' , key7:{key8: { key9: 'value9' }  } } }  }

const b = deepObj(abc);
console.log(b);
