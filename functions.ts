function addNumbers(a:number,b:number):number {
    return a+b;
}

export default addNumbers;

export const addStrings = (str1:string,str2:string = ""):string => 
    `${str1} ${str2}`;

// union types
export const format = (title:string, param: string | number):string => {
    return `${title} ${param}`;
}

// void
export const printFormat = (title:string, param: string | number):void => {
    console.log(format(title, param));
}

// returning a Promise
export const fetchData = (url:string):Promise<string> => Promise.resolve(`data fetched`)