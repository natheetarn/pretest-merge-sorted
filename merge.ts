function merge(collection_1: number[],collection_2: number[]): number[]{
    let result = new Array<number>();
    let j = 0;
    let i = 0;
    while(i < collection_1.length && j < collection_2.length){
        if (collection_1[i] < collection_2[j]){
            result.push(collection_1[i]);
            i++;
        } else {
            result.push(collection_2[j]);
            j++;
        }

    }
    while(i < collection_1.length){
        result.push(collection_1[i]);
        i++;
    } 
    while(j < collection_2.length){
        result.push(collection_2[j]);
        j++;
    }
    return result;
}

let arr1 = [1,2,3,4,5,6];
let arr2 = [2,3,4,5,6,7];
console.log(merge(arr1,arr2));