function Nhanvien(
  taikhoan,
  hoten,
  email,
  matkhau,
  ngaylam,
  luongcoban,
  chucvu,
  tglam,
  loainv
) {
  this.taikhoan = taikhoan;
  this.hoten = hoten;
  this.email = email;
  this.matkhau = matkhau;
  this.ngaylam = ngaylam;
  this.luongcoban = luongcoban;
  this.chucvu = chucvu;
  this.tglam = tglam;
  this.loainv = loainv;
  this.tongLuong = 0;
  this.tinhTongLuong = function () {
    if (this.chucvu === "Sếp") {
      this.tongLuong = this.luongcoban * 3;
    } else if (this.chucvu === "Trưởng phòng") {
      this.tongLuong = this.luongcoban * 2;
    } else if (this.chucvu === "Nhân viên") {
      this.tongLuong = this.luongcoban * 1;
    } else {
      this.tongLuong = 0;
    }
  };
  this.xeploai = function () {
    if (this.tglam >= 192) {
      this.loainv = ` Nhân viên Xuất sắc `;
    } else if (this.tglam < 192 && this.tglam >= 176) {
      this.loainv = ` Nhân viên giỏi `;
    } else if (this.tglam >= 160 && this.tglam < 176) {
      this.loainv = `Nhân viên khá `;
    } else {
      this.loainv = `Nhân viên trung bình `;
    }
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
