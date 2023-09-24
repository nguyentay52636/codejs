//kiem tra rong
function KiemTraRong(value, idCanhBao, mess) {
  var domTheSpan = document.getElementById(idCanhBao);
  if (value == "") {
    domTheSpan.innerHTML = mess;
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
    return false;
  } else if (!/^[A-Za-z]+$/.test(value)) {
    domTheSpan.innerHTML = mess1;
    return false;
  } else {
    domTheSpan.innerHTML = "";
    return true;
  }
}
//kiem tra ki tu
function kiemTraDoDaiKyTu(value, min, max, idCanhBao, mess) {
  var domTheSpan = document.getElementById(idCanhBao);
  if (value.length < min || value.length > max) {
    domTheSpan.innerHTML = mess;
    return false;
  } else {
    domTheSpan.innerHTML = "";
    return true;
  }
}
//test email
function KiemTraEmail(email, idCanhBao, mess) {
  var domTheSpan = document.getElementById(idCanhBao);
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var isValid = regexEmail.match(email);
  if (isValid) {
    domTheSpan.innerHTML = "";
    return false;
  } else {
    domTheSpan.innerHTML = mess;
    return true;
  }
}
function SoGioLam(value, min, max, idCanhBao, mess) {
  var domTheSpan = document.getElementById(idCanhBao);
  if (value.length < min || value.length > max) {
    domTheSpan.innerHTML = mess;
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
    domSelect.innerHTML = mess;
    return false;
  } else {
    domTheSpan.innerHTML = "";
    return true;
  }
}
function Luong(value, min, max, idCanhBao, mess) {
  var domTheSpan = document.getElementById(idCanhBao);
  if (value.length < min || value.length > max) {
    domTheSpan.innerHTML = mess;
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
  } else if (!/[0-9]/.test(value)) {
    domTheSpan.innerHTML = "Mật khẩu phải chứa ít nhất 1 ký tự số";
  } else if (!/[A-Z]/.test(value)) {
    domTheSpan.innerHTML = "Mật khẩu phải chứa ít nhất 1 ký tự in hoa";
  } else if (!/[^A-Za-z0-9]/.test(value)) {
    domTheSpan.innerHTML = "Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt";
    return false;
  } else {
    domTheSpan.innerHTML = "";
    return true;
  }
}
