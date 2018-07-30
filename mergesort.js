class mergeSorter {
  constructor() {
    this.output = [];
    this.firstHalf = null;
    this.secondHalf = null;
  }

  split(arr) {
    this.firstHalf = arr.slice(0, Math.round(arr.length/2));
    console.log(this.firstHalf)
    this.secondHalf = arr.slice(Math.round(arr.length/2));
    console.log(this.secondHalf);
  }

  merge(arr1,arr2) { 
    // console.log("hello")
    // console.log(arr1)  
      if(arr1[0]<arr2[0]) {
        this.output.push(arr1[0]);
        this.output.push(arr2[0]);
        arr1.shift()
      } 
      else if(arr1[0]>=arr2[0]) {
        this.output.push(arr2[0]);
        this.output.push(arr1[0]);
        arr2.shift();
      }
      console.log("output: " + this.output)
      // else if(arr1.length === 0) {
      // this.output.concat(arr1)
      // } 
      // if(arr2.length === 0){
      // this.output.concat(arr1);
      // }
    return this.output;
  }

mergeSort(array){  
  this.split(array)
  if(this.firstHalf.length===1 || this.secondHalf.length===1){
    console.log(this.firstHalf[0])
    console.log(this.secondHalf[0])
    return this.merge(this.firstHalf, this.secondHalf)
  } 
  return this.merge(this.mergeSort(this.firstHalf), this.mergeSort(this.secondHalf));   
  
  //split until the first half or second half length is equal to less than 1
  //return merged first half with second half
}
}

// if(array1.length === 1 && array2.length === 1) {
//   if(array1[0] > array2[0]) {
//     return [array2[0], array1[0]];
//   }
//   return this.array;
// } else {

// }
