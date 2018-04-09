#!/usr/bin/env node

const readline = require('readline');
const fs = require('fs')
const path = require('path')
const facsterUtils = require('facster-jobs')

const getRepoName = (callback) => {
    const rl = readline.createInterface({
      input: fs.createReadStream(path.join(process.cwd(),'.git/config'))
    });
  
    rl.on('line',(line)=>{
      if(line.includes('url')){
        const name = line.split('/').slice(-1)[0];
        callback(name)
      }    
    })
}

//lets go 
if (process.argv.length < 3){
  console.log('usage: facster deploy')
}
else if (process.argv[2] === 'deploy'){
  getRepoName((name) => {
    try {
      const cv = JSON.parse(fs.readFileSync(path.join(process.cwd(),'cv.json')))
      const errors = facsterUtils.validate(cv).errors
      if (errors.length){
        const errorMessage = JSON.stringify(errors, null, 2)
        console.log("\x1b[31m", 'Validation Errors: \n', "\x1b[37m", errorMessage);
      } else {
        console.log('website deployed');
      }
    } catch (error) {
      console.log('There has been an error. Please contact @astroash or @des-des but probably best just ask @eliascodes on gitter')
    }
  })
}


