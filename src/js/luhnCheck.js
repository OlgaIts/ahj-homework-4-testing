export const luhnCheck = (num) => {
 let arr = (num + '')
  .split('')
  .reverse()
  .map((x) => parseInt(x))

 let sum = arr.reduce((acc, val, i) => {
  if (i % 2 !== 0) {
   let doubled = val * 2
   if (doubled > 9) doubled -= 9
   return acc + doubled
  } else {
   return acc + val
  }
 }, 0)

 return sum % 10 === 0
}
