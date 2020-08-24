function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        }/*,
        set: function (value) {
            duration = value;
        }*/
    });

    Object.defineProperty(this, 'startTime', {
        get: function () {
            return startTime;
        },
        set: function (value) {
            startTime = value;
        }

    });
    /*
    Object.defineProperty(this, 'endTime', {
        get: function () {
            return endTime;
        },
        set: function (value) {
            endTime = value;
        }
    });
*/
    Object.defineProperty(this, 'running', {
        get: function () {
            return running;
        },
        set: function (value) {
            running = value;
        }
    });

    Stopwatch.prototype.start = function () {
        if (running)
            throw new Error('Stopwatch has already started.');

        running = true;

        startTime = new Date();
    };

    Stopwatch.prototype.stop = function () {
        if (!running)
            throw new Error('Stopwatch is not started.');

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    Stopwatch.prototype.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

}

let sw = new Stopwatch();

sw.start();

console.log(sw.duration);
console.log(sw);



