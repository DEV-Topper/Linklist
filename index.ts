// // 1 + 2 + 3 + 4 + 5 + 6 = 21

// // step 1
// const addUp = () => {
// 	let count: number = 6;
// 	const arr: Array<number> = [];

// 	for (let i = 1; i <= count; i++) {
// 		arr.push(i);
// 	}
// 	return arr.reduce((a: number, b: number))
// };

// console.log(addUp());

// let arr = [
// 	{
// 		name: "Tobi",
// 		age: 8,
// 	},

// 	{
// 		name: "Zion",
// 		age: 5,
// 	},

// 	{
// 		name: "Ayo",
// 		age: 4,
// 	},
// ];

// const first = arr[arr.length - 1];

// console.log(first);

// let data = [3, 1, 4, 6, 2];
// let rev = data.reverse();
// console.log(rev);

let arr1 = ["hello", "hola", "hi", "goodbye"];
let r = arr1.reverse();
console.time("r");
console.log(r);
console.timeEnd("r");
console.log();

let arr2: string[] = ["hello", "hola", "hi", "goodbye"];
let push: string[] = [];
for (let i = arr2.length - 1; i >= 0; i--) {
  push.push(arr2[i]);
}

console.time("push");
console.log(push);
console.timeEnd("push");

// console.time("start");
// console.timeEnd("start");

// let arr3:string[] = ["hello", "hola", "hi", "goodbye"];
// let rev: string[] = arr3.reduceRight((acc?:string[], cur?:string[])=> {

// })
// console.log(rev);