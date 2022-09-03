document.addEventListener(
  "DOMContentLoaded",
  function () {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://pcfy.redberryinternship.ge/api/teams");
    xhr.onloadend = function () {
      let response = JSON.parse(xhr.response);
      for (i = 0; i < response.data.length; i++) {
        let tempdocument = document.createElement("option");
        tempdocument.classList.add("menu1value");
        tempdocument.value = response.data[i].id;
        tempdocument.innerText = response.data[i].name;
        team.append(tempdocument);
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
    xhr.open("GET", "https://pcfy.redberryinternship.ge/api/positions");
    xhr.onloadend = function () {
      let response = JSON.parse(xhr.response);
      for (i = 0; i < response.data.length; i++) {
        let tempdocument = document.createElement("option");
        tempdocument.classList.add("menu1value");
        tempdocument.value = response.data[i].id;
        tempdocument.innerText = response.data[i].name;
        position.append(tempdocument);
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
        tempdocument.classList.add("menu2value");
        tempdocument.value = response.data[i].id;
        tempdocument.innerText = response.data[i].name;
        cpu.append(tempdocument);
      }
    };
    xhr.send();
  },
  false
);
