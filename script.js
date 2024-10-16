// Example: Handling form submission (you'll need a server-side solution for this)
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission
  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  // Send form data to a server (using AJAX or Fetch API)
  // Display a success message or handle errors
  alert(`Thank you, ${name}! Your message has been sent.`); 
});

function toggleSurprise() {
    var surpriseElement = document.getElementById('surprise');
    var button = document.getElementById('toggleButton');

    // Toggle visibility of the surprise content
    surpriseElement.classList.toggle('visible');

    // Change the button text based on the content visibility
    if (surpriseElement.classList.contains('visible')) {
        button.textContent = "Hide Animation!";
    } else {
        button.textContent = "Click Me!";
    }
}