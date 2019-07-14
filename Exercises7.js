function hitungJumlahKata(kalimat) {
        var word = 0;
    for(var i=0;i<kalimat.length;i++){
        if(kalimat.charAt(i)===" "){
            word++;
        }else if(i===kalimat.length-1){
            word++;
        }
    }
    return word;
}
    console.log(hitungJumlahKata('I have a dream')); // 4
    console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
    console.log(hitungJumlahKata('A song to sing')); // 4
    console.log(hitungJumlahKata('I')); // 1
    console.log(hitungJumlahKata('I believe I can code')); // 5 

