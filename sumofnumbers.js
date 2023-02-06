let nums =[1,2,4];

function sumFor(num){
  let total = 0;
  for(let i = 0; i < num.length; i++){
    total += num[i];
  }
  return total;
}

function sumWhile(num){
  let total = 0;
  let increment = 0;
  while(increment < num.length){
    total += num[increment];
    increment++;
  }
  return total;
}

function sumRecursion(num){
  if(num==0){
    return 0;
  }
  return sumRecursion(num.slice(1,num.length)) + num[0];
}

function sumTheSimpleWay(num){
  return _.reduce(num ,function(memo, val){return memo + val;},0);
}
console.log(sumFor(nums));
console.log(sumWhile(nums));
console.log(sumRecursion(nums));
console.log(sumTheSimpleWay(nums));