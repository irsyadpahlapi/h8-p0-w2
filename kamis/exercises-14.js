function dataHandling2(data){
  data.splice(1, 4, "Roman Alamsyah Elsharawy","Provinsi Bandar Lampung","21/05/1989","Pria","SMA Internasional Metro");
  var tanggal = data[3].split("/");
  var tanggalformat = tanggal[0]+'-'+tanggal[1]+'-'+tanggal[2];
  tanggal.sort(function(value1, value2) { return Number(value1) < Number(value2) });
  switch(tanggal[2]){
    case '01':{
      var bulan='januari';
      break;
    }
    case '02':{
      var bulan='febuari';
      break;
    }
    case '03':{
      var bulan='maret';
      break;
    }
    case '04':{
      var bulan='april';
      break;
    }
    case '05':{
      var bulan='mei';
      break;
    }
    case '06':{
      var bulan='juni';
      break;
    }
    case '07':{
      var bulan='juli';
      break;
    }
    case '08':{
      var bulan='agustus';
      break;
    }
    case '09':{
      var bulan='september';
      break;
    }
    case '10':{
      var bulan='oktober';
      break;
    }
    case '11':{
      var bulan='november';
      break;
    }
    case '12':{
      var bulan='desember';
      break;
    }
  }
  console.log(data);
  console.log(bulan);
  console.log(tanggal);
  console.log(tanggalformat);
  console.log(data[1]);

}


var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
