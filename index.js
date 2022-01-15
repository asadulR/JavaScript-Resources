
let n = 4.569;

console.log(Math.floor(n));

console.log(Math.round(n));
console.log(Math.ceil(n));
console.log(Math.max(400, 500, 600));
console.log(Math.min(100, 500, 900, 70));
console.log(Math.pow(2, 3));
console.log(Math.sqrt(9));
console.log(Math.sqrt(64));
console.log(Math.random());











const date = new Date();

console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toLocaleString());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getTime());






// If condition



const a = 51;
const b = 80;
const c = 300;
const d = 500;

if (a > b && a > c && a > d) {
    console.log("A is getter than All")
}

else if (b > a && b > c && b > d) {

    console.log("B is getter than All")
}

else if (c > a && c > b && c > d) {

    console.log("C is getter than All")
}
else if (d > a && d > b && d > c) {

    console.log("D is getter than All")

}else{
    console.log("All numers are same")
}







if (a % 2 == 0) {
    console.log("A is a Even number.")
}
else {
    console.log("A is a Odd number")
};








const date = new Date()
const today = date.getDay()



if(today == 0){
    console.log( "Today is Sunday" )
}
else if(today == 1){
    console.log( "Today is Monday" )
}

else if(today == 2){
    console.log( "Today is Tuesday" )
}

else if(today == 3){
    console.log( "Today is Wednesday" )

}
else if(today == 4){
    console.log( "Today is Thursday" )

}
else if(today == 5){
    console.log( "Today is Friday" )

}
else {
    console.log("Today is Saturday.")
}







//            Use of Switch 


const date = new Date()
const today = date.getDay()

switch (today) {
    case 0:
        console.log("Today is Sunday.")
        break;
        case 1:
            console.log("Today is Monday.")
            break;
            case 2:
                console.log("Today is Tuesday.")
                break;
                case 3:
                    console.log("Today is Wednesday.")
                    break;        
                    case 4:
                        console.log("Today is Thursday.")
                        break;
                        case 5:
                            console.log("Today is Friday.")
                            break;
                                case 6:
                                console.log("Today is Saturday.")
                                break; 
default : console.log("This is not a valid number.")
}






const number = prompt("Type your Number :" );

switch(number){
    case 0: console.log("You entered 0")




}












