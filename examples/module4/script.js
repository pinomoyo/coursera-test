var a = "Helloooooooooo";
var b = a; //passing the value only between primitives

console.log("b said: "+b);

//_________________________________________________________________


function changeObject(primValue){
	console.log("meanwhile in changeObject...\n");
	console.log("Before:");
	console.log(primValue);
	primValue = "abcdefg";
	console.log("after changing primValue through newWord:");
	console.log(primValue);
}

var newWord = "gojou best girl";
changeObject(newWord); //call 1

//_________________________________________________________________


////// fake namespaces

var cbt = function () {
	console.log("Sage Pog");
}

cbt();

////// Immediately Invoked Function Expressions

(function(window){

	var johnGreeter = {};
	johnGreeter.name = "john";
	var greeting = "hi";
	johnGreeter.sayHi = function(){
		console.log(greeting + johnGreeter.name);
	}

	window.johnGreeter = johnGreeter; //expose johnGreeter to public

})(window);