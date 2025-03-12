// function f1(val) {
//     setTimeout(val,3*1000)
// }

// f1(function () {
//     console.log(2)
// })

// var arr = [1,2,3,4,5]

// let a = arr.map((item) =>  item + 5)

// console.log(a)

// function hap (brr,fun){
//     let newarr = [];
//     for(let i = 0; i < brr.length; i++){
//         newarr.push(fun(brr[i]))
//     }
//     return newarr;
// }

// let x = hap(arr,function(val){ return val + 5})
// console.log(x)

// fun uses clouser to create a counter
//when we pass a function as args -> callback function
//when we receive function as parameter or return a function -> hofs
//when we use the parent function variable in the returning function ->clousers

//  function abc(fun){
//      fun++;
//      return add(fun) {console.log(fun)};
//  }
 
//  abc(function(12))



//  function abc(){
//      var cnt = 0;
//      return function add(){
//          cnt++;
//          console.log(cnt)
//      };
//  }
 
// // abc()()   will call the main function again and again and only 1
// // abc()()   will be printed each times
// // abc()()   
 
// let a = abc()  //this will create a instance of the main class once
// a()      //we are calling the add class so get the different value
// a()      // as 1 2 3 
// a()


// implement the function that limit how many times the another function can be called

// function abc(fun, limit){
//   let cnt = 0;
//   return function checker(){
//          if(cnt < limit) fun();
//           cnt++;
//   }
// }


// let fun = abc(function(){console.log("chala")},3)

// fun()  //give value
// fun()  //give value
// fun()  //give value
// fun()  //not give any value
// fun()  //not give any value
// fun()  //not give any value

