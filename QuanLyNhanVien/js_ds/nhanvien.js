function Nhanvien(
  taikhoan,
  hoten,
  email,
  ngaylam,
  luongcoban,
  chucvu,
  tglam,
  loainv,
  luongcoban
) {
  this.taikhoan = taikhoan;
  this.hoten = hoten;
  this.email = email;
  this.ngaylam = ngaylam;
  this.luongcoban = luongcoban;
  this.chucvu = chucvu;
  this.tglam = tglam;
  this.loainv = loainv;
  this.luongcoban = 0;
  this.luongCB = function () {
    // this.luongcoban = () ;
  };
}

/*ối tượng nhân viên bao gồm các thuộc tính sau:
+Tài khoản
+Họ tên
+Email
+Mật khẩu
+Ngày làm
+Lương cơ bản
+Chức vụ gồm: Giám đốc, Trưởng Phòng, Nhân Viên
+Giờ làm trong tháng
+Tổng lương
+Loại nhân viên*/
