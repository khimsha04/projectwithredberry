// document.addEventListener(
//   "DOMContentLoaded",
//   function () {
//     let xhr = new XMLHttpRequest();
//     xhr.open(
//       "GET",
//       "https://pcfy.redberryinternship.ge/api/laptops?token=684f505aeb82cda5c2f1d54da4ffb8ef"
//     );
//     xhr.onloadend = function () {
//       let response = JSON.parse(xhr.response);
//       for (i = 0; i < response.data.length; i++) {
//         let tempdocument = document.createElement("option");
//         tempdocument.classList.add("menu1value");
//         tempdocument.value = response.data[i].id;
//         tempdocument.innerText = response.data[i].name;
//         team.append(tempdocument);
//       }
//     };
//     xhr.send();
//   },
//   false
// );

// document.addEventListener(
//   "DOMContentLoaded",
//   function () {
//     let xhr = new XMLHttpRequest();
//     xhr.open(
//       "GET",
//       "https://pcfy.redberryinternship.ge/api/laptops?token=684f505aeb82cda5c2f1d54da4ffb8ef&id=" +
//         1
//     );
//     xhr.onloadend = function () {
//       let response = JSON.parse(xhr.response);
//       console.log(response);
//     };
//     xhr.send();
//   },
//   false
// );

// document.addEventListener(
//   "DOMContentLoaded",
//   function () {
//     let xhr = new XMLHttpRequest();
//     xhr.open(
//       "POST",
//       "https://pcfy.redberryinternship.ge/api/laptops?token=684f505aeb82cda5c2f1d54da4ffb8ef"
//     );
//     xhr.onloadend = function () {
//       let response = JSON.parse(xhr.response);
//       for (i = 0; i < response.data.length; i++) {
//         let tempdocument = document.createElement("option");
//         tempdocument.classList.add("menu1value");
//         tempdocument.value = response.data[i].id;
//         tempdocument.innerText = response.data[i].name;
//         team.append(tempdocument);
//       }
//     };
//     let leptop = {
//       name: "zuka",
//       surname: "khimsha",
//       team_id: 1,
//       position_id: 1,
//       phone_number: "995598363007",
//       email: "zuka@redberry.ge",
//     };
//     xhr.send(leptop);
//   },
//   false
// );
