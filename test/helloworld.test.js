import sayHello  from "../utils/helloworld.js";

 it ("Should say Hello Riley", ()=>{
    const helloString=sayHello;
    console.log (helloString);
    expect(helloString).toBe("Hello Riley")
 })