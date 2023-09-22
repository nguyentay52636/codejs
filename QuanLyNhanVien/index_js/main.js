document.getElementById("btnThemNV").onclick = function information() {
  var tk = document.getElementById("tknv").value;
  var ten = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var datepicker = document.getElementById("datepicker").value;
  var luongCB = document.getElementById("luongCB").value;
  var chucvu = document.getElementById("chucvu").value;
  var gioLam = document.getElementById("gioLam").value;
  var domspan = document.getElementById("");
  if (_.isEmpty(tk)) {
    tk = "";
  }
};
var nhanvien = new nhanvien(
  tk,
  ten,
  email,
  password,
  datepicker,
  luongCB,
  chucvu,
  gioLam
);

var danhsachnhanvien = new Dsnhanvien();
function themnhanvien() {
  var nv = information();
}
function renderList(arr) {
  var table = document.querySelector(".text-primary");
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    content += `<tr>
    <td>${arr[i].tk}</td>
    <td>${arr[i].tk}</td>
    <td>${arr[i].tk}</td>
    <td>${arr[i].tk}</td>
    <td>${arr[i].tk}</td>
    <td>${arr[i].tk}</td>
    <td>${arr[i].tk}</td>
    </tr>`;
    table.innerHTML = content;
  }
}
