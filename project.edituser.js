let user = JSON.parse(localStorage.getItem("updateUser")) || null;
let users = JSON.parse(localStorage.getItem("users")) || [];
let userCode = document.querySelector(`#id`);
let email = document.querySelector(`#email`);
let userName = document.querySelector(`#userName`);
let password = document.querySelector(`#password`);
let errorEmail = document.querySelector(`#errorEmail`);
let errorPass = document.querySelector(`#errorPass`);
let errorUserName = document.querySelector(`#errorUserName`);
let birthday = document.querySelector(`#birthday`);
let description = document.querySelector(`#Description`);
let updateUser = document.querySelector(`#updateUser`);
let statusUser = document.getElementsByName("Active");
// let currentId = users.length === 0 ? 1 : users[users.length - 1].id + 1;
let deleteUser = document.querySelector(".delete");
console.log(`updateUser`);

if (user !== null) {
  userCode.value = user.id;
  email.value = user.email;
  userName.value = user.username;
  password.value = user.password;
  birthday.value = user.birthday;
  role.value = user.role;
  for (let i = 0; i < statusUser.length; i++) {
    if (statusUser[i].value === user.status) {
      statusUser[i].checked = true;
      break;
    }
  }
}

console.log(user);
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
updateUser.addEventListener("click", (e) => {
  let checkEmpty = validateData();
  if (checkEmpty) {
    let emailUpdate = email.value;
    let userNameUpdate = userName.value;
    let passwordUpdate = password.value;
    let roleUpdate = role.value;
    let birthdayUpdate = birthday.value;
    let statusUpdate = document.querySelector(
      `input[name="Active"]:checked`
    ).value;
    let descriptionUpdate = description.value;

    let update = {
      id: userCode.value,
      email: emailUpdate,
      username: userNameUpdate,
      password: passwordUpdate,
      role: roleUpdate,
      birthday: birthdayUpdate,
      status: statusUpdate,
      description: descriptionUpdate,
    };
    console.log(update.id);
    let index = -1;
    for (let i = 0; i < users.length; i++) {
      console.log(users[i].id);
      if (users[i].id == update.id) {
        index = i;

        break;
      }
    }
    if (index >= 0) {
      console.log(index);
      users[index] = update;
      console.log(update);
      console.log(index);

      localStorage.setItem("users", JSON.stringify(users));
      alert("Update thành công");
      window.location.href = "./project.dashboard.html";
    }
  } else {
    alert("Update khong thanh cong!");
  }
});
