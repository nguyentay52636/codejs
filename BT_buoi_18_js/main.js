var arrays = [];
var number;
var number1;
var number2;
function themso() {
  number = document.getElementById("txtNumber").value * 1;
  arrays[arrays.length] = number;
  document.getElementById("inra").innerHTML = arrays;
}

document.getElementById("tinhtongduong").onclick = function () {
  // var arrays = new Array ;
  var tong = 0;
  for (var i = 0; i < arrays.length; i++) {
    if (arrays[i] > 0) {
      tong += arrays[i];
    }
  }
  document.querySelector("span").innerHTML = tong;
};

//bai2 dem so nguyen duong trong mang
function bai2() {
  // var arrays = new Array ;
  var dem = 0;
  for (var i = 0; i < arrays.length; i++) {
    if (arrays[i] > 0) {
      dem++;
    }
  }
  document.getElementById("demsoduong").innerHTML = dem;
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
  document.getElementById("sonhonhat").innerHTML = min_value;
}

//bai 4 : tim so duong nho nhat
function checkmin11() {
  var min_value1 = arrays[0];
  for (var i = 0; i < arrays.length; i++) {
    if (arrays[i] > 0) {
      if (arrays[i] < min_value1) {
        min_value1 = arrays[i];
      }
    }
  }
  document.getElementById("soduongmin").innerHTML = min_value1;
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
  document.getElementById("sochancuoi").innerHTML = last_even;
}
/*
//bai 6
function bai6() {
  if (
    number1 >= 0 || number >= arrays.length ||  number2 < 0 || number2 >= arrays.length) {
    alert("error! ");
  }
  var tmp = arrays[number1];
  arrays[number1] = arrays[number2];
  arrays[number2] = tmp;
}
const number1 = parseInt(prompt("input number 1 : "));
const number2 = parseInt(prompt("input number 2 : "));
bai6(arrays, number1, number2);
*/
//bai 7
function bai7() {
  var n = arrays.length;
  for (var i = 0; i < n - 1; i++) {
    for (var j = i + 1; j < n; j++) {
      if (arrays[i] > arrays[j]) {
        var tmp = arrays[i];
        arrays[i] = arrays[j];
        arrays[j] = tmp;
      }
    }
  }
  var result = "Mảng sau khi sắp xếp là : " + arrays;

  document.getElementById("sapxepmang").innerHTML = result;
}

//bai8

// function bai8() {
//   for (var i = 0; i < arrays.length; i++) {
//     if (arrays[i] < arrays[i + 1] || arrays[isprime]) {
//       arrays[i + 1] = arrays[i];
//       return true;
//     }
//   }
//   return -1;
// }
function bai8() {
  if (arrays.length === 0) {
    alert("vui lòng nhập giá trị cho mảng ! ");
    return;
  }
  var first_isprime = null;
  for (var i = 0; i < arrays.length; i++) {
    if (isprime(arrays[i])) {
      if (first_isprime === null || arrays[i] < first_isprime) {
      }
    }
  }
  if (first_isprime === null) {
    alert(" Không có số nguyên tố nào trong mảng ! ");
  } else {
    var result = "Số nguyên tố đầu tiên là : " + first_isprime;
    document.getElementById("ktsont").innerHTML = result;
  }
}
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

//bai 9: Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
function count_interger() {
  var count = 0;
  var n = arrays.length;
  for (var i = 0; i < n; i++) {
    if (Number.isInteger(arrays[i])) {
      count++;
    }
  }
  document.getElementById("demsonguyen").innerHTML = count;
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
  if (arrays.length === 0) {
    alert("vui lòng nhập giá trị cho mảng ! ");
    return;
  }
  var dem1 = count_soduong(arrays);
  var dem2 = count_soam(arrays);
  if (dem1 > dem2) {
    document.getElementById("sosanh").innerHTML = "Số âm" + "<" + "Số dương";
  } else {
    document.getElementById("sosanh").innerHTML = "Số dương" + "<" + "Số âm";
  }
  if (dem1 === dem2) {
    document.getElementById("sosanh").innerHTML = "Số âm " + "=" + "Số dương ";
  }
}
// function themso() ;
