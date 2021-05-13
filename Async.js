//--------Example async/await-------------------//
const util = require('util');
const sleep = util.promisify(setTimeout);

async function callservice1(){
    try {
        await sleep(4000);
        return 'call service 1';
    } catch (error) {
        console.log(error);
    }
    
}
async function callservice2(){
    try {
        await sleep(2000);
        return 'call service 2';
    } catch (error) {
        console.log(error);
    }
}

async function main(){
    try {
        console.time('Main Process');
     
        const results= await Promise.all([callservice1(),callservice2()]);
        console.timeEnd('Main Process'); 

        console.log('callservice1', results[0]);
        console.log('callservice2', results[1]);

    } catch (error) {
        console.log(error);
    }
}

main();


//--------Example async/await-------------------//