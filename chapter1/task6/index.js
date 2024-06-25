const add = (function() {
    let count = 0
    const nested = function() {return count = count + 1}
    return nested
}) ()

console.log('Count is ' + add())
console.log('Count is ' + add())
console.log('Count is ' + add())

console.log(add.prototype)