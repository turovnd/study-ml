'use strict';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let size = null;
let counter = 0;
let confusion = [];
let allSum = 0;
let arrC = [];
let arrP = [];

rl.on('line', (line) => {
    if (size) {
        let lineArr = line.split(" ");
        for (let i = 0; i < lineArr.length; i++) {
            confusion[i] = !confusion[i] ? [0, 0, 0] : confusion[i];
            let val = parseInt(lineArr[i]);
            allSum += val;
            arrC[counter] = !arrC[counter] ? val : (arrC[counter] + val);
            arrP[i] = !arrP[i] ? val : (arrP[i] + val);
            if (i === counter) {
                confusion[i][0] = val;
            } else {
                confusion[i][1] += val;
                confusion[counter][2] += val;
            }
        }
        counter++;
    }
    if (size === counter) {
        executeTask();
        rl.close();
    }
    size = !size ? parseInt(line) : size;
});

function calculateF(rec, pres) {
    if (rec === 0 && pres === 0) return 0;
    return 2 * rec * pres / (rec + pres)
}

function executeTask() {
    // console.log('confusion', confusion);
    // console.log('arrP', arrP);
    // console.log('arrC', arrC);
    let recW = 0;
    let presW = 0;
    let micF = 0;
    for (let i = 0; i < confusion.length; i++) {
        let rec = confusion[i][0] / (confusion[i][0] + confusion[i][2]);
        let pres = confusion[i][0] / (confusion[i][0] + confusion[i][1]);
        presW += confusion[i][0] * arrC[i] / (arrP[i] * allSum);
        recW += confusion[i][0] / allSum;
        micF += arrC[i] * calculateF(rec, pres) / allSum;
    }
    let macF = calculateF(recW, presW);
    console.log(macF + '\n' + micF);
}