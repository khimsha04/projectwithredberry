const nextButton = document.querySelector(".next");
const username = document.getElementById("username");
const surname = document.getElementById("surname");
const team = document.getElementById("menu1");
const position = document.getElementById("menu2");
const email = document.getElementById("email");
const emailEnd = " zuka " + "@redberry.ge";

const alfabet = "ა,ბ,გ,დ";
nextButton.addEventListener("click", function () {
  let usernameValue = username.value;
  let surnameValue = surname.value;
  let selectVaule = team.value;
  let emailValue = email.value;

  let isVallid = true;
  if (usernameValue.length < 3 || checkAlfabet(usernameValue)) {
    showErrorMessage(username);
    isVallid = false;
  }
  if (emailValue != emailEnd) {
    showErrorMessage(email);
    isVallid = false;
  }
  if (surnameValue.length < 3) {
    showErrorMessage(surname);
    isVallid = false;
  }

  if (isVallid) {
    window.location.href = "/blog.html";
  }
  if (selectVaule == -1) {
    showErrorMessage(team);
    isVallid = false;
  }
  if (selectVaule == -1) {
    showErrorMessage(position);
    isVallid = false;
  }
});

function showErrorMessage(input) {
  let tagName = input.tagName;
  input.classList.add("red");
  if (tagName != "SELECT") {
    input.parentElement.children[0].style.color = "red";
    input.parentElement.children[2].style.color = "red";
  }
}
function checkAlfabet(stringValue) {
  for (let i = 0; i < stringValue.length; i++) {
    if (!alfabet.includes(stringValue[i])) {
      return false;
    }
  }
  return true;
}
