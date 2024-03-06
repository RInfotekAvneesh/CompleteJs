var add_btn = document.querySelector("#add-btn");
var modal = document.querySelector(".modal");
var closeBtn = document.querySelector(".close-icon");
var registerBtn = document.querySelector("#registerBtn");
var updateBtn = document.querySelector("#updateBtn");
var id = document.querySelector("#id");
var name = document.querySelector("#fname");
var lname = document.querySelector("#lname");
var email = document.querySelector("#email");
var office_code = document.querySelector("#office-code");
var job_title = document.querySelector("#job-title");
var registerFormBtn = document.querySelector("#registerForm");
var userData = [];
var imgUrl;
registerFormBtn.onsubmit = function (e) {
  e.preventDefault();
  registrationData();
  registerFormBtn.reset("");
  closeBtn.close();
};

add_btn.onclick = function () {
  modal.classList.add("active");
};
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

registerBtn.onclick = function () {
  registrationData();
};
if (localStorage.getItem("userData") != null) {
  userData = JSON.parse(localStorage.getItem("userData"));
}
function registrationData() {
  userData.push({
    id: id.value,
    name: fname.value,
    lname: lname.value,
    email: email.value,
    office_code: office_code.value,
    job_title: job_title.value,
    profilePic: imgUrl == undefined ? "img/avatar.png" : imgUrl,
  });
  var userString = JSON.stringify(userData);
  localStorage.setItem("userData", userString);
}
// start returning data on page from local storage
var tableData = document.querySelector("#table-data");
const getDataFromLocalStorage = () => {
  tableData.innerHTML = "";
  userData.forEach((data, index) => {
    tableData.innerHTML += `
   <tr>
   <td>${index + 1}</td>
   <td><img src=${data.profilePic} width="40" height="40"></td>
   <td>${data.id}</td>
   <td>${data.name}</td>
   <td>${data.lname}</td>
   <td>${data.email}</td>
   <td>${data.office_code}</td>
   <td>${data.job_title}</td>
   <td>
       <button class="fa fa-eye"></button>
       <button class="fa fa-trash" style="background-color: red;"></button>
   </td>


</tr>
   
   `;
  });
};
getDataFromLocalStorage();
// image processing
var profilePic = document.querySelector("#profile-pic");
var uploadPic = document.querySelector("#upload-field");
uploadPic.onchange = function () {
  if (uploadPic.files[0].size < 1000000) {
    var fReader = new FileReader();
    fReader.onload = function (e) {
      imgUrl = e.target.result;
      profilePic.src = imgUrl;
    };
    fReader.readAsDataURL(uploadPic.files[0]);
  } else {
    alert("file size is too long");
  }
};
