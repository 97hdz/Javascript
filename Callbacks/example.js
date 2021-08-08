// Callback : A callback is a function that is passed to another function as a parameter
//            This inner function is called at some point during the execution of the containing function
//
//
//

// function shouldGoFirst(callback) {
//   setTimeout(() => {
//     console.log(`i should always go first`);
//     callback();
//   },1000);
// }
//
// function shouldGoSecond() {
//   console.log(`I should always go second`);
// }
//
// shouldGoFirst(shouldGoSecond);

const whenDone = () => {
  console.log(`It's fucking done`);
}

const looper = (number, cb) => {
  for (var i = 0; i < number; i++) {
    console.log(i);
  }
  cb();
}

looper(100, whenDone);
