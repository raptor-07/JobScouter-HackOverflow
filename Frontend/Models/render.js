//To get the description and details from backend
function render(apiData) {
    var bodyElement = document.body;
    bodyElement.innerHTML = "";

    const template= `<div class="widget">
    <h1>Job Description</h1>
    <p>${job}</p>
    
    <div class="CTA">
      <h2>Company Name</h2>
    <p>${as}</p>
    
    <h2>Location</h2>
    <p>${as}</p>
    
    <h2>Job Type</h2>
    <p>${asd}</p>
    
    <h2>Accuracy</h2>
    <p class="value" count=${count}>0</p>
    
    <a href="apply.html" class="apply-btn">Apply Now</a>
    </div>
    </div>`
    document.getElementsByClassName('body') = "${template}";

}

module.exports =
    render;
