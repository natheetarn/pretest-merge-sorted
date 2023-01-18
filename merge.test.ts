import {merge} from './merge';

describe('Test merge sorted arrays function', () => {
    it('should return an array of size arr1.length + arr2.length', () => {
        const array1 = [1,2,4,7];
        const array2 = [2,5,8,10,11];
        const res = merge(array1, array2);
        expect(res.length).toBe(array1.length + array2.length);
    }
    )
    it('should return an array sorted in ascending order', () => {
        const array1 = [1,3,9,10,20];
        const array2 = [2,5,8,9,11];
        const res = merge(array1, array2);
        let array3 = (array1.concat(array2)).sort((a, b) => a - b);
        expect(res).toEqual(array3);
    })
    it('should handle empty array', () => {
        const array1: number[] = [];
        const array2: number[] = [];
        const res = merge(array1, array2);
        expect(res.length).toBe(0);
        
    })
})
