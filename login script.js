const LoginPage = document.getElementById('Login Page');
LoginPage.addEventListener('submit', storeUserDetails);

function storeUserDetails(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get the form data
  const name = document.getElementById('name').value;
  const phoneNumber = document.getElementById('phone').value;

  // Create a user object
  const user = {
    name: name,
    phoneNumber: phoneNumber,
  };

  // Get the existing users from local storage or initialize an empty array
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Add the new user to the array
  users.push(user);

  // Store the updated user array in local storage
  localStorage.setItem('users', JSON.stringify(users));

  // Display a success message
  alert('User details saved successfully!');

  // Reset the form
  LoginPage.reset();

  // Log the current users in local storage to the console
  console.log(localStorage.getItem('users'));
}
