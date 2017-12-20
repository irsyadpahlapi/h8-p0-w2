//tugas 1
/*
SIMPAN 'angka pertama'
SIMPAN 'angka kedua'
HITUNG 'hasil perkalian dua bilangan'
TULISKAN 'tuliskan hasil perhitungan'
*/
var a,b;
a = prompt("Masukan angka pertama");
b = prompt("masukan angka kedua");
var hitung;
hitung = a * b;
console.log(hitung);
alert(hitung);

//tugas 2
/*
SIMPAN 'masukan kalimat yang ingin di cari'
IF 'cek kondisi yang mau di cari sama atau tidak dengan "Saya Belajar JavaScript!""'
TULISKAN 'tuliskan hasil pencocokan'
*/
var a;
a = prompt('masukan kalimat');
if (a === 'Saya Belajar JavaScript!') {
  alert('Pasti Bisa');
}
else{
  alert('Coba Lagi');
}

//tugas 3
/*
SIMPAN 'masukan angka besar dari angka tiga untuk menjalankan aplikasi'
ULANGI 'lakukan perulangan jika nilai awal belum mencapai nilai masukan sebelumnya'
IF 'cek kondisi apakah nilai perulangan habis dibagi 3'
TAMPILKAN 'tampilkan hasil pencocokan'
*/
var a,b;
a = prompt('masukan angka kesukaan lo : ');
b=1;
while(b <= a){
  if (b % 3 == 0) {
    alert('nilainya adalah '+b);
  }
  b++;
}
