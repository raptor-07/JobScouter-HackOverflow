let selectedFile;
const fileInput = document.getElementById("pdfFileInput");
fileInput.addEventListener("change", async function (event) {
  selectedFile = await event.target.files[0];
  console.log(typeof selectedFile, selectedFile); // Output: File object representing the selected PDF file
});

document
  .querySelector(".button-54")
  .addEventListener("click", async function (e) {
    console.log("hello");

    const description = document.querySelector(".c-form__input").value;
    console.log(description);

    const data = {
      pdfFile: selectedFile,
      description: description,
    };

    const jsonData = await JSON.stringify(data);
    console.log(jsonData);

    await fetch("http://localhost:5000/BE1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
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
