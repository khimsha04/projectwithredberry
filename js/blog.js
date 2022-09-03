const brands = document.getElementById("menu3");
const cpu = document.getElementById("menu4");
const laptopName = document.getElementById("laptopname");
const cpuCore = document.getElementById('"CPU-S');
const cpuStream = document.getElementById("cpustream");
const laptopRam = document.getElementById("laptopram");
const dayBuy = document.getAnimations("date");
const price = document.getElementById("price");
const otherWord = "!@#$%^&*()_+=";
const saveButton = document.querySelector(".save-button");

saveButton.addEventListener("click", function () {
  let brandsValue = brands.value,
    cpuValue = cpu.value,
    laptopNameValue = laptopName.value,
    cpuCoreValue = cpuCore.value,
    spuStreamValue = cpuStream.value,
    laptopRamValue = laptopRam.value,
    dayBuyValue = dayBuy.value,
    priceValue = price.value;

  if (isVallid) {
    window.location.href = "/blog.html";
  }
});
