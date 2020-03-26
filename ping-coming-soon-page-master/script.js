const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", e => {
  e.preventDefault();

  //email validation
  const email = form["email"];
  const emailValue = email.value;
  const small = form.querySelector("small");

  if (!emailValue) {
    //empty
    email.classList.add("error");
    email.innerText = "Email field cannot be blank !";
    small.style.display = "inline-block";
  } else if (!validateEmail(emailValue)) {
    //invalid
    email.classList.add("error");
    email.innerText = "Email is invalid !";
    small.style.display = "inline-block";
  } else {
    //submit
    email.classList.remove("error");
    email.innerText = "";
    small.style.display = "none";
  }
});

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
