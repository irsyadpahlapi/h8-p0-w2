//TUGAS 1
var total = 0;
for(var i=1; i<=100;i++){
  if(i % 2 == 1){
    total = total + i;
  }else{
    total = total - i;
  }
}
console.log("TOTAL : "+total);

//TUGAS 2
var pagar ='';
for(var i=1; i<=10;i++){
  for(var j=0;j<=10;j++){
    pagar = '#';
  }
  console.log(pagar);
  pagar = '';
}

//TUGAS 3
var bintang = "";
for(var i = 1; i<10; i++){
  for(var j= 0; j<i; j++){
    bintang = bintang+'*';
  }
  console.log(bintang);
  bintang = '';
}
