function stepOne(cb){
  console.log("Step 1 done")
  cb();
}

function stepTwo(cb){
  console.log("Step 2 done")
  cb();
}

function stepThree(cb){
  console.log("Step 3 done")
  cb();
}

stepOne(function(){
  console.log("1 ho gaya na ")
  stepTwo(function(){
    console.log("2 ho gaya na ")
    stepThree(function(){
      console.log("3 ho gaya na ")
    })
  })
})