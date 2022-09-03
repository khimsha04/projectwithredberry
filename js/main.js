const nextButton = document.querySelector(".next");
const username = document.getElementById("username");
const surname = document.getElementById("surname");
const team = document.getElementById("menu1");
const position = document.getElementById("menu2");
const email = document.getElementById("email");
const telNumber = document.getElementById("telnumber");

const alfabet = [
  "ა",
  "ბ",
  "გ",
  "დ",
  "ე",
  "ვ",
  "ზ",
  "თ",
  "ი",
  "კ",
  "ლ",
  "მ",
  "ნ",
  "ო",
  "პ",
  "ჯ",
  "რ",
  "ს",
  "ტ",
  "უ",
  "ფ",
  "ქ",
  "ღ",
  "შ",
  "ჩ",
  "ც",
  "ძ",
  "წ",
  "ჭ",
  "ხ",
  "ჯ",
  "ჰ",
];

nextButton.addEventListener("click", function () {
  hideErrorMessages();
  let usernameValue = username.value;
  let surnameValue = surname.value;
  let selectVaule = team.value;
  let emailValue = email.value;
  let positionValue = position.value;
  let telNumberValue = telNumber.value;
  let isEmailVallid =
    emailValue.length > 0 &&
    emailValue.endsWith("@redberry.ge") &&
    !emailValue.startsWith("@redberry.ge");

  let isTelNumberVallid =
    telNumberValue.startsWith("995") && telNumberValue.length == 12;

  let isVallid = true;
  if (usernameValue.length < 3 || !isAlfabetVallid(usernameValue)) {
    showErrorMessage(username);
    isVallid = false;
  }
  if (!isEmailVallid) {
    showErrorMessage(email);
    isVallid = false;
  }
  if (!isTelNumberVallid) {
    showErrorMessage(telNumber);
    isVallid = false;
  }
  if (surnameValue.length < 3 || !isAlfabetVallid(usernameValue)) {
    showErrorMessage(surname);
    isVallid = false;
  }
  if (selectVaule == -1) {
    showErrorMessage(team);
    isVallid = false;
  }
  if (positionValue == -1) {
    showErrorMessage(position);
    isVallid = false;
  }

  if (isVallid) {
    window.location.href = "/blog.html";
  }
});

function showErrorMessage(input) {
  let tagName = input.tagName;
  input.classList.add("invalid-border");
  if (tagName != "SELECT") {
    input.parentElement.children[0].classList.add("invalid");
    input.parentElement.children[2].classList.add("invalid");
  }
}

function hideErrorMessages() {
  let elements = document.querySelectorAll(".invalid-border,.invalid");
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove("invalid-border");
    elements[i].classList.remove("invalid");
  }
}
function isAlfabetVallid(stringValue) {
  for (let i = 0; i < stringValue.length; i++) {
    if (!alfabet.includes(stringValue[i])) {
      return false;
    }
  }
  return true;
}
