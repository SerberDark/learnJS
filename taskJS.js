function arrayDifference(arr1, arr2) {
  const result = []
  arr1.forEach((i) => {
    if (!arr2.includes(i)) result.push(i)
  })
  arr2.forEach((i) => {
    if (!arr1.includes(i)) result.push(i)
  })
  return result
}

console.log(
  arrayDifference(['javascript', 'is', 'awesome'], ['javascript', 'awesome'])
)
// ['is']
console.log(arrayDifference([1, 2, 3, 4, 5], [3, 4, 2, 7]))
// [1, 5, 7]
