function validate() {
  let isValid = true;
  let account = document.getElementById("tknv").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let dateOfWork = document.getElementById("datepicker").value;
  let salary = document.getElementById("luongCB").value;
  let competence = document.getElementById("chucvu").value;
  let timeWork = document.getElementById("gioLam").value;

  // kiểm tra account
  if (!account.trim()) {
    isValid = false;
    document.querySelector("#tbTKNV").innerHTML = `không được để trống`;
    document.querySelector("#tbTKNV").style.display = "block";
  } else if (!/^[0-9]{4,6}$/.test(account)) {
    isValid = false;
    document.querySelector("#tbTKNV").innerHTML = `không hợp lệ`;
    document.querySelector("#tbTKNV").style.display = "block";
  }

  // kiểm tra họ và tên
  if (!name.trim()) {
    isValid = false;
    document.querySelector("#tbTen").innerHTML = `không được để trống`;
    document.querySelector("#tbTen").style.display = "block";
  } else if (!/^[a-zA-Z\s]{1,}$/.test(name)) {
    isValid = false;
    document.querySelector("#tbTen").innerHTML = `không hợp lệ`;
    document.querySelector("#tbTen").style.display = "block";
  }
  // kiểm tra email
  if (!email.trim()) {
    isValid = false;
    document.querySelector("#tbEmail").innerHTML = `không được để trống`;
    document.querySelector("#tbEmail").style.display = "block";
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    isValid = false;
    document.querySelector("#tbEmail").innerHTML = `không hợp lệ`;
    document.querySelector("#tbEmail").style.display = "block";
  }
  // kiểm tra mật khẩu
  if (!password.trim()) {
    isValid = false;
    document.querySelector("#tbMatKhau").innerHTML = `không được để trống`;
    document.querySelector("#tbMatKhau").style.display = "block";
  } else if (
    !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,10}$/.test(
      password
    )
  ) {
    isValid = false;
    document.querySelector("#tbMatKhau").innerHTML = `không hợp lệ`;
    document.querySelector("#tbMatKhau").style.display = "block";
  }
  // kiểm tra ngày
  if (!dateOfWork.trim()) {
    isValid = false;
    document.querySelector("#tbNgay").innerHTML = `không được để trống`;
    document.querySelector("#tbNgay").style.display = "block";
  } else if (!/(\d{1,2})\/(\d{1,12})\/(\d{4})/.test(dateOfWork)) {
    isValid = false;
    document.querySelector("#tbNgay").innerHTML = `không đúng định dạng`;
    document.querySelector("#tbNgay").style.display = "block";
  }
  // kiểm tra lương CB
  if (!salary.trim()) {
    isValid = false;
    document.querySelector("#tbLuongCB").innerHTML = `không được để trống`;
    document.querySelector("#tbLuongCB").style.display = "block";
  } else {
    if (parseInt(salary) < 1000000 || parseInt(salary) > 20000000) {
      isValid = false;
      document.querySelector("#tbLuongCB").innerHTML = `không hợp lệ`;
      document.querySelector("#tbLuongCB").style.display = "block";
    }
  }
  // kiểm tra chức vụ
  if (!competence.trim()) {
    isValid = false;
    document.querySelector("#tbChucVu").innerHTML = `không được để trống`;
    document.querySelector("#tbChucVu").style.display = "block";
  } else {
    if (competence === "Chọn chức vụ") {
      isValid = false;
      document.querySelector("#tbChucVu").innerHTML = `chọn chức vụ`;
      document.querySelector("#tbChucVu").style.display = "block";
    }
  }
  // kiểm tra giờ làm
  if (!timeWork.trim()) {
    isValid = false;
    document.querySelector("#tbGiolam").innerHTML = `không được để trống`;
    document.querySelector("#tbGiolam").style.display = "block";
  } else {
    if (parseInt(timeWork) < 80 || parseInt(timeWork) > 200) {
      isValid = false;
      document.querySelector("#tbGiolam").innerHTML = `không hợp lệ`;
      document.querySelector("#tbGiolam").style.display = "block";
    }
  }
  return isValid;
}
