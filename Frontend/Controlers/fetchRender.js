const fileInput = document.getElementById("pdfFileInput");
const file = fileInput.files[0];

const formData = new FormData();
formData.append("pdfFile", file);

const search = document.querySelector(".c-form__button");
console.log(search);

fetch("http://127.0.0.1:5000/BE1", {
  method: "POST",
  body: formData,
})
  .then((response) => {
    // Handle response from the backend
  })
  .catch((error) => {
    // Handle error
  });

document.querySelector(".button-54").addEventListener("click", function (e) {});
