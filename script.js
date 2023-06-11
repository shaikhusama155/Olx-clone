var categories = [
  "Mobile Phones",
  "Cars",
  "Motercycles",
  "House",
  "Tv - Video - Audio",
  "Tablets",
  "Land & Ports"
]

categories.map((data) => {
  document.getElementById("links").innerHTML += `
  <button onclick="categorySet(this)">${data}</button>
  `
})

function showData() {
  var data = JSON.parse(localStorage.getItem("users"))
  var email = localStorage.getItem("email")
  var isAuthenticated = localStorage.getItem("isAuthenticated")
  for (let i = 0; i < data.length; i++) {
      if (email == data[i].email && isAuthenticated === "true") {
          document.getElementById("login__sell").innerHTML = `
 <img class="avatar" onclick="profilePage()" width="60px"src="./img/icon.png" />
           <button onclick="sell()" class="sell__btn">+ Sell</button>
          `
      }
  }
}

function sell() {
  var data = JSON.parse(localStorage.getItem("users"))
  var email = localStorage.getItem("email")
  var isAuthenticated = localStorage.getItem("isAuthenticated")
  var flage = true;
  for (let i = 0; i < data.length; i++) {
      if (email == data[i].email && isAuthenticated === "true") {
          flage = false
          window.location.href = "./sell.html"
      }
  }
  if (flage === true) {
      document.getElementById("login").classList.remove("hidden")
  }
}

function profilePage() {
  window.location.href = "./profile.html"
}
showData()
var data = JSON.parse(localStorage.getItem("products")) || []
data.map((card, index) => {
  document.getElementById("cards").innerHTML += `
             <div onclick="productDetail(${index})" class="card">
                 <div class="img__featured">
                     <img src="${card.image}" alt="">
                     <p class="featured">featured</p>
                 </div>
                 <div class="card__content">
                     <div class="card__content-gap">
                         <div class="name__heart">
                             <h4>${card.name}</h4>
                             <i class="fa-solid fa-heart"></i>
                         </div>
                         <h2>Rs ${card.price}</h2>
                     </div>
                     <h5>${card.location}</h5>
                 </div>
             </div>
  `

})

function productDetail(index) {
  console.log(data);
  localStorage.setItem("productName", data[index].name)
  localStorage.setItem("name", data[index].profileName)
  localStorage.setItem("description", data[index].description)
  localStorage.setItem("image", data[index].image)
  localStorage.setItem("price", data[index].price)
  localStorage.setItem("location", data[index].location)
  localStorage.setItem("phone", data[index].profilePhone)
  localStorage.setItem("phoneShow", data[index].phoneShow)
  window.location.href = "./productDetails.html"
}

function openLogin() {
  document.getElementById("login").classList.remove("hidden");
}

function closeLogin() {
  document.getElementById("login").classList.add("hidden")
}

function emailLogin() {
  document.getElementById("email").classList.remove("hidden");
  document.getElementById("login").classList.add("hidden")
}

function closeEmail() {
  document.getElementById("email").classList.add("hidden")
}

function backEmail() {
  document.getElementById("email").classList.add("hidden")
  document.getElementById("login").classList.remove("hidden");
}

function phoneLogin() {
  document.getElementById("phone").classList.remove("hidden");
  document.getElementById("login").classList.add("hidden")
}

function closePhone() {
  document.getElementById("phone").classList.add("hidden")
}

function backPhone() {
  document.getElementById("phone").classList.add("hidden")
  document.getElementById("login").classList.remove("hidden");
}

function createAccountPage() {
  document.getElementById("signUp").classList.remove("hidden");
  document.getElementById("login").classList.add("hidden")
}

function closeSignUp() {
  document.getElementById("signUp").classList.add("hidden")
}

function backSignUp() {
  document.getElementById("signUp").classList.add("hidden")
  document.getElementById("login").classList.remove("hidden");
}

function signUp() {
  let data = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
  let flage = false
  for (let i = 0; i < data.length; i++) {
      if (data[i].email === document.getElementById("signEmail").value) {
          flage = true
          alert("You have entered a duplicate email address")
      }
  }
  if (flage === false) {

      let users = []
      let obj = {
          name: document.getElementById("name").value,
          email: document.getElementById("signEmail").value,
          gender: document.getElementById("gender").value,
          phone: document.getElementById("signphone").value,
          isAuthenticated: true
      }
      users = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []

      users.push(obj)
      localStorage.setItem("users", JSON.stringify(users))
      document.getElementById("signUp").classList.add("hidden");
      document.getElementById("email").classList.remove("hidden");
  }
}

function login() {
  let email = document.getElementById("emailLogin").value;
  let users = JSON.parse(localStorage.getItem("users")) || []
  var flage = false;
  for (let i = 0; i < users.length; i++) {
      if (users[i].email === email) {
          flage = true;
          alert("You have successfully Login");
          localStorage.setItem("name", users[i].name);
          localStorage.setItem("email", email);
          localStorage.setItem("phone", users[i].phone);
          localStorage.setItem("gender", users[i].gender);
          localStorage.setItem("isAuthenticated", users[i].isAuthenticated);
          window.location.reload()
          break;
      }
  }
  if (flage === false) {
      alert("Please enter a valid email and password");
  }
}

function loginPhone() {
  let email = document.getElementById("phoneLogin").value;
  let users = JSON.parse(localStorage.getItem("users"))
  var flage = false;
  for (let i = 0; i < users.length; i++) {
      if (users[i].phone === phone) {
          flage = true;
          alert("You have successfully Login");
          localStorage.setItem("name", users[i].name);
          localStorage.setItem("email", email);
          localStorage.setItem("phone", user[i].phone);
          localStorage.setItem("isAuthenticated", user[i].isAuthenticated);
          document.getElementById("phone").classList.add("hidden")
          if (flage == false) {
              alert("Please enter a valid email and password");
          }
      }
  }
}