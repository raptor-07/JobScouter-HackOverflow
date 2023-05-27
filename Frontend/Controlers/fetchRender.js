const fileInput = document.getElementById("pdfFileInput");

document
  .querySelector(".c-form__button")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const jsonData = {
      file: fileInput.files[0],
      description: document.querySelector(".c-form__input").value,
    };

    console.log(jsonData);
    fetch(" http://localhost:5000/BE1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
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
