//tugas 1
function shoutOut(){
  alert('Halo Function!');
}
console.log(shoutOut());

//tugas 2
function calculateMultiply( a , b){
  var hitung = a * b;
  alert(hitung);
}
var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);

//tugas 3
function processSentence(a,b,c,d){
  alert('Nama saya '+a+', umur saya '+b+' alamat saya di '+c+' dan saya punya hobi yaitu '+d);
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);
