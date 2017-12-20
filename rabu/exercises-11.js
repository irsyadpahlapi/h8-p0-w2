
    var nama = 'irsyad'
    var peran = ''
    var tahunlahir= 1994;
    var playerhealth = Math.random(tahunlahir);
    var monsterhealth = Math.random(tahunlahir);
    var kodemonster = Math.floor(Math.pow(100, Math.random()));


  if(nama === ''){
    peran = 'kacung';
  }

  else if(peran === ''){
    console.log(nama + ' Pilih peranmu untuk memulai game!');
  }
  else if(peran === 'ksatria'){
    console.log('Selamat datang di dunia Proxytia, ' + nama + 'Halo Ksatria,  ' + nama + ' kamu dapat menyerang dengan senjatamu!' );
  }
  else if(peran === 'tabib'){
    console.log ('Selamat datang di dunia Proxytia, ' + nama + 'Halo tabib,  ' + nama + ' kamu akan membantu temanmu yang terluka');
  }
  else if(peran === 'penyihir'){
    console.log('Selamat datang di dunia Proxytia, ' + nama + 'Halo tabib,  ' + nama + ' ciptakan keajaiban yang membantu kemenanganmu');
  }else{
    console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game');
  }
 var umur = 2017 - tahunlahir;
 for(var i=1; i<tahunlahir;i++){
   if(i % umur == 0){
     console.log(peran + ' ' + nama + ' menyerang monster!');
     monsterhealth = monsterhealth - umur;
   }
   else if(i % kodemonster==0){
     console.log('monster menyerang ' + peran + ' ' + nama + '!');
     playerhealth = playerhealth - kodemonster;
   }
   else if(i % umur == 0 && i % kodemonster==0){
     console.log('Health keduanya bertambah');
     playerhealth = playerhealth + kodemonster;
     monsterhealth = monsterhealth + umur;
   }
 }
 if(playerhealth > monsterhealth){
   console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!');
 }
 else{
   console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...');
 }
