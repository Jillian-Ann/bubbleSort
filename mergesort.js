class mergeSort {
  constructor(array) {
    this.array = array;
    this.output = [];
  }

  split(arr) {
    this.firstHalf = arr.slice(0, arr.length/2);
    this.secondHalf = arr.slice(arr.length/2);
  }

  merge() {
    while(this.firstHalf.length > 0 && this.secondHalf.length > 0) {
      if(this.firstHalf[0]<this.secondHalf[0]) {
        this.output.push(this.firstHalf[0])
        this.firstHalf.shift()
      } else {
        this.output.push(this.secondHalf[0]);
        this.secondHalf.shift();
      }
    }
    if(this.firstHalf.length > 0) {
      this.output.concat(this.firstHalf)
    } else {
      this.output.concat(this.secondHalf);
    }

  }
}

// if(array1.length === 1 && array2.length === 1) {
//   if(array1[0] > array2[0]) {
//     return [array2[0], array1[0]];
//   }
//   return this.array;
// } else {

// }
