var loop = 1;
while(loop <5){
  if(loop ==1){
    var nama = 'irsyad'
    var peran = ''
    console.log('//Output untuk Input '+loop)
  }
  else if(loop == 2){
    var nama = 'irsyad'
    var peran = 'ksatria'
    console.log('//Output untuk Input '+loop)
  }
  else if(loop == 3){
    var nama = 'irsyad'
    var peran = 'tabib'
    console.log('//Output untuk Input '+loop)
  }
  else if(loop == 4){
    var nama = 'irsyad'
    var peran = 'penyihir'
    console.log('//Output untuk Input '+loop)
  }

  if(nama === ''){
    console.log('tuliskan namamu')
  }

  else if(peran === ''){
    console.log(nama + ' Pilih peranmu untuk memulai game!')
  }
  else if(peran === 'ksatria'){
    console.log('Selamat datang di dunia Proxytia, ' + nama + 'Halo Ksatria,  ' + nama + ' kamu dapat menyerang dengan senjatamu!' )
  }
  else if(peran === 'tabib'){
    console.log ('Selamat datang di dunia Proxytia, ' + nama + 'Halo tabib,  ' + nama + ' kamu akan membantu temanmu yang terluka')
  }
  else if(peran === 'penyihir'){
    console.log('Selamat datang di dunia Proxytia, ' + nama + 'Halo tabib,  ' + nama + ' ciptakan keajaiban yang membantu kemenanganmu')
  }else{
    console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game')
  }
  loop++;
}
