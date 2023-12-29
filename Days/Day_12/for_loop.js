//----------------------- Day-12 10 Dec 2023 -----------------------------------------------

for (let i = 1; i < 5; i++) {
    //console.log(`Outer loop :  ${i} `)

    for (let j = 1; j < 5; j++) {
        //console.log(`Inner loop : ${j}`)
        //console.log(i + "*" + j + "=" + i*j);
    } 
}

let myArray = ["Capgemini" , "TCS" , "Accenture" , "Infosys"]
//console.log(myArray.length)

for (let index = 0; index < myArray.length; index++) {     // here if you will put <= then it will give next value undefined bcz index is [3]
    const element = myArray[index];
  //  console.log(element)
    
}

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log("Detected 5")
      //  break                     // it will break the loop after meeting the condition
      continue                      // it will keep the loop continue after meeting the condition..
    }
    console.log(index)
    
}