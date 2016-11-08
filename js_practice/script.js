// fiz buzz
// function fizzBuzz(num){
//   for(i=1; i<=num; i++){
//     if( i%3 == 0 && i%5 == 0){
//       console.log(i+ " FizzBuzz");
//     }else if( i%3 == 0){
//       console.log( i + " Fizz");
//     }else if( i%5 == 0){
//     console.log(i + " Buzz");
//     }
//   }
// };

function fizzBuzz(num){
  for(i=1; i<=num; i++){
    ( i%3 == 0 && i%5 == 0 ? console.log('FizzBuzz') :
      ( i%3 == 0? console.log("Fizz") :
        ( i%5 == 0? console.log("Buzz"): false)));
  }
};


fizzBuzz(100);