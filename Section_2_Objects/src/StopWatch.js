
function StopWatch(){
    this.startTime = 0;
    let working = false;

    this.start = function (){
        this.working = true;
        this.startTime = Date.now()
    }

    this.stop = function (){
        this.working = false;
    }

    this.reset = function (){
        this.startTime = Date.now()
        this.working = false;
    };
    this.duration = function () {
      const  elapsed = Date.now() - this.startTime;
        console.log(elapsed);
    }
}

const stopWatch = new StopWatch();
