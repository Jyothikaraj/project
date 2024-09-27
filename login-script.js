const storageInput = document.querySelector('.storage');
const LoginPage = document.getElementById('Login-Page');
LoginPage.addEventListener('submit', storeUserDetails);

function storeUserDetails(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get the form data
  const name = document.getElementById('name').value;
  const phoneNumber = document.getElementById('phone').value;

// Check if both fields are filled before proceeding
if (name === '' || phoneNumber === '') {
    alert('Please fill in both fields.');
    return; // Stop if fields are not filled
  }


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

// Reset the form
LoginPage.reset();

// Display a success message (instead of an alert)
document.getElementById('success-message').style.display = 'block';

 // Call a function to display the last signed-in user's details
 displayLastUser();
 displayAllUsers();
// Hide the success message after 3 seconds
setTimeout(() => {
    document.getElementById('success-message').style.display = 'none';
  }, 3000); // 3 seconds delay
}


// Function to display the last signed-in user
function displayLastUser() {
    // Retrieve the users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    // If there are users, display the last user
    if (users.length > 0) {
      const lastUser = users[users.length - 1]; // Get the last signed-in user
  
      // Update the HTML with the user's details
      document.getElementById('user-name').innerText = `Name: ${lastUser.name}`;
      document.getElementById('user-phone').innerText = `Phone: ${lastUser.phoneNumber}`;
  
      // Show the user details section
      document.getElementById('user-details').style.display = 'block';
    }
  }


  // Function to display all users
function displayAllUsers() {
    const usersList = document.getElementById('users-list');
    usersList.innerHTML = ''; // Clear the list before rendering
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Loop through each user and display their information
    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = `Name: ${user.name}, Phone: ${user.phoneNumber}`;
      usersList.appendChild(listItem);
    });
  }





  // Optionally, call the displayLastUser() function when the page loads to show the last signed-in user, if any.
  window.onload = function() {
    displayLastUser();
    displayAllUsers();
  };
