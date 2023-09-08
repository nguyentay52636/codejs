var arrays = [];

var number1;
var number2;
function themso() {
  var number = document.getElementById("txtNumber").value * 1;
  arrays[arrays.length] = number;
  document.getElementById("inra").innerHTML = arrays;
}

function bai1() {
  // var arrays = new Array ;
  var tong = 0;
  for (var i = 0; i < arrays.length; i++) {
    if (arrays[i] > 0) {
      tong += arrays[i];
    }
  }
}
themso();
/*
//bai2 dem so nguyen duong trong mang
function bai2(arrays) {
  // var arrays = new Array ;
  var dem = 0;
  for (var i = 0; i < arrays.length; i++) {
    if (arrays[i] > 0) {
      dem++;
    }
  }
  return dem;
}

//tim min mang
function checkmin() {
  // var arrays = new Array ;
  var min_value = arrays[0];
  for (var i = 0; i < arrays.length; i++) {
    if (arrays[i] < min_value) {
      min_value = arrays[i];
    }
  }
  return min_value;
}

//bai 4 : tim so duong nho nhat
function checkmin1() {
  var min_value = arrays[0];
  for (var i = 0; i < arrays.length; i++) {
    if (arrays[i] > 0) {
      if (arrays[i] < min_value) {
        min_value = arrays[i];
      }
    }
  }
  return min_value;
}
//bai5 Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
function bai5() {
  var last_even = -1;
  for (var i = arrays.length - 1; i >= 0; i--) {
    if (arrays[i] % 2 == 0) {
      last_even = arrays[i];
      break;
    }
  }
  return last_even;
}

//bai 6
function bai6() {
  if (
    number1 >= 0 ||
    number >= arrays.length ||
    number2 < 0 ||
    number2 >= arrays.length
  ) {
    alert("error! ");
  }
  var tmp = arrays[number1];
  arrays[number1] = arrays[number2];
  arrays[number2] = tmp;
}
const number1 = parseInt(prompt("input number 1 : "));
const number2 = parseInt(prompt("input number 2 : "));
bai6(arrays, number1, number2);

//bai 7
function bai7() {
  var n = arrays.length;
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n - 1; j++) {
      if (arrays[i] > arrays[j]) {
        var tmp = arrays[i];
        arrays[i] = arrays[j];
        arrays[j] = tmp;
      }
    }
  }
}

//bai8
function isprime() {
  if (number < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}
function bai8() {
  for (var i = 0; i < arrays.length; i++) {
    if (arrays[i] < arrays[i + 1] || arrays[isprime]) {
      arrays[i + 1] = arrays[i];
      return true;
    }
  }
  return -1;
}
//bai 9: Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
function count_interger() {
  var count = 0;
  var n = arrays.length;
  for (var i = 0; i < n; i++) {
    if (Number.isInteger(arrays)) {
      count++;
    }
  }
  return count;
}

//bai 10. So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
function count_soduong() {
  var count_duong = 0;

  for (var i = 0; i < arrays.length; i++) {
    if (arrays[i] > 0) {
      count_duong++;
    }
  }
  return count_duong;
}
function count_soam() {
  var count_am = 0;
  for (var i = 0; i < arrays.length; i++) {
    if (arrays[i] < 0) {
      count_am++;
    }
  }
  return count_am;
}
function bai10() {
  let dem1 = count_soduong(arrays);
  let dem2 = count_soam(arrays);
  if (dem1 > dem2) {
    console.log("so duong nhieu hon so am ");
  } else if (dem2 < dem1) {
    console.log("so am nhieu hon so duong ");
  } else {
    console.log("2 so bang nhau ");
  }
}
// function themso() ;
*/
