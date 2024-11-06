

// 1-vazifa


// 1-masala

// function calc(a, b) {
//     return a + b
// }
// console.log(calc(prompt("Birinchi sonni kiriting")-0, prompt("Ikkinchi sonni kiriting")-0));


// 2-masala

// let arr = [1,2,3,4,5]
// function calc(list) {
//     let result = 0
//     for (let item = 0; item < list.length; item++) {
//         result += list[item];
//     }
//     console.log(result); 
// }
// calc(arr);


// 3-masala

// let arr = [-12, -27, 13, -4, 5, -10, -9];
// function plus(list) {
// for (let i = 0; i < list.length; i++) {
//     if (list[i] < 0) {
//         list[i] = Math.abs(list[i]);
//     }
// }
// console.log(list);
// }
// plus(arr)


// 4-masala

// let arr = ["5" , 2 , "true"]

// function Hi(list) {
//     for (let item = 0; item < list.length; item++) {
//         if (typeof list[item] === "string") {
//             if (!isNaN(list[item])) {
//                 list[item] = Number(list[item]);
//             } else {
//                 list[item] = 0;
//             }
//         }       
//     }
//     console.log(list);
// }
// Hi(arr)


// 5-masala

// const personArr = [
//     { name: "Abdulloh", 
//       age: 19, 
//       status: false 
//     },
//     { name: "Sanjar", 
//       age: 20, 
//       status: true 
//     },
//     { name: "Shodiyor", 
//       age: 18, 
//       status: false 
//     },
//     { name: "Bekjon", 
//       age: 20, 
//       status: false
//     }
// ];
// function stStudents(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].status === false) {
//             console.log(arr[i].name);
//         }
//     }
// }
// stStudents(personArr)


// 6-masala

// Math.floor ni shunchaki butun son chiqishi uchun qo'lladim.

// let d = 1
// let g = 9
// let p = 15
// function calc(a, b, c) {
//     return (a + b + c) / 3;
// }
// console.log(Math.floor(calc(d, g, p)));


// 7-masala 

// let arr = [4, 41, 15, 6, 14, 25]
// function transform(arr) {
//         if (arr[0] % 2 === 0) {
//             arr[0] += 1;
//         } else {
//             arr[0] += 1;
//         }
//     return arr;
// }
// console.log(transform(arr));


// 8-masala

// let arr1 = ["bay", "hi", "good", ]
// let arr2 = ["100", "good", "ice", "bay"]
// function findsame(a, b) {
//     let same = [];
//     for (let i = 0; i < a.length; i++) {
//         for (let k = 0; k < b.length; k++) {
//             if (a[i] === b[k]) {
//                 same.push(a[i]);
//             }
//         }
//     }
//     return same;
// }
// console.log(findsame(arr1, arr2));



// 2-vazifa


// 1-masala

// let person = {
//     name: "Abdulloh",
//     age: 19,
//     job: "Logistic company",
//     interest: "game",
//     hobby: "sleep",
//     number: "+998944683325",
//     username: "AU"
// }
// for (let key in person) {
//     console.log(`${key} - ${person[key]}`);
// }


// 2-masala

// const person1 = {
//     name: "Abdulloh",
//     age: 19
// };

// const person2 = {
//     hobby: "Volleyball",
//     interest: "Sleep"
// };
// const persons = Object.assign({}, person1, person2);
// console.log(persons);


// 3-masala

// let arr = [11, 8, 79, 15, 9]
// function add(list) {
//     if (list.length > 0) {
//         list[list.length - 1] += 1;
//     }
//     return list;
// }
// console.log(add(arr));


// 4-masala

// let arr = [4, 14, 8 , 12]
// function calc(list) {
//     let result = 0;
//     for (let i = 0; i < list.length; i++) {
//         result += list[i];
//     }
//     if (list[0] % 2 === 0) {
//         list.unshift(result);
//     } else {
//         list.push(result);
//     }
//     return list;
// }
// console.log(calc(arr));


// 5-masala

// let arr = [10, 12, 31, 4, 5]
// function replace(list) {
//     if (list.length > 1) {
//         let temp = list[0];
//         list[0] = list[list.length - 1];
//         list[list.length - 1] = temp;
//     }
//     return list;
// }
// console.log(replace(arr));


// 6-masala

// function words(times, arr = []) {
//     if (times === 0) return arr;
//     let word = prompt("Ixtiyoriy so'z kiriting");
//     arr.push(word);
//     return words(times - 1, arr);
// }
// let wordsArr = words(6);
// console.log(wordsArr);


// 7-masala
// ishlolmadim

