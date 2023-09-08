//  Bai 1 :
//  diemtongket = diem3mon + diemuutien ;
//  diemuutien = diemkv + diemdoituong ;
// input : diemchuan , diem1 , diem2 ,diem3 , diemkhuvuc , điemdoituong
// xử lí
// diemtong = ( diem1 + diem2 +diem + diemkhuvuc + diemdoituong) ;
// if ( diemtong > diemchuan) then  => đậu  ;
// else  rớt
// if(diem1 == 0 && diem2 == 0 && diem3 == 0 .) then =>> rớt
// output : ketqua: đậu , rớt
// function innoidung(id,noidung) {
//     document.getElementById('id').innerHTML = noidung ;
//     document.getElementById(id).style.fontSize = '30px' ;

document.getElementById("btntinhdiem").onclick = function () {
  var diemchuan = parseFloat(document.getElementById("diemchuan").value);
  var diem1 = Number(document.getElementById("diem1").value);
  var diem2 = Number(document.getElementById("diem2").value);
  var diem3 = Number(document.getElementById("diem3").value);
  var khuvuc = Number(document.getElementById("khuvuc").value);
  var doituong = Number(document.getElementById("doituong").value);
  var diemtong = parseFloat(diem1 + diem2 + diem3 + khuvuc + doituong);
  if (diemtong < diemchuan) {
    document.getElementById("choraketqua").innerHTML =
      "bạn đã rớt do thiếu điểm" + "điểm của bạn là : " + diemtong;
  } else {
    document.getElementById("choraketqua").innerHTML =
      "bạn đã đậu. tổng diểm" + diemtong;
  }
  if (diem1 == 0 || diem2 == 0 || diem3 == 0) {
    document.getElementById("choraketqua").innerHTML =
      "bạn đã rớt do có điểm nhỏ hơn không ";
  }
};

//bai2
// Phân tích :
// input : +hoten , sokwh , sotien = 0 ;
// xử lí  : if( sokwn < 50) then tien = sokwh*500 ;

document.getElementById("btntinhtiendien").onclick = function () {
  var hoten = document.getElementById("hoten").value;
  var sokwh = Number(document.getElementById("sokwh").value);
  var tien = 0;
  if (sokwh < 50) {
    //  var dem1 = (sokwh - 50)*500 ;
    tien = parseFloat(sokwh * 500);
    document.getElementById("tiendienla").innerHTML = hoten + ","+"Tiền điện :" + tien;
  } else if (sokwh >= 50 && sokwh <= 100) {
    var dem2 = (sokwh - 50) * 650;
    tien = parseFloat(50 * 500) + dem2;
    document.getElementById("tiendienla").innerHTML = hoten + "," + tien;
  } else if (sokwh > 100 && sokwh <= 200) {
    var dem3 = (sokwh - 50) * 850;
    tien = parseFloat(50 * 500) + dem3;
    document.getElementById("tiendienla").innerHTML = hoten + "," + tien;
  } else if (sokwh > 200 && sokwh <= 350) {
    var dem4 = (sokwh - 50) * 1100;
    tien = parseFloat(50 * 500) + dem4;
    document.getElementById("tiendienla").innerHTML = hoten + "," + tien;
  } else {
    document.getElementById("tiendienla").innerHTML = "Nhap lai ! ";
  }
  if (sokwh >= 350) {
    var dem5 = (sokwh - 50) * 1300;
    tien = parseFloat(50 * 500) + dem5;
    document.getElementById("tiendienla").innerHTML = hoten + "," + tien;
  }
};
//bai3:
// input  e = hoten , so_thue= tongthunhapnam -(4e+6) -(16e+5)*songuoiphuthuoc ;  , t = 0 ;
// xuli : if   0 < sothue <=6e7 ==>  t= 0.05*sothue
//             6e7 < sothue <=12e7 t= 0.1*sothue
//             12e7 < sothue <=21e7   t= 0.15*sothue
//             21e7 < sothue <384e6 t= 0.2*sothue
//             384e6 < sothue <= 624e6 t=0.25*sothue
//             624e6 < sothue < 96e7 t=0.3*sothue
//               sothue >96e7    t= 0.4*sothue
// ouput : t = ?

function thuethunhap() {
  //in
  var e = document.getElementById("hoten1").value;
  var n =
    Number(document.getElementById("thunhapnam").value) -
    4e6 -
    16e5 * Number(document.getElementById("songuoiphuthuoc").value);
  //xuli
  var t = 0;

  if (n > 0 && n <= 6e7) {
    t = 0.05 * n;
  } else if (n > 6e7 && n <= 12e7) {
    t = 0.1 * n;
  } else if (n > 12e7 && n <= 21e7) {
    t = 0.15 * n;
  } else if (n > 21e7 && n <= 384e6) {
    t = 0.2 * n;
  } else if (n > 384e6 && n <= 624e6) {
    t = 0.25 * n;
  } else if (n > 624e6 && n <= 96e7) {
    t = 0.3 * n;
  } else if (n > 96e7) {
    t = 0.35 * n;
  } else {
    alert("Số tiền thu nhập không hợp lệ");
    return;
  }

  var formattedTien = new Intl.NumberFormat("vn-VN").format(t);
  //output
  document.getElementById("tienthuela").innerHTML =
    "Họ tên: " + e + "; Tiền thuế thu nhập cá nhân: " + formattedTien + " VND";
}

//bai 4;
// xử lí onchange  soketnoi
function luachon() {
  const chonkhachang = document.getElementById("chonkhachhang").value;
  const soketnoi = document.getElementById("soketnoi");

  switch (chonkhachang) {
    case "doanhnghiep":
      soketnoi.style.display = "block";
      break;
    default:
      soketnoi.style.display = "none";
      break;
  }
}

function Tinhtien() {
  // input :
  const chonkhachhang = document.getElementById("chonkhachhang").value;
  const soketnoi = parseInt(document.getElementById("soketnoi").value);
  const makhachhang = document.getElementById("makhachhang").value;
  const sokenhcaocap = parseInt(document.getElementById("sokenhcaocap").value);
  //xuli :
  let tinhtien = 0;
  if (chonkhachhang == "nhadan") {
    tinhtien = 4.5 + 20.5 + sokenhcaocap * 7.5;
  } else if (chonkhachhang == "doanhnghiep") {
    tinhtien =
      15 + 75 + (soketnoi > 10 ? (soketnoi - 10) * 5 : 0) + sokenhcaocap * 50;
  }
  //output:
  document.getElementById(
    "tinhtiencap"
  ).innerHTML = `Hóa đơn cho khách hàng mã ${makhachhang}: ${tinhtien}$`;
  //  document.querySelector(".alert").style.display = 'block' ;
  // }
}
