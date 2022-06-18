var a ;
var b ;
function compare(a,b){
    if(a>b){
        console.log(`${a} là số lớn nhất`)
    }
     else if (b>a){
        console.log(`${b} là số lớn nhất`)
    }
    else {
        console.log("hai số bằng nhau")
    }
}
compare(12,-9);
compare(6,6);
compare(-189,-987);
compare(-78,56);
compare(9.5,7.9);
