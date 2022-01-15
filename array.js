let arra = [33, 23, 89, 23, 'Asad'];
arra[5] = 'Bangla'

console.log(arra[4])
console.log(arra[4].length)



let arra2 = Array(12, 44, 'Asad', 77, 'Bangla',)
console.log(arra2)





//            Traverse an Array



let arr = [22, 66, 1, 44, 9, 11, 77, 90, 111]

for (var i = 0; i < arr.length; i++){

    // console.log(arr[i])

    arr[i] = arr[i] + 2

    console.log(arr[i])

}



var sum = 0
for (var i = 0; i < arr.length; i++){

    // sum = sum + arr[i]
    sum += arr[i]
}

console.log(sum)





for (var i = 0; i < arr.length; i++){

    if (arr[i] % 2 !== 0){
        console.log('This is a ODD number : ' + arr[i])
    }


// }




//           Array  Insert,  Remove,  Replace 




let arr =[33, 3, 54, 8, 9, 22, 12, 86, 99]

arr[3] = 9

arr.push(9)
arr.pop()
arr.unshift(9)
arr.shift()
console.log(arr)



let arr =[33, 3, 54, 8, 9, 22, 12, 86, 99]

arr.splice(3, 0, 1, 2, 3 )
arr.splice(3, 1)


console.log(arr)









//                      Search Data    using Array


let arrr = [7, 8, 9, 2, 6, 2, 4, 5, 77, 55]

let find = prompt("Enter a Data : ")


for (var i = 0; i < arrr.length; i++){

    if (arrr[i] == find) {

        console.log('Data found at Index ' + i)
    }else{
        console.log("Data is not found")
        
    }


}









        //   Multi Dimensional array
