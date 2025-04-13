let users = JSON.parse(localStorage.getItem("users"));
let email = document.querySelector(`#email`);
let password = document.querySelector(`#password`);
let errorEmail = document.querySelector(`#errorEmail`);
let errorPass = document.querySelector(`#errorPass`);
let signin = document.querySelector(`#signin`);
function validateData() {
  let result = true;
  let emailValue = email.value;
  let passwordValue = password.value;
  if (emailValue === "") {
    errorEmail.innerHTML = "Email khong đuoc bỏ trống";
    result = false;
  } else {
    errorEmail.innerHTML = "";
  }
  if (passwordValue === "") {
    errorPass.innerHTML = " Password khong đuoc bỏ trống";
    result = false;
  } else {
    errorPass.innerHTML = "";
  }
  return result;
}
signin.addEventListener("click", (e) => {
  let checkData = validateData();
  if (checkData) {
    let emailValue = email.value;
    let passwordValue = password.value;
    let emailExisted = false;
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].email === emailValue &&
        users[i].password === passwordValue
      ) {
        emailExisted = true;
        break;
      }
    }
    if (emailExisted) {
      toastr.success("Đăng ký thành công!", "Tiêu đề");
      setTimeout(() => {
        window.location.href = "./project.dashboard.html";
      }, 2000);
    } else {
    }
    toastr.error("Email hoac mat khau khong ton tai");
  }
});
console.log(users);
