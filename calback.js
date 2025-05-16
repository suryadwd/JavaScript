          //  callback hell 

// function stepOne(cb){
//   console.log("Step 1 done")
//   cb();
// }

// function stepTwo(cb){
//   console.log("Step 2 done")
//   cb();
// }

// function stepThree(cb){
//   console.log("Step 3 done")
//   cb();
// }

// stepOne(function(){
//   console.log("1 ho gaya na ")
//   stepTwo(function(){
//     console.log("2 ho gaya na ")
//     stepThree(function(){
//       console.log("3 ho gaya na ")
//     })
//   })
// })


                     // promisses

// agar  ham kahi aurr se data le rahe hai to ya to wo data mil jayega(5min 2sec)  ya nahi milega aurr ham code kamesha dono ke liye likhte hai ke 

//iske liye hmlog promises use krte hai ye 2 cheeze deta hai 
          //  --> resolve  --- agar data mil gaya
          //  --> reject   --- agar data nahi mil gaya

// iske ke sath hmko then aur catch bhi milta hai
// then ka matlab hai jab promise resolve ho gaya
// catch ka matlab hai jab promise reject ho gaya
// ye dono hi function hote hai jo promise ke sath attach hote hai
