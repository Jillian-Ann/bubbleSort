class bubbleSort {
    constructor(array){
        this.array = array;
    }
swap(val1,val2){
    if(val1>val2){
        let tempVal = val2;
        val2 = val1;
        val1 = tempVal
    }
}
sort(){
    for(let l=this.array.length;l>0;l--){
        for(let n=0;n<l;n++){
            this.swap(this.array[n],this.array[n+1])
        }
    }
}

}
