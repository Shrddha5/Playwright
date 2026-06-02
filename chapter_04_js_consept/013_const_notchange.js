
//const we can not change value 



const BASE_URL = "https://fb.com";
// const BASE_URL = "https://google.com";

// TypeError: Assignment to constant variable.


let name = "pending";
name = "done";
{
    let name = "shraddha";
}
//above is block ,we have to create dublicate block , not call



// fun we again call 
function say() {
    let name = "shraddha";
}
say();//calling fun
say();