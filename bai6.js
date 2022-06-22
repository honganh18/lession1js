function check(name, mark) {
    if (mark <= 100 && mark >= 90) {
        return console.log(`${name} xếp loại S`)
    }
    else if (mark >= 80) {
        return console.log(`${name} xếp loại A`)
    }
    else if (mark >= 70) {
        return console.log(`${name} xếp loại B`)
    }
    else if (mark >= 60) {
        return console.log(`${name} xếp loại C`)
    }
    else if (mark >= 50) {
        return console.log(`${name} xếp loại D`)
    }
    else if (mark >= 0 && mark < 40) {
        return console.log(`Bạn không được lên lớp`)
    }
}
check('Anh', 80)