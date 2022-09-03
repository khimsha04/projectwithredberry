const brands = document.getElementById("menu3");
const cpu = document.getElementById("menu4");
const upload = document.getElementById("fileupload");
const laptopName = document.getElementById("laptopname");
const cpuCore = document.getElementById('"CPU-S');
const cpuStream = document.getElementById("cpustream");
const laptopRam = document.getElementById("laptopram");
const dayBuy = document.getAnimations("date");
const price = document.getElementById("price");
const otherWord = "!@#$%^&*()_+=";
const uploadButton = document.getElementById("button-upload");
const saveButton = document.querySelector(".save-button");
uploadButton.addEventListener("click", function () {
  let input = document.getElementById("fileupload");
  input.click();
});
saveButton.addEventListener("click", function () {
  let brandsValue = brands.value,
    cpuValue = cpu.value,
    laptopNameValue = laptopName.value,
    cpuCoreValue = cpuCore.value,
    spuStreamValue = cpuStream.value,
    laptopRamValue = laptopRam.value,
    dayBuyValue = dayBuy.value,
    priceValue = price.value,
    uploadValue = upload.value;
  let isVallid = true;

  if (brandsValue == -1) {
    showErrorMessage(brands);
    isVallid = false;
  }
  if (cpuValue == -1) {
    showErrorMessage(cpu);
    isVallid = false;
  }
  if (isVallid) {
    window.location.href = "/popup.html";
  }
});
