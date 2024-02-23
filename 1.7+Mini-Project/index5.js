document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Collect form data
    const formData = new FormData(this);
    
    // Log form data to console (you can process it as per your requirement)
    for (const entry of formData.entries()) {
      console.log(entry[0] + ": " + entry[1]);
    }
  });
  