
//variable

var one; //undefined var
var two=10;
var three=20;
var add= one + two;
var add1= two + three;
document.write("First No: "+one+"<br> Second No: "+two+"<br> Third No: "+three+"<br>");
document.write(one+"+"+two+"="+add+"<br>");
document.write(two+"+"+three+"="+add1+"<br>");





function showName()
{
	let num1 = prompt("Enter Your First Name");
	let num2 = prompt("Enter Your Last Name");

	var fullname = num1 + num2;

	document.getElementById("showname").innerHTML = fullname;
}