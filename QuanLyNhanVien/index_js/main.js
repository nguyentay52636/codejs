var danhsachnhanvien = new Dsnhanvien();
getLocalStorage();
function information() {
  var taikhoan = document.getElementById("tknv").value;
  var hoten = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var matkhau = document.getElementById("password").value;
  var ngaylam = document.getElementById("datepicker").value;
  var luongcoban = document.getElementById("luongCB").value;
  var chucvu = document.getElementById("chucvu").value;
  var tglam = document.getElementById("gioLam").value;
  var isValid = true;
  //test
  isValid &= KiemTraTen(
    hoten,
    "tbTen",
    "Tên phải là chữ ",
    "Vui lòng không bỏ trống"
  );
  // KiemTraRong(taikhoan, "tbTKNV", "Vui lòng không bỏ trống ");
  isValid &= KiemTraEmail(
    email,
    "tbEmail",
    "Email không đúng định dạng",
    "Vui lòng không bỏ trống"
  );
  //isValid &= KiemTraTaiKhoan(taikhoan, "tbTKNV", "Vui lòng không bỏ trống ");
  // isValid &= KiemTraRong(
  //   taikhoan,
  //   "tbTKNV",
  //   "Vui lòng không bỏ trống",
  //   "Vui lòng nhập từ 4 đến 6 ký tự"
  // );
  isValid &= kiemTraDoDaiKyTu(
    taikhoan,
    4,
    6,
    "tbTKNV",
    "Vui lòng nhập từ 4 đến 6 ký tự",
    "Vui lòng không bỏ trống"
  );
  ("Số giờ làm trong tháng 80 - 200 giờ");
  // isValid &= KiemTraRong(taikhoan, "tbTKNV", "Vui lòng không bỏ trống ");
  isValid &= SoGioLam(
    tglam,
    80,
    200,
    "tbGiolam",
    "Vui lòng không bỏ trống",
    "Số giờ làm trong tháng 80 - 200 giờ"
  );
  isValid &= ChonChucVu("chucvu", "tbChucVu", "Vui lòng không bỏ trống");
  isValid &= Luong(
    luongcoban,
    1000000,
    20000000,
    "tbLuongCB",
    "Vui lòng không bỏ trống",
    "Lương ít nhất là 1triệu và lớn nhất là 20 triệu "
  );
  isValid &= kiemTraPassword(matkhau, "tbMatKhau");
  //kiemTraPassword(matkhau, "tbMatKhau");
  if (!isValid) {
    return null;
  }
  var nhanvien = new Nhanvien(
    taikhoan,
    hoten,
    email,
    matkhau,
    ngaylam,
    luongcoban,
    chucvu,
    tglam
  );
  nhanvien.tinhTongLuong();
  nhanvien.xeploai();
  return nhanvien;
}

function themnhanvien() {
  var nhanvien = information();
  if (nhanvien) {
    danhsachnhanvien.addNV(nhanvien);
    renderList(danhsachnhanvien.arr);

    setLocalStorage();
  }
}
function renderList(arr) {
  /**
   */
  var table = document.getElementById("tableDanhSach");
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    nhanvien = arr[i];
    content += `<tr>
    <td>${arr[i].taikhoan}</td>
    <td>${arr[i].hoten}</td>
    <td>${arr[i].email}</td>
    <td>${arr[i].ngaylam}</td>
    <td>${arr[i].chucvu}</td>
    <td>${arr[i].tongLuong}</td>
    <td>${arr[i].loainv}</td>
    <td> <button class="btn btn-danger" onclick="XoaNV('${arr[i].taikhoan}')">Delete</button> <td>

    <button class="btn btn-info" data-toggle="modal"
    data-target="#myModal" onclick="SuaNV('${arr[i].taikhoan}')">Edit</button>
    </tr>`;
    table.innerHTML = content;
  }
}

/* */
//delete nhan vien
function XoaNV(taikhoan) {
  danhsachnhanvien.DeleteNV(taikhoan);
  renderList(danhsachnhanvien.arr);
  console.log(danhsachnhanvien.arr);
  setLocalStorage();
}
// sua
function SuaNV(taikhoan) {
  var nv = danhsachnhanvien.timNVByTaiKhoan(taikhoan);
  document.getElementById("tknv").value = nv.taikhoan;
  document.getElementById("tknv").disabled = "true";
  document.getElementById("name").value = nv.hoten;
  document.getElementById("email").value = nv.email;
  document.getElementById("password").value = nv.matkhau;
  document.getElementById("datepicker").value = nv.ngaylam;
  document.getElementById("luongCB").value = nv.luongcoban;
  document.getElementById("chucvu").value = nv.chucvu;
  document.getElementById("gioLam").value = nv.tglam;
}
//CocalStorage ;
function UpdateNV() {
  var nv = information();
  danhsachnhanvien.capnhapNV(nv);
  renderList(danhsachnhanvien.arr);
  setLocalStorage();
  document.getElementById("btnDong").click();
}
//search NV  :

document.getElementById("searchName").addEventListener("keyup", function () {
  var keyword = document.getElementById("searchName").value;

  var mangtimkiem = danhsachnhanvien.SearchNV(keyword);
  console.log(mangtimkiem);
  renderList(mangtimkiem);
});

function setLocalStorage() {
  var dataString = JSON.stringify(danhsachnhanvien.arr);
  localStorage.setItem("DSNV", dataString);
}
function getLocalStorage() {
  if (localStorage.getItem("DSNV")) {
    var dataString = localStorage.getItem("DSNV"); // 4
    var dataJson = JSON.parse(dataString);
    danhsachnhanvien.arr = dataJson;
    renderList(danhsachnhanvien.arr);
  }
}
