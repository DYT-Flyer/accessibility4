$(document).ready(function() {
  $('form').on('submit', function(e) {
    var isValid = true;

    // Check each required input in the form.
    $(this).find(':required').each(function() {
      if (!this.value.trim()) {
        isValid = false;
      }
    });

    // If the form is not valid, prevent the default form submission and show an alert.
    if (!isValid) {
      e.preventDefault(); // Stop the form from submitting
      alert("Please fill out all fields."); // Show the alert popup
    }
  });
});
