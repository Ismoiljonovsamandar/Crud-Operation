let elFrom = document.querySelector(".login__form");
let elInputEmail = document.querySelector(".login__email_label");
let elInputPassword = document.querySelector(".login__email_label");
elFrom.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const data = {
    email: evt.target[0].value,
    password: evt.target[1].value,
  };
  window.localStorage.setItem("user", JSON.stringify(data));
  setTimeout(() => {
    window.location = "/index.html";
  }, 2000);
});
