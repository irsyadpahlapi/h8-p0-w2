var tanggal = 21;
var bulan = 1;
var tahun = 1945;

if(tanggal<1 && tanggal>30){
  console.log('Maaf tanggal yang anda masukan salah')
}
if(bulan<1 && bulan>12){
  console.log('Maaf bulan yang anda masukan salah')
}

switch(bulan){
    case 1:{console.log(tanggal +' januari '+tahun);
            break;
    }
    case 2:{console.log(tanggal+' febuari '+tahun);
            break;
    }
    case 3:{console.log(tanggal+' maret '+tahun);
            break;
    }
    case 4:{console.log(tanggal+' april '+tahun);
            break;
    }
    case 5:{console.log(tanggal+' mei '+tahun);
            break;
    }
    case 6:{console.log(tanggal+' juni '+tahun);
            break;
    }
    case 7:{console.log(tanggal+' juli '+tahun);
            break;
    }
    case 8:{console.log(tanggal+' agustus '+tahun);
            break;
    }
    case 9:{console.log(tanggal+' september '+tahun);
            break;
    }
    case 10:{console.log(tanggal+' oktober '+tahun);
            break;
    }
    case 11:{console.log(tanggal+' november '+tahun);
            break;
    }
    case 12:{console.log(tanggal+' desember '+tahun);
            break;
    }
  }
