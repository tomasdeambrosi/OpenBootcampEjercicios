let num = 1;
let max = 10;

while (true) {
    num *= max;
    console.log("num vale " + num + " y max vale " + max);
    max--;
    if (max === 0) {
        break;
    }
}

console.log(num);
