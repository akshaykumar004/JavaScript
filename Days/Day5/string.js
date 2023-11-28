// ------------------------- Day-5, 28 Nov 2023 -------------------------------------

// let name = "Akshay"
// let loc = "Mumbai."

//  console.log (name + " " + loc) // this type of concatenation is not good to use.

//  console.log (`Hello my name is ${name} and I am from ${loc}`)  // this is called string interpolation and this is easy to read. 

 // for fetching the key pair value we define the string differently (using object). refer below example..

 let company = new String('Capgemini')

 //console.log(typeof company , company[0]) // here this is not working like array. data type is still String.

// ----------------- Use of Methods -------------------------------

  console.log(company.length);
//  console.log(company.toUpperCase());
//  console.log(company.charAt(2));
//  console.log(company.indexOf('e'));
//  console.log(company.lastIndexOf('i'));

// let newString = company.substring(0 , 4)
// console.log(newString);  // here it is taking only till 3rd position value.

// let otherString = 'The quick brown fox jumps over the lazy dog.'
// console.log(otherString.length);
// console.log(otherString.slice(-9 , -5));
// console.log(otherString.slice(4 , 19));
// console.log(company.slice(-7 , -4))

// let newString = "     Hi Akshay     "
// console.log(newString);
// console.log(newString.trim()); // here we can use also trimStart and trimEnd method.

let str = 'The quick brown fox jumps over the lazy dog'
console.log(str.split(' ')) 
/* The split() method of String values takes a pattern and divides this string into an ordered list
 of substrings by searching for the pattern. */

console.log(str.includes('akshay'));  
console.log(str.includes('fox'));  

console.log(str.replace('dog' , 'cat'));
console.log(str.replace('brown' , 'black'));






 /* -------------------- Notes --------------------
 For better understanding open browser and inspect and inside console type this and we'll get all key pair value as well as prototype. 
 we can use prototype - methods also.
let company = new String('Capgemini')
company 
result --------
String {'Capgemini'} 0: "C"1: "a"2: "p"3: "g"4: "e"5: "m"6: "i"7: "n"8: "i"
length: 9

[[Prototype]]: Stringanchor: ƒ anchor()at: ƒ at()big: ƒ big()blink: ƒ blink()bold: ƒ bold()charAt: ƒ charAt()charCodeAt: 
ƒ charCodeAt()codePointAt: ƒ codePointAt()concat: ƒ concat()constructor: ƒ String()endsWith: ƒ endsWith()fixed: 
ƒ fixed()fontcolor: ƒ fontcolor()fontsize: ƒ fontsize()includes: ƒ includes()indexOf: ƒ indexOf()isWellFormed: 
ƒ isWellFormed()italics: ƒ italics()lastIndexOf: ƒ lastIndexOf()length: 0link: ƒ link()localeCompare: ƒ localeCompare()match: 
ƒ match()matchAll: ƒ matchAll()normalize: ƒ normalize()padEnd: ƒ padEnd()padStart: ƒ padStart()repeat: ƒ repeat()replace: 
ƒ replace()replaceAll: ƒ replaceAll()search: ƒ search()slice: ƒ slice()small: ƒ small()split: ƒ split()startsWith:
 ƒ startsWith()strike: ƒ strike()sub: ƒ sub()substr: ƒ substr()substring: ƒ substring()sup: ƒ sup()toLocaleLowerCase: 
 ƒ toLocaleLowerCase()toLocaleUpperCase: ƒ toLocaleUpperCase()toLowerCase: ƒ toLowerCase()toString: ƒ toString()toUpperCase: 
 ƒ toUpperCase()toWellFormed: ƒ toWellFormed()trim: ƒ trim()trimEnd: ƒ trimEnd()trimLeft: ƒ trimStart()trimRight: 
 ƒ trimEnd()trimStart: ƒ trimStart()valueOf: ƒ valueOf()Symbol(Symbol.iterator): ƒ [Symbol.iterator]()[[Prototype]]: 
 Object[[PrimitiveValue]]: ""

 [[PrimitiveValue]]: "Capgemini"
 
 */
