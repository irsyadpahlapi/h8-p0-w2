function tanyapacar(){
  for (var i = 1; i > 0; i++) {
    var kalimat = prompt("masukan pertanyaan anda ");
    if(kalimat===false){
      break;
    }
    else if(kalimat===null){
      break;
    }
    else if(kalimat.length===0){
      alert("masukan sebuah kalimat");
    }
    var kamus = [ ["cinta","love","sayang","benci"],
                  ["aku juga cinta kamu","I love you too","aku juga sayang kamu","benci itu sifat setan"]];
    var pilah=kalimat.split(" ");
     for(var j=0; j<pilah.length;j++){
     if(kamus[0].includes(pilah[j])===true){
       key=kamus[0].indexOf(pilah[j]);
       alert(kamus[1][key]);
       break;
     }
   }
   if(kamus[0].includes(pilah[j])===false){
     alert("kalimat anda sedang dalam pengembangan");
   }
  }
}

tanyapacar();
