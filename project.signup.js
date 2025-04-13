let users = JSON.parse(localStorage.getItem("users")) || [];
let email = document.querySelector(`#email`);
let userName = document.querySelector(`#userName`);
let password = document.querySelector(`#password`);
let errorEmail = document.querySelector(`#errorEmail`);
let errorPass = document.querySelector(`#errorPass`);
let errorUserName = document.querySelector(`#errorUserName`);
let signup = document.querySelector(`#signup`);

function validateData() {
  let result = true;
  let emailValue = email.value;
  let passwordValue = password.value;
  let userNameValue = userName.value;
  let patternEmail = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
  let patternPassword = /^(?=.*[A-Z])(?=.*[a-z]).{8,}$/;
  if (emailValue === "") {
    errorEmail.innerHTML = "Email khong đuoc bỏ trống";
    result = false;
  } else if (!patternEmail.test(emailValue)) {
    errorEmail.innerHTML = "Email khong đúng định dạng";
    result = false;
  } else {
    errorEmail.innerHTML = "";
  }
  if (userNameValue === "") {
    errorUserName.innerHTML = " Username khong đuoc bỏ trống";
    result = false;
  } else {
    errorUserName.innerHTML = "";
  }
  if (passwordValue === "") {
    errorPass.innerHTML = " Password khong đuoc bỏ trống";
    result = false;
  } else if (!patternPassword.test(passwordValue)) {
    errorPass.innerHTML =
      "Password phai toi thieu 8 ki tu so bao gom chu in hoa va in thuong";
    result = false;
  } else {
    errorPass.innerHTML = "";
  }
  return result;
}
signup.addEventListener("click", (e) => {
  let checkEmpty = validateData();
  if (checkEmpty) {
    let emailValue = email.value;
    let userNameValue = userName.value;
    let passwordValue = password.value;
    let emailExisted = false;
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === emailValue) {
        emailExisted = true;
        toastr.error("Email đã tồn tại");

        break;
      }
    }

    let currentId = users.length === 0 ? 1 : users[users.length - 1].id + 1;
    if (!emailExisted) {
      let newUser = {
        id: currentId,
        email: emailValue,
        username: userNameValue,
        password: passwordValue,
        role: "user",
        birthday: "",
        status: "Active",
      };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      currentId++;
      toastr.success("Đây là thông báo thành công!", "Tiêu đề");
      setTimeout(() => {
        window.location.href = "../project HTML/project.signin.html";
        // window.location.href = "../project HTML/project.dashboard.html";
      }, 2000);
    }
  } else {
  }
});
