//slde 3


//get and set are accessors
// also called getters and setters
const counter = {
    count: 0,
    set(n) {
        this.count = n;
    },
    get() {
        return this.count;
    }

};

//i want to set count to 100, not 10
//teset the counter object
console.log(counter.count);
counter.set(100); //or counter.count = 100;
console.log(counter.get())


// make an incremanter - this will incrase count by 1
//make a decrmentor - this will decrease count by 1
//make a resetter -  this will bring conut to its inital value

const counter = {
    count: 0,
    set(n) {
        this.count = n;
    },
    get() {
        return this.count;
    },
    incr() {
        return this.count++;
    },
    dec() {
        return this.count--;
    }
}

console.log(counter.count);
counter.set(100);
console.log(counter.get());
console.log(counter.incr())
console.log(counter.incr())
console.log(counter.incr())
console.log(counter.incr())
console.log(counter.get());
let newValue = counter.incr();
console.log(counter.get());

//exrcise 2

const counter = {
    count: 0,
    step: 0,
    set(n) {
        this.count = n;
    },
    getStep(n) {
        this.step = n
    }
    get() {
        return this.count;
    },
    incr() {
        return this.count += this.step;
    },
    dec() {
        return this.count -= this.step;
    }

}




//
