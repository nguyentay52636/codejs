//kiem tra rong
function KiemTraRong(value, idCanhBao, mess, mess1) {
  var domTheSpan = document.getElementById(idCanhBao);
  if (value == "") {
    domTheSpan.innerHTML = mess;
    domTheSpan.style.display = "block";
    return false;
  } else if (value == "") {
    domTheSpan.innerHTML = mess1;
    domTheSpan.style.display = "block";
    return false;
  } else {
    domTheSpan.innerHTML = "";
    return true;
  }
}
//kiem tra ten
function KiemTraTen(value, idCanhBao, mess1, mess) {
  var domTheSpan = document.getElementById(idCanhBao);
  if (value == "") {
    domTheSpan.innerHTML = mess;
    domTheSpan.style.display = "block";
    return false;
  } else if (!/^[A-Za-z]+$/.test(value)) {
    domTheSpan.innerHTML = mess1;
    domTheSpan.style.display = "block";

    return false;
  } else {
    domTheSpan.innerHTML = "";
    return true;
  }
}
// function KiemTraTaiKhoan(value, idCanhBao, mess) {
//   var domTheSpan = document.getElementById(idCanhBao);
//   if (value == "") {
//     domTheSpan.innerHTML = mess;
//     domTheSpan.style.display = "block";
//     return false;
//   } else {
//     domTheSpan.innerHTML = "";
//   }
// }
//kiem tra ki tu
function kiemTraTaiKhoan(value, min, max, idCanhBao, mess, mess1) {
  var domTheSpan = document.getElementById(idCanhBao);
  if (value.length < min || value.length > max) {
    domTheSpan.innerHTML = mess;
    domTheSpan.style.display = "block";
    return false;
  } else if (value == "") {
    domTheSpan.innerHTML = mess1;
    domTheSpan.style.display = "block";
    return false;
  } else {
    domTheSpan.innerHTML = "";
    return true;
  }
}
//test email
function KiemTraEmail(email, idCanhBao, mess, mess1) {
  var domTheSpan = document.getElementById(idCanhBao);
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var isValid = regexEmail.test(email);
  if (isValid) {
    domTheSpan.innerHTML = "";
    return true;
  } else {
    domTheSpan.innerHTML = mess;
    domTheSpan.style.display = "block";
  }
  if (email == "") {
    domTheSpan.innerHTML = mess1;
    domTheSpan.style.display = "block";
    return false;
  }
}
//datepicker
//check date
function KiemTraDate(value, idCanhBao, mess) {
  var domTheSpan = document.getElementById(idCanhBao);
  if (value == "") {
    domTheSpan.innerHTML = mess;
    domTheSpan.style.display = "block";
    return false;
  } else {
    domTheSdom.innerHTML = "";
    return true;
  }
}
function SoGioLam(value, min, max, idCanhBao, mess, mess1) {
  var domTheSpan = document.getElementById(idCanhBao);
  if (value === "") {
    domTheSpan.innerHTML = mess;
    domTheSpan.style.display = "block";
    return false;
  } else if (value < min || value > max) {
    domTheSpan.innerHTML = mess1;
    return false;
  } else {
    domTheSpan.innerHTML = "";
    return true;
  }
}

// kiem tra khao tac nguoi dung
function ChonChucVu(idSelect, idCanhBao, mess) {
  var domTheSpan = document.getElementById(idCanhBao);
  var domSelect = document.getElementById(idSelect).selectedIndex;
  if (domSelect == 0) {
    domTheSpan.innerHTML = mess;
    domTheSpan.style.display = "block";
    return false;
  } else {
    domTheSpan.innerHTML = "";
    return true;
  }
}
function Luong(value, min, max, idCanhBao, mess, mess1) {
  var domTheSpan = document.getElementById(idCanhBao);
  if (value === "") {
    domTheSpan.innerHTML = mess1;
    domTheSpan.style.display = "block";
    return false;
  } //else if (value.length < min || value.length > max)
  else if (value < min || value > max) {
    // Lương thì lấy value của nó so sánh với min max chứ lấy length ăn cc à :)))
    domTheSpan.innerHTML = mess;
    domTheSpan.style.display = "block";
    return false;
  } else {
    domTheSpan.innerHTML = "";
    return true;
  }
}

function kiemTraPassword(value, idCanhBao) {
  var domTheSpan = document.getElementById(idCanhBao);
  if (value.length < 6 || value.length > 10) {
    domTheSpan.innerHTML = "Mật khẩu phải từ 6-10 ký tự";
    domTheSpan.style.display = "block";
  } else if (!/[0-9]/.test(value)) {
    domTheSpan.innerHTML = "Mật khẩu phải chứa ít nhất 1 ký tự số";
    domTheSpan.style.display = "block";
  } else if (!/[A-Z]/.test(value)) {
    domTheSpan.innerHTML = "Mật khẩu phải chứa ít nhất 1 ký tự in hoa";
    domTheSpan.style.display = "block";
  } else if (!/[^A-Za-z0-9]/.test(value)) {
    domTheSpan.innerHTML = "Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt";
    domTheSpan.style.display = "block";
    return false;
  } else if ((value = "")) {
    domTheSpan.innerHTML = "Vui lòng không để trống ";
    return false;
  } else {
    domTheSpan.innerHTML = "";
    return true;
  }
}
