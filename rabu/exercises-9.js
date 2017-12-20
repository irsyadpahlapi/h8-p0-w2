//tugas 1
var a,b,c;
a = prompt('nama :');
b = prompt('angka pembilang :');
c = prompt('angka penyebut :');

var hitung;
hitung = Number(b) / Number(c);

console.log('Halo '+a+', '+b+' dibagi ' +c+' adalah sama dengan '+hitung);

//tugas 2
var a,b,c;
a = prompt('alas dari segitiga');
b = prompt('tinggi dari segitiga');

var hitung;
hitung = Number(a) * Number(b)/2;

console.log('Luas Segitiga: '+hitung);

//tugas 3
var a;
a = prompt('alas dari segitiga');
if(a % 4 === 0){
  if(a % 100 === 0){
    console.log(a+' adalah tahun kabisat');
  }
  else{
    if(a % 400){
      console.log(a+' adalah tahun kabisat');
    }
    else{
      console.log(a+' adalah bukan tahun kabisat');
    }
  }
}
else{
  console.log(a+' adalah bukan tahun kabisat');
}
