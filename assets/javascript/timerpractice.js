var interval;

function start() {
    var counter = 15;
    clearInterval(interval); // clear the previous interval
    interval = setInterval(() => { // set a new interval
        counter--;
        if (counter === 0) {
            console.log('end of clock');
            clearInterval(interval);
            console.log(counter);
        }
        console.log(counter);
    }, 1000);
}
