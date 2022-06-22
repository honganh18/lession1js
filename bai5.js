function calculate(a, b, math) {
    switch (math) {
        case 'add':
            console.log(`${a} + ${b} = ${a + b}`)
            break;
        case 'subtract':
            console.log(`${a} - ${b} = ${a - b}`)
            break;
        case 'multiply':
            console.log(`${a} * ${b} = ${a * b}`)
            break;
        case 'divide':
            console.log(`${a} / ${b} = ${a / b}`)
            break;
        case 'modulus':
            console.log(`${a} % ${b} = ${a % b}`)
            break;
    }
}
calculate(78, 97, 'add');
calculate(87, 99, 'subtract');
calculate(679, 5, 'multiply');
calculate(78, 97, 'divide');
calculate(223, 78, 'modulus');