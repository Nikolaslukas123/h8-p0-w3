function mengelompokkanAngka(arr) {
    var genap=[];
    var kelipatanTiga=[];
    var ganjil=[];
    
    for(var i = 0;i<arr.length; i++){
        if(arr[i]%3===0){
            kelipatanTiga.push(arr[i]);
        }else if(arr[i]%2===0){
            genap.push(arr[i]);
        }else if(arr[i]%2===1){
            ganjil.push(arr[i]);
        }
    }
    var result=[];
    result.push(genap,ganjil,kelipatanTiga);
    return result;
    
  }
  console.log(mengelompokkanAngka([2, 4, 6])); 
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); 
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); 
  console.log(mengelompokkanAngka([])); 
