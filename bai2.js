function giaipt(a, b, c) {
    var x = (c - b) / a
    if (a == 0 && (b - c) == 0) {
        return  console.log('phương trình có vô số nghiệm')
    }
    else if (a == 0 && (b - c) != 0) {
        return console.log("phương trình vô nghiệm")
    }
    else {
        return console.log(`phương trình có nghiệm duy nhất x = ${x}`)
    }
}
giaipt(-2, -9, -3);
giaipt(5, 7, 9);

