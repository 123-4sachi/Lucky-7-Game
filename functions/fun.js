// function = A section of reuseable code.
//     declare code once, use it whenever you want.
//     call the function to execute that code.


// with prompt and with parameters and argument


// let name = window.prompt("Enter your name");
// let age = window.prompt("Enter your age ");

// function passed(name , age) {
//     document.getElementById("1").textContent = (`Congrats to you ${name} passed your 12th without any compartment`);

//     document.getElementById("2").textContent = (`You have passed sr.secondary at the age of ${age}`);

// }

// passed("bob", 80);

// return

function div(x , y) {
    let result = x / y ;
    return result;
}

// let answer = div(89, 32);

//directly calling it without saving it first
console.log(div(77,23)); 


function bobAgeing(age) {
	age = Number(age);
	let result = age + 5; // in next five years bob wil be this much old
	
	return result; //holding the code and telling it to run

}

let answer = bobAgeing(15);

console.log(`bob your age in next five years would be ${answer}`);