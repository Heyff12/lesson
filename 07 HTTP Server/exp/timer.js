process.nextTick(function(){
  console.log('process.nextTick执行1'); // 2
});
process.nextTick(function(){
  console.log('process.nextTick执行2'); // 2
});

setImmediate(function(){
  console.log('setImmedate执行1'); // n 1

  process.nextTick(function(){
      console.log('强行执行？'); // n tail
  });
});

setImmediate(function(){
  console.log('setImmedate执行2'); // n 2
});
console.log('正常执行'); // 1
