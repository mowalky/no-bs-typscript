let userName:string = "Jack";
let hasLoggedIn:boolean = true;

userName += " Herrington";

console.log(hasLoggedIn);


let myNumber:number = 10;

let myRegex:RegExp = /foo/;

const names:string[] = userName.split(" ")
const myvalues: Array<number> = [1,2,3,4,5];

interface Person {
    first: string,
    last: string,
    cool?: boolean
}

const myPerson:Person = {
    first: "Jack",
    last: "Herrington",
    cool: true
}

const ids: Record<number,string> = {
    10:"a",
    20:"b",
}

ids[30] = "c";

if(ids[30]==="a") {

}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

[1,2,3,4,5].forEach(i => console.log(i));

const out = [1,2,3,4,5].map(i => i*2);