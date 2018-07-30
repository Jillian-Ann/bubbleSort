class bubbleSort {
    constructor(array){
        this.array = array;
    }
swap(val1,val2){
      let tempVal = this.array[val2];
      this.array[val2] = this.array[val1];
      this.array[val1] = tempVal
}
sort(){
    for(let l=this.array.length;l>0;l--){
        for(let n=0;n<l;n++){
          if(this.array[n]>this.array[n+1]){
            this.swap(n,n+1)
            console.log(this.array);
          }
        }
    }
    return this.array;
}

}

