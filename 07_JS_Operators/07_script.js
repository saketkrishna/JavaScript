// Assignment operator =
var num1 = 10;
console.log("num1 : " + num1);


// Arithmetic operators + - * /
var a = 10;
var b = 20;
var sum = a + b;
console.log("sum is : " + sum);

var mul = a * b;
console.log("a * b is : " + mul);

var div = a / b;
console.log("a / b : " + div);



// Short hand math += , -= , *= , /=
var a = 10;
var b = 20;
var add = 0;
add = add + (a + b);// long way
add += (a + b); // short hand way
console.log('add value :' + add);


// Conditional operators < , > , <= , >= , !=
var age = 25;
if(age <= 18)
{
    console.log("you are minor");
}
else{
    console.log("you are major");
}


// Unary Operator ++ , -- (pre , post)
var x = 10;
x = x + 1;//11
x += 1;//12
x++;//13
console.log('x :' + x); //13


// Logical operators AND(&&) , OR(||)
var inRelation = true;
var parentsAgreed =  false;
if(inRelation && parentsAgreed){
    console.log("get marry soon");
    document.getElementById('display').innerHTML = "get marry soon";
}
else{
    console.log("wait until parents agreed");
    document.getElementById('display').innerHTML = "wait";
}



// String Concatenation Operator
var str = "10" + 10 +10 + 10;
console.log("str : "+ str);

// Ternary operator (? :)
age  = 25;

(age <= 18) ? console.log("you are minor"): console.log("you are major");

// Type of operator
var abc;
console.log('value :' + abc +  ' Data type :' + typeof abc);

abc = 10;
console.log('value :' + abc +  ' Data type :' + typeof abc);

abc = 'test';
console.log('value :' + abc +  ' Data type : ' + typeof abc);

abc = true;
console.log('value :' + abc +  ' Data type :' + typeof abc);

abc = null;
console.log('value :' + abc +  ' Data type :' + typeof abc);


// == operator
 a = 10;
 b ="10";
if ( a == b){
    console.log("Both are equal")
}
else {
    console.log("Both are NOT equal")
}
a = 10;
b ="abc";
if ( a == b){
    console.log("Both are equal")
}
else {
    console.log("Both are NOT equal")
}


// === operator
a = 10;
b ="10";
if ( a === b){
    console.log("Both are equal")
}
else {
    console.log("Both are NOT equal")
}

a = 10;
b =10;
if ( a == b){
    console.log("Both are equal")
}
else {
    console.log("Both are NOT equal")
}