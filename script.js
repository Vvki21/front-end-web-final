function submitForm() {
    // Get form values
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var breed = document.getElementById('breed').value;
    var question = document.getElementById('question').value;

    // Simple validation
    if (!name || !phone || !breed || !question) {
        alert('Please fill in all fields.');
        return;
    }

    // Display response
    var responseDiv = document.getElementById('response');
    responseDiv.innerHTML = `Thank you, ${name}! We'll get back to you soon.`;

    // You can add code here to send the form data to a server using AJAX/fetch.
    // For simplicity, this example does not include a server-side component.
}
