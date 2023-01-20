// function Monday() {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
//   }
  
//   function Tuesday() {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
//   }
  
//   function Wednesday() {
//     console.log("Go for a five-mile run");
//     console.log("Go for a five-mile run");
//   }
  
//   function Thursday() {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
//   }
  
//   function Friday() {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
//   }

//   // Let's put all of those five mile console.logs into one function.

//   function runFiveMiles(){
//     console.log("go for a five mile run")
//   }

//   //as the instructions insist, lets put the rust of the repeated console.logs into their own function. 

//   function runFiveMiles(){
//    console.log("go for a five mile run") 
//   }

//   function liftWeights(){
//     console.log("Pump iron");
//   }

//   function swimFortyLaps(){
//     console.log("Swim 40 laps");
//   }

//   function Monday() {
//     runFiveMiles()
//     liftWeights()
//   }
 
//   excerciseRoutine(() => console.log("Stretch! Work that core"))

// return function () {
//     console.log()
// }
 
function receivesAFunction(funk){
    return funk()
}

function funk(){
    console.log("funk")
} 


function returnsANamedFunction(){
    return punk
}

function punk(){
    console.log("punk")
}

function returnsAnAnonymousFunction(){
    return () => console.log("frank")
}

// const tank = () => {
//     console.log("frank")
// }

