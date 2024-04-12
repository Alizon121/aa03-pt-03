/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// function flatten(arr) {
//   if (arr.length === 0) {
//     return [];
//   }
//   const first = arr[0];
//   const rest = arr.slice(1);
//   if (typeof rest === 'object') {
//     return first + flatten(Number(rest.join()))
//   }
//   // if (typeof arr[arr.length-1] !== 'object') {
//   //   return arr;
//   // } else {
//   //   return [arr[0]].concat(flatten(arr[arr.length-1]))
//   // }

// }




function flatten(arr) {
if (arr.length === 0) {
  return [];
} else {
  const first = arr[0];
  const rest = arr.slice(1);
  if (Array.isArray(first)) {
    return flatten(first).concat(flatten(rest))
  }else {
    return [first].concat(flatten(rest))
  }
}
}

console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
  