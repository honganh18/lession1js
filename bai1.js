var member1 ;
var mass1;
var height1 ;
var member2 ;
var mass2;
var height2 ;
function check(member1,mass1,height1,member2,mass2,height2){
 var bmi1 = mass1 / (height1 * height1);
var bmi2 = mass2 / (height2 * height2);
if(bmi1>bmi2){
    console.log(`${member1} BMI ${bmi1} is higher than ${member2} ${bmi2}!`)
}
else{
    console.log(`${member2} BMI ${bmi2} is higher than ${member1} ${bmi1}!`)   
}
}
check("Marks",78,1.69,"John",92,195);
check("Marry",95,1.88,"Harry",85,1.76);




