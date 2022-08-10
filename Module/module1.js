let func1 = () =>{
    console.log("This is my first Function");
}
let func2 = () =>{
    console.log("This is my second function");
}
//To use these function we have to export it to tell node these function
module.exports = {func1, func2};