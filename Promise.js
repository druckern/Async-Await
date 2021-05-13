//------------------------Example Promise-----------------------------------//
//pending, fulfilled, rejected
const util = require('util');
const sleep = util.promisify(setTimeout);
const isSuccessCallService1 = true;
const isSuccessCallService2 = true;
const callservice1 = ()=>{
    return new Promise((resolve, reject)=>{
        if (isSuccessCallService1) {
            setTimeout(()=>{
                resolve('el callservice1 respondio');
            },4000);
            
        } else {
            reject('callservice1 has error');
        }
    });

};

const callservice2 = ()=>{
    return new Promise((resolve, reject)=>{
        if (isSuccessCallService2) {
            setTimeout(()=>{
                
                resolve('The service callservice2 Responded');
            },5000);
            
        } else {
            reject('callservice2 has error');
        }
    });
    
    };
    

   async function principal(){
        try {
            console.time('Main Process');
            const result = await Promise.all([callservice1(),callservice2()]).then(console.log);
            console.timeEnd('Main Process');
            
        } catch (error) {
            console.log(error);
        }
        
        
    }
    
principal();
 
//------------------------Example Promise-----------------------------------//