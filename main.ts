import { constants } from "buffer"

interface objType {
    fname : string
    age : number
    email : string
    passWord : number
    func : ()=> void
    hobby:string[] 
    newObj: {
        lname: string,
        forgetPW: number
    }
}


let objName = {
    fname: "ayesha",
    age: 16,
    email: "ashii14245@getMaxListeners.com",
    passWord: 3449,
    func : () => {
        console.log("hello ashu");
    },
    hobby:["programming","coding","web development"],
    newobj : {
        lname: "Shakoor",
        forgetPw: 3559
    }
}
let {fname} = objName