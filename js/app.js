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
    
    if (resto3e5 === 0) {

        console. log (num + 'FizzBuzz')
    }
    else if (resto3 === 0) {

        console. log (num + 'Fizz')
    }

    else if (resto5 === 0) {

        console. log (num + 'Fizz')
    }

}