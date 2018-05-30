
function forLoop(array){
  for (var i =0; i<25; i++){
    if(i===1){
      
      array.unshift("i am 1 strange loop")
    }
    else{
      array.unshift("i am ${i} strange loops")
    }
    
    
  }
  return array[i];
}

function whileLoop(n){
  while(n>0){
    console.log(--n)
     
  }
 return "done"
}

function doWhileLoop(array){
  function maybeTrue() {
  return Math.random() >= 0.5
}

do{
  array.shift()
} while (array.length >0 ||maybeTrue())
return array;
}