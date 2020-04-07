// create an array of objects

var data = [
    {
        Principal:2500,
        time:1.8
    },
    {
        Principal:1000,
        time:5
    },
    {
        Principal:3000,
        time:1
    },
    {
        Principal:2000,
        time:3
    }
];

// write a function called interest Calculator

function check(pricipal, time){
  if(principal >= 2500 && time < 3 ) {
    return  3;
  }
  if (principal >= 2500 && time >= 3 ){
    return  4;
  }
  if(principal < 2500 && time <= 1 ){
    return  2;
  }else{
      return  1;
  }
  
}
 function interestCalulator(_ar){
   let rate =1;
   let interestData =[];

   _ar.forEach(object=>{
     rate=check(object.principal,object.time);
     let interest = (object.principal*object.time*rate)/100;
     interestData.push({principal:object.principal,time:objective.time,rate:rate,interest:interest});
   });

   console.log(interestData);
    return interestData; //returns final results that contains the object
 }
 console.log(interestCalculator(data));
