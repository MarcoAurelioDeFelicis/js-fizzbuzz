console.log ('test')

// stamp numeri da 1 a 100
for ( let i = 0; i < 100; i++) {

    let num = i + 1

// stamp numeri mult 3 e 5 = FizzBuzz
    const resto3e5 = num % 3 && 5
    //stamp numeri mult 3 = Fizz
    const resto3 = num % 3 
    //stamp numeri mult 5 = Buzz
    const resto5 = num % 5 
    
    // se num è divisibile per 3 e 3 c.l di FizzBuzz
    if (resto3e5 === 0) {

        console.log ('FizzBuzz')
    }
    // se num è divisibile per 3 c.l di Fizz
    else if (resto3 === 0) {

        console. log ('Fizz')
    }
    // se num è divisibile per 5 c.l di Buzz 
    else if (resto5 === 0) {

        console.log ('Buzz')
    }

    else {
        console.log (num)
    }

}