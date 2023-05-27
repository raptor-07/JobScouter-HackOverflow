const fileInput = document.getElementById("pdfFileInput");

document
  .querySelector(".c-form__button")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", fileInput.files[0]);
    formData.append(
      "description",
      document.querySelector(".c-form__input").value
    );

    console.log("Form data:", formData);

    fetch("/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  });
