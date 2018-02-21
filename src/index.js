class Sorter {
  constructor() {
    this.storeArr = [];
	this.comparator = function(a,b){
		return a-b;
	};
	 
  }

  add(element) {
    this.storeArr.push(element);
  }

  at(index) {
    return this.storeArr[index];
  }

  get length() {
    return this.storeArr.length;
  }

  toArray() {
    return this.storeArr;
  }

  sort(indices) {

	var arrNew = []
	for(var i = 0; i < indices.length; i++){
		arrNew.push(this.storeArr[indices[i]]);
	}
	  
	arrNew.sort(this.comparator);
	indices.sort();
	  
	for(var i=0; i < indices.length; i++){
		this.storeArr[indices[i]] = arrNew[i];
	}
	
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;