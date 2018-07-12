// If Else condition Example
var coursecompleted = true;
var practicecompleted = false;
if(coursecompleted && practicecompleted){
    console.log("You will get the job soon");
}
else if(coursecompleted && !practicecompleted){
    console.log("please start practicing");
}
else {
    console.log("please contact with Saket sir");
}

// For loop Example to display from 1 - 10 values
var output = '';
for (var i=1; i<=10; i++){
   if(i<=9){
       output = output + i + ",";
   }
   else {
       output = output + i;
   }
}
console.log(output);
document.getElementById('display').innerHTML = output;


// While loop Example to display from 1 - 10 values
output = '';
var j = 1;
 while (j <=10){
     if(j <=9){
         output = output +  + ",";
     }
     else {
         output = output + j;
     }
     j++;
 }
 console.log(output);
 document.getElementById('display').innerHTML = output;




// Do while loop Example to display from 1 - 10 values
output = '';
var z = 1;
do{
    if(z<=9){
        output = output + z + ",";
    }
    else {
        output = output + z;
    }
    z++;
}while (z<=10);
console.log(output);
document.getElementById('display').innerHTML = output;



// Switch Statement Example to display full Day
var today = new Date().getDate();
output = '';
switch (today){
    case 0:
        output += 'SUNDAY';
        break;
    case 1:
        output += 'MONDAY';
        break;
    case 2:
        output += 'TUESDAY';
        break;
    case 3:
        output += 'WEDNESDAY';
        break;
    case 4:
        output += 'THURSDAY';
        break;
    case 5:
        output += 'FRIDAY';
        break;
    case 6:
        output += 'SATURDAY';
        break;
    default:
        output += 'NO DAY'
        break;
}
console.log(today);
document.getElementById('display').innerHTML = today;


