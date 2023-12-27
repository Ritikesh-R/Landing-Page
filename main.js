function changeVideo(videoId) {
    // Get the iframe element
    var iframe = document.querySelector('#video-container iframe');

    // Construct the new video URL
    var newSrc = 'https://www.youtube.com/embed/' + videoId;

    // Set the new video URL
    iframe.src = newSrc;
  }

  function validateFormAndRedirect() {
    // Validate the form fields here
    var fullName = document.getElementById("fullName").value;
    var companyName = document.getElementById("companyName").value;
    var email = document.getElementById("email").value;
    var mobileNumber = document.getElementById("mobileNumber").value;

    if (fullName === "" || companyName === "" || email === "" || mobileNumber === "") {
        alert("Please fill in all the fields");
        return false; // Prevent form submission
    }

    // If all fields are filled, you can redirect to a different page
    // Replace 'your_destination_page.html' with the actual URL of the page you want to navigate to
    window.location.href = 'pay-now.html';

    // Prevent form submission (optional, as the redirection will interrupt the form submission)
    return false;
}

$(document).ready(function(){
  $('.our-trusted-partners-logo').slick({
      autoplay: true,
      autoplaySpeed: 500, // Set the speed of automatic scrolling in milliseconds
      slidesToShow: 6, // Set the number of logos visible at a time
      slidesToScroll: 1, // Set the number of logos to scroll at a time
      dots: false, // Enable navigation dots
      arrows: false, // Hide previous and next buttons
      responsive: [
        {
          breakpoint: 768, // Breakpoint for mobile devices
          settings: {
            slidesToShow: 2, // Set the number of screenshots visible at a time for mobile view
          }
        }
      ]
  });
});

$(document).ready(function(){
  $('.pay-screenshot').slick({
      autoplay: true,
      autoplaySpeed: 500, // Set the speed of automatic scrolling in milliseconds
      slidesToShow: 2, // Set the number of screenshots visible at a time for larger screens
      slidesToScroll: 1, // Set the number of screenshots to scroll at a time
      dots: false, // Enable navigation dots
      arrows: false, // Hide previous and next buttons

      responsive: [
        {
          breakpoint: 768, // Breakpoint for mobile devices
          settings: {
            slidesToShow: 1, // Set the number of screenshots visible at a time for mobile view
          }
        }
      ]
  });
});

function openPaymentGateway() {
  // Replace 'your_payment_gateway_link' with the actual link to your payment gateway
  var paymentGatewayLink = 'https://paytm.com/login';

  // Open the payment gateway link in a new window or tab
  var paymentWindow = window.open(paymentGatewayLink, '_blank');

  // Check if the payment window is closed (user finished the payment)
  var checkPaymentStatus = setInterval(function() {
      if (paymentWindow.closed) {
          clearInterval(checkPaymentStatus);

          // Assuming the payment is successful, show a congratulations popup
          showCongratulationsPopup();
      }
  }, 1000); // Check every 1 second if the payment window is closed
}

function showCongratulationsPopup() {
  // Create a new element for displaying the congratulations message in bold
  var boldCongratsMessage = document.createElement("p");
  var boldText = document.createElement("strong");
  boldText.textContent = "Congratulations!";
  boldCongratsMessage.appendChild(boldText);

  // Append the bold message to the body or any other container element on your page
  document.body.appendChild(boldCongratsMessage);

  // Create a new element for displaying the regular text
  var regularText = document.createElement("p");
  regularText.textContent = "Your payment has been done successfully.";

  // Append the regular text to the body or any other container element on your page
  document.body.appendChild(regularText);

  // Optionally, you can hide or disable the button after successful payment
  var payNowButton = document.querySelector(".pay-now-btn");
  payNowButton.disabled = true;
}