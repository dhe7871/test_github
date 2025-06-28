async function hello(){
    console.log("Hello");
}
async function world(){
    console.log(" World!");
}
async function helloWorld(){
    await hello();
    await world();
}

helloWorld();
