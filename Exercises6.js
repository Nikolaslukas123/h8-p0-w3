function angkaPalindrome(num) {
    function cekPalindrom(num){
        var conv = num.toString();
        for(var i = 0, j = conv.length-1; i< parseInt(conv.length/2); i++,j--){
            if(conv.charAt(i)!==conv.charAt(j)){
                return false;
            }
        }
        return true;
      }

    if(cekPalindrom(num)===true){
        num++;
    }
    while(cekPalindrom(num)===false){
        num++;
    }
    return num;
}
  console.log(angkaPalindrome(8));  
  console.log(angkaPalindrome(10));  
  console.log(angkaPalindrome(117));  
  console.log(angkaPalindrome(175)); 
  console.log(angkaPalindrome(1000));  