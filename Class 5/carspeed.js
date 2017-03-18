// Change "stop" to have the following output:
// "Screeeeetch!!" if speed is "fast" (speed attribute more than 120)
// "RRrch."                if speed is "medium"  (speed attribute more than 80)
// "sh"                       if speed is "slow"
// "Yikes, I don't know how fast I'm going!!!" if speed is anything else.
//
// Stretch:  If the speed is a number, output "Screetch!!" with that number of "e"s.

const car = {
    speed: 200,

    drive() {
        if (this.speed > 120) {
            console.log("Sceeetch ");
            // console.log(`Scr${ "e".repeat(this.speed) }tch!`);
            //or else if(this.speed>80)
        } else if (this.speed <= 100 && this.speed > 60) {
            console.log("RRch");
            //or else if(this.speed>40)
        } else if (this.speed <= 60 && this.speed >= 0) {
            console.log("shhh");

        } else {
            console.log("Yikes i dot know how fast im going");
        }


    }
};
