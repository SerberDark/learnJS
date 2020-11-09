// Задача 1
// Реализовать функцию, которая находит разницу в массивах и возвращает ее
// Порядрк возвращаемых элментов не важен

//1 способ
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
//2 способ
function arrayDifference(arr1, arr2) {
  return arr1.concat(arr2).filter((i) => !arr1.includes(i) || !arr2.includes(i))
}

console.log(
  arrayDifference(['javascript', 'is', 'awesome'], ['javascript', 'awesome'])
)
// ['is']
console.log(arrayDifference([1, 2, 3, 4, 5], [3, 4, 2, 7]))
// [1, 5, 7]
