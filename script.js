// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    var form = document.querySelector('form');
  
    // Add a submit event listener to the form
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting
  
      // Perform custom form validation
      var phoneNumberInput = document.getElementById('phonenum');
      var phoneNumber = phoneNumberInput.value;
  
      if (phoneNumber.length < 10 || isNaN(phoneNumber)) {
        alert('Please enter a valid phone number with at least 10 digits and no characters.');
        phoneNumberInput.focus(); // Set focus on the phone number input field
        return;
      }
  
      // If validation passes, you can proceed with form submission or further processing
      // Uncomment the following line to submit the form
      // form.submit();
  
      // Alternatively, you can perform additional processing here
  
      // Reset the form
      form.reset();
    });
  });
  