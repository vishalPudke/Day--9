async function sum(n1,n2){
    return n1+n2;
}
async function main(){
    let value= await sum(140,3);
    console.log(value);
}
main();


