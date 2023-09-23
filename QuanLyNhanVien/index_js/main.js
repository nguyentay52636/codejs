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
  console.log(danhsachnhanvien.arr);
  if (nhanvien) {
    danhsachnhanvien.addNV(nhanvien);
    renderList(danhsachnhanvien.arr);
    console.log(danhsachnhanvien.arr);
    setLocalStorage();
  }
}
function renderList(arr) {
  /**
   *
   * luca = [
   *    {hoten:'phu',...}
   *  {hoten:'phu',...}
   *  {hoten:'phu',...}
   * ]
   *
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
    <td> <button class="btn btn-info">Delete</button> <td>
    </tr>`;
    table.innerHTML = content;
  }
}
//delete nhan vien

//CocalStorage ;

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
