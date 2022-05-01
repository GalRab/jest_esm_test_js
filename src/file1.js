import {foo2} from "./file2.js";

export const  foo1=async ()=>{
    return await foo2()
}

// foo1().then(str=>console.log(str))