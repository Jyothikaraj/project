// Handling dynamic text input and saving to local storage
const storageInput = document.querySelector('.storage');
const text = document.querySelector('.text');
const submit = document.querySelector('.submit');
const storedInput = localStorage.getItem('textinput');

if (storedInput) {
    text.textContent = storedInput;
}

storageInput.addEventListener('input', (letter) => {
    text.textContent = letter.target.value;
});

const saveToLocalStorage = () => {
    localStorage.setItem('textinput', text.textContent);
};

button.addEventListener('click', saveToLocalStorage);

// Handling form submission and storing user details
const LoginPage = document.getElementById('Login-Page');
LoginPage.addEventListener('submit', storeUserDetails);

function storeUserDetails(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phoneNumber = document.getElementById('phone').value;

    if (name === '' || phoneNumber === '') {
        alert('Please fill in both fields.');
        return;
    }

    const user = { name: name, phoneNumber: phoneNumber };

    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);

    localStorage.setItem('users', JSON.stringify(users));

    LoginPage.reset();

    document.getElementById('success-message').style.display = 'block';

    displayLastUser();
    displayAllUsers();

    setTimeout(() => {
        document.getElementById('success-message').style.display = 'none';
    }, 3000);
}

// Function to display the last signed-in user
function displayLastUser() {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.length > 0) {
        const lastUser = users[users.length - 1];

        document.getElementById('user-name').innerText = `Name: ${lastUser.name}`;
        document.getElementById('user-phone').innerText = `Phone: ${lastUser.phoneNumber}`;

        document.getElementById('user-details').style.display = 'block';
    }
}

// Function to display all users
function displayAllUsers() {
    const usersList = document.getElementById('users-list');
    usersList.innerHTML = '';

    const users = JSON.parse(localStorage.getItem('users')) || [];

    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${user.name}, Phone: ${user.phoneNumber}`;
        usersList.appendChild(listItem);
    });
}

// Call these functions when the page loads to show the last signed-in user and all users
window.onload = function() {
    displayLastUser();
    displayAllUsers();
};