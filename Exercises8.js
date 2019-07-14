
function pasanganTerbesar(num) {
    var pasanganLama=parseInt(num.toString().slice(0,2));
    for(var i = 1;i<num.toString().length-1;i++){
        var pasanganBaru= parseInt(num.toString().slice(i,i+2));
        if(pasanganBaru>pasanganLama)pasanganLama=pasanganBaru;
    }
    return pasanganLama;
  }
  console.log(pasanganTerbesar(641573)); 
  console.log(pasanganTerbesar(12783456)); 
  console.log(pasanganTerbesar(910233)); 
  console.log(pasanganTerbesar(71856421)); 
  console.log(pasanganTerbesar(79918293)); 
