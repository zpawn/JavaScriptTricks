/**
 * Flattening arrays is trivial with Spread operator:
 */
const arr1 = [11, [22, 33], [44, 55], 66];
const flatArr1 = [].concat(...arr1); //=> [11, 22, 33, 44, 55, 66]

/**
 * Flattening multidimensional arrays
 */
function flattenArray(arr) {
    const flattened = [].concat(...arr);
    return flattened.some(item => Array.isArray(item)) ?
        flattenArray(flattened) : flattened;
}

const arr2 = [11, [22, 33], [44, [55, 66, [77, [88]], 99]]];
const flatArr2 = flattenArray(arr2);
//=> [11, 22, 33, 44, 55, 66, 77, 88, 99]
