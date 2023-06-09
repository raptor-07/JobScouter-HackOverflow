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
        console.log("response: ", response, typeof response.data);

        render(response);

        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

//To get the description and details from backend
function render(apiData) {
  let body = document.querySelector("body");
  body.innerHTML = "";
  // Initialize a variable to store the concatenated HTML
  console.log(typeof apiData);

  apiData.forEach((job) => {
    const {
      job_description,
      employer_name,
      job_country,
      job_employment_type,
      job_apply_link,
      similarity_score,
    } = job; // Destructure the properties from the job object

    const template = `<div class="widget">
      <h1>Job Description</h1>
      <p>${job_description}</p>
      
      <div class="CTA">
        <h2>Company Name</h2>
        <p>${employer_name}</p>
      
        <h2>Location</h2>
        <p>${job_country}</p>
      
        <h2>Job Type</h2>
        <p>${job_employment_type}</p>
      
        <h2>Accuracy</h2>
        <p class="value" count=${similarity_score}>0</p>
      
        <a href=${job_apply_link} class="apply-btn">Apply Now</a>
      </div>
    </div>`;

    body += template; // Concatenate the template with the existing HTML
  });

  console.log(body); // Output the final concatenated HTML

  // <a href="apply.html" class="apply-btn">Apply Now</a>
  // </div>
  // </div>`
  // document.getElementsByClassName('body') = "${template}";
}
