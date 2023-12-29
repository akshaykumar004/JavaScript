let i = 1
while (i <= 10) {
   // console.log(i + " * " + i + " = " + i * i)
    i = i + 1
}

let myArray = ["Akshay" , "Tanya" , "Hitesh" , "Aman"]
let arr = 0

while (arr < myArray.length) {
  //  console.log(myArray[arr])
    arr = arr + 1
}

//let num = 1
let num = 11        // here condition is not satisfying still it executing one time due to do block..
do {
    console.log(num)
    num++
} while (num <= 5);