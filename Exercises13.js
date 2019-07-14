 function targetTerdekat(arr) {
    
    var distance=0;
    var ox ="";
    var bankDistance= [];
    for(var i = 0;i<arr.length;i++){
        if((arr[i]==="o" || arr[i]==="x") && ox===""){
            ox=arr[i];
            distance=0;
        }else if((arr[i]==="x" && ox==="o") || (arr[i]==="o" && ox==="x")){
            bankDistance.push(distance);
            ox=arr[i];
            distance = 0;
        }else if((arr[i]==="o" && ox==="o") || (arr[i]==="x" && ox==="x")){
            ox=arr[i];
            distance = 0;
        }
        
        distance++;
    }
    return Math.min(bankDistance);
  }
  
  
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); 
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); 
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); 
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); 
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); 