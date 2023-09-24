function Dsnhanvien() {
  this.arr = [];
  this.addNV = function (nv) {
    this.arr.push(nv);
  };

  this.timNVByTaiKhoan = function (taikhoan) {
    var index = this.timViTriNV(taikhoan);
    return this.arr[index];
  };
  // tim vi tri
  this.timViTriNV = function (taikhoan) {
    var index = -1;
    for (var i = 0; i < this.arr.length; i++) {
      var nv = this.arr[i];
      console.log(nv.taikhoan, taikhoan);
      if (taikhoan === nv.taikhoan) {
        index = i;
        break;
      }
    }
    return index;
  };
  // delete :
  this.DeleteNV = function (taikhoan) {
    var index = this.timViTriNV(taikhoan);

    if (index !== -1) {
      this.arr.splice(index, 1);
      console.log(index);
    }
  };
  this.capnhapNV = function (nv) {
    var index = this.timViTriNV(nv.taikhoan);
    this.arr[index] = nv;
  };
  //tim nhan vien
  this.SearchNV = function (keyword) {
    var mangTimkKiem = [];

    for (var i = 0; i < this.arr.length; i++) {
      var nv = this.arr[i];
      var keywordLowerCase = keyword.toLowerCase();
      //
      var LoaiWordLowerCase = nv.loainv.toLowerCase();
      if (LoaiWordLowerCase.indexOf(keywordLowerCase) !== -1) {
        mangTimkKiem.push(nv);
      }
    }
    return mangTimkKiem;
  };
}
