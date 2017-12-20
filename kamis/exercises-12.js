function balikstring(data){
  var total = data.length;
  var hasil = '';
  for(var i =total-1; i>=0; i--){
    hasil = hasil+''+data[i];
  }
  console.log(hasil);
}
balikstring('hello world!');
