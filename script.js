
// // // ocument.write("let's begin")

// // var name= prompt("enter your name")


// // var data1 = prompt('enter your value')
// // var data2 = '20'

// // var result = data1-data2 

// // document.write(name+result)

// // var name = '20'
// // var value = 20

// // if(data2>30){
// //     document.write("yes daddy")
// // }
// // else{
// //     document.write("nah")
// // }

// var consumeunit = parseInt(prompt("enter your consumed units"))

// if (consumeunit > 0  && consumeunit <= 100) {
//     var total_bill = consumeunit * 5;

//     document.write("your consumed unit is: " + consumeunit + "<br>");
//     document.write("your per unit cost is: RS 5 <br>");
//     document.write("your total bill is: RS " + total_bill + "<br>")
// } else if (consumeunit > 100 && consumeunit <= 150) {
//     var bill = consumeunit * 7;
//     var discount = bill * 0.10;
//     var total_dis_bill = bill - discount;
//     var perunit = total_dis_bill / consumeunit;


//     document.write("your bill is without discount: " + consumeunit*7 + "<br>")
//     document.write("your consumed unit is: " + consumeunit + "<br>")
//     document.write("your effective per unit cost is: RS " + perunit.toFixed(2) + "<br>" )
//     document.write("your total bill is: RS " + total_dis_bill + "<br>") 
// }

// var marks = prompt("enter your marks")

// switch (true) {
//     case marks >= 90:
//         document.write("yourb grade is A+");
//         break

//     case marks >= 85:
//         document.write("your grade is A");
//         break

//     case marks >= 80:
//         document.write("your grade is B+");
//         break

//     case marks >= 75:
//         document.write("your grade is B");
//         break

//     case marks >= 70:
//         document.write("your grade is C+");
//         break

//     case marks >= 65:
//         document.write("your grade is C ");
//         break

//     case marks <= 40:
//         document.write("your grade is F");
//         break

//     default:
//         document.write("your grade is D  ")
// }

// let users = ["khizar" , "Ammmar" , "Yasir"]


// document.write(users[1])


// let userinput = parseInt(prompt("enter your number"))

// if (userinput %2 === 0 ){
//     document.write("your number is even")
// } else {
//     document.write("your number is odd")
// }


// for(let no = 1; no <= 15; no ++){
//     document.write("khizar <br>")
// }

// let value = 1

// while(value <= 20){
//     document.write("khizar <br>")
//     value++
// }


// var data = ['1' , '2' , '3' , '4']
// for ( let value in data){
//     document.write(value)
// }


// let value = 1

// do{
//     document.write("sarah <br>")
//     value++
// } while(value <= 5)




// function data(name,age){
//     document.write("he is " +name +"<br> he scored goals total" +age +"</br>" )
// }

// data("Cristiano Ronaldo",979)


// let input1 = parseInt(prompt("enter your first number"))
// let input2 = parseInt(prompt("enter your second number"))

// function add(no1 , no2){
//     document.write(no1+no2)
// }

// add(input1 , input2)


function addValue(inputnumber) {
    let current = document.getElementById("display").value;
    let newValue = current + inputnumber;
    document.getElementById("display").value = newValue;
}
function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        let input = document.getElementById("display").value;
        let result = eval(input);
        document.getElementById("display").value = result;
    } catch {
        alert("Invaild Input")
    }
}


// let sum_result = (value1,value2 ) =>{
//     return value1+value2
// }

// let sum_result1 = (value1,value2 ) => value1+value2

// document.write("your answer is " + sum_result(33,15))