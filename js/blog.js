const brands = document.getElementById("menu3");
const cpu = document.getElementById("menu4");
const upload = document.getElementById("fileupload");
const laptopName = document.getElementById("laptopname");
const cpuCore = document.getElementById("CPU-S");
const cpuStream = document.getElementById("cpustream");
const laptopRam = document.getElementById("laptopram");
const dayBuy = document.getAnimations("date");
const price = document.getElementById("price");
const checkbox = document.getElementById("checkbox");
const memory = document.querySelector(".memory-tip");
const uploadButton = document.getElementById("button-upload");
const saveButton = document.querySelector(".save-button");
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
uploadButton.addEventListener("click", function () {
  let input = document.getElementById("fileupload");
  input.click();
});
saveButton.addEventListener("click", function () {
  hideErrorMessages();
  let isVallid = true;
  let checkboxValue = checkbox.value;
  let brandsValue = brands.value;
  let laptopNameValue = laptopName.value;
  let cpuValue = cpu.value;
  let memoryValue = memory.value;
  let cpuStreamValue = cpuStream.value;
  let cpuCoreValue = cpuCore.value;
  let laptopRamValue = laptopRam.value;
  let dayBuyValue = dayBuy.value;
  let priceValue = price.value;
  if (!priceValue == Number || priceValue.length < 2) {
    showErrorMessage(price);
    isVallid = false;
  }
  if (laptopRamValue.length < 2) {
    showErrorMessage(laptopRam);
    isVallid = false;
  }
  if (cpuCoreValue.length < 2) {
    showErrorMessage(cpuCore);
    isVallid = false;
  }
  if (cpuStreamValue.length < 2) {
    showErrorMessage(cpuStream);
    isVallid = false;
  }
  if (cpuValue == -1) {
    showErrorMessage(cpu);
    isVallid = false;
  }
  if (brandsValue == -1) {
    showErrorMessage(brands);
    isVallid = false;
  }
  if (isAlfabetVallid(laptopNameValue) || laptopNameValue.length < 3) {
    showErrorMessage(laptopName);
    isVallid = false;
  }

  if (isVallid) {
    window.location.href = "/popup.html";
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
document.addEventListener(
  "DOMContentLoaded",
  function () {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://pcfy.redberryinternship.ge/api/brands");
    xhr.onloadend = function () {
      let response = JSON.parse(xhr.response);
      for (i = 0; i < response.data.length; i++) {
        let tempdocument = document.createElement("option");
        tempdocument.classList.add("menu1value");
        tempdocument.value = response.data[i].id;
        tempdocument.innerText = response.data[i].name;
        brands.append(tempdocument);
      }
    };
    xhr.send();
  },
  false
);

document.addEventListener(
  "DOMContentLoaded",
  function () {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://pcfy.redberryinternship.ge/api/cpus");
    xhr.onloadend = function () {
      let response = JSON.parse(xhr.response);
      for (i = 0; i < response.data.length; i++) {
        let tempdocument = document.createElement("option");
        tempdocument.classList.add("menu1value");
        tempdocument.value = response.data[i].id;
        tempdocument.innerText = response.data[i].name;
        cpu.append(tempdocument);
      }
    };
    xhr.send();
  },
  false
);
