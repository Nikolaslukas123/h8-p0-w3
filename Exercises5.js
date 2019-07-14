
function palindrome(kata){

    for(var i=0, j=kata.length-1; i<parseInt(kata.length/2); i++,j--){
        if(kata.charAt(i)!==kata.charAt(j))return false;
    }
    return true;
}



console.log(palindrome('katak'));  
console.log(palindrome('blanket'));  
console.log(palindrome('civic'));  
console.log(palindrome('kasur rusak'));  
console.log(palindrome('mister'));  