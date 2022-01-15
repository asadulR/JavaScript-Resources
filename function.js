function add() {
    let a = 10;
    let b = 44;
    console.log(a+b)
}


function sub() {
    let x = 30;
    let y = 20;
    console.log(x-y)
}

function myName() {
    console.log("My name is Asadul Rahman.");
}




for (var i = 1; i <= 40; i++) {
    myName();
}


add();

sub();


for (var i = 1; i <= 10; i++) {
    myName();
}









function add(a, b){
    var result = a + b
    console.log(result)
}

add(10, 30)
add(44, 6)



function sub(x, y) {

    var result = x - y;
    console.log('The subtraction is: ' + result)
}

sub(50, 40)










 var arr1 = [4, 6, 10];
 var arr2 = [33, 7, 10];
 var arr3 = [10, 15, 5];

function sumOfArray(arr) {

    var sum = 0;
    for (var i = 0; i < arr.length; i++) {

        sum += arr[i]
    }
     console.log(sum)
}


sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)





let arry1 = [33, 32, 3, 12, 65];
let arry2 = [12, 8, 20, 100, 30, 20];
let arry3 = [44, 6, 60, 40, 30, 20, 10];
let arry4 = [150, 200, 50, 30, 70];

function sumOfArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);

}

sumOfArray(arry1);
sumOfArray(arry2);
sumOfArray(arry3);
sumOfArray(arry4);






function person(name, email) {
    return {
        name: name,
        email: email
    }
}

var p1 = person('Asadul Rahman', 'asad1252001@gmail.com');
console.log(p1);









// from part 64