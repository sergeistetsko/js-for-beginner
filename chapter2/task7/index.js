(function(){
    let numOne = 10, numTwo = 5
    console.log('numOne: ' + numOne)
    console.log('numTwo: ' + numTwo)

    numOne = numOne ^ numTwo
    numTwo = numOne ^ numTwo
    numOne = numOne ^ numTwo

    console.log('\n' + 'numOne: ' + numOne)
    console.log('numTwo: ' + numTwo)

})()