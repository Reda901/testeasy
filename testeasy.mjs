import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});


let minimum = 1
let maximum = 8

let getal1 = parseFloat(await userInput.question("geef een getal in"))

if(getal1 > 0 && getal1 < maximum ){
    console.log(getal1 + " ligt tussen " + minimum +" en " + maximum )
}

else{

    console.log (getal1 + " ligt niet tussen " + minimum +" en " + maximum )


}


process.exit()
