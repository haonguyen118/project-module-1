let users = JSON.parse(localStorage.getItem("users")) || [];
let editUser = document.querySelector(`#edit`);
let email = document.querySelector(`#email`);
let userName = document.querySelector(`#userName`);
let password = document.querySelector(`#password`);
let birthday = document.querySelector(`#birthday`);
let statusUser = document.querySelector(`#statusUser`);
// let addUser = document.querySelector(`#addUser`);
let tableUser = document.querySelector(`#tableUser`);
// Tao bien phan trang
let itemPerPage = 6;
let totalItem = users.length;
let totalPage = Math.ceil(totalItem / itemPerPage);
let currentPage = 1;
//Tao ham render du lieu ra bang
function renderUser() {
  let content = ` <tr>
                <th>User code</th>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Birthday</th>
                <th>Status</th>
                <th>Actions</th>
                 </tr>`;

  let start = (currentPage - 1) * itemPerPage;
  let end =
    start + itemPerPage > users.length ? users.length : start + itemPerPage;

  for (let i = start; i < end; i++) {
    content += ` <tr>
            <td>${users[i].id}</td>

            <td>${users[i].username}</td>
            <td>${users[i].email}</td>
            <td>${users[i].role}</td>
            <td>${users[i].birthday}</td>
            <td>${users[i].status}</td>
             <td >
             <i  onclick="updateUser(${i})" class=" edit  fa-solid fa-pen-to-square" ></i>
             <i  onclick="deletes(${i})" class="  deletes  fa-solid fa-trash" style="color: #1f4251;"></i>
               </td>
        </tr>`;
  }

  tableUser.innerHTML = content;
}
localStorage.setItem("users", JSON.stringify(users));

// render các trang
let contentPagination = "";
for (let i = 1; i <= totalPage; i++) {
  if (currentPage === i) {
    contentPagination += `  <button class="pagination" value="${i}">${i}</button>`;
  } else {
    contentPagination += `  <button class="pagination" value="${i}">${i}</button>`;
  }
}

pagination.innerHTML = contentPagination;

// xử lý sự kiện chuyển trang
let paginations = document.querySelectorAll(".pagination");

for (let i = 0; i < paginations.length; i++) {
  paginations[i].addEventListener("click", () => {
    let page = parseInt(paginations[i].getAttribute("value"));
    currentPage = page;
    renderUser();
  });
}
renderUser();
// tao ham edit user
function updateUser(index) {
  localStorage.setItem("updateUser", JSON.stringify(users[index]));
  window.location.href = "./project.edituser.html";
}
// tao ham xoa user
function deletes(index) {
  let confirmDelete = confirm("ban co chac muon xoa khong");
  if (confirmDelete) {
    users.splice(index, 1);
    renderUser();
    localStorage.setItem("users", JSON.stringify(users));
  }
}
