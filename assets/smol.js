const submitButton = document.getElementById("submit-button");

if (submitButton) {
    fetch('/smol.json').then(r => r.json()).then(({ project }) => {
        // set the fillout button's hidden field to `project`
        submitButton.dataset.program_slack_channel = project;
    })
} else {
    alert("Submit button not found. Please check the ID of the submit button.");
}