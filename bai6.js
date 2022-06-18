var name;
var mark;
function check(name,mark) {
    if(mark<= 100 && mark>=90) {
        console.log(`${name} xếp loại S`)
    }
    else if ( mark>=80) {
        console.log(`${name} xếp loại A`)
    }
    else if ( mark>=70) {
        console.log(`${name} xếp loại B`)
    }
    else if ( mark>=60) {
        console.log(`${name} xếp loại C`)
    }
    else if ( mark>=50) {
        console.log(`${name} xếp loại D`)
    }
    else if ( mark>=0 && mark< 40 ) {
        console.log(`Bạn không được lên lớp`)
    }
}
check('Anh',80)